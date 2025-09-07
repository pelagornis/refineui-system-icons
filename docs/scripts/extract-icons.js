import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Flutter 아이콘 파일에서 아이콘 목록 추출
function extractIconsFromFlutter() {
  const flutterIconFile = path.join(__dirname, '../../flutter/lib/src/refineui_icons.dart');
  const content = fs.readFileSync(flutterIconFile, 'utf8');
  
  // static const IconData 패턴 매칭
  const iconPattern = /static const IconData (\w+) = IconData\(/g;
  const icons = [];
  let match;
  
  while ((match = iconPattern.exec(content)) !== null) {
    const iconName = match[1];
    icons.push(iconName);
  }
  
  return icons;
}

// 아이콘을 카테고리별로 분류
function categorizeIcons(icons) {
  const categories = {
    '기본': [],
    '네비게이션': [],
    '액션': [],
    '상태': [],
    '사용자 인터페이스': [],
    '기타': []
  };
  
  const categoryKeywords = {
    '기본': ['add', 'remove', 'edit', 'delete', 'save', 'cancel', 'confirm'],
    '네비게이션': ['home', 'back', 'forward', 'menu', 'close', 'expand', 'chevron'],
    '액션': ['play', 'pause', 'stop', 'refresh', 'reload', 'download', 'upload', 'share', 'copy', 'paste'],
    '상태': ['check', 'error', 'warning', 'info', 'success', 'failure', 'loading', 'spinner'],
    '사용자 인터페이스': ['settings', 'preferences', 'user', 'profile', 'account', 'notification', 'bell', 'help', 'question']
  };
  
  icons.forEach(icon => {
    const baseName = icon.split('_')[0]; // 첫 번째 부분만 추출 (예: add_24_filled -> add)
    let categorized = false;
    
    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      if (keywords.some(keyword => baseName.includes(keyword))) {
        categories[category].push(icon);
        categorized = true;
        break;
      }
    }
    
    if (!categorized) {
      categories['기타'].push(icon);
    }
  });
  
  return categories;
}

// 아이콘 정보 생성
function generateIconInfo(iconName) {
  const parts = iconName.split('_');
  const baseName = parts[0];
  const size = parts[1];
  const style = parts[2];
  
  return {
    name: iconName,
    baseName: baseName,
    size: size,
    style: style,
    displayName: baseName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    sizes: ['16', '20', '24', '28', '32', '48'],
    styles: ['filled', 'regular']
  };
}

// 메인 실행
function main() {
  const icons = extractIconsFromFlutter();
  const categorizedIcons = categorizeIcons(icons);
  const iconInfo = icons.map(generateIconInfo);
  
  // 고유한 기본 아이콘 이름 추출
  const uniqueBaseNames = [...new Set(icons.map(icon => icon.split('_')[0]))];
  
  const output = {
    totalIcons: icons.length,
    uniqueBaseIcons: uniqueBaseNames.length,
    categories: categorizedIcons,
    allIcons: iconInfo,
    baseIcons: uniqueBaseNames.map(name => ({
      name: name,
      displayName: name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      variants: icons.filter(icon => icon.startsWith(name + '_'))
    }))
  };
  
  // JSON 파일로 저장
  const outputPath = path.join(__dirname, '../src/data/icons.json');
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  
  console.log(`✅ ${icons.length}개 아이콘 추출 완료`);
  console.log(`✅ ${uniqueBaseNames.length}개 고유 기본 아이콘`);
  console.log(`✅ ${outputPath}에 저장됨`);
}

main();
