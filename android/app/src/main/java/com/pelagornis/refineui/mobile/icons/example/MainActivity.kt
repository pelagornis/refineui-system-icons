package com.pelagornis.refineui.mobile.icons.example

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.pelagornis.refineui_system_icons.R
import android.util.Log

class MainActivity : AppCompatActivity() {
    private lateinit var iconSelector: RefineUIIconSelector
    private lateinit var recyclerView: RecyclerView
    private lateinit var adapter: IconAdapter
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
        
        // Initialize icon selector
        iconSelector = RefineUIIconSelector.create(this)
        
        // Setup RecyclerView
        setupRecyclerView()
        
        // Load all icons
        loadAllIcons()
    }
    
    private fun setupRecyclerView() {
        recyclerView = findViewById(R.id.recyclerView)
        recyclerView.layoutManager = GridLayoutManager(this, 6) // Display in 6 columns
        adapter = IconAdapter(iconSelector)
        recyclerView.adapter = adapter
    }
    
    private fun loadAllIcons() {
        val icons = iconSelector.getAllIcons()
        adapter.updateIcons(icons)
        
        // Update status text
        val statusText = findViewById<TextView>(R.id.statusText)
        statusText.text = "Total ${icons.size} icons"
        
        Log.d("MainActivity", "Loaded ${icons.size} icons")
    }
    
    /**
     * RecyclerView Adapter for displaying icons
     */
    class IconAdapter(private val iconSelector: RefineUIIconSelector) : 
        RecyclerView.Adapter<IconAdapter.IconViewHolder>() {
        
        private var icons: List<IconInfo> = emptyList()
        
        fun updateIcons(newIcons: List<IconInfo>) {
            icons = newIcons
            notifyDataSetChanged()
        }
        
        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): IconViewHolder {
            val view = LayoutInflater.from(parent.context)
                .inflate(R.layout.item_icon, parent, false)
            return IconViewHolder(view)
        }
        
        override fun onBindViewHolder(holder: IconViewHolder, position: Int) {
            holder.bind(icons[position])
        }
        
        override fun getItemCount(): Int = icons.size
        
        inner class IconViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
            private val iconImageView: ImageView = itemView.findViewById(R.id.iconImageView)
            private val iconNameText: TextView = itemView.findViewById(R.id.iconNameText)
            private val iconSizeText: TextView = itemView.findViewById(R.id.iconSizeText)
            
            fun bind(iconInfo: IconInfo) {
                // Set icon drawable
                val drawable = iconSelector.getIconDrawable(iconInfo)
                iconImageView.setImageDrawable(drawable)
                
                // Set icon name
                iconNameText.text = iconInfo.displayName
                
                // Set icon size and style
                iconSizeText.text = "${iconInfo.size}px ${iconInfo.style}"
                
                // Set click listener
                itemView.setOnClickListener {
                    // Show icon details in a toast
                    val message = "${iconInfo.displayName} (${iconInfo.size}px ${iconInfo.style})"
                    Toast.makeText(itemView.context, message, Toast.LENGTH_SHORT).show()
                }
            }
        }
    }
    
    private fun setIconFromLibrary(imageView: ImageView, resourceName: String) {
        try {
            // First try to find resource ID in the library
            val libraryResourceId = resources.getIdentifier(resourceName, "drawable", "com.refineui.icons")
            if (libraryResourceId != 0) {
                imageView.setImageResource(libraryResourceId)
                Log.d("MainActivity", "Successfully loaded icon from library: $resourceName")
                return
            }
            
            // If not found in library, try to find in app package
            val appResourceId = resources.getIdentifier(resourceName, "drawable", packageName)
            if (appResourceId != 0) {
                imageView.setImageResource(appResourceId)
                Log.d("MainActivity", "Successfully loaded icon from app: $resourceName")
                return
            }
            
            // If nothing is found, use fallback icon
            imageView.setImageResource(android.R.drawable.ic_menu_help)
            Log.w("MainActivity", "Icon not found: $resourceName")
            
        } catch (e: Exception) {
            // Fallback to a placeholder
            imageView.setImageResource(android.R.drawable.ic_menu_help)
            Log.e("MainActivity", "Error loading icon $resourceName: ${e.message}")
        }
    }
}