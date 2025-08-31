import IconUtils from './IconUtils';

// === 폰트 기반 아이콘 유틸리티 ===
// unicode 값을 사용하여 폰트에서 아이콘을 쉽게 가져올 수 있습니다

// 메인 유틸리티
export { default as IconUtils } from './IconUtils';
export type { IconData } from './IconUtils';

// 편의 함수들
export const getIconChar = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {
  return IconUtils.getIconChar(iconName, style, size);
};

export const getIconClass = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {
  return IconUtils.getIconClass(iconName, style, size);
};

export const getFontFamily = (style: 'regular' | 'filled' = 'regular') => {
  return IconUtils.getFontFamily(style);
};

export const getAvailableIcons = () => {
  return IconUtils.getAvailableIcons();
};

export const searchIcons = (query: string) => {
  return IconUtils.searchIcons(query);
};

export const isIconSupported = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {
  return IconUtils.isIconSupported(iconName, style, size);
};

// === 주요 아이콘들의 편의 함수들 ===
// 모든 434개 아이콘을 동적으로 생성하는 대신 주요 아이콘들만 명시적으로 export

// Regular 스타일 아이콘들
export const Gavel = (size: number = 24) => IconUtils.getIconChar('Gavel', 'regular', size);
export const Add = (size: number = 24) => IconUtils.getIconChar('Add', 'regular', size);
export const Home = (size: number = 24) => IconUtils.getIconChar('Home', 'regular', size);
export const Search = (size: number = 24) => IconUtils.getIconChar('Search', 'regular', size);
export const Settings = (size: number = 24) => IconUtils.getIconChar('Settings', 'regular', size);
export const User = (size: number = 24) => IconUtils.getIconChar('User', 'regular', size);
export const Folder = (size: number = 24) => IconUtils.getIconChar('Folder', 'regular', size);
export const File = (size: number = 24) => IconUtils.getIconChar('File', 'regular', size);
export const Edit = (size: number = 24) => IconUtils.getIconChar('Edit', 'regular', size);
export const Delete = (size: number = 24) => IconUtils.getIconChar('Delete', 'regular', size);

// Filled 스타일 아이콘들
export const GavelFilled = (size: number = 24) => IconUtils.getIconChar('Gavel', 'filled', size);
export const AddFilled = (size: number = 24) => IconUtils.getIconChar('Add', 'filled', size);
export const HomeFilled = (size: number = 24) => IconUtils.getIconChar('Home', 'filled', size);
export const SearchFilled = (size: number = 24) => IconUtils.getIconChar('Search', 'filled', size);
export const SettingsFilled = (size: number = 24) => IconUtils.getIconChar('Settings', 'filled', size);
export const UserFilled = (size: number = 24) => IconUtils.getIconChar('User', 'filled', size);
export const FolderFilled = (size: number = 24) => IconUtils.getIconChar('Folder', 'filled', size);
export const FileFilled = (size: number = 24) => IconUtils.getIconChar('File', 'filled', size);
export const EditFilled = (size: number = 24) => IconUtils.getIconChar('Edit', 'filled', size);
export const DeleteFilled = (size: number = 24) => IconUtils.getIconChar('Delete', 'filled', size);

// === 브라우저에서 더 쉽게 사용할 수 있는 전역 함수들 ===
if (typeof window !== 'undefined') {
  // 전역 함수들 (브라우저에서만)
  (window as any).icon = (name: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {
    return IconUtils.getIconChar(name, style, size);
  };

  (window as any).iconFont = (style: 'regular' | 'filled' = 'regular') => {
    return IconUtils.getFontFamily(style);
  };

  // 간단한 아이콘 HTML 생성 함수
  (window as any).iconHTML = (name: string, style: 'regular' | 'filled' = 'regular', size: number = 24, color: string = 'currentColor') => {
    const char = IconUtils.getIconChar(name, style, size);
    const font = IconUtils.getFontFamily(style);
    return `<span style="font-family: '${font}'; font-size: ${size}px; color: ${color}; display: inline-block; line-height: 1;">${char}</span>`;
  };

  // CSS 클래스 방식으로 아이콘 HTML 생성 함수
  (window as any).iconClassHTML = (name: string, style: 'regular' | 'filled' = 'regular', size: number = 24, color: string = 'currentColor') => {
    const cssClass = IconUtils.getIconClass(name, style, size);
    if (!cssClass) return '';
    return `<span class="${cssClass}" style="font-size: ${size}px; color: ${color}; display: inline-block; line-height: 1;"></span>`;
  };

  // 주요 아이콘들을 전역으로 노출
  (window as any).Gavel = Gavel;
  (window as any).Add = Add;
  (window as any).Home = Home;
  (window as any).Search = Search;
  (window as any).Settings = Settings;
  (window as any).GavelFilled = GavelFilled;
  (window as any).AddFilled = AddFilled;
  (window as any).HomeFilled = HomeFilled;
  (window as any).SearchFilled = SearchFilled;
  (window as any).SettingsFilled = SettingsFilled;
}

// 사용법 예시:
// 1. 유틸리티 함수 사용
// getIconChar('Gavel', 'regular', 24) // unicode 문자 반환
// getIconClass('Gavel', 'filled', 32) // CSS 클래스명 반환
// getFontFamily('regular') // 폰트 패밀리 반환
// 
// 2. 편의 함수 사용
// Gavel(24) // Regular 스타일, 24px
// GavelFilled(32) // Filled 스타일, 32px
// Add(20) // Regular 스타일, 20px
// AddFilled(48) // Filled 스타일, 48px
// 
// 3. 브라우저에서 더 간단하게 사용
// icon('Gavel', 'regular', 24) // 전역 함수
// iconFont('regular') // 폰트 패밀리
// iconHTML('Gavel', 'regular', 24, 'red') // HTML 문자열 생성
// 
// 4. HTML에서 사용
// <span style="font-family: RefineUI-System-Icons-Regular; font-size: 24px;">
//   {Gavel(24)}
// </span>
