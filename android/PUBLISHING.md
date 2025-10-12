# Android Library - Maven Central Publishing Guide

This document explains how to publish the RefineUI System Icons Android library to Maven Central.

## Prerequisites

### 1. Sonatype Central Portal Account Setup

1. Create an account on [Sonatype Central Portal](https://central.sonatype.com/)
2. Generate User Token:
   - Go to Account → Generate User Token
   - Store the Username and Password securely

### 2. GPG Key Generation and Setup

```bash
# Generate GPG key
gpg --full-generate-key

# List secret keys
gpg --list-secret-keys --keyid-format LONG

# Upload public key to key server
gpg --keyserver keyserver.ubuntu.com --send-keys YOUR_KEY_ID

# Export private key as Base64
gpg --armor --export-secret-keys YOUR_KEY_ID | base64 > gpg-key.base64
```

### 3. GitHub Secrets Configuration

Add the following secrets in Repository Settings → Secrets and variables → Actions:

- `SONATYPE_TOKEN_USERNAME`: Username from Sonatype User Token
- `SONATYPE_TOKEN_PASSWORD`: Password from Sonatype User Token
- `GPG_PRIVATE_KEY`: Base64-encoded GPG private key (contents of gpg-key.base64 file)
- `GPG_PASSPHRASE`: Passphrase set during GPG key creation

## Deployment Methods

### Automated Deployment (GitHub Actions)

The `.github/workflows/release-android.yml` workflow handles automatic deployment.

1. Create and push a Git tag:

   ```bash
   git tag 0.3.14
   git push origin 0.3.14
   ```

2. GitHub Actions automatically:
   - Updates `VERSION_NAME` in `gradle.properties` to the tag version
   - Commits and pushes changes
   - Generates Android XML resources
   - Builds and validates
   - Publishes to Maven Central
   - Creates GitHub Release

**Note**: All tags trigger deployment for all platforms. To deploy only specific platforms, modify the workflow or use manual deployment.

### Manual Deployment (Local)

1. Set `gradle.properties` or environment variables:

   ```bash
   export ORG_GRADLE_PROJECT_mavenCentralUsername="your-username"
   export ORG_GRADLE_PROJECT_mavenCentralPassword="your-password"
   export ORG_GRADLE_PROJECT_signingInMemoryKey=$(cat gpg-key.base64 | base64 --decode)
   export ORG_GRADLE_PROJECT_signingInMemoryKeyPassword="your-passphrase"
   ```

2. Execute deployment:
   ```bash
   cd android
   ./gradlew :library:publishAllPublicationsToMavenCentralRepository
   ```

## Deployment Verification

1. Log in to [Sonatype Central Portal](https://central.sonatype.com/)
2. Check deployment status in the Deployments menu
3. Once validated, it automatically syncs to Maven Central (takes ~30 minutes)

## Gradle Configuration Structure

```
android/
├── gradle/
│   └── libs.versions.toml          # Plugin version management
├── library/
│   └── build.gradle.kts            # Library build and publishing configuration
└── gradle.properties               # POM metadata configuration
```

## Version Management

- Manage versions by modifying the `VERSION_NAME` value in `android/gradle.properties`
- Use Semantic Versioning: `MAJOR.MINOR.PATCH`
- Git tags use the format: `X.Y.Z` (e.g., `0.3.14`)

## Troubleshooting

### 1. GPG Signing Failure

- Verify the GPG key is properly Base64 encoded
- Verify the passphrase is correct

### 2. Maven Central Upload Failure

- Verify Sonatype credentials are correct
- Verify Group ID and namespace match

### 3. Validation Failure

- Verify all required information is included in the POM file
- Verify Source and Javadoc JARs are generated

## Check Publication Information

```bash
cd android
./gradlew :library:printPublicationInfo
```

## References

- [Maven Central Publishing Requirements](https://central.sonatype.org/publish/requirements/)
- [Vanniktech Maven Publish Plugin](https://vanniktech.github.io/gradle-maven-publish-plugin/)
