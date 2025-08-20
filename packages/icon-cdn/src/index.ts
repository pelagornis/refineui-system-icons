/**
 * RefineUI System Icons CDN Package
 * 
 * A TypeScript-first CDN package for RefineUI System Icons providing
 * type-safe access to 433+ icons in multiple sizes and styles.
 * 
 * CDN URL Format:
 * https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/{size}/{icon-name}-{style}.svg
 * 
 * Examples:
 * https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/24/add-filled.svg
 * https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/16/home-regular.svg
 * 
 * @packageDocumentation
 */

// Type definitions
export * from './types';

// Configuration constants
export { CDN_CONFIG, BUILD_CONFIG, ICON_METADATA } from './constants';

// Utility functions
export * from './utils';

// Core CDN functions
export * from './cdn';

// Build functionality
export { build } from './build';

/**
 * CLI interface for direct script execution
 * Provides command-line access to icon information and URL generation
 */
if (require.main === module) {
  const { ICON_METADATA } = require('./constants');
  const args: string[] = process.argv.slice(2);
  
  // Display help information if no arguments provided
  if (args.length === 0) {
    console.log('🎨 RefineUI System Icons CDN Package');
    console.log('');
    console.log('📖 Usage:');
    console.log('  node dist/index.js <icon-name> [size] [style]');
    console.log('');
    console.log('📋 Examples:');
    console.log('  node dist/index.js add 24 filled');
    console.log('  node dist/index.js typescript 32 regular');
    console.log('  node dist/index.js heart 48 filled');
    console.log('');
    console.log('🔍 Available icons (showing first 10):');
    console.log('  ' + ICON_METADATA.icons.slice(0, 10).join(', ') + '...');
    console.log('');
    console.log('📏 Available sizes:', ICON_METADATA.sizes.join(', '));
    console.log('🎭 Available styles:', ICON_METADATA.styles.join(', '));
    console.log('');
    console.log(`📊 Total icons: ${ICON_METADATA.icons.length}`);
    process.exit(0);
  }
  
  const [iconName, sizeArg = '24', style = 'regular'] = args;
  const size: number = parseInt(sizeArg, 10);
  
  // Validate arguments
  if (isNaN(size)) {
    console.error('❌ Error: Size must be a valid number');
    console.error('   Valid sizes:', ICON_METADATA.sizes.join(', '));
    process.exit(1);
  }
  
  try {
    const { getIconInfo } = require('./cdn');
    const iconInfo = getIconInfo(iconName, size, style);
    
    console.log('✅ Icon found!');
    console.log('');
    console.log('📝 Details:');
    console.log(`   Name: ${iconInfo.name}`);
    console.log(`   Size: ${iconInfo.size}px`);
    console.log(`   Style: ${iconInfo.style}`);
    console.log(`   File: ${iconInfo.fileName}`);
    console.log('');
    console.log('🌐 CDN URL:');
    console.log(`   ${iconInfo.url}`);
    console.log('');
    console.log('💻 HTML Example:');
    console.log(`   <img src="${iconInfo.url}" alt="${iconName}" width="${size}" height="${size}" />`);
    console.log('');
    console.log('⚛️ React Example:');
    console.log(`   <img src="${iconInfo.url}" alt="${iconName}" width={${size}} height={${size}} />`);
    
  } catch (error) {
    console.error('❌ Error:', (error as Error).message);
    console.log('');
    console.log('💡 Tips:');
    console.log('   • Check the icon name spelling');
    console.log('   • Use underscores instead of spaces (e.g., "add_circle")');
    console.log('   • Valid styles are "regular" and "filled"');
    console.log(`   • Valid sizes are: ${ICON_METADATA.sizes.join(', ')}`);
    process.exit(1);
  }
}
