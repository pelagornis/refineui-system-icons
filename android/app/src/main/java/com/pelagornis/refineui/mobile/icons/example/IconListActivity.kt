package com.pelagornis.refineui.mobile.icons.example

import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.pelagornis.refineui_system_icons.R

/**
 * Activity showing RefineUI System Icons list
 */
class IconListActivity : AppCompatActivity() {
    
    private lateinit var iconSelector: RefineUIIconSelector
    private lateinit var recyclerView: RecyclerView
    private lateinit var statusText: TextView
    private lateinit var searchEditText: EditText
    private lateinit var styleSpinner: Spinner
    private lateinit var sizeSpinner: Spinner
    private lateinit var adapter: IconAdapter
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_icon_list)
        
        // Initialize icon selector
        iconSelector = RefineUIIconSelector.create(this)
        
        // Setup UI
        setupUI()
        
        // Load all icons
        loadAllIcons()
    }
    
    private fun setupUI() {
        recyclerView = findViewById(R.id.recyclerView)
        statusText = findViewById(R.id.statusText)
        searchEditText = findViewById(R.id.searchEditText)
        styleSpinner = findViewById(R.id.styleSpinner)
        sizeSpinner = findViewById(R.id.sizeSpinner)
        
        // Setup RecyclerView
        recyclerView.layoutManager = GridLayoutManager(this, 4)
        adapter = IconAdapter(iconSelector)
        recyclerView.adapter = adapter
        
        // Setup search
        searchEditText.addTextChangedListener(object : TextWatcher {
            override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {}
            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {}
            override fun afterTextChanged(s: Editable?) {
                val query = s.toString()
                if (query.isNotEmpty()) {
                    searchIcons(query)
                } else {
                    loadAllIcons()
                }
            }
        })
        
        // Setup style spinner
        val styleAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_item, 
            listOf("All Styles", "Regular", "Filled"))
        styleAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
        styleSpinner.adapter = styleAdapter
        styleSpinner.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
                when (position) {
                    0 -> loadAllIcons()
                    1 -> loadIconsByStyle("regular")
                    2 -> loadIconsByStyle("filled")
                }
            }
            override fun onNothingSelected(parent: AdapterView<*>?) {}
        }
        
        // Setup size spinner
        val sizeAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_item,
            listOf("All Sizes", "16px", "20px", "24px", "28px", "32px", "48px"))
        sizeAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
        sizeSpinner.adapter = sizeAdapter
        sizeSpinner.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
                when (position) {
                    0 -> loadAllIcons()
                    1 -> loadIconsBySize(16)
                    2 -> loadIconsBySize(20)
                    3 -> loadIconsBySize(24)
                    4 -> loadIconsBySize(28)
                    5 -> loadIconsBySize(32)
                    6 -> loadIconsBySize(48)
                }
            }
            override fun onNothingSelected(parent: AdapterView<*>?) {}
        }
    }
    
    private fun loadAllIcons() {
        val icons = iconSelector.getAllIcons()
        adapter.updateIcons(icons)
        updateStatus(icons.size)
    }
    
    private fun loadIconsByStyle(style: String) {
        val icons = iconSelector.getIconsByStyle(style)
        adapter.updateIcons(icons)
        updateStatus(icons.size)
    }
    
    private fun loadIconsBySize(size: Int) {
        val icons = iconSelector.getIconsBySize(size)
        adapter.updateIcons(icons)
        updateStatus(icons.size)
    }
    
    private fun searchIcons(query: String) {
        val icons = iconSelector.searchIcons(query)
        adapter.updateIcons(icons)
        updateStatus(icons.size)
    }
    
    private fun updateStatus(count: Int) {
        statusText.text = "Showing $count icons"
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
}
