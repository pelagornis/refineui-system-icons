/**
 * RefineUI Icons Web Package - Icon Build Script
 *
 * This script copies SVG icons from the assets directory and organizes them
 * by size and style for web usage.
 */

const fs = require("fs-extra");
const path = require("path");

// Configuration
const CONFIG = {
  sourceDir: "../../assets",
  outputDir: "./public/icons",
  sizes: [16, 20, 24, 28, 32, 48],
  styles: ["regular", "filled"],
};

/**
 * Creates directory structure for icon files
 */
async function createDirectoryStructure() {
  console.log("📁 Creating directory structure...");

  // Create main icons directory
  await fs.ensureDir(CONFIG.outputDir);

  // Create size directories
  for (const size of CONFIG.sizes) {
    await fs.ensureDir(path.join(CONFIG.outputDir, size.toString()));
  }

  console.log("✅ Directory structure created");
}

/**
 * Maps icon display name to snake_case format
 */
function mapIconName(originalName) {
  const mapping = {
    "Access time": "access_time",
    "Add circle": "add_circle",
    "Add square": "add_square",
    "Alert badge": "alert_badge",
    "Alert off": "alert_off",
    "Align bottom": "align_bottom",
    "Align center horizontal": "align_center_horizontal",
    "Align center vertical": "align_center_vertical",
    "Align left": "align_left",
    "Align right": "align_right",
    "Align top": "align_top",
    "App folder": "app_folder",
    "App recent": "app_recent",
    "App title": "app_title",
    "Bar chart horizontal": "bar_chart_horizontal",
    "Bar chart horizontal descending": "bar_chart_horizontal_descending",
    "Bar chart vertical": "bar_chart_vertical",
    "Bar chart vertical descending": "bar_chart_vertical_descending",
    "Barcode scanner": "barcode_scanner",
    "Battery 0": "battery_0",
    "Battery 10": "battery_10",
    "Battery 100": "battery_100",
    "Battery 20": "battery_20",
    "Battery 30": "battery_30",
    "Battery 40": "battery_40",
    "Battery 50": "battery_50",
    "Battery 60": "battery_60",
    "Battery 70": "battery_70",
    "Battery 80": "battery_80",
    "Battery 90": "battery_90",
    "Carton box": "carton_box",
    "Chat add": "chat_add",
    "Chat empty": "chat_empty",
    "Chevron down": "chevron_down",
    "Chevron left": "chevron_left",
    "Chevron right": "chevron_right",
    "Chevron up": "chevron_up",
    "Clock alarm": "clock_alarm",
    "Code block": "code_block",
    "Control button": "control_button",
    "Delete off": "delete_off",
    "Desktop mac": "desktop_mac",
    "Dismiss circle": "dismiss_circle",
    "Dismiss square": "dismiss_square",
    "Document border": "document_border",
    "Dual screen": "dual_screen",
    "Edit off": "edit_off",
    "Emoji angry": "emoji_angry",
    "Emoji cool": "emoji_cool",
    "Emoji grimacing": "emoji_grimacing",
    "Emoji laugh": "emoji_laugh",
    "Emoji meh": "emoji_meh",
    "Emoji sad": "emoji_sad",
    "Emoji surprise": "emoji_surprise",
    "Equal circle": "equal_circle",
    "Equal off": "equal_off",
    "Error circle": "error_circle",
    "Eye off": "eye_off",
    "Eyedropper off": "eyedropper_off",
    "Fast forward": "fast_forward",
    "Filmstrip off": "filmstrip_off",
    "Flag off": "flag_off",
    "Flash off": "flash_off",
    "Flashlight off": "flashlight_off",
    "Flip horizontal": "flip_horizontal",
    "Flip verticial": "flip_vertcial",
    "Folder open": "folder_open",
    "Full screen maximize": "full_screen_maximize",
    "Full screen minimize": "full_screen_minimize",
    "Gantt chart": "gantt_chart",
    "Gas station": "gas_station",
    "Gift card": "gift_card",
    "Hard drive": "hard_drive",
    "Hat graduation": "hat_graduation",
    "HDR off": "hdr_off",
    "Headphones mic": "headphones_mic",
    "Headset vr": "headset_vr",
    "Heart broken": "heart_broken",
    "Home checkmark": "home_checkmark",
    "Hourglass half": "hourglass_half",
    "Hourglass one quarter": "hourglass_one_quarter",
    "Hourglass three quarter": "hourglass_three_quarter",
    "Image circle": "image_circle",
    "iOS arrow ltr": "ios_arrow_ltr",
    "iOS arrow rtl": "ios_arrow_rtl",
    "iOS chevron ltr": "ios_chevron_ltr",
    "iOS chevron rtl": "ios_chevron_rtl",
    "JSON file": "json_file",
    "Key multiple": "key_multiple",
    "Keyboard backspace": "keyboard_backspace",
    "Keyboard command": "keyboard_command",
    "Keyboard lock": "keyboard_lock",
    "Keyboard off": "keyboard_off",
    "Keyboard option": "keyboard_option",
    "Keyboard return": "keyboard_return",
    "Keyboard shift": "keyboard_shift",
    "Keyboard shift uppercase": "keyboard_shift_uppercase",
    "Keyboard tab": "keyboard_tab",
    "Line dashes": "line_dashes",
    "Line horizontal 1": "line_horizontal_1",
    "Line horizontal 1 dashes": "line_horizontal_1_dashes",
    "Location arrow": "location_arrow",
    "Lock closed": "lock_closed",
    "Lock open": "lock_open",
    "Mail read": "mail_read",
    "Math symbols": "math_symbols",
    "More circle": "more_circle",
    "More horizontal": "more_horizontal",
    "More verticial": "more_vertcial",
    "Network check": "network_check",
    "Number circle 0": "number_circle_0",
    "Number circle 1": "number_circle_1",
    "Number circle 2": "number_circle_2",
    "Number circle 3": "number_circle_3",
    "Number circle 4": "number_circle_4",
    "Number circle 5": "number_circle_5",
    "Number circle 6": "number_circle_6",
    "Number circle 7": "number_circle_7",
    "Number circle 8": "number_circle_8",
    "Number circle 9": "number_circle_9",
    "Number symbol": "number_symbol",
    "Number symbol circle": "number_symbol_circle",
    "Number symbol square": "number_symbol_square",
    "Open off": "open_off",
    "Organization horizontal": "organization_horizontal",
    "Page fit": "page_fit",
    "Paint brush": "paint_brush",
    "Paint bucket": "paint_bucket",
    "Pause circle": "pause_circle",
    "Payment wireless": "payment_wireless",
    "Pen off": "pen_off",
    "Person voice": "person_voice",
    "Play circle": "play_circle",
    "Port hdmi": "port_hdmi",
    "Port micro usb": "port_micro_usb",
    "Port usb a": "port_usb_a",
    "Port usb c": "port_usb_c",
    "Preview link": "preview_link",
    "Pulse circle": "pulse_circle",
    "Pulse square": "pulse_square",
    "QR code": "qr_code",
    "Question circle": "question_circle",
    "Radio button": "radio_button",
    "Record stop": "record_stop",
    "Road cone": "road_cone",
    "Serial port": "serial_port",
    "Server link": "server_link",
    "Server play": "server_play",
    "Service bell": "service_bell",
    "Shape exclude": "shape_exclude",
    "Shape intersect": "shape_intersect",
    "Shape subtract": "shape_subtract",
    "Shape union": "shape_union",
    "Share android": "share_android",
    "Share ios": "share_ios",
    "Shell script": "shell_script",
    "Shopping bag": "shopping_bag",
    "Slide add": "slide_add",
    "Slide content": "slide_content",
    "Slide eraser": "slide_eraser",
    "Slide grid": "slide_grid",
    "Slide hide": "slide_hide",
    "Slide layout": "slide_layout",
    "Sound source": "sound_source",
    "Sport baseball": "sport_baseball",
    "Sport basketball": "sport_basketball",
    "Sport soccer": "sport_soccer",
    "Spray can": "spray_can",
    "Square hint": "square_hint",
    "Square multiple": "square_multiple",
    "Text align center": "text_align_center",
    "Text align justify": "text_align_justify",
    "Text align left": "text_align_left",
    "Text align right": "text_align_right",
    "Textbox align bottom": "textbox_align_bottom",
    "Textbox align bottom center": "textbox_align_bottom_center",
    "Textbox align bottom left": "textbox_align_bottom_left",
    "Textbox align bottom right": "textbox_align_bottom_right",
    "Textbox align center": "textbox_align_center",
    "Textbox align middle": "textbox_align_middle",
    "Textbox align middle left": "textbox_align_middle_left",
    "Textbox align middle right": "textbox_align_middle_right",
    "Textbox align top": "textbox_align_top",
    "Textbox align top center": "textbox_align_top_center",
    "Textbox align top left": "textbox_align_top_left",
    "Textbox align top right": "textbox_align_top_right",
    "Toggle left": "toggle_left",
    "Toggle multiple": "toggle_multiple",
    "Toggle right": "toggle_right",
    "USB cable": "usb_cable",
    "Video clip": "video_clip",
    "Video play pause": "video_play_pause",
    "Walkie talkie": "walkie_talkie",
    "Weather blowing snow": "weather_blowing_snow",
    "Weather cloudy": "weather_cloudy",
    "Weather rain": "weather_rain",
    "Weather snow": "weather_snow",
    "Weather snowflake": "weather_snowflake",
    "Weather sunny": "weather_sunny",
    "Weather thunderstorm": "weather_thunderstorm",
    "WiFi 1": "wifi_1",
    "WiFi 2": "wifi_2",
    "WiFi 3": "wifi_3",
    "WiFi 4": "wifi_4",
    "Zoom in": "zoom_in",
    "Zoom out": "zoom_out",
  };

  return (
    mapping[originalName] || originalName.toLowerCase().replace(/\s+/g, "_")
  );
}

/**
 * Copies SVG files from source to output directory
 */
async function copySVGFiles() {
  console.log("📋 Copying SVG files...");

  const sourceDir = path.resolve(CONFIG.sourceDir);
  const outputDir = path.resolve(CONFIG.outputDir);

  let copiedCount = 0;
  const iconMetadata = [];

  try {
    const iconDirs = await fs.readdir(sourceDir);

    for (const iconDir of iconDirs) {
      const iconPath = path.join(sourceDir, iconDir);
      const stat = await fs.stat(iconPath);

      if (!stat.isDirectory()) continue;

      console.log(`Processing: ${iconDir}`);

      // Map icon name
      const iconSlug = mapIconName(iconDir);

      try {
        // Check if svg directory exists
        const svgDir = path.join(iconPath, "svg");
        const svgExists = await fs.pathExists(svgDir);

        if (!svgExists) {
          console.warn(`Warning: No svg directory found for ${iconDir}`);
          continue;
        }

        const svgFiles = await fs.readdir(svgDir);

        for (const item of svgFiles) {
          if (item.endsWith(".svg")) {
            const itemPath = path.join(svgDir, item);

            // Extract size and style from filename
            // Example: ic_refineui_add_16_filled.svg, ic_refineui_add_24_regular.svg
            const match = item.match(
              /ic_refineui_\w+_(\d+)_(regular|filled)\.svg$/
            );
            if (!match) continue;

            const [, sizeStr, style] = match;
            const size = parseInt(sizeStr);

            if (
              !CONFIG.sizes.includes(size) ||
              !CONFIG.styles.includes(style)
            ) {
              continue;
            }

            // Generate new filename: iconName-style.svg
            const newFilename = `${iconSlug}-${style}.svg`;
            const targetPath = path.join(
              outputDir,
              size.toString(),
              newFilename
            );

            // Copy file
            await fs.copy(itemPath, targetPath);
            copiedCount++;

            // Add to metadata
            iconMetadata.push({
              name: iconDir,
              slug: iconSlug,
              size: size,
              style: style,
              fileName: newFilename,
              url: `/icons/${size}/${newFilename}`,
            });
          }
        }
      } catch (error) {
        console.warn(`Warning: Could not process ${iconDir}:`, error.message);
      }
    }

    console.log(`✅ Copied ${copiedCount} SVG files`);
    return iconMetadata;
  } catch (error) {
    console.error("Error copying SVG files:", error);
    throw error;
  }
}

/**
 * Generates metadata file for all icons
 */
async function generateMetadata(iconMetadata) {
  console.log("📝 Generating metadata...");

  const metadata = {
    version: "1.0.0",
    totalIcons: iconMetadata.length,
    sizes: CONFIG.sizes,
    styles: CONFIG.styles,
    icons: iconMetadata,
  };

  const metadataPath = path.join(CONFIG.outputDir, "metadata.json");
  await fs.writeJSON(metadataPath, metadata, { spaces: 2 });

  console.log(`✅ Generated metadata for ${iconMetadata.length} icons`);
}

/**
 * Main build function
 */
async function build() {
  console.log("🚀 Building RefineUI Icons Web Package...\n");

  try {
    await createDirectoryStructure();
    const iconMetadata = await copySVGFiles();
    await generateMetadata(iconMetadata);

    console.log("\n🎉 Build completed successfully!");
    console.log(`📊 Total icons: ${iconMetadata.length}`);
    console.log(`📏 Sizes: ${CONFIG.sizes.join(", ")}`);
    console.log(`🎭 Styles: ${CONFIG.styles.join(", ")}`);
  } catch (error) {
    console.error("\n❌ Build failed:", error.message);
    process.exit(1);
  }
}

// Execute script if run directly
if (require.main === module) {
  build();
}

module.exports = { build };
