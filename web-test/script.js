// 아이콘 유틸리티 함수
const IconUtils = {
  // 아이콘 매핑
  mapping: {
    add: { regular: 984591, filled: 984592 },
    home: { regular: 983155, filled: 983158 },
    search: { regular: 984386, filled: 984384 },
    settings: { regular: 983152, filled: 983148 },
    checkmark: { regular: 983450, filled: 983452 },
  },

  // 아이콘 생성 함수
  createIcon(name, style = "regular") {
    const iconData = this.mapping[name];
    if (!iconData) {
      console.warn(`Icon '${name}' not found`);
      return "";
    }

    const unicode = iconData[style];
    return String.fromCharCode(unicode);
  },

  // 폰트 패밀리 가져오기
  getFontFamily(style = "regular") {
    return `RefineUI-System-Icons-${
      style.charAt(0).toUpperCase() + style.slice(1)
    }`;
  },

  // 스타일별 아이콘 생성
  regular(name) {
    return this.createIcon(name, "regular");
  },

  filled(name) {
    return this.createIcon(name, "filled");
  },

  // 사용 가능한 아이콘 목록
  getAvailableIcons() {
    return Object.keys(this.mapping);
  },
};

// 폰트 로딩 상태
let fontsLoaded = false;

// DOM이 로드되면 실행
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Web Test 시작");

  // 폰트 로딩 확인
  checkFontLoading();

  // 이벤트 리스너 설정
  setupEventListeners();

  // 초기 아이콘 표시
  updateIconDisplay();
});

// 폰트 로딩 확인
function checkFontLoading() {
  const fontLoadingStatus = document.getElementById("fontLoadingStatus");

  // 폰트 로딩 상태 확인
  document.fonts.ready
    .then(() => {
      console.log("✅ 폰트 로딩 완료");
      fontsLoaded = true;
      fontLoadingStatus.textContent = "✅ 폰트 로딩 완료";
      fontLoadingStatus.className = "font-loading-status loaded";

      // 아이콘 표시 업데이트
      updateIconDisplay();
    })
    .catch((error) => {
      console.error("❌ 폰트 로딩 실패:", error);
      fontLoadingStatus.textContent = "❌ 폰트 로딩 실패";
      fontLoadingStatus.className = "font-loading-status error";
    });
}

// 이벤트 리스너 설정
function setupEventListeners() {
  // CDN 아이콘 선택
  const cdnSelect = document.getElementById("cdnIconSelect");
  cdnSelect.addEventListener("change", function () {
    updateIconDisplay();
  });

  // React 아이콘 선택
  const reactSelect = document.getElementById("reactIconSelect");
  reactSelect.addEventListener("change", function () {
    updateIconDisplay();
  });

  // React Native 아이콘 선택
  const reactNativeSelect = document.getElementById("reactNativeIconSelect");
  reactNativeSelect.addEventListener("change", function () {
    updateIconDisplay();
  });

  // 색상 변경
  const colorInput = document.getElementById("iconColor");
  colorInput.addEventListener("input", function () {
    updateIconDisplay();
  });

  // 크기 변경
  const sizeInput = document.getElementById("iconSize");
  sizeInput.addEventListener("input", function () {
    updateIconDisplay();
  });
}

// 아이콘 표시 업데이트
function updateIconDisplay() {
  if (!fontsLoaded) {
    console.log("⏳ 폰트 로딩 대기 중...");
    return;
  }

  const color = document.getElementById("iconColor").value;
  const size = document.getElementById("iconSize").value;

  // CDN 아이콘 업데이트
  updateCdnIcon(color, size);

  // React 아이콘 업데이트
  updateReactIcon(color, size);

  // React Native 아이콘 업데이트
  updateReactNativeIcon(color, size);
}

// CDN 아이콘 업데이트
function updateCdnIcon(color, size) {
  const cdnSelect = document.getElementById("cdnIconSelect");
  const cdnIcon = document.getElementById("cdnIcon");
  const selectedValue = cdnSelect.value;

  if (selectedValue) {
    const [iconName, style] = selectedValue.split("-");
    const iconChar = IconUtils.createIcon(iconName, style);

    if (iconChar) {
      cdnIcon.textContent = iconChar;
      cdnIcon.style.fontFamily = IconUtils.getFontFamily(style);
      cdnIcon.style.color = color;
      cdnIcon.style.fontSize = size + "px";
      cdnIcon.style.display = "block";

      console.log(`🎨 CDN 아이콘 업데이트: ${iconName} (${style})`);
    }
  } else {
    cdnIcon.style.display = "none";
  }
}

// React 아이콘 업데이트
function updateReactIcon(color, size) {
  const reactSelect = document.getElementById("reactIconSelect");
  const reactIcon = document.getElementById("reactIcon");
  const selectedValue = reactSelect.value;

  if (selectedValue) {
    const [iconName, style] = selectedValue.split("-");
    const iconChar = IconUtils.createIcon(iconName, style);

    if (iconChar) {
      reactIcon.textContent = iconChar;
      reactIcon.style.fontFamily = IconUtils.getFontFamily(style);
      reactIcon.style.color = color;
      reactIcon.style.fontSize = size + "px";
      reactIcon.style.display = "block";

      console.log(`⚛️ React 아이콘 업데이트: ${iconName} (${style})`);
    }
  } else {
    reactIcon.style.display = "none";
  }
}

// React Native 아이콘 업데이트
function updateReactNativeIcon(color, size) {
  const reactNativeSelect = document.getElementById("reactNativeIconSelect");
  const reactNativeIcon = document.getElementById("reactNativeIcon");
  const selectedValue = reactNativeSelect.value;

  if (selectedValue) {
    const [iconName, style] = selectedValue.split("-");
    const iconChar = IconUtils.createIcon(iconName, style);

    if (iconChar) {
      reactNativeIcon.textContent = iconChar;
      reactNativeIcon.style.fontFamily = IconUtils.getFontFamily(style);
      reactNativeIcon.style.color = color;
      reactNativeIcon.style.fontSize = size + "px";
      reactNativeIcon.style.display = "block";

      console.log(`📱 React Native 아이콘 업데이트: ${iconName} (${style})`);
    }
  } else {
    reactNativeIcon.style.display = "none";
  }
}

// 디버깅용: 모든 아이콘 정보 출력
function logAllIcons() {
  console.log("📋 사용 가능한 모든 아이콘:");
  IconUtils.getAvailableIcons().forEach((iconName) => {
    const regularChar = IconUtils.regular(iconName);
    const filledChar = IconUtils.filled(iconName);
    console.log(`${iconName}: regular=${regularChar}, filled=${filledChar}`);
  });
}

// 개발자 도구에서 사용할 수 있도록 전역 함수로 노출
window.logAllIcons = logAllIcons;
window.IconUtils = IconUtils;
