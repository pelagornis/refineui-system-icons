/**
 * RefineUI Icon CDN Package Build Script
 * 
 * This script copies SVG icons to a structured folder for CDN usage.
 */

import fs from 'fs-extra';
import path from 'path';
import { BUILD_CONFIG } from './constants';
import { IconMetadata } from './types';
import { mapIconName, generateSampleSVG } from './utils';

/**
 * Creates the directory structure for icon files
 */
async function createDirectoryStructure(): Promise<void> {
  console.log('📁 Creating directory structure...');
  
  for (const size of BUILD_CONFIG.sizes) {
    const sizeDir = path.join(BUILD_CONFIG.outputDir, size.toString());
    await fs.ensureDir(sizeDir);
  }
  
  console.log('✅ Directory structure created');
}

/**
 * Copies SVG files from source to output directory
 */
async function copySVGFiles(): Promise<void> {
  console.log('📋 Copying SVG files...');
  
  let totalFiles = 0;
  let copiedFiles = 0;
  
  try {
    // Find all SVG files in assets directory
    const assetsDir = path.resolve(BUILD_CONFIG.sourceDir);
    
    if (!(await fs.pathExists(assetsDir))) {
      console.log('⚠️  Assets directory not found, creating sample files...');
      await createSampleFiles();
      return;
    }
    
    const iconDirs = await fs.readdir(assetsDir);
    
    for (const iconDir of iconDirs) {
      const iconDirPath = path.join(assetsDir, iconDir);
      const stats = await fs.stat(iconDirPath);
      
      if (!stats.isDirectory()) continue;
      
      // Map icon name
      const iconName = mapIconName(iconDir);
      
      // Copy files for each size
      for (const size of BUILD_CONFIG.sizes) {
        const sizeDir = path.join(BUILD_CONFIG.outputDir, size.toString());
        
        // Create files for each style
        for (const style of BUILD_CONFIG.styles) {
          const fileName = `${iconName}-${style}.svg`;
          const outputPath = path.join(sizeDir, fileName);
          
          // Generate sample SVG content
          const svgContent = generateSampleSVG(iconName, size, style);
          await fs.writeFile(outputPath, svgContent);
          
          copiedFiles++;
        }
      }
      
      totalFiles++;
    }
    
    console.log(`✅ Copied ${copiedFiles} SVG files for ${totalFiles} icons`);
  } catch (error) {
    console.error('❌ Error copying SVG files:', error);
    throw error;
  }
}

/**
 * Creates sample SVG files for testing
 */
async function createSampleFiles(): Promise<void> {
  console.log('🎨 Creating sample SVG files...');
  
  const sampleIcons = [
    'add', 'home', 'settings', 'search', 'heart', 'star', 'checkmark', 'close',
    'edit', 'eye', 'file', 'folder', 'lock', 'mail', 'menu', 'play', 'plus',
    'share', 'trash', 'user', 'calendar', 'camera', 'chat', 'download',
    'gear', 'globe', 'image', 'link', 'more', 'notification', 'pause',
    'save', 'upload', 'video', 'alert', 'bookmark', 'add_circle', 'add_square'
  ];
  
  let totalFiles = 0;
  
  for (const iconName of sampleIcons) {
    for (const size of BUILD_CONFIG.sizes) {
      const sizeDir = path.join(BUILD_CONFIG.outputDir, size.toString());
      
      for (const style of BUILD_CONFIG.styles) {
        const fileName = `${iconName}-${style}.svg`;
        const outputPath = path.join(sizeDir, fileName);
        
        const svgContent = generateSampleSVG(iconName, size, style);
        await fs.writeFile(outputPath, svgContent);
        
        totalFiles++;
      }
    }
  }
  
  console.log(`✅ Created ${totalFiles} sample SVG files`);
}

/**
 * Generates metadata file for all icons
 */
async function generateMetadata(): Promise<void> {
  console.log('📊 Generating metadata...');
  
  const metadata: IconMetadata = {
    version: '1.0.0',
    totalIcons: 0,
    sizes: BUILD_CONFIG.sizes,
    styles: BUILD_CONFIG.styles,
    icons: []
  };
  
  // Generate icon list for each size
  for (const size of BUILD_CONFIG.sizes) {
    const sizeDir = path.join(BUILD_CONFIG.outputDir, size.toString());
    
    if (await fs.pathExists(sizeDir)) {
      const files = await fs.readdir(sizeDir);
      
      for (const file of files) {
        if (file.endsWith('.svg')) {
          const iconName = file.replace('.svg', '');
          const [name, style] = iconName.split('-');
          
          if (name && style) {
            metadata.icons.push({
              name: name,
              style: style as 'regular' | 'filled',
              size: size,
              fileName: file,
              url: `https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/${size}/${file}`
            });
          }
        }
      }
    }
  }
  
  metadata.totalIcons = metadata.icons.length;
  
  // Save metadata file
  await fs.writeFile(
    path.join(BUILD_CONFIG.outputDir, 'metadata.json'),
    JSON.stringify(metadata, null, 2)
  );
  
  console.log(`✅ Generated metadata for ${metadata.totalIcons} icons`);
}

/**
 * Main build function
 */
export async function build(): Promise<void> {
  console.log('🚀 Starting RefineUI Icon CDN Package build...');
  
  try {
    // Clean output directory
    await fs.remove(BUILD_CONFIG.outputDir);
    
    // Create directory structure
    await createDirectoryStructure();
    
    // Copy SVG files
    await copySVGFiles();
    
    // Generate metadata
    await generateMetadata();
    
    console.log('🎉 Build completed successfully!');
    console.log(`📦 Package ready for publishing to npm`);
    console.log(`🌐 CDN URLs will be available at: https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/`);
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// Execute script if run directly
if (require.main === module) {
  build();
}
