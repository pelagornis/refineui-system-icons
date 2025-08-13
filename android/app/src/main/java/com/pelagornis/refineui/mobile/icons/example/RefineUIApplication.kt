package com.pelagornis.refineui.mobile.icons.example

import android.app.Application
import androidx.appcompat.app.AppCompatDelegate

class RefineUIApplication: Application() {
    override fun onCreate() {
        super.onCreate()
        AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_FOLLOW_SYSTEM)
    }
}