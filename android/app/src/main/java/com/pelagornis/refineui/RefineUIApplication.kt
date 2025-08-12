package com.pelagornis.refineui

import android.app.Application
import androidx.appcompat.app.AppCompatDelegate

class RefineUIApplication: Application() {
    override fun onCreate() {
        super.onCreate()
        AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_FOLLOW_SYSTEM)
    }
}