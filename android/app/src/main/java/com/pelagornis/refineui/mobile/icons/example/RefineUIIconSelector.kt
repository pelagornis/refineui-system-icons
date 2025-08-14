package com.pelagornis.refineui.mobile.icons.example

import android.content.Context
import android.content.res.Resources
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
    
    /**
     * Get all available icons
     */
    fun getAllIcons(): List<String> {
        return getIconsFromArray("refineui_icons")
    }
    
    /**
     * Get icons by style (regular or filled)
     */
    fun getIconsByStyle(style: String): List<String> {
        return try {
            val mapping = getIconMapping()
            val iconsArray = mapping.getJSONObject("categories").getJSONArray(style)
            val icons = mutableListOf<String>()
            for (i in 0 until iconsArray.length()) {
                icons.add(iconsArray.getString(i))
            }
            icons
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
            val iconsArray = mapping.getJSONObject("categories").getJSONObject("sizes").getJSONArray(size.toString())
            val icons = mutableListOf<String>()
            for (i in 0 until iconsArray.length()) {
                icons.add(iconsArray.getString(i))
            }
            icons
        } catch (e: Exception) {
            emptyList()
        }
    }
    
    /**
     * Get icon drawable by name
     */
    fun getIconDrawable(iconName: String): Drawable? {
        return try {
            val resourceId = resources.getIdentifier(iconName, "drawable", context.packageName)
            if (resourceId != 0) {
                resources.getDrawable(resourceId, context.theme)
            } else {
                null
            }
        } catch (e: Exception) {
            null
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
        return getIconsFromArray("refineui_icon_categories")
    }
    
    /**
     * Get total icon count
     */
    fun getTotalIconCount(): Int {
        return try {
            val mapping = getIconMapping()
            mapping.getInt("total_icons")
        } catch (e: Exception) {
            0
        }
    }
    
    private fun getIconsFromArray(arrayName: String): List<String> {
        return try {
            val arrayId = resources.getIdentifier(arrayName, "array", context.packageName)
            if (arrayId != 0) {
                resources.getStringArray(arrayId).toList()
            } else {
                emptyList()
            }
        } catch (e: Exception) {
            emptyList()
        }
    }
    
    private fun getIconMapping(): JSONObject {
        if (iconMapping == null) {
            try {
                val inputStream = resources.openRawResource(
                    resources.getIdentifier("icon_mapping", "raw", context.packageName)
                )
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
