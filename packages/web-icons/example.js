// web-icons 패키지 테스트 예시
const pkg = require("./dist/index.js");

console.log("🎨 RefineUI System Icons - Web Package 테스트");
console.log("==========================================");

// 1. 유틸리티 함수 테스트
console.log("\n1. 유틸리티 함수 테스트:");
console.log(
  'getIconChar("Gavel", "regular", 24):',
  pkg.getIconChar("Gavel", "regular", 24)
);
console.log('getFontFamily("regular"):', pkg.getFontFamily("regular"));
console.log('getFontFamily("filled"):', pkg.getFontFamily("filled"));

// 2. 편의 함수 테스트
console.log("\n2. 편의 함수 테스트:");
console.log("Gavel(24):", pkg.Gavel(24));
console.log("GavelFilled(32):", pkg.GavelFilled(32));
console.log("AddFilled(48):", pkg.AddFilled(48));
console.log("Home(20):", pkg.Home(20));

// 3. 사용 가능한 아이콘 확인
console.log("\n3. 사용 가능한 아이콘 (처음 10개):");
const availableIcons = pkg.getAvailableIcons();
console.log(availableIcons.slice(0, 10));

// 4. HTML 예시 생성
console.log("\n4. HTML 사용 예시:");
const gavelIcon = pkg.Gavel(24);
const fontFamily = pkg.getFontFamily("regular");
const htmlExample = `<span style="font-family: '${fontFamily}'; font-size: 24px; color: red;">${gavelIcon}</span>`;
console.log("HTML:", htmlExample);

// 5. CSS 클래스 예시
console.log("\n5. CSS 클래스 예시:");
const cssClass = pkg.getIconClass("Gavel", "regular", 24);
console.log("CSS Class:", cssClass);
console.log("CSS HTML:", `<span class="${cssClass}"></span>`);

// 6. 모든 export된 함수들 확인
console.log("\n6. Export된 함수들:");
const exportedFunctions = Object.keys(pkg).filter(
  (key) => typeof pkg[key] === "function"
);
console.log("총 함수 개수:", exportedFunctions.length);
console.log("함수 목록:", exportedFunctions);

console.log("\n✅ 테스트 완료!");
