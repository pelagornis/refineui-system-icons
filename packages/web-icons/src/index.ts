import IconUtils from './IconUtils';

// === FLUENTUI 스타일 방식 ===
// 모든 아이콘은 동적으로 생성됩니다
// 434개 아이콘에 대한 5,208개의 메서드를 지원합니다

// 유틸리티 함수
export { default as IconUtils } from './IconUtils';
export type { IconProps } from './IconUtils';

// 동적 아이콘 생성 함수
export const createIcon = (iconName: string, props?: any) => {
  return IconUtils.createIconMethod(iconName, props);
};

// 샘플 아이콘들 (자주 사용되는 것들)
export const AccessibilityRegular = (props?: any) => IconUtils.createIconMethod('AccessibilityRegular', props);
export const AccessibilityFilled = (props?: any) => IconUtils.createIconMethod('AccessibilityFilled', props);
export const AddRegular = (props?: any) => IconUtils.createIconMethod('AddRegular', props);
export const AddFilled = (props?: any) => IconUtils.createIconMethod('AddFilled', props);
export const HomeRegular = (props?: any) => IconUtils.createIconMethod('HomeRegular', props);
export const HomeFilled = (props?: any) => IconUtils.createIconMethod('HomeFilled', props);
export const SearchRegular = (props?: any) => IconUtils.createIconMethod('SearchRegular', props);
export const SearchFilled = (props?: any) => IconUtils.createIconMethod('SearchFilled', props);
export const SettingsRegular = (props?: any) => IconUtils.createIconMethod('SettingsRegular', props);
export const SettingsFilled = (props?: any) => IconUtils.createIconMethod('SettingsFilled', props);

// 크기별 샘플 아이콘들
export const Accessibility16Regular = (props?: any) => IconUtils.createIconMethod('Accessibility16Regular', props);
export const Accessibility24Filled = (props?: any) => IconUtils.createIconMethod('Accessibility24Filled', props);
export const Add16Regular = (props?: any) => IconUtils.createIconMethod('Add16Regular', props);
export const Add24Filled = (props?: any) => IconUtils.createIconMethod('Add24Filled', props);
export const Home16Regular = (props?: any) => IconUtils.createIconMethod('Home16Regular', props);
export const Home24Filled = (props?: any) => IconUtils.createIconMethod('Home24Filled', props);
export const Search16Regular = (props?: any) => IconUtils.createIconMethod('Search16Regular', props);
export const Search24Filled = (props?: any) => IconUtils.createIconMethod('Search24Filled', props);
export const Settings16Regular = (props?: any) => IconUtils.createIconMethod('Settings16Regular', props);
export const Settings24Filled = (props?: any) => IconUtils.createIconMethod('Settings24Filled', props);

// 모든 아이콘은 동적으로 생성되므로 필요에 따라 createIcon 함수를 사용하세요
// 예: createIcon('AccessibilityRegular', { style: { color: 'red' } })
