package com.pelagornis.refineui.mobile.icons.example

import android.content.Context
import android.content.res.Resources
import android.graphics.drawable.Drawable
import android.util.Log

/**
 * RefineUI Icon Selector
 * 
 * Provides easy access to RefineUI System Icons in Android applications.
 * Uses Vector Drawables for better performance and scalability.
 */
class RefineUIIconSelector(private val context: Context) {
    
    private val resources: Resources = context.resources
    private val packageName: String = context.packageName
    
    companion object {
        private const val TAG = "RefineUIIconSelector"
        
        /**
         * Create a new RefineUIIconSelector instance
         */
        fun create(context: Context): RefineUIIconSelector {
            return RefineUIIconSelector(context)
        }
    }
    
    /**
     * Get all available icons
     */
    fun getAllIcons(): List<IconInfo> {
        val icons = mutableListOf<IconInfo>()
        
        // Get all drawable resources that start with "ic_refineui_"
        // Since we can't access R.drawable directly, we'll use a different approach
        val drawableNames = getDrawableResourceNames()
        for (resourceName in drawableNames) {
            if (resourceName.startsWith("ic_refineui_")) {
                try {
                    val resourceId = resources.getIdentifier(resourceName, "drawable", packageName)
                    if (resourceId != 0) {
                        val iconInfo = parseIconInfo(resourceName, resourceId)
                        if (iconInfo != null) {
                            icons.add(iconInfo)
                        }
                    }
                } catch (e: Exception) {
                    Log.w(TAG, "Failed to get resource ID for $resourceName: ${e.message}")
                }
            }
        }
        
        return icons.sortedBy { it.name }
    }
    
    /**
     * Get drawable resource names by scanning the drawable directory
     * This is a workaround since we can't access R.drawable directly
     */
    private fun getDrawableResourceNames(): List<String> {
        val drawableNames = mutableListOf<String>()
        
        // Automatically find all resources starting with ic_refineui_ in the library
        try {
            // Get all drawable fields from the library package's resources
            val libraryPackageName = "com.refineui.icons"
            val libraryClass = Class.forName("$libraryPackageName.R\$drawable")
            val fields = libraryClass.fields
            
            for (field in fields) {
                val resourceName = field.name
                if (resourceName.startsWith("ic_refineui_")) {
                    try {
                        val resourceId = field.getInt(null)
                        if (resourceId != 0) {
                            drawableNames.add(resourceName)
                            Log.d(TAG, "Found icon in library: $resourceName")
                        }
                    } catch (e: Exception) {
                        Log.w(TAG, "Failed to get resource ID for $resourceName: ${e.message}")
                    }
                }
            }
        } catch (e: Exception) {
            Log.w(TAG, "Failed to access library R class: ${e.message}")
            
            // Fallback: manually add only a few icons
            val fallbackIcons = listOf(
                "ic_refineui_add_24_filled",
                "ic_refineui_home_24_regular",
                "ic_refineui_settings_24_filled",
                "ic_refineui_search_24_regular",
                "ic_refineui_heart_24_filled",
                "ic_refineui_star_24_regular"
            )
            
            for (iconName in fallbackIcons) {
                val resourceId = resources.getIdentifier(iconName, "drawable", "com.refineui.icons")
                if (resourceId != 0) {
                    drawableNames.add(iconName)
                    Log.d(TAG, "Found fallback icon: $iconName")
                }
            }
        }
        
        Log.d(TAG, "Total icons found: ${drawableNames.size}")
        return drawableNames
    }
    
    /**
     * Get icons by style (regular or filled)
     */
    fun getIconsByStyle(style: String): List<IconInfo> {
        return getAllIcons().filter { it.style.equals(style, ignoreCase = true) }
    }
    
    /**
     * Get icons by size (16, 20, 24, 28, 32, 48)
     */
    fun getIconsBySize(size: Int): List<IconInfo> {
        return getAllIcons().filter { it.size == size }
    }
    
    /**
     * Search icons by name
     */
    fun searchIcons(query: String): List<IconInfo> {
        val lowerQuery = query.lowercase()
        return getAllIcons().filter { 
            it.name.lowercase().contains(lowerQuery) || 
            it.displayName.lowercase().contains(lowerQuery)
        }
    }
    
    /**
     * Get icon drawable by resource name
     */
    fun getIconDrawable(resourceName: String): Drawable? {
        return try {
            // First try to find in the library
            val libraryResourceId = resources.getIdentifier(resourceName, "drawable", "com.refineui.icons")
            if (libraryResourceId != 0) {
                return resources.getDrawable(libraryResourceId, null)
            }
            
            // If not found in library, try to find in app package
            val appResourceId = resources.getIdentifier(resourceName, "drawable", packageName)
            if (appResourceId != 0) {
                return resources.getDrawable(appResourceId, null)
            }
            
            null
        } catch (e: Exception) {
            Log.e(TAG, "Failed to get drawable for $resourceName: ${e.message}")
            null
        }
    }
    
    /**
     * Get icon drawable by IconInfo
     */
    fun getIconDrawable(iconInfo: IconInfo): Drawable? {
        return getIconDrawable(iconInfo.resourceName)
    }
    
    /**
     * Parse icon information from resource name
     * Format: ic_refineui_{iconName}_{size}_{style}
     */
    private fun parseIconInfo(resourceName: String, resourceId: Int): IconInfo? {
        try {
            // Remove "ic_refineui_" prefix
            val nameWithoutPrefix = resourceName.removePrefix("ic_refineui_")
            
            // Split by underscore to get parts
            val parts = nameWithoutPrefix.split("_")
            if (parts.size < 3) {
                Log.w(TAG, "Invalid resource name format: $resourceName")
                return null
            }
            
            // Last two parts are size and style
            val size = parts[parts.size - 2].toIntOrNull()
            val style = parts[parts.size - 1]
            
            if (size == null) {
                Log.w(TAG, "Invalid size in resource name: $resourceName")
                return null
            }
            
            // Icon name is everything except the last two parts
            val iconName = parts.dropLast(2).joinToString("_")
            
            // Convert snake_case to display name
            val displayName = iconName.replace("_", " ").replaceFirstChar { it.uppercase() }
            
            return IconInfo(
                name = iconName,
                displayName = displayName,
                resourceName = resourceName,
                resourceId = resourceId,
                size = size,
                style = style
            )
        } catch (e: Exception) {
            Log.e(TAG, "Failed to parse icon info for $resourceName: ${e.message}")
            return null
        }
    }
    
    /**
     * Get available sizes
     */
    fun getAvailableSizes(): List<Int> {
        return getAllIcons().map { it.size }.distinct().sorted()
    }
    
    /**
     * Get available styles
     */
    fun getAvailableStyles(): List<String> {
        return getAllIcons().map { it.style }.distinct().sorted()
    }
    
    /**
     * Get total icon count
     */
    fun getTotalIconCount(): Int {
        return getAllIcons().size
    }
}
