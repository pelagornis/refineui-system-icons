import com.vanniktech.maven.publish.SonatypeHost

plugins {
    alias(libs.plugins.android.library)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.maven.publish)
}

group = findProperty("GROUP") as String? ?: "com.pelagornis"
version = findProperty("VERSION_NAME") as String? ?: "0.3.13"

android {
    namespace = "com.pelagornis.refineui.icons"
    compileSdk = 36

    defaultConfig {
        minSdk = 24
        consumerProguardFiles("consumer-rules.pro")
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
    kotlinOptions {
        jvmTarget = "11"
    }
}

dependencies {
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.appcompat)
    implementation(libs.material)
}

// Maven Central Publishing via Central Portal
// https://central.sonatype.com/api/v1/
mavenPublishing {
    // Publish to Maven Central via Central Portal
    publishToMavenCentral(SonatypeHost.CENTRAL_PORTAL)
    
    // Enable GPG signing for all publications (only in CI)
    if (System.getenv("CI") == "true") {
        signAllPublications()
    }
    
    // Configure coordinates
    coordinates(
        groupId = findProperty("GROUP") as String? ?: "com.pelagornis",
        artifactId = findProperty("POM_ARTIFACT_ID") as String? ?: "refineui-system-icons",
        version = findProperty("VERSION_NAME") as String? ?: project.version.toString()
    )
    
    // Configure POM
    pom {
        name.set(findProperty("POM_NAME") as String? ?: "RefineUI System Icons")
        description.set(findProperty("POM_DESCRIPTION") as String? ?: "A comprehensive system icon library for Android with 5,000+ icons")
        url.set(findProperty("POM_URL") as String? ?: "https://github.com/pelagornis/refineui-system-icons")
        inceptionYear.set(findProperty("POM_INCEPTION_YEAR") as String? ?: "2024")
        
        licenses {
            license {
                name.set(findProperty("POM_LICENSE_NAME") as String? ?: "MIT License")
                url.set(findProperty("POM_LICENSE_URL") as String? ?: "https://opensource.org/licenses/MIT")
                distribution.set(findProperty("POM_LICENSE_DIST") as String? ?: "repo")
            }
        }
        
        developers {
            developer {
                id.set(findProperty("POM_DEVELOPER_ID") as String? ?: "pelagornis")
                name.set(findProperty("POM_DEVELOPER_NAME") as String? ?: "Pelagornis")
                url.set(findProperty("POM_DEVELOPER_URL") as String? ?: "https://github.com/pelagornis")
            }
        }
        
        scm {
            url.set(findProperty("POM_SCM_URL") as String? ?: "https://github.com/pelagornis/refineui-system-icons")
            connection.set(findProperty("POM_SCM_CONNECTION") as String? ?: "scm:git:git://github.com/pelagornis/refineui-system-icons.git")
            developerConnection.set(findProperty("POM_SCM_DEV_CONNECTION") as String? ?: "scm:git:ssh://git@github.com/pelagornis/refineui-system-icons.git")
        }
    }
}

// Debug Task
tasks.register("printPublicationInfo") {
    doLast {
        println("=".repeat(60))
        println("Publication Info")
        println("Group ID: ${project.group}")
        println("Artifact ID: refineui-system-icons")
        println("Version: ${project.version}")
        println("=".repeat(60))
    }
}