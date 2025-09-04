# Figma API Setup Guide 🔑

This guide explains how to set up RefineUI System Icons extraction from Figma.

## 📋 Required Information

1. **Figma Personal Access Token**
2. **Figma File Key**

## 🔑 1. Create Figma Personal Access Token

### Step-by-step Guide

1. **Access Figma Website**

   - Go to https://www.figma.com
   - Log in to your account

2. **Navigate to Account Settings**

   - Click the profile icon in the top right
   - Select "Settings"

3. **Find Personal access tokens section**

   - In the "Account" tab, find the "Personal access tokens" section
   - Click "Create new token" button

4. **Generate Token**

   - Enter token name (e.g., "RefineUI Icons")
   - Click "Create token"

5. **Copy and Save Token**
   - Copy the generated token
   - ⚠️ **Important**: This token is only shown once, so save it in a safe place!

### Verify Token Permissions

Make sure the token has the following permissions:

- ✅ **Read files**: File read permission
- ✅ **Read team files**: Team file read permission (if it's a team file)

## 📄 2. Find Figma File Key

### Step-by-step Guide

1. **Open Icon File in Figma**

   - Open the Figma file containing icons

2. **Check Browser Address Bar**

   - Check the URL in the address bar:

   ```
   https://www.figma.com/file/XXXXXXXXXXXXXXX/System-Icons
   ```

3. **Extract File Key**
   - The long string after `/file/` is the file key
   - Example: `XXXXXXXXXXXXXXX` part

### Verify File Access Permissions

The file must meet one of the following conditions:

- ✅ **Public file**: Accessible to everyone
- ✅ **Team file**: Token owner is a team member
- ✅ **Personal file**: Token owner's file

## 🛠️ 3. Environment Setup

### Method 1: Using .env file (Recommended)

1. **Create .env file in project root**

   ```bash
   cp .env.example .env
   ```

2. **Edit .env file**

   ```env
   # Figma API Configuration
   FIGMA_TOKEN=your_figma_personal_access_token_here
   FIGMA_FILE_KEY=your_figma_file_key_here

   # Optional settings
   FIGMA_BATCH_SIZE=50
   FIGMA_MAX_ICONS=0
   FIGMA_TEST_LIMIT=10
   ```

3. **Replace with actual values**
   - `your_figma_personal_access_token_here` → actual token
   - `your_figma_file_key_here` → actual file key

### Method 2: Set Environment Variables Directly

#### macOS/Linux

```bash
export FIGMA_TOKEN="your_figma_personal_access_token_here"
export FIGMA_FILE_KEY="your_figma_file_key_here"
```

#### Windows (Command Prompt)

```cmd
set FIGMA_TOKEN=your_figma_personal_access_token_here
set FIGMA_FILE_KEY=your_figma_file_key_here
```

#### Windows (PowerShell)

```powershell
$env:FIGMA_TOKEN="your_figma_personal_access_token_here"
$env:FIGMA_FILE_KEY="your_figma_file_key_here"
```

### Method 3: Use Command Line Arguments

```bash
python scripts/figma_icon_extractor.py \
  --token "your_figma_personal_access_token_here" \
  --file-key "your_figma_file_key_here"
```

## 🚀 4. Test and Execute

### 1. Verify Setup

```bash
# Run in test mode (only 10 icons)
FIGMA_TEST_LIMIT=10 python scripts/figma_icon_extractor.py
```

### 2. Full Execution

```bash
# Incremental update (default)
python scripts/figma_icon_extractor.py

# Full synchronization
python scripts/figma_icon_extractor.py --full-sync
```

## 🔧 5. Advanced Configuration

### Environment Variable Options

| Variable Name      | Default | Description                      |
| ------------------ | ------- | -------------------------------- |
| `FIGMA_TOKEN`      | -       | Figma Personal Access Token      |
| `FIGMA_FILE_KEY`   | -       | Figma file key                   |
| `FIGMA_BATCH_SIZE` | 50      | Batch processing size            |
| `FIGMA_MAX_ICONS`  | 0       | Maximum icons to process (0=all) |
| `FIGMA_TEST_LIMIT` | -       | Test icon count limit            |

### Example Configuration

```env
# Basic setup
FIGMA_TOKEN=figd_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FIGMA_FILE_KEY=xxxxxxxxxxxxxxxxxxxxxxxx

# Advanced setup
FIGMA_BATCH_SIZE=100
FIGMA_MAX_ICONS=50
FIGMA_TEST_LIMIT=5
```

## ❗ 6. Troubleshooting

### Common Errors

#### 1. "Figma API token is required"

- ✅ Check if `.env` file is properly configured
- ✅ Check if environment variables are properly set

#### 2. "Figma file key is required"

- ✅ Check if file key is properly extracted
- ✅ Check if you have access to the file

#### 3. "Page not found"

- ✅ Check if page name is "System Icons"
- ✅ Specify different page name with `--page` argument

#### 4. "Rate limit reached"

- ✅ API call limit reached
- ✅ Wait a moment and try again or reduce batch size

### Debugging

```bash
# Run with detailed logging
python -u scripts/figma_icon_extractor.py 2>&1 | tee figma_extract.log
```

## 📚 7. Additional Resources

- [Figma API Documentation](https://www.figma.com/developers/api)
- [Personal Access Tokens](https://www.figma.com/developers/api#access-tokens)
- [File API](https://www.figma.com/developers/api#files)

## 🔒 8. Security Notes

- ⚠️ **Never commit tokens to public repositories**
- ⚠️ **Never share tokens with others**
- ⚠️ **Regenerate tokens immediately if exposed**
- ✅ **Add .env file to .gitignore**
- ✅ **Backup tokens in a safe place**
