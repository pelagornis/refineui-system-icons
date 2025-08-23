const fs = require("fs");
const path = require("path");

// 메타데이터 파일들 읽기
const iconsMetadataPath = path.join(__dirname, "../metadata/icons.json");
const iconMappingPath = path.join(__dirname, "../fonts/icon-mapping.json");

const iconsMetadata = JSON.parse(fs.readFileSync(iconsMetadataPath, "utf8"));
const iconMapping = JSON.parse(fs.readFileSync(iconMappingPath, "utf8"));

// 아이콘 이름 정규화 함수
function normalizeIconName(iconKey) {
  // ic_refineui_gavel_28_regular -> Gavel
  const match = iconKey.match(/ic_refineui_([a-z]+)_\d+_(regular|filled)/);
  if (!match) return null;

  const [, name, style] = match;
  // 첫 글자를 대문자로 변환
  const normalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  return { name: normalizedName, style };
}

// metadata/icons.json에서 모든 아이콘 이름 추출
const uniqueIcons = new Set();
Object.keys(iconsMetadata.icons).forEach((iconKey) => {
  const iconInfo = iconsMetadata.icons[iconKey];
  if (iconInfo && iconInfo.name) {
    uniqueIcons.add(iconInfo.name);
  }
});

// 메타데이터 생성 함수
function generateMetadata() {
  const metadata = {
    totalIcons: uniqueIcons.size,
    supportedSizes: iconsMetadata.supported_sizes,
    supportedStyles: iconsMetadata.supported_styles,
    fontFamilies: iconMapping.styles,
    icons: {},
  };

  // 각 아이콘에 대한 정보 생성
  Array.from(uniqueIcons).forEach((iconName) => {
    const iconKey = iconName.toLowerCase();
    const iconInfo = iconsMetadata.icons[iconKey];

    if (iconInfo) {
      metadata.icons[iconName] = {
        name: iconName,
        slug: iconKey,
        size: iconInfo.size,
        style: iconInfo.style,
        keyword: iconInfo.keyword,
        description: iconInfo.description,
        files: iconInfo.files,
        unicodeMapping: {},
      };

      // 유니코드 매핑 추가
      Object.keys(iconMapping.icons).forEach((mappingKey) => {
        const mappingResult = normalizeIconName(mappingKey);
        if (mappingResult && mappingResult.name === iconName) {
          const mappingInfo = iconMapping.icons[mappingKey];
          const size = mappingInfo.size;
          const style = mappingInfo.style;

          if (!metadata.icons[iconName].unicodeMapping[size]) {
            metadata.icons[iconName].unicodeMapping[size] = {};
          }

          metadata.icons[iconName].unicodeMapping[size][style] = {
            unicode: mappingInfo.unicode,
            unicodeHex: mappingInfo.unicode_hex,
            cssClass: mappingInfo.css_class,
          };
        }
      });
    }
  });

  return metadata;
}

// 메타데이터 생성
const metadata = generateMetadata();

// 각 패키지에 메타데이터 저장
const packages = ["react-icons", "react-native-icons", "web-icons"];

packages.forEach((packageName) => {
  const metadataPath = path.join(
    __dirname,
    `../packages/${packageName}/src/metadata.json`
  );

  // 디렉토리가 없으면 생성
  const dir = path.dirname(metadataPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // 메타데이터 파일 저장
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
  console.log(`✅ ${packageName} 메타데이터 생성 완료: ${metadataPath}`);
});

console.log(
  `\n🎉 총 ${metadata.totalIcons}개의 아이콘에 대한 메타데이터가 생성되었습니다!`
);
console.log(`📦 지원 크기: ${metadata.supportedSizes.join(", ")}px`);
console.log(`🎨 지원 스타일: ${metadata.supportedStyles.join(", ")}`);
