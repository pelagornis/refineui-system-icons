package com.pelagornis.refineui.mobile.icons.example

import android.content.Context
import android.content.res.Resources
import android.graphics.Typeface
import android.graphics.drawable.Drawable
import org.json.JSONObject
import java.io.IOException

/**
 * RefineUI Icon Selector
 * 
 * Provides easy access to RefineUI System Icons in Android applications.
 * Supports filtering by size, style, and category.
 */
class RefineUIIconSelector(private val context: Context) {
    
    private var iconMapping: JSONObject? = null
    private val resources: Resources = context.resources
    
    // Font typefaces
    private var regularTypeface: Typeface? = null
    private var filledTypeface: Typeface? = null
    
    init {
        loadFonts()
    }
    
    private fun loadFonts() {
        try {
            regularTypeface = Typeface.createFromAsset(context.assets, "fonts/refineui_system_icons_regular.ttf")
            filledTypeface = Typeface.createFromAsset(context.assets, "fonts/refineui_system_icons_filled.ttf")
            android.util.Log.d("RefineUIIconSelector", "Fonts loaded successfully")
        } catch (e: Exception) {
            // Fallback to system fonts if custom fonts fail to load
            regularTypeface = Typeface.DEFAULT
            filledTypeface = Typeface.DEFAULT
            android.util.Log.e("RefineUIIconSelector", "Failed to load fonts: ${e.message}")
        }
    }
    
    /**
     * Get all available icons
     */
    fun getAllIcons(): List<String> {
        return try {
            val mapping = getIconMapping()
            val iconsObject = mapping.getJSONObject("icons")
            val icons = mutableListOf<String>()
            val keys = iconsObject.keys()
            while (keys.hasNext()) {
                icons.add(keys.next())
            }
            icons.sorted()
        } catch (e: Exception) {
            emptyList()
        }
    }
    
    /**
     * Get icons by style (regular or filled)
     */
    fun getIconsByStyle(style: String): List<String> {
        return try {
            val mapping = getIconMapping()
            val iconsObject = mapping.getJSONObject("icons")
            val icons = mutableListOf<String>()
            val keys = iconsObject.keys()
            while (keys.hasNext()) {
                val iconName = keys.next()
                val iconObject = iconsObject.getJSONObject(iconName)
                if (iconObject.getString("style").equals(style, ignoreCase = true)) {
                    icons.add(iconName)
                }
            }
            icons.sorted()
        } catch (e: Exception) {
            emptyList()
        }
    }
    
    /**
     * Get icons by size (16, 20, 24, 28, 32, 48)
     */
    fun getIconsBySize(size: Int): List<String> {
        return try {
            val mapping = getIconMapping()
            val iconsObject = mapping.getJSONObject("icons")
            val icons = mutableListOf<String>()
            val keys = iconsObject.keys()
            while (keys.hasNext()) {
                val iconName = keys.next()
                val iconObject = iconsObject.getJSONObject(iconName)
                if (iconObject.getString("size") == size.toString()) {
                    icons.add(iconName)
                }
            }
            icons.sorted()
        } catch (e: Exception) {
            emptyList()
        }
    }
    
    /**
     * Get icon drawable by name (legacy method for drawable resources)
     */
    fun getIconDrawable(iconName: String): Drawable? {
        return try {
            // Convert icon name from ic_refineui_gavel_28_regular to gavel_28_regular format
            val drawableName = convertIconNameToDrawableName(iconName)
            val resourceId = resources.getIdentifier(drawableName, "drawable", context.packageName)
            if (resourceId != 0) {
                resources.getDrawable(resourceId, context.theme)
            } else {
                android.util.Log.e("RefineUIIconSelector", "Drawable not found: $drawableName")
                null
            }
        } catch (e: Exception) {
            android.util.Log.e("RefineUIIconSelector", "Error getting drawable for $iconName: ${e.message}")
            null
        }
    }
    
    /**
     * Convert icon name to drawable resource name
     */
    private fun convertIconNameToDrawableName(iconName: String): String {
        // Convert ic_refineui_access_time_16_filled to access_time_16_filled
        return if (iconName.startsWith("ic_refineui_")) {
            iconName.substring("ic_refineui_".length)
        } else {
            iconName
        }
    }
    
    /**
     * Get icon character by name
     */
    fun getIconChar(iconName: String): Char? {
        return try {
            val mapping = getIconMapping()
            val iconObject = mapping.getJSONObject("icons").getJSONObject(iconName)
            val unicode = iconObject.getInt("unicode")
            unicode.toChar()
        } catch (e: Exception) {
            null
        }
    }
    
    /**
     * Get icon typeface by name
     */
    fun getIconTypeface(iconName: String): Typeface? {
        return try {
            val mapping = getIconMapping()
            val iconObject = mapping.getJSONObject("icons").getJSONObject(iconName)
            val style = iconObject.getString("style")
            
            when (style.lowercase()) {
                "regular" -> regularTypeface
                "filled" -> filledTypeface
                else -> regularTypeface
            }
        } catch (e: Exception) {
            regularTypeface
        }
    }
    
    /**
     * Get icon information by name
     */
    fun getIconInfo(iconName: String): IconInfo? {
        return try {
            val mapping = getIconMapping()
            val iconObject = mapping.getJSONObject("icons").getJSONObject(iconName)
            
            IconInfo(
                name = iconObject.getString("name"),
                size = iconObject.getInt("size"),
                style = iconObject.getString("style"),
                drawable = iconObject.getString("drawable"),
                category = iconObject.getString("category")
            )
        } catch (e: Exception) {
            null
        }
    }
    
    /**
     * Search icons by name
     */
    fun searchIcons(query: String): List<String> {
        val allIcons = getAllIcons()
        return allIcons.filter { it.contains(query, ignoreCase = true) }
    }
    
    /**
     * Get available categories
     */
    fun getCategories(): List<String> {
        return try {
            val mapping = getIconMapping()
            val iconsObject = mapping.getJSONObject("icons")
            val categories = mutableSetOf<String>()
            val keys = iconsObject.keys()
            while (keys.hasNext()) {
                val iconName = keys.next()
                val iconObject = iconsObject.getJSONObject(iconName)
                categories.add(iconObject.getString("name"))
            }
            categories.toList().sorted()
        } catch (e: Exception) {
            emptyList()
        }
    }
    
    /**
     * Get total icon count
     */
    fun getTotalIconCount(): Int {
        return try {
            val mapping = getIconMapping()
            val iconsObject = mapping.getJSONObject("icons")
            iconsObject.length()
        } catch (e: Exception) {
            0
        }
    }
    

    
    private fun getIconMapping(): JSONObject {
        if (iconMapping == null) {
            try {
                val inputStream = context.assets.open("icon-mapping.json")
                val jsonString = inputStream.bufferedReader().use { it.readText() }
                iconMapping = JSONObject(jsonString)
            } catch (e: IOException) {
                iconMapping = JSONObject()
            }
        }
        return iconMapping!!
    }
    
    /**
     * Icon information data class
     */
    data class IconInfo(
        val name: String,
        val size: Int,
        val style: String,
        val drawable: String,
        val category: String
    )
    
    companion object {
        /**
         * Create RefineUIIconSelector instance
         */
        fun create(context: Context): RefineUIIconSelector {
            return RefineUIIconSelector(context)
        }
    }
}
