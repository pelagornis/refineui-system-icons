(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IconCDN = {}));
})(this, (function (exports) { 'use strict';

  var totalIcons = 434;
  var supportedSizes = [
  	16,
  	20,
  	24,
  	28,
  	32,
  	48
  ];
  var supportedStyles = [
  	"regular",
  	"filled"
  ];
  var fontFamilies = {
  	regular: {
  		font_family: "RefineUI-System-Icons-Regular",
  		count: 2598
  	},
  	filled: {
  		font_family: "RefineUI-System-Icons-Filled",
  		count: 2598
  	}
  };
  var icons = {
  	Gavel: {
  		name: "Gavel",
  		slug: "gavel",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in gavel scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_gavel_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Gavel/svg/ic_refineui_gavel_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gavel_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Gavel/svg/ic_refineui_gavel_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gavel_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Gavel/svg/ic_refineui_gavel_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gavel_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Gavel/svg/ic_refineui_gavel_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gavel_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Gavel/svg/ic_refineui_gavel_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gavel_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Gavel/svg/ic_refineui_gavel_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gavel_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Gavel/svg/ic_refineui_gavel_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gavel_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Gavel/svg/ic_refineui_gavel_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gavel_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Gavel/svg/ic_refineui_gavel_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gavel_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Gavel/svg/ic_refineui_gavel_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gavel_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Gavel/svg/ic_refineui_gavel_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gavel_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Gavel/svg/ic_refineui_gavel_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983041,
  					unicodeHex: "\\F0001",
  					cssClass: "ic_refineui_gavel_16_regular"
  				},
  				filled: {
  					unicode: 983044,
  					unicodeHex: "\\F0004",
  					cssClass: "ic_refineui_gavel_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983045,
  					unicodeHex: "\\F0005",
  					cssClass: "ic_refineui_gavel_20_regular"
  				},
  				filled: {
  					unicode: 983042,
  					unicodeHex: "\\F0002",
  					cssClass: "ic_refineui_gavel_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983043,
  					unicodeHex: "\\F0003",
  					cssClass: "ic_refineui_gavel_24_regular"
  				},
  				filled: {
  					unicode: 983045,
  					unicodeHex: "\\F0005",
  					cssClass: "ic_refineui_gavel_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983040,
  					unicodeHex: "\\F0000",
  					cssClass: "ic_refineui_gavel_28_regular"
  				},
  				filled: {
  					unicode: 983041,
  					unicodeHex: "\\F0001",
  					cssClass: "ic_refineui_gavel_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983044,
  					unicodeHex: "\\F0004",
  					cssClass: "ic_refineui_gavel_32_regular"
  				},
  				filled: {
  					unicode: 983043,
  					unicodeHex: "\\F0003",
  					cssClass: "ic_refineui_gavel_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983042,
  					unicodeHex: "\\F0002",
  					cssClass: "ic_refineui_gavel_48_regular"
  				},
  				filled: {
  					unicode: 983040,
  					unicodeHex: "\\F0000",
  					cssClass: "ic_refineui_gavel_48_filled"
  				}
  			}
  		}
  	},
  	Diamond: {
  		name: "Diamond",
  		slug: "diamond",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in diamond scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_diamond_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Diamond/svg/ic_refineui_diamond_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_diamond_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Diamond/svg/ic_refineui_diamond_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_diamond_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Diamond/svg/ic_refineui_diamond_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_diamond_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Diamond/svg/ic_refineui_diamond_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_diamond_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Diamond/svg/ic_refineui_diamond_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_diamond_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Diamond/svg/ic_refineui_diamond_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_diamond_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Diamond/svg/ic_refineui_diamond_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_diamond_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Diamond/svg/ic_refineui_diamond_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_diamond_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Diamond/svg/ic_refineui_diamond_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_diamond_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Diamond/svg/ic_refineui_diamond_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_diamond_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Diamond/svg/ic_refineui_diamond_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_diamond_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Diamond/svg/ic_refineui_diamond_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983047,
  					unicodeHex: "\\F0007",
  					cssClass: "ic_refineui_diamond_16_regular"
  				},
  				filled: {
  					unicode: 983049,
  					unicodeHex: "\\F0009",
  					cssClass: "ic_refineui_diamond_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983046,
  					unicodeHex: "\\F0006",
  					cssClass: "ic_refineui_diamond_20_regular"
  				},
  				filled: {
  					unicode: 983047,
  					unicodeHex: "\\F0007",
  					cssClass: "ic_refineui_diamond_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983049,
  					unicodeHex: "\\F0009",
  					cssClass: "ic_refineui_diamond_24_regular"
  				},
  				filled: {
  					unicode: 983050,
  					unicodeHex: "\\F000A",
  					cssClass: "ic_refineui_diamond_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983050,
  					unicodeHex: "\\F000A",
  					cssClass: "ic_refineui_diamond_28_regular"
  				},
  				filled: {
  					unicode: 983046,
  					unicodeHex: "\\F0006",
  					cssClass: "ic_refineui_diamond_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983051,
  					unicodeHex: "\\F000B",
  					cssClass: "ic_refineui_diamond_32_regular"
  				},
  				filled: {
  					unicode: 983051,
  					unicodeHex: "\\F000B",
  					cssClass: "ic_refineui_diamond_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983048,
  					unicodeHex: "\\F0008",
  					cssClass: "ic_refineui_diamond_48_regular"
  				},
  				filled: {
  					unicode: 983048,
  					unicodeHex: "\\F0008",
  					cssClass: "ic_refineui_diamond_48_filled"
  				}
  			}
  		}
  	},
  	Filmstrip: {
  		name: "Filmstrip",
  		slug: "filmstrip",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in filmstrip scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_filmstrip_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Filmstrip/svg/ic_refineui_filmstrip_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_filmstrip_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Filmstrip/svg/ic_refineui_filmstrip_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_filmstrip_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Filmstrip/svg/ic_refineui_filmstrip_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_filmstrip_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Filmstrip/svg/ic_refineui_filmstrip_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_filmstrip_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Filmstrip/svg/ic_refineui_filmstrip_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_filmstrip_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Filmstrip/svg/ic_refineui_filmstrip_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_filmstrip_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Filmstrip/svg/ic_refineui_filmstrip_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_filmstrip_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Filmstrip/svg/ic_refineui_filmstrip_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_filmstrip_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Filmstrip/svg/ic_refineui_filmstrip_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_filmstrip_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Filmstrip/svg/ic_refineui_filmstrip_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_filmstrip_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Filmstrip/svg/ic_refineui_filmstrip_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_filmstrip_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Filmstrip/svg/ic_refineui_filmstrip_28_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983052,
  					unicodeHex: "\\F000C",
  					cssClass: "ic_refineui_filmstrip_16_regular"
  				},
  				filled: {
  					unicode: 983054,
  					unicodeHex: "\\F000E",
  					cssClass: "ic_refineui_filmstrip_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983057,
  					unicodeHex: "\\F0011",
  					cssClass: "ic_refineui_filmstrip_20_regular"
  				},
  				filled: {
  					unicode: 983056,
  					unicodeHex: "\\F0010",
  					cssClass: "ic_refineui_filmstrip_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983054,
  					unicodeHex: "\\F000E",
  					cssClass: "ic_refineui_filmstrip_24_regular"
  				},
  				filled: {
  					unicode: 983053,
  					unicodeHex: "\\F000D",
  					cssClass: "ic_refineui_filmstrip_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983055,
  					unicodeHex: "\\F000F",
  					cssClass: "ic_refineui_filmstrip_28_regular"
  				},
  				filled: {
  					unicode: 983057,
  					unicodeHex: "\\F0011",
  					cssClass: "ic_refineui_filmstrip_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983056,
  					unicodeHex: "\\F0010",
  					cssClass: "ic_refineui_filmstrip_32_regular"
  				},
  				filled: {
  					unicode: 983052,
  					unicodeHex: "\\F000C",
  					cssClass: "ic_refineui_filmstrip_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983053,
  					unicodeHex: "\\F000D",
  					cssClass: "ic_refineui_filmstrip_48_regular"
  				},
  				filled: {
  					unicode: 983055,
  					unicodeHex: "\\F000F",
  					cssClass: "ic_refineui_filmstrip_48_filled"
  				}
  			}
  		}
  	},
  	Organization: {
  		name: "Organization",
  		slug: "organization",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in organization scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_organization_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Organization/svg/ic_refineui_organization_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_organization_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Organization/svg/ic_refineui_organization_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_organization_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Organization/svg/ic_refineui_organization_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_organization_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Organization/svg/ic_refineui_organization_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_organization_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Organization/svg/ic_refineui_organization_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_organization_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Organization/svg/ic_refineui_organization_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_organization_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Organization/svg/ic_refineui_organization_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_organization_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Organization/svg/ic_refineui_organization_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_organization_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Organization/svg/ic_refineui_organization_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_organization_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Organization/svg/ic_refineui_organization_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_organization_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Organization/svg/ic_refineui_organization_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_organization_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Organization/svg/ic_refineui_organization_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983062,
  					unicodeHex: "\\F0016",
  					cssClass: "ic_refineui_organization_16_regular"
  				},
  				filled: {
  					unicode: 983063,
  					unicodeHex: "\\F0017",
  					cssClass: "ic_refineui_organization_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983058,
  					unicodeHex: "\\F0012",
  					cssClass: "ic_refineui_organization_20_regular"
  				},
  				filled: {
  					unicode: 983059,
  					unicodeHex: "\\F0013",
  					cssClass: "ic_refineui_organization_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983060,
  					unicodeHex: "\\F0014",
  					cssClass: "ic_refineui_organization_24_regular"
  				},
  				filled: {
  					unicode: 983062,
  					unicodeHex: "\\F0016",
  					cssClass: "ic_refineui_organization_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983059,
  					unicodeHex: "\\F0013",
  					cssClass: "ic_refineui_organization_28_regular"
  				},
  				filled: {
  					unicode: 983060,
  					unicodeHex: "\\F0014",
  					cssClass: "ic_refineui_organization_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983063,
  					unicodeHex: "\\F0017",
  					cssClass: "ic_refineui_organization_32_regular"
  				},
  				filled: {
  					unicode: 983061,
  					unicodeHex: "\\F0015",
  					cssClass: "ic_refineui_organization_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983061,
  					unicodeHex: "\\F0015",
  					cssClass: "ic_refineui_organization_48_regular"
  				},
  				filled: {
  					unicode: 983058,
  					unicodeHex: "\\F0012",
  					cssClass: "ic_refineui_organization_48_filled"
  				}
  			}
  		}
  	},
  	Pause: {
  		name: "Pause",
  		slug: "pause",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in pause scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_pause_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Pause/svg/ic_refineui_pause_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pause_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Pause/svg/ic_refineui_pause_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pause_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Pause/svg/ic_refineui_pause_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pause_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Pause/svg/ic_refineui_pause_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pause_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Pause/svg/ic_refineui_pause_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pause_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Pause/svg/ic_refineui_pause_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pause_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Pause/svg/ic_refineui_pause_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pause_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Pause/svg/ic_refineui_pause_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pause_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Pause/svg/ic_refineui_pause_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pause_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Pause/svg/ic_refineui_pause_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pause_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Pause/svg/ic_refineui_pause_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pause_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Pause/svg/ic_refineui_pause_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983084,
  					unicodeHex: "\\F002C",
  					cssClass: "ic_refineui_pause_16_regular"
  				},
  				filled: {
  					unicode: 983083,
  					unicodeHex: "\\F002B",
  					cssClass: "ic_refineui_pause_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983087,
  					unicodeHex: "\\F002F",
  					cssClass: "ic_refineui_pause_20_regular"
  				},
  				filled: {
  					unicode: 983087,
  					unicodeHex: "\\F002F",
  					cssClass: "ic_refineui_pause_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983086,
  					unicodeHex: "\\F002E",
  					cssClass: "ic_refineui_pause_24_regular"
  				},
  				filled: {
  					unicode: 983084,
  					unicodeHex: "\\F002C",
  					cssClass: "ic_refineui_pause_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983083,
  					unicodeHex: "\\F002B",
  					cssClass: "ic_refineui_pause_28_regular"
  				},
  				filled: {
  					unicode: 983086,
  					unicodeHex: "\\F002E",
  					cssClass: "ic_refineui_pause_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983082,
  					unicodeHex: "\\F002A",
  					cssClass: "ic_refineui_pause_32_regular"
  				},
  				filled: {
  					unicode: 983082,
  					unicodeHex: "\\F002A",
  					cssClass: "ic_refineui_pause_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983085,
  					unicodeHex: "\\F002D",
  					cssClass: "ic_refineui_pause_48_regular"
  				},
  				filled: {
  					unicode: 983085,
  					unicodeHex: "\\F002D",
  					cssClass: "ic_refineui_pause_48_filled"
  				}
  			}
  		}
  	},
  	Vote: {
  		name: "Vote",
  		slug: "vote",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in vote scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_vote_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Vote/svg/ic_refineui_vote_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_vote_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Vote/svg/ic_refineui_vote_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_vote_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Vote/svg/ic_refineui_vote_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_vote_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Vote/svg/ic_refineui_vote_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_vote_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Vote/svg/ic_refineui_vote_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_vote_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Vote/svg/ic_refineui_vote_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_vote_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Vote/svg/ic_refineui_vote_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_vote_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Vote/svg/ic_refineui_vote_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_vote_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Vote/svg/ic_refineui_vote_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_vote_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Vote/svg/ic_refineui_vote_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_vote_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Vote/svg/ic_refineui_vote_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_vote_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Vote/svg/ic_refineui_vote_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983111,
  					unicodeHex: "\\F0047",
  					cssClass: "ic_refineui_vote_16_regular"
  				},
  				filled: {
  					unicode: 983107,
  					unicodeHex: "\\F0043",
  					cssClass: "ic_refineui_vote_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983106,
  					unicodeHex: "\\F0042",
  					cssClass: "ic_refineui_vote_20_regular"
  				},
  				filled: {
  					unicode: 983109,
  					unicodeHex: "\\F0045",
  					cssClass: "ic_refineui_vote_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983109,
  					unicodeHex: "\\F0045",
  					cssClass: "ic_refineui_vote_24_regular"
  				},
  				filled: {
  					unicode: 983106,
  					unicodeHex: "\\F0042",
  					cssClass: "ic_refineui_vote_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983108,
  					unicodeHex: "\\F0044",
  					cssClass: "ic_refineui_vote_28_regular"
  				},
  				filled: {
  					unicode: 983110,
  					unicodeHex: "\\F0046",
  					cssClass: "ic_refineui_vote_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983107,
  					unicodeHex: "\\F0043",
  					cssClass: "ic_refineui_vote_32_regular"
  				},
  				filled: {
  					unicode: 983108,
  					unicodeHex: "\\F0044",
  					cssClass: "ic_refineui_vote_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983110,
  					unicodeHex: "\\F0046",
  					cssClass: "ic_refineui_vote_48_regular"
  				},
  				filled: {
  					unicode: 983111,
  					unicodeHex: "\\F0047",
  					cssClass: "ic_refineui_vote_48_filled"
  				}
  			}
  		}
  	},
  	Power: {
  		name: "Power",
  		slug: "power",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in power scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_power_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Power/svg/ic_refineui_power_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_power_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Power/svg/ic_refineui_power_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_power_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Power/svg/ic_refineui_power_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_power_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Power/svg/ic_refineui_power_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_power_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Power/svg/ic_refineui_power_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_power_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Power/svg/ic_refineui_power_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_power_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Power/svg/ic_refineui_power_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_power_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Power/svg/ic_refineui_power_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_power_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Power/svg/ic_refineui_power_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_power_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Power/svg/ic_refineui_power_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_power_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Power/svg/ic_refineui_power_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_power_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Power/svg/ic_refineui_power_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983114,
  					unicodeHex: "\\F004A",
  					cssClass: "ic_refineui_power_16_regular"
  				},
  				filled: {
  					unicode: 983116,
  					unicodeHex: "\\F004C",
  					cssClass: "ic_refineui_power_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983117,
  					unicodeHex: "\\F004D",
  					cssClass: "ic_refineui_power_20_regular"
  				},
  				filled: {
  					unicode: 983112,
  					unicodeHex: "\\F0048",
  					cssClass: "ic_refineui_power_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983115,
  					unicodeHex: "\\F004B",
  					cssClass: "ic_refineui_power_24_regular"
  				},
  				filled: {
  					unicode: 983115,
  					unicodeHex: "\\F004B",
  					cssClass: "ic_refineui_power_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983116,
  					unicodeHex: "\\F004C",
  					cssClass: "ic_refineui_power_28_regular"
  				},
  				filled: {
  					unicode: 983113,
  					unicodeHex: "\\F0049",
  					cssClass: "ic_refineui_power_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983112,
  					unicodeHex: "\\F0048",
  					cssClass: "ic_refineui_power_32_regular"
  				},
  				filled: {
  					unicode: 983117,
  					unicodeHex: "\\F004D",
  					cssClass: "ic_refineui_power_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983113,
  					unicodeHex: "\\F0049",
  					cssClass: "ic_refineui_power_48_regular"
  				},
  				filled: {
  					unicode: 983114,
  					unicodeHex: "\\F004A",
  					cssClass: "ic_refineui_power_48_filled"
  				}
  			}
  		}
  	},
  	Crown: {
  		name: "Crown",
  		slug: "crown",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in crown scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_crown_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Crown/svg/ic_refineui_crown_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_crown_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Crown/svg/ic_refineui_crown_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_crown_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Crown/svg/ic_refineui_crown_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_crown_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Crown/svg/ic_refineui_crown_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_crown_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Crown/svg/ic_refineui_crown_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_crown_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Crown/svg/ic_refineui_crown_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_crown_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Crown/svg/ic_refineui_crown_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_crown_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Crown/svg/ic_refineui_crown_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_crown_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Crown/svg/ic_refineui_crown_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_crown_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Crown/svg/ic_refineui_crown_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_crown_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Crown/svg/ic_refineui_crown_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_crown_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Crown/svg/ic_refineui_crown_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983128,
  					unicodeHex: "\\F0058",
  					cssClass: "ic_refineui_crown_16_regular"
  				},
  				filled: {
  					unicode: 983128,
  					unicodeHex: "\\F0058",
  					cssClass: "ic_refineui_crown_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983124,
  					unicodeHex: "\\F0054",
  					cssClass: "ic_refineui_crown_20_regular"
  				},
  				filled: {
  					unicode: 983124,
  					unicodeHex: "\\F0054",
  					cssClass: "ic_refineui_crown_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983126,
  					unicodeHex: "\\F0056",
  					cssClass: "ic_refineui_crown_24_regular"
  				},
  				filled: {
  					unicode: 983127,
  					unicodeHex: "\\F0057",
  					cssClass: "ic_refineui_crown_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983125,
  					unicodeHex: "\\F0055",
  					cssClass: "ic_refineui_crown_28_regular"
  				},
  				filled: {
  					unicode: 983125,
  					unicodeHex: "\\F0055",
  					cssClass: "ic_refineui_crown_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983129,
  					unicodeHex: "\\F0059",
  					cssClass: "ic_refineui_crown_32_regular"
  				},
  				filled: {
  					unicode: 983129,
  					unicodeHex: "\\F0059",
  					cssClass: "ic_refineui_crown_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983127,
  					unicodeHex: "\\F0057",
  					cssClass: "ic_refineui_crown_48_regular"
  				},
  				filled: {
  					unicode: 983126,
  					unicodeHex: "\\F0056",
  					cssClass: "ic_refineui_crown_48_filled"
  				}
  			}
  		}
  	},
  	Shield: {
  		name: "Shield",
  		slug: "shield",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in shield scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_shield_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Shield/svg/ic_refineui_shield_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_shield_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Shield/svg/ic_refineui_shield_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_shield_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Shield/svg/ic_refineui_shield_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_shield_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Shield/svg/ic_refineui_shield_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_shield_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Shield/svg/ic_refineui_shield_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_shield_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Shield/svg/ic_refineui_shield_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_shield_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Shield/svg/ic_refineui_shield_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_shield_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Shield/svg/ic_refineui_shield_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_shield_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Shield/svg/ic_refineui_shield_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_shield_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Shield/svg/ic_refineui_shield_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_shield_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Shield/svg/ic_refineui_shield_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_shield_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Shield/svg/ic_refineui_shield_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983132,
  					unicodeHex: "\\F005C",
  					cssClass: "ic_refineui_shield_16_regular"
  				},
  				filled: {
  					unicode: 983131,
  					unicodeHex: "\\F005B",
  					cssClass: "ic_refineui_shield_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983135,
  					unicodeHex: "\\F005F",
  					cssClass: "ic_refineui_shield_20_regular"
  				},
  				filled: {
  					unicode: 983135,
  					unicodeHex: "\\F005F",
  					cssClass: "ic_refineui_shield_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983133,
  					unicodeHex: "\\F005D",
  					cssClass: "ic_refineui_shield_24_regular"
  				},
  				filled: {
  					unicode: 983132,
  					unicodeHex: "\\F005C",
  					cssClass: "ic_refineui_shield_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983130,
  					unicodeHex: "\\F005A",
  					cssClass: "ic_refineui_shield_28_regular"
  				},
  				filled: {
  					unicode: 983134,
  					unicodeHex: "\\F005E",
  					cssClass: "ic_refineui_shield_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983134,
  					unicodeHex: "\\F005E",
  					cssClass: "ic_refineui_shield_32_regular"
  				},
  				filled: {
  					unicode: 983130,
  					unicodeHex: "\\F005A",
  					cssClass: "ic_refineui_shield_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983131,
  					unicodeHex: "\\F005B",
  					cssClass: "ic_refineui_shield_48_regular"
  				},
  				filled: {
  					unicode: 983133,
  					unicodeHex: "\\F005D",
  					cssClass: "ic_refineui_shield_48_filled"
  				}
  			}
  		}
  	},
  	Note: {
  		name: "Note",
  		slug: "note",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in note scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_note_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Note/svg/ic_refineui_note_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_note_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Note/svg/ic_refineui_note_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_note_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Note/svg/ic_refineui_note_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_note_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Note/svg/ic_refineui_note_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_note_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Note/svg/ic_refineui_note_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_note_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Note/svg/ic_refineui_note_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_note_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Note/svg/ic_refineui_note_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_note_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Note/svg/ic_refineui_note_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_note_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Note/svg/ic_refineui_note_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_note_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Note/svg/ic_refineui_note_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_note_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Note/svg/ic_refineui_note_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_note_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Note/svg/ic_refineui_note_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983137,
  					unicodeHex: "\\F0061",
  					cssClass: "ic_refineui_note_16_regular"
  				},
  				filled: {
  					unicode: 983140,
  					unicodeHex: "\\F0064",
  					cssClass: "ic_refineui_note_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983136,
  					unicodeHex: "\\F0060",
  					cssClass: "ic_refineui_note_20_regular"
  				},
  				filled: {
  					unicode: 983138,
  					unicodeHex: "\\F0062",
  					cssClass: "ic_refineui_note_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983139,
  					unicodeHex: "\\F0063",
  					cssClass: "ic_refineui_note_24_regular"
  				},
  				filled: {
  					unicode: 983141,
  					unicodeHex: "\\F0065",
  					cssClass: "ic_refineui_note_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983140,
  					unicodeHex: "\\F0064",
  					cssClass: "ic_refineui_note_28_regular"
  				},
  				filled: {
  					unicode: 983137,
  					unicodeHex: "\\F0061",
  					cssClass: "ic_refineui_note_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983141,
  					unicodeHex: "\\F0065",
  					cssClass: "ic_refineui_note_32_regular"
  				},
  				filled: {
  					unicode: 983139,
  					unicodeHex: "\\F0063",
  					cssClass: "ic_refineui_note_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983138,
  					unicodeHex: "\\F0062",
  					cssClass: "ic_refineui_note_48_regular"
  				},
  				filled: {
  					unicode: 983136,
  					unicodeHex: "\\F0060",
  					cssClass: "ic_refineui_note_48_filled"
  				}
  			}
  		}
  	},
  	Orientation: {
  		name: "Orientation",
  		slug: "orientation",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in orientation scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_orientation_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Orientation/svg/ic_refineui_orientation_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_orientation_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Orientation/svg/ic_refineui_orientation_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_orientation_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Orientation/svg/ic_refineui_orientation_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_orientation_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Orientation/svg/ic_refineui_orientation_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_orientation_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Orientation/svg/ic_refineui_orientation_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_orientation_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Orientation/svg/ic_refineui_orientation_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_orientation_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Orientation/svg/ic_refineui_orientation_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_orientation_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Orientation/svg/ic_refineui_orientation_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_orientation_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Orientation/svg/ic_refineui_orientation_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_orientation_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Orientation/svg/ic_refineui_orientation_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_orientation_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Orientation/svg/ic_refineui_orientation_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_orientation_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Orientation/svg/ic_refineui_orientation_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983144,
  					unicodeHex: "\\F0068",
  					cssClass: "ic_refineui_orientation_16_regular"
  				},
  				filled: {
  					unicode: 983146,
  					unicodeHex: "\\F006A",
  					cssClass: "ic_refineui_orientation_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983142,
  					unicodeHex: "\\F0066",
  					cssClass: "ic_refineui_orientation_20_regular"
  				},
  				filled: {
  					unicode: 983144,
  					unicodeHex: "\\F0068",
  					cssClass: "ic_refineui_orientation_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983143,
  					unicodeHex: "\\F0067",
  					cssClass: "ic_refineui_orientation_24_regular"
  				},
  				filled: {
  					unicode: 983147,
  					unicodeHex: "\\F006B",
  					cssClass: "ic_refineui_orientation_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983146,
  					unicodeHex: "\\F006A",
  					cssClass: "ic_refineui_orientation_28_regular"
  				},
  				filled: {
  					unicode: 983143,
  					unicodeHex: "\\F0067",
  					cssClass: "ic_refineui_orientation_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983147,
  					unicodeHex: "\\F006B",
  					cssClass: "ic_refineui_orientation_32_regular"
  				},
  				filled: {
  					unicode: 983145,
  					unicodeHex: "\\F0069",
  					cssClass: "ic_refineui_orientation_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983145,
  					unicodeHex: "\\F0069",
  					cssClass: "ic_refineui_orientation_48_regular"
  				},
  				filled: {
  					unicode: 983142,
  					unicodeHex: "\\F0066",
  					cssClass: "ic_refineui_orientation_48_filled"
  				}
  			}
  		}
  	},
  	Settings: {
  		name: "Settings",
  		slug: "settings",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in settings scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_settings_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Settings/svg/ic_refineui_settings_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_settings_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Settings/svg/ic_refineui_settings_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_settings_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Settings/svg/ic_refineui_settings_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_settings_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Settings/svg/ic_refineui_settings_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_settings_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Settings/svg/ic_refineui_settings_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_settings_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Settings/svg/ic_refineui_settings_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_settings_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Settings/svg/ic_refineui_settings_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_settings_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Settings/svg/ic_refineui_settings_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_settings_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Settings/svg/ic_refineui_settings_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_settings_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Settings/svg/ic_refineui_settings_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_settings_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Settings/svg/ic_refineui_settings_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_settings_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Settings/svg/ic_refineui_settings_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983151,
  					unicodeHex: "\\F006F",
  					cssClass: "ic_refineui_settings_16_regular"
  				},
  				filled: {
  					unicode: 983149,
  					unicodeHex: "\\F006D",
  					cssClass: "ic_refineui_settings_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983153,
  					unicodeHex: "\\F0071",
  					cssClass: "ic_refineui_settings_20_regular"
  				},
  				filled: {
  					unicode: 983151,
  					unicodeHex: "\\F006F",
  					cssClass: "ic_refineui_settings_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983152,
  					unicodeHex: "\\F0070",
  					cssClass: "ic_refineui_settings_24_regular"
  				},
  				filled: {
  					unicode: 983148,
  					unicodeHex: "\\F006C",
  					cssClass: "ic_refineui_settings_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983149,
  					unicodeHex: "\\F006D",
  					cssClass: "ic_refineui_settings_28_regular"
  				},
  				filled: {
  					unicode: 983152,
  					unicodeHex: "\\F0070",
  					cssClass: "ic_refineui_settings_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983148,
  					unicodeHex: "\\F006C",
  					cssClass: "ic_refineui_settings_32_regular"
  				},
  				filled: {
  					unicode: 983150,
  					unicodeHex: "\\F006E",
  					cssClass: "ic_refineui_settings_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983150,
  					unicodeHex: "\\F006E",
  					cssClass: "ic_refineui_settings_48_regular"
  				},
  				filled: {
  					unicode: 983153,
  					unicodeHex: "\\F0071",
  					cssClass: "ic_refineui_settings_48_filled"
  				}
  			}
  		}
  	},
  	Home: {
  		name: "Home",
  		slug: "home",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in home scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_home_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Home/svg/ic_refineui_home_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_home_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Home/svg/ic_refineui_home_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_home_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Home/svg/ic_refineui_home_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_home_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Home/svg/ic_refineui_home_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_home_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Home/svg/ic_refineui_home_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_home_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Home/svg/ic_refineui_home_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_home_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Home/svg/ic_refineui_home_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_home_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Home/svg/ic_refineui_home_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_home_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Home/svg/ic_refineui_home_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_home_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Home/svg/ic_refineui_home_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_home_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Home/svg/ic_refineui_home_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_home_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Home/svg/ic_refineui_home_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983156,
  					unicodeHex: "\\F0074",
  					cssClass: "ic_refineui_home_16_regular"
  				},
  				filled: {
  					unicode: 983159,
  					unicodeHex: "\\F0077",
  					cssClass: "ic_refineui_home_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983159,
  					unicodeHex: "\\F0077",
  					cssClass: "ic_refineui_home_20_regular"
  				},
  				filled: {
  					unicode: 983155,
  					unicodeHex: "\\F0073",
  					cssClass: "ic_refineui_home_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983155,
  					unicodeHex: "\\F0073",
  					cssClass: "ic_refineui_home_24_regular"
  				},
  				filled: {
  					unicode: 983158,
  					unicodeHex: "\\F0076",
  					cssClass: "ic_refineui_home_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983158,
  					unicodeHex: "\\F0076",
  					cssClass: "ic_refineui_home_28_regular"
  				},
  				filled: {
  					unicode: 983156,
  					unicodeHex: "\\F0074",
  					cssClass: "ic_refineui_home_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983154,
  					unicodeHex: "\\F0072",
  					cssClass: "ic_refineui_home_32_regular"
  				},
  				filled: {
  					unicode: 983157,
  					unicodeHex: "\\F0075",
  					cssClass: "ic_refineui_home_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983157,
  					unicodeHex: "\\F0075",
  					cssClass: "ic_refineui_home_48_regular"
  				},
  				filled: {
  					unicode: 983154,
  					unicodeHex: "\\F0072",
  					cssClass: "ic_refineui_home_48_filled"
  				}
  			}
  		}
  	},
  	Database: {
  		name: "Database",
  		slug: "database",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in database scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_database_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Database/svg/ic_refineui_database_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_database_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Database/svg/ic_refineui_database_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_database_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Database/svg/ic_refineui_database_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_database_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Database/svg/ic_refineui_database_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_database_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Database/svg/ic_refineui_database_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_database_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Database/svg/ic_refineui_database_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_database_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Database/svg/ic_refineui_database_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_database_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Database/svg/ic_refineui_database_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_database_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Database/svg/ic_refineui_database_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_database_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Database/svg/ic_refineui_database_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_database_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Database/svg/ic_refineui_database_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_database_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Database/svg/ic_refineui_database_48_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983164,
  					unicodeHex: "\\F007C",
  					cssClass: "ic_refineui_database_16_regular"
  				},
  				filled: {
  					unicode: 983164,
  					unicodeHex: "\\F007C",
  					cssClass: "ic_refineui_database_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983160,
  					unicodeHex: "\\F0078",
  					cssClass: "ic_refineui_database_20_regular"
  				},
  				filled: {
  					unicode: 983160,
  					unicodeHex: "\\F0078",
  					cssClass: "ic_refineui_database_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983163,
  					unicodeHex: "\\F007B",
  					cssClass: "ic_refineui_database_24_regular"
  				},
  				filled: {
  					unicode: 983163,
  					unicodeHex: "\\F007B",
  					cssClass: "ic_refineui_database_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983162,
  					unicodeHex: "\\F007A",
  					cssClass: "ic_refineui_database_28_regular"
  				},
  				filled: {
  					unicode: 983161,
  					unicodeHex: "\\F0079",
  					cssClass: "ic_refineui_database_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983161,
  					unicodeHex: "\\F0079",
  					cssClass: "ic_refineui_database_32_regular"
  				},
  				filled: {
  					unicode: 983165,
  					unicodeHex: "\\F007D",
  					cssClass: "ic_refineui_database_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983165,
  					unicodeHex: "\\F007D",
  					cssClass: "ic_refineui_database_48_regular"
  				},
  				filled: {
  					unicode: 983162,
  					unicodeHex: "\\F007A",
  					cssClass: "ic_refineui_database_48_filled"
  				}
  			}
  		}
  	},
  	Options: {
  		name: "Options",
  		slug: "options",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in options scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_options_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Options/svg/ic_refineui_options_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_options_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Options/svg/ic_refineui_options_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_options_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Options/svg/ic_refineui_options_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_options_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Options/svg/ic_refineui_options_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_options_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Options/svg/ic_refineui_options_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_options_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Options/svg/ic_refineui_options_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_options_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Options/svg/ic_refineui_options_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_options_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Options/svg/ic_refineui_options_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_options_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Options/svg/ic_refineui_options_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_options_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Options/svg/ic_refineui_options_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_options_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Options/svg/ic_refineui_options_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_options_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Options/svg/ic_refineui_options_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983170,
  					unicodeHex: "\\F0082",
  					cssClass: "ic_refineui_options_16_regular"
  				},
  				filled: {
  					unicode: 983170,
  					unicodeHex: "\\F0082",
  					cssClass: "ic_refineui_options_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983166,
  					unicodeHex: "\\F007E",
  					cssClass: "ic_refineui_options_20_regular"
  				},
  				filled: {
  					unicode: 983166,
  					unicodeHex: "\\F007E",
  					cssClass: "ic_refineui_options_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983168,
  					unicodeHex: "\\F0080",
  					cssClass: "ic_refineui_options_24_regular"
  				},
  				filled: {
  					unicode: 983169,
  					unicodeHex: "\\F0081",
  					cssClass: "ic_refineui_options_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983171,
  					unicodeHex: "\\F0083",
  					cssClass: "ic_refineui_options_28_regular"
  				},
  				filled: {
  					unicode: 983167,
  					unicodeHex: "\\F007F",
  					cssClass: "ic_refineui_options_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983167,
  					unicodeHex: "\\F007F",
  					cssClass: "ic_refineui_options_32_regular"
  				},
  				filled: {
  					unicode: 983171,
  					unicodeHex: "\\F0083",
  					cssClass: "ic_refineui_options_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983169,
  					unicodeHex: "\\F0081",
  					cssClass: "ic_refineui_options_48_regular"
  				},
  				filled: {
  					unicode: 983168,
  					unicodeHex: "\\F0080",
  					cssClass: "ic_refineui_options_48_filled"
  				}
  			}
  		}
  	},
  	Dust: {
  		name: "Dust",
  		slug: "dust",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in dust scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_dust_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Dust/svg/ic_refineui_dust_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dust_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Dust/svg/ic_refineui_dust_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dust_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Dust/svg/ic_refineui_dust_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dust_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Dust/svg/ic_refineui_dust_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dust_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Dust/svg/ic_refineui_dust_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dust_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Dust/svg/ic_refineui_dust_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dust_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Dust/svg/ic_refineui_dust_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dust_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Dust/svg/ic_refineui_dust_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dust_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Dust/svg/ic_refineui_dust_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dust_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Dust/svg/ic_refineui_dust_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dust_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Dust/svg/ic_refineui_dust_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dust_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Dust/svg/ic_refineui_dust_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983175,
  					unicodeHex: "\\F0087",
  					cssClass: "ic_refineui_dust_16_regular"
  				},
  				filled: {
  					unicode: 983175,
  					unicodeHex: "\\F0087",
  					cssClass: "ic_refineui_dust_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983172,
  					unicodeHex: "\\F0084",
  					cssClass: "ic_refineui_dust_20_regular"
  				},
  				filled: {
  					unicode: 983173,
  					unicodeHex: "\\F0085",
  					cssClass: "ic_refineui_dust_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983174,
  					unicodeHex: "\\F0086",
  					cssClass: "ic_refineui_dust_24_regular"
  				},
  				filled: {
  					unicode: 983176,
  					unicodeHex: "\\F0088",
  					cssClass: "ic_refineui_dust_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983177,
  					unicodeHex: "\\F0089",
  					cssClass: "ic_refineui_dust_28_regular"
  				},
  				filled: {
  					unicode: 983172,
  					unicodeHex: "\\F0084",
  					cssClass: "ic_refineui_dust_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983173,
  					unicodeHex: "\\F0085",
  					cssClass: "ic_refineui_dust_32_regular"
  				},
  				filled: {
  					unicode: 983177,
  					unicodeHex: "\\F0089",
  					cssClass: "ic_refineui_dust_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983176,
  					unicodeHex: "\\F0088",
  					cssClass: "ic_refineui_dust_48_regular"
  				},
  				filled: {
  					unicode: 983174,
  					unicodeHex: "\\F0086",
  					cssClass: "ic_refineui_dust_48_filled"
  				}
  			}
  		}
  	},
  	Luggage: {
  		name: "Luggage",
  		slug: "luggage",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in luggage scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_luggage_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Luggage/svg/ic_refineui_luggage_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_luggage_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Luggage/svg/ic_refineui_luggage_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_luggage_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Luggage/svg/ic_refineui_luggage_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_luggage_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Luggage/svg/ic_refineui_luggage_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_luggage_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Luggage/svg/ic_refineui_luggage_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_luggage_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Luggage/svg/ic_refineui_luggage_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_luggage_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Luggage/svg/ic_refineui_luggage_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_luggage_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Luggage/svg/ic_refineui_luggage_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_luggage_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Luggage/svg/ic_refineui_luggage_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_luggage_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Luggage/svg/ic_refineui_luggage_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_luggage_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Luggage/svg/ic_refineui_luggage_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_luggage_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Luggage/svg/ic_refineui_luggage_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983180,
  					unicodeHex: "\\F008C",
  					cssClass: "ic_refineui_luggage_16_regular"
  				},
  				filled: {
  					unicode: 983179,
  					unicodeHex: "\\F008B",
  					cssClass: "ic_refineui_luggage_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983178,
  					unicodeHex: "\\F008A",
  					cssClass: "ic_refineui_luggage_20_regular"
  				},
  				filled: {
  					unicode: 983181,
  					unicodeHex: "\\F008D",
  					cssClass: "ic_refineui_luggage_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983182,
  					unicodeHex: "\\F008E",
  					cssClass: "ic_refineui_luggage_24_regular"
  				},
  				filled: {
  					unicode: 983178,
  					unicodeHex: "\\F008A",
  					cssClass: "ic_refineui_luggage_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983179,
  					unicodeHex: "\\F008B",
  					cssClass: "ic_refineui_luggage_28_regular"
  				},
  				filled: {
  					unicode: 983182,
  					unicodeHex: "\\F008E",
  					cssClass: "ic_refineui_luggage_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983183,
  					unicodeHex: "\\F008F",
  					cssClass: "ic_refineui_luggage_32_regular"
  				},
  				filled: {
  					unicode: 983180,
  					unicodeHex: "\\F008C",
  					cssClass: "ic_refineui_luggage_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983181,
  					unicodeHex: "\\F008D",
  					cssClass: "ic_refineui_luggage_48_regular"
  				},
  				filled: {
  					unicode: 983183,
  					unicodeHex: "\\F008F",
  					cssClass: "ic_refineui_luggage_48_filled"
  				}
  			}
  		}
  	},
  	Autosum: {
  		name: "Autosum",
  		slug: "autosum",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in autosum scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_autosum_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Autosum/svg/ic_refineui_autosum_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_autosum_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Autosum/svg/ic_refineui_autosum_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_autosum_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Autosum/svg/ic_refineui_autosum_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_autosum_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Autosum/svg/ic_refineui_autosum_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_autosum_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Autosum/svg/ic_refineui_autosum_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_autosum_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Autosum/svg/ic_refineui_autosum_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_autosum_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Autosum/svg/ic_refineui_autosum_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_autosum_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Autosum/svg/ic_refineui_autosum_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_autosum_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Autosum/svg/ic_refineui_autosum_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_autosum_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Autosum/svg/ic_refineui_autosum_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_autosum_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Autosum/svg/ic_refineui_autosum_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_autosum_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Autosum/svg/ic_refineui_autosum_48_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983194,
  					unicodeHex: "\\F009A",
  					cssClass: "ic_refineui_autosum_16_regular"
  				},
  				filled: {
  					unicode: 983190,
  					unicodeHex: "\\F0096",
  					cssClass: "ic_refineui_autosum_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983190,
  					unicodeHex: "\\F0096",
  					cssClass: "ic_refineui_autosum_20_regular"
  				},
  				filled: {
  					unicode: 983194,
  					unicodeHex: "\\F009A",
  					cssClass: "ic_refineui_autosum_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983193,
  					unicodeHex: "\\F0099",
  					cssClass: "ic_refineui_autosum_24_regular"
  				},
  				filled: {
  					unicode: 983191,
  					unicodeHex: "\\F0097",
  					cssClass: "ic_refineui_autosum_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983192,
  					unicodeHex: "\\F0098",
  					cssClass: "ic_refineui_autosum_28_regular"
  				},
  				filled: {
  					unicode: 983193,
  					unicodeHex: "\\F0099",
  					cssClass: "ic_refineui_autosum_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983191,
  					unicodeHex: "\\F0097",
  					cssClass: "ic_refineui_autosum_32_regular"
  				},
  				filled: {
  					unicode: 983192,
  					unicodeHex: "\\F0098",
  					cssClass: "ic_refineui_autosum_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983195,
  					unicodeHex: "\\F009B",
  					cssClass: "ic_refineui_autosum_48_regular"
  				},
  				filled: {
  					unicode: 983195,
  					unicodeHex: "\\F009B",
  					cssClass: "ic_refineui_autosum_48_filled"
  				}
  			}
  		}
  	},
  	Pipeline: {
  		name: "Pipeline",
  		slug: "pipeline",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in pipeline scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_pipeline_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Pipeline/svg/ic_refineui_pipeline_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pipeline_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Pipeline/svg/ic_refineui_pipeline_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pipeline_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Pipeline/svg/ic_refineui_pipeline_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pipeline_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Pipeline/svg/ic_refineui_pipeline_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pipeline_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Pipeline/svg/ic_refineui_pipeline_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pipeline_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Pipeline/svg/ic_refineui_pipeline_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pipeline_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Pipeline/svg/ic_refineui_pipeline_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pipeline_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Pipeline/svg/ic_refineui_pipeline_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pipeline_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Pipeline/svg/ic_refineui_pipeline_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pipeline_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Pipeline/svg/ic_refineui_pipeline_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pipeline_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Pipeline/svg/ic_refineui_pipeline_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pipeline_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Pipeline/svg/ic_refineui_pipeline_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983199,
  					unicodeHex: "\\F009F",
  					cssClass: "ic_refineui_pipeline_16_regular"
  				},
  				filled: {
  					unicode: 983200,
  					unicodeHex: "\\F00A0",
  					cssClass: "ic_refineui_pipeline_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983201,
  					unicodeHex: "\\F00A1",
  					cssClass: "ic_refineui_pipeline_20_regular"
  				},
  				filled: {
  					unicode: 983198,
  					unicodeHex: "\\F009E",
  					cssClass: "ic_refineui_pipeline_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983197,
  					unicodeHex: "\\F009D",
  					cssClass: "ic_refineui_pipeline_24_regular"
  				},
  				filled: {
  					unicode: 983201,
  					unicodeHex: "\\F00A1",
  					cssClass: "ic_refineui_pipeline_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983200,
  					unicodeHex: "\\F00A0",
  					cssClass: "ic_refineui_pipeline_28_regular"
  				},
  				filled: {
  					unicode: 983197,
  					unicodeHex: "\\F009D",
  					cssClass: "ic_refineui_pipeline_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983196,
  					unicodeHex: "\\F009C",
  					cssClass: "ic_refineui_pipeline_32_regular"
  				},
  				filled: {
  					unicode: 983199,
  					unicodeHex: "\\F009F",
  					cssClass: "ic_refineui_pipeline_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983198,
  					unicodeHex: "\\F009E",
  					cssClass: "ic_refineui_pipeline_48_regular"
  				},
  				filled: {
  					unicode: 983196,
  					unicodeHex: "\\F009C",
  					cssClass: "ic_refineui_pipeline_48_filled"
  				}
  			}
  		}
  	},
  	Drawer: {
  		name: "Drawer",
  		slug: "drawer",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in drawer scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_drawer_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Drawer/svg/ic_refineui_drawer_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drawer_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Drawer/svg/ic_refineui_drawer_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drawer_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Drawer/svg/ic_refineui_drawer_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drawer_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Drawer/svg/ic_refineui_drawer_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drawer_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Drawer/svg/ic_refineui_drawer_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drawer_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Drawer/svg/ic_refineui_drawer_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drawer_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Drawer/svg/ic_refineui_drawer_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drawer_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Drawer/svg/ic_refineui_drawer_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drawer_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Drawer/svg/ic_refineui_drawer_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drawer_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Drawer/svg/ic_refineui_drawer_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drawer_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Drawer/svg/ic_refineui_drawer_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drawer_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Drawer/svg/ic_refineui_drawer_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983205,
  					unicodeHex: "\\F00A5",
  					cssClass: "ic_refineui_drawer_16_regular"
  				},
  				filled: {
  					unicode: 983205,
  					unicodeHex: "\\F00A5",
  					cssClass: "ic_refineui_drawer_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983202,
  					unicodeHex: "\\F00A2",
  					cssClass: "ic_refineui_drawer_20_regular"
  				},
  				filled: {
  					unicode: 983203,
  					unicodeHex: "\\F00A3",
  					cssClass: "ic_refineui_drawer_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983206,
  					unicodeHex: "\\F00A6",
  					cssClass: "ic_refineui_drawer_24_regular"
  				},
  				filled: {
  					unicode: 983206,
  					unicodeHex: "\\F00A6",
  					cssClass: "ic_refineui_drawer_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983203,
  					unicodeHex: "\\F00A3",
  					cssClass: "ic_refineui_drawer_28_regular"
  				},
  				filled: {
  					unicode: 983202,
  					unicodeHex: "\\F00A2",
  					cssClass: "ic_refineui_drawer_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983207,
  					unicodeHex: "\\F00A7",
  					cssClass: "ic_refineui_drawer_32_regular"
  				},
  				filled: {
  					unicode: 983207,
  					unicodeHex: "\\F00A7",
  					cssClass: "ic_refineui_drawer_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983204,
  					unicodeHex: "\\F00A4",
  					cssClass: "ic_refineui_drawer_48_regular"
  				},
  				filled: {
  					unicode: 983204,
  					unicodeHex: "\\F00A4",
  					cssClass: "ic_refineui_drawer_48_filled"
  				}
  			}
  		}
  	},
  	Next: {
  		name: "Next",
  		slug: "next",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in next scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_next_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Next/svg/ic_refineui_next_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_next_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Next/svg/ic_refineui_next_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_next_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Next/svg/ic_refineui_next_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_next_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Next/svg/ic_refineui_next_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_next_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Next/svg/ic_refineui_next_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_next_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Next/svg/ic_refineui_next_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_next_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Next/svg/ic_refineui_next_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_next_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Next/svg/ic_refineui_next_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_next_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Next/svg/ic_refineui_next_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_next_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Next/svg/ic_refineui_next_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_next_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Next/svg/ic_refineui_next_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_next_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Next/svg/ic_refineui_next_48_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983212,
  					unicodeHex: "\\F00AC",
  					cssClass: "ic_refineui_next_16_regular"
  				},
  				filled: {
  					unicode: 983210,
  					unicodeHex: "\\F00AA",
  					cssClass: "ic_refineui_next_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983208,
  					unicodeHex: "\\F00A8",
  					cssClass: "ic_refineui_next_20_regular"
  				},
  				filled: {
  					unicode: 983212,
  					unicodeHex: "\\F00AC",
  					cssClass: "ic_refineui_next_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983211,
  					unicodeHex: "\\F00AB",
  					cssClass: "ic_refineui_next_24_regular"
  				},
  				filled: {
  					unicode: 983209,
  					unicodeHex: "\\F00A9",
  					cssClass: "ic_refineui_next_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983210,
  					unicodeHex: "\\F00AA",
  					cssClass: "ic_refineui_next_28_regular"
  				},
  				filled: {
  					unicode: 983213,
  					unicodeHex: "\\F00AD",
  					cssClass: "ic_refineui_next_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983209,
  					unicodeHex: "\\F00A9",
  					cssClass: "ic_refineui_next_32_regular"
  				},
  				filled: {
  					unicode: 983208,
  					unicodeHex: "\\F00A8",
  					cssClass: "ic_refineui_next_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983213,
  					unicodeHex: "\\F00AD",
  					cssClass: "ic_refineui_next_48_regular"
  				},
  				filled: {
  					unicode: 983211,
  					unicodeHex: "\\F00AB",
  					cssClass: "ic_refineui_next_48_filled"
  				}
  			}
  		}
  	},
  	Tablet: {
  		name: "Tablet",
  		slug: "tablet",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in tablet scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_tablet_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Tablet/svg/ic_refineui_tablet_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tablet_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Tablet/svg/ic_refineui_tablet_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tablet_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Tablet/svg/ic_refineui_tablet_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tablet_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Tablet/svg/ic_refineui_tablet_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tablet_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Tablet/svg/ic_refineui_tablet_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tablet_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Tablet/svg/ic_refineui_tablet_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tablet_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Tablet/svg/ic_refineui_tablet_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tablet_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Tablet/svg/ic_refineui_tablet_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tablet_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Tablet/svg/ic_refineui_tablet_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tablet_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Tablet/svg/ic_refineui_tablet_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tablet_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Tablet/svg/ic_refineui_tablet_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tablet_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Tablet/svg/ic_refineui_tablet_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983222,
  					unicodeHex: "\\F00B6",
  					cssClass: "ic_refineui_tablet_16_regular"
  				},
  				filled: {
  					unicode: 983224,
  					unicodeHex: "\\F00B8",
  					cssClass: "ic_refineui_tablet_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983225,
  					unicodeHex: "\\F00B9",
  					cssClass: "ic_refineui_tablet_20_regular"
  				},
  				filled: {
  					unicode: 983220,
  					unicodeHex: "\\F00B4",
  					cssClass: "ic_refineui_tablet_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983224,
  					unicodeHex: "\\F00B8",
  					cssClass: "ic_refineui_tablet_24_regular"
  				},
  				filled: {
  					unicode: 983223,
  					unicodeHex: "\\F00B7",
  					cssClass: "ic_refineui_tablet_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983221,
  					unicodeHex: "\\F00B5",
  					cssClass: "ic_refineui_tablet_28_regular"
  				},
  				filled: {
  					unicode: 983221,
  					unicodeHex: "\\F00B5",
  					cssClass: "ic_refineui_tablet_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983220,
  					unicodeHex: "\\F00B4",
  					cssClass: "ic_refineui_tablet_32_regular"
  				},
  				filled: {
  					unicode: 983225,
  					unicodeHex: "\\F00B9",
  					cssClass: "ic_refineui_tablet_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983223,
  					unicodeHex: "\\F00B7",
  					cssClass: "ic_refineui_tablet_48_regular"
  				},
  				filled: {
  					unicode: 983222,
  					unicodeHex: "\\F00B6",
  					cssClass: "ic_refineui_tablet_48_filled"
  				}
  			}
  		}
  	},
  	Piano: {
  		name: "Piano",
  		slug: "piano",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in piano scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_piano_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Piano/svg/ic_refineui_piano_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_piano_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Piano/svg/ic_refineui_piano_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_piano_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Piano/svg/ic_refineui_piano_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_piano_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Piano/svg/ic_refineui_piano_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_piano_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Piano/svg/ic_refineui_piano_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_piano_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Piano/svg/ic_refineui_piano_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_piano_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Piano/svg/ic_refineui_piano_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_piano_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Piano/svg/ic_refineui_piano_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_piano_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Piano/svg/ic_refineui_piano_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_piano_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Piano/svg/ic_refineui_piano_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_piano_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Piano/svg/ic_refineui_piano_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_piano_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Piano/svg/ic_refineui_piano_24_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983229,
  					unicodeHex: "\\F00BD",
  					cssClass: "ic_refineui_piano_16_regular"
  				},
  				filled: {
  					unicode: 983227,
  					unicodeHex: "\\F00BB",
  					cssClass: "ic_refineui_piano_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983226,
  					unicodeHex: "\\F00BA",
  					cssClass: "ic_refineui_piano_20_regular"
  				},
  				filled: {
  					unicode: 983231,
  					unicodeHex: "\\F00BF",
  					cssClass: "ic_refineui_piano_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983231,
  					unicodeHex: "\\F00BF",
  					cssClass: "ic_refineui_piano_24_regular"
  				},
  				filled: {
  					unicode: 983228,
  					unicodeHex: "\\F00BC",
  					cssClass: "ic_refineui_piano_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983228,
  					unicodeHex: "\\F00BC",
  					cssClass: "ic_refineui_piano_28_regular"
  				},
  				filled: {
  					unicode: 983230,
  					unicodeHex: "\\F00BE",
  					cssClass: "ic_refineui_piano_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983227,
  					unicodeHex: "\\F00BB",
  					cssClass: "ic_refineui_piano_32_regular"
  				},
  				filled: {
  					unicode: 983226,
  					unicodeHex: "\\F00BA",
  					cssClass: "ic_refineui_piano_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983230,
  					unicodeHex: "\\F00BE",
  					cssClass: "ic_refineui_piano_48_regular"
  				},
  				filled: {
  					unicode: 983229,
  					unicodeHex: "\\F00BD",
  					cssClass: "ic_refineui_piano_48_filled"
  				}
  			}
  		}
  	},
  	Flag: {
  		name: "Flag",
  		slug: "flag",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in flag scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_flag_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Flag/svg/ic_refineui_flag_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flag_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Flag/svg/ic_refineui_flag_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flag_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Flag/svg/ic_refineui_flag_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flag_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Flag/svg/ic_refineui_flag_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flag_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Flag/svg/ic_refineui_flag_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flag_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Flag/svg/ic_refineui_flag_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flag_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Flag/svg/ic_refineui_flag_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flag_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Flag/svg/ic_refineui_flag_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flag_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Flag/svg/ic_refineui_flag_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flag_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Flag/svg/ic_refineui_flag_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flag_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Flag/svg/ic_refineui_flag_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flag_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Flag/svg/ic_refineui_flag_16_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983249,
  					unicodeHex: "\\F00D1",
  					cssClass: "ic_refineui_flag_16_regular"
  				},
  				filled: {
  					unicode: 983248,
  					unicodeHex: "\\F00D0",
  					cssClass: "ic_refineui_flag_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983244,
  					unicodeHex: "\\F00CC",
  					cssClass: "ic_refineui_flag_20_regular"
  				},
  				filled: {
  					unicode: 983244,
  					unicodeHex: "\\F00CC",
  					cssClass: "ic_refineui_flag_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983247,
  					unicodeHex: "\\F00CF",
  					cssClass: "ic_refineui_flag_24_regular"
  				},
  				filled: {
  					unicode: 983247,
  					unicodeHex: "\\F00CF",
  					cssClass: "ic_refineui_flag_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983246,
  					unicodeHex: "\\F00CE",
  					cssClass: "ic_refineui_flag_28_regular"
  				},
  				filled: {
  					unicode: 983245,
  					unicodeHex: "\\F00CD",
  					cssClass: "ic_refineui_flag_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983245,
  					unicodeHex: "\\F00CD",
  					cssClass: "ic_refineui_flag_32_regular"
  				},
  				filled: {
  					unicode: 983249,
  					unicodeHex: "\\F00D1",
  					cssClass: "ic_refineui_flag_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983248,
  					unicodeHex: "\\F00D0",
  					cssClass: "ic_refineui_flag_48_regular"
  				},
  				filled: {
  					unicode: 983246,
  					unicodeHex: "\\F00CE",
  					cssClass: "ic_refineui_flag_48_filled"
  				}
  			}
  		}
  	},
  	Video: {
  		name: "Video",
  		slug: "video",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in video scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_video_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Video/svg/ic_refineui_video_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_video_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Video/svg/ic_refineui_video_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_video_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Video/svg/ic_refineui_video_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_video_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Video/svg/ic_refineui_video_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_video_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Video/svg/ic_refineui_video_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_video_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Video/svg/ic_refineui_video_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_video_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Video/svg/ic_refineui_video_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_video_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Video/svg/ic_refineui_video_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_video_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Video/svg/ic_refineui_video_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_video_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Video/svg/ic_refineui_video_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_video_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Video/svg/ic_refineui_video_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_video_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Video/svg/ic_refineui_video_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983259,
  					unicodeHex: "\\F00DB",
  					cssClass: "ic_refineui_video_16_regular"
  				},
  				filled: {
  					unicode: 983259,
  					unicodeHex: "\\F00DB",
  					cssClass: "ic_refineui_video_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983261,
  					unicodeHex: "\\F00DD",
  					cssClass: "ic_refineui_video_20_regular"
  				},
  				filled: {
  					unicode: 983257,
  					unicodeHex: "\\F00D9",
  					cssClass: "ic_refineui_video_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983258,
  					unicodeHex: "\\F00DA",
  					cssClass: "ic_refineui_video_24_regular"
  				},
  				filled: {
  					unicode: 983260,
  					unicodeHex: "\\F00DC",
  					cssClass: "ic_refineui_video_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983257,
  					unicodeHex: "\\F00D9",
  					cssClass: "ic_refineui_video_28_regular"
  				},
  				filled: {
  					unicode: 983256,
  					unicodeHex: "\\F00D8",
  					cssClass: "ic_refineui_video_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983256,
  					unicodeHex: "\\F00D8",
  					cssClass: "ic_refineui_video_32_regular"
  				},
  				filled: {
  					unicode: 983261,
  					unicodeHex: "\\F00DD",
  					cssClass: "ic_refineui_video_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983260,
  					unicodeHex: "\\F00DC",
  					cssClass: "ic_refineui_video_48_regular"
  				},
  				filled: {
  					unicode: 983258,
  					unicodeHex: "\\F00DA",
  					cssClass: "ic_refineui_video_48_filled"
  				}
  			}
  		}
  	},
  	Balloon: {
  		name: "Balloon",
  		slug: "balloon",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in balloon scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_balloon_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Balloon/svg/ic_refineui_balloon_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_balloon_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Balloon/svg/ic_refineui_balloon_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_balloon_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Balloon/svg/ic_refineui_balloon_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_balloon_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Balloon/svg/ic_refineui_balloon_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_balloon_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Balloon/svg/ic_refineui_balloon_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_balloon_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Balloon/svg/ic_refineui_balloon_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_balloon_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Balloon/svg/ic_refineui_balloon_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_balloon_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Balloon/svg/ic_refineui_balloon_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_balloon_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Balloon/svg/ic_refineui_balloon_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_balloon_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Balloon/svg/ic_refineui_balloon_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_balloon_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Balloon/svg/ic_refineui_balloon_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_balloon_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Balloon/svg/ic_refineui_balloon_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983269,
  					unicodeHex: "\\F00E5",
  					cssClass: "ic_refineui_balloon_16_regular"
  				},
  				filled: {
  					unicode: 983269,
  					unicodeHex: "\\F00E5",
  					cssClass: "ic_refineui_balloon_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983273,
  					unicodeHex: "\\F00E9",
  					cssClass: "ic_refineui_balloon_20_regular"
  				},
  				filled: {
  					unicode: 983271,
  					unicodeHex: "\\F00E7",
  					cssClass: "ic_refineui_balloon_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983270,
  					unicodeHex: "\\F00E6",
  					cssClass: "ic_refineui_balloon_24_regular"
  				},
  				filled: {
  					unicode: 983268,
  					unicodeHex: "\\F00E4",
  					cssClass: "ic_refineui_balloon_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983271,
  					unicodeHex: "\\F00E7",
  					cssClass: "ic_refineui_balloon_28_regular"
  				},
  				filled: {
  					unicode: 983272,
  					unicodeHex: "\\F00E8",
  					cssClass: "ic_refineui_balloon_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983272,
  					unicodeHex: "\\F00E8",
  					cssClass: "ic_refineui_balloon_32_regular"
  				},
  				filled: {
  					unicode: 983270,
  					unicodeHex: "\\F00E6",
  					cssClass: "ic_refineui_balloon_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983268,
  					unicodeHex: "\\F00E4",
  					cssClass: "ic_refineui_balloon_48_regular"
  				},
  				filled: {
  					unicode: 983273,
  					unicodeHex: "\\F00E9",
  					cssClass: "ic_refineui_balloon_48_filled"
  				}
  			}
  		}
  	},
  	Movie: {
  		name: "Movie",
  		slug: "movie",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in movie scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_movie_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Movie/svg/ic_refineui_movie_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_movie_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Movie/svg/ic_refineui_movie_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_movie_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Movie/svg/ic_refineui_movie_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_movie_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Movie/svg/ic_refineui_movie_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_movie_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Movie/svg/ic_refineui_movie_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_movie_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Movie/svg/ic_refineui_movie_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_movie_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Movie/svg/ic_refineui_movie_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_movie_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Movie/svg/ic_refineui_movie_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_movie_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Movie/svg/ic_refineui_movie_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_movie_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Movie/svg/ic_refineui_movie_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_movie_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Movie/svg/ic_refineui_movie_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_movie_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Movie/svg/ic_refineui_movie_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983276,
  					unicodeHex: "\\F00EC",
  					cssClass: "ic_refineui_movie_16_regular"
  				},
  				filled: {
  					unicode: 983275,
  					unicodeHex: "\\F00EB",
  					cssClass: "ic_refineui_movie_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983274,
  					unicodeHex: "\\F00EA",
  					cssClass: "ic_refineui_movie_20_regular"
  				},
  				filled: {
  					unicode: 983277,
  					unicodeHex: "\\F00ED",
  					cssClass: "ic_refineui_movie_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983275,
  					unicodeHex: "\\F00EB",
  					cssClass: "ic_refineui_movie_24_regular"
  				},
  				filled: {
  					unicode: 983274,
  					unicodeHex: "\\F00EA",
  					cssClass: "ic_refineui_movie_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983278,
  					unicodeHex: "\\F00EE",
  					cssClass: "ic_refineui_movie_28_regular"
  				},
  				filled: {
  					unicode: 983278,
  					unicodeHex: "\\F00EE",
  					cssClass: "ic_refineui_movie_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983279,
  					unicodeHex: "\\F00EF",
  					cssClass: "ic_refineui_movie_32_regular"
  				},
  				filled: {
  					unicode: 983276,
  					unicodeHex: "\\F00EC",
  					cssClass: "ic_refineui_movie_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983277,
  					unicodeHex: "\\F00ED",
  					cssClass: "ic_refineui_movie_48_regular"
  				},
  				filled: {
  					unicode: 983279,
  					unicodeHex: "\\F00EF",
  					cssClass: "ic_refineui_movie_48_filled"
  				}
  			}
  		}
  	},
  	Hammer: {
  		name: "Hammer",
  		slug: "hammer",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in hammer scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_hammer_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Hammer/svg/ic_refineui_hammer_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hammer_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Hammer/svg/ic_refineui_hammer_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hammer_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Hammer/svg/ic_refineui_hammer_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hammer_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Hammer/svg/ic_refineui_hammer_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hammer_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Hammer/svg/ic_refineui_hammer_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hammer_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Hammer/svg/ic_refineui_hammer_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hammer_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Hammer/svg/ic_refineui_hammer_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hammer_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Hammer/svg/ic_refineui_hammer_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hammer_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Hammer/svg/ic_refineui_hammer_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hammer_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Hammer/svg/ic_refineui_hammer_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hammer_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Hammer/svg/ic_refineui_hammer_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hammer_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Hammer/svg/ic_refineui_hammer_24_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983283,
  					unicodeHex: "\\F00F3",
  					cssClass: "ic_refineui_hammer_16_regular"
  				},
  				filled: {
  					unicode: 983281,
  					unicodeHex: "\\F00F1",
  					cssClass: "ic_refineui_hammer_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983280,
  					unicodeHex: "\\F00F0",
  					cssClass: "ic_refineui_hammer_20_regular"
  				},
  				filled: {
  					unicode: 983285,
  					unicodeHex: "\\F00F5",
  					cssClass: "ic_refineui_hammer_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983285,
  					unicodeHex: "\\F00F5",
  					cssClass: "ic_refineui_hammer_24_regular"
  				},
  				filled: {
  					unicode: 983282,
  					unicodeHex: "\\F00F2",
  					cssClass: "ic_refineui_hammer_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983282,
  					unicodeHex: "\\F00F2",
  					cssClass: "ic_refineui_hammer_28_regular"
  				},
  				filled: {
  					unicode: 983284,
  					unicodeHex: "\\F00F4",
  					cssClass: "ic_refineui_hammer_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983281,
  					unicodeHex: "\\F00F1",
  					cssClass: "ic_refineui_hammer_32_regular"
  				},
  				filled: {
  					unicode: 983280,
  					unicodeHex: "\\F00F0",
  					cssClass: "ic_refineui_hammer_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983284,
  					unicodeHex: "\\F00F4",
  					cssClass: "ic_refineui_hammer_48_regular"
  				},
  				filled: {
  					unicode: 983283,
  					unicodeHex: "\\F00F3",
  					cssClass: "ic_refineui_hammer_48_filled"
  				}
  			}
  		}
  	},
  	Gas: {
  		name: "Gas",
  		slug: "gas",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in gas scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_gas_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Gas/svg/ic_refineui_gas_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gas_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Gas/svg/ic_refineui_gas_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gas_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Gas/svg/ic_refineui_gas_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gas_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Gas/svg/ic_refineui_gas_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gas_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Gas/svg/ic_refineui_gas_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gas_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Gas/svg/ic_refineui_gas_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gas_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Gas/svg/ic_refineui_gas_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gas_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Gas/svg/ic_refineui_gas_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gas_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Gas/svg/ic_refineui_gas_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gas_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Gas/svg/ic_refineui_gas_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gas_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Gas/svg/ic_refineui_gas_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gas_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Gas/svg/ic_refineui_gas_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983295,
  					unicodeHex: "\\F00FF",
  					cssClass: "ic_refineui_gas_16_regular"
  				},
  				filled: {
  					unicode: 983294,
  					unicodeHex: "\\F00FE",
  					cssClass: "ic_refineui_gas_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983297,
  					unicodeHex: "\\F0101",
  					cssClass: "ic_refineui_gas_20_regular"
  				},
  				filled: {
  					unicode: 983296,
  					unicodeHex: "\\F0100",
  					cssClass: "ic_refineui_gas_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983294,
  					unicodeHex: "\\F00FE",
  					cssClass: "ic_refineui_gas_24_regular"
  				},
  				filled: {
  					unicode: 983293,
  					unicodeHex: "\\F00FD",
  					cssClass: "ic_refineui_gas_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983293,
  					unicodeHex: "\\F00FD",
  					cssClass: "ic_refineui_gas_28_regular"
  				},
  				filled: {
  					unicode: 983297,
  					unicodeHex: "\\F0101",
  					cssClass: "ic_refineui_gas_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983292,
  					unicodeHex: "\\F00FC",
  					cssClass: "ic_refineui_gas_32_regular"
  				},
  				filled: {
  					unicode: 983292,
  					unicodeHex: "\\F00FC",
  					cssClass: "ic_refineui_gas_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983296,
  					unicodeHex: "\\F0100",
  					cssClass: "ic_refineui_gas_48_regular"
  				},
  				filled: {
  					unicode: 983295,
  					unicodeHex: "\\F00FF",
  					cssClass: "ic_refineui_gas_48_filled"
  				}
  			}
  		}
  	},
  	Password: {
  		name: "Password",
  		slug: "password",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in password scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_password_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Password/svg/ic_refineui_password_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_password_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Password/svg/ic_refineui_password_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_password_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Password/svg/ic_refineui_password_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_password_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Password/svg/ic_refineui_password_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_password_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Password/svg/ic_refineui_password_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_password_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Password/svg/ic_refineui_password_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_password_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Password/svg/ic_refineui_password_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_password_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Password/svg/ic_refineui_password_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_password_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Password/svg/ic_refineui_password_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_password_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Password/svg/ic_refineui_password_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_password_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Password/svg/ic_refineui_password_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_password_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Password/svg/ic_refineui_password_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983301,
  					unicodeHex: "\\F0105",
  					cssClass: "ic_refineui_password_16_regular"
  				},
  				filled: {
  					unicode: 983298,
  					unicodeHex: "\\F0102",
  					cssClass: "ic_refineui_password_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983298,
  					unicodeHex: "\\F0102",
  					cssClass: "ic_refineui_password_20_regular"
  				},
  				filled: {
  					unicode: 983302,
  					unicodeHex: "\\F0106",
  					cssClass: "ic_refineui_password_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983300,
  					unicodeHex: "\\F0104",
  					cssClass: "ic_refineui_password_24_regular"
  				},
  				filled: {
  					unicode: 983299,
  					unicodeHex: "\\F0103",
  					cssClass: "ic_refineui_password_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983303,
  					unicodeHex: "\\F0107",
  					cssClass: "ic_refineui_password_28_regular"
  				},
  				filled: {
  					unicode: 983301,
  					unicodeHex: "\\F0105",
  					cssClass: "ic_refineui_password_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983299,
  					unicodeHex: "\\F0103",
  					cssClass: "ic_refineui_password_32_regular"
  				},
  				filled: {
  					unicode: 983300,
  					unicodeHex: "\\F0104",
  					cssClass: "ic_refineui_password_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983302,
  					unicodeHex: "\\F0106",
  					cssClass: "ic_refineui_password_48_regular"
  				},
  				filled: {
  					unicode: 983303,
  					unicodeHex: "\\F0107",
  					cssClass: "ic_refineui_password_48_filled"
  				}
  			}
  		}
  	},
  	Pin: {
  		name: "Pin",
  		slug: "pin",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in pin scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_pin_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Pin/svg/ic_refineui_pin_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pin_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Pin/svg/ic_refineui_pin_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pin_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Pin/svg/ic_refineui_pin_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pin_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Pin/svg/ic_refineui_pin_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pin_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Pin/svg/ic_refineui_pin_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pin_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Pin/svg/ic_refineui_pin_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pin_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Pin/svg/ic_refineui_pin_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pin_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Pin/svg/ic_refineui_pin_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pin_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Pin/svg/ic_refineui_pin_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pin_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Pin/svg/ic_refineui_pin_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pin_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Pin/svg/ic_refineui_pin_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pin_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Pin/svg/ic_refineui_pin_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983319,
  					unicodeHex: "\\F0117",
  					cssClass: "ic_refineui_pin_16_regular"
  				},
  				filled: {
  					unicode: 983316,
  					unicodeHex: "\\F0114",
  					cssClass: "ic_refineui_pin_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983321,
  					unicodeHex: "\\F0119",
  					cssClass: "ic_refineui_pin_20_regular"
  				},
  				filled: {
  					unicode: 983320,
  					unicodeHex: "\\F0118",
  					cssClass: "ic_refineui_pin_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983317,
  					unicodeHex: "\\F0115",
  					cssClass: "ic_refineui_pin_24_regular"
  				},
  				filled: {
  					unicode: 983317,
  					unicodeHex: "\\F0115",
  					cssClass: "ic_refineui_pin_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983320,
  					unicodeHex: "\\F0118",
  					cssClass: "ic_refineui_pin_28_regular"
  				},
  				filled: {
  					unicode: 983319,
  					unicodeHex: "\\F0117",
  					cssClass: "ic_refineui_pin_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983316,
  					unicodeHex: "\\F0114",
  					cssClass: "ic_refineui_pin_32_regular"
  				},
  				filled: {
  					unicode: 983318,
  					unicodeHex: "\\F0116",
  					cssClass: "ic_refineui_pin_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983318,
  					unicodeHex: "\\F0116",
  					cssClass: "ic_refineui_pin_48_regular"
  				},
  				filled: {
  					unicode: 983321,
  					unicodeHex: "\\F0119",
  					cssClass: "ic_refineui_pin_48_filled"
  				}
  			}
  		}
  	},
  	Eye: {
  		name: "Eye",
  		slug: "eye",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in eye scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_eye_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Eye/svg/ic_refineui_eye_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_eye_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Eye/svg/ic_refineui_eye_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_eye_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Eye/svg/ic_refineui_eye_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_eye_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Eye/svg/ic_refineui_eye_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_eye_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Eye/svg/ic_refineui_eye_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_eye_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Eye/svg/ic_refineui_eye_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_eye_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Eye/svg/ic_refineui_eye_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_eye_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Eye/svg/ic_refineui_eye_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_eye_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Eye/svg/ic_refineui_eye_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_eye_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Eye/svg/ic_refineui_eye_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_eye_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Eye/svg/ic_refineui_eye_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_eye_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Eye/svg/ic_refineui_eye_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983332,
  					unicodeHex: "\\F0124",
  					cssClass: "ic_refineui_eye_16_regular"
  				},
  				filled: {
  					unicode: 983329,
  					unicodeHex: "\\F0121",
  					cssClass: "ic_refineui_eye_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983328,
  					unicodeHex: "\\F0120",
  					cssClass: "ic_refineui_eye_20_regular"
  				},
  				filled: {
  					unicode: 983331,
  					unicodeHex: "\\F0123",
  					cssClass: "ic_refineui_eye_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983330,
  					unicodeHex: "\\F0122",
  					cssClass: "ic_refineui_eye_24_regular"
  				},
  				filled: {
  					unicode: 983328,
  					unicodeHex: "\\F0120",
  					cssClass: "ic_refineui_eye_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983329,
  					unicodeHex: "\\F0121",
  					cssClass: "ic_refineui_eye_28_regular"
  				},
  				filled: {
  					unicode: 983332,
  					unicodeHex: "\\F0124",
  					cssClass: "ic_refineui_eye_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983333,
  					unicodeHex: "\\F0125",
  					cssClass: "ic_refineui_eye_32_regular"
  				},
  				filled: {
  					unicode: 983330,
  					unicodeHex: "\\F0122",
  					cssClass: "ic_refineui_eye_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983331,
  					unicodeHex: "\\F0123",
  					cssClass: "ic_refineui_eye_48_regular"
  				},
  				filled: {
  					unicode: 983333,
  					unicodeHex: "\\F0125",
  					cssClass: "ic_refineui_eye_48_filled"
  				}
  			}
  		}
  	},
  	Macos: {
  		name: "Macos",
  		slug: "macos",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in macos scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_macos_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Macos/svg/ic_refineui_macos_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_macos_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Macos/svg/ic_refineui_macos_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_macos_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Macos/svg/ic_refineui_macos_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_macos_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Macos/svg/ic_refineui_macos_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_macos_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Macos/svg/ic_refineui_macos_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_macos_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Macos/svg/ic_refineui_macos_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_macos_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Macos/svg/ic_refineui_macos_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_macos_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Macos/svg/ic_refineui_macos_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_macos_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Macos/svg/ic_refineui_macos_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_macos_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Macos/svg/ic_refineui_macos_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_macos_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Macos/svg/ic_refineui_macos_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_macos_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Macos/svg/ic_refineui_macos_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983343,
  					unicodeHex: "\\F012F",
  					cssClass: "ic_refineui_macos_16_regular"
  				},
  				filled: {
  					unicode: 983341,
  					unicodeHex: "\\F012D",
  					cssClass: "ic_refineui_macos_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983340,
  					unicodeHex: "\\F012C",
  					cssClass: "ic_refineui_macos_20_regular"
  				},
  				filled: {
  					unicode: 983345,
  					unicodeHex: "\\F0131",
  					cssClass: "ic_refineui_macos_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983342,
  					unicodeHex: "\\F012E",
  					cssClass: "ic_refineui_macos_24_regular"
  				},
  				filled: {
  					unicode: 983342,
  					unicodeHex: "\\F012E",
  					cssClass: "ic_refineui_macos_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983341,
  					unicodeHex: "\\F012D",
  					cssClass: "ic_refineui_macos_28_regular"
  				},
  				filled: {
  					unicode: 983344,
  					unicodeHex: "\\F0130",
  					cssClass: "ic_refineui_macos_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983345,
  					unicodeHex: "\\F0131",
  					cssClass: "ic_refineui_macos_32_regular"
  				},
  				filled: {
  					unicode: 983340,
  					unicodeHex: "\\F012C",
  					cssClass: "ic_refineui_macos_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983344,
  					unicodeHex: "\\F0130",
  					cssClass: "ic_refineui_macos_48_regular"
  				},
  				filled: {
  					unicode: 983343,
  					unicodeHex: "\\F012F",
  					cssClass: "ic_refineui_macos_48_filled"
  				}
  			}
  		}
  	},
  	Calendar: {
  		name: "Calendar",
  		slug: "calendar",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in calendar scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_calendar_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Calendar/svg/ic_refineui_calendar_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_calendar_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Calendar/svg/ic_refineui_calendar_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_calendar_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Calendar/svg/ic_refineui_calendar_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_calendar_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Calendar/svg/ic_refineui_calendar_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_calendar_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Calendar/svg/ic_refineui_calendar_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_calendar_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Calendar/svg/ic_refineui_calendar_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_calendar_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Calendar/svg/ic_refineui_calendar_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_calendar_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Calendar/svg/ic_refineui_calendar_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_calendar_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Calendar/svg/ic_refineui_calendar_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_calendar_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Calendar/svg/ic_refineui_calendar_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_calendar_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Calendar/svg/ic_refineui_calendar_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_calendar_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Calendar/svg/ic_refineui_calendar_24_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983355,
  					unicodeHex: "\\F013B",
  					cssClass: "ic_refineui_calendar_16_regular"
  				},
  				filled: {
  					unicode: 983357,
  					unicodeHex: "\\F013D",
  					cssClass: "ic_refineui_calendar_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983352,
  					unicodeHex: "\\F0138",
  					cssClass: "ic_refineui_calendar_20_regular"
  				},
  				filled: {
  					unicode: 983353,
  					unicodeHex: "\\F0139",
  					cssClass: "ic_refineui_calendar_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983357,
  					unicodeHex: "\\F013D",
  					cssClass: "ic_refineui_calendar_24_regular"
  				},
  				filled: {
  					unicode: 983356,
  					unicodeHex: "\\F013C",
  					cssClass: "ic_refineui_calendar_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983354,
  					unicodeHex: "\\F013A",
  					cssClass: "ic_refineui_calendar_28_regular"
  				},
  				filled: {
  					unicode: 983354,
  					unicodeHex: "\\F013A",
  					cssClass: "ic_refineui_calendar_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983353,
  					unicodeHex: "\\F0139",
  					cssClass: "ic_refineui_calendar_32_regular"
  				},
  				filled: {
  					unicode: 983355,
  					unicodeHex: "\\F013B",
  					cssClass: "ic_refineui_calendar_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983356,
  					unicodeHex: "\\F013C",
  					cssClass: "ic_refineui_calendar_48_regular"
  				},
  				filled: {
  					unicode: 983352,
  					unicodeHex: "\\F0138",
  					cssClass: "ic_refineui_calendar_48_filled"
  				}
  			}
  		}
  	},
  	Bookmark: {
  		name: "Bookmark",
  		slug: "bookmark",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in bookmark scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_bookmark_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Bookmark/svg/ic_refineui_bookmark_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bookmark_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Bookmark/svg/ic_refineui_bookmark_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bookmark_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Bookmark/svg/ic_refineui_bookmark_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bookmark_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Bookmark/svg/ic_refineui_bookmark_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bookmark_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Bookmark/svg/ic_refineui_bookmark_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bookmark_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Bookmark/svg/ic_refineui_bookmark_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bookmark_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Bookmark/svg/ic_refineui_bookmark_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bookmark_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Bookmark/svg/ic_refineui_bookmark_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bookmark_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Bookmark/svg/ic_refineui_bookmark_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bookmark_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Bookmark/svg/ic_refineui_bookmark_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bookmark_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Bookmark/svg/ic_refineui_bookmark_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bookmark_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Bookmark/svg/ic_refineui_bookmark_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983366,
  					unicodeHex: "\\F0146",
  					cssClass: "ic_refineui_bookmark_16_regular"
  				},
  				filled: {
  					unicode: 983365,
  					unicodeHex: "\\F0145",
  					cssClass: "ic_refineui_bookmark_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983364,
  					unicodeHex: "\\F0144",
  					cssClass: "ic_refineui_bookmark_20_regular"
  				},
  				filled: {
  					unicode: 983367,
  					unicodeHex: "\\F0147",
  					cssClass: "ic_refineui_bookmark_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983368,
  					unicodeHex: "\\F0148",
  					cssClass: "ic_refineui_bookmark_24_regular"
  				},
  				filled: {
  					unicode: 983364,
  					unicodeHex: "\\F0144",
  					cssClass: "ic_refineui_bookmark_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983369,
  					unicodeHex: "\\F0149",
  					cssClass: "ic_refineui_bookmark_28_regular"
  				},
  				filled: {
  					unicode: 983368,
  					unicodeHex: "\\F0148",
  					cssClass: "ic_refineui_bookmark_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983365,
  					unicodeHex: "\\F0145",
  					cssClass: "ic_refineui_bookmark_32_regular"
  				},
  				filled: {
  					unicode: 983366,
  					unicodeHex: "\\F0146",
  					cssClass: "ic_refineui_bookmark_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983367,
  					unicodeHex: "\\F0147",
  					cssClass: "ic_refineui_bookmark_48_regular"
  				},
  				filled: {
  					unicode: 983369,
  					unicodeHex: "\\F0149",
  					cssClass: "ic_refineui_bookmark_48_filled"
  				}
  			}
  		}
  	},
  	Calculator: {
  		name: "Calculator",
  		slug: "calculator",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in calculator scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_calculator_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Calculator/svg/ic_refineui_calculator_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_calculator_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Calculator/svg/ic_refineui_calculator_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_calculator_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Calculator/svg/ic_refineui_calculator_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_calculator_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Calculator/svg/ic_refineui_calculator_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_calculator_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Calculator/svg/ic_refineui_calculator_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_calculator_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Calculator/svg/ic_refineui_calculator_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_calculator_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Calculator/svg/ic_refineui_calculator_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_calculator_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Calculator/svg/ic_refineui_calculator_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_calculator_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Calculator/svg/ic_refineui_calculator_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_calculator_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Calculator/svg/ic_refineui_calculator_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_calculator_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Calculator/svg/ic_refineui_calculator_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_calculator_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Calculator/svg/ic_refineui_calculator_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983387,
  					unicodeHex: "\\F015B",
  					cssClass: "ic_refineui_calculator_16_regular"
  				},
  				filled: {
  					unicode: 983386,
  					unicodeHex: "\\F015A",
  					cssClass: "ic_refineui_calculator_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983382,
  					unicodeHex: "\\F0156",
  					cssClass: "ic_refineui_calculator_20_regular"
  				},
  				filled: {
  					unicode: 983384,
  					unicodeHex: "\\F0158",
  					cssClass: "ic_refineui_calculator_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983385,
  					unicodeHex: "\\F0159",
  					cssClass: "ic_refineui_calculator_24_regular"
  				},
  				filled: {
  					unicode: 983387,
  					unicodeHex: "\\F015B",
  					cssClass: "ic_refineui_calculator_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983384,
  					unicodeHex: "\\F0158",
  					cssClass: "ic_refineui_calculator_28_regular"
  				},
  				filled: {
  					unicode: 983383,
  					unicodeHex: "\\F0157",
  					cssClass: "ic_refineui_calculator_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983383,
  					unicodeHex: "\\F0157",
  					cssClass: "ic_refineui_calculator_32_regular"
  				},
  				filled: {
  					unicode: 983385,
  					unicodeHex: "\\F0159",
  					cssClass: "ic_refineui_calculator_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983386,
  					unicodeHex: "\\F015A",
  					cssClass: "ic_refineui_calculator_48_regular"
  				},
  				filled: {
  					unicode: 983382,
  					unicodeHex: "\\F0156",
  					cssClass: "ic_refineui_calculator_48_filled"
  				}
  			}
  		}
  	},
  	Record: {
  		name: "Record",
  		slug: "record",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in record scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_record_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Record/svg/ic_refineui_record_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_record_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Record/svg/ic_refineui_record_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_record_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Record/svg/ic_refineui_record_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_record_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Record/svg/ic_refineui_record_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_record_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Record/svg/ic_refineui_record_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_record_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Record/svg/ic_refineui_record_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_record_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Record/svg/ic_refineui_record_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_record_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Record/svg/ic_refineui_record_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_record_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Record/svg/ic_refineui_record_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_record_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Record/svg/ic_refineui_record_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_record_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Record/svg/ic_refineui_record_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_record_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Record/svg/ic_refineui_record_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983397,
  					unicodeHex: "\\F0165",
  					cssClass: "ic_refineui_record_16_regular"
  				},
  				filled: {
  					unicode: 983395,
  					unicodeHex: "\\F0163",
  					cssClass: "ic_refineui_record_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983399,
  					unicodeHex: "\\F0167",
  					cssClass: "ic_refineui_record_20_regular"
  				},
  				filled: {
  					unicode: 983399,
  					unicodeHex: "\\F0167",
  					cssClass: "ic_refineui_record_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983398,
  					unicodeHex: "\\F0166",
  					cssClass: "ic_refineui_record_24_regular"
  				},
  				filled: {
  					unicode: 983396,
  					unicodeHex: "\\F0164",
  					cssClass: "ic_refineui_record_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983395,
  					unicodeHex: "\\F0163",
  					cssClass: "ic_refineui_record_28_regular"
  				},
  				filled: {
  					unicode: 983398,
  					unicodeHex: "\\F0166",
  					cssClass: "ic_refineui_record_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983394,
  					unicodeHex: "\\F0162",
  					cssClass: "ic_refineui_record_32_regular"
  				},
  				filled: {
  					unicode: 983394,
  					unicodeHex: "\\F0162",
  					cssClass: "ic_refineui_record_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983396,
  					unicodeHex: "\\F0164",
  					cssClass: "ic_refineui_record_48_regular"
  				},
  				filled: {
  					unicode: 983397,
  					unicodeHex: "\\F0165",
  					cssClass: "ic_refineui_record_48_filled"
  				}
  			}
  		}
  	},
  	Desk: {
  		name: "Desk",
  		slug: "desk",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in desk scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_desk_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Desk/svg/ic_refineui_desk_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_desk_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Desk/svg/ic_refineui_desk_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_desk_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Desk/svg/ic_refineui_desk_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_desk_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Desk/svg/ic_refineui_desk_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_desk_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Desk/svg/ic_refineui_desk_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_desk_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Desk/svg/ic_refineui_desk_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_desk_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Desk/svg/ic_refineui_desk_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_desk_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Desk/svg/ic_refineui_desk_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_desk_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Desk/svg/ic_refineui_desk_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_desk_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Desk/svg/ic_refineui_desk_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_desk_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Desk/svg/ic_refineui_desk_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_desk_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Desk/svg/ic_refineui_desk_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983402,
  					unicodeHex: "\\F016A",
  					cssClass: "ic_refineui_desk_16_regular"
  				},
  				filled: {
  					unicode: 983400,
  					unicodeHex: "\\F0168",
  					cssClass: "ic_refineui_desk_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983405,
  					unicodeHex: "\\F016D",
  					cssClass: "ic_refineui_desk_20_regular"
  				},
  				filled: {
  					unicode: 983404,
  					unicodeHex: "\\F016C",
  					cssClass: "ic_refineui_desk_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983403,
  					unicodeHex: "\\F016B",
  					cssClass: "ic_refineui_desk_24_regular"
  				},
  				filled: {
  					unicode: 983401,
  					unicodeHex: "\\F0169",
  					cssClass: "ic_refineui_desk_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983404,
  					unicodeHex: "\\F016C",
  					cssClass: "ic_refineui_desk_28_regular"
  				},
  				filled: {
  					unicode: 983403,
  					unicodeHex: "\\F016B",
  					cssClass: "ic_refineui_desk_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983400,
  					unicodeHex: "\\F0168",
  					cssClass: "ic_refineui_desk_32_regular"
  				},
  				filled: {
  					unicode: 983402,
  					unicodeHex: "\\F016A",
  					cssClass: "ic_refineui_desk_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983401,
  					unicodeHex: "\\F0169",
  					cssClass: "ic_refineui_desk_48_regular"
  				},
  				filled: {
  					unicode: 983405,
  					unicodeHex: "\\F016D",
  					cssClass: "ic_refineui_desk_48_filled"
  				}
  			}
  		}
  	},
  	Hourglass: {
  		name: "Hourglass",
  		slug: "hourglass",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in hourglass scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_hourglass_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Hourglass/svg/ic_refineui_hourglass_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hourglass_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Hourglass/svg/ic_refineui_hourglass_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hourglass_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Hourglass/svg/ic_refineui_hourglass_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hourglass_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Hourglass/svg/ic_refineui_hourglass_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hourglass_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Hourglass/svg/ic_refineui_hourglass_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hourglass_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Hourglass/svg/ic_refineui_hourglass_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hourglass_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Hourglass/svg/ic_refineui_hourglass_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hourglass_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Hourglass/svg/ic_refineui_hourglass_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hourglass_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Hourglass/svg/ic_refineui_hourglass_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hourglass_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Hourglass/svg/ic_refineui_hourglass_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hourglass_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Hourglass/svg/ic_refineui_hourglass_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hourglass_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Hourglass/svg/ic_refineui_hourglass_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983427,
  					unicodeHex: "\\F0183",
  					cssClass: "ic_refineui_hourglass_16_regular"
  				},
  				filled: {
  					unicode: 983425,
  					unicodeHex: "\\F0181",
  					cssClass: "ic_refineui_hourglass_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983429,
  					unicodeHex: "\\F0185",
  					cssClass: "ic_refineui_hourglass_20_regular"
  				},
  				filled: {
  					unicode: 983427,
  					unicodeHex: "\\F0183",
  					cssClass: "ic_refineui_hourglass_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983425,
  					unicodeHex: "\\F0181",
  					cssClass: "ic_refineui_hourglass_24_regular"
  				},
  				filled: {
  					unicode: 983424,
  					unicodeHex: "\\F0180",
  					cssClass: "ic_refineui_hourglass_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983428,
  					unicodeHex: "\\F0184",
  					cssClass: "ic_refineui_hourglass_28_regular"
  				},
  				filled: {
  					unicode: 983428,
  					unicodeHex: "\\F0184",
  					cssClass: "ic_refineui_hourglass_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983424,
  					unicodeHex: "\\F0180",
  					cssClass: "ic_refineui_hourglass_32_regular"
  				},
  				filled: {
  					unicode: 983426,
  					unicodeHex: "\\F0182",
  					cssClass: "ic_refineui_hourglass_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983426,
  					unicodeHex: "\\F0182",
  					cssClass: "ic_refineui_hourglass_48_regular"
  				},
  				filled: {
  					unicode: 983429,
  					unicodeHex: "\\F0185",
  					cssClass: "ic_refineui_hourglass_48_filled"
  				}
  			}
  		}
  	},
  	Previous: {
  		name: "Previous",
  		slug: "previous",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in previous scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_previous_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Previous/svg/ic_refineui_previous_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_previous_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Previous/svg/ic_refineui_previous_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_previous_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Previous/svg/ic_refineui_previous_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_previous_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Previous/svg/ic_refineui_previous_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_previous_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Previous/svg/ic_refineui_previous_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_previous_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Previous/svg/ic_refineui_previous_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_previous_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Previous/svg/ic_refineui_previous_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_previous_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Previous/svg/ic_refineui_previous_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_previous_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Previous/svg/ic_refineui_previous_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_previous_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Previous/svg/ic_refineui_previous_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_previous_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Previous/svg/ic_refineui_previous_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_previous_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Previous/svg/ic_refineui_previous_28_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983434,
  					unicodeHex: "\\F018A",
  					cssClass: "ic_refineui_previous_16_regular"
  				},
  				filled: {
  					unicode: 983432,
  					unicodeHex: "\\F0188",
  					cssClass: "ic_refineui_previous_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983430,
  					unicodeHex: "\\F0186",
  					cssClass: "ic_refineui_previous_20_regular"
  				},
  				filled: {
  					unicode: 983434,
  					unicodeHex: "\\F018A",
  					cssClass: "ic_refineui_previous_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983432,
  					unicodeHex: "\\F0188",
  					cssClass: "ic_refineui_previous_24_regular"
  				},
  				filled: {
  					unicode: 983431,
  					unicodeHex: "\\F0187",
  					cssClass: "ic_refineui_previous_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983431,
  					unicodeHex: "\\F0187",
  					cssClass: "ic_refineui_previous_28_regular"
  				},
  				filled: {
  					unicode: 983435,
  					unicodeHex: "\\F018B",
  					cssClass: "ic_refineui_previous_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983435,
  					unicodeHex: "\\F018B",
  					cssClass: "ic_refineui_previous_32_regular"
  				},
  				filled: {
  					unicode: 983430,
  					unicodeHex: "\\F0186",
  					cssClass: "ic_refineui_previous_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983433,
  					unicodeHex: "\\F0189",
  					cssClass: "ic_refineui_previous_48_regular"
  				},
  				filled: {
  					unicode: 983433,
  					unicodeHex: "\\F0189",
  					cssClass: "ic_refineui_previous_48_filled"
  				}
  			}
  		}
  	},
  	Clover: {
  		name: "Clover",
  		slug: "clover",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in clover scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_clover_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Clover/svg/ic_refineui_clover_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clover_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Clover/svg/ic_refineui_clover_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clover_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Clover/svg/ic_refineui_clover_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clover_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Clover/svg/ic_refineui_clover_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clover_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Clover/svg/ic_refineui_clover_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clover_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Clover/svg/ic_refineui_clover_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clover_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Clover/svg/ic_refineui_clover_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clover_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Clover/svg/ic_refineui_clover_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clover_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Clover/svg/ic_refineui_clover_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clover_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Clover/svg/ic_refineui_clover_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clover_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Clover/svg/ic_refineui_clover_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clover_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Clover/svg/ic_refineui_clover_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983440,
  					unicodeHex: "\\F0190",
  					cssClass: "ic_refineui_clover_16_regular"
  				},
  				filled: {
  					unicode: 983436,
  					unicodeHex: "\\F018C",
  					cssClass: "ic_refineui_clover_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983436,
  					unicodeHex: "\\F018C",
  					cssClass: "ic_refineui_clover_20_regular"
  				},
  				filled: {
  					unicode: 983440,
  					unicodeHex: "\\F0190",
  					cssClass: "ic_refineui_clover_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983438,
  					unicodeHex: "\\F018E",
  					cssClass: "ic_refineui_clover_24_regular"
  				},
  				filled: {
  					unicode: 983437,
  					unicodeHex: "\\F018D",
  					cssClass: "ic_refineui_clover_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983441,
  					unicodeHex: "\\F0191",
  					cssClass: "ic_refineui_clover_28_regular"
  				},
  				filled: {
  					unicode: 983439,
  					unicodeHex: "\\F018F",
  					cssClass: "ic_refineui_clover_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983437,
  					unicodeHex: "\\F018D",
  					cssClass: "ic_refineui_clover_32_regular"
  				},
  				filled: {
  					unicode: 983438,
  					unicodeHex: "\\F018E",
  					cssClass: "ic_refineui_clover_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983439,
  					unicodeHex: "\\F018F",
  					cssClass: "ic_refineui_clover_48_regular"
  				},
  				filled: {
  					unicode: 983441,
  					unicodeHex: "\\F0191",
  					cssClass: "ic_refineui_clover_48_filled"
  				}
  			}
  		}
  	},
  	Refineui: {
  		name: "Refineui",
  		slug: "refineui",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in refineui scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_refineui_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Refineui/svg/ic_refineui_refineui_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_refineui_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Refineui/svg/ic_refineui_refineui_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_refineui_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Refineui/svg/ic_refineui_refineui_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_refineui_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Refineui/svg/ic_refineui_refineui_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_refineui_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Refineui/svg/ic_refineui_refineui_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_refineui_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Refineui/svg/ic_refineui_refineui_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_refineui_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Refineui/svg/ic_refineui_refineui_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_refineui_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Refineui/svg/ic_refineui_refineui_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_refineui_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Refineui/svg/ic_refineui_refineui_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_refineui_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Refineui/svg/ic_refineui_refineui_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_refineui_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Refineui/svg/ic_refineui_refineui_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_refineui_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Refineui/svg/ic_refineui_refineui_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983445,
  					unicodeHex: "\\F0195",
  					cssClass: "ic_refineui_refineui_16_regular"
  				},
  				filled: {
  					unicode: 983444,
  					unicodeHex: "\\F0194",
  					cssClass: "ic_refineui_refineui_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983442,
  					unicodeHex: "\\F0192",
  					cssClass: "ic_refineui_refineui_20_regular"
  				},
  				filled: {
  					unicode: 983446,
  					unicodeHex: "\\F0196",
  					cssClass: "ic_refineui_refineui_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983444,
  					unicodeHex: "\\F0194",
  					cssClass: "ic_refineui_refineui_24_regular"
  				},
  				filled: {
  					unicode: 983443,
  					unicodeHex: "\\F0193",
  					cssClass: "ic_refineui_refineui_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983447,
  					unicodeHex: "\\F0197",
  					cssClass: "ic_refineui_refineui_28_regular"
  				},
  				filled: {
  					unicode: 983447,
  					unicodeHex: "\\F0197",
  					cssClass: "ic_refineui_refineui_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983443,
  					unicodeHex: "\\F0193",
  					cssClass: "ic_refineui_refineui_32_regular"
  				},
  				filled: {
  					unicode: 983442,
  					unicodeHex: "\\F0192",
  					cssClass: "ic_refineui_refineui_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983446,
  					unicodeHex: "\\F0196",
  					cssClass: "ic_refineui_refineui_48_regular"
  				},
  				filled: {
  					unicode: 983445,
  					unicodeHex: "\\F0195",
  					cssClass: "ic_refineui_refineui_48_filled"
  				}
  			}
  		}
  	},
  	Checkmark: {
  		name: "Checkmark",
  		slug: "checkmark",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in checkmark scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_checkmark_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Checkmark/svg/ic_refineui_checkmark_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_checkmark_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Checkmark/svg/ic_refineui_checkmark_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_checkmark_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Checkmark/svg/ic_refineui_checkmark_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_checkmark_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Checkmark/svg/ic_refineui_checkmark_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_checkmark_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Checkmark/svg/ic_refineui_checkmark_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_checkmark_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Checkmark/svg/ic_refineui_checkmark_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_checkmark_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Checkmark/svg/ic_refineui_checkmark_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_checkmark_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Checkmark/svg/ic_refineui_checkmark_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_checkmark_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Checkmark/svg/ic_refineui_checkmark_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_checkmark_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Checkmark/svg/ic_refineui_checkmark_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_checkmark_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Checkmark/svg/ic_refineui_checkmark_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_checkmark_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Checkmark/svg/ic_refineui_checkmark_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983451,
  					unicodeHex: "\\F019B",
  					cssClass: "ic_refineui_checkmark_16_regular"
  				},
  				filled: {
  					unicode: 983451,
  					unicodeHex: "\\F019B",
  					cssClass: "ic_refineui_checkmark_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983448,
  					unicodeHex: "\\F0198",
  					cssClass: "ic_refineui_checkmark_20_regular"
  				},
  				filled: {
  					unicode: 983449,
  					unicodeHex: "\\F0199",
  					cssClass: "ic_refineui_checkmark_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983450,
  					unicodeHex: "\\F019A",
  					cssClass: "ic_refineui_checkmark_24_regular"
  				},
  				filled: {
  					unicode: 983452,
  					unicodeHex: "\\F019C",
  					cssClass: "ic_refineui_checkmark_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983449,
  					unicodeHex: "\\F0199",
  					cssClass: "ic_refineui_checkmark_28_regular"
  				},
  				filled: {
  					unicode: 983448,
  					unicodeHex: "\\F0198",
  					cssClass: "ic_refineui_checkmark_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983453,
  					unicodeHex: "\\F019D",
  					cssClass: "ic_refineui_checkmark_32_regular"
  				},
  				filled: {
  					unicode: 983453,
  					unicodeHex: "\\F019D",
  					cssClass: "ic_refineui_checkmark_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983452,
  					unicodeHex: "\\F019C",
  					cssClass: "ic_refineui_checkmark_48_regular"
  				},
  				filled: {
  					unicode: 983450,
  					unicodeHex: "\\F019A",
  					cssClass: "ic_refineui_checkmark_48_filled"
  				}
  			}
  		}
  	},
  	Chat: {
  		name: "Chat",
  		slug: "chat",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in chat scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_chat_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Chat/svg/ic_refineui_chat_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chat_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Chat/svg/ic_refineui_chat_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chat_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Chat/svg/ic_refineui_chat_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chat_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Chat/svg/ic_refineui_chat_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chat_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Chat/svg/ic_refineui_chat_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chat_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Chat/svg/ic_refineui_chat_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chat_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Chat/svg/ic_refineui_chat_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chat_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Chat/svg/ic_refineui_chat_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chat_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Chat/svg/ic_refineui_chat_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chat_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Chat/svg/ic_refineui_chat_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chat_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Chat/svg/ic_refineui_chat_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chat_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Chat/svg/ic_refineui_chat_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983474,
  					unicodeHex: "\\F01B2",
  					cssClass: "ic_refineui_chat_16_regular"
  				},
  				filled: {
  					unicode: 983475,
  					unicodeHex: "\\F01B3",
  					cssClass: "ic_refineui_chat_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983477,
  					unicodeHex: "\\F01B5",
  					cssClass: "ic_refineui_chat_20_regular"
  				},
  				filled: {
  					unicode: 983473,
  					unicodeHex: "\\F01B1",
  					cssClass: "ic_refineui_chat_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983475,
  					unicodeHex: "\\F01B3",
  					cssClass: "ic_refineui_chat_24_regular"
  				},
  				filled: {
  					unicode: 983476,
  					unicodeHex: "\\F01B4",
  					cssClass: "ic_refineui_chat_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983472,
  					unicodeHex: "\\F01B0",
  					cssClass: "ic_refineui_chat_28_regular"
  				},
  				filled: {
  					unicode: 983472,
  					unicodeHex: "\\F01B0",
  					cssClass: "ic_refineui_chat_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983476,
  					unicodeHex: "\\F01B4",
  					cssClass: "ic_refineui_chat_32_regular"
  				},
  				filled: {
  					unicode: 983477,
  					unicodeHex: "\\F01B5",
  					cssClass: "ic_refineui_chat_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983473,
  					unicodeHex: "\\F01B1",
  					cssClass: "ic_refineui_chat_48_regular"
  				},
  				filled: {
  					unicode: 983474,
  					unicodeHex: "\\F01B2",
  					cssClass: "ic_refineui_chat_48_filled"
  				}
  			}
  		}
  	},
  	Smartwatch: {
  		name: "Smartwatch",
  		slug: "smartwatch",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in smartwatch scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_smartwatch_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Smartwatch/svg/ic_refineui_smartwatch_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_smartwatch_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Smartwatch/svg/ic_refineui_smartwatch_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_smartwatch_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Smartwatch/svg/ic_refineui_smartwatch_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_smartwatch_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Smartwatch/svg/ic_refineui_smartwatch_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_smartwatch_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Smartwatch/svg/ic_refineui_smartwatch_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_smartwatch_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Smartwatch/svg/ic_refineui_smartwatch_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_smartwatch_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Smartwatch/svg/ic_refineui_smartwatch_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_smartwatch_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Smartwatch/svg/ic_refineui_smartwatch_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_smartwatch_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Smartwatch/svg/ic_refineui_smartwatch_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_smartwatch_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Smartwatch/svg/ic_refineui_smartwatch_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_smartwatch_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Smartwatch/svg/ic_refineui_smartwatch_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_smartwatch_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Smartwatch/svg/ic_refineui_smartwatch_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983486,
  					unicodeHex: "\\F01BE",
  					cssClass: "ic_refineui_smartwatch_16_regular"
  				},
  				filled: {
  					unicode: 983487,
  					unicodeHex: "\\F01BF",
  					cssClass: "ic_refineui_smartwatch_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983489,
  					unicodeHex: "\\F01C1",
  					cssClass: "ic_refineui_smartwatch_20_regular"
  				},
  				filled: {
  					unicode: 983485,
  					unicodeHex: "\\F01BD",
  					cssClass: "ic_refineui_smartwatch_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983485,
  					unicodeHex: "\\F01BD",
  					cssClass: "ic_refineui_smartwatch_24_regular"
  				},
  				filled: {
  					unicode: 983488,
  					unicodeHex: "\\F01C0",
  					cssClass: "ic_refineui_smartwatch_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983488,
  					unicodeHex: "\\F01C0",
  					cssClass: "ic_refineui_smartwatch_28_regular"
  				},
  				filled: {
  					unicode: 983484,
  					unicodeHex: "\\F01BC",
  					cssClass: "ic_refineui_smartwatch_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983484,
  					unicodeHex: "\\F01BC",
  					cssClass: "ic_refineui_smartwatch_32_regular"
  				},
  				filled: {
  					unicode: 983489,
  					unicodeHex: "\\F01C1",
  					cssClass: "ic_refineui_smartwatch_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983487,
  					unicodeHex: "\\F01BF",
  					cssClass: "ic_refineui_smartwatch_48_regular"
  				},
  				filled: {
  					unicode: 983486,
  					unicodeHex: "\\F01BE",
  					cssClass: "ic_refineui_smartwatch_48_filled"
  				}
  			}
  		}
  	},
  	Water: {
  		name: "Water",
  		slug: "water",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in water scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_water_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Water/svg/ic_refineui_water_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_water_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Water/svg/ic_refineui_water_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_water_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Water/svg/ic_refineui_water_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_water_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Water/svg/ic_refineui_water_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_water_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Water/svg/ic_refineui_water_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_water_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Water/svg/ic_refineui_water_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_water_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Water/svg/ic_refineui_water_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_water_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Water/svg/ic_refineui_water_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_water_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Water/svg/ic_refineui_water_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_water_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Water/svg/ic_refineui_water_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_water_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Water/svg/ic_refineui_water_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_water_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Water/svg/ic_refineui_water_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983494,
  					unicodeHex: "\\F01C6",
  					cssClass: "ic_refineui_water_16_regular"
  				},
  				filled: {
  					unicode: 983491,
  					unicodeHex: "\\F01C3",
  					cssClass: "ic_refineui_water_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983490,
  					unicodeHex: "\\F01C2",
  					cssClass: "ic_refineui_water_20_regular"
  				},
  				filled: {
  					unicode: 983493,
  					unicodeHex: "\\F01C5",
  					cssClass: "ic_refineui_water_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983492,
  					unicodeHex: "\\F01C4",
  					cssClass: "ic_refineui_water_24_regular"
  				},
  				filled: {
  					unicode: 983490,
  					unicodeHex: "\\F01C2",
  					cssClass: "ic_refineui_water_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983491,
  					unicodeHex: "\\F01C3",
  					cssClass: "ic_refineui_water_28_regular"
  				},
  				filled: {
  					unicode: 983494,
  					unicodeHex: "\\F01C6",
  					cssClass: "ic_refineui_water_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983495,
  					unicodeHex: "\\F01C7",
  					cssClass: "ic_refineui_water_32_regular"
  				},
  				filled: {
  					unicode: 983492,
  					unicodeHex: "\\F01C4",
  					cssClass: "ic_refineui_water_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983493,
  					unicodeHex: "\\F01C5",
  					cssClass: "ic_refineui_water_48_regular"
  				},
  				filled: {
  					unicode: 983495,
  					unicodeHex: "\\F01C7",
  					cssClass: "ic_refineui_water_48_filled"
  				}
  			}
  		}
  	},
  	Hd: {
  		name: "Hd",
  		slug: "hd",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in hd scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_hd_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Hd/svg/ic_refineui_hd_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hd_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Hd/svg/ic_refineui_hd_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hd_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Hd/svg/ic_refineui_hd_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hd_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Hd/svg/ic_refineui_hd_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hd_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Hd/svg/ic_refineui_hd_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hd_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Hd/svg/ic_refineui_hd_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hd_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Hd/svg/ic_refineui_hd_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hd_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Hd/svg/ic_refineui_hd_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hd_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Hd/svg/ic_refineui_hd_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hd_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Hd/svg/ic_refineui_hd_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hd_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Hd/svg/ic_refineui_hd_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hd_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Hd/svg/ic_refineui_hd_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983499,
  					unicodeHex: "\\F01CB",
  					cssClass: "ic_refineui_hd_16_regular"
  				},
  				filled: {
  					unicode: 983497,
  					unicodeHex: "\\F01C9",
  					cssClass: "ic_refineui_hd_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983501,
  					unicodeHex: "\\F01CD",
  					cssClass: "ic_refineui_hd_20_regular"
  				},
  				filled: {
  					unicode: 983499,
  					unicodeHex: "\\F01CB",
  					cssClass: "ic_refineui_hd_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983500,
  					unicodeHex: "\\F01CC",
  					cssClass: "ic_refineui_hd_24_regular"
  				},
  				filled: {
  					unicode: 983496,
  					unicodeHex: "\\F01C8",
  					cssClass: "ic_refineui_hd_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983497,
  					unicodeHex: "\\F01C9",
  					cssClass: "ic_refineui_hd_28_regular"
  				},
  				filled: {
  					unicode: 983500,
  					unicodeHex: "\\F01CC",
  					cssClass: "ic_refineui_hd_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983496,
  					unicodeHex: "\\F01C8",
  					cssClass: "ic_refineui_hd_32_regular"
  				},
  				filled: {
  					unicode: 983498,
  					unicodeHex: "\\F01CA",
  					cssClass: "ic_refineui_hd_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983498,
  					unicodeHex: "\\F01CA",
  					cssClass: "ic_refineui_hd_48_regular"
  				},
  				filled: {
  					unicode: 983501,
  					unicodeHex: "\\F01CD",
  					cssClass: "ic_refineui_hd_48_filled"
  				}
  			}
  		}
  	},
  	Delete: {
  		name: "Delete",
  		slug: "delete",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in delete scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_delete_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Delete/svg/ic_refineui_delete_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_delete_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Delete/svg/ic_refineui_delete_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_delete_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Delete/svg/ic_refineui_delete_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_delete_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Delete/svg/ic_refineui_delete_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_delete_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Delete/svg/ic_refineui_delete_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_delete_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Delete/svg/ic_refineui_delete_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_delete_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Delete/svg/ic_refineui_delete_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_delete_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Delete/svg/ic_refineui_delete_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_delete_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Delete/svg/ic_refineui_delete_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_delete_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Delete/svg/ic_refineui_delete_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_delete_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Delete/svg/ic_refineui_delete_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_delete_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Delete/svg/ic_refineui_delete_24_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983506,
  					unicodeHex: "\\F01D2",
  					cssClass: "ic_refineui_delete_16_regular"
  				},
  				filled: {
  					unicode: 983506,
  					unicodeHex: "\\F01D2",
  					cssClass: "ic_refineui_delete_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983502,
  					unicodeHex: "\\F01CE",
  					cssClass: "ic_refineui_delete_20_regular"
  				},
  				filled: {
  					unicode: 983502,
  					unicodeHex: "\\F01CE",
  					cssClass: "ic_refineui_delete_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983507,
  					unicodeHex: "\\F01D3",
  					cssClass: "ic_refineui_delete_24_regular"
  				},
  				filled: {
  					unicode: 983505,
  					unicodeHex: "\\F01D1",
  					cssClass: "ic_refineui_delete_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983504,
  					unicodeHex: "\\F01D0",
  					cssClass: "ic_refineui_delete_28_regular"
  				},
  				filled: {
  					unicode: 983503,
  					unicodeHex: "\\F01CF",
  					cssClass: "ic_refineui_delete_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983503,
  					unicodeHex: "\\F01CF",
  					cssClass: "ic_refineui_delete_32_regular"
  				},
  				filled: {
  					unicode: 983507,
  					unicodeHex: "\\F01D3",
  					cssClass: "ic_refineui_delete_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983505,
  					unicodeHex: "\\F01D1",
  					cssClass: "ic_refineui_delete_48_regular"
  				},
  				filled: {
  					unicode: 983504,
  					unicodeHex: "\\F01D0",
  					cssClass: "ic_refineui_delete_48_filled"
  				}
  			}
  		}
  	},
  	Board: {
  		name: "Board",
  		slug: "board",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in board scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_board_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Board/svg/ic_refineui_board_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_board_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Board/svg/ic_refineui_board_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_board_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Board/svg/ic_refineui_board_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_board_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Board/svg/ic_refineui_board_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_board_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Board/svg/ic_refineui_board_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_board_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Board/svg/ic_refineui_board_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_board_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Board/svg/ic_refineui_board_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_board_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Board/svg/ic_refineui_board_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_board_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Board/svg/ic_refineui_board_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_board_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Board/svg/ic_refineui_board_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_board_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Board/svg/ic_refineui_board_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_board_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Board/svg/ic_refineui_board_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983511,
  					unicodeHex: "\\F01D7",
  					cssClass: "ic_refineui_board_16_regular"
  				},
  				filled: {
  					unicode: 983510,
  					unicodeHex: "\\F01D6",
  					cssClass: "ic_refineui_board_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983508,
  					unicodeHex: "\\F01D4",
  					cssClass: "ic_refineui_board_20_regular"
  				},
  				filled: {
  					unicode: 983512,
  					unicodeHex: "\\F01D8",
  					cssClass: "ic_refineui_board_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983512,
  					unicodeHex: "\\F01D8",
  					cssClass: "ic_refineui_board_24_regular"
  				},
  				filled: {
  					unicode: 983509,
  					unicodeHex: "\\F01D5",
  					cssClass: "ic_refineui_board_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983513,
  					unicodeHex: "\\F01D9",
  					cssClass: "ic_refineui_board_28_regular"
  				},
  				filled: {
  					unicode: 983513,
  					unicodeHex: "\\F01D9",
  					cssClass: "ic_refineui_board_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983509,
  					unicodeHex: "\\F01D5",
  					cssClass: "ic_refineui_board_32_regular"
  				},
  				filled: {
  					unicode: 983508,
  					unicodeHex: "\\F01D4",
  					cssClass: "ic_refineui_board_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983510,
  					unicodeHex: "\\F01D6",
  					cssClass: "ic_refineui_board_48_regular"
  				},
  				filled: {
  					unicode: 983511,
  					unicodeHex: "\\F01D7",
  					cssClass: "ic_refineui_board_48_filled"
  				}
  			}
  		}
  	},
  	Subtract: {
  		name: "Subtract",
  		slug: "subtract",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in subtract scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_subtract_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Subtract/svg/ic_refineui_subtract_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_subtract_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Subtract/svg/ic_refineui_subtract_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_subtract_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Subtract/svg/ic_refineui_subtract_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_subtract_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Subtract/svg/ic_refineui_subtract_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_subtract_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Subtract/svg/ic_refineui_subtract_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_subtract_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Subtract/svg/ic_refineui_subtract_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_subtract_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Subtract/svg/ic_refineui_subtract_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_subtract_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Subtract/svg/ic_refineui_subtract_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_subtract_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Subtract/svg/ic_refineui_subtract_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_subtract_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Subtract/svg/ic_refineui_subtract_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_subtract_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Subtract/svg/ic_refineui_subtract_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_subtract_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Subtract/svg/ic_refineui_subtract_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983522,
  					unicodeHex: "\\F01E2",
  					cssClass: "ic_refineui_subtract_16_regular"
  				},
  				filled: {
  					unicode: 983523,
  					unicodeHex: "\\F01E3",
  					cssClass: "ic_refineui_subtract_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983520,
  					unicodeHex: "\\F01E0",
  					cssClass: "ic_refineui_subtract_20_regular"
  				},
  				filled: {
  					unicode: 983521,
  					unicodeHex: "\\F01E1",
  					cssClass: "ic_refineui_subtract_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983521,
  					unicodeHex: "\\F01E1",
  					cssClass: "ic_refineui_subtract_24_regular"
  				},
  				filled: {
  					unicode: 983524,
  					unicodeHex: "\\F01E4",
  					cssClass: "ic_refineui_subtract_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983524,
  					unicodeHex: "\\F01E4",
  					cssClass: "ic_refineui_subtract_28_regular"
  				},
  				filled: {
  					unicode: 983520,
  					unicodeHex: "\\F01E0",
  					cssClass: "ic_refineui_subtract_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983525,
  					unicodeHex: "\\F01E5",
  					cssClass: "ic_refineui_subtract_32_regular"
  				},
  				filled: {
  					unicode: 983525,
  					unicodeHex: "\\F01E5",
  					cssClass: "ic_refineui_subtract_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983523,
  					unicodeHex: "\\F01E3",
  					cssClass: "ic_refineui_subtract_48_regular"
  				},
  				filled: {
  					unicode: 983522,
  					unicodeHex: "\\F01E2",
  					cssClass: "ic_refineui_subtract_48_filled"
  				}
  			}
  		}
  	},
  	Python: {
  		name: "Python",
  		slug: "python",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in python scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_python_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Python/svg/ic_refineui_python_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_python_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Python/svg/ic_refineui_python_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_python_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Python/svg/ic_refineui_python_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_python_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Python/svg/ic_refineui_python_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_python_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Python/svg/ic_refineui_python_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_python_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Python/svg/ic_refineui_python_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_python_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Python/svg/ic_refineui_python_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_python_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Python/svg/ic_refineui_python_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_python_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Python/svg/ic_refineui_python_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_python_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Python/svg/ic_refineui_python_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_python_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Python/svg/ic_refineui_python_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_python_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Python/svg/ic_refineui_python_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983545,
  					unicodeHex: "\\F01F9",
  					cssClass: "ic_refineui_python_16_regular"
  				},
  				filled: {
  					unicode: 983547,
  					unicodeHex: "\\F01FB",
  					cssClass: "ic_refineui_python_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983549,
  					unicodeHex: "\\F01FD",
  					cssClass: "ic_refineui_python_20_regular"
  				},
  				filled: {
  					unicode: 983545,
  					unicodeHex: "\\F01F9",
  					cssClass: "ic_refineui_python_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983547,
  					unicodeHex: "\\F01FB",
  					cssClass: "ic_refineui_python_24_regular"
  				},
  				filled: {
  					unicode: 983548,
  					unicodeHex: "\\F01FC",
  					cssClass: "ic_refineui_python_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983548,
  					unicodeHex: "\\F01FC",
  					cssClass: "ic_refineui_python_28_regular"
  				},
  				filled: {
  					unicode: 983544,
  					unicodeHex: "\\F01F8",
  					cssClass: "ic_refineui_python_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983544,
  					unicodeHex: "\\F01F8",
  					cssClass: "ic_refineui_python_32_regular"
  				},
  				filled: {
  					unicode: 983549,
  					unicodeHex: "\\F01FD",
  					cssClass: "ic_refineui_python_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983546,
  					unicodeHex: "\\F01FA",
  					cssClass: "ic_refineui_python_48_regular"
  				},
  				filled: {
  					unicode: 983546,
  					unicodeHex: "\\F01FA",
  					cssClass: "ic_refineui_python_48_filled"
  				}
  			}
  		}
  	},
  	Verified: {
  		name: "Verified",
  		slug: "verified",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in verified scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_verified_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Verified/svg/ic_refineui_verified_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_verified_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Verified/svg/ic_refineui_verified_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_verified_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Verified/svg/ic_refineui_verified_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_verified_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Verified/svg/ic_refineui_verified_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_verified_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Verified/svg/ic_refineui_verified_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_verified_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Verified/svg/ic_refineui_verified_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_verified_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Verified/svg/ic_refineui_verified_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_verified_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Verified/svg/ic_refineui_verified_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_verified_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Verified/svg/ic_refineui_verified_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_verified_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Verified/svg/ic_refineui_verified_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_verified_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Verified/svg/ic_refineui_verified_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_verified_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Verified/svg/ic_refineui_verified_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983551,
  					unicodeHex: "\\F01FF",
  					cssClass: "ic_refineui_verified_16_regular"
  				},
  				filled: {
  					unicode: 983553,
  					unicodeHex: "\\F0201",
  					cssClass: "ic_refineui_verified_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983555,
  					unicodeHex: "\\F0203",
  					cssClass: "ic_refineui_verified_20_regular"
  				},
  				filled: {
  					unicode: 983551,
  					unicodeHex: "\\F01FF",
  					cssClass: "ic_refineui_verified_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983550,
  					unicodeHex: "\\F01FE",
  					cssClass: "ic_refineui_verified_24_regular"
  				},
  				filled: {
  					unicode: 983554,
  					unicodeHex: "\\F0202",
  					cssClass: "ic_refineui_verified_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983553,
  					unicodeHex: "\\F0201",
  					cssClass: "ic_refineui_verified_28_regular"
  				},
  				filled: {
  					unicode: 983550,
  					unicodeHex: "\\F01FE",
  					cssClass: "ic_refineui_verified_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983554,
  					unicodeHex: "\\F0202",
  					cssClass: "ic_refineui_verified_32_regular"
  				},
  				filled: {
  					unicode: 983555,
  					unicodeHex: "\\F0203",
  					cssClass: "ic_refineui_verified_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983552,
  					unicodeHex: "\\F0200",
  					cssClass: "ic_refineui_verified_48_regular"
  				},
  				filled: {
  					unicode: 983552,
  					unicodeHex: "\\F0200",
  					cssClass: "ic_refineui_verified_48_filled"
  				}
  			}
  		}
  	},
  	Css: {
  		name: "Css",
  		slug: "css",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in css scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_css_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Css/svg/ic_refineui_css_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_css_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Css/svg/ic_refineui_css_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_css_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Css/svg/ic_refineui_css_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_css_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Css/svg/ic_refineui_css_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_css_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Css/svg/ic_refineui_css_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_css_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Css/svg/ic_refineui_css_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_css_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Css/svg/ic_refineui_css_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_css_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Css/svg/ic_refineui_css_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_css_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Css/svg/ic_refineui_css_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_css_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Css/svg/ic_refineui_css_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_css_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Css/svg/ic_refineui_css_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_css_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Css/svg/ic_refineui_css_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983558,
  					unicodeHex: "\\F0206",
  					cssClass: "ic_refineui_css_16_regular"
  				},
  				filled: {
  					unicode: 983557,
  					unicodeHex: "\\F0205",
  					cssClass: "ic_refineui_css_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983561,
  					unicodeHex: "\\F0209",
  					cssClass: "ic_refineui_css_20_regular"
  				},
  				filled: {
  					unicode: 983559,
  					unicodeHex: "\\F0207",
  					cssClass: "ic_refineui_css_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983560,
  					unicodeHex: "\\F0208",
  					cssClass: "ic_refineui_css_24_regular"
  				},
  				filled: {
  					unicode: 983556,
  					unicodeHex: "\\F0204",
  					cssClass: "ic_refineui_css_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983557,
  					unicodeHex: "\\F0205",
  					cssClass: "ic_refineui_css_28_regular"
  				},
  				filled: {
  					unicode: 983560,
  					unicodeHex: "\\F0208",
  					cssClass: "ic_refineui_css_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983556,
  					unicodeHex: "\\F0204",
  					cssClass: "ic_refineui_css_32_regular"
  				},
  				filled: {
  					unicode: 983558,
  					unicodeHex: "\\F0206",
  					cssClass: "ic_refineui_css_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983559,
  					unicodeHex: "\\F0207",
  					cssClass: "ic_refineui_css_48_regular"
  				},
  				filled: {
  					unicode: 983561,
  					unicodeHex: "\\F0209",
  					cssClass: "ic_refineui_css_48_filled"
  				}
  			}
  		}
  	},
  	Cursor: {
  		name: "Cursor",
  		slug: "cursor",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in cursor scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_cursor_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Cursor/svg/ic_refineui_cursor_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cursor_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Cursor/svg/ic_refineui_cursor_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cursor_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Cursor/svg/ic_refineui_cursor_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cursor_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Cursor/svg/ic_refineui_cursor_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cursor_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Cursor/svg/ic_refineui_cursor_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cursor_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Cursor/svg/ic_refineui_cursor_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cursor_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Cursor/svg/ic_refineui_cursor_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cursor_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Cursor/svg/ic_refineui_cursor_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cursor_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Cursor/svg/ic_refineui_cursor_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cursor_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Cursor/svg/ic_refineui_cursor_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cursor_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Cursor/svg/ic_refineui_cursor_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cursor_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Cursor/svg/ic_refineui_cursor_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983569,
  					unicodeHex: "\\F0211",
  					cssClass: "ic_refineui_cursor_16_regular"
  				},
  				filled: {
  					unicode: 983569,
  					unicodeHex: "\\F0211",
  					cssClass: "ic_refineui_cursor_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983573,
  					unicodeHex: "\\F0215",
  					cssClass: "ic_refineui_cursor_20_regular"
  				},
  				filled: {
  					unicode: 983573,
  					unicodeHex: "\\F0215",
  					cssClass: "ic_refineui_cursor_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983570,
  					unicodeHex: "\\F0212",
  					cssClass: "ic_refineui_cursor_24_regular"
  				},
  				filled: {
  					unicode: 983570,
  					unicodeHex: "\\F0212",
  					cssClass: "ic_refineui_cursor_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983571,
  					unicodeHex: "\\F0213",
  					cssClass: "ic_refineui_cursor_28_regular"
  				},
  				filled: {
  					unicode: 983572,
  					unicodeHex: "\\F0214",
  					cssClass: "ic_refineui_cursor_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983572,
  					unicodeHex: "\\F0214",
  					cssClass: "ic_refineui_cursor_32_regular"
  				},
  				filled: {
  					unicode: 983568,
  					unicodeHex: "\\F0210",
  					cssClass: "ic_refineui_cursor_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983568,
  					unicodeHex: "\\F0210",
  					cssClass: "ic_refineui_cursor_48_regular"
  				},
  				filled: {
  					unicode: 983571,
  					unicodeHex: "\\F0213",
  					cssClass: "ic_refineui_cursor_48_filled"
  				}
  			}
  		}
  	},
  	Couch: {
  		name: "Couch",
  		slug: "couch",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in couch scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_couch_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Couch/svg/ic_refineui_couch_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_couch_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Couch/svg/ic_refineui_couch_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_couch_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Couch/svg/ic_refineui_couch_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_couch_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Couch/svg/ic_refineui_couch_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_couch_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Couch/svg/ic_refineui_couch_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_couch_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Couch/svg/ic_refineui_couch_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_couch_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Couch/svg/ic_refineui_couch_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_couch_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Couch/svg/ic_refineui_couch_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_couch_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Couch/svg/ic_refineui_couch_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_couch_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Couch/svg/ic_refineui_couch_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_couch_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Couch/svg/ic_refineui_couch_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_couch_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Couch/svg/ic_refineui_couch_24_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983584,
  					unicodeHex: "\\F0220",
  					cssClass: "ic_refineui_couch_16_regular"
  				},
  				filled: {
  					unicode: 983580,
  					unicodeHex: "\\F021C",
  					cssClass: "ic_refineui_couch_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983580,
  					unicodeHex: "\\F021C",
  					cssClass: "ic_refineui_couch_20_regular"
  				},
  				filled: {
  					unicode: 983584,
  					unicodeHex: "\\F0220",
  					cssClass: "ic_refineui_couch_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983585,
  					unicodeHex: "\\F0221",
  					cssClass: "ic_refineui_couch_24_regular"
  				},
  				filled: {
  					unicode: 983581,
  					unicodeHex: "\\F021D",
  					cssClass: "ic_refineui_couch_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983582,
  					unicodeHex: "\\F021E",
  					cssClass: "ic_refineui_couch_28_regular"
  				},
  				filled: {
  					unicode: 983583,
  					unicodeHex: "\\F021F",
  					cssClass: "ic_refineui_couch_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983581,
  					unicodeHex: "\\F021D",
  					cssClass: "ic_refineui_couch_32_regular"
  				},
  				filled: {
  					unicode: 983582,
  					unicodeHex: "\\F021E",
  					cssClass: "ic_refineui_couch_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983583,
  					unicodeHex: "\\F021F",
  					cssClass: "ic_refineui_couch_48_regular"
  				},
  				filled: {
  					unicode: 983585,
  					unicodeHex: "\\F0221",
  					cssClass: "ic_refineui_couch_48_filled"
  				}
  			}
  		}
  	},
  	Cpu: {
  		name: "Cpu",
  		slug: "cpu",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in cpu scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_cpu_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Cpu/svg/ic_refineui_cpu_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cpu_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Cpu/svg/ic_refineui_cpu_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cpu_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Cpu/svg/ic_refineui_cpu_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cpu_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Cpu/svg/ic_refineui_cpu_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cpu_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Cpu/svg/ic_refineui_cpu_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cpu_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Cpu/svg/ic_refineui_cpu_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cpu_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Cpu/svg/ic_refineui_cpu_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cpu_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Cpu/svg/ic_refineui_cpu_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cpu_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Cpu/svg/ic_refineui_cpu_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cpu_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Cpu/svg/ic_refineui_cpu_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cpu_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Cpu/svg/ic_refineui_cpu_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cpu_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Cpu/svg/ic_refineui_cpu_24_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983590,
  					unicodeHex: "\\F0226",
  					cssClass: "ic_refineui_cpu_16_regular"
  				},
  				filled: {
  					unicode: 983590,
  					unicodeHex: "\\F0226",
  					cssClass: "ic_refineui_cpu_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983586,
  					unicodeHex: "\\F0222",
  					cssClass: "ic_refineui_cpu_20_regular"
  				},
  				filled: {
  					unicode: 983586,
  					unicodeHex: "\\F0222",
  					cssClass: "ic_refineui_cpu_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983591,
  					unicodeHex: "\\F0227",
  					cssClass: "ic_refineui_cpu_24_regular"
  				},
  				filled: {
  					unicode: 983589,
  					unicodeHex: "\\F0225",
  					cssClass: "ic_refineui_cpu_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983588,
  					unicodeHex: "\\F0224",
  					cssClass: "ic_refineui_cpu_28_regular"
  				},
  				filled: {
  					unicode: 983587,
  					unicodeHex: "\\F0223",
  					cssClass: "ic_refineui_cpu_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983587,
  					unicodeHex: "\\F0223",
  					cssClass: "ic_refineui_cpu_32_regular"
  				},
  				filled: {
  					unicode: 983591,
  					unicodeHex: "\\F0227",
  					cssClass: "ic_refineui_cpu_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983589,
  					unicodeHex: "\\F0225",
  					cssClass: "ic_refineui_cpu_48_regular"
  				},
  				filled: {
  					unicode: 983588,
  					unicodeHex: "\\F0224",
  					cssClass: "ic_refineui_cpu_48_filled"
  				}
  			}
  		}
  	},
  	Appstore: {
  		name: "Appstore",
  		slug: "appstore",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in appstore scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_appstore_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Appstore/svg/ic_refineui_appstore_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_appstore_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Appstore/svg/ic_refineui_appstore_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_appstore_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Appstore/svg/ic_refineui_appstore_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_appstore_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Appstore/svg/ic_refineui_appstore_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_appstore_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Appstore/svg/ic_refineui_appstore_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_appstore_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Appstore/svg/ic_refineui_appstore_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_appstore_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Appstore/svg/ic_refineui_appstore_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_appstore_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Appstore/svg/ic_refineui_appstore_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_appstore_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Appstore/svg/ic_refineui_appstore_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_appstore_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Appstore/svg/ic_refineui_appstore_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_appstore_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Appstore/svg/ic_refineui_appstore_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_appstore_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Appstore/svg/ic_refineui_appstore_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983594,
  					unicodeHex: "\\F022A",
  					cssClass: "ic_refineui_appstore_16_regular"
  				},
  				filled: {
  					unicode: 983593,
  					unicodeHex: "\\F0229",
  					cssClass: "ic_refineui_appstore_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983592,
  					unicodeHex: "\\F0228",
  					cssClass: "ic_refineui_appstore_20_regular"
  				},
  				filled: {
  					unicode: 983595,
  					unicodeHex: "\\F022B",
  					cssClass: "ic_refineui_appstore_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983596,
  					unicodeHex: "\\F022C",
  					cssClass: "ic_refineui_appstore_24_regular"
  				},
  				filled: {
  					unicode: 983592,
  					unicodeHex: "\\F0228",
  					cssClass: "ic_refineui_appstore_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983593,
  					unicodeHex: "\\F0229",
  					cssClass: "ic_refineui_appstore_28_regular"
  				},
  				filled: {
  					unicode: 983596,
  					unicodeHex: "\\F022C",
  					cssClass: "ic_refineui_appstore_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983597,
  					unicodeHex: "\\F022D",
  					cssClass: "ic_refineui_appstore_32_regular"
  				},
  				filled: {
  					unicode: 983594,
  					unicodeHex: "\\F022A",
  					cssClass: "ic_refineui_appstore_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983595,
  					unicodeHex: "\\F022B",
  					cssClass: "ic_refineui_appstore_48_regular"
  				},
  				filled: {
  					unicode: 983597,
  					unicodeHex: "\\F022D",
  					cssClass: "ic_refineui_appstore_48_filled"
  				}
  			}
  		}
  	},
  	Heart: {
  		name: "Heart",
  		slug: "heart",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in heart scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_heart_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Heart/svg/ic_refineui_heart_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_heart_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Heart/svg/ic_refineui_heart_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_heart_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Heart/svg/ic_refineui_heart_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_heart_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Heart/svg/ic_refineui_heart_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_heart_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Heart/svg/ic_refineui_heart_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_heart_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Heart/svg/ic_refineui_heart_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_heart_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Heart/svg/ic_refineui_heart_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_heart_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Heart/svg/ic_refineui_heart_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_heart_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Heart/svg/ic_refineui_heart_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_heart_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Heart/svg/ic_refineui_heart_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_heart_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Heart/svg/ic_refineui_heart_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_heart_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Heart/svg/ic_refineui_heart_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983600,
  					unicodeHex: "\\F0230",
  					cssClass: "ic_refineui_heart_16_regular"
  				},
  				filled: {
  					unicode: 983599,
  					unicodeHex: "\\F022F",
  					cssClass: "ic_refineui_heart_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983603,
  					unicodeHex: "\\F0233",
  					cssClass: "ic_refineui_heart_20_regular"
  				},
  				filled: {
  					unicode: 983603,
  					unicodeHex: "\\F0233",
  					cssClass: "ic_refineui_heart_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983602,
  					unicodeHex: "\\F0232",
  					cssClass: "ic_refineui_heart_24_regular"
  				},
  				filled: {
  					unicode: 983600,
  					unicodeHex: "\\F0230",
  					cssClass: "ic_refineui_heart_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983599,
  					unicodeHex: "\\F022F",
  					cssClass: "ic_refineui_heart_28_regular"
  				},
  				filled: {
  					unicode: 983602,
  					unicodeHex: "\\F0232",
  					cssClass: "ic_refineui_heart_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983598,
  					unicodeHex: "\\F022E",
  					cssClass: "ic_refineui_heart_32_regular"
  				},
  				filled: {
  					unicode: 983598,
  					unicodeHex: "\\F022E",
  					cssClass: "ic_refineui_heart_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983601,
  					unicodeHex: "\\F0231",
  					cssClass: "ic_refineui_heart_48_regular"
  				},
  				filled: {
  					unicode: 983601,
  					unicodeHex: "\\F0231",
  					cssClass: "ic_refineui_heart_48_filled"
  				}
  			}
  		}
  	},
  	Wrench: {
  		name: "Wrench",
  		slug: "wrench",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in wrench scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_wrench_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Wrench/svg/ic_refineui_wrench_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wrench_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Wrench/svg/ic_refineui_wrench_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wrench_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Wrench/svg/ic_refineui_wrench_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wrench_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Wrench/svg/ic_refineui_wrench_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wrench_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Wrench/svg/ic_refineui_wrench_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wrench_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Wrench/svg/ic_refineui_wrench_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wrench_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Wrench/svg/ic_refineui_wrench_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wrench_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Wrench/svg/ic_refineui_wrench_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wrench_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Wrench/svg/ic_refineui_wrench_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wrench_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Wrench/svg/ic_refineui_wrench_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wrench_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Wrench/svg/ic_refineui_wrench_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wrench_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Wrench/svg/ic_refineui_wrench_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983613,
  					unicodeHex: "\\F023D",
  					cssClass: "ic_refineui_wrench_16_regular"
  				},
  				filled: {
  					unicode: 983610,
  					unicodeHex: "\\F023A",
  					cssClass: "ic_refineui_wrench_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983610,
  					unicodeHex: "\\F023A",
  					cssClass: "ic_refineui_wrench_20_regular"
  				},
  				filled: {
  					unicode: 983614,
  					unicodeHex: "\\F023E",
  					cssClass: "ic_refineui_wrench_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983614,
  					unicodeHex: "\\F023E",
  					cssClass: "ic_refineui_wrench_24_regular"
  				},
  				filled: {
  					unicode: 983611,
  					unicodeHex: "\\F023B",
  					cssClass: "ic_refineui_wrench_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983611,
  					unicodeHex: "\\F023B",
  					cssClass: "ic_refineui_wrench_28_regular"
  				},
  				filled: {
  					unicode: 983613,
  					unicodeHex: "\\F023D",
  					cssClass: "ic_refineui_wrench_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983615,
  					unicodeHex: "\\F023F",
  					cssClass: "ic_refineui_wrench_32_regular"
  				},
  				filled: {
  					unicode: 983612,
  					unicodeHex: "\\F023C",
  					cssClass: "ic_refineui_wrench_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983612,
  					unicodeHex: "\\F023C",
  					cssClass: "ic_refineui_wrench_48_regular"
  				},
  				filled: {
  					unicode: 983615,
  					unicodeHex: "\\F023F",
  					cssClass: "ic_refineui_wrench_48_filled"
  				}
  			}
  		}
  	},
  	Highlight: {
  		name: "Highlight",
  		slug: "highlight",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in highlight scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_highlight_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Highlight/svg/ic_refineui_highlight_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_highlight_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Highlight/svg/ic_refineui_highlight_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_highlight_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Highlight/svg/ic_refineui_highlight_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_highlight_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Highlight/svg/ic_refineui_highlight_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_highlight_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Highlight/svg/ic_refineui_highlight_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_highlight_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Highlight/svg/ic_refineui_highlight_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_highlight_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Highlight/svg/ic_refineui_highlight_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_highlight_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Highlight/svg/ic_refineui_highlight_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_highlight_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Highlight/svg/ic_refineui_highlight_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_highlight_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Highlight/svg/ic_refineui_highlight_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_highlight_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Highlight/svg/ic_refineui_highlight_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_highlight_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Highlight/svg/ic_refineui_highlight_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983616,
  					unicodeHex: "\\F0240",
  					cssClass: "ic_refineui_highlight_16_regular"
  				},
  				filled: {
  					unicode: 983619,
  					unicodeHex: "\\F0243",
  					cssClass: "ic_refineui_highlight_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983621,
  					unicodeHex: "\\F0245",
  					cssClass: "ic_refineui_highlight_20_regular"
  				},
  				filled: {
  					unicode: 983617,
  					unicodeHex: "\\F0241",
  					cssClass: "ic_refineui_highlight_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983618,
  					unicodeHex: "\\F0242",
  					cssClass: "ic_refineui_highlight_24_regular"
  				},
  				filled: {
  					unicode: 983620,
  					unicodeHex: "\\F0244",
  					cssClass: "ic_refineui_highlight_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983619,
  					unicodeHex: "\\F0243",
  					cssClass: "ic_refineui_highlight_28_regular"
  				},
  				filled: {
  					unicode: 983616,
  					unicodeHex: "\\F0240",
  					cssClass: "ic_refineui_highlight_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983620,
  					unicodeHex: "\\F0244",
  					cssClass: "ic_refineui_highlight_32_regular"
  				},
  				filled: {
  					unicode: 983621,
  					unicodeHex: "\\F0245",
  					cssClass: "ic_refineui_highlight_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983617,
  					unicodeHex: "\\F0241",
  					cssClass: "ic_refineui_highlight_48_regular"
  				},
  				filled: {
  					unicode: 983618,
  					unicodeHex: "\\F0242",
  					cssClass: "ic_refineui_highlight_48_filled"
  				}
  			}
  		}
  	},
  	Washer: {
  		name: "Washer",
  		slug: "washer",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in washer scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_washer_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Washer/svg/ic_refineui_washer_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_washer_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Washer/svg/ic_refineui_washer_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_washer_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Washer/svg/ic_refineui_washer_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_washer_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Washer/svg/ic_refineui_washer_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_washer_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Washer/svg/ic_refineui_washer_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_washer_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Washer/svg/ic_refineui_washer_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_washer_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Washer/svg/ic_refineui_washer_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_washer_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Washer/svg/ic_refineui_washer_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_washer_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Washer/svg/ic_refineui_washer_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_washer_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Washer/svg/ic_refineui_washer_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_washer_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Washer/svg/ic_refineui_washer_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_washer_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Washer/svg/ic_refineui_washer_24_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983626,
  					unicodeHex: "\\F024A",
  					cssClass: "ic_refineui_washer_16_regular"
  				},
  				filled: {
  					unicode: 983626,
  					unicodeHex: "\\F024A",
  					cssClass: "ic_refineui_washer_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983622,
  					unicodeHex: "\\F0246",
  					cssClass: "ic_refineui_washer_20_regular"
  				},
  				filled: {
  					unicode: 983622,
  					unicodeHex: "\\F0246",
  					cssClass: "ic_refineui_washer_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983627,
  					unicodeHex: "\\F024B",
  					cssClass: "ic_refineui_washer_24_regular"
  				},
  				filled: {
  					unicode: 983625,
  					unicodeHex: "\\F0249",
  					cssClass: "ic_refineui_washer_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983624,
  					unicodeHex: "\\F0248",
  					cssClass: "ic_refineui_washer_28_regular"
  				},
  				filled: {
  					unicode: 983623,
  					unicodeHex: "\\F0247",
  					cssClass: "ic_refineui_washer_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983623,
  					unicodeHex: "\\F0247",
  					cssClass: "ic_refineui_washer_32_regular"
  				},
  				filled: {
  					unicode: 983627,
  					unicodeHex: "\\F024B",
  					cssClass: "ic_refineui_washer_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983625,
  					unicodeHex: "\\F0249",
  					cssClass: "ic_refineui_washer_48_regular"
  				},
  				filled: {
  					unicode: 983624,
  					unicodeHex: "\\F0248",
  					cssClass: "ic_refineui_washer_48_filled"
  				}
  			}
  		}
  	},
  	Person: {
  		name: "Person",
  		slug: "person",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in person scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_person_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Person/svg/ic_refineui_person_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_person_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Person/svg/ic_refineui_person_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_person_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Person/svg/ic_refineui_person_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_person_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Person/svg/ic_refineui_person_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_person_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Person/svg/ic_refineui_person_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_person_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Person/svg/ic_refineui_person_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_person_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Person/svg/ic_refineui_person_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_person_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Person/svg/ic_refineui_person_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_person_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Person/svg/ic_refineui_person_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_person_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Person/svg/ic_refineui_person_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_person_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Person/svg/ic_refineui_person_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_person_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Person/svg/ic_refineui_person_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983637,
  					unicodeHex: "\\F0255",
  					cssClass: "ic_refineui_person_16_regular"
  				},
  				filled: {
  					unicode: 983634,
  					unicodeHex: "\\F0252",
  					cssClass: "ic_refineui_person_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983639,
  					unicodeHex: "\\F0257",
  					cssClass: "ic_refineui_person_20_regular"
  				},
  				filled: {
  					unicode: 983638,
  					unicodeHex: "\\F0256",
  					cssClass: "ic_refineui_person_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983636,
  					unicodeHex: "\\F0254",
  					cssClass: "ic_refineui_person_24_regular"
  				},
  				filled: {
  					unicode: 983635,
  					unicodeHex: "\\F0253",
  					cssClass: "ic_refineui_person_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983635,
  					unicodeHex: "\\F0253",
  					cssClass: "ic_refineui_person_28_regular"
  				},
  				filled: {
  					unicode: 983637,
  					unicodeHex: "\\F0255",
  					cssClass: "ic_refineui_person_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983634,
  					unicodeHex: "\\F0252",
  					cssClass: "ic_refineui_person_32_regular"
  				},
  				filled: {
  					unicode: 983636,
  					unicodeHex: "\\F0254",
  					cssClass: "ic_refineui_person_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983638,
  					unicodeHex: "\\F0256",
  					cssClass: "ic_refineui_person_48_regular"
  				},
  				filled: {
  					unicode: 983639,
  					unicodeHex: "\\F0257",
  					cssClass: "ic_refineui_person_48_filled"
  				}
  			}
  		}
  	},
  	Dart: {
  		name: "Dart",
  		slug: "dart",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in dart scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_dart_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Dart/svg/ic_refineui_dart_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dart_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Dart/svg/ic_refineui_dart_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dart_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Dart/svg/ic_refineui_dart_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dart_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Dart/svg/ic_refineui_dart_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dart_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Dart/svg/ic_refineui_dart_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dart_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Dart/svg/ic_refineui_dart_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dart_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Dart/svg/ic_refineui_dart_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dart_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Dart/svg/ic_refineui_dart_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dart_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Dart/svg/ic_refineui_dart_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dart_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Dart/svg/ic_refineui_dart_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dart_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Dart/svg/ic_refineui_dart_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dart_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Dart/svg/ic_refineui_dart_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983643,
  					unicodeHex: "\\F025B",
  					cssClass: "ic_refineui_dart_16_regular"
  				},
  				filled: {
  					unicode: 983644,
  					unicodeHex: "\\F025C",
  					cssClass: "ic_refineui_dart_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983640,
  					unicodeHex: "\\F0258",
  					cssClass: "ic_refineui_dart_20_regular"
  				},
  				filled: {
  					unicode: 983642,
  					unicodeHex: "\\F025A",
  					cssClass: "ic_refineui_dart_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983642,
  					unicodeHex: "\\F025A",
  					cssClass: "ic_refineui_dart_24_regular"
  				},
  				filled: {
  					unicode: 983645,
  					unicodeHex: "\\F025D",
  					cssClass: "ic_refineui_dart_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983641,
  					unicodeHex: "\\F0259",
  					cssClass: "ic_refineui_dart_28_regular"
  				},
  				filled: {
  					unicode: 983641,
  					unicodeHex: "\\F0259",
  					cssClass: "ic_refineui_dart_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983645,
  					unicodeHex: "\\F025D",
  					cssClass: "ic_refineui_dart_32_regular"
  				},
  				filled: {
  					unicode: 983643,
  					unicodeHex: "\\F025B",
  					cssClass: "ic_refineui_dart_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983644,
  					unicodeHex: "\\F025C",
  					cssClass: "ic_refineui_dart_48_regular"
  				},
  				filled: {
  					unicode: 983640,
  					unicodeHex: "\\F0258",
  					cssClass: "ic_refineui_dart_48_filled"
  				}
  			}
  		}
  	},
  	Highway: {
  		name: "Highway",
  		slug: "highway",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in highway scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_highway_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Highway/svg/ic_refineui_highway_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_highway_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Highway/svg/ic_refineui_highway_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_highway_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Highway/svg/ic_refineui_highway_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_highway_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Highway/svg/ic_refineui_highway_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_highway_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Highway/svg/ic_refineui_highway_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_highway_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Highway/svg/ic_refineui_highway_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_highway_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Highway/svg/ic_refineui_highway_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_highway_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Highway/svg/ic_refineui_highway_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_highway_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Highway/svg/ic_refineui_highway_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_highway_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Highway/svg/ic_refineui_highway_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_highway_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Highway/svg/ic_refineui_highway_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_highway_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Highway/svg/ic_refineui_highway_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983648,
  					unicodeHex: "\\F0260",
  					cssClass: "ic_refineui_highway_16_regular"
  				},
  				filled: {
  					unicode: 983649,
  					unicodeHex: "\\F0261",
  					cssClass: "ic_refineui_highway_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983651,
  					unicodeHex: "\\F0263",
  					cssClass: "ic_refineui_highway_20_regular"
  				},
  				filled: {
  					unicode: 983647,
  					unicodeHex: "\\F025F",
  					cssClass: "ic_refineui_highway_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983649,
  					unicodeHex: "\\F0261",
  					cssClass: "ic_refineui_highway_24_regular"
  				},
  				filled: {
  					unicode: 983650,
  					unicodeHex: "\\F0262",
  					cssClass: "ic_refineui_highway_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983646,
  					unicodeHex: "\\F025E",
  					cssClass: "ic_refineui_highway_28_regular"
  				},
  				filled: {
  					unicode: 983646,
  					unicodeHex: "\\F025E",
  					cssClass: "ic_refineui_highway_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983650,
  					unicodeHex: "\\F0262",
  					cssClass: "ic_refineui_highway_32_regular"
  				},
  				filled: {
  					unicode: 983651,
  					unicodeHex: "\\F0263",
  					cssClass: "ic_refineui_highway_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983647,
  					unicodeHex: "\\F025F",
  					cssClass: "ic_refineui_highway_48_regular"
  				},
  				filled: {
  					unicode: 983648,
  					unicodeHex: "\\F0260",
  					cssClass: "ic_refineui_highway_48_filled"
  				}
  			}
  		}
  	},
  	Comment: {
  		name: "Comment",
  		slug: "comment",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in comment scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_comment_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Comment/svg/ic_refineui_comment_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_comment_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Comment/svg/ic_refineui_comment_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_comment_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Comment/svg/ic_refineui_comment_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_comment_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Comment/svg/ic_refineui_comment_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_comment_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Comment/svg/ic_refineui_comment_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_comment_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Comment/svg/ic_refineui_comment_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_comment_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Comment/svg/ic_refineui_comment_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_comment_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Comment/svg/ic_refineui_comment_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_comment_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Comment/svg/ic_refineui_comment_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_comment_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Comment/svg/ic_refineui_comment_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_comment_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Comment/svg/ic_refineui_comment_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_comment_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Comment/svg/ic_refineui_comment_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983652,
  					unicodeHex: "\\F0264",
  					cssClass: "ic_refineui_comment_16_regular"
  				},
  				filled: {
  					unicode: 983653,
  					unicodeHex: "\\F0265",
  					cssClass: "ic_refineui_comment_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983657,
  					unicodeHex: "\\F0269",
  					cssClass: "ic_refineui_comment_20_regular"
  				},
  				filled: {
  					unicode: 983655,
  					unicodeHex: "\\F0267",
  					cssClass: "ic_refineui_comment_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983654,
  					unicodeHex: "\\F0266",
  					cssClass: "ic_refineui_comment_24_regular"
  				},
  				filled: {
  					unicode: 983652,
  					unicodeHex: "\\F0264",
  					cssClass: "ic_refineui_comment_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983655,
  					unicodeHex: "\\F0267",
  					cssClass: "ic_refineui_comment_28_regular"
  				},
  				filled: {
  					unicode: 983656,
  					unicodeHex: "\\F0268",
  					cssClass: "ic_refineui_comment_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983656,
  					unicodeHex: "\\F0268",
  					cssClass: "ic_refineui_comment_32_regular"
  				},
  				filled: {
  					unicode: 983654,
  					unicodeHex: "\\F0266",
  					cssClass: "ic_refineui_comment_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983653,
  					unicodeHex: "\\F0265",
  					cssClass: "ic_refineui_comment_48_regular"
  				},
  				filled: {
  					unicode: 983657,
  					unicodeHex: "\\F0269",
  					cssClass: "ic_refineui_comment_48_filled"
  				}
  			}
  		}
  	},
  	Mail: {
  		name: "Mail",
  		slug: "mail",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in mail scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_mail_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Mail/svg/ic_refineui_mail_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mail_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Mail/svg/ic_refineui_mail_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mail_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Mail/svg/ic_refineui_mail_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mail_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Mail/svg/ic_refineui_mail_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mail_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Mail/svg/ic_refineui_mail_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mail_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Mail/svg/ic_refineui_mail_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mail_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Mail/svg/ic_refineui_mail_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mail_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Mail/svg/ic_refineui_mail_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mail_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Mail/svg/ic_refineui_mail_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mail_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Mail/svg/ic_refineui_mail_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mail_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Mail/svg/ic_refineui_mail_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mail_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Mail/svg/ic_refineui_mail_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983661,
  					unicodeHex: "\\F026D",
  					cssClass: "ic_refineui_mail_16_regular"
  				},
  				filled: {
  					unicode: 983663,
  					unicodeHex: "\\F026F",
  					cssClass: "ic_refineui_mail_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983658,
  					unicodeHex: "\\F026A",
  					cssClass: "ic_refineui_mail_20_regular"
  				},
  				filled: {
  					unicode: 983659,
  					unicodeHex: "\\F026B",
  					cssClass: "ic_refineui_mail_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983659,
  					unicodeHex: "\\F026B",
  					cssClass: "ic_refineui_mail_24_regular"
  				},
  				filled: {
  					unicode: 983662,
  					unicodeHex: "\\F026E",
  					cssClass: "ic_refineui_mail_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983662,
  					unicodeHex: "\\F026E",
  					cssClass: "ic_refineui_mail_28_regular"
  				},
  				filled: {
  					unicode: 983660,
  					unicodeHex: "\\F026C",
  					cssClass: "ic_refineui_mail_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983663,
  					unicodeHex: "\\F026F",
  					cssClass: "ic_refineui_mail_32_regular"
  				},
  				filled: {
  					unicode: 983661,
  					unicodeHex: "\\F026D",
  					cssClass: "ic_refineui_mail_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983660,
  					unicodeHex: "\\F026C",
  					cssClass: "ic_refineui_mail_48_regular"
  				},
  				filled: {
  					unicode: 983658,
  					unicodeHex: "\\F026A",
  					cssClass: "ic_refineui_mail_48_filled"
  				}
  			}
  		}
  	},
  	Alert: {
  		name: "Alert",
  		slug: "alert",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in alert scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_alert_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Alert/svg/ic_refineui_alert_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_alert_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Alert/svg/ic_refineui_alert_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_alert_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Alert/svg/ic_refineui_alert_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_alert_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Alert/svg/ic_refineui_alert_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_alert_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Alert/svg/ic_refineui_alert_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_alert_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Alert/svg/ic_refineui_alert_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_alert_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Alert/svg/ic_refineui_alert_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_alert_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Alert/svg/ic_refineui_alert_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_alert_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Alert/svg/ic_refineui_alert_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_alert_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Alert/svg/ic_refineui_alert_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_alert_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Alert/svg/ic_refineui_alert_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_alert_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Alert/svg/ic_refineui_alert_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983665,
  					unicodeHex: "\\F0271",
  					cssClass: "ic_refineui_alert_16_regular"
  				},
  				filled: {
  					unicode: 983668,
  					unicodeHex: "\\F0274",
  					cssClass: "ic_refineui_alert_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983669,
  					unicodeHex: "\\F0275",
  					cssClass: "ic_refineui_alert_20_regular"
  				},
  				filled: {
  					unicode: 983664,
  					unicodeHex: "\\F0270",
  					cssClass: "ic_refineui_alert_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983664,
  					unicodeHex: "\\F0270",
  					cssClass: "ic_refineui_alert_24_regular"
  				},
  				filled: {
  					unicode: 983667,
  					unicodeHex: "\\F0273",
  					cssClass: "ic_refineui_alert_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983667,
  					unicodeHex: "\\F0273",
  					cssClass: "ic_refineui_alert_28_regular"
  				},
  				filled: {
  					unicode: 983665,
  					unicodeHex: "\\F0271",
  					cssClass: "ic_refineui_alert_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983668,
  					unicodeHex: "\\F0274",
  					cssClass: "ic_refineui_alert_32_regular"
  				},
  				filled: {
  					unicode: 983669,
  					unicodeHex: "\\F0275",
  					cssClass: "ic_refineui_alert_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983666,
  					unicodeHex: "\\F0272",
  					cssClass: "ic_refineui_alert_48_regular"
  				},
  				filled: {
  					unicode: 983666,
  					unicodeHex: "\\F0272",
  					cssClass: "ic_refineui_alert_48_filled"
  				}
  			}
  		}
  	},
  	Web: {
  		name: "Web",
  		slug: "web",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in web scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_web_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Web/svg/ic_refineui_web_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_web_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Web/svg/ic_refineui_web_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_web_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Web/svg/ic_refineui_web_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_web_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Web/svg/ic_refineui_web_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_web_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Web/svg/ic_refineui_web_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_web_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Web/svg/ic_refineui_web_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_web_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Web/svg/ic_refineui_web_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_web_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Web/svg/ic_refineui_web_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_web_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Web/svg/ic_refineui_web_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_web_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Web/svg/ic_refineui_web_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_web_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Web/svg/ic_refineui_web_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_web_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Web/svg/ic_refineui_web_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983689,
  					unicodeHex: "\\F0289",
  					cssClass: "ic_refineui_web_16_regular"
  				},
  				filled: {
  					unicode: 983692,
  					unicodeHex: "\\F028C",
  					cssClass: "ic_refineui_web_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983693,
  					unicodeHex: "\\F028D",
  					cssClass: "ic_refineui_web_20_regular"
  				},
  				filled: {
  					unicode: 983690,
  					unicodeHex: "\\F028A",
  					cssClass: "ic_refineui_web_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983691,
  					unicodeHex: "\\F028B",
  					cssClass: "ic_refineui_web_24_regular"
  				},
  				filled: {
  					unicode: 983693,
  					unicodeHex: "\\F028D",
  					cssClass: "ic_refineui_web_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983692,
  					unicodeHex: "\\F028C",
  					cssClass: "ic_refineui_web_28_regular"
  				},
  				filled: {
  					unicode: 983689,
  					unicodeHex: "\\F0289",
  					cssClass: "ic_refineui_web_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983688,
  					unicodeHex: "\\F0288",
  					cssClass: "ic_refineui_web_32_regular"
  				},
  				filled: {
  					unicode: 983691,
  					unicodeHex: "\\F028B",
  					cssClass: "ic_refineui_web_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983690,
  					unicodeHex: "\\F028A",
  					cssClass: "ic_refineui_web_48_regular"
  				},
  				filled: {
  					unicode: 983688,
  					unicodeHex: "\\F0288",
  					cssClass: "ic_refineui_web_48_filled"
  				}
  			}
  		}
  	},
  	Target: {
  		name: "Target",
  		slug: "target",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in target scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_target_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Target/svg/ic_refineui_target_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_target_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Target/svg/ic_refineui_target_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_target_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Target/svg/ic_refineui_target_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_target_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Target/svg/ic_refineui_target_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_target_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Target/svg/ic_refineui_target_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_target_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Target/svg/ic_refineui_target_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_target_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Target/svg/ic_refineui_target_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_target_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Target/svg/ic_refineui_target_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_target_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Target/svg/ic_refineui_target_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_target_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Target/svg/ic_refineui_target_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_target_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Target/svg/ic_refineui_target_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_target_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Target/svg/ic_refineui_target_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983698,
  					unicodeHex: "\\F0292",
  					cssClass: "ic_refineui_target_16_regular"
  				},
  				filled: {
  					unicode: 983694,
  					unicodeHex: "\\F028E",
  					cssClass: "ic_refineui_target_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983694,
  					unicodeHex: "\\F028E",
  					cssClass: "ic_refineui_target_20_regular"
  				},
  				filled: {
  					unicode: 983698,
  					unicodeHex: "\\F0292",
  					cssClass: "ic_refineui_target_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983696,
  					unicodeHex: "\\F0290",
  					cssClass: "ic_refineui_target_24_regular"
  				},
  				filled: {
  					unicode: 983695,
  					unicodeHex: "\\F028F",
  					cssClass: "ic_refineui_target_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983699,
  					unicodeHex: "\\F0293",
  					cssClass: "ic_refineui_target_28_regular"
  				},
  				filled: {
  					unicode: 983697,
  					unicodeHex: "\\F0291",
  					cssClass: "ic_refineui_target_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983695,
  					unicodeHex: "\\F028F",
  					cssClass: "ic_refineui_target_32_regular"
  				},
  				filled: {
  					unicode: 983696,
  					unicodeHex: "\\F0290",
  					cssClass: "ic_refineui_target_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983697,
  					unicodeHex: "\\F0291",
  					cssClass: "ic_refineui_target_48_regular"
  				},
  				filled: {
  					unicode: 983699,
  					unicodeHex: "\\F0293",
  					cssClass: "ic_refineui_target_48_filled"
  				}
  			}
  		}
  	},
  	Mailbox: {
  		name: "Mailbox",
  		slug: "mailbox",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in mailbox scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_mailbox_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Mailbox/svg/ic_refineui_mailbox_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mailbox_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Mailbox/svg/ic_refineui_mailbox_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mailbox_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Mailbox/svg/ic_refineui_mailbox_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mailbox_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Mailbox/svg/ic_refineui_mailbox_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mailbox_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Mailbox/svg/ic_refineui_mailbox_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mailbox_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Mailbox/svg/ic_refineui_mailbox_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mailbox_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Mailbox/svg/ic_refineui_mailbox_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mailbox_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Mailbox/svg/ic_refineui_mailbox_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mailbox_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Mailbox/svg/ic_refineui_mailbox_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mailbox_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Mailbox/svg/ic_refineui_mailbox_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mailbox_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Mailbox/svg/ic_refineui_mailbox_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mailbox_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Mailbox/svg/ic_refineui_mailbox_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983708,
  					unicodeHex: "\\F029C",
  					cssClass: "ic_refineui_mailbox_16_regular"
  				},
  				filled: {
  					unicode: 983710,
  					unicodeHex: "\\F029E",
  					cssClass: "ic_refineui_mailbox_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983711,
  					unicodeHex: "\\F029F",
  					cssClass: "ic_refineui_mailbox_20_regular"
  				},
  				filled: {
  					unicode: 983706,
  					unicodeHex: "\\F029A",
  					cssClass: "ic_refineui_mailbox_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983710,
  					unicodeHex: "\\F029E",
  					cssClass: "ic_refineui_mailbox_24_regular"
  				},
  				filled: {
  					unicode: 983709,
  					unicodeHex: "\\F029D",
  					cssClass: "ic_refineui_mailbox_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983707,
  					unicodeHex: "\\F029B",
  					cssClass: "ic_refineui_mailbox_28_regular"
  				},
  				filled: {
  					unicode: 983707,
  					unicodeHex: "\\F029B",
  					cssClass: "ic_refineui_mailbox_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983706,
  					unicodeHex: "\\F029A",
  					cssClass: "ic_refineui_mailbox_32_regular"
  				},
  				filled: {
  					unicode: 983711,
  					unicodeHex: "\\F029F",
  					cssClass: "ic_refineui_mailbox_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983709,
  					unicodeHex: "\\F029D",
  					cssClass: "ic_refineui_mailbox_48_regular"
  				},
  				filled: {
  					unicode: 983708,
  					unicodeHex: "\\F029C",
  					cssClass: "ic_refineui_mailbox_48_filled"
  				}
  			}
  		}
  	},
  	Markdown: {
  		name: "Markdown",
  		slug: "markdown",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in markdown scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_markdown_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Markdown/svg/ic_refineui_markdown_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_markdown_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Markdown/svg/ic_refineui_markdown_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_markdown_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Markdown/svg/ic_refineui_markdown_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_markdown_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Markdown/svg/ic_refineui_markdown_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_markdown_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Markdown/svg/ic_refineui_markdown_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_markdown_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Markdown/svg/ic_refineui_markdown_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_markdown_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Markdown/svg/ic_refineui_markdown_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_markdown_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Markdown/svg/ic_refineui_markdown_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_markdown_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Markdown/svg/ic_refineui_markdown_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_markdown_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Markdown/svg/ic_refineui_markdown_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_markdown_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Markdown/svg/ic_refineui_markdown_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_markdown_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Markdown/svg/ic_refineui_markdown_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983714,
  					unicodeHex: "\\F02A2",
  					cssClass: "ic_refineui_markdown_16_regular"
  				},
  				filled: {
  					unicode: 983716,
  					unicodeHex: "\\F02A4",
  					cssClass: "ic_refineui_markdown_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983717,
  					unicodeHex: "\\F02A5",
  					cssClass: "ic_refineui_markdown_20_regular"
  				},
  				filled: {
  					unicode: 983712,
  					unicodeHex: "\\F02A0",
  					cssClass: "ic_refineui_markdown_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983712,
  					unicodeHex: "\\F02A0",
  					cssClass: "ic_refineui_markdown_24_regular"
  				},
  				filled: {
  					unicode: 983715,
  					unicodeHex: "\\F02A3",
  					cssClass: "ic_refineui_markdown_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983715,
  					unicodeHex: "\\F02A3",
  					cssClass: "ic_refineui_markdown_28_regular"
  				},
  				filled: {
  					unicode: 983713,
  					unicodeHex: "\\F02A1",
  					cssClass: "ic_refineui_markdown_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983716,
  					unicodeHex: "\\F02A4",
  					cssClass: "ic_refineui_markdown_32_regular"
  				},
  				filled: {
  					unicode: 983717,
  					unicodeHex: "\\F02A5",
  					cssClass: "ic_refineui_markdown_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983713,
  					unicodeHex: "\\F02A1",
  					cssClass: "ic_refineui_markdown_48_regular"
  				},
  				filled: {
  					unicode: 983714,
  					unicodeHex: "\\F02A2",
  					cssClass: "ic_refineui_markdown_48_filled"
  				}
  			}
  		}
  	},
  	Camera: {
  		name: "Camera",
  		slug: "camera",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in camera scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_camera_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Camera/svg/ic_refineui_camera_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_camera_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Camera/svg/ic_refineui_camera_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_camera_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Camera/svg/ic_refineui_camera_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_camera_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Camera/svg/ic_refineui_camera_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_camera_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Camera/svg/ic_refineui_camera_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_camera_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Camera/svg/ic_refineui_camera_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_camera_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Camera/svg/ic_refineui_camera_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_camera_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Camera/svg/ic_refineui_camera_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_camera_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Camera/svg/ic_refineui_camera_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_camera_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Camera/svg/ic_refineui_camera_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_camera_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Camera/svg/ic_refineui_camera_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_camera_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Camera/svg/ic_refineui_camera_28_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983726,
  					unicodeHex: "\\F02AE",
  					cssClass: "ic_refineui_camera_16_regular"
  				},
  				filled: {
  					unicode: 983726,
  					unicodeHex: "\\F02AE",
  					cssClass: "ic_refineui_camera_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983729,
  					unicodeHex: "\\F02B1",
  					cssClass: "ic_refineui_camera_20_regular"
  				},
  				filled: {
  					unicode: 983728,
  					unicodeHex: "\\F02B0",
  					cssClass: "ic_refineui_camera_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983727,
  					unicodeHex: "\\F02AF",
  					cssClass: "ic_refineui_camera_24_regular"
  				},
  				filled: {
  					unicode: 983725,
  					unicodeHex: "\\F02AD",
  					cssClass: "ic_refineui_camera_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983728,
  					unicodeHex: "\\F02B0",
  					cssClass: "ic_refineui_camera_28_regular"
  				},
  				filled: {
  					unicode: 983729,
  					unicodeHex: "\\F02B1",
  					cssClass: "ic_refineui_camera_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983724,
  					unicodeHex: "\\F02AC",
  					cssClass: "ic_refineui_camera_32_regular"
  				},
  				filled: {
  					unicode: 983724,
  					unicodeHex: "\\F02AC",
  					cssClass: "ic_refineui_camera_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983725,
  					unicodeHex: "\\F02AD",
  					cssClass: "ic_refineui_camera_48_regular"
  				},
  				filled: {
  					unicode: 983727,
  					unicodeHex: "\\F02AF",
  					cssClass: "ic_refineui_camera_48_filled"
  				}
  			}
  		}
  	},
  	Location: {
  		name: "Location",
  		slug: "location",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in location scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_location_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Location/svg/ic_refineui_location_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_location_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Location/svg/ic_refineui_location_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_location_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Location/svg/ic_refineui_location_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_location_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Location/svg/ic_refineui_location_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_location_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Location/svg/ic_refineui_location_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_location_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Location/svg/ic_refineui_location_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_location_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Location/svg/ic_refineui_location_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_location_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Location/svg/ic_refineui_location_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_location_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Location/svg/ic_refineui_location_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_location_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Location/svg/ic_refineui_location_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_location_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Location/svg/ic_refineui_location_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_location_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Location/svg/ic_refineui_location_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983737,
  					unicodeHex: "\\F02B9",
  					cssClass: "ic_refineui_location_16_regular"
  				},
  				filled: {
  					unicode: 983740,
  					unicodeHex: "\\F02BC",
  					cssClass: "ic_refineui_location_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983736,
  					unicodeHex: "\\F02B8",
  					cssClass: "ic_refineui_location_20_regular"
  				},
  				filled: {
  					unicode: 983736,
  					unicodeHex: "\\F02B8",
  					cssClass: "ic_refineui_location_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983739,
  					unicodeHex: "\\F02BB",
  					cssClass: "ic_refineui_location_24_regular"
  				},
  				filled: {
  					unicode: 983739,
  					unicodeHex: "\\F02BB",
  					cssClass: "ic_refineui_location_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983740,
  					unicodeHex: "\\F02BC",
  					cssClass: "ic_refineui_location_28_regular"
  				},
  				filled: {
  					unicode: 983737,
  					unicodeHex: "\\F02B9",
  					cssClass: "ic_refineui_location_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983741,
  					unicodeHex: "\\F02BD",
  					cssClass: "ic_refineui_location_32_regular"
  				},
  				filled: {
  					unicode: 983741,
  					unicodeHex: "\\F02BD",
  					cssClass: "ic_refineui_location_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983738,
  					unicodeHex: "\\F02BA",
  					cssClass: "ic_refineui_location_48_regular"
  				},
  				filled: {
  					unicode: 983738,
  					unicodeHex: "\\F02BA",
  					cssClass: "ic_refineui_location_48_filled"
  				}
  			}
  		}
  	},
  	Payment: {
  		name: "Payment",
  		slug: "payment",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in payment scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_payment_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Payment/svg/ic_refineui_payment_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_payment_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Payment/svg/ic_refineui_payment_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_payment_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Payment/svg/ic_refineui_payment_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_payment_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Payment/svg/ic_refineui_payment_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_payment_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Payment/svg/ic_refineui_payment_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_payment_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Payment/svg/ic_refineui_payment_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_payment_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Payment/svg/ic_refineui_payment_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_payment_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Payment/svg/ic_refineui_payment_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_payment_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Payment/svg/ic_refineui_payment_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_payment_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Payment/svg/ic_refineui_payment_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_payment_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Payment/svg/ic_refineui_payment_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_payment_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Payment/svg/ic_refineui_payment_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983751,
  					unicodeHex: "\\F02C7",
  					cssClass: "ic_refineui_payment_16_regular"
  				},
  				filled: {
  					unicode: 983751,
  					unicodeHex: "\\F02C7",
  					cssClass: "ic_refineui_payment_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983748,
  					unicodeHex: "\\F02C4",
  					cssClass: "ic_refineui_payment_20_regular"
  				},
  				filled: {
  					unicode: 983749,
  					unicodeHex: "\\F02C5",
  					cssClass: "ic_refineui_payment_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983752,
  					unicodeHex: "\\F02C8",
  					cssClass: "ic_refineui_payment_24_regular"
  				},
  				filled: {
  					unicode: 983752,
  					unicodeHex: "\\F02C8",
  					cssClass: "ic_refineui_payment_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983753,
  					unicodeHex: "\\F02C9",
  					cssClass: "ic_refineui_payment_28_regular"
  				},
  				filled: {
  					unicode: 983748,
  					unicodeHex: "\\F02C4",
  					cssClass: "ic_refineui_payment_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983749,
  					unicodeHex: "\\F02C5",
  					cssClass: "ic_refineui_payment_32_regular"
  				},
  				filled: {
  					unicode: 983753,
  					unicodeHex: "\\F02C9",
  					cssClass: "ic_refineui_payment_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983750,
  					unicodeHex: "\\F02C6",
  					cssClass: "ic_refineui_payment_48_regular"
  				},
  				filled: {
  					unicode: 983750,
  					unicodeHex: "\\F02C6",
  					cssClass: "ic_refineui_payment_48_filled"
  				}
  			}
  		}
  	},
  	Trophy: {
  		name: "Trophy",
  		slug: "trophy",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in trophy scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_trophy_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Trophy/svg/ic_refineui_trophy_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_trophy_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Trophy/svg/ic_refineui_trophy_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_trophy_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Trophy/svg/ic_refineui_trophy_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_trophy_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Trophy/svg/ic_refineui_trophy_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_trophy_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Trophy/svg/ic_refineui_trophy_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_trophy_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Trophy/svg/ic_refineui_trophy_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_trophy_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Trophy/svg/ic_refineui_trophy_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_trophy_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Trophy/svg/ic_refineui_trophy_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_trophy_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Trophy/svg/ic_refineui_trophy_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_trophy_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Trophy/svg/ic_refineui_trophy_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_trophy_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Trophy/svg/ic_refineui_trophy_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_trophy_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Trophy/svg/ic_refineui_trophy_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983782,
  					unicodeHex: "\\F02E6",
  					cssClass: "ic_refineui_trophy_16_regular"
  				},
  				filled: {
  					unicode: 983782,
  					unicodeHex: "\\F02E6",
  					cssClass: "ic_refineui_trophy_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983783,
  					unicodeHex: "\\F02E7",
  					cssClass: "ic_refineui_trophy_20_regular"
  				},
  				filled: {
  					unicode: 983778,
  					unicodeHex: "\\F02E2",
  					cssClass: "ic_refineui_trophy_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983780,
  					unicodeHex: "\\F02E4",
  					cssClass: "ic_refineui_trophy_24_regular"
  				},
  				filled: {
  					unicode: 983781,
  					unicodeHex: "\\F02E5",
  					cssClass: "ic_refineui_trophy_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983779,
  					unicodeHex: "\\F02E3",
  					cssClass: "ic_refineui_trophy_28_regular"
  				},
  				filled: {
  					unicode: 983779,
  					unicodeHex: "\\F02E3",
  					cssClass: "ic_refineui_trophy_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983778,
  					unicodeHex: "\\F02E2",
  					cssClass: "ic_refineui_trophy_32_regular"
  				},
  				filled: {
  					unicode: 983783,
  					unicodeHex: "\\F02E7",
  					cssClass: "ic_refineui_trophy_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983781,
  					unicodeHex: "\\F02E5",
  					cssClass: "ic_refineui_trophy_48_regular"
  				},
  				filled: {
  					unicode: 983780,
  					unicodeHex: "\\F02E4",
  					cssClass: "ic_refineui_trophy_48_filled"
  				}
  			}
  		}
  	},
  	Square: {
  		name: "Square",
  		slug: "square",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in square scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_square_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Square/svg/ic_refineui_square_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_square_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Square/svg/ic_refineui_square_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_square_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Square/svg/ic_refineui_square_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_square_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Square/svg/ic_refineui_square_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_square_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Square/svg/ic_refineui_square_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_square_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Square/svg/ic_refineui_square_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_square_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Square/svg/ic_refineui_square_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_square_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Square/svg/ic_refineui_square_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_square_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Square/svg/ic_refineui_square_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_square_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Square/svg/ic_refineui_square_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_square_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Square/svg/ic_refineui_square_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_square_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Square/svg/ic_refineui_square_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983792,
  					unicodeHex: "\\F02F0",
  					cssClass: "ic_refineui_square_16_regular"
  				},
  				filled: {
  					unicode: 983791,
  					unicodeHex: "\\F02EF",
  					cssClass: "ic_refineui_square_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983790,
  					unicodeHex: "\\F02EE",
  					cssClass: "ic_refineui_square_20_regular"
  				},
  				filled: {
  					unicode: 983793,
  					unicodeHex: "\\F02F1",
  					cssClass: "ic_refineui_square_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983794,
  					unicodeHex: "\\F02F2",
  					cssClass: "ic_refineui_square_24_regular"
  				},
  				filled: {
  					unicode: 983790,
  					unicodeHex: "\\F02EE",
  					cssClass: "ic_refineui_square_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983795,
  					unicodeHex: "\\F02F3",
  					cssClass: "ic_refineui_square_28_regular"
  				},
  				filled: {
  					unicode: 983794,
  					unicodeHex: "\\F02F2",
  					cssClass: "ic_refineui_square_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983791,
  					unicodeHex: "\\F02EF",
  					cssClass: "ic_refineui_square_32_regular"
  				},
  				filled: {
  					unicode: 983792,
  					unicodeHex: "\\F02F0",
  					cssClass: "ic_refineui_square_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983793,
  					unicodeHex: "\\F02F1",
  					cssClass: "ic_refineui_square_48_regular"
  				},
  				filled: {
  					unicode: 983795,
  					unicodeHex: "\\F02F3",
  					cssClass: "ic_refineui_square_48_filled"
  				}
  			}
  		}
  	},
  	Hdr: {
  		name: "Hdr",
  		slug: "hdr",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in hdr scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_hdr_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Hdr/svg/ic_refineui_hdr_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hdr_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Hdr/svg/ic_refineui_hdr_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hdr_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Hdr/svg/ic_refineui_hdr_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hdr_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Hdr/svg/ic_refineui_hdr_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hdr_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Hdr/svg/ic_refineui_hdr_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hdr_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Hdr/svg/ic_refineui_hdr_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hdr_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Hdr/svg/ic_refineui_hdr_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hdr_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Hdr/svg/ic_refineui_hdr_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hdr_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Hdr/svg/ic_refineui_hdr_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hdr_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Hdr/svg/ic_refineui_hdr_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hdr_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Hdr/svg/ic_refineui_hdr_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hdr_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Hdr/svg/ic_refineui_hdr_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983798,
  					unicodeHex: "\\F02F6",
  					cssClass: "ic_refineui_hdr_16_regular"
  				},
  				filled: {
  					unicode: 983801,
  					unicodeHex: "\\F02F9",
  					cssClass: "ic_refineui_hdr_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983796,
  					unicodeHex: "\\F02F4",
  					cssClass: "ic_refineui_hdr_20_regular"
  				},
  				filled: {
  					unicode: 983797,
  					unicodeHex: "\\F02F5",
  					cssClass: "ic_refineui_hdr_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983797,
  					unicodeHex: "\\F02F5",
  					cssClass: "ic_refineui_hdr_24_regular"
  				},
  				filled: {
  					unicode: 983800,
  					unicodeHex: "\\F02F8",
  					cssClass: "ic_refineui_hdr_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983800,
  					unicodeHex: "\\F02F8",
  					cssClass: "ic_refineui_hdr_28_regular"
  				},
  				filled: {
  					unicode: 983798,
  					unicodeHex: "\\F02F6",
  					cssClass: "ic_refineui_hdr_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983801,
  					unicodeHex: "\\F02F9",
  					cssClass: "ic_refineui_hdr_32_regular"
  				},
  				filled: {
  					unicode: 983799,
  					unicodeHex: "\\F02F7",
  					cssClass: "ic_refineui_hdr_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983799,
  					unicodeHex: "\\F02F7",
  					cssClass: "ic_refineui_hdr_48_regular"
  				},
  				filled: {
  					unicode: 983796,
  					unicodeHex: "\\F02F4",
  					cssClass: "ic_refineui_hdr_48_filled"
  				}
  			}
  		}
  	},
  	Typescript: {
  		name: "Typescript",
  		slug: "typescript",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in typescript scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_typescript_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Typescript/svg/ic_refineui_typescript_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_typescript_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Typescript/svg/ic_refineui_typescript_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_typescript_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Typescript/svg/ic_refineui_typescript_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_typescript_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Typescript/svg/ic_refineui_typescript_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_typescript_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Typescript/svg/ic_refineui_typescript_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_typescript_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Typescript/svg/ic_refineui_typescript_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_typescript_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Typescript/svg/ic_refineui_typescript_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_typescript_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Typescript/svg/ic_refineui_typescript_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_typescript_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Typescript/svg/ic_refineui_typescript_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_typescript_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Typescript/svg/ic_refineui_typescript_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_typescript_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Typescript/svg/ic_refineui_typescript_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_typescript_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Typescript/svg/ic_refineui_typescript_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983803,
  					unicodeHex: "\\F02FB",
  					cssClass: "ic_refineui_typescript_16_regular"
  				},
  				filled: {
  					unicode: 983803,
  					unicodeHex: "\\F02FB",
  					cssClass: "ic_refineui_typescript_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983802,
  					unicodeHex: "\\F02FA",
  					cssClass: "ic_refineui_typescript_20_regular"
  				},
  				filled: {
  					unicode: 983805,
  					unicodeHex: "\\F02FD",
  					cssClass: "ic_refineui_typescript_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983805,
  					unicodeHex: "\\F02FD",
  					cssClass: "ic_refineui_typescript_24_regular"
  				},
  				filled: {
  					unicode: 983802,
  					unicodeHex: "\\F02FA",
  					cssClass: "ic_refineui_typescript_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983806,
  					unicodeHex: "\\F02FE",
  					cssClass: "ic_refineui_typescript_28_regular"
  				},
  				filled: {
  					unicode: 983806,
  					unicodeHex: "\\F02FE",
  					cssClass: "ic_refineui_typescript_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983807,
  					unicodeHex: "\\F02FF",
  					cssClass: "ic_refineui_typescript_32_regular"
  				},
  				filled: {
  					unicode: 983804,
  					unicodeHex: "\\F02FC",
  					cssClass: "ic_refineui_typescript_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983804,
  					unicodeHex: "\\F02FC",
  					cssClass: "ic_refineui_typescript_48_regular"
  				},
  				filled: {
  					unicode: 983807,
  					unicodeHex: "\\F02FF",
  					cssClass: "ic_refineui_typescript_48_filled"
  				}
  			}
  		}
  	},
  	Cube: {
  		name: "Cube",
  		slug: "cube",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in cube scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_cube_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Cube/svg/ic_refineui_cube_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cube_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Cube/svg/ic_refineui_cube_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cube_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Cube/svg/ic_refineui_cube_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cube_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Cube/svg/ic_refineui_cube_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cube_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Cube/svg/ic_refineui_cube_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cube_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Cube/svg/ic_refineui_cube_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cube_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Cube/svg/ic_refineui_cube_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cube_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Cube/svg/ic_refineui_cube_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cube_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Cube/svg/ic_refineui_cube_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cube_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Cube/svg/ic_refineui_cube_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cube_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Cube/svg/ic_refineui_cube_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cube_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Cube/svg/ic_refineui_cube_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983815,
  					unicodeHex: "\\F0307",
  					cssClass: "ic_refineui_cube_16_regular"
  				},
  				filled: {
  					unicode: 983819,
  					unicodeHex: "\\F030B",
  					cssClass: "ic_refineui_cube_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983814,
  					unicodeHex: "\\F0306",
  					cssClass: "ic_refineui_cube_20_regular"
  				},
  				filled: {
  					unicode: 983815,
  					unicodeHex: "\\F0307",
  					cssClass: "ic_refineui_cube_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983817,
  					unicodeHex: "\\F0309",
  					cssClass: "ic_refineui_cube_24_regular"
  				},
  				filled: {
  					unicode: 983818,
  					unicodeHex: "\\F030A",
  					cssClass: "ic_refineui_cube_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983818,
  					unicodeHex: "\\F030A",
  					cssClass: "ic_refineui_cube_28_regular"
  				},
  				filled: {
  					unicode: 983816,
  					unicodeHex: "\\F0308",
  					cssClass: "ic_refineui_cube_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983819,
  					unicodeHex: "\\F030B",
  					cssClass: "ic_refineui_cube_32_regular"
  				},
  				filled: {
  					unicode: 983817,
  					unicodeHex: "\\F0309",
  					cssClass: "ic_refineui_cube_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983816,
  					unicodeHex: "\\F0308",
  					cssClass: "ic_refineui_cube_48_regular"
  				},
  				filled: {
  					unicode: 983814,
  					unicodeHex: "\\F0306",
  					cssClass: "ic_refineui_cube_48_filled"
  				}
  			}
  		}
  	},
  	Moon: {
  		name: "Moon",
  		slug: "moon",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in moon scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_moon_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Moon/svg/ic_refineui_moon_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_moon_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Moon/svg/ic_refineui_moon_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_moon_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Moon/svg/ic_refineui_moon_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_moon_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Moon/svg/ic_refineui_moon_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_moon_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Moon/svg/ic_refineui_moon_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_moon_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Moon/svg/ic_refineui_moon_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_moon_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Moon/svg/ic_refineui_moon_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_moon_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Moon/svg/ic_refineui_moon_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_moon_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Moon/svg/ic_refineui_moon_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_moon_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Moon/svg/ic_refineui_moon_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_moon_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Moon/svg/ic_refineui_moon_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_moon_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Moon/svg/ic_refineui_moon_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983840,
  					unicodeHex: "\\F0320",
  					cssClass: "ic_refineui_moon_16_regular"
  				},
  				filled: {
  					unicode: 983840,
  					unicodeHex: "\\F0320",
  					cssClass: "ic_refineui_moon_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983838,
  					unicodeHex: "\\F031E",
  					cssClass: "ic_refineui_moon_20_regular"
  				},
  				filled: {
  					unicode: 983842,
  					unicodeHex: "\\F0322",
  					cssClass: "ic_refineui_moon_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983842,
  					unicodeHex: "\\F0322",
  					cssClass: "ic_refineui_moon_24_regular"
  				},
  				filled: {
  					unicode: 983839,
  					unicodeHex: "\\F031F",
  					cssClass: "ic_refineui_moon_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983843,
  					unicodeHex: "\\F0323",
  					cssClass: "ic_refineui_moon_28_regular"
  				},
  				filled: {
  					unicode: 983843,
  					unicodeHex: "\\F0323",
  					cssClass: "ic_refineui_moon_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983839,
  					unicodeHex: "\\F031F",
  					cssClass: "ic_refineui_moon_32_regular"
  				},
  				filled: {
  					unicode: 983838,
  					unicodeHex: "\\F031E",
  					cssClass: "ic_refineui_moon_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983841,
  					unicodeHex: "\\F0321",
  					cssClass: "ic_refineui_moon_48_regular"
  				},
  				filled: {
  					unicode: 983841,
  					unicodeHex: "\\F0321",
  					cssClass: "ic_refineui_moon_48_filled"
  				}
  			}
  		}
  	},
  	Folder: {
  		name: "Folder",
  		slug: "folder",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in folder scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_folder_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Folder/svg/ic_refineui_folder_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_folder_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Folder/svg/ic_refineui_folder_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_folder_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Folder/svg/ic_refineui_folder_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_folder_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Folder/svg/ic_refineui_folder_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_folder_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Folder/svg/ic_refineui_folder_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_folder_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Folder/svg/ic_refineui_folder_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_folder_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Folder/svg/ic_refineui_folder_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_folder_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Folder/svg/ic_refineui_folder_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_folder_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Folder/svg/ic_refineui_folder_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_folder_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Folder/svg/ic_refineui_folder_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_folder_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Folder/svg/ic_refineui_folder_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_folder_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Folder/svg/ic_refineui_folder_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983850,
  					unicodeHex: "\\F032A",
  					cssClass: "ic_refineui_folder_16_regular"
  				},
  				filled: {
  					unicode: 983854,
  					unicodeHex: "\\F032E",
  					cssClass: "ic_refineui_folder_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983855,
  					unicodeHex: "\\F032F",
  					cssClass: "ic_refineui_folder_20_regular"
  				},
  				filled: {
  					unicode: 983852,
  					unicodeHex: "\\F032C",
  					cssClass: "ic_refineui_folder_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983852,
  					unicodeHex: "\\F032C",
  					cssClass: "ic_refineui_folder_24_regular"
  				},
  				filled: {
  					unicode: 983855,
  					unicodeHex: "\\F032F",
  					cssClass: "ic_refineui_folder_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983853,
  					unicodeHex: "\\F032D",
  					cssClass: "ic_refineui_folder_28_regular"
  				},
  				filled: {
  					unicode: 983851,
  					unicodeHex: "\\F032B",
  					cssClass: "ic_refineui_folder_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983854,
  					unicodeHex: "\\F032E",
  					cssClass: "ic_refineui_folder_32_regular"
  				},
  				filled: {
  					unicode: 983853,
  					unicodeHex: "\\F032D",
  					cssClass: "ic_refineui_folder_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983851,
  					unicodeHex: "\\F032B",
  					cssClass: "ic_refineui_folder_48_regular"
  				},
  				filled: {
  					unicode: 983850,
  					unicodeHex: "\\F032A",
  					cssClass: "ic_refineui_folder_48_filled"
  				}
  			}
  		}
  	},
  	Chart: {
  		name: "Chart",
  		slug: "chart",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in chart scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_chart_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Chart/svg/ic_refineui_chart_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chart_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Chart/svg/ic_refineui_chart_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chart_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Chart/svg/ic_refineui_chart_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chart_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Chart/svg/ic_refineui_chart_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chart_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Chart/svg/ic_refineui_chart_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chart_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Chart/svg/ic_refineui_chart_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chart_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Chart/svg/ic_refineui_chart_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chart_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Chart/svg/ic_refineui_chart_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chart_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Chart/svg/ic_refineui_chart_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chart_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Chart/svg/ic_refineui_chart_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chart_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Chart/svg/ic_refineui_chart_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chart_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Chart/svg/ic_refineui_chart_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983858,
  					unicodeHex: "\\F0332",
  					cssClass: "ic_refineui_chart_16_regular"
  				},
  				filled: {
  					unicode: 983857,
  					unicodeHex: "\\F0331",
  					cssClass: "ic_refineui_chart_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983856,
  					unicodeHex: "\\F0330",
  					cssClass: "ic_refineui_chart_20_regular"
  				},
  				filled: {
  					unicode: 983861,
  					unicodeHex: "\\F0335",
  					cssClass: "ic_refineui_chart_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983860,
  					unicodeHex: "\\F0334",
  					cssClass: "ic_refineui_chart_24_regular"
  				},
  				filled: {
  					unicode: 983858,
  					unicodeHex: "\\F0332",
  					cssClass: "ic_refineui_chart_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983861,
  					unicodeHex: "\\F0335",
  					cssClass: "ic_refineui_chart_28_regular"
  				},
  				filled: {
  					unicode: 983860,
  					unicodeHex: "\\F0334",
  					cssClass: "ic_refineui_chart_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983857,
  					unicodeHex: "\\F0331",
  					cssClass: "ic_refineui_chart_32_regular"
  				},
  				filled: {
  					unicode: 983856,
  					unicodeHex: "\\F0330",
  					cssClass: "ic_refineui_chart_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983859,
  					unicodeHex: "\\F0333",
  					cssClass: "ic_refineui_chart_48_regular"
  				},
  				filled: {
  					unicode: 983859,
  					unicodeHex: "\\F0333",
  					cssClass: "ic_refineui_chart_48_filled"
  				}
  			}
  		}
  	},
  	Doctor: {
  		name: "Doctor",
  		slug: "doctor",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in doctor scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_doctor_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Doctor/svg/ic_refineui_doctor_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_doctor_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Doctor/svg/ic_refineui_doctor_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_doctor_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Doctor/svg/ic_refineui_doctor_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_doctor_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Doctor/svg/ic_refineui_doctor_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_doctor_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Doctor/svg/ic_refineui_doctor_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_doctor_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Doctor/svg/ic_refineui_doctor_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_doctor_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Doctor/svg/ic_refineui_doctor_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_doctor_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Doctor/svg/ic_refineui_doctor_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_doctor_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Doctor/svg/ic_refineui_doctor_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_doctor_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Doctor/svg/ic_refineui_doctor_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_doctor_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Doctor/svg/ic_refineui_doctor_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_doctor_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Doctor/svg/ic_refineui_doctor_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983875,
  					unicodeHex: "\\F0343",
  					cssClass: "ic_refineui_doctor_16_regular"
  				},
  				filled: {
  					unicode: 983878,
  					unicodeHex: "\\F0346",
  					cssClass: "ic_refineui_doctor_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983879,
  					unicodeHex: "\\F0347",
  					cssClass: "ic_refineui_doctor_20_regular"
  				},
  				filled: {
  					unicode: 983874,
  					unicodeHex: "\\F0342",
  					cssClass: "ic_refineui_doctor_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983877,
  					unicodeHex: "\\F0345",
  					cssClass: "ic_refineui_doctor_24_regular"
  				},
  				filled: {
  					unicode: 983877,
  					unicodeHex: "\\F0345",
  					cssClass: "ic_refineui_doctor_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983878,
  					unicodeHex: "\\F0346",
  					cssClass: "ic_refineui_doctor_28_regular"
  				},
  				filled: {
  					unicode: 983875,
  					unicodeHex: "\\F0343",
  					cssClass: "ic_refineui_doctor_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983874,
  					unicodeHex: "\\F0342",
  					cssClass: "ic_refineui_doctor_32_regular"
  				},
  				filled: {
  					unicode: 983879,
  					unicodeHex: "\\F0347",
  					cssClass: "ic_refineui_doctor_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983876,
  					unicodeHex: "\\F0344",
  					cssClass: "ic_refineui_doctor_48_regular"
  				},
  				filled: {
  					unicode: 983876,
  					unicodeHex: "\\F0344",
  					cssClass: "ic_refineui_doctor_48_filled"
  				}
  			}
  		}
  	},
  	Timer: {
  		name: "Timer",
  		slug: "timer",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in timer scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_timer_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Timer/svg/ic_refineui_timer_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_timer_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Timer/svg/ic_refineui_timer_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_timer_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Timer/svg/ic_refineui_timer_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_timer_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Timer/svg/ic_refineui_timer_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_timer_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Timer/svg/ic_refineui_timer_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_timer_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Timer/svg/ic_refineui_timer_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_timer_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Timer/svg/ic_refineui_timer_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_timer_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Timer/svg/ic_refineui_timer_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_timer_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Timer/svg/ic_refineui_timer_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_timer_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Timer/svg/ic_refineui_timer_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_timer_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Timer/svg/ic_refineui_timer_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_timer_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Timer/svg/ic_refineui_timer_24_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983908,
  					unicodeHex: "\\F0364",
  					cssClass: "ic_refineui_timer_16_regular"
  				},
  				filled: {
  					unicode: 983905,
  					unicodeHex: "\\F0361",
  					cssClass: "ic_refineui_timer_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983904,
  					unicodeHex: "\\F0360",
  					cssClass: "ic_refineui_timer_20_regular"
  				},
  				filled: {
  					unicode: 983907,
  					unicodeHex: "\\F0363",
  					cssClass: "ic_refineui_timer_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983909,
  					unicodeHex: "\\F0365",
  					cssClass: "ic_refineui_timer_24_regular"
  				},
  				filled: {
  					unicode: 983904,
  					unicodeHex: "\\F0360",
  					cssClass: "ic_refineui_timer_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983906,
  					unicodeHex: "\\F0362",
  					cssClass: "ic_refineui_timer_28_regular"
  				},
  				filled: {
  					unicode: 983908,
  					unicodeHex: "\\F0364",
  					cssClass: "ic_refineui_timer_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983905,
  					unicodeHex: "\\F0361",
  					cssClass: "ic_refineui_timer_32_regular"
  				},
  				filled: {
  					unicode: 983906,
  					unicodeHex: "\\F0362",
  					cssClass: "ic_refineui_timer_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983907,
  					unicodeHex: "\\F0363",
  					cssClass: "ic_refineui_timer_48_regular"
  				},
  				filled: {
  					unicode: 983909,
  					unicodeHex: "\\F0365",
  					cssClass: "ic_refineui_timer_48_filled"
  				}
  			}
  		}
  	},
  	Rss: {
  		name: "Rss",
  		slug: "rss",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in rss scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_rss_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Rss/svg/ic_refineui_rss_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rss_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Rss/svg/ic_refineui_rss_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rss_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Rss/svg/ic_refineui_rss_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rss_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Rss/svg/ic_refineui_rss_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rss_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Rss/svg/ic_refineui_rss_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rss_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Rss/svg/ic_refineui_rss_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rss_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Rss/svg/ic_refineui_rss_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rss_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Rss/svg/ic_refineui_rss_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rss_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Rss/svg/ic_refineui_rss_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rss_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Rss/svg/ic_refineui_rss_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rss_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Rss/svg/ic_refineui_rss_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rss_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Rss/svg/ic_refineui_rss_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983916,
  					unicodeHex: "\\F036C",
  					cssClass: "ic_refineui_rss_16_regular"
  				},
  				filled: {
  					unicode: 983920,
  					unicodeHex: "\\F0370",
  					cssClass: "ic_refineui_rss_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983921,
  					unicodeHex: "\\F0371",
  					cssClass: "ic_refineui_rss_20_regular"
  				},
  				filled: {
  					unicode: 983916,
  					unicodeHex: "\\F036C",
  					cssClass: "ic_refineui_rss_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983918,
  					unicodeHex: "\\F036E",
  					cssClass: "ic_refineui_rss_24_regular"
  				},
  				filled: {
  					unicode: 983919,
  					unicodeHex: "\\F036F",
  					cssClass: "ic_refineui_rss_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983919,
  					unicodeHex: "\\F036F",
  					cssClass: "ic_refineui_rss_28_regular"
  				},
  				filled: {
  					unicode: 983917,
  					unicodeHex: "\\F036D",
  					cssClass: "ic_refineui_rss_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983920,
  					unicodeHex: "\\F0370",
  					cssClass: "ic_refineui_rss_32_regular"
  				},
  				filled: {
  					unicode: 983921,
  					unicodeHex: "\\F0371",
  					cssClass: "ic_refineui_rss_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983917,
  					unicodeHex: "\\F036D",
  					cssClass: "ic_refineui_rss_48_regular"
  				},
  				filled: {
  					unicode: 983918,
  					unicodeHex: "\\F036E",
  					cssClass: "ic_refineui_rss_48_filled"
  				}
  			}
  		}
  	},
  	Road: {
  		name: "Road",
  		slug: "road",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in road scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_road_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Road/svg/ic_refineui_road_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_road_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Road/svg/ic_refineui_road_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_road_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Road/svg/ic_refineui_road_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_road_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Road/svg/ic_refineui_road_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_road_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Road/svg/ic_refineui_road_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_road_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Road/svg/ic_refineui_road_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_road_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Road/svg/ic_refineui_road_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_road_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Road/svg/ic_refineui_road_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_road_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Road/svg/ic_refineui_road_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_road_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Road/svg/ic_refineui_road_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_road_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Road/svg/ic_refineui_road_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_road_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Road/svg/ic_refineui_road_48_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983950,
  					unicodeHex: "\\F038E",
  					cssClass: "ic_refineui_road_16_regular"
  				},
  				filled: {
  					unicode: 983947,
  					unicodeHex: "\\F038B",
  					cssClass: "ic_refineui_road_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983946,
  					unicodeHex: "\\F038A",
  					cssClass: "ic_refineui_road_20_regular"
  				},
  				filled: {
  					unicode: 983949,
  					unicodeHex: "\\F038D",
  					cssClass: "ic_refineui_road_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983949,
  					unicodeHex: "\\F038D",
  					cssClass: "ic_refineui_road_24_regular"
  				},
  				filled: {
  					unicode: 983946,
  					unicodeHex: "\\F038A",
  					cssClass: "ic_refineui_road_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983948,
  					unicodeHex: "\\F038C",
  					cssClass: "ic_refineui_road_28_regular"
  				},
  				filled: {
  					unicode: 983950,
  					unicodeHex: "\\F038E",
  					cssClass: "ic_refineui_road_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983947,
  					unicodeHex: "\\F038B",
  					cssClass: "ic_refineui_road_32_regular"
  				},
  				filled: {
  					unicode: 983948,
  					unicodeHex: "\\F038C",
  					cssClass: "ic_refineui_road_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983951,
  					unicodeHex: "\\F038F",
  					cssClass: "ic_refineui_road_48_regular"
  				},
  				filled: {
  					unicode: 983951,
  					unicodeHex: "\\F038F",
  					cssClass: "ic_refineui_road_48_filled"
  				}
  			}
  		}
  	},
  	Crop: {
  		name: "Crop",
  		slug: "crop",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in crop scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_crop_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Crop/svg/ic_refineui_crop_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_crop_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Crop/svg/ic_refineui_crop_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_crop_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Crop/svg/ic_refineui_crop_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_crop_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Crop/svg/ic_refineui_crop_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_crop_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Crop/svg/ic_refineui_crop_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_crop_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Crop/svg/ic_refineui_crop_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_crop_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Crop/svg/ic_refineui_crop_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_crop_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Crop/svg/ic_refineui_crop_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_crop_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Crop/svg/ic_refineui_crop_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_crop_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Crop/svg/ic_refineui_crop_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_crop_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Crop/svg/ic_refineui_crop_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_crop_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Crop/svg/ic_refineui_crop_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983960,
  					unicodeHex: "\\F0398",
  					cssClass: "ic_refineui_crop_16_regular"
  				},
  				filled: {
  					unicode: 983962,
  					unicodeHex: "\\F039A",
  					cssClass: "ic_refineui_crop_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983963,
  					unicodeHex: "\\F039B",
  					cssClass: "ic_refineui_crop_20_regular"
  				},
  				filled: {
  					unicode: 983958,
  					unicodeHex: "\\F0396",
  					cssClass: "ic_refineui_crop_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983962,
  					unicodeHex: "\\F039A",
  					cssClass: "ic_refineui_crop_24_regular"
  				},
  				filled: {
  					unicode: 983961,
  					unicodeHex: "\\F0399",
  					cssClass: "ic_refineui_crop_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983959,
  					unicodeHex: "\\F0397",
  					cssClass: "ic_refineui_crop_28_regular"
  				},
  				filled: {
  					unicode: 983959,
  					unicodeHex: "\\F0397",
  					cssClass: "ic_refineui_crop_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983958,
  					unicodeHex: "\\F0396",
  					cssClass: "ic_refineui_crop_32_regular"
  				},
  				filled: {
  					unicode: 983963,
  					unicodeHex: "\\F039B",
  					cssClass: "ic_refineui_crop_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983961,
  					unicodeHex: "\\F0399",
  					cssClass: "ic_refineui_crop_48_regular"
  				},
  				filled: {
  					unicode: 983960,
  					unicodeHex: "\\F0398",
  					cssClass: "ic_refineui_crop_48_filled"
  				}
  			}
  		}
  	},
  	Pulse: {
  		name: "Pulse",
  		slug: "pulse",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in pulse scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_pulse_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Pulse/svg/ic_refineui_pulse_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pulse_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Pulse/svg/ic_refineui_pulse_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pulse_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Pulse/svg/ic_refineui_pulse_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pulse_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Pulse/svg/ic_refineui_pulse_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pulse_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Pulse/svg/ic_refineui_pulse_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pulse_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Pulse/svg/ic_refineui_pulse_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pulse_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Pulse/svg/ic_refineui_pulse_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pulse_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Pulse/svg/ic_refineui_pulse_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pulse_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Pulse/svg/ic_refineui_pulse_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pulse_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Pulse/svg/ic_refineui_pulse_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pulse_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Pulse/svg/ic_refineui_pulse_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pulse_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Pulse/svg/ic_refineui_pulse_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 983991,
  					unicodeHex: "\\F03B7",
  					cssClass: "ic_refineui_pulse_16_regular"
  				},
  				filled: {
  					unicode: 983993,
  					unicodeHex: "\\F03B9",
  					cssClass: "ic_refineui_pulse_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 983993,
  					unicodeHex: "\\F03B9",
  					cssClass: "ic_refineui_pulse_20_regular"
  				},
  				filled: {
  					unicode: 983989,
  					unicodeHex: "\\F03B5",
  					cssClass: "ic_refineui_pulse_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 983989,
  					unicodeHex: "\\F03B5",
  					cssClass: "ic_refineui_pulse_24_regular"
  				},
  				filled: {
  					unicode: 983992,
  					unicodeHex: "\\F03B8",
  					cssClass: "ic_refineui_pulse_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 983992,
  					unicodeHex: "\\F03B8",
  					cssClass: "ic_refineui_pulse_28_regular"
  				},
  				filled: {
  					unicode: 983990,
  					unicodeHex: "\\F03B6",
  					cssClass: "ic_refineui_pulse_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 983988,
  					unicodeHex: "\\F03B4",
  					cssClass: "ic_refineui_pulse_32_regular"
  				},
  				filled: {
  					unicode: 983991,
  					unicodeHex: "\\F03B7",
  					cssClass: "ic_refineui_pulse_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 983990,
  					unicodeHex: "\\F03B6",
  					cssClass: "ic_refineui_pulse_48_regular"
  				},
  				filled: {
  					unicode: 983988,
  					unicodeHex: "\\F03B4",
  					cssClass: "ic_refineui_pulse_48_filled"
  				}
  			}
  		}
  	},
  	Oven: {
  		name: "Oven",
  		slug: "oven",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in oven scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_oven_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Oven/svg/ic_refineui_oven_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_oven_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Oven/svg/ic_refineui_oven_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_oven_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Oven/svg/ic_refineui_oven_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_oven_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Oven/svg/ic_refineui_oven_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_oven_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Oven/svg/ic_refineui_oven_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_oven_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Oven/svg/ic_refineui_oven_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_oven_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Oven/svg/ic_refineui_oven_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_oven_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Oven/svg/ic_refineui_oven_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_oven_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Oven/svg/ic_refineui_oven_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_oven_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Oven/svg/ic_refineui_oven_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_oven_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Oven/svg/ic_refineui_oven_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_oven_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Oven/svg/ic_refineui_oven_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984009,
  					unicodeHex: "\\F03C9",
  					cssClass: "ic_refineui_oven_16_regular"
  				},
  				filled: {
  					unicode: 984007,
  					unicodeHex: "\\F03C7",
  					cssClass: "ic_refineui_oven_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984006,
  					unicodeHex: "\\F03C6",
  					cssClass: "ic_refineui_oven_20_regular"
  				},
  				filled: {
  					unicode: 984009,
  					unicodeHex: "\\F03C9",
  					cssClass: "ic_refineui_oven_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984008,
  					unicodeHex: "\\F03C8",
  					cssClass: "ic_refineui_oven_24_regular"
  				},
  				filled: {
  					unicode: 984006,
  					unicodeHex: "\\F03C6",
  					cssClass: "ic_refineui_oven_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984011,
  					unicodeHex: "\\F03CB",
  					cssClass: "ic_refineui_oven_28_regular"
  				},
  				filled: {
  					unicode: 984010,
  					unicodeHex: "\\F03CA",
  					cssClass: "ic_refineui_oven_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984007,
  					unicodeHex: "\\F03C7",
  					cssClass: "ic_refineui_oven_32_regular"
  				},
  				filled: {
  					unicode: 984008,
  					unicodeHex: "\\F03C8",
  					cssClass: "ic_refineui_oven_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984010,
  					unicodeHex: "\\F03CA",
  					cssClass: "ic_refineui_oven_48_regular"
  				},
  				filled: {
  					unicode: 984011,
  					unicodeHex: "\\F03CB",
  					cssClass: "ic_refineui_oven_48_filled"
  				}
  			}
  		}
  	},
  	Code: {
  		name: "Code",
  		slug: "code",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in code scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_code_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Code/svg/ic_refineui_code_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_code_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Code/svg/ic_refineui_code_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_code_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Code/svg/ic_refineui_code_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_code_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Code/svg/ic_refineui_code_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_code_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Code/svg/ic_refineui_code_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_code_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Code/svg/ic_refineui_code_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_code_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Code/svg/ic_refineui_code_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_code_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Code/svg/ic_refineui_code_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_code_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Code/svg/ic_refineui_code_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_code_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Code/svg/ic_refineui_code_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_code_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Code/svg/ic_refineui_code_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_code_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Code/svg/ic_refineui_code_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984022,
  					unicodeHex: "\\F03D6",
  					cssClass: "ic_refineui_code_16_regular"
  				},
  				filled: {
  					unicode: 984022,
  					unicodeHex: "\\F03D6",
  					cssClass: "ic_refineui_code_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984018,
  					unicodeHex: "\\F03D2",
  					cssClass: "ic_refineui_code_20_regular"
  				},
  				filled: {
  					unicode: 984020,
  					unicodeHex: "\\F03D4",
  					cssClass: "ic_refineui_code_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984020,
  					unicodeHex: "\\F03D4",
  					cssClass: "ic_refineui_code_24_regular"
  				},
  				filled: {
  					unicode: 984023,
  					unicodeHex: "\\F03D7",
  					cssClass: "ic_refineui_code_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984019,
  					unicodeHex: "\\F03D3",
  					cssClass: "ic_refineui_code_28_regular"
  				},
  				filled: {
  					unicode: 984019,
  					unicodeHex: "\\F03D3",
  					cssClass: "ic_refineui_code_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984023,
  					unicodeHex: "\\F03D7",
  					cssClass: "ic_refineui_code_32_regular"
  				},
  				filled: {
  					unicode: 984021,
  					unicodeHex: "\\F03D5",
  					cssClass: "ic_refineui_code_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984021,
  					unicodeHex: "\\F03D5",
  					cssClass: "ic_refineui_code_48_regular"
  				},
  				filled: {
  					unicode: 984018,
  					unicodeHex: "\\F03D2",
  					cssClass: "ic_refineui_code_48_filled"
  				}
  			}
  		}
  	},
  	Emoji: {
  		name: "Emoji",
  		slug: "emoji",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in emoji scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_emoji_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Emoji/svg/ic_refineui_emoji_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_emoji_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Emoji/svg/ic_refineui_emoji_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_emoji_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Emoji/svg/ic_refineui_emoji_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_emoji_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Emoji/svg/ic_refineui_emoji_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_emoji_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Emoji/svg/ic_refineui_emoji_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_emoji_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Emoji/svg/ic_refineui_emoji_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_emoji_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Emoji/svg/ic_refineui_emoji_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_emoji_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Emoji/svg/ic_refineui_emoji_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_emoji_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Emoji/svg/ic_refineui_emoji_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_emoji_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Emoji/svg/ic_refineui_emoji_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_emoji_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Emoji/svg/ic_refineui_emoji_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_emoji_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Emoji/svg/ic_refineui_emoji_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984034,
  					unicodeHex: "\\F03E2",
  					cssClass: "ic_refineui_emoji_16_regular"
  				},
  				filled: {
  					unicode: 984031,
  					unicodeHex: "\\F03DF",
  					cssClass: "ic_refineui_emoji_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984030,
  					unicodeHex: "\\F03DE",
  					cssClass: "ic_refineui_emoji_20_regular"
  				},
  				filled: {
  					unicode: 984033,
  					unicodeHex: "\\F03E1",
  					cssClass: "ic_refineui_emoji_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984032,
  					unicodeHex: "\\F03E0",
  					cssClass: "ic_refineui_emoji_24_regular"
  				},
  				filled: {
  					unicode: 984030,
  					unicodeHex: "\\F03DE",
  					cssClass: "ic_refineui_emoji_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984035,
  					unicodeHex: "\\F03E3",
  					cssClass: "ic_refineui_emoji_28_regular"
  				},
  				filled: {
  					unicode: 984034,
  					unicodeHex: "\\F03E2",
  					cssClass: "ic_refineui_emoji_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984031,
  					unicodeHex: "\\F03DF",
  					cssClass: "ic_refineui_emoji_32_regular"
  				},
  				filled: {
  					unicode: 984032,
  					unicodeHex: "\\F03E0",
  					cssClass: "ic_refineui_emoji_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984033,
  					unicodeHex: "\\F03E1",
  					cssClass: "ic_refineui_emoji_48_regular"
  				},
  				filled: {
  					unicode: 984035,
  					unicodeHex: "\\F03E3",
  					cssClass: "ic_refineui_emoji_48_filled"
  				}
  			}
  		}
  	},
  	Guitar: {
  		name: "Guitar",
  		slug: "guitar",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in guitar scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_guitar_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Guitar/svg/ic_refineui_guitar_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_guitar_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Guitar/svg/ic_refineui_guitar_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_guitar_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Guitar/svg/ic_refineui_guitar_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_guitar_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Guitar/svg/ic_refineui_guitar_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_guitar_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Guitar/svg/ic_refineui_guitar_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_guitar_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Guitar/svg/ic_refineui_guitar_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_guitar_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Guitar/svg/ic_refineui_guitar_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_guitar_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Guitar/svg/ic_refineui_guitar_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_guitar_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Guitar/svg/ic_refineui_guitar_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_guitar_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Guitar/svg/ic_refineui_guitar_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_guitar_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Guitar/svg/ic_refineui_guitar_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_guitar_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Guitar/svg/ic_refineui_guitar_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984038,
  					unicodeHex: "\\F03E6",
  					cssClass: "ic_refineui_guitar_16_regular"
  				},
  				filled: {
  					unicode: 984040,
  					unicodeHex: "\\F03E8",
  					cssClass: "ic_refineui_guitar_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984036,
  					unicodeHex: "\\F03E4",
  					cssClass: "ic_refineui_guitar_20_regular"
  				},
  				filled: {
  					unicode: 984038,
  					unicodeHex: "\\F03E6",
  					cssClass: "ic_refineui_guitar_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984040,
  					unicodeHex: "\\F03E8",
  					cssClass: "ic_refineui_guitar_24_regular"
  				},
  				filled: {
  					unicode: 984041,
  					unicodeHex: "\\F03E9",
  					cssClass: "ic_refineui_guitar_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984037,
  					unicodeHex: "\\F03E5",
  					cssClass: "ic_refineui_guitar_28_regular"
  				},
  				filled: {
  					unicode: 984037,
  					unicodeHex: "\\F03E5",
  					cssClass: "ic_refineui_guitar_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984041,
  					unicodeHex: "\\F03E9",
  					cssClass: "ic_refineui_guitar_32_regular"
  				},
  				filled: {
  					unicode: 984039,
  					unicodeHex: "\\F03E7",
  					cssClass: "ic_refineui_guitar_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984039,
  					unicodeHex: "\\F03E7",
  					cssClass: "ic_refineui_guitar_48_regular"
  				},
  				filled: {
  					unicode: 984036,
  					unicodeHex: "\\F03E4",
  					cssClass: "ic_refineui_guitar_48_filled"
  				}
  			}
  		}
  	},
  	Pentagon: {
  		name: "Pentagon",
  		slug: "pentagon",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in pentagon scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_pentagon_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Pentagon/svg/ic_refineui_pentagon_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pentagon_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Pentagon/svg/ic_refineui_pentagon_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pentagon_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Pentagon/svg/ic_refineui_pentagon_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pentagon_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Pentagon/svg/ic_refineui_pentagon_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pentagon_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Pentagon/svg/ic_refineui_pentagon_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pentagon_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Pentagon/svg/ic_refineui_pentagon_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pentagon_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Pentagon/svg/ic_refineui_pentagon_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pentagon_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Pentagon/svg/ic_refineui_pentagon_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pentagon_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Pentagon/svg/ic_refineui_pentagon_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pentagon_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Pentagon/svg/ic_refineui_pentagon_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pentagon_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Pentagon/svg/ic_refineui_pentagon_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pentagon_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Pentagon/svg/ic_refineui_pentagon_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984045,
  					unicodeHex: "\\F03ED",
  					cssClass: "ic_refineui_pentagon_16_regular"
  				},
  				filled: {
  					unicode: 984047,
  					unicodeHex: "\\F03EF",
  					cssClass: "ic_refineui_pentagon_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984047,
  					unicodeHex: "\\F03EF",
  					cssClass: "ic_refineui_pentagon_20_regular"
  				},
  				filled: {
  					unicode: 984043,
  					unicodeHex: "\\F03EB",
  					cssClass: "ic_refineui_pentagon_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984043,
  					unicodeHex: "\\F03EB",
  					cssClass: "ic_refineui_pentagon_24_regular"
  				},
  				filled: {
  					unicode: 984046,
  					unicodeHex: "\\F03EE",
  					cssClass: "ic_refineui_pentagon_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984042,
  					unicodeHex: "\\F03EA",
  					cssClass: "ic_refineui_pentagon_28_regular"
  				},
  				filled: {
  					unicode: 984044,
  					unicodeHex: "\\F03EC",
  					cssClass: "ic_refineui_pentagon_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984046,
  					unicodeHex: "\\F03EE",
  					cssClass: "ic_refineui_pentagon_32_regular"
  				},
  				filled: {
  					unicode: 984045,
  					unicodeHex: "\\F03ED",
  					cssClass: "ic_refineui_pentagon_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984044,
  					unicodeHex: "\\F03EC",
  					cssClass: "ic_refineui_pentagon_48_regular"
  				},
  				filled: {
  					unicode: 984042,
  					unicodeHex: "\\F03EA",
  					cssClass: "ic_refineui_pentagon_48_filled"
  				}
  			}
  		}
  	},
  	Important: {
  		name: "Important",
  		slug: "important",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in important scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_important_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Important/svg/ic_refineui_important_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_important_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Important/svg/ic_refineui_important_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_important_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Important/svg/ic_refineui_important_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_important_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Important/svg/ic_refineui_important_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_important_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Important/svg/ic_refineui_important_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_important_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Important/svg/ic_refineui_important_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_important_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Important/svg/ic_refineui_important_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_important_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Important/svg/ic_refineui_important_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_important_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Important/svg/ic_refineui_important_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_important_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Important/svg/ic_refineui_important_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_important_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Important/svg/ic_refineui_important_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_important_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Important/svg/ic_refineui_important_48_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984058,
  					unicodeHex: "\\F03FA",
  					cssClass: "ic_refineui_important_16_regular"
  				},
  				filled: {
  					unicode: 984054,
  					unicodeHex: "\\F03F6",
  					cssClass: "ic_refineui_important_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984054,
  					unicodeHex: "\\F03F6",
  					cssClass: "ic_refineui_important_20_regular"
  				},
  				filled: {
  					unicode: 984058,
  					unicodeHex: "\\F03FA",
  					cssClass: "ic_refineui_important_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984057,
  					unicodeHex: "\\F03F9",
  					cssClass: "ic_refineui_important_24_regular"
  				},
  				filled: {
  					unicode: 984055,
  					unicodeHex: "\\F03F7",
  					cssClass: "ic_refineui_important_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984056,
  					unicodeHex: "\\F03F8",
  					cssClass: "ic_refineui_important_28_regular"
  				},
  				filled: {
  					unicode: 984057,
  					unicodeHex: "\\F03F9",
  					cssClass: "ic_refineui_important_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984055,
  					unicodeHex: "\\F03F7",
  					cssClass: "ic_refineui_important_32_regular"
  				},
  				filled: {
  					unicode: 984056,
  					unicodeHex: "\\F03F8",
  					cssClass: "ic_refineui_important_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984059,
  					unicodeHex: "\\F03FB",
  					cssClass: "ic_refineui_important_48_regular"
  				},
  				filled: {
  					unicode: 984059,
  					unicodeHex: "\\F03FB",
  					cssClass: "ic_refineui_important_48_filled"
  				}
  			}
  		}
  	},
  	Mic: {
  		name: "Mic",
  		slug: "mic",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in mic scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_mic_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Mic/svg/ic_refineui_mic_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mic_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Mic/svg/ic_refineui_mic_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mic_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Mic/svg/ic_refineui_mic_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mic_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Mic/svg/ic_refineui_mic_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mic_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Mic/svg/ic_refineui_mic_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mic_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Mic/svg/ic_refineui_mic_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mic_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Mic/svg/ic_refineui_mic_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mic_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Mic/svg/ic_refineui_mic_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mic_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Mic/svg/ic_refineui_mic_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mic_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Mic/svg/ic_refineui_mic_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mic_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Mic/svg/ic_refineui_mic_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mic_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Mic/svg/ic_refineui_mic_28_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984063,
  					unicodeHex: "\\F03FF",
  					cssClass: "ic_refineui_mic_16_regular"
  				},
  				filled: {
  					unicode: 984062,
  					unicodeHex: "\\F03FE",
  					cssClass: "ic_refineui_mic_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984060,
  					unicodeHex: "\\F03FC",
  					cssClass: "ic_refineui_mic_20_regular"
  				},
  				filled: {
  					unicode: 984064,
  					unicodeHex: "\\F0400",
  					cssClass: "ic_refineui_mic_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984062,
  					unicodeHex: "\\F03FE",
  					cssClass: "ic_refineui_mic_24_regular"
  				},
  				filled: {
  					unicode: 984061,
  					unicodeHex: "\\F03FD",
  					cssClass: "ic_refineui_mic_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984061,
  					unicodeHex: "\\F03FD",
  					cssClass: "ic_refineui_mic_28_regular"
  				},
  				filled: {
  					unicode: 984065,
  					unicodeHex: "\\F0401",
  					cssClass: "ic_refineui_mic_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984065,
  					unicodeHex: "\\F0401",
  					cssClass: "ic_refineui_mic_32_regular"
  				},
  				filled: {
  					unicode: 984060,
  					unicodeHex: "\\F03FC",
  					cssClass: "ic_refineui_mic_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984064,
  					unicodeHex: "\\F0400",
  					cssClass: "ic_refineui_mic_48_regular"
  				},
  				filled: {
  					unicode: 984063,
  					unicodeHex: "\\F03FF",
  					cssClass: "ic_refineui_mic_48_filled"
  				}
  			}
  		}
  	},
  	Headphones: {
  		name: "Headphones",
  		slug: "headphones",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in headphones scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_headphones_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Headphones/svg/ic_refineui_headphones_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_headphones_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Headphones/svg/ic_refineui_headphones_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_headphones_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Headphones/svg/ic_refineui_headphones_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_headphones_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Headphones/svg/ic_refineui_headphones_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_headphones_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Headphones/svg/ic_refineui_headphones_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_headphones_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Headphones/svg/ic_refineui_headphones_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_headphones_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Headphones/svg/ic_refineui_headphones_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_headphones_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Headphones/svg/ic_refineui_headphones_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_headphones_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Headphones/svg/ic_refineui_headphones_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_headphones_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Headphones/svg/ic_refineui_headphones_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_headphones_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Headphones/svg/ic_refineui_headphones_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_headphones_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Headphones/svg/ic_refineui_headphones_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984074,
  					unicodeHex: "\\F040A",
  					cssClass: "ic_refineui_headphones_16_regular"
  				},
  				filled: {
  					unicode: 984077,
  					unicodeHex: "\\F040D",
  					cssClass: "ic_refineui_headphones_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984077,
  					unicodeHex: "\\F040D",
  					cssClass: "ic_refineui_headphones_20_regular"
  				},
  				filled: {
  					unicode: 984073,
  					unicodeHex: "\\F0409",
  					cssClass: "ic_refineui_headphones_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984072,
  					unicodeHex: "\\F0408",
  					cssClass: "ic_refineui_headphones_24_regular"
  				},
  				filled: {
  					unicode: 984076,
  					unicodeHex: "\\F040C",
  					cssClass: "ic_refineui_headphones_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984075,
  					unicodeHex: "\\F040B",
  					cssClass: "ic_refineui_headphones_28_regular"
  				},
  				filled: {
  					unicode: 984074,
  					unicodeHex: "\\F040A",
  					cssClass: "ic_refineui_headphones_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984076,
  					unicodeHex: "\\F040C",
  					cssClass: "ic_refineui_headphones_32_regular"
  				},
  				filled: {
  					unicode: 984075,
  					unicodeHex: "\\F040B",
  					cssClass: "ic_refineui_headphones_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984073,
  					unicodeHex: "\\F0409",
  					cssClass: "ic_refineui_headphones_48_regular"
  				},
  				filled: {
  					unicode: 984072,
  					unicodeHex: "\\F0408",
  					cssClass: "ic_refineui_headphones_48_filled"
  				}
  			}
  		}
  	},
  	Stop: {
  		name: "Stop",
  		slug: "stop",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in stop scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_stop_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Stop/svg/ic_refineui_stop_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_stop_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Stop/svg/ic_refineui_stop_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_stop_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Stop/svg/ic_refineui_stop_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_stop_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Stop/svg/ic_refineui_stop_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_stop_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Stop/svg/ic_refineui_stop_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_stop_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Stop/svg/ic_refineui_stop_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_stop_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Stop/svg/ic_refineui_stop_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_stop_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Stop/svg/ic_refineui_stop_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_stop_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Stop/svg/ic_refineui_stop_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_stop_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Stop/svg/ic_refineui_stop_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_stop_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Stop/svg/ic_refineui_stop_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_stop_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Stop/svg/ic_refineui_stop_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984088,
  					unicodeHex: "\\F0418",
  					cssClass: "ic_refineui_stop_16_regular"
  				},
  				filled: {
  					unicode: 984088,
  					unicodeHex: "\\F0418",
  					cssClass: "ic_refineui_stop_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984089,
  					unicodeHex: "\\F0419",
  					cssClass: "ic_refineui_stop_20_regular"
  				},
  				filled: {
  					unicode: 984086,
  					unicodeHex: "\\F0416",
  					cssClass: "ic_refineui_stop_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984086,
  					unicodeHex: "\\F0416",
  					cssClass: "ic_refineui_stop_24_regular"
  				},
  				filled: {
  					unicode: 984089,
  					unicodeHex: "\\F0419",
  					cssClass: "ic_refineui_stop_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984085,
  					unicodeHex: "\\F0415",
  					cssClass: "ic_refineui_stop_28_regular"
  				},
  				filled: {
  					unicode: 984085,
  					unicodeHex: "\\F0415",
  					cssClass: "ic_refineui_stop_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984084,
  					unicodeHex: "\\F0414",
  					cssClass: "ic_refineui_stop_32_regular"
  				},
  				filled: {
  					unicode: 984087,
  					unicodeHex: "\\F0417",
  					cssClass: "ic_refineui_stop_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984087,
  					unicodeHex: "\\F0417",
  					cssClass: "ic_refineui_stop_48_regular"
  				},
  				filled: {
  					unicode: 984084,
  					unicodeHex: "\\F0414",
  					cssClass: "ic_refineui_stop_48_filled"
  				}
  			}
  		}
  	},
  	Cone: {
  		name: "Cone",
  		slug: "cone",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in cone scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_cone_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Cone/svg/ic_refineui_cone_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cone_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Cone/svg/ic_refineui_cone_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cone_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Cone/svg/ic_refineui_cone_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cone_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Cone/svg/ic_refineui_cone_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cone_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Cone/svg/ic_refineui_cone_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cone_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Cone/svg/ic_refineui_cone_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cone_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Cone/svg/ic_refineui_cone_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cone_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Cone/svg/ic_refineui_cone_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cone_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Cone/svg/ic_refineui_cone_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cone_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Cone/svg/ic_refineui_cone_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cone_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Cone/svg/ic_refineui_cone_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cone_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Cone/svg/ic_refineui_cone_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984097,
  					unicodeHex: "\\F0421",
  					cssClass: "ic_refineui_cone_16_regular"
  				},
  				filled: {
  					unicode: 984100,
  					unicodeHex: "\\F0424",
  					cssClass: "ic_refineui_cone_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984101,
  					unicodeHex: "\\F0425",
  					cssClass: "ic_refineui_cone_20_regular"
  				},
  				filled: {
  					unicode: 984096,
  					unicodeHex: "\\F0420",
  					cssClass: "ic_refineui_cone_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984099,
  					unicodeHex: "\\F0423",
  					cssClass: "ic_refineui_cone_24_regular"
  				},
  				filled: {
  					unicode: 984099,
  					unicodeHex: "\\F0423",
  					cssClass: "ic_refineui_cone_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984100,
  					unicodeHex: "\\F0424",
  					cssClass: "ic_refineui_cone_28_regular"
  				},
  				filled: {
  					unicode: 984097,
  					unicodeHex: "\\F0421",
  					cssClass: "ic_refineui_cone_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984096,
  					unicodeHex: "\\F0420",
  					cssClass: "ic_refineui_cone_32_regular"
  				},
  				filled: {
  					unicode: 984101,
  					unicodeHex: "\\F0425",
  					cssClass: "ic_refineui_cone_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984098,
  					unicodeHex: "\\F0422",
  					cssClass: "ic_refineui_cone_48_regular"
  				},
  				filled: {
  					unicode: 984098,
  					unicodeHex: "\\F0422",
  					cssClass: "ic_refineui_cone_48_filled"
  				}
  			}
  		}
  	},
  	Desktop: {
  		name: "Desktop",
  		slug: "desktop",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in desktop scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_desktop_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Desktop/svg/ic_refineui_desktop_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_desktop_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Desktop/svg/ic_refineui_desktop_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_desktop_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Desktop/svg/ic_refineui_desktop_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_desktop_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Desktop/svg/ic_refineui_desktop_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_desktop_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Desktop/svg/ic_refineui_desktop_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_desktop_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Desktop/svg/ic_refineui_desktop_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_desktop_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Desktop/svg/ic_refineui_desktop_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_desktop_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Desktop/svg/ic_refineui_desktop_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_desktop_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Desktop/svg/ic_refineui_desktop_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_desktop_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Desktop/svg/ic_refineui_desktop_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_desktop_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Desktop/svg/ic_refineui_desktop_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_desktop_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Desktop/svg/ic_refineui_desktop_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984104,
  					unicodeHex: "\\F0428",
  					cssClass: "ic_refineui_desktop_16_regular"
  				},
  				filled: {
  					unicode: 984105,
  					unicodeHex: "\\F0429",
  					cssClass: "ic_refineui_desktop_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984107,
  					unicodeHex: "\\F042B",
  					cssClass: "ic_refineui_desktop_20_regular"
  				},
  				filled: {
  					unicode: 984103,
  					unicodeHex: "\\F0427",
  					cssClass: "ic_refineui_desktop_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984106,
  					unicodeHex: "\\F042A",
  					cssClass: "ic_refineui_desktop_24_regular"
  				},
  				filled: {
  					unicode: 984106,
  					unicodeHex: "\\F042A",
  					cssClass: "ic_refineui_desktop_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984103,
  					unicodeHex: "\\F0427",
  					cssClass: "ic_refineui_desktop_28_regular"
  				},
  				filled: {
  					unicode: 984102,
  					unicodeHex: "\\F0426",
  					cssClass: "ic_refineui_desktop_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984102,
  					unicodeHex: "\\F0426",
  					cssClass: "ic_refineui_desktop_32_regular"
  				},
  				filled: {
  					unicode: 984107,
  					unicodeHex: "\\F042B",
  					cssClass: "ic_refineui_desktop_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984105,
  					unicodeHex: "\\F0429",
  					cssClass: "ic_refineui_desktop_48_regular"
  				},
  				filled: {
  					unicode: 984104,
  					unicodeHex: "\\F0428",
  					cssClass: "ic_refineui_desktop_48_filled"
  				}
  			}
  		}
  	},
  	Server: {
  		name: "Server",
  		slug: "server",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in server scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_server_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Server/svg/ic_refineui_server_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_server_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Server/svg/ic_refineui_server_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_server_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Server/svg/ic_refineui_server_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_server_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Server/svg/ic_refineui_server_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_server_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Server/svg/ic_refineui_server_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_server_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Server/svg/ic_refineui_server_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_server_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Server/svg/ic_refineui_server_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_server_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Server/svg/ic_refineui_server_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_server_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Server/svg/ic_refineui_server_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_server_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Server/svg/ic_refineui_server_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_server_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Server/svg/ic_refineui_server_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_server_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Server/svg/ic_refineui_server_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984108,
  					unicodeHex: "\\F042C",
  					cssClass: "ic_refineui_server_16_regular"
  				},
  				filled: {
  					unicode: 984113,
  					unicodeHex: "\\F0431",
  					cssClass: "ic_refineui_server_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984113,
  					unicodeHex: "\\F0431",
  					cssClass: "ic_refineui_server_20_regular"
  				},
  				filled: {
  					unicode: 984109,
  					unicodeHex: "\\F042D",
  					cssClass: "ic_refineui_server_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984110,
  					unicodeHex: "\\F042E",
  					cssClass: "ic_refineui_server_24_regular"
  				},
  				filled: {
  					unicode: 984112,
  					unicodeHex: "\\F0430",
  					cssClass: "ic_refineui_server_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984111,
  					unicodeHex: "\\F042F",
  					cssClass: "ic_refineui_server_28_regular"
  				},
  				filled: {
  					unicode: 984110,
  					unicodeHex: "\\F042E",
  					cssClass: "ic_refineui_server_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984112,
  					unicodeHex: "\\F0430",
  					cssClass: "ic_refineui_server_32_regular"
  				},
  				filled: {
  					unicode: 984111,
  					unicodeHex: "\\F042F",
  					cssClass: "ic_refineui_server_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984109,
  					unicodeHex: "\\F042D",
  					cssClass: "ic_refineui_server_48_regular"
  				},
  				filled: {
  					unicode: 984108,
  					unicodeHex: "\\F042C",
  					cssClass: "ic_refineui_server_48_filled"
  				}
  			}
  		}
  	},
  	Shapes: {
  		name: "Shapes",
  		slug: "shapes",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in shapes scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_shapes_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Shapes/svg/ic_refineui_shapes_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_shapes_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Shapes/svg/ic_refineui_shapes_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_shapes_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Shapes/svg/ic_refineui_shapes_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_shapes_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Shapes/svg/ic_refineui_shapes_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_shapes_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Shapes/svg/ic_refineui_shapes_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_shapes_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Shapes/svg/ic_refineui_shapes_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_shapes_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Shapes/svg/ic_refineui_shapes_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_shapes_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Shapes/svg/ic_refineui_shapes_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_shapes_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Shapes/svg/ic_refineui_shapes_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_shapes_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Shapes/svg/ic_refineui_shapes_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_shapes_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Shapes/svg/ic_refineui_shapes_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_shapes_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Shapes/svg/ic_refineui_shapes_28_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984116,
  					unicodeHex: "\\F0434",
  					cssClass: "ic_refineui_shapes_16_regular"
  				},
  				filled: {
  					unicode: 984116,
  					unicodeHex: "\\F0434",
  					cssClass: "ic_refineui_shapes_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984119,
  					unicodeHex: "\\F0437",
  					cssClass: "ic_refineui_shapes_20_regular"
  				},
  				filled: {
  					unicode: 984118,
  					unicodeHex: "\\F0436",
  					cssClass: "ic_refineui_shapes_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984117,
  					unicodeHex: "\\F0435",
  					cssClass: "ic_refineui_shapes_24_regular"
  				},
  				filled: {
  					unicode: 984115,
  					unicodeHex: "\\F0433",
  					cssClass: "ic_refineui_shapes_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984118,
  					unicodeHex: "\\F0436",
  					cssClass: "ic_refineui_shapes_28_regular"
  				},
  				filled: {
  					unicode: 984119,
  					unicodeHex: "\\F0437",
  					cssClass: "ic_refineui_shapes_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984114,
  					unicodeHex: "\\F0432",
  					cssClass: "ic_refineui_shapes_32_regular"
  				},
  				filled: {
  					unicode: 984114,
  					unicodeHex: "\\F0432",
  					cssClass: "ic_refineui_shapes_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984115,
  					unicodeHex: "\\F0433",
  					cssClass: "ic_refineui_shapes_48_regular"
  				},
  				filled: {
  					unicode: 984117,
  					unicodeHex: "\\F0435",
  					cssClass: "ic_refineui_shapes_48_filled"
  				}
  			}
  		}
  	},
  	Frame: {
  		name: "Frame",
  		slug: "frame",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in frame scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_frame_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Frame/svg/ic_refineui_frame_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_frame_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Frame/svg/ic_refineui_frame_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_frame_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Frame/svg/ic_refineui_frame_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_frame_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Frame/svg/ic_refineui_frame_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_frame_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Frame/svg/ic_refineui_frame_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_frame_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Frame/svg/ic_refineui_frame_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_frame_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Frame/svg/ic_refineui_frame_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_frame_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Frame/svg/ic_refineui_frame_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_frame_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Frame/svg/ic_refineui_frame_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_frame_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Frame/svg/ic_refineui_frame_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_frame_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Frame/svg/ic_refineui_frame_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_frame_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Frame/svg/ic_refineui_frame_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984129,
  					unicodeHex: "\\F0441",
  					cssClass: "ic_refineui_frame_16_regular"
  				},
  				filled: {
  					unicode: 984129,
  					unicodeHex: "\\F0441",
  					cssClass: "ic_refineui_frame_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984126,
  					unicodeHex: "\\F043E",
  					cssClass: "ic_refineui_frame_20_regular"
  				},
  				filled: {
  					unicode: 984127,
  					unicodeHex: "\\F043F",
  					cssClass: "ic_refineui_frame_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984130,
  					unicodeHex: "\\F0442",
  					cssClass: "ic_refineui_frame_24_regular"
  				},
  				filled: {
  					unicode: 984130,
  					unicodeHex: "\\F0442",
  					cssClass: "ic_refineui_frame_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984131,
  					unicodeHex: "\\F0443",
  					cssClass: "ic_refineui_frame_28_regular"
  				},
  				filled: {
  					unicode: 984126,
  					unicodeHex: "\\F043E",
  					cssClass: "ic_refineui_frame_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984127,
  					unicodeHex: "\\F043F",
  					cssClass: "ic_refineui_frame_32_regular"
  				},
  				filled: {
  					unicode: 984131,
  					unicodeHex: "\\F0443",
  					cssClass: "ic_refineui_frame_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984128,
  					unicodeHex: "\\F0440",
  					cssClass: "ic_refineui_frame_48_regular"
  				},
  				filled: {
  					unicode: 984128,
  					unicodeHex: "\\F0440",
  					cssClass: "ic_refineui_frame_48_filled"
  				}
  			}
  		}
  	},
  	Comma: {
  		name: "Comma",
  		slug: "comma",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in comma scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_comma_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Comma/svg/ic_refineui_comma_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_comma_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Comma/svg/ic_refineui_comma_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_comma_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Comma/svg/ic_refineui_comma_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_comma_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Comma/svg/ic_refineui_comma_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_comma_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Comma/svg/ic_refineui_comma_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_comma_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Comma/svg/ic_refineui_comma_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_comma_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Comma/svg/ic_refineui_comma_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_comma_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Comma/svg/ic_refineui_comma_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_comma_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Comma/svg/ic_refineui_comma_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_comma_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Comma/svg/ic_refineui_comma_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_comma_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Comma/svg/ic_refineui_comma_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_comma_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Comma/svg/ic_refineui_comma_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984134,
  					unicodeHex: "\\F0446",
  					cssClass: "ic_refineui_comma_16_regular"
  				},
  				filled: {
  					unicode: 984136,
  					unicodeHex: "\\F0448",
  					cssClass: "ic_refineui_comma_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984137,
  					unicodeHex: "\\F0449",
  					cssClass: "ic_refineui_comma_20_regular"
  				},
  				filled: {
  					unicode: 984132,
  					unicodeHex: "\\F0444",
  					cssClass: "ic_refineui_comma_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984135,
  					unicodeHex: "\\F0447",
  					cssClass: "ic_refineui_comma_24_regular"
  				},
  				filled: {
  					unicode: 984135,
  					unicodeHex: "\\F0447",
  					cssClass: "ic_refineui_comma_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984136,
  					unicodeHex: "\\F0448",
  					cssClass: "ic_refineui_comma_28_regular"
  				},
  				filled: {
  					unicode: 984133,
  					unicodeHex: "\\F0445",
  					cssClass: "ic_refineui_comma_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984132,
  					unicodeHex: "\\F0444",
  					cssClass: "ic_refineui_comma_32_regular"
  				},
  				filled: {
  					unicode: 984137,
  					unicodeHex: "\\F0449",
  					cssClass: "ic_refineui_comma_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984133,
  					unicodeHex: "\\F0445",
  					cssClass: "ic_refineui_comma_48_regular"
  				},
  				filled: {
  					unicode: 984134,
  					unicodeHex: "\\F0446",
  					cssClass: "ic_refineui_comma_48_filled"
  				}
  			}
  		}
  	},
  	Html: {
  		name: "Html",
  		slug: "html",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in html scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_html_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Html/svg/ic_refineui_html_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_html_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Html/svg/ic_refineui_html_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_html_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Html/svg/ic_refineui_html_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_html_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Html/svg/ic_refineui_html_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_html_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Html/svg/ic_refineui_html_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_html_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Html/svg/ic_refineui_html_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_html_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Html/svg/ic_refineui_html_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_html_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Html/svg/ic_refineui_html_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_html_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Html/svg/ic_refineui_html_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_html_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Html/svg/ic_refineui_html_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_html_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Html/svg/ic_refineui_html_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_html_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Html/svg/ic_refineui_html_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984140,
  					unicodeHex: "\\F044C",
  					cssClass: "ic_refineui_html_16_regular"
  				},
  				filled: {
  					unicode: 984142,
  					unicodeHex: "\\F044E",
  					cssClass: "ic_refineui_html_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984143,
  					unicodeHex: "\\F044F",
  					cssClass: "ic_refineui_html_20_regular"
  				},
  				filled: {
  					unicode: 984140,
  					unicodeHex: "\\F044C",
  					cssClass: "ic_refineui_html_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984141,
  					unicodeHex: "\\F044D",
  					cssClass: "ic_refineui_html_24_regular"
  				},
  				filled: {
  					unicode: 984143,
  					unicodeHex: "\\F044F",
  					cssClass: "ic_refineui_html_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984142,
  					unicodeHex: "\\F044E",
  					cssClass: "ic_refineui_html_28_regular"
  				},
  				filled: {
  					unicode: 984139,
  					unicodeHex: "\\F044B",
  					cssClass: "ic_refineui_html_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984138,
  					unicodeHex: "\\F044A",
  					cssClass: "ic_refineui_html_32_regular"
  				},
  				filled: {
  					unicode: 984141,
  					unicodeHex: "\\F044D",
  					cssClass: "ic_refineui_html_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984139,
  					unicodeHex: "\\F044B",
  					cssClass: "ic_refineui_html_48_regular"
  				},
  				filled: {
  					unicode: 984138,
  					unicodeHex: "\\F044A",
  					cssClass: "ic_refineui_html_48_filled"
  				}
  			}
  		}
  	},
  	Kotlin: {
  		name: "Kotlin",
  		slug: "kotlin",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in kotlin scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_kotlin_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Kotlin/svg/ic_refineui_kotlin_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_kotlin_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Kotlin/svg/ic_refineui_kotlin_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_kotlin_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Kotlin/svg/ic_refineui_kotlin_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_kotlin_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Kotlin/svg/ic_refineui_kotlin_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_kotlin_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Kotlin/svg/ic_refineui_kotlin_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_kotlin_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Kotlin/svg/ic_refineui_kotlin_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_kotlin_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Kotlin/svg/ic_refineui_kotlin_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_kotlin_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Kotlin/svg/ic_refineui_kotlin_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_kotlin_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Kotlin/svg/ic_refineui_kotlin_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_kotlin_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Kotlin/svg/ic_refineui_kotlin_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_kotlin_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Kotlin/svg/ic_refineui_kotlin_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_kotlin_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Kotlin/svg/ic_refineui_kotlin_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984147,
  					unicodeHex: "\\F0453",
  					cssClass: "ic_refineui_kotlin_16_regular"
  				},
  				filled: {
  					unicode: 984144,
  					unicodeHex: "\\F0450",
  					cssClass: "ic_refineui_kotlin_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984144,
  					unicodeHex: "\\F0450",
  					cssClass: "ic_refineui_kotlin_20_regular"
  				},
  				filled: {
  					unicode: 984148,
  					unicodeHex: "\\F0454",
  					cssClass: "ic_refineui_kotlin_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984145,
  					unicodeHex: "\\F0451",
  					cssClass: "ic_refineui_kotlin_24_regular"
  				},
  				filled: {
  					unicode: 984145,
  					unicodeHex: "\\F0451",
  					cssClass: "ic_refineui_kotlin_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984148,
  					unicodeHex: "\\F0454",
  					cssClass: "ic_refineui_kotlin_28_regular"
  				},
  				filled: {
  					unicode: 984147,
  					unicodeHex: "\\F0453",
  					cssClass: "ic_refineui_kotlin_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984149,
  					unicodeHex: "\\F0455",
  					cssClass: "ic_refineui_kotlin_32_regular"
  				},
  				filled: {
  					unicode: 984146,
  					unicodeHex: "\\F0452",
  					cssClass: "ic_refineui_kotlin_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984146,
  					unicodeHex: "\\F0452",
  					cssClass: "ic_refineui_kotlin_48_regular"
  				},
  				filled: {
  					unicode: 984149,
  					unicodeHex: "\\F0455",
  					cssClass: "ic_refineui_kotlin_48_filled"
  				}
  			}
  		}
  	},
  	Rewind: {
  		name: "Rewind",
  		slug: "rewind",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in rewind scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_rewind_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Rewind/svg/ic_refineui_rewind_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rewind_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Rewind/svg/ic_refineui_rewind_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rewind_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Rewind/svg/ic_refineui_rewind_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rewind_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Rewind/svg/ic_refineui_rewind_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rewind_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Rewind/svg/ic_refineui_rewind_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rewind_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Rewind/svg/ic_refineui_rewind_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rewind_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Rewind/svg/ic_refineui_rewind_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rewind_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Rewind/svg/ic_refineui_rewind_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rewind_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Rewind/svg/ic_refineui_rewind_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rewind_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Rewind/svg/ic_refineui_rewind_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rewind_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Rewind/svg/ic_refineui_rewind_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rewind_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Rewind/svg/ic_refineui_rewind_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984163,
  					unicodeHex: "\\F0463",
  					cssClass: "ic_refineui_rewind_16_regular"
  				},
  				filled: {
  					unicode: 984167,
  					unicodeHex: "\\F0467",
  					cssClass: "ic_refineui_rewind_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984167,
  					unicodeHex: "\\F0467",
  					cssClass: "ic_refineui_rewind_20_regular"
  				},
  				filled: {
  					unicode: 984163,
  					unicodeHex: "\\F0463",
  					cssClass: "ic_refineui_rewind_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984164,
  					unicodeHex: "\\F0464",
  					cssClass: "ic_refineui_rewind_24_regular"
  				},
  				filled: {
  					unicode: 984166,
  					unicodeHex: "\\F0466",
  					cssClass: "ic_refineui_rewind_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984165,
  					unicodeHex: "\\F0465",
  					cssClass: "ic_refineui_rewind_28_regular"
  				},
  				filled: {
  					unicode: 984164,
  					unicodeHex: "\\F0464",
  					cssClass: "ic_refineui_rewind_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984166,
  					unicodeHex: "\\F0466",
  					cssClass: "ic_refineui_rewind_32_regular"
  				},
  				filled: {
  					unicode: 984165,
  					unicodeHex: "\\F0465",
  					cssClass: "ic_refineui_rewind_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984162,
  					unicodeHex: "\\F0462",
  					cssClass: "ic_refineui_rewind_48_regular"
  				},
  				filled: {
  					unicode: 984162,
  					unicodeHex: "\\F0462",
  					cssClass: "ic_refineui_rewind_48_filled"
  				}
  			}
  		}
  	},
  	Key: {
  		name: "Key",
  		slug: "key",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in key scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_key_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Key/svg/ic_refineui_key_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_key_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Key/svg/ic_refineui_key_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_key_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Key/svg/ic_refineui_key_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_key_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Key/svg/ic_refineui_key_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_key_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Key/svg/ic_refineui_key_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_key_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Key/svg/ic_refineui_key_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_key_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Key/svg/ic_refineui_key_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_key_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Key/svg/ic_refineui_key_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_key_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Key/svg/ic_refineui_key_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_key_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Key/svg/ic_refineui_key_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_key_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Key/svg/ic_refineui_key_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_key_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Key/svg/ic_refineui_key_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984178,
  					unicodeHex: "\\F0472",
  					cssClass: "ic_refineui_key_16_regular"
  				},
  				filled: {
  					unicode: 984179,
  					unicodeHex: "\\F0473",
  					cssClass: "ic_refineui_key_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984179,
  					unicodeHex: "\\F0473",
  					cssClass: "ic_refineui_key_20_regular"
  				},
  				filled: {
  					unicode: 984175,
  					unicodeHex: "\\F046F",
  					cssClass: "ic_refineui_key_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984176,
  					unicodeHex: "\\F0470",
  					cssClass: "ic_refineui_key_24_regular"
  				},
  				filled: {
  					unicode: 984178,
  					unicodeHex: "\\F0472",
  					cssClass: "ic_refineui_key_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984175,
  					unicodeHex: "\\F046F",
  					cssClass: "ic_refineui_key_28_regular"
  				},
  				filled: {
  					unicode: 984176,
  					unicodeHex: "\\F0470",
  					cssClass: "ic_refineui_key_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984174,
  					unicodeHex: "\\F046E",
  					cssClass: "ic_refineui_key_32_regular"
  				},
  				filled: {
  					unicode: 984177,
  					unicodeHex: "\\F0471",
  					cssClass: "ic_refineui_key_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984177,
  					unicodeHex: "\\F0471",
  					cssClass: "ic_refineui_key_48_regular"
  				},
  				filled: {
  					unicode: 984174,
  					unicodeHex: "\\F046E",
  					cssClass: "ic_refineui_key_48_filled"
  				}
  			}
  		}
  	},
  	Spacebar: {
  		name: "Spacebar",
  		slug: "spacebar",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in spacebar scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_spacebar_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Spacebar/svg/ic_refineui_spacebar_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_spacebar_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Spacebar/svg/ic_refineui_spacebar_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_spacebar_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Spacebar/svg/ic_refineui_spacebar_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_spacebar_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Spacebar/svg/ic_refineui_spacebar_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_spacebar_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Spacebar/svg/ic_refineui_spacebar_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_spacebar_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Spacebar/svg/ic_refineui_spacebar_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_spacebar_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Spacebar/svg/ic_refineui_spacebar_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_spacebar_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Spacebar/svg/ic_refineui_spacebar_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_spacebar_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Spacebar/svg/ic_refineui_spacebar_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_spacebar_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Spacebar/svg/ic_refineui_spacebar_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_spacebar_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Spacebar/svg/ic_refineui_spacebar_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_spacebar_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Spacebar/svg/ic_refineui_spacebar_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984181,
  					unicodeHex: "\\F0475",
  					cssClass: "ic_refineui_spacebar_16_regular"
  				},
  				filled: {
  					unicode: 984184,
  					unicodeHex: "\\F0478",
  					cssClass: "ic_refineui_spacebar_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984185,
  					unicodeHex: "\\F0479",
  					cssClass: "ic_refineui_spacebar_20_regular"
  				},
  				filled: {
  					unicode: 984180,
  					unicodeHex: "\\F0474",
  					cssClass: "ic_refineui_spacebar_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984183,
  					unicodeHex: "\\F0477",
  					cssClass: "ic_refineui_spacebar_24_regular"
  				},
  				filled: {
  					unicode: 984183,
  					unicodeHex: "\\F0477",
  					cssClass: "ic_refineui_spacebar_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984184,
  					unicodeHex: "\\F0478",
  					cssClass: "ic_refineui_spacebar_28_regular"
  				},
  				filled: {
  					unicode: 984181,
  					unicodeHex: "\\F0475",
  					cssClass: "ic_refineui_spacebar_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984180,
  					unicodeHex: "\\F0474",
  					cssClass: "ic_refineui_spacebar_32_regular"
  				},
  				filled: {
  					unicode: 984185,
  					unicodeHex: "\\F0479",
  					cssClass: "ic_refineui_spacebar_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984182,
  					unicodeHex: "\\F0476",
  					cssClass: "ic_refineui_spacebar_48_regular"
  				},
  				filled: {
  					unicode: 984182,
  					unicodeHex: "\\F0476",
  					cssClass: "ic_refineui_spacebar_48_filled"
  				}
  			}
  		}
  	},
  	Hexagon: {
  		name: "Hexagon",
  		slug: "hexagon",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in hexagon scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_hexagon_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Hexagon/svg/ic_refineui_hexagon_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hexagon_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Hexagon/svg/ic_refineui_hexagon_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hexagon_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Hexagon/svg/ic_refineui_hexagon_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hexagon_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Hexagon/svg/ic_refineui_hexagon_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hexagon_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Hexagon/svg/ic_refineui_hexagon_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hexagon_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Hexagon/svg/ic_refineui_hexagon_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hexagon_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Hexagon/svg/ic_refineui_hexagon_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hexagon_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Hexagon/svg/ic_refineui_hexagon_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hexagon_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Hexagon/svg/ic_refineui_hexagon_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hexagon_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Hexagon/svg/ic_refineui_hexagon_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_hexagon_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Hexagon/svg/ic_refineui_hexagon_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_hexagon_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Hexagon/svg/ic_refineui_hexagon_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984186,
  					unicodeHex: "\\F047A",
  					cssClass: "ic_refineui_hexagon_16_regular"
  				},
  				filled: {
  					unicode: 984190,
  					unicodeHex: "\\F047E",
  					cssClass: "ic_refineui_hexagon_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984191,
  					unicodeHex: "\\F047F",
  					cssClass: "ic_refineui_hexagon_20_regular"
  				},
  				filled: {
  					unicode: 984188,
  					unicodeHex: "\\F047C",
  					cssClass: "ic_refineui_hexagon_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984188,
  					unicodeHex: "\\F047C",
  					cssClass: "ic_refineui_hexagon_24_regular"
  				},
  				filled: {
  					unicode: 984191,
  					unicodeHex: "\\F047F",
  					cssClass: "ic_refineui_hexagon_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984189,
  					unicodeHex: "\\F047D",
  					cssClass: "ic_refineui_hexagon_28_regular"
  				},
  				filled: {
  					unicode: 984187,
  					unicodeHex: "\\F047B",
  					cssClass: "ic_refineui_hexagon_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984190,
  					unicodeHex: "\\F047E",
  					cssClass: "ic_refineui_hexagon_32_regular"
  				},
  				filled: {
  					unicode: 984189,
  					unicodeHex: "\\F047D",
  					cssClass: "ic_refineui_hexagon_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984187,
  					unicodeHex: "\\F047B",
  					cssClass: "ic_refineui_hexagon_48_regular"
  				},
  				filled: {
  					unicode: 984186,
  					unicodeHex: "\\F047A",
  					cssClass: "ic_refineui_hexagon_48_filled"
  				}
  			}
  		}
  	},
  	Bug: {
  		name: "Bug",
  		slug: "bug",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in bug scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_bug_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Bug/svg/ic_refineui_bug_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bug_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Bug/svg/ic_refineui_bug_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bug_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Bug/svg/ic_refineui_bug_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bug_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Bug/svg/ic_refineui_bug_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bug_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Bug/svg/ic_refineui_bug_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bug_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Bug/svg/ic_refineui_bug_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bug_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Bug/svg/ic_refineui_bug_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bug_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Bug/svg/ic_refineui_bug_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bug_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Bug/svg/ic_refineui_bug_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bug_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Bug/svg/ic_refineui_bug_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bug_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Bug/svg/ic_refineui_bug_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bug_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Bug/svg/ic_refineui_bug_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984194,
  					unicodeHex: "\\F0482",
  					cssClass: "ic_refineui_bug_16_regular"
  				},
  				filled: {
  					unicode: 984195,
  					unicodeHex: "\\F0483",
  					cssClass: "ic_refineui_bug_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984192,
  					unicodeHex: "\\F0480",
  					cssClass: "ic_refineui_bug_20_regular"
  				},
  				filled: {
  					unicode: 984193,
  					unicodeHex: "\\F0481",
  					cssClass: "ic_refineui_bug_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984195,
  					unicodeHex: "\\F0483",
  					cssClass: "ic_refineui_bug_24_regular"
  				},
  				filled: {
  					unicode: 984196,
  					unicodeHex: "\\F0484",
  					cssClass: "ic_refineui_bug_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984196,
  					unicodeHex: "\\F0484",
  					cssClass: "ic_refineui_bug_28_regular"
  				},
  				filled: {
  					unicode: 984192,
  					unicodeHex: "\\F0480",
  					cssClass: "ic_refineui_bug_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984197,
  					unicodeHex: "\\F0485",
  					cssClass: "ic_refineui_bug_32_regular"
  				},
  				filled: {
  					unicode: 984197,
  					unicodeHex: "\\F0485",
  					cssClass: "ic_refineui_bug_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984193,
  					unicodeHex: "\\F0481",
  					cssClass: "ic_refineui_bug_48_regular"
  				},
  				filled: {
  					unicode: 984194,
  					unicodeHex: "\\F0482",
  					cssClass: "ic_refineui_bug_48_filled"
  				}
  			}
  		}
  	},
  	Document: {
  		name: "Document",
  		slug: "document",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in document scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_document_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Document/svg/ic_refineui_document_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_document_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Document/svg/ic_refineui_document_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_document_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Document/svg/ic_refineui_document_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_document_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Document/svg/ic_refineui_document_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_document_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Document/svg/ic_refineui_document_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_document_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Document/svg/ic_refineui_document_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_document_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Document/svg/ic_refineui_document_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_document_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Document/svg/ic_refineui_document_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_document_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Document/svg/ic_refineui_document_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_document_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Document/svg/ic_refineui_document_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_document_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Document/svg/ic_refineui_document_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_document_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Document/svg/ic_refineui_document_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984207,
  					unicodeHex: "\\F048F",
  					cssClass: "ic_refineui_document_16_regular"
  				},
  				filled: {
  					unicode: 984205,
  					unicodeHex: "\\F048D",
  					cssClass: "ic_refineui_document_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984204,
  					unicodeHex: "\\F048C",
  					cssClass: "ic_refineui_document_20_regular"
  				},
  				filled: {
  					unicode: 984207,
  					unicodeHex: "\\F048F",
  					cssClass: "ic_refineui_document_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984206,
  					unicodeHex: "\\F048E",
  					cssClass: "ic_refineui_document_24_regular"
  				},
  				filled: {
  					unicode: 984204,
  					unicodeHex: "\\F048C",
  					cssClass: "ic_refineui_document_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984205,
  					unicodeHex: "\\F048D",
  					cssClass: "ic_refineui_document_28_regular"
  				},
  				filled: {
  					unicode: 984208,
  					unicodeHex: "\\F0490",
  					cssClass: "ic_refineui_document_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984209,
  					unicodeHex: "\\F0491",
  					cssClass: "ic_refineui_document_32_regular"
  				},
  				filled: {
  					unicode: 984206,
  					unicodeHex: "\\F048E",
  					cssClass: "ic_refineui_document_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984208,
  					unicodeHex: "\\F0490",
  					cssClass: "ic_refineui_document_48_regular"
  				},
  				filled: {
  					unicode: 984209,
  					unicodeHex: "\\F0491",
  					cssClass: "ic_refineui_document_48_filled"
  				}
  			}
  		}
  	},
  	Tab: {
  		name: "Tab",
  		slug: "tab",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in tab scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_tab_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Tab/svg/ic_refineui_tab_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tab_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Tab/svg/ic_refineui_tab_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tab_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Tab/svg/ic_refineui_tab_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tab_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Tab/svg/ic_refineui_tab_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tab_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Tab/svg/ic_refineui_tab_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tab_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Tab/svg/ic_refineui_tab_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tab_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Tab/svg/ic_refineui_tab_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tab_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Tab/svg/ic_refineui_tab_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tab_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Tab/svg/ic_refineui_tab_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tab_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Tab/svg/ic_refineui_tab_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tab_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Tab/svg/ic_refineui_tab_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tab_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Tab/svg/ic_refineui_tab_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984216,
  					unicodeHex: "\\F0498",
  					cssClass: "ic_refineui_tab_16_regular"
  				},
  				filled: {
  					unicode: 984217,
  					unicodeHex: "\\F0499",
  					cssClass: "ic_refineui_tab_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984221,
  					unicodeHex: "\\F049D",
  					cssClass: "ic_refineui_tab_20_regular"
  				},
  				filled: {
  					unicode: 984219,
  					unicodeHex: "\\F049B",
  					cssClass: "ic_refineui_tab_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984218,
  					unicodeHex: "\\F049A",
  					cssClass: "ic_refineui_tab_24_regular"
  				},
  				filled: {
  					unicode: 984216,
  					unicodeHex: "\\F0498",
  					cssClass: "ic_refineui_tab_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984219,
  					unicodeHex: "\\F049B",
  					cssClass: "ic_refineui_tab_28_regular"
  				},
  				filled: {
  					unicode: 984220,
  					unicodeHex: "\\F049C",
  					cssClass: "ic_refineui_tab_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984220,
  					unicodeHex: "\\F049C",
  					cssClass: "ic_refineui_tab_32_regular"
  				},
  				filled: {
  					unicode: 984218,
  					unicodeHex: "\\F049A",
  					cssClass: "ic_refineui_tab_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984217,
  					unicodeHex: "\\F0499",
  					cssClass: "ic_refineui_tab_48_regular"
  				},
  				filled: {
  					unicode: 984221,
  					unicodeHex: "\\F049D",
  					cssClass: "ic_refineui_tab_48_filled"
  				}
  			}
  		}
  	},
  	Tv: {
  		name: "Tv",
  		slug: "tv",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in tv scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_tv_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Tv/svg/ic_refineui_tv_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tv_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Tv/svg/ic_refineui_tv_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tv_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Tv/svg/ic_refineui_tv_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tv_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Tv/svg/ic_refineui_tv_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tv_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Tv/svg/ic_refineui_tv_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tv_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Tv/svg/ic_refineui_tv_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tv_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Tv/svg/ic_refineui_tv_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tv_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Tv/svg/ic_refineui_tv_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tv_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Tv/svg/ic_refineui_tv_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tv_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Tv/svg/ic_refineui_tv_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tv_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Tv/svg/ic_refineui_tv_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tv_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Tv/svg/ic_refineui_tv_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984249,
  					unicodeHex: "\\F04B9",
  					cssClass: "ic_refineui_tv_16_regular"
  				},
  				filled: {
  					unicode: 984251,
  					unicodeHex: "\\F04BB",
  					cssClass: "ic_refineui_tv_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984246,
  					unicodeHex: "\\F04B6",
  					cssClass: "ic_refineui_tv_20_regular"
  				},
  				filled: {
  					unicode: 984247,
  					unicodeHex: "\\F04B7",
  					cssClass: "ic_refineui_tv_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984251,
  					unicodeHex: "\\F04BB",
  					cssClass: "ic_refineui_tv_24_regular"
  				},
  				filled: {
  					unicode: 984250,
  					unicodeHex: "\\F04BA",
  					cssClass: "ic_refineui_tv_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984248,
  					unicodeHex: "\\F04B8",
  					cssClass: "ic_refineui_tv_28_regular"
  				},
  				filled: {
  					unicode: 984248,
  					unicodeHex: "\\F04B8",
  					cssClass: "ic_refineui_tv_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984247,
  					unicodeHex: "\\F04B7",
  					cssClass: "ic_refineui_tv_32_regular"
  				},
  				filled: {
  					unicode: 984249,
  					unicodeHex: "\\F04B9",
  					cssClass: "ic_refineui_tv_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984250,
  					unicodeHex: "\\F04BA",
  					cssClass: "ic_refineui_tv_48_regular"
  				},
  				filled: {
  					unicode: 984246,
  					unicodeHex: "\\F04B6",
  					cssClass: "ic_refineui_tv_48_filled"
  				}
  			}
  		}
  	},
  	Glasses: {
  		name: "Glasses",
  		slug: "glasses",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in glasses scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_glasses_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Glasses/svg/ic_refineui_glasses_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_glasses_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Glasses/svg/ic_refineui_glasses_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_glasses_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Glasses/svg/ic_refineui_glasses_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_glasses_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Glasses/svg/ic_refineui_glasses_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_glasses_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Glasses/svg/ic_refineui_glasses_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_glasses_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Glasses/svg/ic_refineui_glasses_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_glasses_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Glasses/svg/ic_refineui_glasses_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_glasses_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Glasses/svg/ic_refineui_glasses_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_glasses_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Glasses/svg/ic_refineui_glasses_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_glasses_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Glasses/svg/ic_refineui_glasses_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_glasses_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Glasses/svg/ic_refineui_glasses_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_glasses_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Glasses/svg/ic_refineui_glasses_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984255,
  					unicodeHex: "\\F04BF",
  					cssClass: "ic_refineui_glasses_16_regular"
  				},
  				filled: {
  					unicode: 984253,
  					unicodeHex: "\\F04BD",
  					cssClass: "ic_refineui_glasses_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984252,
  					unicodeHex: "\\F04BC",
  					cssClass: "ic_refineui_glasses_20_regular"
  				},
  				filled: {
  					unicode: 984257,
  					unicodeHex: "\\F04C1",
  					cssClass: "ic_refineui_glasses_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984256,
  					unicodeHex: "\\F04C0",
  					cssClass: "ic_refineui_glasses_24_regular"
  				},
  				filled: {
  					unicode: 984254,
  					unicodeHex: "\\F04BE",
  					cssClass: "ic_refineui_glasses_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984253,
  					unicodeHex: "\\F04BD",
  					cssClass: "ic_refineui_glasses_28_regular"
  				},
  				filled: {
  					unicode: 984256,
  					unicodeHex: "\\F04C0",
  					cssClass: "ic_refineui_glasses_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984257,
  					unicodeHex: "\\F04C1",
  					cssClass: "ic_refineui_glasses_32_regular"
  				},
  				filled: {
  					unicode: 984252,
  					unicodeHex: "\\F04BC",
  					cssClass: "ic_refineui_glasses_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984254,
  					unicodeHex: "\\F04BE",
  					cssClass: "ic_refineui_glasses_48_regular"
  				},
  				filled: {
  					unicode: 984255,
  					unicodeHex: "\\F04BF",
  					cssClass: "ic_refineui_glasses_48_filled"
  				}
  			}
  		}
  	},
  	Drag: {
  		name: "Drag",
  		slug: "drag",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in drag scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_drag_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Drag/svg/ic_refineui_drag_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drag_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Drag/svg/ic_refineui_drag_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drag_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Drag/svg/ic_refineui_drag_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drag_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Drag/svg/ic_refineui_drag_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drag_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Drag/svg/ic_refineui_drag_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drag_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Drag/svg/ic_refineui_drag_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drag_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Drag/svg/ic_refineui_drag_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drag_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Drag/svg/ic_refineui_drag_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drag_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Drag/svg/ic_refineui_drag_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drag_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Drag/svg/ic_refineui_drag_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drag_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Drag/svg/ic_refineui_drag_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drag_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Drag/svg/ic_refineui_drag_24_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984267,
  					unicodeHex: "\\F04CB",
  					cssClass: "ic_refineui_drag_16_regular"
  				},
  				filled: {
  					unicode: 984268,
  					unicodeHex: "\\F04CC",
  					cssClass: "ic_refineui_drag_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984264,
  					unicodeHex: "\\F04C8",
  					cssClass: "ic_refineui_drag_20_regular"
  				},
  				filled: {
  					unicode: 984264,
  					unicodeHex: "\\F04C8",
  					cssClass: "ic_refineui_drag_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984269,
  					unicodeHex: "\\F04CD",
  					cssClass: "ic_refineui_drag_24_regular"
  				},
  				filled: {
  					unicode: 984267,
  					unicodeHex: "\\F04CB",
  					cssClass: "ic_refineui_drag_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984266,
  					unicodeHex: "\\F04CA",
  					cssClass: "ic_refineui_drag_28_regular"
  				},
  				filled: {
  					unicode: 984265,
  					unicodeHex: "\\F04C9",
  					cssClass: "ic_refineui_drag_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984265,
  					unicodeHex: "\\F04C9",
  					cssClass: "ic_refineui_drag_32_regular"
  				},
  				filled: {
  					unicode: 984269,
  					unicodeHex: "\\F04CD",
  					cssClass: "ic_refineui_drag_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984268,
  					unicodeHex: "\\F04CC",
  					cssClass: "ic_refineui_drag_48_regular"
  				},
  				filled: {
  					unicode: 984266,
  					unicodeHex: "\\F04CA",
  					cssClass: "ic_refineui_drag_48_filled"
  				}
  			}
  		}
  	},
  	Megaphone: {
  		name: "Megaphone",
  		slug: "megaphone",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in megaphone scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_megaphone_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Megaphone/svg/ic_refineui_megaphone_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_megaphone_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Megaphone/svg/ic_refineui_megaphone_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_megaphone_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Megaphone/svg/ic_refineui_megaphone_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_megaphone_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Megaphone/svg/ic_refineui_megaphone_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_megaphone_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Megaphone/svg/ic_refineui_megaphone_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_megaphone_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Megaphone/svg/ic_refineui_megaphone_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_megaphone_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Megaphone/svg/ic_refineui_megaphone_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_megaphone_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Megaphone/svg/ic_refineui_megaphone_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_megaphone_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Megaphone/svg/ic_refineui_megaphone_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_megaphone_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Megaphone/svg/ic_refineui_megaphone_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_megaphone_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Megaphone/svg/ic_refineui_megaphone_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_megaphone_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Megaphone/svg/ic_refineui_megaphone_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984277,
  					unicodeHex: "\\F04D5",
  					cssClass: "ic_refineui_megaphone_16_regular"
  				},
  				filled: {
  					unicode: 984276,
  					unicodeHex: "\\F04D4",
  					cssClass: "ic_refineui_megaphone_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984281,
  					unicodeHex: "\\F04D9",
  					cssClass: "ic_refineui_megaphone_20_regular"
  				},
  				filled: {
  					unicode: 984280,
  					unicodeHex: "\\F04D8",
  					cssClass: "ic_refineui_megaphone_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984278,
  					unicodeHex: "\\F04D6",
  					cssClass: "ic_refineui_megaphone_24_regular"
  				},
  				filled: {
  					unicode: 984277,
  					unicodeHex: "\\F04D5",
  					cssClass: "ic_refineui_megaphone_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984279,
  					unicodeHex: "\\F04D7",
  					cssClass: "ic_refineui_megaphone_28_regular"
  				},
  				filled: {
  					unicode: 984279,
  					unicodeHex: "\\F04D7",
  					cssClass: "ic_refineui_megaphone_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984280,
  					unicodeHex: "\\F04D8",
  					cssClass: "ic_refineui_megaphone_32_regular"
  				},
  				filled: {
  					unicode: 984278,
  					unicodeHex: "\\F04D6",
  					cssClass: "ic_refineui_megaphone_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984276,
  					unicodeHex: "\\F04D4",
  					cssClass: "ic_refineui_megaphone_48_regular"
  				},
  				filled: {
  					unicode: 984281,
  					unicodeHex: "\\F04D9",
  					cssClass: "ic_refineui_megaphone_48_filled"
  				}
  			}
  		}
  	},
  	Print: {
  		name: "Print",
  		slug: "print",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in print scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_print_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Print/svg/ic_refineui_print_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_print_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Print/svg/ic_refineui_print_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_print_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Print/svg/ic_refineui_print_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_print_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Print/svg/ic_refineui_print_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_print_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Print/svg/ic_refineui_print_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_print_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Print/svg/ic_refineui_print_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_print_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Print/svg/ic_refineui_print_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_print_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Print/svg/ic_refineui_print_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_print_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Print/svg/ic_refineui_print_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_print_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Print/svg/ic_refineui_print_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_print_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Print/svg/ic_refineui_print_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_print_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Print/svg/ic_refineui_print_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984285,
  					unicodeHex: "\\F04DD",
  					cssClass: "ic_refineui_print_16_regular"
  				},
  				filled: {
  					unicode: 984283,
  					unicodeHex: "\\F04DB",
  					cssClass: "ic_refineui_print_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984282,
  					unicodeHex: "\\F04DA",
  					cssClass: "ic_refineui_print_20_regular"
  				},
  				filled: {
  					unicode: 984285,
  					unicodeHex: "\\F04DD",
  					cssClass: "ic_refineui_print_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984286,
  					unicodeHex: "\\F04DE",
  					cssClass: "ic_refineui_print_24_regular"
  				},
  				filled: {
  					unicode: 984282,
  					unicodeHex: "\\F04DA",
  					cssClass: "ic_refineui_print_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984287,
  					unicodeHex: "\\F04DF",
  					cssClass: "ic_refineui_print_28_regular"
  				},
  				filled: {
  					unicode: 984286,
  					unicodeHex: "\\F04DE",
  					cssClass: "ic_refineui_print_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984283,
  					unicodeHex: "\\F04DB",
  					cssClass: "ic_refineui_print_32_regular"
  				},
  				filled: {
  					unicode: 984284,
  					unicodeHex: "\\F04DC",
  					cssClass: "ic_refineui_print_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984284,
  					unicodeHex: "\\F04DC",
  					cssClass: "ic_refineui_print_48_regular"
  				},
  				filled: {
  					unicode: 984287,
  					unicodeHex: "\\F04DF",
  					cssClass: "ic_refineui_print_48_filled"
  				}
  			}
  		}
  	},
  	Ios: {
  		name: "Ios",
  		slug: "ios",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in ios scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_ios_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Ios/svg/ic_refineui_ios_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ios_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Ios/svg/ic_refineui_ios_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ios_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Ios/svg/ic_refineui_ios_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ios_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Ios/svg/ic_refineui_ios_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ios_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Ios/svg/ic_refineui_ios_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ios_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Ios/svg/ic_refineui_ios_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ios_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Ios/svg/ic_refineui_ios_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ios_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Ios/svg/ic_refineui_ios_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ios_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Ios/svg/ic_refineui_ios_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ios_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Ios/svg/ic_refineui_ios_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ios_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Ios/svg/ic_refineui_ios_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ios_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Ios/svg/ic_refineui_ios_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984303,
  					unicodeHex: "\\F04EF",
  					cssClass: "ic_refineui_ios_16_regular"
  				},
  				filled: {
  					unicode: 984301,
  					unicodeHex: "\\F04ED",
  					cssClass: "ic_refineui_ios_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984305,
  					unicodeHex: "\\F04F1",
  					cssClass: "ic_refineui_ios_20_regular"
  				},
  				filled: {
  					unicode: 984303,
  					unicodeHex: "\\F04EF",
  					cssClass: "ic_refineui_ios_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984304,
  					unicodeHex: "\\F04F0",
  					cssClass: "ic_refineui_ios_24_regular"
  				},
  				filled: {
  					unicode: 984300,
  					unicodeHex: "\\F04EC",
  					cssClass: "ic_refineui_ios_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984301,
  					unicodeHex: "\\F04ED",
  					cssClass: "ic_refineui_ios_28_regular"
  				},
  				filled: {
  					unicode: 984304,
  					unicodeHex: "\\F04F0",
  					cssClass: "ic_refineui_ios_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984300,
  					unicodeHex: "\\F04EC",
  					cssClass: "ic_refineui_ios_32_regular"
  				},
  				filled: {
  					unicode: 984302,
  					unicodeHex: "\\F04EE",
  					cssClass: "ic_refineui_ios_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984302,
  					unicodeHex: "\\F04EE",
  					cssClass: "ic_refineui_ios_48_regular"
  				},
  				filled: {
  					unicode: 984305,
  					unicodeHex: "\\F04F1",
  					cssClass: "ic_refineui_ios_48_filled"
  				}
  			}
  		}
  	},
  	Script: {
  		name: "Script",
  		slug: "script",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in script scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_script_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Script/svg/ic_refineui_script_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_script_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Script/svg/ic_refineui_script_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_script_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Script/svg/ic_refineui_script_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_script_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Script/svg/ic_refineui_script_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_script_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Script/svg/ic_refineui_script_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_script_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Script/svg/ic_refineui_script_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_script_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Script/svg/ic_refineui_script_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_script_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Script/svg/ic_refineui_script_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_script_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Script/svg/ic_refineui_script_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_script_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Script/svg/ic_refineui_script_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_script_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Script/svg/ic_refineui_script_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_script_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Script/svg/ic_refineui_script_28_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984313,
  					unicodeHex: "\\F04F9",
  					cssClass: "ic_refineui_script_16_regular"
  				},
  				filled: {
  					unicode: 984314,
  					unicodeHex: "\\F04FA",
  					cssClass: "ic_refineui_script_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984317,
  					unicodeHex: "\\F04FD",
  					cssClass: "ic_refineui_script_20_regular"
  				},
  				filled: {
  					unicode: 984316,
  					unicodeHex: "\\F04FC",
  					cssClass: "ic_refineui_script_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984315,
  					unicodeHex: "\\F04FB",
  					cssClass: "ic_refineui_script_24_regular"
  				},
  				filled: {
  					unicode: 984313,
  					unicodeHex: "\\F04F9",
  					cssClass: "ic_refineui_script_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984316,
  					unicodeHex: "\\F04FC",
  					cssClass: "ic_refineui_script_28_regular"
  				},
  				filled: {
  					unicode: 984317,
  					unicodeHex: "\\F04FD",
  					cssClass: "ic_refineui_script_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984312,
  					unicodeHex: "\\F04F8",
  					cssClass: "ic_refineui_script_32_regular"
  				},
  				filled: {
  					unicode: 984312,
  					unicodeHex: "\\F04F8",
  					cssClass: "ic_refineui_script_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984314,
  					unicodeHex: "\\F04FA",
  					cssClass: "ic_refineui_script_48_regular"
  				},
  				filled: {
  					unicode: 984315,
  					unicodeHex: "\\F04FB",
  					cssClass: "ic_refineui_script_48_filled"
  				}
  			}
  		}
  	},
  	Image: {
  		name: "Image",
  		slug: "image",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in image scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_image_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Image/svg/ic_refineui_image_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_image_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Image/svg/ic_refineui_image_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_image_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Image/svg/ic_refineui_image_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_image_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Image/svg/ic_refineui_image_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_image_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Image/svg/ic_refineui_image_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_image_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Image/svg/ic_refineui_image_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_image_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Image/svg/ic_refineui_image_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_image_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Image/svg/ic_refineui_image_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_image_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Image/svg/ic_refineui_image_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_image_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Image/svg/ic_refineui_image_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_image_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Image/svg/ic_refineui_image_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_image_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Image/svg/ic_refineui_image_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984321,
  					unicodeHex: "\\F0501",
  					cssClass: "ic_refineui_image_16_regular"
  				},
  				filled: {
  					unicode: 984320,
  					unicodeHex: "\\F0500",
  					cssClass: "ic_refineui_image_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984318,
  					unicodeHex: "\\F04FE",
  					cssClass: "ic_refineui_image_20_regular"
  				},
  				filled: {
  					unicode: 984322,
  					unicodeHex: "\\F0502",
  					cssClass: "ic_refineui_image_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984322,
  					unicodeHex: "\\F0502",
  					cssClass: "ic_refineui_image_24_regular"
  				},
  				filled: {
  					unicode: 984319,
  					unicodeHex: "\\F04FF",
  					cssClass: "ic_refineui_image_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984323,
  					unicodeHex: "\\F0503",
  					cssClass: "ic_refineui_image_28_regular"
  				},
  				filled: {
  					unicode: 984323,
  					unicodeHex: "\\F0503",
  					cssClass: "ic_refineui_image_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984319,
  					unicodeHex: "\\F04FF",
  					cssClass: "ic_refineui_image_32_regular"
  				},
  				filled: {
  					unicode: 984318,
  					unicodeHex: "\\F04FE",
  					cssClass: "ic_refineui_image_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984320,
  					unicodeHex: "\\F0500",
  					cssClass: "ic_refineui_image_48_regular"
  				},
  				filled: {
  					unicode: 984321,
  					unicodeHex: "\\F0501",
  					cssClass: "ic_refineui_image_48_filled"
  				}
  			}
  		}
  	},
  	Dentist: {
  		name: "Dentist",
  		slug: "dentist",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in dentist scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_dentist_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Dentist/svg/ic_refineui_dentist_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dentist_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Dentist/svg/ic_refineui_dentist_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dentist_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Dentist/svg/ic_refineui_dentist_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dentist_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Dentist/svg/ic_refineui_dentist_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dentist_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Dentist/svg/ic_refineui_dentist_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dentist_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Dentist/svg/ic_refineui_dentist_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dentist_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Dentist/svg/ic_refineui_dentist_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dentist_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Dentist/svg/ic_refineui_dentist_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dentist_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Dentist/svg/ic_refineui_dentist_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dentist_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Dentist/svg/ic_refineui_dentist_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dentist_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Dentist/svg/ic_refineui_dentist_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dentist_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Dentist/svg/ic_refineui_dentist_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984326,
  					unicodeHex: "\\F0506",
  					cssClass: "ic_refineui_dentist_16_regular"
  				},
  				filled: {
  					unicode: 984325,
  					unicodeHex: "\\F0505",
  					cssClass: "ic_refineui_dentist_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984329,
  					unicodeHex: "\\F0509",
  					cssClass: "ic_refineui_dentist_20_regular"
  				},
  				filled: {
  					unicode: 984327,
  					unicodeHex: "\\F0507",
  					cssClass: "ic_refineui_dentist_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984325,
  					unicodeHex: "\\F0505",
  					cssClass: "ic_refineui_dentist_24_regular"
  				},
  				filled: {
  					unicode: 984324,
  					unicodeHex: "\\F0504",
  					cssClass: "ic_refineui_dentist_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984328,
  					unicodeHex: "\\F0508",
  					cssClass: "ic_refineui_dentist_28_regular"
  				},
  				filled: {
  					unicode: 984328,
  					unicodeHex: "\\F0508",
  					cssClass: "ic_refineui_dentist_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984324,
  					unicodeHex: "\\F0504",
  					cssClass: "ic_refineui_dentist_32_regular"
  				},
  				filled: {
  					unicode: 984326,
  					unicodeHex: "\\F0506",
  					cssClass: "ic_refineui_dentist_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984327,
  					unicodeHex: "\\F0507",
  					cssClass: "ic_refineui_dentist_48_regular"
  				},
  				filled: {
  					unicode: 984329,
  					unicodeHex: "\\F0509",
  					cssClass: "ic_refineui_dentist_48_filled"
  				}
  			}
  		}
  	},
  	Iot: {
  		name: "Iot",
  		slug: "iot",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in iot scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_iot_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Iot/svg/ic_refineui_iot_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_iot_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Iot/svg/ic_refineui_iot_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_iot_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Iot/svg/ic_refineui_iot_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_iot_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Iot/svg/ic_refineui_iot_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_iot_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Iot/svg/ic_refineui_iot_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_iot_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Iot/svg/ic_refineui_iot_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_iot_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Iot/svg/ic_refineui_iot_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_iot_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Iot/svg/ic_refineui_iot_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_iot_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Iot/svg/ic_refineui_iot_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_iot_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Iot/svg/ic_refineui_iot_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_iot_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Iot/svg/ic_refineui_iot_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_iot_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Iot/svg/ic_refineui_iot_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984339,
  					unicodeHex: "\\F0513",
  					cssClass: "ic_refineui_iot_16_regular"
  				},
  				filled: {
  					unicode: 984336,
  					unicodeHex: "\\F0510",
  					cssClass: "ic_refineui_iot_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984341,
  					unicodeHex: "\\F0515",
  					cssClass: "ic_refineui_iot_20_regular"
  				},
  				filled: {
  					unicode: 984340,
  					unicodeHex: "\\F0514",
  					cssClass: "ic_refineui_iot_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984340,
  					unicodeHex: "\\F0514",
  					cssClass: "ic_refineui_iot_24_regular"
  				},
  				filled: {
  					unicode: 984337,
  					unicodeHex: "\\F0511",
  					cssClass: "ic_refineui_iot_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984337,
  					unicodeHex: "\\F0511",
  					cssClass: "ic_refineui_iot_28_regular"
  				},
  				filled: {
  					unicode: 984339,
  					unicodeHex: "\\F0513",
  					cssClass: "ic_refineui_iot_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984336,
  					unicodeHex: "\\F0510",
  					cssClass: "ic_refineui_iot_32_regular"
  				},
  				filled: {
  					unicode: 984338,
  					unicodeHex: "\\F0512",
  					cssClass: "ic_refineui_iot_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984338,
  					unicodeHex: "\\F0512",
  					cssClass: "ic_refineui_iot_48_regular"
  				},
  				filled: {
  					unicode: 984341,
  					unicodeHex: "\\F0515",
  					cssClass: "ic_refineui_iot_48_filled"
  				}
  			}
  		}
  	},
  	Scales: {
  		name: "Scales",
  		slug: "scales",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in scales scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_scales_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Scales/svg/ic_refineui_scales_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_scales_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Scales/svg/ic_refineui_scales_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_scales_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Scales/svg/ic_refineui_scales_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_scales_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Scales/svg/ic_refineui_scales_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_scales_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Scales/svg/ic_refineui_scales_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_scales_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Scales/svg/ic_refineui_scales_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_scales_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Scales/svg/ic_refineui_scales_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_scales_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Scales/svg/ic_refineui_scales_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_scales_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Scales/svg/ic_refineui_scales_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_scales_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Scales/svg/ic_refineui_scales_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_scales_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Scales/svg/ic_refineui_scales_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_scales_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Scales/svg/ic_refineui_scales_24_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984345,
  					unicodeHex: "\\F0519",
  					cssClass: "ic_refineui_scales_16_regular"
  				},
  				filled: {
  					unicode: 984345,
  					unicodeHex: "\\F0519",
  					cssClass: "ic_refineui_scales_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984342,
  					unicodeHex: "\\F0516",
  					cssClass: "ic_refineui_scales_20_regular"
  				},
  				filled: {
  					unicode: 984343,
  					unicodeHex: "\\F0517",
  					cssClass: "ic_refineui_scales_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984347,
  					unicodeHex: "\\F051B",
  					cssClass: "ic_refineui_scales_24_regular"
  				},
  				filled: {
  					unicode: 984346,
  					unicodeHex: "\\F051A",
  					cssClass: "ic_refineui_scales_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984344,
  					unicodeHex: "\\F0518",
  					cssClass: "ic_refineui_scales_28_regular"
  				},
  				filled: {
  					unicode: 984342,
  					unicodeHex: "\\F0516",
  					cssClass: "ic_refineui_scales_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984343,
  					unicodeHex: "\\F0517",
  					cssClass: "ic_refineui_scales_32_regular"
  				},
  				filled: {
  					unicode: 984347,
  					unicodeHex: "\\F051B",
  					cssClass: "ic_refineui_scales_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984346,
  					unicodeHex: "\\F051A",
  					cssClass: "ic_refineui_scales_48_regular"
  				},
  				filled: {
  					unicode: 984344,
  					unicodeHex: "\\F0518",
  					cssClass: "ic_refineui_scales_48_filled"
  				}
  			}
  		}
  	},
  	Dismiss: {
  		name: "Dismiss",
  		slug: "dismiss",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in dismiss scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_dismiss_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Dismiss/svg/ic_refineui_dismiss_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dismiss_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Dismiss/svg/ic_refineui_dismiss_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dismiss_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Dismiss/svg/ic_refineui_dismiss_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dismiss_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Dismiss/svg/ic_refineui_dismiss_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dismiss_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Dismiss/svg/ic_refineui_dismiss_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dismiss_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Dismiss/svg/ic_refineui_dismiss_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dismiss_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Dismiss/svg/ic_refineui_dismiss_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dismiss_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Dismiss/svg/ic_refineui_dismiss_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dismiss_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Dismiss/svg/ic_refineui_dismiss_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dismiss_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Dismiss/svg/ic_refineui_dismiss_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dismiss_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Dismiss/svg/ic_refineui_dismiss_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dismiss_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Dismiss/svg/ic_refineui_dismiss_48_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984352,
  					unicodeHex: "\\F0520",
  					cssClass: "ic_refineui_dismiss_16_regular"
  				},
  				filled: {
  					unicode: 984349,
  					unicodeHex: "\\F051D",
  					cssClass: "ic_refineui_dismiss_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984348,
  					unicodeHex: "\\F051C",
  					cssClass: "ic_refineui_dismiss_20_regular"
  				},
  				filled: {
  					unicode: 984351,
  					unicodeHex: "\\F051F",
  					cssClass: "ic_refineui_dismiss_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984351,
  					unicodeHex: "\\F051F",
  					cssClass: "ic_refineui_dismiss_24_regular"
  				},
  				filled: {
  					unicode: 984348,
  					unicodeHex: "\\F051C",
  					cssClass: "ic_refineui_dismiss_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984350,
  					unicodeHex: "\\F051E",
  					cssClass: "ic_refineui_dismiss_28_regular"
  				},
  				filled: {
  					unicode: 984352,
  					unicodeHex: "\\F0520",
  					cssClass: "ic_refineui_dismiss_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984349,
  					unicodeHex: "\\F051D",
  					cssClass: "ic_refineui_dismiss_32_regular"
  				},
  				filled: {
  					unicode: 984350,
  					unicodeHex: "\\F051E",
  					cssClass: "ic_refineui_dismiss_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984353,
  					unicodeHex: "\\F0521",
  					cssClass: "ic_refineui_dismiss_48_regular"
  				},
  				filled: {
  					unicode: 984353,
  					unicodeHex: "\\F0521",
  					cssClass: "ic_refineui_dismiss_48_filled"
  				}
  			}
  		}
  	},
  	Tent: {
  		name: "Tent",
  		slug: "tent",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in tent scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_tent_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Tent/svg/ic_refineui_tent_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tent_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Tent/svg/ic_refineui_tent_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tent_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Tent/svg/ic_refineui_tent_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tent_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Tent/svg/ic_refineui_tent_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tent_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Tent/svg/ic_refineui_tent_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tent_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Tent/svg/ic_refineui_tent_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tent_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Tent/svg/ic_refineui_tent_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tent_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Tent/svg/ic_refineui_tent_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tent_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Tent/svg/ic_refineui_tent_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tent_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Tent/svg/ic_refineui_tent_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tent_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Tent/svg/ic_refineui_tent_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tent_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Tent/svg/ic_refineui_tent_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984357,
  					unicodeHex: "\\F0525",
  					cssClass: "ic_refineui_tent_16_regular"
  				},
  				filled: {
  					unicode: 984357,
  					unicodeHex: "\\F0525",
  					cssClass: "ic_refineui_tent_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984359,
  					unicodeHex: "\\F0527",
  					cssClass: "ic_refineui_tent_20_regular"
  				},
  				filled: {
  					unicode: 984355,
  					unicodeHex: "\\F0523",
  					cssClass: "ic_refineui_tent_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984358,
  					unicodeHex: "\\F0526",
  					cssClass: "ic_refineui_tent_24_regular"
  				},
  				filled: {
  					unicode: 984358,
  					unicodeHex: "\\F0526",
  					cssClass: "ic_refineui_tent_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984355,
  					unicodeHex: "\\F0523",
  					cssClass: "ic_refineui_tent_28_regular"
  				},
  				filled: {
  					unicode: 984354,
  					unicodeHex: "\\F0522",
  					cssClass: "ic_refineui_tent_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984354,
  					unicodeHex: "\\F0522",
  					cssClass: "ic_refineui_tent_32_regular"
  				},
  				filled: {
  					unicode: 984359,
  					unicodeHex: "\\F0527",
  					cssClass: "ic_refineui_tent_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984356,
  					unicodeHex: "\\F0524",
  					cssClass: "ic_refineui_tent_48_regular"
  				},
  				filled: {
  					unicode: 984356,
  					unicodeHex: "\\F0524",
  					cssClass: "ic_refineui_tent_48_filled"
  				}
  			}
  		}
  	},
  	Rectangle: {
  		name: "Rectangle",
  		slug: "rectangle",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in rectangle scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_rectangle_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Rectangle/svg/ic_refineui_rectangle_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rectangle_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Rectangle/svg/ic_refineui_rectangle_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rectangle_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Rectangle/svg/ic_refineui_rectangle_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rectangle_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Rectangle/svg/ic_refineui_rectangle_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rectangle_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Rectangle/svg/ic_refineui_rectangle_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rectangle_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Rectangle/svg/ic_refineui_rectangle_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rectangle_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Rectangle/svg/ic_refineui_rectangle_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rectangle_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Rectangle/svg/ic_refineui_rectangle_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rectangle_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Rectangle/svg/ic_refineui_rectangle_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rectangle_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Rectangle/svg/ic_refineui_rectangle_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rectangle_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Rectangle/svg/ic_refineui_rectangle_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rectangle_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Rectangle/svg/ic_refineui_rectangle_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984362,
  					unicodeHex: "\\F052A",
  					cssClass: "ic_refineui_rectangle_16_regular"
  				},
  				filled: {
  					unicode: 984365,
  					unicodeHex: "\\F052D",
  					cssClass: "ic_refineui_rectangle_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984360,
  					unicodeHex: "\\F0528",
  					cssClass: "ic_refineui_rectangle_20_regular"
  				},
  				filled: {
  					unicode: 984361,
  					unicodeHex: "\\F0529",
  					cssClass: "ic_refineui_rectangle_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984364,
  					unicodeHex: "\\F052C",
  					cssClass: "ic_refineui_rectangle_24_regular"
  				},
  				filled: {
  					unicode: 984364,
  					unicodeHex: "\\F052C",
  					cssClass: "ic_refineui_rectangle_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984361,
  					unicodeHex: "\\F0529",
  					cssClass: "ic_refineui_rectangle_28_regular"
  				},
  				filled: {
  					unicode: 984362,
  					unicodeHex: "\\F052A",
  					cssClass: "ic_refineui_rectangle_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984365,
  					unicodeHex: "\\F052D",
  					cssClass: "ic_refineui_rectangle_32_regular"
  				},
  				filled: {
  					unicode: 984363,
  					unicodeHex: "\\F052B",
  					cssClass: "ic_refineui_rectangle_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984363,
  					unicodeHex: "\\F052B",
  					cssClass: "ic_refineui_rectangle_48_regular"
  				},
  				filled: {
  					unicode: 984360,
  					unicodeHex: "\\F0528",
  					cssClass: "ic_refineui_rectangle_48_filled"
  				}
  			}
  		}
  	},
  	Gift: {
  		name: "Gift",
  		slug: "gift",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in gift scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_gift_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Gift/svg/ic_refineui_gift_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gift_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Gift/svg/ic_refineui_gift_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gift_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Gift/svg/ic_refineui_gift_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gift_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Gift/svg/ic_refineui_gift_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gift_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Gift/svg/ic_refineui_gift_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gift_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Gift/svg/ic_refineui_gift_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gift_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Gift/svg/ic_refineui_gift_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gift_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Gift/svg/ic_refineui_gift_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gift_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Gift/svg/ic_refineui_gift_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gift_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Gift/svg/ic_refineui_gift_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gift_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Gift/svg/ic_refineui_gift_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gift_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Gift/svg/ic_refineui_gift_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984369,
  					unicodeHex: "\\F0531",
  					cssClass: "ic_refineui_gift_16_regular"
  				},
  				filled: {
  					unicode: 984370,
  					unicodeHex: "\\F0532",
  					cssClass: "ic_refineui_gift_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984371,
  					unicodeHex: "\\F0533",
  					cssClass: "ic_refineui_gift_20_regular"
  				},
  				filled: {
  					unicode: 984368,
  					unicodeHex: "\\F0530",
  					cssClass: "ic_refineui_gift_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984370,
  					unicodeHex: "\\F0532",
  					cssClass: "ic_refineui_gift_24_regular"
  				},
  				filled: {
  					unicode: 984371,
  					unicodeHex: "\\F0533",
  					cssClass: "ic_refineui_gift_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984367,
  					unicodeHex: "\\F052F",
  					cssClass: "ic_refineui_gift_28_regular"
  				},
  				filled: {
  					unicode: 984367,
  					unicodeHex: "\\F052F",
  					cssClass: "ic_refineui_gift_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984366,
  					unicodeHex: "\\F052E",
  					cssClass: "ic_refineui_gift_32_regular"
  				},
  				filled: {
  					unicode: 984369,
  					unicodeHex: "\\F0531",
  					cssClass: "ic_refineui_gift_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984368,
  					unicodeHex: "\\F0530",
  					cssClass: "ic_refineui_gift_48_regular"
  				},
  				filled: {
  					unicode: 984366,
  					unicodeHex: "\\F052E",
  					cssClass: "ic_refineui_gift_48_filled"
  				}
  			}
  		}
  	},
  	Question: {
  		name: "Question",
  		slug: "question",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in question scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_question_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Question/svg/ic_refineui_question_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_question_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Question/svg/ic_refineui_question_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_question_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Question/svg/ic_refineui_question_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_question_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Question/svg/ic_refineui_question_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_question_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Question/svg/ic_refineui_question_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_question_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Question/svg/ic_refineui_question_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_question_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Question/svg/ic_refineui_question_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_question_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Question/svg/ic_refineui_question_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_question_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Question/svg/ic_refineui_question_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_question_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Question/svg/ic_refineui_question_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_question_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Question/svg/ic_refineui_question_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_question_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Question/svg/ic_refineui_question_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984375,
  					unicodeHex: "\\F0537",
  					cssClass: "ic_refineui_question_16_regular"
  				},
  				filled: {
  					unicode: 984376,
  					unicodeHex: "\\F0538",
  					cssClass: "ic_refineui_question_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984372,
  					unicodeHex: "\\F0534",
  					cssClass: "ic_refineui_question_20_regular"
  				},
  				filled: {
  					unicode: 984372,
  					unicodeHex: "\\F0534",
  					cssClass: "ic_refineui_question_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984374,
  					unicodeHex: "\\F0536",
  					cssClass: "ic_refineui_question_24_regular"
  				},
  				filled: {
  					unicode: 984375,
  					unicodeHex: "\\F0537",
  					cssClass: "ic_refineui_question_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984377,
  					unicodeHex: "\\F0539",
  					cssClass: "ic_refineui_question_28_regular"
  				},
  				filled: {
  					unicode: 984373,
  					unicodeHex: "\\F0535",
  					cssClass: "ic_refineui_question_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984373,
  					unicodeHex: "\\F0535",
  					cssClass: "ic_refineui_question_32_regular"
  				},
  				filled: {
  					unicode: 984377,
  					unicodeHex: "\\F0539",
  					cssClass: "ic_refineui_question_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984376,
  					unicodeHex: "\\F0538",
  					cssClass: "ic_refineui_question_48_regular"
  				},
  				filled: {
  					unicode: 984374,
  					unicodeHex: "\\F0536",
  					cssClass: "ic_refineui_question_48_filled"
  				}
  			}
  		}
  	},
  	Search: {
  		name: "Search",
  		slug: "search",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in search scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_search_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Search/svg/ic_refineui_search_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_search_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Search/svg/ic_refineui_search_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_search_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Search/svg/ic_refineui_search_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_search_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Search/svg/ic_refineui_search_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_search_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Search/svg/ic_refineui_search_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_search_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Search/svg/ic_refineui_search_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_search_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Search/svg/ic_refineui_search_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_search_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Search/svg/ic_refineui_search_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_search_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Search/svg/ic_refineui_search_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_search_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Search/svg/ic_refineui_search_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_search_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Search/svg/ic_refineui_search_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_search_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Search/svg/ic_refineui_search_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984388,
  					unicodeHex: "\\F0544",
  					cssClass: "ic_refineui_search_16_regular"
  				},
  				filled: {
  					unicode: 984385,
  					unicodeHex: "\\F0541",
  					cssClass: "ic_refineui_search_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984389,
  					unicodeHex: "\\F0545",
  					cssClass: "ic_refineui_search_20_regular"
  				},
  				filled: {
  					unicode: 984387,
  					unicodeHex: "\\F0543",
  					cssClass: "ic_refineui_search_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984386,
  					unicodeHex: "\\F0542",
  					cssClass: "ic_refineui_search_24_regular"
  				},
  				filled: {
  					unicode: 984384,
  					unicodeHex: "\\F0540",
  					cssClass: "ic_refineui_search_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984385,
  					unicodeHex: "\\F0541",
  					cssClass: "ic_refineui_search_28_regular"
  				},
  				filled: {
  					unicode: 984388,
  					unicodeHex: "\\F0544",
  					cssClass: "ic_refineui_search_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984384,
  					unicodeHex: "\\F0540",
  					cssClass: "ic_refineui_search_32_regular"
  				},
  				filled: {
  					unicode: 984386,
  					unicodeHex: "\\F0542",
  					cssClass: "ic_refineui_search_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984387,
  					unicodeHex: "\\F0543",
  					cssClass: "ic_refineui_search_48_regular"
  				},
  				filled: {
  					unicode: 984389,
  					unicodeHex: "\\F0545",
  					cssClass: "ic_refineui_search_48_filled"
  				}
  			}
  		}
  	},
  	Mouse: {
  		name: "Mouse",
  		slug: "mouse",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in mouse scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_mouse_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Mouse/svg/ic_refineui_mouse_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mouse_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Mouse/svg/ic_refineui_mouse_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mouse_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Mouse/svg/ic_refineui_mouse_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mouse_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Mouse/svg/ic_refineui_mouse_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mouse_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Mouse/svg/ic_refineui_mouse_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mouse_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Mouse/svg/ic_refineui_mouse_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mouse_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Mouse/svg/ic_refineui_mouse_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mouse_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Mouse/svg/ic_refineui_mouse_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mouse_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Mouse/svg/ic_refineui_mouse_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mouse_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Mouse/svg/ic_refineui_mouse_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_mouse_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Mouse/svg/ic_refineui_mouse_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_mouse_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Mouse/svg/ic_refineui_mouse_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984405,
  					unicodeHex: "\\F0555",
  					cssClass: "ic_refineui_mouse_16_regular"
  				},
  				filled: {
  					unicode: 984403,
  					unicodeHex: "\\F0553",
  					cssClass: "ic_refineui_mouse_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984407,
  					unicodeHex: "\\F0557",
  					cssClass: "ic_refineui_mouse_20_regular"
  				},
  				filled: {
  					unicode: 984407,
  					unicodeHex: "\\F0557",
  					cssClass: "ic_refineui_mouse_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984403,
  					unicodeHex: "\\F0553",
  					cssClass: "ic_refineui_mouse_24_regular"
  				},
  				filled: {
  					unicode: 984404,
  					unicodeHex: "\\F0554",
  					cssClass: "ic_refineui_mouse_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984406,
  					unicodeHex: "\\F0556",
  					cssClass: "ic_refineui_mouse_28_regular"
  				},
  				filled: {
  					unicode: 984406,
  					unicodeHex: "\\F0556",
  					cssClass: "ic_refineui_mouse_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984402,
  					unicodeHex: "\\F0552",
  					cssClass: "ic_refineui_mouse_32_regular"
  				},
  				filled: {
  					unicode: 984402,
  					unicodeHex: "\\F0552",
  					cssClass: "ic_refineui_mouse_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984404,
  					unicodeHex: "\\F0554",
  					cssClass: "ic_refineui_mouse_48_regular"
  				},
  				filled: {
  					unicode: 984405,
  					unicodeHex: "\\F0555",
  					cssClass: "ic_refineui_mouse_48_filled"
  				}
  			}
  		}
  	},
  	Ribbon: {
  		name: "Ribbon",
  		slug: "ribbon",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in ribbon scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_ribbon_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Ribbon/svg/ic_refineui_ribbon_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ribbon_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Ribbon/svg/ic_refineui_ribbon_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ribbon_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Ribbon/svg/ic_refineui_ribbon_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ribbon_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Ribbon/svg/ic_refineui_ribbon_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ribbon_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Ribbon/svg/ic_refineui_ribbon_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ribbon_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Ribbon/svg/ic_refineui_ribbon_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ribbon_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Ribbon/svg/ic_refineui_ribbon_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ribbon_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Ribbon/svg/ic_refineui_ribbon_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ribbon_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Ribbon/svg/ic_refineui_ribbon_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ribbon_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Ribbon/svg/ic_refineui_ribbon_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ribbon_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Ribbon/svg/ic_refineui_ribbon_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ribbon_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Ribbon/svg/ic_refineui_ribbon_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984411,
  					unicodeHex: "\\F055B",
  					cssClass: "ic_refineui_ribbon_16_regular"
  				},
  				filled: {
  					unicode: 984411,
  					unicodeHex: "\\F055B",
  					cssClass: "ic_refineui_ribbon_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984413,
  					unicodeHex: "\\F055D",
  					cssClass: "ic_refineui_ribbon_20_regular"
  				},
  				filled: {
  					unicode: 984409,
  					unicodeHex: "\\F0559",
  					cssClass: "ic_refineui_ribbon_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984409,
  					unicodeHex: "\\F0559",
  					cssClass: "ic_refineui_ribbon_24_regular"
  				},
  				filled: {
  					unicode: 984412,
  					unicodeHex: "\\F055C",
  					cssClass: "ic_refineui_ribbon_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984412,
  					unicodeHex: "\\F055C",
  					cssClass: "ic_refineui_ribbon_28_regular"
  				},
  				filled: {
  					unicode: 984408,
  					unicodeHex: "\\F0558",
  					cssClass: "ic_refineui_ribbon_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984408,
  					unicodeHex: "\\F0558",
  					cssClass: "ic_refineui_ribbon_32_regular"
  				},
  				filled: {
  					unicode: 984413,
  					unicodeHex: "\\F055D",
  					cssClass: "ic_refineui_ribbon_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984410,
  					unicodeHex: "\\F055A",
  					cssClass: "ic_refineui_ribbon_48_regular"
  				},
  				filled: {
  					unicode: 984410,
  					unicodeHex: "\\F055A",
  					cssClass: "ic_refineui_ribbon_48_filled"
  				}
  			}
  		}
  	},
  	Pen: {
  		name: "Pen",
  		slug: "pen",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in pen scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_pen_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Pen/svg/ic_refineui_pen_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pen_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Pen/svg/ic_refineui_pen_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pen_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Pen/svg/ic_refineui_pen_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pen_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Pen/svg/ic_refineui_pen_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pen_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Pen/svg/ic_refineui_pen_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pen_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Pen/svg/ic_refineui_pen_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pen_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Pen/svg/ic_refineui_pen_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pen_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Pen/svg/ic_refineui_pen_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_pen_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Pen/svg/ic_refineui_pen_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pen_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Pen/svg/ic_refineui_pen_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pen_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Pen/svg/ic_refineui_pen_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_pen_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Pen/svg/ic_refineui_pen_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984418,
  					unicodeHex: "\\F0562",
  					cssClass: "ic_refineui_pen_16_regular"
  				},
  				filled: {
  					unicode: 984415,
  					unicodeHex: "\\F055F",
  					cssClass: "ic_refineui_pen_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984414,
  					unicodeHex: "\\F055E",
  					cssClass: "ic_refineui_pen_20_regular"
  				},
  				filled: {
  					unicode: 984419,
  					unicodeHex: "\\F0563",
  					cssClass: "ic_refineui_pen_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984417,
  					unicodeHex: "\\F0561",
  					cssClass: "ic_refineui_pen_24_regular"
  				},
  				filled: {
  					unicode: 984416,
  					unicodeHex: "\\F0560",
  					cssClass: "ic_refineui_pen_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984416,
  					unicodeHex: "\\F0560",
  					cssClass: "ic_refineui_pen_28_regular"
  				},
  				filled: {
  					unicode: 984418,
  					unicodeHex: "\\F0562",
  					cssClass: "ic_refineui_pen_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984415,
  					unicodeHex: "\\F055F",
  					cssClass: "ic_refineui_pen_32_regular"
  				},
  				filled: {
  					unicode: 984414,
  					unicodeHex: "\\F055E",
  					cssClass: "ic_refineui_pen_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984419,
  					unicodeHex: "\\F0563",
  					cssClass: "ic_refineui_pen_48_regular"
  				},
  				filled: {
  					unicode: 984417,
  					unicodeHex: "\\F0561",
  					cssClass: "ic_refineui_pen_48_filled"
  				}
  			}
  		}
  	},
  	Info: {
  		name: "Info",
  		slug: "info",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in info scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_info_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Info/svg/ic_refineui_info_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_info_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Info/svg/ic_refineui_info_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_info_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Info/svg/ic_refineui_info_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_info_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Info/svg/ic_refineui_info_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_info_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Info/svg/ic_refineui_info_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_info_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Info/svg/ic_refineui_info_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_info_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Info/svg/ic_refineui_info_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_info_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Info/svg/ic_refineui_info_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_info_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Info/svg/ic_refineui_info_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_info_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Info/svg/ic_refineui_info_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_info_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Info/svg/ic_refineui_info_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_info_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Info/svg/ic_refineui_info_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984435,
  					unicodeHex: "\\F0573",
  					cssClass: "ic_refineui_info_16_regular"
  				},
  				filled: {
  					unicode: 984437,
  					unicodeHex: "\\F0575",
  					cssClass: "ic_refineui_info_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984432,
  					unicodeHex: "\\F0570",
  					cssClass: "ic_refineui_info_20_regular"
  				},
  				filled: {
  					unicode: 984433,
  					unicodeHex: "\\F0571",
  					cssClass: "ic_refineui_info_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984436,
  					unicodeHex: "\\F0574",
  					cssClass: "ic_refineui_info_24_regular"
  				},
  				filled: {
  					unicode: 984436,
  					unicodeHex: "\\F0574",
  					cssClass: "ic_refineui_info_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984437,
  					unicodeHex: "\\F0575",
  					cssClass: "ic_refineui_info_28_regular"
  				},
  				filled: {
  					unicode: 984434,
  					unicodeHex: "\\F0572",
  					cssClass: "ic_refineui_info_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984433,
  					unicodeHex: "\\F0571",
  					cssClass: "ic_refineui_info_32_regular"
  				},
  				filled: {
  					unicode: 984435,
  					unicodeHex: "\\F0573",
  					cssClass: "ic_refineui_info_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984434,
  					unicodeHex: "\\F0572",
  					cssClass: "ic_refineui_info_48_regular"
  				},
  				filled: {
  					unicode: 984432,
  					unicodeHex: "\\F0570",
  					cssClass: "ic_refineui_info_48_filled"
  				}
  			}
  		}
  	},
  	Oval: {
  		name: "Oval",
  		slug: "oval",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in oval scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_oval_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Oval/svg/ic_refineui_oval_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_oval_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Oval/svg/ic_refineui_oval_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_oval_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Oval/svg/ic_refineui_oval_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_oval_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Oval/svg/ic_refineui_oval_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_oval_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Oval/svg/ic_refineui_oval_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_oval_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Oval/svg/ic_refineui_oval_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_oval_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Oval/svg/ic_refineui_oval_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_oval_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Oval/svg/ic_refineui_oval_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_oval_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Oval/svg/ic_refineui_oval_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_oval_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Oval/svg/ic_refineui_oval_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_oval_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Oval/svg/ic_refineui_oval_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_oval_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Oval/svg/ic_refineui_oval_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984459,
  					unicodeHex: "\\F058B",
  					cssClass: "ic_refineui_oval_16_regular"
  				},
  				filled: {
  					unicode: 984460,
  					unicodeHex: "\\F058C",
  					cssClass: "ic_refineui_oval_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984461,
  					unicodeHex: "\\F058D",
  					cssClass: "ic_refineui_oval_20_regular"
  				},
  				filled: {
  					unicode: 984456,
  					unicodeHex: "\\F0588",
  					cssClass: "ic_refineui_oval_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984457,
  					unicodeHex: "\\F0589",
  					cssClass: "ic_refineui_oval_24_regular"
  				},
  				filled: {
  					unicode: 984459,
  					unicodeHex: "\\F058B",
  					cssClass: "ic_refineui_oval_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984456,
  					unicodeHex: "\\F0588",
  					cssClass: "ic_refineui_oval_28_regular"
  				},
  				filled: {
  					unicode: 984457,
  					unicodeHex: "\\F0589",
  					cssClass: "ic_refineui_oval_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984460,
  					unicodeHex: "\\F058C",
  					cssClass: "ic_refineui_oval_32_regular"
  				},
  				filled: {
  					unicode: 984461,
  					unicodeHex: "\\F058D",
  					cssClass: "ic_refineui_oval_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984458,
  					unicodeHex: "\\F058A",
  					cssClass: "ic_refineui_oval_48_regular"
  				},
  				filled: {
  					unicode: 984458,
  					unicodeHex: "\\F058A",
  					cssClass: "ic_refineui_oval_48_filled"
  				}
  			}
  		}
  	},
  	Usb: {
  		name: "Usb",
  		slug: "usb",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in usb scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_usb_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Usb/svg/ic_refineui_usb_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_usb_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Usb/svg/ic_refineui_usb_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_usb_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Usb/svg/ic_refineui_usb_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_usb_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Usb/svg/ic_refineui_usb_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_usb_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Usb/svg/ic_refineui_usb_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_usb_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Usb/svg/ic_refineui_usb_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_usb_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Usb/svg/ic_refineui_usb_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_usb_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Usb/svg/ic_refineui_usb_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_usb_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Usb/svg/ic_refineui_usb_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_usb_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Usb/svg/ic_refineui_usb_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_usb_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Usb/svg/ic_refineui_usb_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_usb_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Usb/svg/ic_refineui_usb_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984466,
  					unicodeHex: "\\F0592",
  					cssClass: "ic_refineui_usb_16_regular"
  				},
  				filled: {
  					unicode: 984465,
  					unicodeHex: "\\F0591",
  					cssClass: "ic_refineui_usb_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984467,
  					unicodeHex: "\\F0593",
  					cssClass: "ic_refineui_usb_20_regular"
  				},
  				filled: {
  					unicode: 984463,
  					unicodeHex: "\\F058F",
  					cssClass: "ic_refineui_usb_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984464,
  					unicodeHex: "\\F0590",
  					cssClass: "ic_refineui_usb_24_regular"
  				},
  				filled: {
  					unicode: 984466,
  					unicodeHex: "\\F0592",
  					cssClass: "ic_refineui_usb_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984463,
  					unicodeHex: "\\F058F",
  					cssClass: "ic_refineui_usb_28_regular"
  				},
  				filled: {
  					unicode: 984462,
  					unicodeHex: "\\F058E",
  					cssClass: "ic_refineui_usb_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984462,
  					unicodeHex: "\\F058E",
  					cssClass: "ic_refineui_usb_32_regular"
  				},
  				filled: {
  					unicode: 984467,
  					unicodeHex: "\\F0593",
  					cssClass: "ic_refineui_usb_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984465,
  					unicodeHex: "\\F0591",
  					cssClass: "ic_refineui_usb_48_regular"
  				},
  				filled: {
  					unicode: 984464,
  					unicodeHex: "\\F0590",
  					cssClass: "ic_refineui_usb_48_filled"
  				}
  			}
  		}
  	},
  	Edit: {
  		name: "Edit",
  		slug: "edit",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in edit scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_edit_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Edit/svg/ic_refineui_edit_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_edit_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Edit/svg/ic_refineui_edit_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_edit_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Edit/svg/ic_refineui_edit_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_edit_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Edit/svg/ic_refineui_edit_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_edit_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Edit/svg/ic_refineui_edit_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_edit_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Edit/svg/ic_refineui_edit_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_edit_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Edit/svg/ic_refineui_edit_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_edit_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Edit/svg/ic_refineui_edit_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_edit_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Edit/svg/ic_refineui_edit_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_edit_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Edit/svg/ic_refineui_edit_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_edit_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Edit/svg/ic_refineui_edit_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_edit_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Edit/svg/ic_refineui_edit_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984471,
  					unicodeHex: "\\F0597",
  					cssClass: "ic_refineui_edit_16_regular"
  				},
  				filled: {
  					unicode: 984471,
  					unicodeHex: "\\F0597",
  					cssClass: "ic_refineui_edit_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984468,
  					unicodeHex: "\\F0594",
  					cssClass: "ic_refineui_edit_20_regular"
  				},
  				filled: {
  					unicode: 984469,
  					unicodeHex: "\\F0595",
  					cssClass: "ic_refineui_edit_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984469,
  					unicodeHex: "\\F0595",
  					cssClass: "ic_refineui_edit_24_regular"
  				},
  				filled: {
  					unicode: 984472,
  					unicodeHex: "\\F0598",
  					cssClass: "ic_refineui_edit_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984472,
  					unicodeHex: "\\F0598",
  					cssClass: "ic_refineui_edit_28_regular"
  				},
  				filled: {
  					unicode: 984468,
  					unicodeHex: "\\F0594",
  					cssClass: "ic_refineui_edit_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984473,
  					unicodeHex: "\\F0599",
  					cssClass: "ic_refineui_edit_32_regular"
  				},
  				filled: {
  					unicode: 984473,
  					unicodeHex: "\\F0599",
  					cssClass: "ic_refineui_edit_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984470,
  					unicodeHex: "\\F0596",
  					cssClass: "ic_refineui_edit_48_regular"
  				},
  				filled: {
  					unicode: 984470,
  					unicodeHex: "\\F0596",
  					cssClass: "ic_refineui_edit_48_filled"
  				}
  			}
  		}
  	},
  	Warning: {
  		name: "Warning",
  		slug: "warning",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in warning scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_warning_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Warning/svg/ic_refineui_warning_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_warning_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Warning/svg/ic_refineui_warning_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_warning_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Warning/svg/ic_refineui_warning_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_warning_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Warning/svg/ic_refineui_warning_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_warning_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Warning/svg/ic_refineui_warning_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_warning_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Warning/svg/ic_refineui_warning_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_warning_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Warning/svg/ic_refineui_warning_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_warning_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Warning/svg/ic_refineui_warning_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_warning_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Warning/svg/ic_refineui_warning_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_warning_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Warning/svg/ic_refineui_warning_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_warning_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Warning/svg/ic_refineui_warning_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_warning_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Warning/svg/ic_refineui_warning_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984489,
  					unicodeHex: "\\F05A9",
  					cssClass: "ic_refineui_warning_16_regular"
  				},
  				filled: {
  					unicode: 984490,
  					unicodeHex: "\\F05AA",
  					cssClass: "ic_refineui_warning_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984491,
  					unicodeHex: "\\F05AB",
  					cssClass: "ic_refineui_warning_20_regular"
  				},
  				filled: {
  					unicode: 984486,
  					unicodeHex: "\\F05A6",
  					cssClass: "ic_refineui_warning_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984488,
  					unicodeHex: "\\F05A8",
  					cssClass: "ic_refineui_warning_24_regular"
  				},
  				filled: {
  					unicode: 984489,
  					unicodeHex: "\\F05A9",
  					cssClass: "ic_refineui_warning_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984487,
  					unicodeHex: "\\F05A7",
  					cssClass: "ic_refineui_warning_28_regular"
  				},
  				filled: {
  					unicode: 984487,
  					unicodeHex: "\\F05A7",
  					cssClass: "ic_refineui_warning_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984486,
  					unicodeHex: "\\F05A6",
  					cssClass: "ic_refineui_warning_32_regular"
  				},
  				filled: {
  					unicode: 984491,
  					unicodeHex: "\\F05AB",
  					cssClass: "ic_refineui_warning_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984490,
  					unicodeHex: "\\F05AA",
  					cssClass: "ic_refineui_warning_48_regular"
  				},
  				filled: {
  					unicode: 984488,
  					unicodeHex: "\\F05A8",
  					cssClass: "ic_refineui_warning_48_filled"
  				}
  			}
  		}
  	},
  	Star: {
  		name: "Star",
  		slug: "star",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in star scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_star_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Star/svg/ic_refineui_star_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_star_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Star/svg/ic_refineui_star_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_star_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Star/svg/ic_refineui_star_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_star_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Star/svg/ic_refineui_star_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_star_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Star/svg/ic_refineui_star_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_star_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Star/svg/ic_refineui_star_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_star_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Star/svg/ic_refineui_star_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_star_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Star/svg/ic_refineui_star_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_star_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Star/svg/ic_refineui_star_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_star_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Star/svg/ic_refineui_star_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_star_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Star/svg/ic_refineui_star_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_star_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Star/svg/ic_refineui_star_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984495,
  					unicodeHex: "\\F05AF",
  					cssClass: "ic_refineui_star_16_regular"
  				},
  				filled: {
  					unicode: 984493,
  					unicodeHex: "\\F05AD",
  					cssClass: "ic_refineui_star_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984497,
  					unicodeHex: "\\F05B1",
  					cssClass: "ic_refineui_star_20_regular"
  				},
  				filled: {
  					unicode: 984495,
  					unicodeHex: "\\F05AF",
  					cssClass: "ic_refineui_star_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984496,
  					unicodeHex: "\\F05B0",
  					cssClass: "ic_refineui_star_24_regular"
  				},
  				filled: {
  					unicode: 984492,
  					unicodeHex: "\\F05AC",
  					cssClass: "ic_refineui_star_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984493,
  					unicodeHex: "\\F05AD",
  					cssClass: "ic_refineui_star_28_regular"
  				},
  				filled: {
  					unicode: 984496,
  					unicodeHex: "\\F05B0",
  					cssClass: "ic_refineui_star_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984492,
  					unicodeHex: "\\F05AC",
  					cssClass: "ic_refineui_star_32_regular"
  				},
  				filled: {
  					unicode: 984494,
  					unicodeHex: "\\F05AE",
  					cssClass: "ic_refineui_star_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984494,
  					unicodeHex: "\\F05AE",
  					cssClass: "ic_refineui_star_48_regular"
  				},
  				filled: {
  					unicode: 984497,
  					unicodeHex: "\\F05B1",
  					cssClass: "ic_refineui_star_48_filled"
  				}
  			}
  		}
  	},
  	Flash: {
  		name: "Flash",
  		slug: "flash",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in flash scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_flash_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Flash/svg/ic_refineui_flash_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flash_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Flash/svg/ic_refineui_flash_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flash_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Flash/svg/ic_refineui_flash_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flash_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Flash/svg/ic_refineui_flash_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flash_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Flash/svg/ic_refineui_flash_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flash_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Flash/svg/ic_refineui_flash_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flash_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Flash/svg/ic_refineui_flash_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flash_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Flash/svg/ic_refineui_flash_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flash_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Flash/svg/ic_refineui_flash_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flash_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Flash/svg/ic_refineui_flash_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flash_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Flash/svg/ic_refineui_flash_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flash_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Flash/svg/ic_refineui_flash_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984512,
  					unicodeHex: "\\F05C0",
  					cssClass: "ic_refineui_flash_16_regular"
  				},
  				filled: {
  					unicode: 984510,
  					unicodeHex: "\\F05BE",
  					cssClass: "ic_refineui_flash_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984515,
  					unicodeHex: "\\F05C3",
  					cssClass: "ic_refineui_flash_20_regular"
  				},
  				filled: {
  					unicode: 984514,
  					unicodeHex: "\\F05C2",
  					cssClass: "ic_refineui_flash_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984513,
  					unicodeHex: "\\F05C1",
  					cssClass: "ic_refineui_flash_24_regular"
  				},
  				filled: {
  					unicode: 984511,
  					unicodeHex: "\\F05BF",
  					cssClass: "ic_refineui_flash_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984510,
  					unicodeHex: "\\F05BE",
  					cssClass: "ic_refineui_flash_28_regular"
  				},
  				filled: {
  					unicode: 984513,
  					unicodeHex: "\\F05C1",
  					cssClass: "ic_refineui_flash_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984514,
  					unicodeHex: "\\F05C2",
  					cssClass: "ic_refineui_flash_32_regular"
  				},
  				filled: {
  					unicode: 984512,
  					unicodeHex: "\\F05C0",
  					cssClass: "ic_refineui_flash_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984511,
  					unicodeHex: "\\F05BF",
  					cssClass: "ic_refineui_flash_48_regular"
  				},
  				filled: {
  					unicode: 984515,
  					unicodeHex: "\\F05C3",
  					cssClass: "ic_refineui_flash_48_filled"
  				}
  			}
  		}
  	},
  	Drop: {
  		name: "Drop",
  		slug: "drop",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in drop scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_drop_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Drop/svg/ic_refineui_drop_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drop_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Drop/svg/ic_refineui_drop_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drop_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Drop/svg/ic_refineui_drop_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drop_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Drop/svg/ic_refineui_drop_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drop_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Drop/svg/ic_refineui_drop_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drop_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Drop/svg/ic_refineui_drop_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drop_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Drop/svg/ic_refineui_drop_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drop_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Drop/svg/ic_refineui_drop_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drop_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Drop/svg/ic_refineui_drop_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drop_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Drop/svg/ic_refineui_drop_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_drop_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Drop/svg/ic_refineui_drop_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_drop_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Drop/svg/ic_refineui_drop_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984535,
  					unicodeHex: "\\F05D7",
  					cssClass: "ic_refineui_drop_16_regular"
  				},
  				filled: {
  					unicode: 984535,
  					unicodeHex: "\\F05D7",
  					cssClass: "ic_refineui_drop_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984539,
  					unicodeHex: "\\F05DB",
  					cssClass: "ic_refineui_drop_20_regular"
  				},
  				filled: {
  					unicode: 984539,
  					unicodeHex: "\\F05DB",
  					cssClass: "ic_refineui_drop_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984537,
  					unicodeHex: "\\F05D9",
  					cssClass: "ic_refineui_drop_24_regular"
  				},
  				filled: {
  					unicode: 984536,
  					unicodeHex: "\\F05D8",
  					cssClass: "ic_refineui_drop_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984534,
  					unicodeHex: "\\F05D6",
  					cssClass: "ic_refineui_drop_28_regular"
  				},
  				filled: {
  					unicode: 984538,
  					unicodeHex: "\\F05DA",
  					cssClass: "ic_refineui_drop_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984538,
  					unicodeHex: "\\F05DA",
  					cssClass: "ic_refineui_drop_32_regular"
  				},
  				filled: {
  					unicode: 984534,
  					unicodeHex: "\\F05D6",
  					cssClass: "ic_refineui_drop_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984536,
  					unicodeHex: "\\F05D8",
  					cssClass: "ic_refineui_drop_48_regular"
  				},
  				filled: {
  					unicode: 984537,
  					unicodeHex: "\\F05D9",
  					cssClass: "ic_refineui_drop_48_filled"
  				}
  			}
  		}
  	},
  	"Map": {
  		name: "Map",
  		slug: "map",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in map scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_map_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Map/svg/ic_refineui_map_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_map_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Map/svg/ic_refineui_map_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_map_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Map/svg/ic_refineui_map_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_map_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Map/svg/ic_refineui_map_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_map_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Map/svg/ic_refineui_map_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_map_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Map/svg/ic_refineui_map_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_map_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Map/svg/ic_refineui_map_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_map_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Map/svg/ic_refineui_map_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_map_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Map/svg/ic_refineui_map_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_map_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Map/svg/ic_refineui_map_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_map_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Map/svg/ic_refineui_map_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_map_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Map/svg/ic_refineui_map_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984544,
  					unicodeHex: "\\F05E0",
  					cssClass: "ic_refineui_map_16_regular"
  				},
  				filled: {
  					unicode: 984544,
  					unicodeHex: "\\F05E0",
  					cssClass: "ic_refineui_map_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984545,
  					unicodeHex: "\\F05E1",
  					cssClass: "ic_refineui_map_20_regular"
  				},
  				filled: {
  					unicode: 984540,
  					unicodeHex: "\\F05DC",
  					cssClass: "ic_refineui_map_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984542,
  					unicodeHex: "\\F05DE",
  					cssClass: "ic_refineui_map_24_regular"
  				},
  				filled: {
  					unicode: 984543,
  					unicodeHex: "\\F05DF",
  					cssClass: "ic_refineui_map_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984541,
  					unicodeHex: "\\F05DD",
  					cssClass: "ic_refineui_map_28_regular"
  				},
  				filled: {
  					unicode: 984541,
  					unicodeHex: "\\F05DD",
  					cssClass: "ic_refineui_map_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984540,
  					unicodeHex: "\\F05DC",
  					cssClass: "ic_refineui_map_32_regular"
  				},
  				filled: {
  					unicode: 984545,
  					unicodeHex: "\\F05E1",
  					cssClass: "ic_refineui_map_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984543,
  					unicodeHex: "\\F05DF",
  					cssClass: "ic_refineui_map_48_regular"
  				},
  				filled: {
  					unicode: 984542,
  					unicodeHex: "\\F05DE",
  					cssClass: "ic_refineui_map_48_filled"
  				}
  			}
  		}
  	},
  	Json: {
  		name: "Json",
  		slug: "json",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in json scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_json_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Json/svg/ic_refineui_json_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_json_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Json/svg/ic_refineui_json_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_json_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Json/svg/ic_refineui_json_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_json_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Json/svg/ic_refineui_json_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_json_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Json/svg/ic_refineui_json_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_json_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Json/svg/ic_refineui_json_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_json_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Json/svg/ic_refineui_json_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_json_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Json/svg/ic_refineui_json_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_json_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Json/svg/ic_refineui_json_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_json_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Json/svg/ic_refineui_json_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_json_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Json/svg/ic_refineui_json_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_json_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Json/svg/ic_refineui_json_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984547,
  					unicodeHex: "\\F05E3",
  					cssClass: "ic_refineui_json_16_regular"
  				},
  				filled: {
  					unicode: 984550,
  					unicodeHex: "\\F05E6",
  					cssClass: "ic_refineui_json_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984551,
  					unicodeHex: "\\F05E7",
  					cssClass: "ic_refineui_json_20_regular"
  				},
  				filled: {
  					unicode: 984548,
  					unicodeHex: "\\F05E4",
  					cssClass: "ic_refineui_json_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984549,
  					unicodeHex: "\\F05E5",
  					cssClass: "ic_refineui_json_24_regular"
  				},
  				filled: {
  					unicode: 984551,
  					unicodeHex: "\\F05E7",
  					cssClass: "ic_refineui_json_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984550,
  					unicodeHex: "\\F05E6",
  					cssClass: "ic_refineui_json_28_regular"
  				},
  				filled: {
  					unicode: 984547,
  					unicodeHex: "\\F05E3",
  					cssClass: "ic_refineui_json_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984546,
  					unicodeHex: "\\F05E2",
  					cssClass: "ic_refineui_json_32_regular"
  				},
  				filled: {
  					unicode: 984549,
  					unicodeHex: "\\F05E5",
  					cssClass: "ic_refineui_json_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984548,
  					unicodeHex: "\\F05E4",
  					cssClass: "ic_refineui_json_48_regular"
  				},
  				filled: {
  					unicode: 984546,
  					unicodeHex: "\\F05E2",
  					cssClass: "ic_refineui_json_48_filled"
  				}
  			}
  		}
  	},
  	Layer: {
  		name: "Layer",
  		slug: "layer",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in layer scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_layer_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Layer/svg/ic_refineui_layer_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_layer_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Layer/svg/ic_refineui_layer_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_layer_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Layer/svg/ic_refineui_layer_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_layer_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Layer/svg/ic_refineui_layer_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_layer_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Layer/svg/ic_refineui_layer_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_layer_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Layer/svg/ic_refineui_layer_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_layer_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Layer/svg/ic_refineui_layer_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_layer_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Layer/svg/ic_refineui_layer_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_layer_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Layer/svg/ic_refineui_layer_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_layer_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Layer/svg/ic_refineui_layer_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_layer_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Layer/svg/ic_refineui_layer_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_layer_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Layer/svg/ic_refineui_layer_24_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984567,
  					unicodeHex: "\\F05F7",
  					cssClass: "ic_refineui_layer_16_regular"
  				},
  				filled: {
  					unicode: 984569,
  					unicodeHex: "\\F05F9",
  					cssClass: "ic_refineui_layer_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984564,
  					unicodeHex: "\\F05F4",
  					cssClass: "ic_refineui_layer_20_regular"
  				},
  				filled: {
  					unicode: 984565,
  					unicodeHex: "\\F05F5",
  					cssClass: "ic_refineui_layer_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984569,
  					unicodeHex: "\\F05F9",
  					cssClass: "ic_refineui_layer_24_regular"
  				},
  				filled: {
  					unicode: 984568,
  					unicodeHex: "\\F05F8",
  					cssClass: "ic_refineui_layer_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984566,
  					unicodeHex: "\\F05F6",
  					cssClass: "ic_refineui_layer_28_regular"
  				},
  				filled: {
  					unicode: 984566,
  					unicodeHex: "\\F05F6",
  					cssClass: "ic_refineui_layer_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984565,
  					unicodeHex: "\\F05F5",
  					cssClass: "ic_refineui_layer_32_regular"
  				},
  				filled: {
  					unicode: 984567,
  					unicodeHex: "\\F05F7",
  					cssClass: "ic_refineui_layer_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984568,
  					unicodeHex: "\\F05F8",
  					cssClass: "ic_refineui_layer_48_regular"
  				},
  				filled: {
  					unicode: 984564,
  					unicodeHex: "\\F05F4",
  					cssClass: "ic_refineui_layer_48_filled"
  				}
  			}
  		}
  	},
  	Fire: {
  		name: "Fire",
  		slug: "fire",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in fire scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_fire_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Fire/svg/ic_refineui_fire_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_fire_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Fire/svg/ic_refineui_fire_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_fire_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Fire/svg/ic_refineui_fire_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_fire_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Fire/svg/ic_refineui_fire_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_fire_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Fire/svg/ic_refineui_fire_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_fire_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Fire/svg/ic_refineui_fire_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_fire_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Fire/svg/ic_refineui_fire_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_fire_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Fire/svg/ic_refineui_fire_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_fire_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Fire/svg/ic_refineui_fire_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_fire_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Fire/svg/ic_refineui_fire_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_fire_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Fire/svg/ic_refineui_fire_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_fire_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Fire/svg/ic_refineui_fire_28_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984585,
  					unicodeHex: "\\F0609",
  					cssClass: "ic_refineui_fire_16_regular"
  				},
  				filled: {
  					unicode: 984584,
  					unicodeHex: "\\F0608",
  					cssClass: "ic_refineui_fire_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984582,
  					unicodeHex: "\\F0606",
  					cssClass: "ic_refineui_fire_20_regular"
  				},
  				filled: {
  					unicode: 984586,
  					unicodeHex: "\\F060A",
  					cssClass: "ic_refineui_fire_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984584,
  					unicodeHex: "\\F0608",
  					cssClass: "ic_refineui_fire_24_regular"
  				},
  				filled: {
  					unicode: 984583,
  					unicodeHex: "\\F0607",
  					cssClass: "ic_refineui_fire_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984583,
  					unicodeHex: "\\F0607",
  					cssClass: "ic_refineui_fire_28_regular"
  				},
  				filled: {
  					unicode: 984587,
  					unicodeHex: "\\F060B",
  					cssClass: "ic_refineui_fire_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984587,
  					unicodeHex: "\\F060B",
  					cssClass: "ic_refineui_fire_32_regular"
  				},
  				filled: {
  					unicode: 984582,
  					unicodeHex: "\\F0606",
  					cssClass: "ic_refineui_fire_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984586,
  					unicodeHex: "\\F060A",
  					cssClass: "ic_refineui_fire_48_regular"
  				},
  				filled: {
  					unicode: 984585,
  					unicodeHex: "\\F0609",
  					cssClass: "ic_refineui_fire_48_filled"
  				}
  			}
  		}
  	},
  	Add: {
  		name: "Add",
  		slug: "add",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in add scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_add_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Add/svg/ic_refineui_add_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_add_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Add/svg/ic_refineui_add_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_add_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Add/svg/ic_refineui_add_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_add_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Add/svg/ic_refineui_add_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_add_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Add/svg/ic_refineui_add_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_add_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Add/svg/ic_refineui_add_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_add_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Add/svg/ic_refineui_add_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_add_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Add/svg/ic_refineui_add_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_add_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Add/svg/ic_refineui_add_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_add_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Add/svg/ic_refineui_add_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_add_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Add/svg/ic_refineui_add_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_add_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Add/svg/ic_refineui_add_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984590,
  					unicodeHex: "\\F060E",
  					cssClass: "ic_refineui_add_16_regular"
  				},
  				filled: {
  					unicode: 984591,
  					unicodeHex: "\\F060F",
  					cssClass: "ic_refineui_add_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984588,
  					unicodeHex: "\\F060C",
  					cssClass: "ic_refineui_add_20_regular"
  				},
  				filled: {
  					unicode: 984589,
  					unicodeHex: "\\F060D",
  					cssClass: "ic_refineui_add_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984591,
  					unicodeHex: "\\F060F",
  					cssClass: "ic_refineui_add_24_regular"
  				},
  				filled: {
  					unicode: 984592,
  					unicodeHex: "\\F0610",
  					cssClass: "ic_refineui_add_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984592,
  					unicodeHex: "\\F0610",
  					cssClass: "ic_refineui_add_28_regular"
  				},
  				filled: {
  					unicode: 984588,
  					unicodeHex: "\\F060C",
  					cssClass: "ic_refineui_add_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984593,
  					unicodeHex: "\\F0611",
  					cssClass: "ic_refineui_add_32_regular"
  				},
  				filled: {
  					unicode: 984593,
  					unicodeHex: "\\F0611",
  					cssClass: "ic_refineui_add_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984589,
  					unicodeHex: "\\F060D",
  					cssClass: "ic_refineui_add_48_regular"
  				},
  				filled: {
  					unicode: 984590,
  					unicodeHex: "\\F060E",
  					cssClass: "ic_refineui_add_48_filled"
  				}
  			}
  		}
  	},
  	Thinking: {
  		name: "Thinking",
  		slug: "thinking",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in thinking scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_thinking_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Thinking/svg/ic_refineui_thinking_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_thinking_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Thinking/svg/ic_refineui_thinking_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_thinking_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Thinking/svg/ic_refineui_thinking_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_thinking_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Thinking/svg/ic_refineui_thinking_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_thinking_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Thinking/svg/ic_refineui_thinking_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_thinking_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Thinking/svg/ic_refineui_thinking_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_thinking_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Thinking/svg/ic_refineui_thinking_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_thinking_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Thinking/svg/ic_refineui_thinking_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_thinking_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Thinking/svg/ic_refineui_thinking_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_thinking_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Thinking/svg/ic_refineui_thinking_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_thinking_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Thinking/svg/ic_refineui_thinking_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_thinking_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Thinking/svg/ic_refineui_thinking_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984615,
  					unicodeHex: "\\F0627",
  					cssClass: "ic_refineui_thinking_16_regular"
  				},
  				filled: {
  					unicode: 984613,
  					unicodeHex: "\\F0625",
  					cssClass: "ic_refineui_thinking_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984617,
  					unicodeHex: "\\F0629",
  					cssClass: "ic_refineui_thinking_20_regular"
  				},
  				filled: {
  					unicode: 984615,
  					unicodeHex: "\\F0627",
  					cssClass: "ic_refineui_thinking_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984613,
  					unicodeHex: "\\F0625",
  					cssClass: "ic_refineui_thinking_24_regular"
  				},
  				filled: {
  					unicode: 984612,
  					unicodeHex: "\\F0624",
  					cssClass: "ic_refineui_thinking_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984616,
  					unicodeHex: "\\F0628",
  					cssClass: "ic_refineui_thinking_28_regular"
  				},
  				filled: {
  					unicode: 984616,
  					unicodeHex: "\\F0628",
  					cssClass: "ic_refineui_thinking_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984612,
  					unicodeHex: "\\F0624",
  					cssClass: "ic_refineui_thinking_32_regular"
  				},
  				filled: {
  					unicode: 984614,
  					unicodeHex: "\\F0626",
  					cssClass: "ic_refineui_thinking_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984614,
  					unicodeHex: "\\F0626",
  					cssClass: "ic_refineui_thinking_48_regular"
  				},
  				filled: {
  					unicode: 984617,
  					unicodeHex: "\\F0629",
  					cssClass: "ic_refineui_thinking_48_filled"
  				}
  			}
  		}
  	},
  	Incognito: {
  		name: "Incognito",
  		slug: "incognito",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in incognito scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_incognito_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Incognito/svg/ic_refineui_incognito_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_incognito_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Incognito/svg/ic_refineui_incognito_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_incognito_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Incognito/svg/ic_refineui_incognito_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_incognito_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Incognito/svg/ic_refineui_incognito_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_incognito_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Incognito/svg/ic_refineui_incognito_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_incognito_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Incognito/svg/ic_refineui_incognito_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_incognito_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Incognito/svg/ic_refineui_incognito_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_incognito_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Incognito/svg/ic_refineui_incognito_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_incognito_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Incognito/svg/ic_refineui_incognito_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_incognito_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Incognito/svg/ic_refineui_incognito_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_incognito_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Incognito/svg/ic_refineui_incognito_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_incognito_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Incognito/svg/ic_refineui_incognito_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984619,
  					unicodeHex: "\\F062B",
  					cssClass: "ic_refineui_incognito_16_regular"
  				},
  				filled: {
  					unicode: 984622,
  					unicodeHex: "\\F062E",
  					cssClass: "ic_refineui_incognito_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984623,
  					unicodeHex: "\\F062F",
  					cssClass: "ic_refineui_incognito_20_regular"
  				},
  				filled: {
  					unicode: 984618,
  					unicodeHex: "\\F062A",
  					cssClass: "ic_refineui_incognito_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984618,
  					unicodeHex: "\\F062A",
  					cssClass: "ic_refineui_incognito_24_regular"
  				},
  				filled: {
  					unicode: 984621,
  					unicodeHex: "\\F062D",
  					cssClass: "ic_refineui_incognito_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984621,
  					unicodeHex: "\\F062D",
  					cssClass: "ic_refineui_incognito_28_regular"
  				},
  				filled: {
  					unicode: 984619,
  					unicodeHex: "\\F062B",
  					cssClass: "ic_refineui_incognito_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984622,
  					unicodeHex: "\\F062E",
  					cssClass: "ic_refineui_incognito_32_regular"
  				},
  				filled: {
  					unicode: 984623,
  					unicodeHex: "\\F062F",
  					cssClass: "ic_refineui_incognito_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984620,
  					unicodeHex: "\\F062C",
  					cssClass: "ic_refineui_incognito_48_regular"
  				},
  				filled: {
  					unicode: 984620,
  					unicodeHex: "\\F062C",
  					cssClass: "ic_refineui_incognito_48_filled"
  				}
  			}
  		}
  	},
  	Link: {
  		name: "Link",
  		slug: "link",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in link scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_link_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Link/svg/ic_refineui_link_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_link_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Link/svg/ic_refineui_link_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_link_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Link/svg/ic_refineui_link_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_link_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Link/svg/ic_refineui_link_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_link_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Link/svg/ic_refineui_link_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_link_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Link/svg/ic_refineui_link_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_link_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Link/svg/ic_refineui_link_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_link_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Link/svg/ic_refineui_link_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_link_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Link/svg/ic_refineui_link_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_link_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Link/svg/ic_refineui_link_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_link_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Link/svg/ic_refineui_link_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_link_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Link/svg/ic_refineui_link_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984626,
  					unicodeHex: "\\F0632",
  					cssClass: "ic_refineui_link_16_regular"
  				},
  				filled: {
  					unicode: 984628,
  					unicodeHex: "\\F0634",
  					cssClass: "ic_refineui_link_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984629,
  					unicodeHex: "\\F0635",
  					cssClass: "ic_refineui_link_20_regular"
  				},
  				filled: {
  					unicode: 984624,
  					unicodeHex: "\\F0630",
  					cssClass: "ic_refineui_link_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984627,
  					unicodeHex: "\\F0633",
  					cssClass: "ic_refineui_link_24_regular"
  				},
  				filled: {
  					unicode: 984627,
  					unicodeHex: "\\F0633",
  					cssClass: "ic_refineui_link_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984628,
  					unicodeHex: "\\F0634",
  					cssClass: "ic_refineui_link_28_regular"
  				},
  				filled: {
  					unicode: 984625,
  					unicodeHex: "\\F0631",
  					cssClass: "ic_refineui_link_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984624,
  					unicodeHex: "\\F0630",
  					cssClass: "ic_refineui_link_32_regular"
  				},
  				filled: {
  					unicode: 984629,
  					unicodeHex: "\\F0635",
  					cssClass: "ic_refineui_link_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984625,
  					unicodeHex: "\\F0631",
  					cssClass: "ic_refineui_link_48_regular"
  				},
  				filled: {
  					unicode: 984626,
  					unicodeHex: "\\F0632",
  					cssClass: "ic_refineui_link_48_filled"
  				}
  			}
  		}
  	},
  	News: {
  		name: "News",
  		slug: "news",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in news scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_news_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/News/svg/ic_refineui_news_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_news_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/News/svg/ic_refineui_news_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_news_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/News/svg/ic_refineui_news_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_news_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/News/svg/ic_refineui_news_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_news_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/News/svg/ic_refineui_news_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_news_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/News/svg/ic_refineui_news_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_news_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/News/svg/ic_refineui_news_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_news_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/News/svg/ic_refineui_news_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_news_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/News/svg/ic_refineui_news_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_news_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/News/svg/ic_refineui_news_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_news_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/News/svg/ic_refineui_news_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_news_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/News/svg/ic_refineui_news_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984645,
  					unicodeHex: "\\F0645",
  					cssClass: "ic_refineui_news_16_regular"
  				},
  				filled: {
  					unicode: 984643,
  					unicodeHex: "\\F0643",
  					cssClass: "ic_refineui_news_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984642,
  					unicodeHex: "\\F0642",
  					cssClass: "ic_refineui_news_20_regular"
  				},
  				filled: {
  					unicode: 984647,
  					unicodeHex: "\\F0647",
  					cssClass: "ic_refineui_news_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984647,
  					unicodeHex: "\\F0647",
  					cssClass: "ic_refineui_news_24_regular"
  				},
  				filled: {
  					unicode: 984644,
  					unicodeHex: "\\F0644",
  					cssClass: "ic_refineui_news_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984644,
  					unicodeHex: "\\F0644",
  					cssClass: "ic_refineui_news_28_regular"
  				},
  				filled: {
  					unicode: 984646,
  					unicodeHex: "\\F0646",
  					cssClass: "ic_refineui_news_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984643,
  					unicodeHex: "\\F0643",
  					cssClass: "ic_refineui_news_32_regular"
  				},
  				filled: {
  					unicode: 984642,
  					unicodeHex: "\\F0642",
  					cssClass: "ic_refineui_news_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984646,
  					unicodeHex: "\\F0646",
  					cssClass: "ic_refineui_news_48_regular"
  				},
  				filled: {
  					unicode: 984645,
  					unicodeHex: "\\F0645",
  					cssClass: "ic_refineui_news_48_filled"
  				}
  			}
  		}
  	},
  	Opacity: {
  		name: "Opacity",
  		slug: "opacity",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in opacity scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_opacity_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Opacity/svg/ic_refineui_opacity_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_opacity_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Opacity/svg/ic_refineui_opacity_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_opacity_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Opacity/svg/ic_refineui_opacity_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_opacity_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Opacity/svg/ic_refineui_opacity_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_opacity_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Opacity/svg/ic_refineui_opacity_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_opacity_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Opacity/svg/ic_refineui_opacity_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_opacity_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Opacity/svg/ic_refineui_opacity_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_opacity_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Opacity/svg/ic_refineui_opacity_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_opacity_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Opacity/svg/ic_refineui_opacity_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_opacity_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Opacity/svg/ic_refineui_opacity_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_opacity_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Opacity/svg/ic_refineui_opacity_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_opacity_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Opacity/svg/ic_refineui_opacity_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984674,
  					unicodeHex: "\\F0662",
  					cssClass: "ic_refineui_opacity_16_regular"
  				},
  				filled: {
  					unicode: 984676,
  					unicodeHex: "\\F0664",
  					cssClass: "ic_refineui_opacity_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984677,
  					unicodeHex: "\\F0665",
  					cssClass: "ic_refineui_opacity_20_regular"
  				},
  				filled: {
  					unicode: 984672,
  					unicodeHex: "\\F0660",
  					cssClass: "ic_refineui_opacity_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984675,
  					unicodeHex: "\\F0663",
  					cssClass: "ic_refineui_opacity_24_regular"
  				},
  				filled: {
  					unicode: 984675,
  					unicodeHex: "\\F0663",
  					cssClass: "ic_refineui_opacity_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984676,
  					unicodeHex: "\\F0664",
  					cssClass: "ic_refineui_opacity_28_regular"
  				},
  				filled: {
  					unicode: 984673,
  					unicodeHex: "\\F0661",
  					cssClass: "ic_refineui_opacity_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984672,
  					unicodeHex: "\\F0660",
  					cssClass: "ic_refineui_opacity_32_regular"
  				},
  				filled: {
  					unicode: 984677,
  					unicodeHex: "\\F0665",
  					cssClass: "ic_refineui_opacity_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984673,
  					unicodeHex: "\\F0661",
  					cssClass: "ic_refineui_opacity_48_regular"
  				},
  				filled: {
  					unicode: 984674,
  					unicodeHex: "\\F0662",
  					cssClass: "ic_refineui_opacity_48_filled"
  				}
  			}
  		}
  	},
  	Line: {
  		name: "Line",
  		slug: "line",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in line scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_line_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Line/svg/ic_refineui_line_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_line_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Line/svg/ic_refineui_line_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_line_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Line/svg/ic_refineui_line_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_line_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Line/svg/ic_refineui_line_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_line_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Line/svg/ic_refineui_line_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_line_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Line/svg/ic_refineui_line_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_line_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Line/svg/ic_refineui_line_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_line_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Line/svg/ic_refineui_line_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_line_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Line/svg/ic_refineui_line_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_line_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Line/svg/ic_refineui_line_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_line_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Line/svg/ic_refineui_line_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_line_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Line/svg/ic_refineui_line_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984686,
  					unicodeHex: "\\F066E",
  					cssClass: "ic_refineui_line_16_regular"
  				},
  				filled: {
  					unicode: 984688,
  					unicodeHex: "\\F0670",
  					cssClass: "ic_refineui_line_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984689,
  					unicodeHex: "\\F0671",
  					cssClass: "ic_refineui_line_20_regular"
  				},
  				filled: {
  					unicode: 984686,
  					unicodeHex: "\\F066E",
  					cssClass: "ic_refineui_line_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984688,
  					unicodeHex: "\\F0670",
  					cssClass: "ic_refineui_line_24_regular"
  				},
  				filled: {
  					unicode: 984689,
  					unicodeHex: "\\F0671",
  					cssClass: "ic_refineui_line_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984685,
  					unicodeHex: "\\F066D",
  					cssClass: "ic_refineui_line_28_regular"
  				},
  				filled: {
  					unicode: 984685,
  					unicodeHex: "\\F066D",
  					cssClass: "ic_refineui_line_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984684,
  					unicodeHex: "\\F066C",
  					cssClass: "ic_refineui_line_32_regular"
  				},
  				filled: {
  					unicode: 984687,
  					unicodeHex: "\\F066F",
  					cssClass: "ic_refineui_line_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984687,
  					unicodeHex: "\\F066F",
  					cssClass: "ic_refineui_line_48_regular"
  				},
  				filled: {
  					unicode: 984684,
  					unicodeHex: "\\F066C",
  					cssClass: "ic_refineui_line_48_filled"
  				}
  			}
  		}
  	},
  	Rhombus: {
  		name: "Rhombus",
  		slug: "rhombus",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in rhombus scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_rhombus_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Rhombus/svg/ic_refineui_rhombus_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rhombus_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Rhombus/svg/ic_refineui_rhombus_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rhombus_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Rhombus/svg/ic_refineui_rhombus_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rhombus_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Rhombus/svg/ic_refineui_rhombus_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rhombus_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Rhombus/svg/ic_refineui_rhombus_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rhombus_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Rhombus/svg/ic_refineui_rhombus_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rhombus_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Rhombus/svg/ic_refineui_rhombus_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rhombus_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Rhombus/svg/ic_refineui_rhombus_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rhombus_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Rhombus/svg/ic_refineui_rhombus_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rhombus_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Rhombus/svg/ic_refineui_rhombus_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rhombus_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Rhombus/svg/ic_refineui_rhombus_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rhombus_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Rhombus/svg/ic_refineui_rhombus_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984699,
  					unicodeHex: "\\F067B",
  					cssClass: "ic_refineui_rhombus_16_regular"
  				},
  				filled: {
  					unicode: 984696,
  					unicodeHex: "\\F0678",
  					cssClass: "ic_refineui_rhombus_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984701,
  					unicodeHex: "\\F067D",
  					cssClass: "ic_refineui_rhombus_20_regular"
  				},
  				filled: {
  					unicode: 984700,
  					unicodeHex: "\\F067C",
  					cssClass: "ic_refineui_rhombus_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984697,
  					unicodeHex: "\\F0679",
  					cssClass: "ic_refineui_rhombus_24_regular"
  				},
  				filled: {
  					unicode: 984697,
  					unicodeHex: "\\F0679",
  					cssClass: "ic_refineui_rhombus_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984700,
  					unicodeHex: "\\F067C",
  					cssClass: "ic_refineui_rhombus_28_regular"
  				},
  				filled: {
  					unicode: 984699,
  					unicodeHex: "\\F067B",
  					cssClass: "ic_refineui_rhombus_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984696,
  					unicodeHex: "\\F0678",
  					cssClass: "ic_refineui_rhombus_32_regular"
  				},
  				filled: {
  					unicode: 984698,
  					unicodeHex: "\\F067A",
  					cssClass: "ic_refineui_rhombus_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984698,
  					unicodeHex: "\\F067A",
  					cssClass: "ic_refineui_rhombus_48_regular"
  				},
  				filled: {
  					unicode: 984701,
  					unicodeHex: "\\F067D",
  					cssClass: "ic_refineui_rhombus_48_filled"
  				}
  			}
  		}
  	},
  	Ruler: {
  		name: "Ruler",
  		slug: "ruler",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in ruler scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_ruler_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Ruler/svg/ic_refineui_ruler_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ruler_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Ruler/svg/ic_refineui_ruler_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ruler_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Ruler/svg/ic_refineui_ruler_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ruler_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Ruler/svg/ic_refineui_ruler_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ruler_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Ruler/svg/ic_refineui_ruler_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ruler_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Ruler/svg/ic_refineui_ruler_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ruler_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Ruler/svg/ic_refineui_ruler_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ruler_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Ruler/svg/ic_refineui_ruler_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ruler_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Ruler/svg/ic_refineui_ruler_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ruler_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Ruler/svg/ic_refineui_ruler_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ruler_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Ruler/svg/ic_refineui_ruler_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ruler_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Ruler/svg/ic_refineui_ruler_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984709,
  					unicodeHex: "\\F0685",
  					cssClass: "ic_refineui_ruler_16_regular"
  				},
  				filled: {
  					unicode: 984713,
  					unicodeHex: "\\F0689",
  					cssClass: "ic_refineui_ruler_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984708,
  					unicodeHex: "\\F0684",
  					cssClass: "ic_refineui_ruler_20_regular"
  				},
  				filled: {
  					unicode: 984709,
  					unicodeHex: "\\F0685",
  					cssClass: "ic_refineui_ruler_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984711,
  					unicodeHex: "\\F0687",
  					cssClass: "ic_refineui_ruler_24_regular"
  				},
  				filled: {
  					unicode: 984712,
  					unicodeHex: "\\F0688",
  					cssClass: "ic_refineui_ruler_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984712,
  					unicodeHex: "\\F0688",
  					cssClass: "ic_refineui_ruler_28_regular"
  				},
  				filled: {
  					unicode: 984710,
  					unicodeHex: "\\F0686",
  					cssClass: "ic_refineui_ruler_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984713,
  					unicodeHex: "\\F0689",
  					cssClass: "ic_refineui_ruler_32_regular"
  				},
  				filled: {
  					unicode: 984711,
  					unicodeHex: "\\F0687",
  					cssClass: "ic_refineui_ruler_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984710,
  					unicodeHex: "\\F0686",
  					cssClass: "ic_refineui_ruler_48_regular"
  				},
  				filled: {
  					unicode: 984708,
  					unicodeHex: "\\F0684",
  					cssClass: "ic_refineui_ruler_48_filled"
  				}
  			}
  		}
  	},
  	Swift: {
  		name: "Swift",
  		slug: "swift",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in swift scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_swift_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Swift/svg/ic_refineui_swift_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_swift_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Swift/svg/ic_refineui_swift_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_swift_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Swift/svg/ic_refineui_swift_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_swift_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Swift/svg/ic_refineui_swift_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_swift_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Swift/svg/ic_refineui_swift_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_swift_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Swift/svg/ic_refineui_swift_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_swift_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Swift/svg/ic_refineui_swift_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_swift_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Swift/svg/ic_refineui_swift_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_swift_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Swift/svg/ic_refineui_swift_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_swift_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Swift/svg/ic_refineui_swift_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_swift_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Swift/svg/ic_refineui_swift_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_swift_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Swift/svg/ic_refineui_swift_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984723,
  					unicodeHex: "\\F0693",
  					cssClass: "ic_refineui_swift_16_regular"
  				},
  				filled: {
  					unicode: 984721,
  					unicodeHex: "\\F0691",
  					cssClass: "ic_refineui_swift_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984720,
  					unicodeHex: "\\F0690",
  					cssClass: "ic_refineui_swift_20_regular"
  				},
  				filled: {
  					unicode: 984723,
  					unicodeHex: "\\F0693",
  					cssClass: "ic_refineui_swift_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984722,
  					unicodeHex: "\\F0692",
  					cssClass: "ic_refineui_swift_24_regular"
  				},
  				filled: {
  					unicode: 984720,
  					unicodeHex: "\\F0690",
  					cssClass: "ic_refineui_swift_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984725,
  					unicodeHex: "\\F0695",
  					cssClass: "ic_refineui_swift_28_regular"
  				},
  				filled: {
  					unicode: 984724,
  					unicodeHex: "\\F0694",
  					cssClass: "ic_refineui_swift_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984721,
  					unicodeHex: "\\F0691",
  					cssClass: "ic_refineui_swift_32_regular"
  				},
  				filled: {
  					unicode: 984722,
  					unicodeHex: "\\F0692",
  					cssClass: "ic_refineui_swift_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984724,
  					unicodeHex: "\\F0694",
  					cssClass: "ic_refineui_swift_48_regular"
  				},
  				filled: {
  					unicode: 984725,
  					unicodeHex: "\\F0695",
  					cssClass: "ic_refineui_swift_48_filled"
  				}
  			}
  		}
  	},
  	Earth: {
  		name: "Earth",
  		slug: "earth",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in earth scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_earth_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Earth/svg/ic_refineui_earth_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_earth_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Earth/svg/ic_refineui_earth_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_earth_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Earth/svg/ic_refineui_earth_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_earth_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Earth/svg/ic_refineui_earth_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_earth_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Earth/svg/ic_refineui_earth_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_earth_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Earth/svg/ic_refineui_earth_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_earth_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Earth/svg/ic_refineui_earth_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_earth_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Earth/svg/ic_refineui_earth_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_earth_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Earth/svg/ic_refineui_earth_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_earth_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Earth/svg/ic_refineui_earth_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_earth_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Earth/svg/ic_refineui_earth_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_earth_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Earth/svg/ic_refineui_earth_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984733,
  					unicodeHex: "\\F069D",
  					cssClass: "ic_refineui_earth_16_regular"
  				},
  				filled: {
  					unicode: 984735,
  					unicodeHex: "\\F069F",
  					cssClass: "ic_refineui_earth_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984737,
  					unicodeHex: "\\F06A1",
  					cssClass: "ic_refineui_earth_20_regular"
  				},
  				filled: {
  					unicode: 984733,
  					unicodeHex: "\\F069D",
  					cssClass: "ic_refineui_earth_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984732,
  					unicodeHex: "\\F069C",
  					cssClass: "ic_refineui_earth_24_regular"
  				},
  				filled: {
  					unicode: 984736,
  					unicodeHex: "\\F06A0",
  					cssClass: "ic_refineui_earth_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984735,
  					unicodeHex: "\\F069F",
  					cssClass: "ic_refineui_earth_28_regular"
  				},
  				filled: {
  					unicode: 984732,
  					unicodeHex: "\\F069C",
  					cssClass: "ic_refineui_earth_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984736,
  					unicodeHex: "\\F06A0",
  					cssClass: "ic_refineui_earth_32_regular"
  				},
  				filled: {
  					unicode: 984737,
  					unicodeHex: "\\F06A1",
  					cssClass: "ic_refineui_earth_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984734,
  					unicodeHex: "\\F069E",
  					cssClass: "ic_refineui_earth_48_regular"
  				},
  				filled: {
  					unicode: 984734,
  					unicodeHex: "\\F069E",
  					cssClass: "ic_refineui_earth_48_filled"
  				}
  			}
  		}
  	},
  	Blur: {
  		name: "Blur",
  		slug: "blur",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in blur scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_blur_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Blur/svg/ic_refineui_blur_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_blur_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Blur/svg/ic_refineui_blur_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_blur_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Blur/svg/ic_refineui_blur_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_blur_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Blur/svg/ic_refineui_blur_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_blur_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Blur/svg/ic_refineui_blur_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_blur_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Blur/svg/ic_refineui_blur_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_blur_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Blur/svg/ic_refineui_blur_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_blur_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Blur/svg/ic_refineui_blur_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_blur_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Blur/svg/ic_refineui_blur_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_blur_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Blur/svg/ic_refineui_blur_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_blur_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Blur/svg/ic_refineui_blur_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_blur_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Blur/svg/ic_refineui_blur_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984760,
  					unicodeHex: "\\F06B8",
  					cssClass: "ic_refineui_blur_16_regular"
  				},
  				filled: {
  					unicode: 984758,
  					unicodeHex: "\\F06B6",
  					cssClass: "ic_refineui_blur_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984761,
  					unicodeHex: "\\F06B9",
  					cssClass: "ic_refineui_blur_20_regular"
  				},
  				filled: {
  					unicode: 984760,
  					unicodeHex: "\\F06B8",
  					cssClass: "ic_refineui_blur_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984758,
  					unicodeHex: "\\F06B6",
  					cssClass: "ic_refineui_blur_24_regular"
  				},
  				filled: {
  					unicode: 984757,
  					unicodeHex: "\\F06B5",
  					cssClass: "ic_refineui_blur_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984757,
  					unicodeHex: "\\F06B5",
  					cssClass: "ic_refineui_blur_28_regular"
  				},
  				filled: {
  					unicode: 984761,
  					unicodeHex: "\\F06B9",
  					cssClass: "ic_refineui_blur_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984756,
  					unicodeHex: "\\F06B4",
  					cssClass: "ic_refineui_blur_32_regular"
  				},
  				filled: {
  					unicode: 984756,
  					unicodeHex: "\\F06B4",
  					cssClass: "ic_refineui_blur_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984759,
  					unicodeHex: "\\F06B7",
  					cssClass: "ic_refineui_blur_48_regular"
  				},
  				filled: {
  					unicode: 984759,
  					unicodeHex: "\\F06B7",
  					cssClass: "ic_refineui_blur_48_filled"
  				}
  			}
  		}
  	},
  	Bluetooth: {
  		name: "Bluetooth",
  		slug: "bluetooth",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in bluetooth scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_bluetooth_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Bluetooth/svg/ic_refineui_bluetooth_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bluetooth_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Bluetooth/svg/ic_refineui_bluetooth_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bluetooth_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Bluetooth/svg/ic_refineui_bluetooth_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bluetooth_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Bluetooth/svg/ic_refineui_bluetooth_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bluetooth_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Bluetooth/svg/ic_refineui_bluetooth_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bluetooth_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Bluetooth/svg/ic_refineui_bluetooth_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bluetooth_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Bluetooth/svg/ic_refineui_bluetooth_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bluetooth_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Bluetooth/svg/ic_refineui_bluetooth_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bluetooth_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Bluetooth/svg/ic_refineui_bluetooth_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bluetooth_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Bluetooth/svg/ic_refineui_bluetooth_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_bluetooth_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Bluetooth/svg/ic_refineui_bluetooth_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_bluetooth_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Bluetooth/svg/ic_refineui_bluetooth_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984776,
  					unicodeHex: "\\F06C8",
  					cssClass: "ic_refineui_bluetooth_16_regular"
  				},
  				filled: {
  					unicode: 984779,
  					unicodeHex: "\\F06CB",
  					cssClass: "ic_refineui_bluetooth_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984774,
  					unicodeHex: "\\F06C6",
  					cssClass: "ic_refineui_bluetooth_20_regular"
  				},
  				filled: {
  					unicode: 984775,
  					unicodeHex: "\\F06C7",
  					cssClass: "ic_refineui_bluetooth_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984778,
  					unicodeHex: "\\F06CA",
  					cssClass: "ic_refineui_bluetooth_24_regular"
  				},
  				filled: {
  					unicode: 984778,
  					unicodeHex: "\\F06CA",
  					cssClass: "ic_refineui_bluetooth_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984775,
  					unicodeHex: "\\F06C7",
  					cssClass: "ic_refineui_bluetooth_28_regular"
  				},
  				filled: {
  					unicode: 984776,
  					unicodeHex: "\\F06C8",
  					cssClass: "ic_refineui_bluetooth_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984779,
  					unicodeHex: "\\F06CB",
  					cssClass: "ic_refineui_bluetooth_32_regular"
  				},
  				filled: {
  					unicode: 984777,
  					unicodeHex: "\\F06C9",
  					cssClass: "ic_refineui_bluetooth_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984777,
  					unicodeHex: "\\F06C9",
  					cssClass: "ic_refineui_bluetooth_48_regular"
  				},
  				filled: {
  					unicode: 984774,
  					unicodeHex: "\\F06C6",
  					cssClass: "ic_refineui_bluetooth_48_filled"
  				}
  			}
  		}
  	},
  	Android: {
  		name: "Android",
  		slug: "android",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in android scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_android_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Android/svg/ic_refineui_android_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_android_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Android/svg/ic_refineui_android_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_android_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Android/svg/ic_refineui_android_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_android_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Android/svg/ic_refineui_android_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_android_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Android/svg/ic_refineui_android_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_android_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Android/svg/ic_refineui_android_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_android_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Android/svg/ic_refineui_android_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_android_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Android/svg/ic_refineui_android_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_android_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Android/svg/ic_refineui_android_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_android_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Android/svg/ic_refineui_android_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_android_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Android/svg/ic_refineui_android_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_android_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Android/svg/ic_refineui_android_24_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984790,
  					unicodeHex: "\\F06D6",
  					cssClass: "ic_refineui_android_16_regular"
  				},
  				filled: {
  					unicode: 984787,
  					unicodeHex: "\\F06D3",
  					cssClass: "ic_refineui_android_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984786,
  					unicodeHex: "\\F06D2",
  					cssClass: "ic_refineui_android_20_regular"
  				},
  				filled: {
  					unicode: 984789,
  					unicodeHex: "\\F06D5",
  					cssClass: "ic_refineui_android_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984791,
  					unicodeHex: "\\F06D7",
  					cssClass: "ic_refineui_android_24_regular"
  				},
  				filled: {
  					unicode: 984786,
  					unicodeHex: "\\F06D2",
  					cssClass: "ic_refineui_android_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984788,
  					unicodeHex: "\\F06D4",
  					cssClass: "ic_refineui_android_28_regular"
  				},
  				filled: {
  					unicode: 984790,
  					unicodeHex: "\\F06D6",
  					cssClass: "ic_refineui_android_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984787,
  					unicodeHex: "\\F06D3",
  					cssClass: "ic_refineui_android_32_regular"
  				},
  				filled: {
  					unicode: 984788,
  					unicodeHex: "\\F06D4",
  					cssClass: "ic_refineui_android_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984789,
  					unicodeHex: "\\F06D5",
  					cssClass: "ic_refineui_android_48_regular"
  				},
  				filled: {
  					unicode: 984791,
  					unicodeHex: "\\F06D7",
  					cssClass: "ic_refineui_android_48_filled"
  				}
  			}
  		}
  	},
  	Airplane: {
  		name: "Airplane",
  		slug: "airplane",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in airplane scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_airplane_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Airplane/svg/ic_refineui_airplane_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_airplane_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Airplane/svg/ic_refineui_airplane_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_airplane_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Airplane/svg/ic_refineui_airplane_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_airplane_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Airplane/svg/ic_refineui_airplane_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_airplane_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Airplane/svg/ic_refineui_airplane_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_airplane_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Airplane/svg/ic_refineui_airplane_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_airplane_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Airplane/svg/ic_refineui_airplane_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_airplane_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Airplane/svg/ic_refineui_airplane_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_airplane_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Airplane/svg/ic_refineui_airplane_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_airplane_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Airplane/svg/ic_refineui_airplane_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_airplane_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Airplane/svg/ic_refineui_airplane_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_airplane_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Airplane/svg/ic_refineui_airplane_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984799,
  					unicodeHex: "\\F06DF",
  					cssClass: "ic_refineui_airplane_16_regular"
  				},
  				filled: {
  					unicode: 984802,
  					unicodeHex: "\\F06E2",
  					cssClass: "ic_refineui_airplane_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984803,
  					unicodeHex: "\\F06E3",
  					cssClass: "ic_refineui_airplane_20_regular"
  				},
  				filled: {
  					unicode: 984798,
  					unicodeHex: "\\F06DE",
  					cssClass: "ic_refineui_airplane_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984801,
  					unicodeHex: "\\F06E1",
  					cssClass: "ic_refineui_airplane_24_regular"
  				},
  				filled: {
  					unicode: 984801,
  					unicodeHex: "\\F06E1",
  					cssClass: "ic_refineui_airplane_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984802,
  					unicodeHex: "\\F06E2",
  					cssClass: "ic_refineui_airplane_28_regular"
  				},
  				filled: {
  					unicode: 984799,
  					unicodeHex: "\\F06DF",
  					cssClass: "ic_refineui_airplane_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984798,
  					unicodeHex: "\\F06DE",
  					cssClass: "ic_refineui_airplane_32_regular"
  				},
  				filled: {
  					unicode: 984803,
  					unicodeHex: "\\F06E3",
  					cssClass: "ic_refineui_airplane_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984800,
  					unicodeHex: "\\F06E0",
  					cssClass: "ic_refineui_airplane_48_regular"
  				},
  				filled: {
  					unicode: 984800,
  					unicodeHex: "\\F06E0",
  					cssClass: "ic_refineui_airplane_48_filled"
  				}
  			}
  		}
  	},
  	Toolbox: {
  		name: "Toolbox",
  		slug: "toolbox",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in toolbox scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_toolbox_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Toolbox/svg/ic_refineui_toolbox_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_toolbox_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Toolbox/svg/ic_refineui_toolbox_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_toolbox_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Toolbox/svg/ic_refineui_toolbox_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_toolbox_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Toolbox/svg/ic_refineui_toolbox_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_toolbox_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Toolbox/svg/ic_refineui_toolbox_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_toolbox_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Toolbox/svg/ic_refineui_toolbox_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_toolbox_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Toolbox/svg/ic_refineui_toolbox_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_toolbox_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Toolbox/svg/ic_refineui_toolbox_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_toolbox_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Toolbox/svg/ic_refineui_toolbox_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_toolbox_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Toolbox/svg/ic_refineui_toolbox_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_toolbox_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Toolbox/svg/ic_refineui_toolbox_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_toolbox_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Toolbox/svg/ic_refineui_toolbox_48_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984808,
  					unicodeHex: "\\F06E8",
  					cssClass: "ic_refineui_toolbox_16_regular"
  				},
  				filled: {
  					unicode: 984808,
  					unicodeHex: "\\F06E8",
  					cssClass: "ic_refineui_toolbox_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984804,
  					unicodeHex: "\\F06E4",
  					cssClass: "ic_refineui_toolbox_20_regular"
  				},
  				filled: {
  					unicode: 984804,
  					unicodeHex: "\\F06E4",
  					cssClass: "ic_refineui_toolbox_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984807,
  					unicodeHex: "\\F06E7",
  					cssClass: "ic_refineui_toolbox_24_regular"
  				},
  				filled: {
  					unicode: 984807,
  					unicodeHex: "\\F06E7",
  					cssClass: "ic_refineui_toolbox_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984806,
  					unicodeHex: "\\F06E6",
  					cssClass: "ic_refineui_toolbox_28_regular"
  				},
  				filled: {
  					unicode: 984805,
  					unicodeHex: "\\F06E5",
  					cssClass: "ic_refineui_toolbox_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984805,
  					unicodeHex: "\\F06E5",
  					cssClass: "ic_refineui_toolbox_32_regular"
  				},
  				filled: {
  					unicode: 984809,
  					unicodeHex: "\\F06E9",
  					cssClass: "ic_refineui_toolbox_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984809,
  					unicodeHex: "\\F06E9",
  					cssClass: "ic_refineui_toolbox_48_regular"
  				},
  				filled: {
  					unicode: 984806,
  					unicodeHex: "\\F06E6",
  					cssClass: "ic_refineui_toolbox_48_filled"
  				}
  			}
  		}
  	},
  	Guest: {
  		name: "Guest",
  		slug: "guest",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in guest scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_guest_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Guest/svg/ic_refineui_guest_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_guest_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Guest/svg/ic_refineui_guest_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_guest_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Guest/svg/ic_refineui_guest_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_guest_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Guest/svg/ic_refineui_guest_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_guest_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Guest/svg/ic_refineui_guest_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_guest_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Guest/svg/ic_refineui_guest_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_guest_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Guest/svg/ic_refineui_guest_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_guest_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Guest/svg/ic_refineui_guest_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_guest_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Guest/svg/ic_refineui_guest_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_guest_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Guest/svg/ic_refineui_guest_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_guest_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Guest/svg/ic_refineui_guest_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_guest_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Guest/svg/ic_refineui_guest_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984812,
  					unicodeHex: "\\F06EC",
  					cssClass: "ic_refineui_guest_16_regular"
  				},
  				filled: {
  					unicode: 984811,
  					unicodeHex: "\\F06EB",
  					cssClass: "ic_refineui_guest_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984815,
  					unicodeHex: "\\F06EF",
  					cssClass: "ic_refineui_guest_20_regular"
  				},
  				filled: {
  					unicode: 984815,
  					unicodeHex: "\\F06EF",
  					cssClass: "ic_refineui_guest_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984813,
  					unicodeHex: "\\F06ED",
  					cssClass: "ic_refineui_guest_24_regular"
  				},
  				filled: {
  					unicode: 984812,
  					unicodeHex: "\\F06EC",
  					cssClass: "ic_refineui_guest_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984814,
  					unicodeHex: "\\F06EE",
  					cssClass: "ic_refineui_guest_28_regular"
  				},
  				filled: {
  					unicode: 984814,
  					unicodeHex: "\\F06EE",
  					cssClass: "ic_refineui_guest_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984810,
  					unicodeHex: "\\F06EA",
  					cssClass: "ic_refineui_guest_32_regular"
  				},
  				filled: {
  					unicode: 984810,
  					unicodeHex: "\\F06EA",
  					cssClass: "ic_refineui_guest_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984811,
  					unicodeHex: "\\F06EB",
  					cssClass: "ic_refineui_guest_48_regular"
  				},
  				filled: {
  					unicode: 984813,
  					unicodeHex: "\\F06ED",
  					cssClass: "ic_refineui_guest_48_filled"
  				}
  			}
  		}
  	},
  	Cloud: {
  		name: "Cloud",
  		slug: "cloud",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in cloud scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_cloud_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Cloud/svg/ic_refineui_cloud_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cloud_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Cloud/svg/ic_refineui_cloud_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cloud_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Cloud/svg/ic_refineui_cloud_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cloud_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Cloud/svg/ic_refineui_cloud_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cloud_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Cloud/svg/ic_refineui_cloud_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cloud_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Cloud/svg/ic_refineui_cloud_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cloud_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Cloud/svg/ic_refineui_cloud_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cloud_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Cloud/svg/ic_refineui_cloud_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cloud_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Cloud/svg/ic_refineui_cloud_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cloud_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Cloud/svg/ic_refineui_cloud_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cloud_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Cloud/svg/ic_refineui_cloud_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cloud_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Cloud/svg/ic_refineui_cloud_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984834,
  					unicodeHex: "\\F0702",
  					cssClass: "ic_refineui_cloud_16_regular"
  				},
  				filled: {
  					unicode: 984839,
  					unicodeHex: "\\F0707",
  					cssClass: "ic_refineui_cloud_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984839,
  					unicodeHex: "\\F0707",
  					cssClass: "ic_refineui_cloud_20_regular"
  				},
  				filled: {
  					unicode: 984835,
  					unicodeHex: "\\F0703",
  					cssClass: "ic_refineui_cloud_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984836,
  					unicodeHex: "\\F0704",
  					cssClass: "ic_refineui_cloud_24_regular"
  				},
  				filled: {
  					unicode: 984838,
  					unicodeHex: "\\F0706",
  					cssClass: "ic_refineui_cloud_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984837,
  					unicodeHex: "\\F0705",
  					cssClass: "ic_refineui_cloud_28_regular"
  				},
  				filled: {
  					unicode: 984836,
  					unicodeHex: "\\F0704",
  					cssClass: "ic_refineui_cloud_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984838,
  					unicodeHex: "\\F0706",
  					cssClass: "ic_refineui_cloud_32_regular"
  				},
  				filled: {
  					unicode: 984837,
  					unicodeHex: "\\F0705",
  					cssClass: "ic_refineui_cloud_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984835,
  					unicodeHex: "\\F0703",
  					cssClass: "ic_refineui_cloud_48_regular"
  				},
  				filled: {
  					unicode: 984834,
  					unicodeHex: "\\F0702",
  					cssClass: "ic_refineui_cloud_48_filled"
  				}
  			}
  		}
  	},
  	Cut: {
  		name: "Cut",
  		slug: "cut",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in cut scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_cut_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Cut/svg/ic_refineui_cut_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cut_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Cut/svg/ic_refineui_cut_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cut_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Cut/svg/ic_refineui_cut_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cut_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Cut/svg/ic_refineui_cut_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cut_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Cut/svg/ic_refineui_cut_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cut_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Cut/svg/ic_refineui_cut_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cut_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Cut/svg/ic_refineui_cut_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cut_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Cut/svg/ic_refineui_cut_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cut_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Cut/svg/ic_refineui_cut_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cut_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Cut/svg/ic_refineui_cut_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cut_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Cut/svg/ic_refineui_cut_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cut_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Cut/svg/ic_refineui_cut_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984854,
  					unicodeHex: "\\F0716",
  					cssClass: "ic_refineui_cut_16_regular"
  				},
  				filled: {
  					unicode: 984853,
  					unicodeHex: "\\F0715",
  					cssClass: "ic_refineui_cut_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984857,
  					unicodeHex: "\\F0719",
  					cssClass: "ic_refineui_cut_20_regular"
  				},
  				filled: {
  					unicode: 984855,
  					unicodeHex: "\\F0717",
  					cssClass: "ic_refineui_cut_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984853,
  					unicodeHex: "\\F0715",
  					cssClass: "ic_refineui_cut_24_regular"
  				},
  				filled: {
  					unicode: 984852,
  					unicodeHex: "\\F0714",
  					cssClass: "ic_refineui_cut_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984852,
  					unicodeHex: "\\F0714",
  					cssClass: "ic_refineui_cut_28_regular"
  				},
  				filled: {
  					unicode: 984856,
  					unicodeHex: "\\F0718",
  					cssClass: "ic_refineui_cut_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984856,
  					unicodeHex: "\\F0718",
  					cssClass: "ic_refineui_cut_32_regular"
  				},
  				filled: {
  					unicode: 984854,
  					unicodeHex: "\\F0716",
  					cssClass: "ic_refineui_cut_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984855,
  					unicodeHex: "\\F0717",
  					cssClass: "ic_refineui_cut_48_regular"
  				},
  				filled: {
  					unicode: 984857,
  					unicodeHex: "\\F0719",
  					cssClass: "ic_refineui_cut_48_filled"
  				}
  			}
  		}
  	},
  	Book: {
  		name: "Book",
  		slug: "book",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in book scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_book_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Book/svg/ic_refineui_book_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_book_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Book/svg/ic_refineui_book_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_book_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Book/svg/ic_refineui_book_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_book_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Book/svg/ic_refineui_book_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_book_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Book/svg/ic_refineui_book_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_book_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Book/svg/ic_refineui_book_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_book_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Book/svg/ic_refineui_book_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_book_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Book/svg/ic_refineui_book_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_book_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Book/svg/ic_refineui_book_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_book_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Book/svg/ic_refineui_book_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_book_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Book/svg/ic_refineui_book_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_book_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Book/svg/ic_refineui_book_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984871,
  					unicodeHex: "\\F0727",
  					cssClass: "ic_refineui_book_16_regular"
  				},
  				filled: {
  					unicode: 984874,
  					unicodeHex: "\\F072A",
  					cssClass: "ic_refineui_book_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984875,
  					unicodeHex: "\\F072B",
  					cssClass: "ic_refineui_book_20_regular"
  				},
  				filled: {
  					unicode: 984870,
  					unicodeHex: "\\F0726",
  					cssClass: "ic_refineui_book_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984873,
  					unicodeHex: "\\F0729",
  					cssClass: "ic_refineui_book_24_regular"
  				},
  				filled: {
  					unicode: 984873,
  					unicodeHex: "\\F0729",
  					cssClass: "ic_refineui_book_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984870,
  					unicodeHex: "\\F0726",
  					cssClass: "ic_refineui_book_28_regular"
  				},
  				filled: {
  					unicode: 984871,
  					unicodeHex: "\\F0727",
  					cssClass: "ic_refineui_book_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984874,
  					unicodeHex: "\\F072A",
  					cssClass: "ic_refineui_book_32_regular"
  				},
  				filled: {
  					unicode: 984875,
  					unicodeHex: "\\F072B",
  					cssClass: "ic_refineui_book_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984872,
  					unicodeHex: "\\F0728",
  					cssClass: "ic_refineui_book_48_regular"
  				},
  				filled: {
  					unicode: 984872,
  					unicodeHex: "\\F0728",
  					cssClass: "ic_refineui_book_48_filled"
  				}
  			}
  		}
  	},
  	Umbrella: {
  		name: "Umbrella",
  		slug: "umbrella",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in umbrella scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_umbrella_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Umbrella/svg/ic_refineui_umbrella_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_umbrella_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Umbrella/svg/ic_refineui_umbrella_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_umbrella_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Umbrella/svg/ic_refineui_umbrella_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_umbrella_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Umbrella/svg/ic_refineui_umbrella_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_umbrella_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Umbrella/svg/ic_refineui_umbrella_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_umbrella_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Umbrella/svg/ic_refineui_umbrella_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_umbrella_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Umbrella/svg/ic_refineui_umbrella_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_umbrella_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Umbrella/svg/ic_refineui_umbrella_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_umbrella_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Umbrella/svg/ic_refineui_umbrella_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_umbrella_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Umbrella/svg/ic_refineui_umbrella_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_umbrella_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Umbrella/svg/ic_refineui_umbrella_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_umbrella_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Umbrella/svg/ic_refineui_umbrella_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984903,
  					unicodeHex: "\\F0747",
  					cssClass: "ic_refineui_umbrella_16_regular"
  				},
  				filled: {
  					unicode: 984901,
  					unicodeHex: "\\F0745",
  					cssClass: "ic_refineui_umbrella_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984900,
  					unicodeHex: "\\F0744",
  					cssClass: "ic_refineui_umbrella_20_regular"
  				},
  				filled: {
  					unicode: 984905,
  					unicodeHex: "\\F0749",
  					cssClass: "ic_refineui_umbrella_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984904,
  					unicodeHex: "\\F0748",
  					cssClass: "ic_refineui_umbrella_24_regular"
  				},
  				filled: {
  					unicode: 984902,
  					unicodeHex: "\\F0746",
  					cssClass: "ic_refineui_umbrella_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984905,
  					unicodeHex: "\\F0749",
  					cssClass: "ic_refineui_umbrella_28_regular"
  				},
  				filled: {
  					unicode: 984904,
  					unicodeHex: "\\F0748",
  					cssClass: "ic_refineui_umbrella_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984901,
  					unicodeHex: "\\F0745",
  					cssClass: "ic_refineui_umbrella_32_regular"
  				},
  				filled: {
  					unicode: 984900,
  					unicodeHex: "\\F0744",
  					cssClass: "ic_refineui_umbrella_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984902,
  					unicodeHex: "\\F0746",
  					cssClass: "ic_refineui_umbrella_48_regular"
  				},
  				filled: {
  					unicode: 984903,
  					unicodeHex: "\\F0747",
  					cssClass: "ic_refineui_umbrella_48_filled"
  				}
  			}
  		}
  	},
  	Wallet: {
  		name: "Wallet",
  		slug: "wallet",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in wallet scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_wallet_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Wallet/svg/ic_refineui_wallet_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wallet_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Wallet/svg/ic_refineui_wallet_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wallet_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Wallet/svg/ic_refineui_wallet_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wallet_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Wallet/svg/ic_refineui_wallet_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wallet_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Wallet/svg/ic_refineui_wallet_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wallet_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Wallet/svg/ic_refineui_wallet_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wallet_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Wallet/svg/ic_refineui_wallet_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wallet_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Wallet/svg/ic_refineui_wallet_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wallet_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Wallet/svg/ic_refineui_wallet_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wallet_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Wallet/svg/ic_refineui_wallet_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wallet_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Wallet/svg/ic_refineui_wallet_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wallet_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Wallet/svg/ic_refineui_wallet_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984909,
  					unicodeHex: "\\F074D",
  					cssClass: "ic_refineui_wallet_16_regular"
  				},
  				filled: {
  					unicode: 984911,
  					unicodeHex: "\\F074F",
  					cssClass: "ic_refineui_wallet_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984906,
  					unicodeHex: "\\F074A",
  					cssClass: "ic_refineui_wallet_20_regular"
  				},
  				filled: {
  					unicode: 984907,
  					unicodeHex: "\\F074B",
  					cssClass: "ic_refineui_wallet_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984908,
  					unicodeHex: "\\F074C",
  					cssClass: "ic_refineui_wallet_24_regular"
  				},
  				filled: {
  					unicode: 984910,
  					unicodeHex: "\\F074E",
  					cssClass: "ic_refineui_wallet_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984911,
  					unicodeHex: "\\F074F",
  					cssClass: "ic_refineui_wallet_28_regular"
  				},
  				filled: {
  					unicode: 984908,
  					unicodeHex: "\\F074C",
  					cssClass: "ic_refineui_wallet_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984907,
  					unicodeHex: "\\F074B",
  					cssClass: "ic_refineui_wallet_32_regular"
  				},
  				filled: {
  					unicode: 984909,
  					unicodeHex: "\\F074D",
  					cssClass: "ic_refineui_wallet_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984910,
  					unicodeHex: "\\F074E",
  					cssClass: "ic_refineui_wallet_48_regular"
  				},
  				filled: {
  					unicode: 984906,
  					unicodeHex: "\\F074A",
  					cssClass: "ic_refineui_wallet_48_filled"
  				}
  			}
  		}
  	},
  	Cart: {
  		name: "Cart",
  		slug: "cart",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in cart scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_cart_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Cart/svg/ic_refineui_cart_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cart_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Cart/svg/ic_refineui_cart_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cart_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Cart/svg/ic_refineui_cart_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cart_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Cart/svg/ic_refineui_cart_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cart_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Cart/svg/ic_refineui_cart_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cart_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Cart/svg/ic_refineui_cart_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cart_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Cart/svg/ic_refineui_cart_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cart_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Cart/svg/ic_refineui_cart_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cart_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Cart/svg/ic_refineui_cart_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cart_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Cart/svg/ic_refineui_cart_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cart_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Cart/svg/ic_refineui_cart_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cart_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Cart/svg/ic_refineui_cart_48_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984916,
  					unicodeHex: "\\F0754",
  					cssClass: "ic_refineui_cart_16_regular"
  				},
  				filled: {
  					unicode: 984913,
  					unicodeHex: "\\F0751",
  					cssClass: "ic_refineui_cart_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984912,
  					unicodeHex: "\\F0750",
  					cssClass: "ic_refineui_cart_20_regular"
  				},
  				filled: {
  					unicode: 984915,
  					unicodeHex: "\\F0753",
  					cssClass: "ic_refineui_cart_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984915,
  					unicodeHex: "\\F0753",
  					cssClass: "ic_refineui_cart_24_regular"
  				},
  				filled: {
  					unicode: 984912,
  					unicodeHex: "\\F0750",
  					cssClass: "ic_refineui_cart_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984914,
  					unicodeHex: "\\F0752",
  					cssClass: "ic_refineui_cart_28_regular"
  				},
  				filled: {
  					unicode: 984916,
  					unicodeHex: "\\F0754",
  					cssClass: "ic_refineui_cart_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984913,
  					unicodeHex: "\\F0751",
  					cssClass: "ic_refineui_cart_32_regular"
  				},
  				filled: {
  					unicode: 984914,
  					unicodeHex: "\\F0752",
  					cssClass: "ic_refineui_cart_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984917,
  					unicodeHex: "\\F0755",
  					cssClass: "ic_refineui_cart_48_regular"
  				},
  				filled: {
  					unicode: 984917,
  					unicodeHex: "\\F0755",
  					cssClass: "ic_refineui_cart_48_filled"
  				}
  			}
  		}
  	},
  	Phone: {
  		name: "Phone",
  		slug: "phone",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in phone scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_phone_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Phone/svg/ic_refineui_phone_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_phone_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Phone/svg/ic_refineui_phone_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_phone_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Phone/svg/ic_refineui_phone_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_phone_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Phone/svg/ic_refineui_phone_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_phone_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Phone/svg/ic_refineui_phone_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_phone_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Phone/svg/ic_refineui_phone_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_phone_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Phone/svg/ic_refineui_phone_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_phone_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Phone/svg/ic_refineui_phone_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_phone_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Phone/svg/ic_refineui_phone_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_phone_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Phone/svg/ic_refineui_phone_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_phone_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Phone/svg/ic_refineui_phone_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_phone_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Phone/svg/ic_refineui_phone_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984921,
  					unicodeHex: "\\F0759",
  					cssClass: "ic_refineui_phone_16_regular"
  				},
  				filled: {
  					unicode: 984918,
  					unicodeHex: "\\F0756",
  					cssClass: "ic_refineui_phone_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984918,
  					unicodeHex: "\\F0756",
  					cssClass: "ic_refineui_phone_20_regular"
  				},
  				filled: {
  					unicode: 984922,
  					unicodeHex: "\\F075A",
  					cssClass: "ic_refineui_phone_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984920,
  					unicodeHex: "\\F0758",
  					cssClass: "ic_refineui_phone_24_regular"
  				},
  				filled: {
  					unicode: 984919,
  					unicodeHex: "\\F0757",
  					cssClass: "ic_refineui_phone_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984923,
  					unicodeHex: "\\F075B",
  					cssClass: "ic_refineui_phone_28_regular"
  				},
  				filled: {
  					unicode: 984921,
  					unicodeHex: "\\F0759",
  					cssClass: "ic_refineui_phone_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984919,
  					unicodeHex: "\\F0757",
  					cssClass: "ic_refineui_phone_32_regular"
  				},
  				filled: {
  					unicode: 984920,
  					unicodeHex: "\\F0758",
  					cssClass: "ic_refineui_phone_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984922,
  					unicodeHex: "\\F075A",
  					cssClass: "ic_refineui_phone_48_regular"
  				},
  				filled: {
  					unicode: 984923,
  					unicodeHex: "\\F075B",
  					cssClass: "ic_refineui_phone_48_filled"
  				}
  			}
  		}
  	},
  	Padding: {
  		name: "Padding",
  		slug: "padding",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in padding scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_padding_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Padding/svg/ic_refineui_padding_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_padding_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Padding/svg/ic_refineui_padding_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_padding_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Padding/svg/ic_refineui_padding_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_padding_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Padding/svg/ic_refineui_padding_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_padding_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Padding/svg/ic_refineui_padding_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_padding_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Padding/svg/ic_refineui_padding_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_padding_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Padding/svg/ic_refineui_padding_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_padding_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Padding/svg/ic_refineui_padding_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_padding_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Padding/svg/ic_refineui_padding_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_padding_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Padding/svg/ic_refineui_padding_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_padding_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Padding/svg/ic_refineui_padding_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_padding_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Padding/svg/ic_refineui_padding_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984927,
  					unicodeHex: "\\F075F",
  					cssClass: "ic_refineui_padding_16_regular"
  				},
  				filled: {
  					unicode: 984924,
  					unicodeHex: "\\F075C",
  					cssClass: "ic_refineui_padding_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984924,
  					unicodeHex: "\\F075C",
  					cssClass: "ic_refineui_padding_20_regular"
  				},
  				filled: {
  					unicode: 984928,
  					unicodeHex: "\\F0760",
  					cssClass: "ic_refineui_padding_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984928,
  					unicodeHex: "\\F0760",
  					cssClass: "ic_refineui_padding_24_regular"
  				},
  				filled: {
  					unicode: 984925,
  					unicodeHex: "\\F075D",
  					cssClass: "ic_refineui_padding_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984925,
  					unicodeHex: "\\F075D",
  					cssClass: "ic_refineui_padding_28_regular"
  				},
  				filled: {
  					unicode: 984927,
  					unicodeHex: "\\F075F",
  					cssClass: "ic_refineui_padding_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984929,
  					unicodeHex: "\\F0761",
  					cssClass: "ic_refineui_padding_32_regular"
  				},
  				filled: {
  					unicode: 984926,
  					unicodeHex: "\\F075E",
  					cssClass: "ic_refineui_padding_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984926,
  					unicodeHex: "\\F075E",
  					cssClass: "ic_refineui_padding_48_regular"
  				},
  				filled: {
  					unicode: 984929,
  					unicodeHex: "\\F0761",
  					cssClass: "ic_refineui_padding_48_filled"
  				}
  			}
  		}
  	},
  	Zoom: {
  		name: "Zoom",
  		slug: "zoom",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in zoom scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_zoom_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Zoom/svg/ic_refineui_zoom_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_zoom_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Zoom/svg/ic_refineui_zoom_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_zoom_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Zoom/svg/ic_refineui_zoom_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_zoom_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Zoom/svg/ic_refineui_zoom_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_zoom_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Zoom/svg/ic_refineui_zoom_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_zoom_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Zoom/svg/ic_refineui_zoom_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_zoom_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Zoom/svg/ic_refineui_zoom_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_zoom_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Zoom/svg/ic_refineui_zoom_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_zoom_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Zoom/svg/ic_refineui_zoom_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_zoom_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Zoom/svg/ic_refineui_zoom_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_zoom_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Zoom/svg/ic_refineui_zoom_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_zoom_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Zoom/svg/ic_refineui_zoom_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984933,
  					unicodeHex: "\\F0765",
  					cssClass: "ic_refineui_zoom_16_regular"
  				},
  				filled: {
  					unicode: 984933,
  					unicodeHex: "\\F0765",
  					cssClass: "ic_refineui_zoom_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984935,
  					unicodeHex: "\\F0767",
  					cssClass: "ic_refineui_zoom_20_regular"
  				},
  				filled: {
  					unicode: 984931,
  					unicodeHex: "\\F0763",
  					cssClass: "ic_refineui_zoom_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984934,
  					unicodeHex: "\\F0766",
  					cssClass: "ic_refineui_zoom_24_regular"
  				},
  				filled: {
  					unicode: 984934,
  					unicodeHex: "\\F0766",
  					cssClass: "ic_refineui_zoom_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984931,
  					unicodeHex: "\\F0763",
  					cssClass: "ic_refineui_zoom_28_regular"
  				},
  				filled: {
  					unicode: 984930,
  					unicodeHex: "\\F0762",
  					cssClass: "ic_refineui_zoom_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984930,
  					unicodeHex: "\\F0762",
  					cssClass: "ic_refineui_zoom_32_regular"
  				},
  				filled: {
  					unicode: 984935,
  					unicodeHex: "\\F0767",
  					cssClass: "ic_refineui_zoom_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984932,
  					unicodeHex: "\\F0764",
  					cssClass: "ic_refineui_zoom_48_regular"
  				},
  				filled: {
  					unicode: 984932,
  					unicodeHex: "\\F0764",
  					cssClass: "ic_refineui_zoom_48_filled"
  				}
  			}
  		}
  	},
  	Ticket: {
  		name: "Ticket",
  		slug: "ticket",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in ticket scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_ticket_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Ticket/svg/ic_refineui_ticket_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ticket_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Ticket/svg/ic_refineui_ticket_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ticket_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Ticket/svg/ic_refineui_ticket_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ticket_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Ticket/svg/ic_refineui_ticket_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ticket_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Ticket/svg/ic_refineui_ticket_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ticket_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Ticket/svg/ic_refineui_ticket_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ticket_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Ticket/svg/ic_refineui_ticket_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ticket_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Ticket/svg/ic_refineui_ticket_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ticket_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Ticket/svg/ic_refineui_ticket_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ticket_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Ticket/svg/ic_refineui_ticket_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ticket_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Ticket/svg/ic_refineui_ticket_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ticket_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Ticket/svg/ic_refineui_ticket_24_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984946,
  					unicodeHex: "\\F0772",
  					cssClass: "ic_refineui_ticket_16_regular"
  				},
  				filled: {
  					unicode: 984942,
  					unicodeHex: "\\F076E",
  					cssClass: "ic_refineui_ticket_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984942,
  					unicodeHex: "\\F076E",
  					cssClass: "ic_refineui_ticket_20_regular"
  				},
  				filled: {
  					unicode: 984946,
  					unicodeHex: "\\F0772",
  					cssClass: "ic_refineui_ticket_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984947,
  					unicodeHex: "\\F0773",
  					cssClass: "ic_refineui_ticket_24_regular"
  				},
  				filled: {
  					unicode: 984943,
  					unicodeHex: "\\F076F",
  					cssClass: "ic_refineui_ticket_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984944,
  					unicodeHex: "\\F0770",
  					cssClass: "ic_refineui_ticket_28_regular"
  				},
  				filled: {
  					unicode: 984945,
  					unicodeHex: "\\F0771",
  					cssClass: "ic_refineui_ticket_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984943,
  					unicodeHex: "\\F076F",
  					cssClass: "ic_refineui_ticket_32_regular"
  				},
  				filled: {
  					unicode: 984944,
  					unicodeHex: "\\F0770",
  					cssClass: "ic_refineui_ticket_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984945,
  					unicodeHex: "\\F0771",
  					cssClass: "ic_refineui_ticket_48_regular"
  				},
  				filled: {
  					unicode: 984947,
  					unicodeHex: "\\F0773",
  					cssClass: "ic_refineui_ticket_48_filled"
  				}
  			}
  		}
  	},
  	Equal: {
  		name: "Equal",
  		slug: "equal",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in equal scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_equal_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Equal/svg/ic_refineui_equal_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_equal_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Equal/svg/ic_refineui_equal_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_equal_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Equal/svg/ic_refineui_equal_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_equal_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Equal/svg/ic_refineui_equal_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_equal_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Equal/svg/ic_refineui_equal_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_equal_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Equal/svg/ic_refineui_equal_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_equal_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Equal/svg/ic_refineui_equal_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_equal_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Equal/svg/ic_refineui_equal_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_equal_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Equal/svg/ic_refineui_equal_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_equal_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Equal/svg/ic_refineui_equal_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_equal_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Equal/svg/ic_refineui_equal_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_equal_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Equal/svg/ic_refineui_equal_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984949,
  					unicodeHex: "\\F0775",
  					cssClass: "ic_refineui_equal_16_regular"
  				},
  				filled: {
  					unicode: 984949,
  					unicodeHex: "\\F0775",
  					cssClass: "ic_refineui_equal_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984953,
  					unicodeHex: "\\F0779",
  					cssClass: "ic_refineui_equal_20_regular"
  				},
  				filled: {
  					unicode: 984953,
  					unicodeHex: "\\F0779",
  					cssClass: "ic_refineui_equal_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984948,
  					unicodeHex: "\\F0774",
  					cssClass: "ic_refineui_equal_24_regular"
  				},
  				filled: {
  					unicode: 984950,
  					unicodeHex: "\\F0776",
  					cssClass: "ic_refineui_equal_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984951,
  					unicodeHex: "\\F0777",
  					cssClass: "ic_refineui_equal_28_regular"
  				},
  				filled: {
  					unicode: 984952,
  					unicodeHex: "\\F0778",
  					cssClass: "ic_refineui_equal_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984952,
  					unicodeHex: "\\F0778",
  					cssClass: "ic_refineui_equal_32_regular"
  				},
  				filled: {
  					unicode: 984948,
  					unicodeHex: "\\F0774",
  					cssClass: "ic_refineui_equal_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984950,
  					unicodeHex: "\\F0776",
  					cssClass: "ic_refineui_equal_48_regular"
  				},
  				filled: {
  					unicode: 984951,
  					unicodeHex: "\\F0777",
  					cssClass: "ic_refineui_equal_48_filled"
  				}
  			}
  		}
  	},
  	Backspace: {
  		name: "Backspace",
  		slug: "backspace",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in backspace scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_backspace_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Backspace/svg/ic_refineui_backspace_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_backspace_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Backspace/svg/ic_refineui_backspace_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_backspace_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Backspace/svg/ic_refineui_backspace_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_backspace_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Backspace/svg/ic_refineui_backspace_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_backspace_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Backspace/svg/ic_refineui_backspace_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_backspace_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Backspace/svg/ic_refineui_backspace_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_backspace_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Backspace/svg/ic_refineui_backspace_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_backspace_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Backspace/svg/ic_refineui_backspace_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_backspace_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Backspace/svg/ic_refineui_backspace_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_backspace_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Backspace/svg/ic_refineui_backspace_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_backspace_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Backspace/svg/ic_refineui_backspace_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_backspace_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Backspace/svg/ic_refineui_backspace_16_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984959,
  					unicodeHex: "\\F077F",
  					cssClass: "ic_refineui_backspace_16_regular"
  				},
  				filled: {
  					unicode: 984957,
  					unicodeHex: "\\F077D",
  					cssClass: "ic_refineui_backspace_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984954,
  					unicodeHex: "\\F077A",
  					cssClass: "ic_refineui_backspace_20_regular"
  				},
  				filled: {
  					unicode: 984955,
  					unicodeHex: "\\F077B",
  					cssClass: "ic_refineui_backspace_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984957,
  					unicodeHex: "\\F077D",
  					cssClass: "ic_refineui_backspace_24_regular"
  				},
  				filled: {
  					unicode: 984958,
  					unicodeHex: "\\F077E",
  					cssClass: "ic_refineui_backspace_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984956,
  					unicodeHex: "\\F077C",
  					cssClass: "ic_refineui_backspace_28_regular"
  				},
  				filled: {
  					unicode: 984954,
  					unicodeHex: "\\F077A",
  					cssClass: "ic_refineui_backspace_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984955,
  					unicodeHex: "\\F077B",
  					cssClass: "ic_refineui_backspace_32_regular"
  				},
  				filled: {
  					unicode: 984959,
  					unicodeHex: "\\F077F",
  					cssClass: "ic_refineui_backspace_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984958,
  					unicodeHex: "\\F077E",
  					cssClass: "ic_refineui_backspace_48_regular"
  				},
  				filled: {
  					unicode: 984956,
  					unicodeHex: "\\F077C",
  					cssClass: "ic_refineui_backspace_48_filled"
  				}
  			}
  		}
  	},
  	Chess: {
  		name: "Chess",
  		slug: "chess",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in chess scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_chess_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Chess/svg/ic_refineui_chess_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chess_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Chess/svg/ic_refineui_chess_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chess_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Chess/svg/ic_refineui_chess_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chess_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Chess/svg/ic_refineui_chess_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chess_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Chess/svg/ic_refineui_chess_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chess_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Chess/svg/ic_refineui_chess_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chess_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Chess/svg/ic_refineui_chess_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chess_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Chess/svg/ic_refineui_chess_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chess_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Chess/svg/ic_refineui_chess_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chess_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Chess/svg/ic_refineui_chess_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_chess_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Chess/svg/ic_refineui_chess_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_chess_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Chess/svg/ic_refineui_chess_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984963,
  					unicodeHex: "\\F0783",
  					cssClass: "ic_refineui_chess_16_regular"
  				},
  				filled: {
  					unicode: 984964,
  					unicodeHex: "\\F0784",
  					cssClass: "ic_refineui_chess_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984960,
  					unicodeHex: "\\F0780",
  					cssClass: "ic_refineui_chess_20_regular"
  				},
  				filled: {
  					unicode: 984962,
  					unicodeHex: "\\F0782",
  					cssClass: "ic_refineui_chess_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984961,
  					unicodeHex: "\\F0781",
  					cssClass: "ic_refineui_chess_24_regular"
  				},
  				filled: {
  					unicode: 984965,
  					unicodeHex: "\\F0785",
  					cssClass: "ic_refineui_chess_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984964,
  					unicodeHex: "\\F0784",
  					cssClass: "ic_refineui_chess_28_regular"
  				},
  				filled: {
  					unicode: 984961,
  					unicodeHex: "\\F0781",
  					cssClass: "ic_refineui_chess_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984965,
  					unicodeHex: "\\F0785",
  					cssClass: "ic_refineui_chess_32_regular"
  				},
  				filled: {
  					unicode: 984963,
  					unicodeHex: "\\F0783",
  					cssClass: "ic_refineui_chess_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984962,
  					unicodeHex: "\\F0782",
  					cssClass: "ic_refineui_chess_48_regular"
  				},
  				filled: {
  					unicode: 984960,
  					unicodeHex: "\\F0780",
  					cssClass: "ic_refineui_chess_48_filled"
  				}
  			}
  		}
  	},
  	Flashlight: {
  		name: "Flashlight",
  		slug: "flashlight",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in flashlight scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_flashlight_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Flashlight/svg/ic_refineui_flashlight_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flashlight_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Flashlight/svg/ic_refineui_flashlight_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flashlight_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Flashlight/svg/ic_refineui_flashlight_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flashlight_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Flashlight/svg/ic_refineui_flashlight_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flashlight_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Flashlight/svg/ic_refineui_flashlight_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flashlight_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Flashlight/svg/ic_refineui_flashlight_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flashlight_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Flashlight/svg/ic_refineui_flashlight_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flashlight_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Flashlight/svg/ic_refineui_flashlight_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flashlight_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Flashlight/svg/ic_refineui_flashlight_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flashlight_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Flashlight/svg/ic_refineui_flashlight_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_flashlight_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Flashlight/svg/ic_refineui_flashlight_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_flashlight_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Flashlight/svg/ic_refineui_flashlight_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 984992,
  					unicodeHex: "\\F07A0",
  					cssClass: "ic_refineui_flashlight_16_regular"
  				},
  				filled: {
  					unicode: 984991,
  					unicodeHex: "\\F079F",
  					cssClass: "ic_refineui_flashlight_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 984990,
  					unicodeHex: "\\F079E",
  					cssClass: "ic_refineui_flashlight_20_regular"
  				},
  				filled: {
  					unicode: 984993,
  					unicodeHex: "\\F07A1",
  					cssClass: "ic_refineui_flashlight_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 984991,
  					unicodeHex: "\\F079F",
  					cssClass: "ic_refineui_flashlight_24_regular"
  				},
  				filled: {
  					unicode: 984990,
  					unicodeHex: "\\F079E",
  					cssClass: "ic_refineui_flashlight_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 984994,
  					unicodeHex: "\\F07A2",
  					cssClass: "ic_refineui_flashlight_28_regular"
  				},
  				filled: {
  					unicode: 984994,
  					unicodeHex: "\\F07A2",
  					cssClass: "ic_refineui_flashlight_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 984995,
  					unicodeHex: "\\F07A3",
  					cssClass: "ic_refineui_flashlight_32_regular"
  				},
  				filled: {
  					unicode: 984992,
  					unicodeHex: "\\F07A0",
  					cssClass: "ic_refineui_flashlight_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 984993,
  					unicodeHex: "\\F07A1",
  					cssClass: "ic_refineui_flashlight_48_regular"
  				},
  				filled: {
  					unicode: 984995,
  					unicodeHex: "\\F07A3",
  					cssClass: "ic_refineui_flashlight_48_filled"
  				}
  			}
  		}
  	},
  	Kiosk: {
  		name: "Kiosk",
  		slug: "kiosk",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in kiosk scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_kiosk_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Kiosk/svg/ic_refineui_kiosk_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_kiosk_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Kiosk/svg/ic_refineui_kiosk_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_kiosk_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Kiosk/svg/ic_refineui_kiosk_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_kiosk_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Kiosk/svg/ic_refineui_kiosk_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_kiosk_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Kiosk/svg/ic_refineui_kiosk_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_kiosk_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Kiosk/svg/ic_refineui_kiosk_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_kiosk_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Kiosk/svg/ic_refineui_kiosk_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_kiosk_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Kiosk/svg/ic_refineui_kiosk_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_kiosk_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Kiosk/svg/ic_refineui_kiosk_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_kiosk_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Kiosk/svg/ic_refineui_kiosk_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_kiosk_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Kiosk/svg/ic_refineui_kiosk_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_kiosk_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Kiosk/svg/ic_refineui_kiosk_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985027,
  					unicodeHex: "\\F07C3",
  					cssClass: "ic_refineui_kiosk_16_regular"
  				},
  				filled: {
  					unicode: 985031,
  					unicodeHex: "\\F07C7",
  					cssClass: "ic_refineui_kiosk_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985031,
  					unicodeHex: "\\F07C7",
  					cssClass: "ic_refineui_kiosk_20_regular"
  				},
  				filled: {
  					unicode: 985027,
  					unicodeHex: "\\F07C3",
  					cssClass: "ic_refineui_kiosk_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985026,
  					unicodeHex: "\\F07C2",
  					cssClass: "ic_refineui_kiosk_24_regular"
  				},
  				filled: {
  					unicode: 985030,
  					unicodeHex: "\\F07C6",
  					cssClass: "ic_refineui_kiosk_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985029,
  					unicodeHex: "\\F07C5",
  					cssClass: "ic_refineui_kiosk_28_regular"
  				},
  				filled: {
  					unicode: 985028,
  					unicodeHex: "\\F07C4",
  					cssClass: "ic_refineui_kiosk_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985030,
  					unicodeHex: "\\F07C6",
  					cssClass: "ic_refineui_kiosk_32_regular"
  				},
  				filled: {
  					unicode: 985029,
  					unicodeHex: "\\F07C5",
  					cssClass: "ic_refineui_kiosk_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985028,
  					unicodeHex: "\\F07C4",
  					cssClass: "ic_refineui_kiosk_48_regular"
  				},
  				filled: {
  					unicode: 985026,
  					unicodeHex: "\\F07C2",
  					cssClass: "ic_refineui_kiosk_48_filled"
  				}
  			}
  		}
  	},
  	Copy: {
  		name: "Copy",
  		slug: "copy",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in copy scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_copy_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Copy/svg/ic_refineui_copy_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_copy_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Copy/svg/ic_refineui_copy_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_copy_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Copy/svg/ic_refineui_copy_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_copy_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Copy/svg/ic_refineui_copy_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_copy_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Copy/svg/ic_refineui_copy_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_copy_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Copy/svg/ic_refineui_copy_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_copy_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Copy/svg/ic_refineui_copy_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_copy_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Copy/svg/ic_refineui_copy_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_copy_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Copy/svg/ic_refineui_copy_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_copy_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Copy/svg/ic_refineui_copy_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_copy_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Copy/svg/ic_refineui_copy_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_copy_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Copy/svg/ic_refineui_copy_28_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985040,
  					unicodeHex: "\\F07D0",
  					cssClass: "ic_refineui_copy_16_regular"
  				},
  				filled: {
  					unicode: 985040,
  					unicodeHex: "\\F07D0",
  					cssClass: "ic_refineui_copy_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985043,
  					unicodeHex: "\\F07D3",
  					cssClass: "ic_refineui_copy_20_regular"
  				},
  				filled: {
  					unicode: 985042,
  					unicodeHex: "\\F07D2",
  					cssClass: "ic_refineui_copy_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985039,
  					unicodeHex: "\\F07CF",
  					cssClass: "ic_refineui_copy_24_regular"
  				},
  				filled: {
  					unicode: 985039,
  					unicodeHex: "\\F07CF",
  					cssClass: "ic_refineui_copy_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985038,
  					unicodeHex: "\\F07CE",
  					cssClass: "ic_refineui_copy_28_regular"
  				},
  				filled: {
  					unicode: 985043,
  					unicodeHex: "\\F07D3",
  					cssClass: "ic_refineui_copy_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985042,
  					unicodeHex: "\\F07D2",
  					cssClass: "ic_refineui_copy_32_regular"
  				},
  				filled: {
  					unicode: 985038,
  					unicodeHex: "\\F07CE",
  					cssClass: "ic_refineui_copy_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985041,
  					unicodeHex: "\\F07D1",
  					cssClass: "ic_refineui_copy_48_regular"
  				},
  				filled: {
  					unicode: 985041,
  					unicodeHex: "\\F07D1",
  					cssClass: "ic_refineui_copy_48_filled"
  				}
  			}
  		}
  	},
  	Circle: {
  		name: "Circle",
  		slug: "circle",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in circle scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_circle_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Circle/svg/ic_refineui_circle_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_circle_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Circle/svg/ic_refineui_circle_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_circle_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Circle/svg/ic_refineui_circle_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_circle_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Circle/svg/ic_refineui_circle_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_circle_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Circle/svg/ic_refineui_circle_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_circle_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Circle/svg/ic_refineui_circle_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_circle_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Circle/svg/ic_refineui_circle_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_circle_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Circle/svg/ic_refineui_circle_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_circle_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Circle/svg/ic_refineui_circle_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_circle_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Circle/svg/ic_refineui_circle_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_circle_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Circle/svg/ic_refineui_circle_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_circle_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Circle/svg/ic_refineui_circle_28_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985046,
  					unicodeHex: "\\F07D6",
  					cssClass: "ic_refineui_circle_16_regular"
  				},
  				filled: {
  					unicode: 985046,
  					unicodeHex: "\\F07D6",
  					cssClass: "ic_refineui_circle_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985049,
  					unicodeHex: "\\F07D9",
  					cssClass: "ic_refineui_circle_20_regular"
  				},
  				filled: {
  					unicode: 985048,
  					unicodeHex: "\\F07D8",
  					cssClass: "ic_refineui_circle_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985045,
  					unicodeHex: "\\F07D5",
  					cssClass: "ic_refineui_circle_24_regular"
  				},
  				filled: {
  					unicode: 985045,
  					unicodeHex: "\\F07D5",
  					cssClass: "ic_refineui_circle_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985048,
  					unicodeHex: "\\F07D8",
  					cssClass: "ic_refineui_circle_28_regular"
  				},
  				filled: {
  					unicode: 985049,
  					unicodeHex: "\\F07D9",
  					cssClass: "ic_refineui_circle_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985044,
  					unicodeHex: "\\F07D4",
  					cssClass: "ic_refineui_circle_32_regular"
  				},
  				filled: {
  					unicode: 985044,
  					unicodeHex: "\\F07D4",
  					cssClass: "ic_refineui_circle_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985047,
  					unicodeHex: "\\F07D7",
  					cssClass: "ic_refineui_circle_48_regular"
  				},
  				filled: {
  					unicode: 985047,
  					unicodeHex: "\\F07D7",
  					cssClass: "ic_refineui_circle_48_filled"
  				}
  			}
  		}
  	},
  	Dialpad: {
  		name: "Dialpad",
  		slug: "dialpad",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in dialpad scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_dialpad_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Dialpad/svg/ic_refineui_dialpad_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dialpad_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Dialpad/svg/ic_refineui_dialpad_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dialpad_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Dialpad/svg/ic_refineui_dialpad_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dialpad_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Dialpad/svg/ic_refineui_dialpad_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dialpad_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Dialpad/svg/ic_refineui_dialpad_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dialpad_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Dialpad/svg/ic_refineui_dialpad_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dialpad_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Dialpad/svg/ic_refineui_dialpad_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dialpad_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Dialpad/svg/ic_refineui_dialpad_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dialpad_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Dialpad/svg/ic_refineui_dialpad_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dialpad_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Dialpad/svg/ic_refineui_dialpad_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dialpad_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Dialpad/svg/ic_refineui_dialpad_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dialpad_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Dialpad/svg/ic_refineui_dialpad_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985059,
  					unicodeHex: "\\F07E3",
  					cssClass: "ic_refineui_dialpad_16_regular"
  				},
  				filled: {
  					unicode: 985057,
  					unicodeHex: "\\F07E1",
  					cssClass: "ic_refineui_dialpad_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985056,
  					unicodeHex: "\\F07E0",
  					cssClass: "ic_refineui_dialpad_20_regular"
  				},
  				filled: {
  					unicode: 985059,
  					unicodeHex: "\\F07E3",
  					cssClass: "ic_refineui_dialpad_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985058,
  					unicodeHex: "\\F07E2",
  					cssClass: "ic_refineui_dialpad_24_regular"
  				},
  				filled: {
  					unicode: 985056,
  					unicodeHex: "\\F07E0",
  					cssClass: "ic_refineui_dialpad_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985057,
  					unicodeHex: "\\F07E1",
  					cssClass: "ic_refineui_dialpad_28_regular"
  				},
  				filled: {
  					unicode: 985060,
  					unicodeHex: "\\F07E4",
  					cssClass: "ic_refineui_dialpad_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985061,
  					unicodeHex: "\\F07E5",
  					cssClass: "ic_refineui_dialpad_32_regular"
  				},
  				filled: {
  					unicode: 985058,
  					unicodeHex: "\\F07E2",
  					cssClass: "ic_refineui_dialpad_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985060,
  					unicodeHex: "\\F07E4",
  					cssClass: "ic_refineui_dialpad_48_regular"
  				},
  				filled: {
  					unicode: 985061,
  					unicodeHex: "\\F07E5",
  					cssClass: "ic_refineui_dialpad_48_filled"
  				}
  			}
  		}
  	},
  	Voicemail: {
  		name: "Voicemail",
  		slug: "voicemail",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in voicemail scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_voicemail_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Voicemail/svg/ic_refineui_voicemail_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_voicemail_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Voicemail/svg/ic_refineui_voicemail_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_voicemail_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Voicemail/svg/ic_refineui_voicemail_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_voicemail_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Voicemail/svg/ic_refineui_voicemail_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_voicemail_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Voicemail/svg/ic_refineui_voicemail_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_voicemail_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Voicemail/svg/ic_refineui_voicemail_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_voicemail_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Voicemail/svg/ic_refineui_voicemail_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_voicemail_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Voicemail/svg/ic_refineui_voicemail_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_voicemail_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Voicemail/svg/ic_refineui_voicemail_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_voicemail_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Voicemail/svg/ic_refineui_voicemail_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_voicemail_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Voicemail/svg/ic_refineui_voicemail_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_voicemail_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Voicemail/svg/ic_refineui_voicemail_28_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985070,
  					unicodeHex: "\\F07EE",
  					cssClass: "ic_refineui_voicemail_16_regular"
  				},
  				filled: {
  					unicode: 985070,
  					unicodeHex: "\\F07EE",
  					cssClass: "ic_refineui_voicemail_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985073,
  					unicodeHex: "\\F07F1",
  					cssClass: "ic_refineui_voicemail_20_regular"
  				},
  				filled: {
  					unicode: 985072,
  					unicodeHex: "\\F07F0",
  					cssClass: "ic_refineui_voicemail_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985069,
  					unicodeHex: "\\F07ED",
  					cssClass: "ic_refineui_voicemail_24_regular"
  				},
  				filled: {
  					unicode: 985069,
  					unicodeHex: "\\F07ED",
  					cssClass: "ic_refineui_voicemail_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985068,
  					unicodeHex: "\\F07EC",
  					cssClass: "ic_refineui_voicemail_28_regular"
  				},
  				filled: {
  					unicode: 985073,
  					unicodeHex: "\\F07F1",
  					cssClass: "ic_refineui_voicemail_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985072,
  					unicodeHex: "\\F07F0",
  					cssClass: "ic_refineui_voicemail_32_regular"
  				},
  				filled: {
  					unicode: 985068,
  					unicodeHex: "\\F07EC",
  					cssClass: "ic_refineui_voicemail_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985071,
  					unicodeHex: "\\F07EF",
  					cssClass: "ic_refineui_voicemail_48_regular"
  				},
  				filled: {
  					unicode: 985071,
  					unicodeHex: "\\F07EF",
  					cssClass: "ic_refineui_voicemail_48_filled"
  				}
  			}
  		}
  	},
  	Contrast: {
  		name: "Contrast",
  		slug: "contrast",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in contrast scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_contrast_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Contrast/svg/ic_refineui_contrast_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_contrast_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Contrast/svg/ic_refineui_contrast_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_contrast_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Contrast/svg/ic_refineui_contrast_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_contrast_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Contrast/svg/ic_refineui_contrast_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_contrast_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Contrast/svg/ic_refineui_contrast_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_contrast_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Contrast/svg/ic_refineui_contrast_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_contrast_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Contrast/svg/ic_refineui_contrast_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_contrast_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Contrast/svg/ic_refineui_contrast_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_contrast_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Contrast/svg/ic_refineui_contrast_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_contrast_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Contrast/svg/ic_refineui_contrast_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_contrast_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Contrast/svg/ic_refineui_contrast_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_contrast_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Contrast/svg/ic_refineui_contrast_16_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985079,
  					unicodeHex: "\\F07F7",
  					cssClass: "ic_refineui_contrast_16_regular"
  				},
  				filled: {
  					unicode: 985079,
  					unicodeHex: "\\F07F7",
  					cssClass: "ic_refineui_contrast_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985074,
  					unicodeHex: "\\F07F2",
  					cssClass: "ic_refineui_contrast_20_regular"
  				},
  				filled: {
  					unicode: 985075,
  					unicodeHex: "\\F07F3",
  					cssClass: "ic_refineui_contrast_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985077,
  					unicodeHex: "\\F07F5",
  					cssClass: "ic_refineui_contrast_24_regular"
  				},
  				filled: {
  					unicode: 985078,
  					unicodeHex: "\\F07F6",
  					cssClass: "ic_refineui_contrast_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985076,
  					unicodeHex: "\\F07F4",
  					cssClass: "ic_refineui_contrast_28_regular"
  				},
  				filled: {
  					unicode: 985076,
  					unicodeHex: "\\F07F4",
  					cssClass: "ic_refineui_contrast_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985075,
  					unicodeHex: "\\F07F3",
  					cssClass: "ic_refineui_contrast_32_regular"
  				},
  				filled: {
  					unicode: 985077,
  					unicodeHex: "\\F07F5",
  					cssClass: "ic_refineui_contrast_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985078,
  					unicodeHex: "\\F07F6",
  					cssClass: "ic_refineui_contrast_48_regular"
  				},
  				filled: {
  					unicode: 985074,
  					unicodeHex: "\\F07F2",
  					cssClass: "ic_refineui_contrast_48_filled"
  				}
  			}
  		}
  	},
  	Cookie: {
  		name: "Cookie",
  		slug: "cookie",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in cookie scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_cookie_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Cookie/svg/ic_refineui_cookie_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cookie_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Cookie/svg/ic_refineui_cookie_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cookie_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Cookie/svg/ic_refineui_cookie_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cookie_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Cookie/svg/ic_refineui_cookie_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cookie_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Cookie/svg/ic_refineui_cookie_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cookie_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Cookie/svg/ic_refineui_cookie_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cookie_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Cookie/svg/ic_refineui_cookie_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cookie_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Cookie/svg/ic_refineui_cookie_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_cookie_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Cookie/svg/ic_refineui_cookie_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cookie_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Cookie/svg/ic_refineui_cookie_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cookie_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Cookie/svg/ic_refineui_cookie_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_cookie_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Cookie/svg/ic_refineui_cookie_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985082,
  					unicodeHex: "\\F07FA",
  					cssClass: "ic_refineui_cookie_16_regular"
  				},
  				filled: {
  					unicode: 985084,
  					unicodeHex: "\\F07FC",
  					cssClass: "ic_refineui_cookie_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985085,
  					unicodeHex: "\\F07FD",
  					cssClass: "ic_refineui_cookie_20_regular"
  				},
  				filled: {
  					unicode: 985082,
  					unicodeHex: "\\F07FA",
  					cssClass: "ic_refineui_cookie_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985084,
  					unicodeHex: "\\F07FC",
  					cssClass: "ic_refineui_cookie_24_regular"
  				},
  				filled: {
  					unicode: 985085,
  					unicodeHex: "\\F07FD",
  					cssClass: "ic_refineui_cookie_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985081,
  					unicodeHex: "\\F07F9",
  					cssClass: "ic_refineui_cookie_28_regular"
  				},
  				filled: {
  					unicode: 985081,
  					unicodeHex: "\\F07F9",
  					cssClass: "ic_refineui_cookie_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985080,
  					unicodeHex: "\\F07F8",
  					cssClass: "ic_refineui_cookie_32_regular"
  				},
  				filled: {
  					unicode: 985083,
  					unicodeHex: "\\F07FB",
  					cssClass: "ic_refineui_cookie_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985083,
  					unicodeHex: "\\F07FB",
  					cssClass: "ic_refineui_cookie_48_regular"
  				},
  				filled: {
  					unicode: 985080,
  					unicodeHex: "\\F07F8",
  					cssClass: "ic_refineui_cookie_48_filled"
  				}
  			}
  		}
  	},
  	Lightbulb: {
  		name: "Lightbulb",
  		slug: "lightbulb",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in lightbulb scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_lightbulb_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Lightbulb/svg/ic_refineui_lightbulb_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_lightbulb_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Lightbulb/svg/ic_refineui_lightbulb_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_lightbulb_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Lightbulb/svg/ic_refineui_lightbulb_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_lightbulb_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Lightbulb/svg/ic_refineui_lightbulb_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_lightbulb_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Lightbulb/svg/ic_refineui_lightbulb_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_lightbulb_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Lightbulb/svg/ic_refineui_lightbulb_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_lightbulb_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Lightbulb/svg/ic_refineui_lightbulb_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_lightbulb_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Lightbulb/svg/ic_refineui_lightbulb_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_lightbulb_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Lightbulb/svg/ic_refineui_lightbulb_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_lightbulb_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Lightbulb/svg/ic_refineui_lightbulb_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_lightbulb_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Lightbulb/svg/ic_refineui_lightbulb_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_lightbulb_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Lightbulb/svg/ic_refineui_lightbulb_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985113,
  					unicodeHex: "\\F0819",
  					cssClass: "ic_refineui_lightbulb_16_regular"
  				},
  				filled: {
  					unicode: 985115,
  					unicodeHex: "\\F081B",
  					cssClass: "ic_refineui_lightbulb_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985110,
  					unicodeHex: "\\F0816",
  					cssClass: "ic_refineui_lightbulb_20_regular"
  				},
  				filled: {
  					unicode: 985111,
  					unicodeHex: "\\F0817",
  					cssClass: "ic_refineui_lightbulb_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985115,
  					unicodeHex: "\\F081B",
  					cssClass: "ic_refineui_lightbulb_24_regular"
  				},
  				filled: {
  					unicode: 985114,
  					unicodeHex: "\\F081A",
  					cssClass: "ic_refineui_lightbulb_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985112,
  					unicodeHex: "\\F0818",
  					cssClass: "ic_refineui_lightbulb_28_regular"
  				},
  				filled: {
  					unicode: 985112,
  					unicodeHex: "\\F0818",
  					cssClass: "ic_refineui_lightbulb_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985111,
  					unicodeHex: "\\F0817",
  					cssClass: "ic_refineui_lightbulb_32_regular"
  				},
  				filled: {
  					unicode: 985113,
  					unicodeHex: "\\F0819",
  					cssClass: "ic_refineui_lightbulb_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985114,
  					unicodeHex: "\\F081A",
  					cssClass: "ic_refineui_lightbulb_48_regular"
  				},
  				filled: {
  					unicode: 985110,
  					unicodeHex: "\\F0816",
  					cssClass: "ic_refineui_lightbulb_48_filled"
  				}
  			}
  		}
  	},
  	Rocket: {
  		name: "Rocket",
  		slug: "rocket",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in rocket scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_rocket_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Rocket/svg/ic_refineui_rocket_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rocket_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Rocket/svg/ic_refineui_rocket_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rocket_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Rocket/svg/ic_refineui_rocket_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rocket_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Rocket/svg/ic_refineui_rocket_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rocket_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Rocket/svg/ic_refineui_rocket_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rocket_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Rocket/svg/ic_refineui_rocket_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rocket_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Rocket/svg/ic_refineui_rocket_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rocket_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Rocket/svg/ic_refineui_rocket_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rocket_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Rocket/svg/ic_refineui_rocket_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rocket_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Rocket/svg/ic_refineui_rocket_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rocket_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Rocket/svg/ic_refineui_rocket_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rocket_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Rocket/svg/ic_refineui_rocket_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985119,
  					unicodeHex: "\\F081F",
  					cssClass: "ic_refineui_rocket_16_regular"
  				},
  				filled: {
  					unicode: 985116,
  					unicodeHex: "\\F081C",
  					cssClass: "ic_refineui_rocket_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985116,
  					unicodeHex: "\\F081C",
  					cssClass: "ic_refineui_rocket_20_regular"
  				},
  				filled: {
  					unicode: 985120,
  					unicodeHex: "\\F0820",
  					cssClass: "ic_refineui_rocket_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985118,
  					unicodeHex: "\\F081E",
  					cssClass: "ic_refineui_rocket_24_regular"
  				},
  				filled: {
  					unicode: 985117,
  					unicodeHex: "\\F081D",
  					cssClass: "ic_refineui_rocket_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985117,
  					unicodeHex: "\\F081D",
  					cssClass: "ic_refineui_rocket_28_regular"
  				},
  				filled: {
  					unicode: 985119,
  					unicodeHex: "\\F081F",
  					cssClass: "ic_refineui_rocket_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985121,
  					unicodeHex: "\\F0821",
  					cssClass: "ic_refineui_rocket_32_regular"
  				},
  				filled: {
  					unicode: 985118,
  					unicodeHex: "\\F081E",
  					cssClass: "ic_refineui_rocket_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985120,
  					unicodeHex: "\\F0820",
  					cssClass: "ic_refineui_rocket_48_regular"
  				},
  				filled: {
  					unicode: 985121,
  					unicodeHex: "\\F0821",
  					cssClass: "ic_refineui_rocket_48_filled"
  				}
  			}
  		}
  	},
  	Text: {
  		name: "Text",
  		slug: "text",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in text scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_text_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Text/svg/ic_refineui_text_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_text_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Text/svg/ic_refineui_text_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_text_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Text/svg/ic_refineui_text_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_text_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Text/svg/ic_refineui_text_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_text_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Text/svg/ic_refineui_text_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_text_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Text/svg/ic_refineui_text_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_text_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Text/svg/ic_refineui_text_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_text_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Text/svg/ic_refineui_text_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_text_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Text/svg/ic_refineui_text_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_text_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Text/svg/ic_refineui_text_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_text_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Text/svg/ic_refineui_text_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_text_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Text/svg/ic_refineui_text_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985131,
  					unicodeHex: "\\F082B",
  					cssClass: "ic_refineui_text_16_regular"
  				},
  				filled: {
  					unicode: 985128,
  					unicodeHex: "\\F0828",
  					cssClass: "ic_refineui_text_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985128,
  					unicodeHex: "\\F0828",
  					cssClass: "ic_refineui_text_20_regular"
  				},
  				filled: {
  					unicode: 985132,
  					unicodeHex: "\\F082C",
  					cssClass: "ic_refineui_text_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985132,
  					unicodeHex: "\\F082C",
  					cssClass: "ic_refineui_text_24_regular"
  				},
  				filled: {
  					unicode: 985129,
  					unicodeHex: "\\F0829",
  					cssClass: "ic_refineui_text_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985133,
  					unicodeHex: "\\F082D",
  					cssClass: "ic_refineui_text_28_regular"
  				},
  				filled: {
  					unicode: 985131,
  					unicodeHex: "\\F082B",
  					cssClass: "ic_refineui_text_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985129,
  					unicodeHex: "\\F0829",
  					cssClass: "ic_refineui_text_32_regular"
  				},
  				filled: {
  					unicode: 985130,
  					unicodeHex: "\\F082A",
  					cssClass: "ic_refineui_text_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985130,
  					unicodeHex: "\\F082A",
  					cssClass: "ic_refineui_text_48_regular"
  				},
  				filled: {
  					unicode: 985133,
  					unicodeHex: "\\F082D",
  					cssClass: "ic_refineui_text_48_filled"
  				}
  			}
  		}
  	},
  	Joystick: {
  		name: "Joystick",
  		slug: "joystick",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in joystick scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_joystick_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Joystick/svg/ic_refineui_joystick_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_joystick_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Joystick/svg/ic_refineui_joystick_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_joystick_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Joystick/svg/ic_refineui_joystick_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_joystick_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Joystick/svg/ic_refineui_joystick_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_joystick_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Joystick/svg/ic_refineui_joystick_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_joystick_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Joystick/svg/ic_refineui_joystick_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_joystick_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Joystick/svg/ic_refineui_joystick_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_joystick_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Joystick/svg/ic_refineui_joystick_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_joystick_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Joystick/svg/ic_refineui_joystick_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_joystick_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Joystick/svg/ic_refineui_joystick_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_joystick_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Joystick/svg/ic_refineui_joystick_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_joystick_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Joystick/svg/ic_refineui_joystick_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985148,
  					unicodeHex: "\\F083C",
  					cssClass: "ic_refineui_joystick_16_regular"
  				},
  				filled: {
  					unicode: 985146,
  					unicodeHex: "\\F083A",
  					cssClass: "ic_refineui_joystick_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985151,
  					unicodeHex: "\\F083F",
  					cssClass: "ic_refineui_joystick_20_regular"
  				},
  				filled: {
  					unicode: 985150,
  					unicodeHex: "\\F083E",
  					cssClass: "ic_refineui_joystick_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985147,
  					unicodeHex: "\\F083B",
  					cssClass: "ic_refineui_joystick_24_regular"
  				},
  				filled: {
  					unicode: 985147,
  					unicodeHex: "\\F083B",
  					cssClass: "ic_refineui_joystick_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985146,
  					unicodeHex: "\\F083A",
  					cssClass: "ic_refineui_joystick_28_regular"
  				},
  				filled: {
  					unicode: 985149,
  					unicodeHex: "\\F083D",
  					cssClass: "ic_refineui_joystick_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985150,
  					unicodeHex: "\\F083E",
  					cssClass: "ic_refineui_joystick_32_regular"
  				},
  				filled: {
  					unicode: 985148,
  					unicodeHex: "\\F083C",
  					cssClass: "ic_refineui_joystick_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985149,
  					unicodeHex: "\\F083D",
  					cssClass: "ic_refineui_joystick_48_regular"
  				},
  				filled: {
  					unicode: 985151,
  					unicodeHex: "\\F083F",
  					cssClass: "ic_refineui_joystick_48_filled"
  				}
  			}
  		}
  	},
  	Backpack: {
  		name: "Backpack",
  		slug: "backpack",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in backpack scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_backpack_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Backpack/svg/ic_refineui_backpack_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_backpack_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Backpack/svg/ic_refineui_backpack_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_backpack_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Backpack/svg/ic_refineui_backpack_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_backpack_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Backpack/svg/ic_refineui_backpack_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_backpack_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Backpack/svg/ic_refineui_backpack_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_backpack_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Backpack/svg/ic_refineui_backpack_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_backpack_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Backpack/svg/ic_refineui_backpack_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_backpack_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Backpack/svg/ic_refineui_backpack_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_backpack_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Backpack/svg/ic_refineui_backpack_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_backpack_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Backpack/svg/ic_refineui_backpack_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_backpack_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Backpack/svg/ic_refineui_backpack_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_backpack_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Backpack/svg/ic_refineui_backpack_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985178,
  					unicodeHex: "\\F085A",
  					cssClass: "ic_refineui_backpack_16_regular"
  				},
  				filled: {
  					unicode: 985180,
  					unicodeHex: "\\F085C",
  					cssClass: "ic_refineui_backpack_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985181,
  					unicodeHex: "\\F085D",
  					cssClass: "ic_refineui_backpack_20_regular"
  				},
  				filled: {
  					unicode: 985176,
  					unicodeHex: "\\F0858",
  					cssClass: "ic_refineui_backpack_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985176,
  					unicodeHex: "\\F0858",
  					cssClass: "ic_refineui_backpack_24_regular"
  				},
  				filled: {
  					unicode: 985179,
  					unicodeHex: "\\F085B",
  					cssClass: "ic_refineui_backpack_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985179,
  					unicodeHex: "\\F085B",
  					cssClass: "ic_refineui_backpack_28_regular"
  				},
  				filled: {
  					unicode: 985177,
  					unicodeHex: "\\F0859",
  					cssClass: "ic_refineui_backpack_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985180,
  					unicodeHex: "\\F085C",
  					cssClass: "ic_refineui_backpack_32_regular"
  				},
  				filled: {
  					unicode: 985181,
  					unicodeHex: "\\F085D",
  					cssClass: "ic_refineui_backpack_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985177,
  					unicodeHex: "\\F0859",
  					cssClass: "ic_refineui_backpack_48_regular"
  				},
  				filled: {
  					unicode: 985178,
  					unicodeHex: "\\F085A",
  					cssClass: "ic_refineui_backpack_48_filled"
  				}
  			}
  		}
  	},
  	Notebook: {
  		name: "Notebook",
  		slug: "notebook",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in notebook scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_notebook_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Notebook/svg/ic_refineui_notebook_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_notebook_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Notebook/svg/ic_refineui_notebook_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_notebook_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Notebook/svg/ic_refineui_notebook_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_notebook_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Notebook/svg/ic_refineui_notebook_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_notebook_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Notebook/svg/ic_refineui_notebook_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_notebook_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Notebook/svg/ic_refineui_notebook_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_notebook_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Notebook/svg/ic_refineui_notebook_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_notebook_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Notebook/svg/ic_refineui_notebook_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_notebook_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Notebook/svg/ic_refineui_notebook_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_notebook_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Notebook/svg/ic_refineui_notebook_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_notebook_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Notebook/svg/ic_refineui_notebook_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_notebook_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Notebook/svg/ic_refineui_notebook_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985201,
  					unicodeHex: "\\F0871",
  					cssClass: "ic_refineui_notebook_16_regular"
  				},
  				filled: {
  					unicode: 985200,
  					unicodeHex: "\\F0870",
  					cssClass: "ic_refineui_notebook_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985205,
  					unicodeHex: "\\F0875",
  					cssClass: "ic_refineui_notebook_20_regular"
  				},
  				filled: {
  					unicode: 985204,
  					unicodeHex: "\\F0874",
  					cssClass: "ic_refineui_notebook_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985203,
  					unicodeHex: "\\F0873",
  					cssClass: "ic_refineui_notebook_24_regular"
  				},
  				filled: {
  					unicode: 985201,
  					unicodeHex: "\\F0871",
  					cssClass: "ic_refineui_notebook_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985200,
  					unicodeHex: "\\F0870",
  					cssClass: "ic_refineui_notebook_28_regular"
  				},
  				filled: {
  					unicode: 985203,
  					unicodeHex: "\\F0873",
  					cssClass: "ic_refineui_notebook_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985204,
  					unicodeHex: "\\F0874",
  					cssClass: "ic_refineui_notebook_32_regular"
  				},
  				filled: {
  					unicode: 985202,
  					unicodeHex: "\\F0872",
  					cssClass: "ic_refineui_notebook_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985202,
  					unicodeHex: "\\F0872",
  					cssClass: "ic_refineui_notebook_48_regular"
  				},
  				filled: {
  					unicode: 985205,
  					unicodeHex: "\\F0875",
  					cssClass: "ic_refineui_notebook_48_filled"
  				}
  			}
  		}
  	},
  	Javascript: {
  		name: "Javascript",
  		slug: "javascript",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in javascript scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_javascript_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Javascript/svg/ic_refineui_javascript_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_javascript_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Javascript/svg/ic_refineui_javascript_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_javascript_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Javascript/svg/ic_refineui_javascript_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_javascript_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Javascript/svg/ic_refineui_javascript_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_javascript_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Javascript/svg/ic_refineui_javascript_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_javascript_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Javascript/svg/ic_refineui_javascript_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_javascript_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Javascript/svg/ic_refineui_javascript_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_javascript_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Javascript/svg/ic_refineui_javascript_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_javascript_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Javascript/svg/ic_refineui_javascript_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_javascript_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Javascript/svg/ic_refineui_javascript_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_javascript_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Javascript/svg/ic_refineui_javascript_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_javascript_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Javascript/svg/ic_refineui_javascript_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985210,
  					unicodeHex: "\\F087A",
  					cssClass: "ic_refineui_javascript_16_regular"
  				},
  				filled: {
  					unicode: 985210,
  					unicodeHex: "\\F087A",
  					cssClass: "ic_refineui_javascript_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985211,
  					unicodeHex: "\\F087B",
  					cssClass: "ic_refineui_javascript_20_regular"
  				},
  				filled: {
  					unicode: 985208,
  					unicodeHex: "\\F0878",
  					cssClass: "ic_refineui_javascript_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985208,
  					unicodeHex: "\\F0878",
  					cssClass: "ic_refineui_javascript_24_regular"
  				},
  				filled: {
  					unicode: 985211,
  					unicodeHex: "\\F087B",
  					cssClass: "ic_refineui_javascript_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985207,
  					unicodeHex: "\\F0877",
  					cssClass: "ic_refineui_javascript_28_regular"
  				},
  				filled: {
  					unicode: 985207,
  					unicodeHex: "\\F0877",
  					cssClass: "ic_refineui_javascript_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985206,
  					unicodeHex: "\\F0876",
  					cssClass: "ic_refineui_javascript_32_regular"
  				},
  				filled: {
  					unicode: 985209,
  					unicodeHex: "\\F0879",
  					cssClass: "ic_refineui_javascript_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985209,
  					unicodeHex: "\\F0879",
  					cssClass: "ic_refineui_javascript_48_regular"
  				},
  				filled: {
  					unicode: 985206,
  					unicodeHex: "\\F0876",
  					cssClass: "ic_refineui_javascript_48_filled"
  				}
  			}
  		}
  	},
  	Filter: {
  		name: "Filter",
  		slug: "filter",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in filter scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_filter_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Filter/svg/ic_refineui_filter_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_filter_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Filter/svg/ic_refineui_filter_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_filter_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Filter/svg/ic_refineui_filter_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_filter_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Filter/svg/ic_refineui_filter_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_filter_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Filter/svg/ic_refineui_filter_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_filter_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Filter/svg/ic_refineui_filter_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_filter_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Filter/svg/ic_refineui_filter_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_filter_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Filter/svg/ic_refineui_filter_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_filter_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Filter/svg/ic_refineui_filter_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_filter_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Filter/svg/ic_refineui_filter_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_filter_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Filter/svg/ic_refineui_filter_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_filter_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Filter/svg/ic_refineui_filter_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985220,
  					unicodeHex: "\\F0884",
  					cssClass: "ic_refineui_filter_16_regular"
  				},
  				filled: {
  					unicode: 985219,
  					unicodeHex: "\\F0883",
  					cssClass: "ic_refineui_filter_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985223,
  					unicodeHex: "\\F0887",
  					cssClass: "ic_refineui_filter_20_regular"
  				},
  				filled: {
  					unicode: 985223,
  					unicodeHex: "\\F0887",
  					cssClass: "ic_refineui_filter_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985219,
  					unicodeHex: "\\F0883",
  					cssClass: "ic_refineui_filter_24_regular"
  				},
  				filled: {
  					unicode: 985220,
  					unicodeHex: "\\F0884",
  					cssClass: "ic_refineui_filter_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985222,
  					unicodeHex: "\\F0886",
  					cssClass: "ic_refineui_filter_28_regular"
  				},
  				filled: {
  					unicode: 985222,
  					unicodeHex: "\\F0886",
  					cssClass: "ic_refineui_filter_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985218,
  					unicodeHex: "\\F0882",
  					cssClass: "ic_refineui_filter_32_regular"
  				},
  				filled: {
  					unicode: 985218,
  					unicodeHex: "\\F0882",
  					cssClass: "ic_refineui_filter_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985221,
  					unicodeHex: "\\F0885",
  					cssClass: "ic_refineui_filter_48_regular"
  				},
  				filled: {
  					unicode: 985221,
  					unicodeHex: "\\F0885",
  					cssClass: "ic_refineui_filter_48_filled"
  				}
  			}
  		}
  	},
  	Run: {
  		name: "Run",
  		slug: "run",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in run scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_run_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Run/svg/ic_refineui_run_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_run_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Run/svg/ic_refineui_run_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_run_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Run/svg/ic_refineui_run_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_run_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Run/svg/ic_refineui_run_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_run_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Run/svg/ic_refineui_run_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_run_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Run/svg/ic_refineui_run_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_run_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Run/svg/ic_refineui_run_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_run_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Run/svg/ic_refineui_run_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_run_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Run/svg/ic_refineui_run_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_run_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Run/svg/ic_refineui_run_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_run_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Run/svg/ic_refineui_run_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_run_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Run/svg/ic_refineui_run_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985233,
  					unicodeHex: "\\F0891",
  					cssClass: "ic_refineui_run_16_regular"
  				},
  				filled: {
  					unicode: 985231,
  					unicodeHex: "\\F088F",
  					cssClass: "ic_refineui_run_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985230,
  					unicodeHex: "\\F088E",
  					cssClass: "ic_refineui_run_20_regular"
  				},
  				filled: {
  					unicode: 985233,
  					unicodeHex: "\\F0891",
  					cssClass: "ic_refineui_run_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985231,
  					unicodeHex: "\\F088F",
  					cssClass: "ic_refineui_run_24_regular"
  				},
  				filled: {
  					unicode: 985230,
  					unicodeHex: "\\F088E",
  					cssClass: "ic_refineui_run_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985234,
  					unicodeHex: "\\F0892",
  					cssClass: "ic_refineui_run_28_regular"
  				},
  				filled: {
  					unicode: 985234,
  					unicodeHex: "\\F0892",
  					cssClass: "ic_refineui_run_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985235,
  					unicodeHex: "\\F0893",
  					cssClass: "ic_refineui_run_32_regular"
  				},
  				filled: {
  					unicode: 985232,
  					unicodeHex: "\\F0890",
  					cssClass: "ic_refineui_run_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985232,
  					unicodeHex: "\\F0890",
  					cssClass: "ic_refineui_run_48_regular"
  				},
  				filled: {
  					unicode: 985235,
  					unicodeHex: "\\F0893",
  					cssClass: "ic_refineui_run_48_filled"
  				}
  			}
  		}
  	},
  	Laptop: {
  		name: "Laptop",
  		slug: "laptop",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in laptop scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_laptop_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Laptop/svg/ic_refineui_laptop_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_laptop_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Laptop/svg/ic_refineui_laptop_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_laptop_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Laptop/svg/ic_refineui_laptop_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_laptop_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Laptop/svg/ic_refineui_laptop_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_laptop_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Laptop/svg/ic_refineui_laptop_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_laptop_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Laptop/svg/ic_refineui_laptop_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_laptop_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Laptop/svg/ic_refineui_laptop_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_laptop_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Laptop/svg/ic_refineui_laptop_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_laptop_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Laptop/svg/ic_refineui_laptop_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_laptop_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Laptop/svg/ic_refineui_laptop_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_laptop_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Laptop/svg/ic_refineui_laptop_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_laptop_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Laptop/svg/ic_refineui_laptop_28_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985251,
  					unicodeHex: "\\F08A3",
  					cssClass: "ic_refineui_laptop_16_regular"
  				},
  				filled: {
  					unicode: 985250,
  					unicodeHex: "\\F08A2",
  					cssClass: "ic_refineui_laptop_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985248,
  					unicodeHex: "\\F08A0",
  					cssClass: "ic_refineui_laptop_20_regular"
  				},
  				filled: {
  					unicode: 985252,
  					unicodeHex: "\\F08A4",
  					cssClass: "ic_refineui_laptop_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985249,
  					unicodeHex: "\\F08A1",
  					cssClass: "ic_refineui_laptop_24_regular"
  				},
  				filled: {
  					unicode: 985249,
  					unicodeHex: "\\F08A1",
  					cssClass: "ic_refineui_laptop_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985252,
  					unicodeHex: "\\F08A4",
  					cssClass: "ic_refineui_laptop_28_regular"
  				},
  				filled: {
  					unicode: 985253,
  					unicodeHex: "\\F08A5",
  					cssClass: "ic_refineui_laptop_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985253,
  					unicodeHex: "\\F08A5",
  					cssClass: "ic_refineui_laptop_32_regular"
  				},
  				filled: {
  					unicode: 985248,
  					unicodeHex: "\\F08A0",
  					cssClass: "ic_refineui_laptop_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985250,
  					unicodeHex: "\\F08A2",
  					cssClass: "ic_refineui_laptop_48_regular"
  				},
  				filled: {
  					unicode: 985251,
  					unicodeHex: "\\F08A3",
  					cssClass: "ic_refineui_laptop_48_filled"
  				}
  			}
  		}
  	},
  	Windows: {
  		name: "Windows",
  		slug: "windows",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in windows scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_windows_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Windows/svg/ic_refineui_windows_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_windows_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Windows/svg/ic_refineui_windows_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_windows_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Windows/svg/ic_refineui_windows_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_windows_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Windows/svg/ic_refineui_windows_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_windows_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Windows/svg/ic_refineui_windows_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_windows_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Windows/svg/ic_refineui_windows_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_windows_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Windows/svg/ic_refineui_windows_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_windows_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Windows/svg/ic_refineui_windows_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_windows_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Windows/svg/ic_refineui_windows_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_windows_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Windows/svg/ic_refineui_windows_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_windows_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Windows/svg/ic_refineui_windows_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_windows_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Windows/svg/ic_refineui_windows_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985262,
  					unicodeHex: "\\F08AE",
  					cssClass: "ic_refineui_windows_16_regular"
  				},
  				filled: {
  					unicode: 985264,
  					unicodeHex: "\\F08B0",
  					cssClass: "ic_refineui_windows_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985265,
  					unicodeHex: "\\F08B1",
  					cssClass: "ic_refineui_windows_20_regular"
  				},
  				filled: {
  					unicode: 985262,
  					unicodeHex: "\\F08AE",
  					cssClass: "ic_refineui_windows_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985261,
  					unicodeHex: "\\F08AD",
  					cssClass: "ic_refineui_windows_24_regular"
  				},
  				filled: {
  					unicode: 985265,
  					unicodeHex: "\\F08B1",
  					cssClass: "ic_refineui_windows_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985260,
  					unicodeHex: "\\F08AC",
  					cssClass: "ic_refineui_windows_28_regular"
  				},
  				filled: {
  					unicode: 985261,
  					unicodeHex: "\\F08AD",
  					cssClass: "ic_refineui_windows_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985264,
  					unicodeHex: "\\F08B0",
  					cssClass: "ic_refineui_windows_32_regular"
  				},
  				filled: {
  					unicode: 985263,
  					unicodeHex: "\\F08AF",
  					cssClass: "ic_refineui_windows_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985263,
  					unicodeHex: "\\F08AF",
  					cssClass: "ic_refineui_windows_48_regular"
  				},
  				filled: {
  					unicode: 985260,
  					unicodeHex: "\\F08AC",
  					cssClass: "ic_refineui_windows_48_filled"
  				}
  			}
  		}
  	},
  	Eyedropper: {
  		name: "Eyedropper",
  		slug: "eyedropper",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in eyedropper scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_eyedropper_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Eyedropper/svg/ic_refineui_eyedropper_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_eyedropper_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Eyedropper/svg/ic_refineui_eyedropper_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_eyedropper_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Eyedropper/svg/ic_refineui_eyedropper_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_eyedropper_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Eyedropper/svg/ic_refineui_eyedropper_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_eyedropper_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Eyedropper/svg/ic_refineui_eyedropper_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_eyedropper_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Eyedropper/svg/ic_refineui_eyedropper_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_eyedropper_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Eyedropper/svg/ic_refineui_eyedropper_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_eyedropper_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Eyedropper/svg/ic_refineui_eyedropper_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_eyedropper_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Eyedropper/svg/ic_refineui_eyedropper_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_eyedropper_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Eyedropper/svg/ic_refineui_eyedropper_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_eyedropper_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Eyedropper/svg/ic_refineui_eyedropper_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_eyedropper_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Eyedropper/svg/ic_refineui_eyedropper_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985282,
  					unicodeHex: "\\F08C2",
  					cssClass: "ic_refineui_eyedropper_16_regular"
  				},
  				filled: {
  					unicode: 985281,
  					unicodeHex: "\\F08C1",
  					cssClass: "ic_refineui_eyedropper_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985278,
  					unicodeHex: "\\F08BE",
  					cssClass: "ic_refineui_eyedropper_20_regular"
  				},
  				filled: {
  					unicode: 985279,
  					unicodeHex: "\\F08BF",
  					cssClass: "ic_refineui_eyedropper_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985280,
  					unicodeHex: "\\F08C0",
  					cssClass: "ic_refineui_eyedropper_24_regular"
  				},
  				filled: {
  					unicode: 985282,
  					unicodeHex: "\\F08C2",
  					cssClass: "ic_refineui_eyedropper_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985279,
  					unicodeHex: "\\F08BF",
  					cssClass: "ic_refineui_eyedropper_28_regular"
  				},
  				filled: {
  					unicode: 985278,
  					unicodeHex: "\\F08BE",
  					cssClass: "ic_refineui_eyedropper_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985283,
  					unicodeHex: "\\F08C3",
  					cssClass: "ic_refineui_eyedropper_32_regular"
  				},
  				filled: {
  					unicode: 985283,
  					unicodeHex: "\\F08C3",
  					cssClass: "ic_refineui_eyedropper_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985281,
  					unicodeHex: "\\F08C1",
  					cssClass: "ic_refineui_eyedropper_48_regular"
  				},
  				filled: {
  					unicode: 985280,
  					unicodeHex: "\\F08C0",
  					cssClass: "ic_refineui_eyedropper_48_filled"
  				}
  			}
  		}
  	},
  	Play: {
  		name: "Play",
  		slug: "play",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in play scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_play_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Play/svg/ic_refineui_play_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_play_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Play/svg/ic_refineui_play_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_play_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Play/svg/ic_refineui_play_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_play_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Play/svg/ic_refineui_play_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_play_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Play/svg/ic_refineui_play_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_play_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Play/svg/ic_refineui_play_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_play_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Play/svg/ic_refineui_play_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_play_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Play/svg/ic_refineui_play_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_play_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Play/svg/ic_refineui_play_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_play_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Play/svg/ic_refineui_play_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_play_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Play/svg/ic_refineui_play_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_play_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Play/svg/ic_refineui_play_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985288,
  					unicodeHex: "\\F08C8",
  					cssClass: "ic_refineui_play_16_regular"
  				},
  				filled: {
  					unicode: 985288,
  					unicodeHex: "\\F08C8",
  					cssClass: "ic_refineui_play_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985284,
  					unicodeHex: "\\F08C4",
  					cssClass: "ic_refineui_play_20_regular"
  				},
  				filled: {
  					unicode: 985284,
  					unicodeHex: "\\F08C4",
  					cssClass: "ic_refineui_play_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985286,
  					unicodeHex: "\\F08C6",
  					cssClass: "ic_refineui_play_24_regular"
  				},
  				filled: {
  					unicode: 985287,
  					unicodeHex: "\\F08C7",
  					cssClass: "ic_refineui_play_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985285,
  					unicodeHex: "\\F08C5",
  					cssClass: "ic_refineui_play_28_regular"
  				},
  				filled: {
  					unicode: 985285,
  					unicodeHex: "\\F08C5",
  					cssClass: "ic_refineui_play_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985289,
  					unicodeHex: "\\F08C9",
  					cssClass: "ic_refineui_play_32_regular"
  				},
  				filled: {
  					unicode: 985289,
  					unicodeHex: "\\F08C9",
  					cssClass: "ic_refineui_play_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985287,
  					unicodeHex: "\\F08C7",
  					cssClass: "ic_refineui_play_48_regular"
  				},
  				filled: {
  					unicode: 985286,
  					unicodeHex: "\\F08C6",
  					cssClass: "ic_refineui_play_48_filled"
  				}
  			}
  		}
  	},
  	Rotation: {
  		name: "Rotation",
  		slug: "rotation",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in rotation scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_rotation_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Rotation/svg/ic_refineui_rotation_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rotation_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Rotation/svg/ic_refineui_rotation_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rotation_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Rotation/svg/ic_refineui_rotation_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rotation_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Rotation/svg/ic_refineui_rotation_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rotation_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Rotation/svg/ic_refineui_rotation_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rotation_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Rotation/svg/ic_refineui_rotation_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rotation_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Rotation/svg/ic_refineui_rotation_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rotation_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Rotation/svg/ic_refineui_rotation_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rotation_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Rotation/svg/ic_refineui_rotation_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rotation_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Rotation/svg/ic_refineui_rotation_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_rotation_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Rotation/svg/ic_refineui_rotation_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_rotation_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Rotation/svg/ic_refineui_rotation_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985298,
  					unicodeHex: "\\F08D2",
  					cssClass: "ic_refineui_rotation_16_regular"
  				},
  				filled: {
  					unicode: 985299,
  					unicodeHex: "\\F08D3",
  					cssClass: "ic_refineui_rotation_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985301,
  					unicodeHex: "\\F08D5",
  					cssClass: "ic_refineui_rotation_20_regular"
  				},
  				filled: {
  					unicode: 985297,
  					unicodeHex: "\\F08D1",
  					cssClass: "ic_refineui_rotation_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985299,
  					unicodeHex: "\\F08D3",
  					cssClass: "ic_refineui_rotation_24_regular"
  				},
  				filled: {
  					unicode: 985300,
  					unicodeHex: "\\F08D4",
  					cssClass: "ic_refineui_rotation_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985300,
  					unicodeHex: "\\F08D4",
  					cssClass: "ic_refineui_rotation_28_regular"
  				},
  				filled: {
  					unicode: 985296,
  					unicodeHex: "\\F08D0",
  					cssClass: "ic_refineui_rotation_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985296,
  					unicodeHex: "\\F08D0",
  					cssClass: "ic_refineui_rotation_32_regular"
  				},
  				filled: {
  					unicode: 985301,
  					unicodeHex: "\\F08D5",
  					cssClass: "ic_refineui_rotation_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985297,
  					unicodeHex: "\\F08D1",
  					cssClass: "ic_refineui_rotation_48_regular"
  				},
  				filled: {
  					unicode: 985298,
  					unicodeHex: "\\F08D2",
  					cssClass: "ic_refineui_rotation_48_filled"
  				}
  			}
  		}
  	},
  	Parallelogram: {
  		name: "Parallelogram",
  		slug: "parallelogram",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in parallelogram scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_parallelogram_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Parallelogram/svg/ic_refineui_parallelogram_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_parallelogram_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Parallelogram/svg/ic_refineui_parallelogram_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_parallelogram_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Parallelogram/svg/ic_refineui_parallelogram_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_parallelogram_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Parallelogram/svg/ic_refineui_parallelogram_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_parallelogram_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Parallelogram/svg/ic_refineui_parallelogram_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_parallelogram_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Parallelogram/svg/ic_refineui_parallelogram_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_parallelogram_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Parallelogram/svg/ic_refineui_parallelogram_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_parallelogram_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Parallelogram/svg/ic_refineui_parallelogram_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_parallelogram_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Parallelogram/svg/ic_refineui_parallelogram_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_parallelogram_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Parallelogram/svg/ic_refineui_parallelogram_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_parallelogram_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Parallelogram/svg/ic_refineui_parallelogram_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_parallelogram_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Parallelogram/svg/ic_refineui_parallelogram_28_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985304,
  					unicodeHex: "\\F08D8",
  					cssClass: "ic_refineui_parallelogram_16_regular"
  				},
  				filled: {
  					unicode: 985304,
  					unicodeHex: "\\F08D8",
  					cssClass: "ic_refineui_parallelogram_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985307,
  					unicodeHex: "\\F08DB",
  					cssClass: "ic_refineui_parallelogram_20_regular"
  				},
  				filled: {
  					unicode: 985306,
  					unicodeHex: "\\F08DA",
  					cssClass: "ic_refineui_parallelogram_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985303,
  					unicodeHex: "\\F08D7",
  					cssClass: "ic_refineui_parallelogram_24_regular"
  				},
  				filled: {
  					unicode: 985303,
  					unicodeHex: "\\F08D7",
  					cssClass: "ic_refineui_parallelogram_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985302,
  					unicodeHex: "\\F08D6",
  					cssClass: "ic_refineui_parallelogram_28_regular"
  				},
  				filled: {
  					unicode: 985307,
  					unicodeHex: "\\F08DB",
  					cssClass: "ic_refineui_parallelogram_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985306,
  					unicodeHex: "\\F08DA",
  					cssClass: "ic_refineui_parallelogram_32_regular"
  				},
  				filled: {
  					unicode: 985302,
  					unicodeHex: "\\F08D6",
  					cssClass: "ic_refineui_parallelogram_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985305,
  					unicodeHex: "\\F08D9",
  					cssClass: "ic_refineui_parallelogram_48_regular"
  				},
  				filled: {
  					unicode: 985305,
  					unicodeHex: "\\F08D9",
  					cssClass: "ic_refineui_parallelogram_48_filled"
  				}
  			}
  		}
  	},
  	Temperature: {
  		name: "Temperature",
  		slug: "temperature",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in temperature scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_temperature_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Temperature/svg/ic_refineui_temperature_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_temperature_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Temperature/svg/ic_refineui_temperature_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_temperature_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Temperature/svg/ic_refineui_temperature_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_temperature_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Temperature/svg/ic_refineui_temperature_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_temperature_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Temperature/svg/ic_refineui_temperature_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_temperature_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Temperature/svg/ic_refineui_temperature_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_temperature_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Temperature/svg/ic_refineui_temperature_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_temperature_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Temperature/svg/ic_refineui_temperature_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_temperature_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Temperature/svg/ic_refineui_temperature_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_temperature_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Temperature/svg/ic_refineui_temperature_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_temperature_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Temperature/svg/ic_refineui_temperature_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_temperature_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Temperature/svg/ic_refineui_temperature_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985316,
  					unicodeHex: "\\F08E4",
  					cssClass: "ic_refineui_temperature_16_regular"
  				},
  				filled: {
  					unicode: 985318,
  					unicodeHex: "\\F08E6",
  					cssClass: "ic_refineui_temperature_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985319,
  					unicodeHex: "\\F08E7",
  					cssClass: "ic_refineui_temperature_20_regular"
  				},
  				filled: {
  					unicode: 985316,
  					unicodeHex: "\\F08E4",
  					cssClass: "ic_refineui_temperature_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985317,
  					unicodeHex: "\\F08E5",
  					cssClass: "ic_refineui_temperature_24_regular"
  				},
  				filled: {
  					unicode: 985319,
  					unicodeHex: "\\F08E7",
  					cssClass: "ic_refineui_temperature_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985318,
  					unicodeHex: "\\F08E6",
  					cssClass: "ic_refineui_temperature_28_regular"
  				},
  				filled: {
  					unicode: 985315,
  					unicodeHex: "\\F08E3",
  					cssClass: "ic_refineui_temperature_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985314,
  					unicodeHex: "\\F08E2",
  					cssClass: "ic_refineui_temperature_32_regular"
  				},
  				filled: {
  					unicode: 985317,
  					unicodeHex: "\\F08E5",
  					cssClass: "ic_refineui_temperature_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985315,
  					unicodeHex: "\\F08E3",
  					cssClass: "ic_refineui_temperature_48_regular"
  				},
  				filled: {
  					unicode: 985314,
  					unicodeHex: "\\F08E2",
  					cssClass: "ic_refineui_temperature_48_filled"
  				}
  			}
  		}
  	},
  	Sim: {
  		name: "Sim",
  		slug: "sim",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in sim scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_sim_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Sim/svg/ic_refineui_sim_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_sim_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Sim/svg/ic_refineui_sim_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_sim_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Sim/svg/ic_refineui_sim_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_sim_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Sim/svg/ic_refineui_sim_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_sim_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Sim/svg/ic_refineui_sim_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_sim_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Sim/svg/ic_refineui_sim_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_sim_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Sim/svg/ic_refineui_sim_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_sim_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Sim/svg/ic_refineui_sim_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_sim_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Sim/svg/ic_refineui_sim_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_sim_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Sim/svg/ic_refineui_sim_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_sim_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Sim/svg/ic_refineui_sim_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_sim_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Sim/svg/ic_refineui_sim_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985322,
  					unicodeHex: "\\F08EA",
  					cssClass: "ic_refineui_sim_16_regular"
  				},
  				filled: {
  					unicode: 985323,
  					unicodeHex: "\\F08EB",
  					cssClass: "ic_refineui_sim_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985320,
  					unicodeHex: "\\F08E8",
  					cssClass: "ic_refineui_sim_20_regular"
  				},
  				filled: {
  					unicode: 985321,
  					unicodeHex: "\\F08E9",
  					cssClass: "ic_refineui_sim_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985324,
  					unicodeHex: "\\F08EC",
  					cssClass: "ic_refineui_sim_24_regular"
  				},
  				filled: {
  					unicode: 985324,
  					unicodeHex: "\\F08EC",
  					cssClass: "ic_refineui_sim_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985325,
  					unicodeHex: "\\F08ED",
  					cssClass: "ic_refineui_sim_28_regular"
  				},
  				filled: {
  					unicode: 985320,
  					unicodeHex: "\\F08E8",
  					cssClass: "ic_refineui_sim_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985321,
  					unicodeHex: "\\F08E9",
  					cssClass: "ic_refineui_sim_32_regular"
  				},
  				filled: {
  					unicode: 985325,
  					unicodeHex: "\\F08ED",
  					cssClass: "ic_refineui_sim_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985323,
  					unicodeHex: "\\F08EB",
  					cssClass: "ic_refineui_sim_48_regular"
  				},
  				filled: {
  					unicode: 985322,
  					unicodeHex: "\\F08EA",
  					cssClass: "ic_refineui_sim_48_filled"
  				}
  			}
  		}
  	},
  	Accessibility: {
  		name: "Accessibility",
  		slug: "accessibility",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in accessibility scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_accessibility_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Accessibility/svg/ic_refineui_accessibility_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_accessibility_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Accessibility/svg/ic_refineui_accessibility_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_accessibility_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Accessibility/svg/ic_refineui_accessibility_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_accessibility_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Accessibility/svg/ic_refineui_accessibility_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_accessibility_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Accessibility/svg/ic_refineui_accessibility_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_accessibility_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Accessibility/svg/ic_refineui_accessibility_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_accessibility_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Accessibility/svg/ic_refineui_accessibility_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_accessibility_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Accessibility/svg/ic_refineui_accessibility_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_accessibility_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Accessibility/svg/ic_refineui_accessibility_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_accessibility_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Accessibility/svg/ic_refineui_accessibility_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_accessibility_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Accessibility/svg/ic_refineui_accessibility_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_accessibility_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Accessibility/svg/ic_refineui_accessibility_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985329,
  					unicodeHex: "\\F08F1",
  					cssClass: "ic_refineui_accessibility_16_regular"
  				},
  				filled: {
  					unicode: 985330,
  					unicodeHex: "\\F08F2",
  					cssClass: "ic_refineui_accessibility_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985331,
  					unicodeHex: "\\F08F3",
  					cssClass: "ic_refineui_accessibility_20_regular"
  				},
  				filled: {
  					unicode: 985326,
  					unicodeHex: "\\F08EE",
  					cssClass: "ic_refineui_accessibility_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985328,
  					unicodeHex: "\\F08F0",
  					cssClass: "ic_refineui_accessibility_24_regular"
  				},
  				filled: {
  					unicode: 985329,
  					unicodeHex: "\\F08F1",
  					cssClass: "ic_refineui_accessibility_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985327,
  					unicodeHex: "\\F08EF",
  					cssClass: "ic_refineui_accessibility_28_regular"
  				},
  				filled: {
  					unicode: 985327,
  					unicodeHex: "\\F08EF",
  					cssClass: "ic_refineui_accessibility_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985326,
  					unicodeHex: "\\F08EE",
  					cssClass: "ic_refineui_accessibility_32_regular"
  				},
  				filled: {
  					unicode: 985331,
  					unicodeHex: "\\F08F3",
  					cssClass: "ic_refineui_accessibility_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985330,
  					unicodeHex: "\\F08F2",
  					cssClass: "ic_refineui_accessibility_48_regular"
  				},
  				filled: {
  					unicode: 985328,
  					unicodeHex: "\\F08F0",
  					cssClass: "ic_refineui_accessibility_48_filled"
  				}
  			}
  		}
  	},
  	Save: {
  		name: "Save",
  		slug: "save",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in save scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_save_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Save/svg/ic_refineui_save_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_save_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Save/svg/ic_refineui_save_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_save_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Save/svg/ic_refineui_save_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_save_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Save/svg/ic_refineui_save_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_save_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Save/svg/ic_refineui_save_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_save_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Save/svg/ic_refineui_save_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_save_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Save/svg/ic_refineui_save_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_save_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Save/svg/ic_refineui_save_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_save_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Save/svg/ic_refineui_save_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_save_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Save/svg/ic_refineui_save_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_save_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Save/svg/ic_refineui_save_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_save_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Save/svg/ic_refineui_save_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985334,
  					unicodeHex: "\\F08F6",
  					cssClass: "ic_refineui_save_16_regular"
  				},
  				filled: {
  					unicode: 985333,
  					unicodeHex: "\\F08F5",
  					cssClass: "ic_refineui_save_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985337,
  					unicodeHex: "\\F08F9",
  					cssClass: "ic_refineui_save_20_regular"
  				},
  				filled: {
  					unicode: 985337,
  					unicodeHex: "\\F08F9",
  					cssClass: "ic_refineui_save_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985335,
  					unicodeHex: "\\F08F7",
  					cssClass: "ic_refineui_save_24_regular"
  				},
  				filled: {
  					unicode: 985334,
  					unicodeHex: "\\F08F6",
  					cssClass: "ic_refineui_save_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985336,
  					unicodeHex: "\\F08F8",
  					cssClass: "ic_refineui_save_28_regular"
  				},
  				filled: {
  					unicode: 985336,
  					unicodeHex: "\\F08F8",
  					cssClass: "ic_refineui_save_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985332,
  					unicodeHex: "\\F08F4",
  					cssClass: "ic_refineui_save_32_regular"
  				},
  				filled: {
  					unicode: 985332,
  					unicodeHex: "\\F08F4",
  					cssClass: "ic_refineui_save_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985333,
  					unicodeHex: "\\F08F5",
  					cssClass: "ic_refineui_save_48_regular"
  				},
  				filled: {
  					unicode: 985335,
  					unicodeHex: "\\F08F7",
  					cssClass: "ic_refineui_save_48_filled"
  				}
  			}
  		}
  	},
  	Playstore: {
  		name: "Playstore",
  		slug: "playstore",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in playstore scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_playstore_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Playstore/svg/ic_refineui_playstore_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_playstore_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Playstore/svg/ic_refineui_playstore_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_playstore_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Playstore/svg/ic_refineui_playstore_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_playstore_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Playstore/svg/ic_refineui_playstore_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_playstore_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Playstore/svg/ic_refineui_playstore_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_playstore_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Playstore/svg/ic_refineui_playstore_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_playstore_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Playstore/svg/ic_refineui_playstore_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_playstore_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Playstore/svg/ic_refineui_playstore_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_playstore_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Playstore/svg/ic_refineui_playstore_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_playstore_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Playstore/svg/ic_refineui_playstore_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_playstore_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Playstore/svg/ic_refineui_playstore_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_playstore_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Playstore/svg/ic_refineui_playstore_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985341,
  					unicodeHex: "\\F08FD",
  					cssClass: "ic_refineui_playstore_16_regular"
  				},
  				filled: {
  					unicode: 985338,
  					unicodeHex: "\\F08FA",
  					cssClass: "ic_refineui_playstore_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985338,
  					unicodeHex: "\\F08FA",
  					cssClass: "ic_refineui_playstore_20_regular"
  				},
  				filled: {
  					unicode: 985342,
  					unicodeHex: "\\F08FE",
  					cssClass: "ic_refineui_playstore_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985339,
  					unicodeHex: "\\F08FB",
  					cssClass: "ic_refineui_playstore_24_regular"
  				},
  				filled: {
  					unicode: 985339,
  					unicodeHex: "\\F08FB",
  					cssClass: "ic_refineui_playstore_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985342,
  					unicodeHex: "\\F08FE",
  					cssClass: "ic_refineui_playstore_28_regular"
  				},
  				filled: {
  					unicode: 985341,
  					unicodeHex: "\\F08FD",
  					cssClass: "ic_refineui_playstore_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985343,
  					unicodeHex: "\\F08FF",
  					cssClass: "ic_refineui_playstore_32_regular"
  				},
  				filled: {
  					unicode: 985340,
  					unicodeHex: "\\F08FC",
  					cssClass: "ic_refineui_playstore_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985340,
  					unicodeHex: "\\F08FC",
  					cssClass: "ic_refineui_playstore_48_regular"
  				},
  				filled: {
  					unicode: 985343,
  					unicodeHex: "\\F08FF",
  					cssClass: "ic_refineui_playstore_48_filled"
  				}
  			}
  		}
  	},
  	Elevator: {
  		name: "Elevator",
  		slug: "elevator",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in elevator scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_elevator_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Elevator/svg/ic_refineui_elevator_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_elevator_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Elevator/svg/ic_refineui_elevator_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_elevator_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Elevator/svg/ic_refineui_elevator_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_elevator_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Elevator/svg/ic_refineui_elevator_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_elevator_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Elevator/svg/ic_refineui_elevator_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_elevator_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Elevator/svg/ic_refineui_elevator_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_elevator_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Elevator/svg/ic_refineui_elevator_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_elevator_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Elevator/svg/ic_refineui_elevator_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_elevator_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Elevator/svg/ic_refineui_elevator_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_elevator_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Elevator/svg/ic_refineui_elevator_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_elevator_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Elevator/svg/ic_refineui_elevator_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_elevator_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Elevator/svg/ic_refineui_elevator_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985352,
  					unicodeHex: "\\F0908",
  					cssClass: "ic_refineui_elevator_16_regular"
  				},
  				filled: {
  					unicode: 985355,
  					unicodeHex: "\\F090B",
  					cssClass: "ic_refineui_elevator_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985355,
  					unicodeHex: "\\F090B",
  					cssClass: "ic_refineui_elevator_20_regular"
  				},
  				filled: {
  					unicode: 985351,
  					unicodeHex: "\\F0907",
  					cssClass: "ic_refineui_elevator_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985350,
  					unicodeHex: "\\F0906",
  					cssClass: "ic_refineui_elevator_24_regular"
  				},
  				filled: {
  					unicode: 985354,
  					unicodeHex: "\\F090A",
  					cssClass: "ic_refineui_elevator_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985353,
  					unicodeHex: "\\F0909",
  					cssClass: "ic_refineui_elevator_28_regular"
  				},
  				filled: {
  					unicode: 985352,
  					unicodeHex: "\\F0908",
  					cssClass: "ic_refineui_elevator_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985354,
  					unicodeHex: "\\F090A",
  					cssClass: "ic_refineui_elevator_32_regular"
  				},
  				filled: {
  					unicode: 985353,
  					unicodeHex: "\\F0909",
  					cssClass: "ic_refineui_elevator_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985351,
  					unicodeHex: "\\F0907",
  					cssClass: "ic_refineui_elevator_48_regular"
  				},
  				filled: {
  					unicode: 985350,
  					unicodeHex: "\\F0906",
  					cssClass: "ic_refineui_elevator_48_filled"
  				}
  			}
  		}
  	},
  	Send: {
  		name: "Send",
  		slug: "send",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in send scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_send_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Send/svg/ic_refineui_send_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_send_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Send/svg/ic_refineui_send_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_send_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Send/svg/ic_refineui_send_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_send_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Send/svg/ic_refineui_send_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_send_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Send/svg/ic_refineui_send_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_send_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Send/svg/ic_refineui_send_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_send_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Send/svg/ic_refineui_send_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_send_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Send/svg/ic_refineui_send_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_send_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Send/svg/ic_refineui_send_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_send_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Send/svg/ic_refineui_send_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_send_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Send/svg/ic_refineui_send_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_send_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Send/svg/ic_refineui_send_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985358,
  					unicodeHex: "\\F090E",
  					cssClass: "ic_refineui_send_16_regular"
  				},
  				filled: {
  					unicode: 985359,
  					unicodeHex: "\\F090F",
  					cssClass: "ic_refineui_send_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985356,
  					unicodeHex: "\\F090C",
  					cssClass: "ic_refineui_send_20_regular"
  				},
  				filled: {
  					unicode: 985357,
  					unicodeHex: "\\F090D",
  					cssClass: "ic_refineui_send_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985357,
  					unicodeHex: "\\F090D",
  					cssClass: "ic_refineui_send_24_regular"
  				},
  				filled: {
  					unicode: 985360,
  					unicodeHex: "\\F0910",
  					cssClass: "ic_refineui_send_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985360,
  					unicodeHex: "\\F0910",
  					cssClass: "ic_refineui_send_28_regular"
  				},
  				filled: {
  					unicode: 985356,
  					unicodeHex: "\\F090C",
  					cssClass: "ic_refineui_send_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985361,
  					unicodeHex: "\\F0911",
  					cssClass: "ic_refineui_send_32_regular"
  				},
  				filled: {
  					unicode: 985361,
  					unicodeHex: "\\F0911",
  					cssClass: "ic_refineui_send_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985359,
  					unicodeHex: "\\F090F",
  					cssClass: "ic_refineui_send_48_regular"
  				},
  				filled: {
  					unicode: 985358,
  					unicodeHex: "\\F090E",
  					cssClass: "ic_refineui_send_48_filled"
  				}
  			}
  		}
  	},
  	Album: {
  		name: "Album",
  		slug: "album",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in album scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_album_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Album/svg/ic_refineui_album_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_album_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Album/svg/ic_refineui_album_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_album_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Album/svg/ic_refineui_album_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_album_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Album/svg/ic_refineui_album_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_album_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Album/svg/ic_refineui_album_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_album_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Album/svg/ic_refineui_album_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_album_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Album/svg/ic_refineui_album_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_album_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Album/svg/ic_refineui_album_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_album_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Album/svg/ic_refineui_album_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_album_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Album/svg/ic_refineui_album_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_album_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Album/svg/ic_refineui_album_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_album_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Album/svg/ic_refineui_album_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985370,
  					unicodeHex: "\\F091A",
  					cssClass: "ic_refineui_album_16_regular"
  				},
  				filled: {
  					unicode: 985369,
  					unicodeHex: "\\F0919",
  					cssClass: "ic_refineui_album_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985373,
  					unicodeHex: "\\F091D",
  					cssClass: "ic_refineui_album_20_regular"
  				},
  				filled: {
  					unicode: 985371,
  					unicodeHex: "\\F091B",
  					cssClass: "ic_refineui_album_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985371,
  					unicodeHex: "\\F091B",
  					cssClass: "ic_refineui_album_24_regular"
  				},
  				filled: {
  					unicode: 985368,
  					unicodeHex: "\\F0918",
  					cssClass: "ic_refineui_album_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985372,
  					unicodeHex: "\\F091C",
  					cssClass: "ic_refineui_album_28_regular"
  				},
  				filled: {
  					unicode: 985372,
  					unicodeHex: "\\F091C",
  					cssClass: "ic_refineui_album_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985368,
  					unicodeHex: "\\F0918",
  					cssClass: "ic_refineui_album_32_regular"
  				},
  				filled: {
  					unicode: 985370,
  					unicodeHex: "\\F091A",
  					cssClass: "ic_refineui_album_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985369,
  					unicodeHex: "\\F0919",
  					cssClass: "ic_refineui_album_48_regular"
  				},
  				filled: {
  					unicode: 985373,
  					unicodeHex: "\\F091D",
  					cssClass: "ic_refineui_album_48_filled"
  				}
  			}
  		}
  	},
  	Engine: {
  		name: "Engine",
  		slug: "engine",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in engine scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_engine_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Engine/svg/ic_refineui_engine_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_engine_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Engine/svg/ic_refineui_engine_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_engine_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Engine/svg/ic_refineui_engine_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_engine_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Engine/svg/ic_refineui_engine_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_engine_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Engine/svg/ic_refineui_engine_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_engine_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Engine/svg/ic_refineui_engine_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_engine_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Engine/svg/ic_refineui_engine_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_engine_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Engine/svg/ic_refineui_engine_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_engine_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Engine/svg/ic_refineui_engine_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_engine_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Engine/svg/ic_refineui_engine_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_engine_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Engine/svg/ic_refineui_engine_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_engine_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Engine/svg/ic_refineui_engine_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985377,
  					unicodeHex: "\\F0921",
  					cssClass: "ic_refineui_engine_16_regular"
  				},
  				filled: {
  					unicode: 985377,
  					unicodeHex: "\\F0921",
  					cssClass: "ic_refineui_engine_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985374,
  					unicodeHex: "\\F091E",
  					cssClass: "ic_refineui_engine_20_regular"
  				},
  				filled: {
  					unicode: 985375,
  					unicodeHex: "\\F091F",
  					cssClass: "ic_refineui_engine_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985378,
  					unicodeHex: "\\F0922",
  					cssClass: "ic_refineui_engine_24_regular"
  				},
  				filled: {
  					unicode: 985378,
  					unicodeHex: "\\F0922",
  					cssClass: "ic_refineui_engine_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985379,
  					unicodeHex: "\\F0923",
  					cssClass: "ic_refineui_engine_28_regular"
  				},
  				filled: {
  					unicode: 985374,
  					unicodeHex: "\\F091E",
  					cssClass: "ic_refineui_engine_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985375,
  					unicodeHex: "\\F091F",
  					cssClass: "ic_refineui_engine_32_regular"
  				},
  				filled: {
  					unicode: 985379,
  					unicodeHex: "\\F0923",
  					cssClass: "ic_refineui_engine_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985376,
  					unicodeHex: "\\F0920",
  					cssClass: "ic_refineui_engine_48_regular"
  				},
  				filled: {
  					unicode: 985376,
  					unicodeHex: "\\F0920",
  					cssClass: "ic_refineui_engine_48_filled"
  				}
  			}
  		}
  	},
  	Games: {
  		name: "Games",
  		slug: "games",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in games scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_games_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Games/svg/ic_refineui_games_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_games_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Games/svg/ic_refineui_games_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_games_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Games/svg/ic_refineui_games_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_games_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Games/svg/ic_refineui_games_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_games_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Games/svg/ic_refineui_games_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_games_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Games/svg/ic_refineui_games_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_games_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Games/svg/ic_refineui_games_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_games_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Games/svg/ic_refineui_games_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_games_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Games/svg/ic_refineui_games_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_games_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Games/svg/ic_refineui_games_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_games_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Games/svg/ic_refineui_games_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_games_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Games/svg/ic_refineui_games_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985383,
  					unicodeHex: "\\F0927",
  					cssClass: "ic_refineui_games_16_regular"
  				},
  				filled: {
  					unicode: 985384,
  					unicodeHex: "\\F0928",
  					cssClass: "ic_refineui_games_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985380,
  					unicodeHex: "\\F0924",
  					cssClass: "ic_refineui_games_20_regular"
  				},
  				filled: {
  					unicode: 985382,
  					unicodeHex: "\\F0926",
  					cssClass: "ic_refineui_games_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985382,
  					unicodeHex: "\\F0926",
  					cssClass: "ic_refineui_games_24_regular"
  				},
  				filled: {
  					unicode: 985385,
  					unicodeHex: "\\F0929",
  					cssClass: "ic_refineui_games_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985381,
  					unicodeHex: "\\F0925",
  					cssClass: "ic_refineui_games_28_regular"
  				},
  				filled: {
  					unicode: 985381,
  					unicodeHex: "\\F0925",
  					cssClass: "ic_refineui_games_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985385,
  					unicodeHex: "\\F0929",
  					cssClass: "ic_refineui_games_32_regular"
  				},
  				filled: {
  					unicode: 985383,
  					unicodeHex: "\\F0927",
  					cssClass: "ic_refineui_games_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985384,
  					unicodeHex: "\\F0928",
  					cssClass: "ic_refineui_games_48_regular"
  				},
  				filled: {
  					unicode: 985380,
  					unicodeHex: "\\F0924",
  					cssClass: "ic_refineui_games_48_filled"
  				}
  			}
  		}
  	},
  	Textbox: {
  		name: "Textbox",
  		slug: "textbox",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in textbox scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_textbox_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Textbox/svg/ic_refineui_textbox_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_textbox_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Textbox/svg/ic_refineui_textbox_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_textbox_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Textbox/svg/ic_refineui_textbox_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_textbox_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Textbox/svg/ic_refineui_textbox_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_textbox_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Textbox/svg/ic_refineui_textbox_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_textbox_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Textbox/svg/ic_refineui_textbox_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_textbox_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Textbox/svg/ic_refineui_textbox_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_textbox_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Textbox/svg/ic_refineui_textbox_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_textbox_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Textbox/svg/ic_refineui_textbox_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_textbox_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Textbox/svg/ic_refineui_textbox_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_textbox_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Textbox/svg/ic_refineui_textbox_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_textbox_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Textbox/svg/ic_refineui_textbox_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985414,
  					unicodeHex: "\\F0946",
  					cssClass: "ic_refineui_textbox_16_regular"
  				},
  				filled: {
  					unicode: 985411,
  					unicodeHex: "\\F0943",
  					cssClass: "ic_refineui_textbox_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985410,
  					unicodeHex: "\\F0942",
  					cssClass: "ic_refineui_textbox_20_regular"
  				},
  				filled: {
  					unicode: 985413,
  					unicodeHex: "\\F0945",
  					cssClass: "ic_refineui_textbox_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985412,
  					unicodeHex: "\\F0944",
  					cssClass: "ic_refineui_textbox_24_regular"
  				},
  				filled: {
  					unicode: 985410,
  					unicodeHex: "\\F0942",
  					cssClass: "ic_refineui_textbox_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985415,
  					unicodeHex: "\\F0947",
  					cssClass: "ic_refineui_textbox_28_regular"
  				},
  				filled: {
  					unicode: 985414,
  					unicodeHex: "\\F0946",
  					cssClass: "ic_refineui_textbox_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985411,
  					unicodeHex: "\\F0943",
  					cssClass: "ic_refineui_textbox_32_regular"
  				},
  				filled: {
  					unicode: 985412,
  					unicodeHex: "\\F0944",
  					cssClass: "ic_refineui_textbox_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985413,
  					unicodeHex: "\\F0945",
  					cssClass: "ic_refineui_textbox_48_regular"
  				},
  				filled: {
  					unicode: 985415,
  					unicodeHex: "\\F0947",
  					cssClass: "ic_refineui_textbox_48_filled"
  				}
  			}
  		}
  	},
  	Tag: {
  		name: "Tag",
  		slug: "tag",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in tag scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_tag_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Tag/svg/ic_refineui_tag_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tag_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Tag/svg/ic_refineui_tag_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tag_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Tag/svg/ic_refineui_tag_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tag_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Tag/svg/ic_refineui_tag_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tag_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Tag/svg/ic_refineui_tag_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tag_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Tag/svg/ic_refineui_tag_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tag_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Tag/svg/ic_refineui_tag_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tag_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Tag/svg/ic_refineui_tag_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tag_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Tag/svg/ic_refineui_tag_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tag_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Tag/svg/ic_refineui_tag_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_tag_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Tag/svg/ic_refineui_tag_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_tag_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Tag/svg/ic_refineui_tag_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985425,
  					unicodeHex: "\\F0951",
  					cssClass: "ic_refineui_tag_16_regular"
  				},
  				filled: {
  					unicode: 985426,
  					unicodeHex: "\\F0952",
  					cssClass: "ic_refineui_tag_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985427,
  					unicodeHex: "\\F0953",
  					cssClass: "ic_refineui_tag_20_regular"
  				},
  				filled: {
  					unicode: 985424,
  					unicodeHex: "\\F0950",
  					cssClass: "ic_refineui_tag_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985426,
  					unicodeHex: "\\F0952",
  					cssClass: "ic_refineui_tag_24_regular"
  				},
  				filled: {
  					unicode: 985427,
  					unicodeHex: "\\F0953",
  					cssClass: "ic_refineui_tag_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985423,
  					unicodeHex: "\\F094F",
  					cssClass: "ic_refineui_tag_28_regular"
  				},
  				filled: {
  					unicode: 985423,
  					unicodeHex: "\\F094F",
  					cssClass: "ic_refineui_tag_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985422,
  					unicodeHex: "\\F094E",
  					cssClass: "ic_refineui_tag_32_regular"
  				},
  				filled: {
  					unicode: 985425,
  					unicodeHex: "\\F0951",
  					cssClass: "ic_refineui_tag_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985424,
  					unicodeHex: "\\F0950",
  					cssClass: "ic_refineui_tag_48_regular"
  				},
  				filled: {
  					unicode: 985422,
  					unicodeHex: "\\F094E",
  					cssClass: "ic_refineui_tag_48_filled"
  				}
  			}
  		}
  	},
  	Global: {
  		name: "Global",
  		slug: "global",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in global scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_global_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Global/svg/ic_refineui_global_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_global_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Global/svg/ic_refineui_global_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_global_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Global/svg/ic_refineui_global_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_global_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Global/svg/ic_refineui_global_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_global_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Global/svg/ic_refineui_global_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_global_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Global/svg/ic_refineui_global_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_global_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Global/svg/ic_refineui_global_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_global_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Global/svg/ic_refineui_global_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_global_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Global/svg/ic_refineui_global_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_global_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Global/svg/ic_refineui_global_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_global_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Global/svg/ic_refineui_global_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_global_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Global/svg/ic_refineui_global_16_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985433,
  					unicodeHex: "\\F0959",
  					cssClass: "ic_refineui_global_16_regular"
  				},
  				filled: {
  					unicode: 985428,
  					unicodeHex: "\\F0954",
  					cssClass: "ic_refineui_global_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985428,
  					unicodeHex: "\\F0954",
  					cssClass: "ic_refineui_global_20_regular"
  				},
  				filled: {
  					unicode: 985432,
  					unicodeHex: "\\F0958",
  					cssClass: "ic_refineui_global_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985431,
  					unicodeHex: "\\F0957",
  					cssClass: "ic_refineui_global_24_regular"
  				},
  				filled: {
  					unicode: 985429,
  					unicodeHex: "\\F0955",
  					cssClass: "ic_refineui_global_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985430,
  					unicodeHex: "\\F0956",
  					cssClass: "ic_refineui_global_28_regular"
  				},
  				filled: {
  					unicode: 985431,
  					unicodeHex: "\\F0957",
  					cssClass: "ic_refineui_global_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985429,
  					unicodeHex: "\\F0955",
  					cssClass: "ic_refineui_global_32_regular"
  				},
  				filled: {
  					unicode: 985430,
  					unicodeHex: "\\F0956",
  					cssClass: "ic_refineui_global_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985432,
  					unicodeHex: "\\F0958",
  					cssClass: "ic_refineui_global_48_regular"
  				},
  				filled: {
  					unicode: 985433,
  					unicodeHex: "\\F0959",
  					cssClass: "ic_refineui_global_48_filled"
  				}
  			}
  		}
  	},
  	Wand: {
  		name: "Wand",
  		slug: "wand",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in wand scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_wand_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Wand/svg/ic_refineui_wand_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wand_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Wand/svg/ic_refineui_wand_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wand_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Wand/svg/ic_refineui_wand_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wand_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Wand/svg/ic_refineui_wand_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wand_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Wand/svg/ic_refineui_wand_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wand_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Wand/svg/ic_refineui_wand_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wand_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Wand/svg/ic_refineui_wand_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wand_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Wand/svg/ic_refineui_wand_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wand_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Wand/svg/ic_refineui_wand_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wand_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Wand/svg/ic_refineui_wand_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_wand_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Wand/svg/ic_refineui_wand_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_wand_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Wand/svg/ic_refineui_wand_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985453,
  					unicodeHex: "\\F096D",
  					cssClass: "ic_refineui_wand_16_regular"
  				},
  				filled: {
  					unicode: 985453,
  					unicodeHex: "\\F096D",
  					cssClass: "ic_refineui_wand_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985452,
  					unicodeHex: "\\F096C",
  					cssClass: "ic_refineui_wand_20_regular"
  				},
  				filled: {
  					unicode: 985455,
  					unicodeHex: "\\F096F",
  					cssClass: "ic_refineui_wand_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985455,
  					unicodeHex: "\\F096F",
  					cssClass: "ic_refineui_wand_24_regular"
  				},
  				filled: {
  					unicode: 985452,
  					unicodeHex: "\\F096C",
  					cssClass: "ic_refineui_wand_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985456,
  					unicodeHex: "\\F0970",
  					cssClass: "ic_refineui_wand_28_regular"
  				},
  				filled: {
  					unicode: 985456,
  					unicodeHex: "\\F0970",
  					cssClass: "ic_refineui_wand_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985457,
  					unicodeHex: "\\F0971",
  					cssClass: "ic_refineui_wand_32_regular"
  				},
  				filled: {
  					unicode: 985454,
  					unicodeHex: "\\F096E",
  					cssClass: "ic_refineui_wand_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985454,
  					unicodeHex: "\\F096E",
  					cssClass: "ic_refineui_wand_48_regular"
  				},
  				filled: {
  					unicode: 985457,
  					unicodeHex: "\\F0971",
  					cssClass: "ic_refineui_wand_48_filled"
  				}
  			}
  		}
  	},
  	Notepad: {
  		name: "Notepad",
  		slug: "notepad",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in notepad scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_notepad_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Notepad/svg/ic_refineui_notepad_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_notepad_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Notepad/svg/ic_refineui_notepad_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_notepad_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Notepad/svg/ic_refineui_notepad_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_notepad_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Notepad/svg/ic_refineui_notepad_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_notepad_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Notepad/svg/ic_refineui_notepad_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_notepad_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Notepad/svg/ic_refineui_notepad_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_notepad_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Notepad/svg/ic_refineui_notepad_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_notepad_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Notepad/svg/ic_refineui_notepad_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_notepad_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Notepad/svg/ic_refineui_notepad_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_notepad_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Notepad/svg/ic_refineui_notepad_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_notepad_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Notepad/svg/ic_refineui_notepad_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_notepad_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Notepad/svg/ic_refineui_notepad_48_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985467,
  					unicodeHex: "\\F097B",
  					cssClass: "ic_refineui_notepad_16_regular"
  				},
  				filled: {
  					unicode: 985465,
  					unicodeHex: "\\F0979",
  					cssClass: "ic_refineui_notepad_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985464,
  					unicodeHex: "\\F0978",
  					cssClass: "ic_refineui_notepad_20_regular"
  				},
  				filled: {
  					unicode: 985467,
  					unicodeHex: "\\F097B",
  					cssClass: "ic_refineui_notepad_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985468,
  					unicodeHex: "\\F097C",
  					cssClass: "ic_refineui_notepad_24_regular"
  				},
  				filled: {
  					unicode: 985464,
  					unicodeHex: "\\F0978",
  					cssClass: "ic_refineui_notepad_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985465,
  					unicodeHex: "\\F0979",
  					cssClass: "ic_refineui_notepad_28_regular"
  				},
  				filled: {
  					unicode: 985468,
  					unicodeHex: "\\F097C",
  					cssClass: "ic_refineui_notepad_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985469,
  					unicodeHex: "\\F097D",
  					cssClass: "ic_refineui_notepad_32_regular"
  				},
  				filled: {
  					unicode: 985466,
  					unicodeHex: "\\F097A",
  					cssClass: "ic_refineui_notepad_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985466,
  					unicodeHex: "\\F097A",
  					cssClass: "ic_refineui_notepad_48_regular"
  				},
  				filled: {
  					unicode: 985469,
  					unicodeHex: "\\F097D",
  					cssClass: "ic_refineui_notepad_48_filled"
  				}
  			}
  		}
  	},
  	Open: {
  		name: "Open",
  		slug: "open",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in open scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_open_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Open/svg/ic_refineui_open_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_open_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Open/svg/ic_refineui_open_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_open_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Open/svg/ic_refineui_open_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_open_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Open/svg/ic_refineui_open_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_open_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Open/svg/ic_refineui_open_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_open_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Open/svg/ic_refineui_open_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_open_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Open/svg/ic_refineui_open_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_open_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Open/svg/ic_refineui_open_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_open_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Open/svg/ic_refineui_open_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_open_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Open/svg/ic_refineui_open_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_open_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Open/svg/ic_refineui_open_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_open_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Open/svg/ic_refineui_open_20_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985474,
  					unicodeHex: "\\F0982",
  					cssClass: "ic_refineui_open_16_regular"
  				},
  				filled: {
  					unicode: 985472,
  					unicodeHex: "\\F0980",
  					cssClass: "ic_refineui_open_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985475,
  					unicodeHex: "\\F0983",
  					cssClass: "ic_refineui_open_20_regular"
  				},
  				filled: {
  					unicode: 985474,
  					unicodeHex: "\\F0982",
  					cssClass: "ic_refineui_open_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985472,
  					unicodeHex: "\\F0980",
  					cssClass: "ic_refineui_open_24_regular"
  				},
  				filled: {
  					unicode: 985471,
  					unicodeHex: "\\F097F",
  					cssClass: "ic_refineui_open_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985471,
  					unicodeHex: "\\F097F",
  					cssClass: "ic_refineui_open_28_regular"
  				},
  				filled: {
  					unicode: 985475,
  					unicodeHex: "\\F0983",
  					cssClass: "ic_refineui_open_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985470,
  					unicodeHex: "\\F097E",
  					cssClass: "ic_refineui_open_32_regular"
  				},
  				filled: {
  					unicode: 985470,
  					unicodeHex: "\\F097E",
  					cssClass: "ic_refineui_open_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985473,
  					unicodeHex: "\\F0981",
  					cssClass: "ic_refineui_open_48_regular"
  				},
  				filled: {
  					unicode: 985473,
  					unicodeHex: "\\F0981",
  					cssClass: "ic_refineui_open_48_filled"
  				}
  			}
  		}
  	},
  	Git: {
  		name: "Git",
  		slug: "git",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in git scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_git_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Git/svg/ic_refineui_git_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_git_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Git/svg/ic_refineui_git_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_git_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Git/svg/ic_refineui_git_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_git_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Git/svg/ic_refineui_git_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_git_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Git/svg/ic_refineui_git_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_git_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Git/svg/ic_refineui_git_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_git_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Git/svg/ic_refineui_git_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_git_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Git/svg/ic_refineui_git_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_git_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Git/svg/ic_refineui_git_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_git_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Git/svg/ic_refineui_git_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_git_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Git/svg/ic_refineui_git_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_git_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Git/svg/ic_refineui_git_20_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985479,
  					unicodeHex: "\\F0987",
  					cssClass: "ic_refineui_git_16_regular"
  				},
  				filled: {
  					unicode: 985477,
  					unicodeHex: "\\F0985",
  					cssClass: "ic_refineui_git_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985481,
  					unicodeHex: "\\F0989",
  					cssClass: "ic_refineui_git_20_regular"
  				},
  				filled: {
  					unicode: 985481,
  					unicodeHex: "\\F0989",
  					cssClass: "ic_refineui_git_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985477,
  					unicodeHex: "\\F0985",
  					cssClass: "ic_refineui_git_24_regular"
  				},
  				filled: {
  					unicode: 985478,
  					unicodeHex: "\\F0986",
  					cssClass: "ic_refineui_git_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985480,
  					unicodeHex: "\\F0988",
  					cssClass: "ic_refineui_git_28_regular"
  				},
  				filled: {
  					unicode: 985480,
  					unicodeHex: "\\F0988",
  					cssClass: "ic_refineui_git_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985476,
  					unicodeHex: "\\F0984",
  					cssClass: "ic_refineui_git_32_regular"
  				},
  				filled: {
  					unicode: 985476,
  					unicodeHex: "\\F0984",
  					cssClass: "ic_refineui_git_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985478,
  					unicodeHex: "\\F0986",
  					cssClass: "ic_refineui_git_48_regular"
  				},
  				filled: {
  					unicode: 985479,
  					unicodeHex: "\\F0987",
  					cssClass: "ic_refineui_git_48_filled"
  				}
  			}
  		}
  	},
  	Xray: {
  		name: "Xray",
  		slug: "xray",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in xray scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_xray_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Xray/svg/ic_refineui_xray_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_xray_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Xray/svg/ic_refineui_xray_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_xray_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Xray/svg/ic_refineui_xray_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_xray_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Xray/svg/ic_refineui_xray_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_xray_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Xray/svg/ic_refineui_xray_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_xray_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Xray/svg/ic_refineui_xray_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_xray_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Xray/svg/ic_refineui_xray_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_xray_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Xray/svg/ic_refineui_xray_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_xray_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Xray/svg/ic_refineui_xray_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_xray_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Xray/svg/ic_refineui_xray_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_xray_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Xray/svg/ic_refineui_xray_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_xray_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Xray/svg/ic_refineui_xray_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985490,
  					unicodeHex: "\\F0992",
  					cssClass: "ic_refineui_xray_16_regular"
  				},
  				filled: {
  					unicode: 985493,
  					unicodeHex: "\\F0995",
  					cssClass: "ic_refineui_xray_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985493,
  					unicodeHex: "\\F0995",
  					cssClass: "ic_refineui_xray_20_regular"
  				},
  				filled: {
  					unicode: 985489,
  					unicodeHex: "\\F0991",
  					cssClass: "ic_refineui_xray_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985491,
  					unicodeHex: "\\F0993",
  					cssClass: "ic_refineui_xray_24_regular"
  				},
  				filled: {
  					unicode: 985492,
  					unicodeHex: "\\F0994",
  					cssClass: "ic_refineui_xray_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985488,
  					unicodeHex: "\\F0990",
  					cssClass: "ic_refineui_xray_28_regular"
  				},
  				filled: {
  					unicode: 985490,
  					unicodeHex: "\\F0992",
  					cssClass: "ic_refineui_xray_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985492,
  					unicodeHex: "\\F0994",
  					cssClass: "ic_refineui_xray_32_regular"
  				},
  				filled: {
  					unicode: 985491,
  					unicodeHex: "\\F0993",
  					cssClass: "ic_refineui_xray_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985489,
  					unicodeHex: "\\F0991",
  					cssClass: "ic_refineui_xray_48_regular"
  				},
  				filled: {
  					unicode: 985488,
  					unicodeHex: "\\F0990",
  					cssClass: "ic_refineui_xray_48_filled"
  				}
  			}
  		}
  	},
  	Keyboard: {
  		name: "Keyboard",
  		slug: "keyboard",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in keyboard scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_keyboard_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Keyboard/svg/ic_refineui_keyboard_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_keyboard_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Keyboard/svg/ic_refineui_keyboard_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_keyboard_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Keyboard/svg/ic_refineui_keyboard_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_keyboard_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Keyboard/svg/ic_refineui_keyboard_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_keyboard_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Keyboard/svg/ic_refineui_keyboard_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_keyboard_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Keyboard/svg/ic_refineui_keyboard_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_keyboard_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Keyboard/svg/ic_refineui_keyboard_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_keyboard_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Keyboard/svg/ic_refineui_keyboard_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_keyboard_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Keyboard/svg/ic_refineui_keyboard_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_keyboard_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Keyboard/svg/ic_refineui_keyboard_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_keyboard_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Keyboard/svg/ic_refineui_keyboard_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_keyboard_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Keyboard/svg/ic_refineui_keyboard_32_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985495,
  					unicodeHex: "\\F0997",
  					cssClass: "ic_refineui_keyboard_16_regular"
  				},
  				filled: {
  					unicode: 985497,
  					unicodeHex: "\\F0999",
  					cssClass: "ic_refineui_keyboard_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985494,
  					unicodeHex: "\\F0996",
  					cssClass: "ic_refineui_keyboard_20_regular"
  				},
  				filled: {
  					unicode: 985495,
  					unicodeHex: "\\F0997",
  					cssClass: "ic_refineui_keyboard_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985497,
  					unicodeHex: "\\F0999",
  					cssClass: "ic_refineui_keyboard_24_regular"
  				},
  				filled: {
  					unicode: 985498,
  					unicodeHex: "\\F099A",
  					cssClass: "ic_refineui_keyboard_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985498,
  					unicodeHex: "\\F099A",
  					cssClass: "ic_refineui_keyboard_28_regular"
  				},
  				filled: {
  					unicode: 985494,
  					unicodeHex: "\\F0996",
  					cssClass: "ic_refineui_keyboard_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985499,
  					unicodeHex: "\\F099B",
  					cssClass: "ic_refineui_keyboard_32_regular"
  				},
  				filled: {
  					unicode: 985499,
  					unicodeHex: "\\F099B",
  					cssClass: "ic_refineui_keyboard_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985496,
  					unicodeHex: "\\F0998",
  					cssClass: "ic_refineui_keyboard_48_regular"
  				},
  				filled: {
  					unicode: 985496,
  					unicodeHex: "\\F0998",
  					cssClass: "ic_refineui_keyboard_48_filled"
  				}
  			}
  		}
  	},
  	Clock: {
  		name: "Clock",
  		slug: "clock",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in clock scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_clock_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Clock/svg/ic_refineui_clock_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clock_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Clock/svg/ic_refineui_clock_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clock_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Clock/svg/ic_refineui_clock_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clock_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Clock/svg/ic_refineui_clock_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clock_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Clock/svg/ic_refineui_clock_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clock_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Clock/svg/ic_refineui_clock_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clock_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Clock/svg/ic_refineui_clock_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clock_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Clock/svg/ic_refineui_clock_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clock_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Clock/svg/ic_refineui_clock_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clock_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Clock/svg/ic_refineui_clock_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clock_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Clock/svg/ic_refineui_clock_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clock_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Clock/svg/ic_refineui_clock_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985510,
  					unicodeHex: "\\F09A6",
  					cssClass: "ic_refineui_clock_16_regular"
  				},
  				filled: {
  					unicode: 985511,
  					unicodeHex: "\\F09A7",
  					cssClass: "ic_refineui_clock_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985506,
  					unicodeHex: "\\F09A2",
  					cssClass: "ic_refineui_clock_20_regular"
  				},
  				filled: {
  					unicode: 985507,
  					unicodeHex: "\\F09A3",
  					cssClass: "ic_refineui_clock_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985508,
  					unicodeHex: "\\F09A4",
  					cssClass: "ic_refineui_clock_24_regular"
  				},
  				filled: {
  					unicode: 985510,
  					unicodeHex: "\\F09A6",
  					cssClass: "ic_refineui_clock_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985507,
  					unicodeHex: "\\F09A3",
  					cssClass: "ic_refineui_clock_28_regular"
  				},
  				filled: {
  					unicode: 985508,
  					unicodeHex: "\\F09A4",
  					cssClass: "ic_refineui_clock_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985511,
  					unicodeHex: "\\F09A7",
  					cssClass: "ic_refineui_clock_32_regular"
  				},
  				filled: {
  					unicode: 985509,
  					unicodeHex: "\\F09A5",
  					cssClass: "ic_refineui_clock_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985509,
  					unicodeHex: "\\F09A5",
  					cssClass: "ic_refineui_clock_48_regular"
  				},
  				filled: {
  					unicode: 985506,
  					unicodeHex: "\\F09A2",
  					cssClass: "ic_refineui_clock_48_filled"
  				}
  			}
  		}
  	},
  	Ram: {
  		name: "Ram",
  		slug: "ram",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in ram scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_ram_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Ram/svg/ic_refineui_ram_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ram_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Ram/svg/ic_refineui_ram_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ram_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Ram/svg/ic_refineui_ram_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ram_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Ram/svg/ic_refineui_ram_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ram_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Ram/svg/ic_refineui_ram_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ram_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Ram/svg/ic_refineui_ram_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ram_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Ram/svg/ic_refineui_ram_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ram_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Ram/svg/ic_refineui_ram_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ram_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Ram/svg/ic_refineui_ram_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ram_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Ram/svg/ic_refineui_ram_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_ram_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Ram/svg/ic_refineui_ram_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_ram_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Ram/svg/ic_refineui_ram_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985521,
  					unicodeHex: "\\F09B1",
  					cssClass: "ic_refineui_ram_16_regular"
  				},
  				filled: {
  					unicode: 985523,
  					unicodeHex: "\\F09B3",
  					cssClass: "ic_refineui_ram_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985518,
  					unicodeHex: "\\F09AE",
  					cssClass: "ic_refineui_ram_20_regular"
  				},
  				filled: {
  					unicode: 985519,
  					unicodeHex: "\\F09AF",
  					cssClass: "ic_refineui_ram_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985520,
  					unicodeHex: "\\F09B0",
  					cssClass: "ic_refineui_ram_24_regular"
  				},
  				filled: {
  					unicode: 985522,
  					unicodeHex: "\\F09B2",
  					cssClass: "ic_refineui_ram_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985519,
  					unicodeHex: "\\F09AF",
  					cssClass: "ic_refineui_ram_28_regular"
  				},
  				filled: {
  					unicode: 985520,
  					unicodeHex: "\\F09B0",
  					cssClass: "ic_refineui_ram_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985523,
  					unicodeHex: "\\F09B3",
  					cssClass: "ic_refineui_ram_32_regular"
  				},
  				filled: {
  					unicode: 985521,
  					unicodeHex: "\\F09B1",
  					cssClass: "ic_refineui_ram_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985522,
  					unicodeHex: "\\F09B2",
  					cssClass: "ic_refineui_ram_48_regular"
  				},
  				filled: {
  					unicode: 985518,
  					unicodeHex: "\\F09AE",
  					cssClass: "ic_refineui_ram_48_filled"
  				}
  			}
  		}
  	},
  	Door: {
  		name: "Door",
  		slug: "door",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in door scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_door_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Door/svg/ic_refineui_door_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_door_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Door/svg/ic_refineui_door_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_door_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Door/svg/ic_refineui_door_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_door_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Door/svg/ic_refineui_door_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_door_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Door/svg/ic_refineui_door_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_door_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Door/svg/ic_refineui_door_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_door_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Door/svg/ic_refineui_door_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_door_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Door/svg/ic_refineui_door_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_door_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Door/svg/ic_refineui_door_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_door_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Door/svg/ic_refineui_door_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_door_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Door/svg/ic_refineui_door_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_door_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Door/svg/ic_refineui_door_28_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985551,
  					unicodeHex: "\\F09CF",
  					cssClass: "ic_refineui_door_16_regular"
  				},
  				filled: {
  					unicode: 985552,
  					unicodeHex: "\\F09D0",
  					cssClass: "ic_refineui_door_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985548,
  					unicodeHex: "\\F09CC",
  					cssClass: "ic_refineui_door_20_regular"
  				},
  				filled: {
  					unicode: 985548,
  					unicodeHex: "\\F09CC",
  					cssClass: "ic_refineui_door_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985550,
  					unicodeHex: "\\F09CE",
  					cssClass: "ic_refineui_door_24_regular"
  				},
  				filled: {
  					unicode: 985551,
  					unicodeHex: "\\F09CF",
  					cssClass: "ic_refineui_door_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985553,
  					unicodeHex: "\\F09D1",
  					cssClass: "ic_refineui_door_28_regular"
  				},
  				filled: {
  					unicode: 985549,
  					unicodeHex: "\\F09CD",
  					cssClass: "ic_refineui_door_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985549,
  					unicodeHex: "\\F09CD",
  					cssClass: "ic_refineui_door_32_regular"
  				},
  				filled: {
  					unicode: 985553,
  					unicodeHex: "\\F09D1",
  					cssClass: "ic_refineui_door_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985552,
  					unicodeHex: "\\F09D0",
  					cssClass: "ic_refineui_door_48_regular"
  				},
  				filled: {
  					unicode: 985550,
  					unicodeHex: "\\F09CE",
  					cssClass: "ic_refineui_door_48_filled"
  				}
  			}
  		}
  	},
  	Block: {
  		name: "Block",
  		slug: "block",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in block scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_block_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Block/svg/ic_refineui_block_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_block_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Block/svg/ic_refineui_block_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_block_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Block/svg/ic_refineui_block_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_block_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Block/svg/ic_refineui_block_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_block_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Block/svg/ic_refineui_block_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_block_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Block/svg/ic_refineui_block_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_block_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Block/svg/ic_refineui_block_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_block_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Block/svg/ic_refineui_block_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_block_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Block/svg/ic_refineui_block_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_block_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Block/svg/ic_refineui_block_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_block_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Block/svg/ic_refineui_block_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_block_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Block/svg/ic_refineui_block_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985562,
  					unicodeHex: "\\F09DA",
  					cssClass: "ic_refineui_block_16_regular"
  				},
  				filled: {
  					unicode: 985564,
  					unicodeHex: "\\F09DC",
  					cssClass: "ic_refineui_block_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985565,
  					unicodeHex: "\\F09DD",
  					cssClass: "ic_refineui_block_20_regular"
  				},
  				filled: {
  					unicode: 985562,
  					unicodeHex: "\\F09DA",
  					cssClass: "ic_refineui_block_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985563,
  					unicodeHex: "\\F09DB",
  					cssClass: "ic_refineui_block_24_regular"
  				},
  				filled: {
  					unicode: 985565,
  					unicodeHex: "\\F09DD",
  					cssClass: "ic_refineui_block_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985564,
  					unicodeHex: "\\F09DC",
  					cssClass: "ic_refineui_block_28_regular"
  				},
  				filled: {
  					unicode: 985561,
  					unicodeHex: "\\F09D9",
  					cssClass: "ic_refineui_block_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985560,
  					unicodeHex: "\\F09D8",
  					cssClass: "ic_refineui_block_32_regular"
  				},
  				filled: {
  					unicode: 985563,
  					unicodeHex: "\\F09DB",
  					cssClass: "ic_refineui_block_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985561,
  					unicodeHex: "\\F09D9",
  					cssClass: "ic_refineui_block_48_regular"
  				},
  				filled: {
  					unicode: 985560,
  					unicodeHex: "\\F09D8",
  					cssClass: "ic_refineui_block_48_filled"
  				}
  			}
  		}
  	},
  	Share: {
  		name: "Share",
  		slug: "share",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in share scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_share_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Share/svg/ic_refineui_share_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_share_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Share/svg/ic_refineui_share_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_share_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Share/svg/ic_refineui_share_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_share_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Share/svg/ic_refineui_share_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_share_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Share/svg/ic_refineui_share_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_share_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Share/svg/ic_refineui_share_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_share_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Share/svg/ic_refineui_share_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_share_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Share/svg/ic_refineui_share_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_share_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Share/svg/ic_refineui_share_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_share_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Share/svg/ic_refineui_share_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_share_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Share/svg/ic_refineui_share_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_share_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Share/svg/ic_refineui_share_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985582,
  					unicodeHex: "\\F09EE",
  					cssClass: "ic_refineui_share_16_regular"
  				},
  				filled: {
  					unicode: 985583,
  					unicodeHex: "\\F09EF",
  					cssClass: "ic_refineui_share_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985578,
  					unicodeHex: "\\F09EA",
  					cssClass: "ic_refineui_share_20_regular"
  				},
  				filled: {
  					unicode: 985579,
  					unicodeHex: "\\F09EB",
  					cssClass: "ic_refineui_share_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985580,
  					unicodeHex: "\\F09EC",
  					cssClass: "ic_refineui_share_24_regular"
  				},
  				filled: {
  					unicode: 985582,
  					unicodeHex: "\\F09EE",
  					cssClass: "ic_refineui_share_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985583,
  					unicodeHex: "\\F09EF",
  					cssClass: "ic_refineui_share_28_regular"
  				},
  				filled: {
  					unicode: 985580,
  					unicodeHex: "\\F09EC",
  					cssClass: "ic_refineui_share_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985579,
  					unicodeHex: "\\F09EB",
  					cssClass: "ic_refineui_share_32_regular"
  				},
  				filled: {
  					unicode: 985581,
  					unicodeHex: "\\F09ED",
  					cssClass: "ic_refineui_share_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985581,
  					unicodeHex: "\\F09ED",
  					cssClass: "ic_refineui_share_48_regular"
  				},
  				filled: {
  					unicode: 985578,
  					unicodeHex: "\\F09EA",
  					cssClass: "ic_refineui_share_48_filled"
  				}
  			}
  		}
  	},
  	Gif: {
  		name: "Gif",
  		slug: "gif",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in gif scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_gif_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Gif/svg/ic_refineui_gif_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gif_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Gif/svg/ic_refineui_gif_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gif_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Gif/svg/ic_refineui_gif_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gif_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Gif/svg/ic_refineui_gif_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gif_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Gif/svg/ic_refineui_gif_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gif_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Gif/svg/ic_refineui_gif_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gif_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Gif/svg/ic_refineui_gif_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gif_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Gif/svg/ic_refineui_gif_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gif_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Gif/svg/ic_refineui_gif_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gif_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Gif/svg/ic_refineui_gif_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_gif_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Gif/svg/ic_refineui_gif_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_gif_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Gif/svg/ic_refineui_gif_28_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985586,
  					unicodeHex: "\\F09F2",
  					cssClass: "ic_refineui_gif_16_regular"
  				},
  				filled: {
  					unicode: 985586,
  					unicodeHex: "\\F09F2",
  					cssClass: "ic_refineui_gif_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985584,
  					unicodeHex: "\\F09F0",
  					cssClass: "ic_refineui_gif_20_regular"
  				},
  				filled: {
  					unicode: 985588,
  					unicodeHex: "\\F09F4",
  					cssClass: "ic_refineui_gif_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985587,
  					unicodeHex: "\\F09F3",
  					cssClass: "ic_refineui_gif_24_regular"
  				},
  				filled: {
  					unicode: 985585,
  					unicodeHex: "\\F09F1",
  					cssClass: "ic_refineui_gif_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985588,
  					unicodeHex: "\\F09F4",
  					cssClass: "ic_refineui_gif_28_regular"
  				},
  				filled: {
  					unicode: 985589,
  					unicodeHex: "\\F09F5",
  					cssClass: "ic_refineui_gif_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985589,
  					unicodeHex: "\\F09F5",
  					cssClass: "ic_refineui_gif_32_regular"
  				},
  				filled: {
  					unicode: 985584,
  					unicodeHex: "\\F09F0",
  					cssClass: "ic_refineui_gif_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985585,
  					unicodeHex: "\\F09F1",
  					cssClass: "ic_refineui_gif_48_regular"
  				},
  				filled: {
  					unicode: 985587,
  					unicodeHex: "\\F09F3",
  					cssClass: "ic_refineui_gif_48_filled"
  				}
  			}
  		}
  	},
  	Grid: {
  		name: "Grid",
  		slug: "grid",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in grid scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_grid_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Grid/svg/ic_refineui_grid_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_grid_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Grid/svg/ic_refineui_grid_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_grid_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Grid/svg/ic_refineui_grid_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_grid_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Grid/svg/ic_refineui_grid_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_grid_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Grid/svg/ic_refineui_grid_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_grid_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Grid/svg/ic_refineui_grid_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_grid_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Grid/svg/ic_refineui_grid_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_grid_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Grid/svg/ic_refineui_grid_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_grid_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Grid/svg/ic_refineui_grid_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_grid_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Grid/svg/ic_refineui_grid_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_grid_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Grid/svg/ic_refineui_grid_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_grid_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Grid/svg/ic_refineui_grid_48_regular.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985594,
  					unicodeHex: "\\F09FA",
  					cssClass: "ic_refineui_grid_16_regular"
  				},
  				filled: {
  					unicode: 985591,
  					unicodeHex: "\\F09F7",
  					cssClass: "ic_refineui_grid_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985590,
  					unicodeHex: "\\F09F6",
  					cssClass: "ic_refineui_grid_20_regular"
  				},
  				filled: {
  					unicode: 985595,
  					unicodeHex: "\\F09FB",
  					cssClass: "ic_refineui_grid_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985593,
  					unicodeHex: "\\F09F9",
  					cssClass: "ic_refineui_grid_24_regular"
  				},
  				filled: {
  					unicode: 985592,
  					unicodeHex: "\\F09F8",
  					cssClass: "ic_refineui_grid_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985592,
  					unicodeHex: "\\F09F8",
  					cssClass: "ic_refineui_grid_28_regular"
  				},
  				filled: {
  					unicode: 985594,
  					unicodeHex: "\\F09FA",
  					cssClass: "ic_refineui_grid_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985591,
  					unicodeHex: "\\F09F7",
  					cssClass: "ic_refineui_grid_32_regular"
  				},
  				filled: {
  					unicode: 985590,
  					unicodeHex: "\\F09F6",
  					cssClass: "ic_refineui_grid_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985595,
  					unicodeHex: "\\F09FB",
  					cssClass: "ic_refineui_grid_48_regular"
  				},
  				filled: {
  					unicode: 985593,
  					unicodeHex: "\\F09F9",
  					cssClass: "ic_refineui_grid_48_filled"
  				}
  			}
  		}
  	},
  	Badge: {
  		name: "Badge",
  		slug: "badge",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in badge scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_badge_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Badge/svg/ic_refineui_badge_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_badge_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Badge/svg/ic_refineui_badge_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_badge_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Badge/svg/ic_refineui_badge_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_badge_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Badge/svg/ic_refineui_badge_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_badge_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Badge/svg/ic_refineui_badge_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_badge_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Badge/svg/ic_refineui_badge_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_badge_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Badge/svg/ic_refineui_badge_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_badge_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Badge/svg/ic_refineui_badge_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_badge_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Badge/svg/ic_refineui_badge_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_badge_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Badge/svg/ic_refineui_badge_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_badge_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Badge/svg/ic_refineui_badge_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_badge_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Badge/svg/ic_refineui_badge_24_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985597,
  					unicodeHex: "\\F09FD",
  					cssClass: "ic_refineui_badge_16_regular"
  				},
  				filled: {
  					unicode: 985600,
  					unicodeHex: "\\F0A00",
  					cssClass: "ic_refineui_badge_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985601,
  					unicodeHex: "\\F0A01",
  					cssClass: "ic_refineui_badge_20_regular"
  				},
  				filled: {
  					unicode: 985598,
  					unicodeHex: "\\F09FE",
  					cssClass: "ic_refineui_badge_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985599,
  					unicodeHex: "\\F09FF",
  					cssClass: "ic_refineui_badge_24_regular"
  				},
  				filled: {
  					unicode: 985601,
  					unicodeHex: "\\F0A01",
  					cssClass: "ic_refineui_badge_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985596,
  					unicodeHex: "\\F09FC",
  					cssClass: "ic_refineui_badge_28_regular"
  				},
  				filled: {
  					unicode: 985597,
  					unicodeHex: "\\F09FD",
  					cssClass: "ic_refineui_badge_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985600,
  					unicodeHex: "\\F0A00",
  					cssClass: "ic_refineui_badge_32_regular"
  				},
  				filled: {
  					unicode: 985599,
  					unicodeHex: "\\F09FF",
  					cssClass: "ic_refineui_badge_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985598,
  					unicodeHex: "\\F09FE",
  					cssClass: "ic_refineui_badge_48_regular"
  				},
  				filled: {
  					unicode: 985596,
  					unicodeHex: "\\F09FC",
  					cssClass: "ic_refineui_badge_48_filled"
  				}
  			}
  		}
  	},
  	Clipboard: {
  		name: "Clipboard",
  		slug: "clipboard",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in clipboard scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_clipboard_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Clipboard/svg/ic_refineui_clipboard_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clipboard_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Clipboard/svg/ic_refineui_clipboard_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clipboard_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Clipboard/svg/ic_refineui_clipboard_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clipboard_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Clipboard/svg/ic_refineui_clipboard_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clipboard_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Clipboard/svg/ic_refineui_clipboard_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clipboard_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Clipboard/svg/ic_refineui_clipboard_32_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clipboard_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Clipboard/svg/ic_refineui_clipboard_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clipboard_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Clipboard/svg/ic_refineui_clipboard_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_clipboard_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Clipboard/svg/ic_refineui_clipboard_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clipboard_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Clipboard/svg/ic_refineui_clipboard_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clipboard_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Clipboard/svg/ic_refineui_clipboard_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_clipboard_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Clipboard/svg/ic_refineui_clipboard_16_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985625,
  					unicodeHex: "\\F0A19",
  					cssClass: "ic_refineui_clipboard_16_regular"
  				},
  				filled: {
  					unicode: 985625,
  					unicodeHex: "\\F0A19",
  					cssClass: "ic_refineui_clipboard_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985620,
  					unicodeHex: "\\F0A14",
  					cssClass: "ic_refineui_clipboard_20_regular"
  				},
  				filled: {
  					unicode: 985621,
  					unicodeHex: "\\F0A15",
  					cssClass: "ic_refineui_clipboard_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985623,
  					unicodeHex: "\\F0A17",
  					cssClass: "ic_refineui_clipboard_24_regular"
  				},
  				filled: {
  					unicode: 985624,
  					unicodeHex: "\\F0A18",
  					cssClass: "ic_refineui_clipboard_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985622,
  					unicodeHex: "\\F0A16",
  					cssClass: "ic_refineui_clipboard_28_regular"
  				},
  				filled: {
  					unicode: 985622,
  					unicodeHex: "\\F0A16",
  					cssClass: "ic_refineui_clipboard_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985621,
  					unicodeHex: "\\F0A15",
  					cssClass: "ic_refineui_clipboard_32_regular"
  				},
  				filled: {
  					unicode: 985623,
  					unicodeHex: "\\F0A17",
  					cssClass: "ic_refineui_clipboard_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985624,
  					unicodeHex: "\\F0A18",
  					cssClass: "ic_refineui_clipboard_48_regular"
  				},
  				filled: {
  					unicode: 985620,
  					unicodeHex: "\\F0A14",
  					cssClass: "ic_refineui_clipboard_48_filled"
  				}
  			}
  		}
  	},
  	Router: {
  		name: "Router",
  		slug: "router",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in router scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_router_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Router/svg/ic_refineui_router_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_router_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Router/svg/ic_refineui_router_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_router_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Router/svg/ic_refineui_router_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_router_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Router/svg/ic_refineui_router_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_router_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Router/svg/ic_refineui_router_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_router_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Router/svg/ic_refineui_router_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_router_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Router/svg/ic_refineui_router_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_router_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Router/svg/ic_refineui_router_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_router_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Router/svg/ic_refineui_router_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_router_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Router/svg/ic_refineui_router_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_router_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Router/svg/ic_refineui_router_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_router_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Router/svg/ic_refineui_router_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985628,
  					unicodeHex: "\\F0A1C",
  					cssClass: "ic_refineui_router_16_regular"
  				},
  				filled: {
  					unicode: 985630,
  					unicodeHex: "\\F0A1E",
  					cssClass: "ic_refineui_router_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985631,
  					unicodeHex: "\\F0A1F",
  					cssClass: "ic_refineui_router_20_regular"
  				},
  				filled: {
  					unicode: 985626,
  					unicodeHex: "\\F0A1A",
  					cssClass: "ic_refineui_router_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985627,
  					unicodeHex: "\\F0A1B",
  					cssClass: "ic_refineui_router_24_regular"
  				},
  				filled: {
  					unicode: 985629,
  					unicodeHex: "\\F0A1D",
  					cssClass: "ic_refineui_router_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985630,
  					unicodeHex: "\\F0A1E",
  					cssClass: "ic_refineui_router_28_regular"
  				},
  				filled: {
  					unicode: 985627,
  					unicodeHex: "\\F0A1B",
  					cssClass: "ic_refineui_router_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985626,
  					unicodeHex: "\\F0A1A",
  					cssClass: "ic_refineui_router_32_regular"
  				},
  				filled: {
  					unicode: 985631,
  					unicodeHex: "\\F0A1F",
  					cssClass: "ic_refineui_router_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985629,
  					unicodeHex: "\\F0A1D",
  					cssClass: "ic_refineui_router_48_regular"
  				},
  				filled: {
  					unicode: 985628,
  					unicodeHex: "\\F0A1C",
  					cssClass: "ic_refineui_router_48_filled"
  				}
  			}
  		}
  	},
  	Dumbbell: {
  		name: "Dumbbell",
  		slug: "dumbbell",
  		size: [
  			16,
  			20,
  			24,
  			28,
  			32,
  			48
  		],
  		style: [
  			"filled",
  			"regular"
  		],
  		keyword: "refineui-icon",
  		description: "Used in dumbbell scenarios.",
  		files: [
  			{
  				filename: "ic_refineui_dumbbell_20_filled.svg",
  				size: 20,
  				style: "filled",
  				path: "assets/Dumbbell/svg/ic_refineui_dumbbell_20_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dumbbell_28_filled.svg",
  				size: 28,
  				style: "filled",
  				path: "assets/Dumbbell/svg/ic_refineui_dumbbell_28_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dumbbell_32_regular.svg",
  				size: 32,
  				style: "regular",
  				path: "assets/Dumbbell/svg/ic_refineui_dumbbell_32_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dumbbell_48_regular.svg",
  				size: 48,
  				style: "regular",
  				path: "assets/Dumbbell/svg/ic_refineui_dumbbell_48_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dumbbell_16_regular.svg",
  				size: 16,
  				style: "regular",
  				path: "assets/Dumbbell/svg/ic_refineui_dumbbell_16_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dumbbell_24_regular.svg",
  				size: 24,
  				style: "regular",
  				path: "assets/Dumbbell/svg/ic_refineui_dumbbell_24_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dumbbell_48_filled.svg",
  				size: 48,
  				style: "filled",
  				path: "assets/Dumbbell/svg/ic_refineui_dumbbell_48_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dumbbell_28_regular.svg",
  				size: 28,
  				style: "regular",
  				path: "assets/Dumbbell/svg/ic_refineui_dumbbell_28_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dumbbell_24_filled.svg",
  				size: 24,
  				style: "filled",
  				path: "assets/Dumbbell/svg/ic_refineui_dumbbell_24_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dumbbell_16_filled.svg",
  				size: 16,
  				style: "filled",
  				path: "assets/Dumbbell/svg/ic_refineui_dumbbell_16_filled.svg"
  			},
  			{
  				filename: "ic_refineui_dumbbell_20_regular.svg",
  				size: 20,
  				style: "regular",
  				path: "assets/Dumbbell/svg/ic_refineui_dumbbell_20_regular.svg"
  			},
  			{
  				filename: "ic_refineui_dumbbell_32_filled.svg",
  				size: 32,
  				style: "filled",
  				path: "assets/Dumbbell/svg/ic_refineui_dumbbell_32_filled.svg"
  			}
  		],
  		unicodeMapping: {
  			"16": {
  				regular: {
  					unicode: 985634,
  					unicodeHex: "\\F0A22",
  					cssClass: "ic_refineui_dumbbell_16_regular"
  				},
  				filled: {
  					unicode: 985636,
  					unicodeHex: "\\F0A24",
  					cssClass: "ic_refineui_dumbbell_16_filled"
  				}
  			},
  			"20": {
  				regular: {
  					unicode: 985637,
  					unicodeHex: "\\F0A25",
  					cssClass: "ic_refineui_dumbbell_20_regular"
  				},
  				filled: {
  					unicode: 985632,
  					unicodeHex: "\\F0A20",
  					cssClass: "ic_refineui_dumbbell_20_filled"
  				}
  			},
  			"24": {
  				regular: {
  					unicode: 985635,
  					unicodeHex: "\\F0A23",
  					cssClass: "ic_refineui_dumbbell_24_regular"
  				},
  				filled: {
  					unicode: 985635,
  					unicodeHex: "\\F0A23",
  					cssClass: "ic_refineui_dumbbell_24_filled"
  				}
  			},
  			"28": {
  				regular: {
  					unicode: 985636,
  					unicodeHex: "\\F0A24",
  					cssClass: "ic_refineui_dumbbell_28_regular"
  				},
  				filled: {
  					unicode: 985633,
  					unicodeHex: "\\F0A21",
  					cssClass: "ic_refineui_dumbbell_28_filled"
  				}
  			},
  			"32": {
  				regular: {
  					unicode: 985632,
  					unicodeHex: "\\F0A20",
  					cssClass: "ic_refineui_dumbbell_32_regular"
  				},
  				filled: {
  					unicode: 985637,
  					unicodeHex: "\\F0A25",
  					cssClass: "ic_refineui_dumbbell_32_filled"
  				}
  			},
  			"48": {
  				regular: {
  					unicode: 985633,
  					unicodeHex: "\\F0A21",
  					cssClass: "ic_refineui_dumbbell_48_regular"
  				},
  				filled: {
  					unicode: 985634,
  					unicodeHex: "\\F0A22",
  					cssClass: "ic_refineui_dumbbell_48_filled"
  				}
  			}
  		}
  	}
  };
  var metadata = {
  	totalIcons: totalIcons,
  	supportedSizes: supportedSizes,
  	supportedStyles: supportedStyles,
  	fontFamilies: fontFamilies,
  	icons: icons
  };

  class IconUtils {
      constructor() {
          this.metadata = metadata;
          this.fontFamilies = metadata.fontFamilies;
      }
      /**
       * 아이콘의 unicode 문자 반환
       */
      getIconChar(iconName, style = 'regular', size = 24) {
          const iconData = this.metadata.icons[iconName];
          if (!iconData)
              return null;
          const unicodeInfo = iconData.unicodeMapping[size]?.[style];
          if (!unicodeInfo)
              return null;
          return String.fromCodePoint(unicodeInfo.unicode);
      }
      /**
       * 아이콘의 CSS 클래스명 반환
       */
      getIconClass(iconName, style = 'regular', size = 24) {
          const iconData = this.metadata.icons[iconName];
          if (!iconData)
              return null;
          const unicodeInfo = iconData.unicodeMapping[size]?.[style];
          if (!unicodeInfo)
              return null;
          return unicodeInfo.cssClass;
      }
      /**
       * 아이콘의 폰트 패밀리 반환
       */
      getFontFamily(style = 'regular') {
          return this.fontFamilies[style].font_family;
      }
      /**
       * 사용 가능한 모든 아이콘 이름 반환
       */
      getAvailableIcons() {
          return Object.keys(this.metadata.icons);
      }
      /**
       * 지원되는 크기들 반환
       */
      getAvailableSizes() {
          return this.metadata.supportedSizes;
      }
      /**
       * 아이콘 정보 반환
       */
      getIconInfo(iconName) {
          return this.metadata.icons[iconName] || null;
      }
      /**
       * 아이콘 검색
       */
      searchIcons(query) {
          const searchTerm = query.toLowerCase();
          return Object.keys(this.metadata.icons).filter(iconName => iconName.toLowerCase().includes(searchTerm) ||
              (this.metadata.icons[iconName]?.description || '').toLowerCase().includes(searchTerm));
      }
      /**
       * 아이콘이 특정 크기와 스타일을 지원하는지 확인
       */
      isIconSupported(iconName, style = 'regular', size = 24) {
          const iconData = this.metadata.icons[iconName];
          if (!iconData)
              return false;
          return iconData.size.includes(size) && iconData.style.includes(style);
      }
  }
  // 싱글톤 인스턴스 생성
  const iconUtils = new IconUtils();

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
  // === CDN 아이콘 서비스 ===
  // CDN을 통해 폰트 파일과 아이콘을 제공합니다
  const CDN_BASE_URL = 'https://cdn.jsdelivr.net/npm/@refineui/system-icons@latest';
  class IconCDN {
      constructor(config = {}) {
          this.baseUrl = config.baseUrl || CDN_BASE_URL;
      }
      /**
       * CSS 파일 URL 반환
       */
      getCSSUrl(style = 'regular') {
          return `${this.baseUrl}/dist/refineui-system-icons-${style}.css`;
      }
      /**
       * 폰트 파일 URL 반환
       */
      getFontUrl(style = 'regular', format = 'woff2') {
          return `${this.baseUrl}/dist/refineui-system-icons-${style}.${format}`;
      }
      /**
       * HTML link 태그 생성
       */
      getCSSLinkTag(style = 'regular') {
          return `<link rel="stylesheet" href="${this.getCSSUrl(style)}">`;
      }
      /**
       * 모든 스타일의 CSS link 태그 생성
       */
      getAllCSSLinkTags() {
          return [
              this.getCSSLinkTag('regular'),
              this.getCSSLinkTag('filled')
          ].join('\n');
      }
      /**
       * 아이콘 HTML 생성
       */
      getIconHTML(iconName, style = 'regular', size = 24, color = 'currentColor') {
          const iconChar = iconUtils.getIconChar(iconName, style, size);
          const fontFamily = iconUtils.getFontFamily(style);
          if (!iconChar) {
              return '';
          }
          return `<span style="font-family: '${fontFamily}'; font-size: ${size}px; color: ${color}; display: inline-block; line-height: 1;">${iconChar}</span>`;
      }
      /**
       * 아이콘 CSS 클래스 HTML 생성
       */
      getIconClassHTML(iconName, style = 'regular', size = 24) {
          const cssClass = iconUtils.getIconClass(iconName, style, size);
          if (!cssClass) {
              return '';
          }
          return `<span class="${cssClass}"></span>`;
      }
  }
  // 기본 CDN 인스턴스
  const iconCDN = new IconCDN();
  const getIconChar = (iconName, style = 'regular', size = 24) => {
      return iconUtils.getIconChar(iconName, style, size);
  };
  const getIconClass = (iconName, style = 'regular', size = 24) => {
      return iconUtils.getIconClass(iconName, style, size);
  };
  const getFontFamily = (style = 'regular') => {
      return iconUtils.getFontFamily(style);
  };
  // CDN 함수들
  const getCSSUrl = (style = 'regular') => {
      return iconCDN.getCSSUrl(style);
  };
  const getFontUrl = (style = 'regular', format = 'woff2') => {
      return iconCDN.getFontUrl(style, format);
  };
  const getCSSLinkTag = (style = 'regular') => {
      return iconCDN.getCSSLinkTag(style);
  };
  const getAllCSSLinkTags = () => {
      return iconCDN.getAllCSSLinkTags();
  };
  const getIconHTML = (iconName, style = 'regular', size = 24, color = 'currentColor') => {
      return iconCDN.getIconHTML(iconName, style, size, color);
  };
  const getIconClassHTML = (iconName, style = 'regular', size = 24) => {
      return iconCDN.getIconClassHTML(iconName, style, size);
  };
  // === 434개 아이콘 전부에 대한 편의 함수들 자동 생성 ===
  const iconNames = iconUtils.getAvailableIcons();
  // Regular 스타일 아이콘들
  iconNames.forEach((iconName) => {
      exports[iconName] = (size = 24, color = 'currentColor') => iconCDN.getIconHTML(iconName, 'regular', size, color);
  });
  // Filled 스타일 아이콘들
  iconNames.forEach((iconName) => {
      exports[`${iconName}Filled`] = (size = 24, color = 'currentColor') => iconCDN.getIconHTML(iconName, 'filled', size, color);
  });
  // === 브라우저에서 직접 사용할 수 있도록 전역 함수들 노출 ===
  if (typeof globalThis.window !== 'undefined') {
      // CDN 함수들을 전역으로 노출
      globalThis.window.getCSSUrl = getCSSUrl;
      globalThis.window.getFontUrl = getFontUrl;
      globalThis.window.getCSSLinkTag = getCSSLinkTag;
      globalThis.window.getAllCSSLinkTags = getAllCSSLinkTags;
      globalThis.window.getIconHTML = getIconHTML;
      globalThis.window.getIconClassHTML = getIconClassHTML;
      globalThis.window.getIconChar = getIconChar;
      globalThis.window.getIconClass = getIconClass;
      globalThis.window.getFontFamily = getFontFamily;
      // IconCDN 객체도 전역으로 노출
      globalThis.window.IconCDN = iconCDN;
      // 주요 아이콘들을 전역으로 노출
      iconNames.forEach((iconName) => {
          globalThis.window[iconName] = exports[iconName];
          globalThis.window[`${iconName}Filled`] = exports[`${iconName}Filled`];
      });
  }
  // 사용법 예시:
  // 1. CDN CSS 로드
  // getCSSLinkTag('regular') // Regular 스타일 CSS link 태그
  // getAllCSSLinkTags() // 모든 스타일 CSS link 태그
  // 
  // 2. 아이콘 HTML 생성
  // getIconHTML('Gavel', 'regular', 24, 'red') // HTML 문자열 반환
  // Gavel(24, 'red') // 편의 함수 사용
  // GavelFilled(32, 'blue') // Filled 스타일
  // 
  // 3. 유틸리티 함수 사용
  // getIconChar('Gavel', 'regular', 24) // unicode 문자 반환
  // getFontFamily('filled') // 폰트 패밀리 반환

  exports.IconUtils = iconUtils;
  exports.getAllCSSLinkTags = getAllCSSLinkTags;
  exports.getCSSLinkTag = getCSSLinkTag;
  exports.getCSSUrl = getCSSUrl;
  exports.getFontFamily = getFontFamily;
  exports.getFontUrl = getFontUrl;
  exports.getIconChar = getIconChar;
  exports.getIconClass = getIconClass;
  exports.getIconClassHTML = getIconClassHTML;
  exports.getIconHTML = getIconHTML;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
