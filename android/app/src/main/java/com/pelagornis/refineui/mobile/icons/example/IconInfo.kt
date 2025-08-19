package com.pelagornis.refineui.mobile.icons.example

/**
 * Icon information data class
 * Contains information about a RefineUI System Icon
 */
data class IconInfo(
    val name: String,           // Icon name (e.g., "add", "home", "settings")
    val displayName: String,    // Display name (e.g., "Add", "Home", "Settings")
    val resourceName: String,   // Resource name (e.g., "ic_refineui_add_24_filled")
    val resourceId: Int,        // Resource ID
    val size: Int,              // Icon size (16, 20, 24, 28, 32, 48)
    val style: String           // Icon style ("regular" or "filled")
)
