# 🚀 NASA Space Explorer - Deployment Guide

## Automatic Deployment to GitHub Pages

Your NASA Space Explorer application is configured to automatically deploy to GitHub Pages when you push changes to the `main` branch.

### How It Works

1. **Push to GitHub**: When you push commits to `main`, GitHub Actions automatically triggers
2. **Build**: The workflow uploads all files from your repository
3. **Deploy**: Files are published to GitHub Pages
4. **Live URL**: Your site will be available at:
   ```
   https://GCA-Classroom.github.io/07-nasa-space-explorer/
   ```

### Deployment Status

To check deployment status:

1. Go to your repository on GitHub
2. Click the **"Actions"** tab
3. Look for the "Deploy to GitHub Pages" workflow
4. Check if the latest run shows a ✅ (success) or ❌ (failure)

### Manual Deployment

If you need to manually trigger deployment:

1. Go to your GitHub repository
2. Click **"Actions"** tab
3. Select **"Deploy to GitHub Pages"** workflow
4. Click **"Run workflow"**
5. Select the branch (usually `main`)
6. Click **"Run workflow"**

### Configuration

The deployment is configured in `.github/workflows/deploy.yml` with:

- **Trigger**: Automatic on push to `main` branch
- **Permissions**: Write access to GitHub Pages
- **Deployment**: Uploads entire repository as static content
- **Concurrency**: Only one deployment at a time (cancels previous if in progress)

### GitHub Pages Settings

To verify GitHub Pages is enabled:

1. Go to your repository on GitHub
2. Click **"Settings"** (or gear icon)
3. Scroll down to **"GitHub Pages"** section
4. Verify:
   - **Source**: "GitHub Actions" (automatic)
   - **Branch**: Should show deployment history

### Troubleshooting

If deployment fails:

1. Check the **Actions** tab for error messages
2. Common issues:
   - **Permissions error**: Ensure GitHub Pages is enabled in Settings
   - **Build error**: Check if all required files are committed
   - **404 error**: Verify the repository is public (or enable Pages for private repos)

### Testing Locally

To test your site before pushing:

1. **Use Live Server** in VS Code:
   - Install "Live Server" extension
   - Right-click `index.html`
   - Select "Open with Live Server"
   - Site opens at `http://localhost:5500`

2. **Using Python**:
   ```bash
   cd /workspaces/07-nasa-space-explorer
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

3. **Using Node.js**:
   ```bash
   cd /workspaces/07-nasa-space-explorer
   npx http-server
   # Visit URL shown in terminal
   ```

### File Structure for Deployment

All files in the root directory are deployed:

```
/
├── index.html           ✅ Main entry point
├── style.css            ✅ Stylesheets
├── style.min.css        ✅ Minified styles
├── js/
│   ├── script.js        ✅ Main application
│   ├── script.min.js    ✅ Minified script
│   └── dateRange.js     ✅ Date utilities
├── img/
│   └── nasa-worm-logo-optimized.png  ✅ Logo
└── *.md files           ✅ Documentation
```

### Performance Considerations

Your deployment includes:

- ✅ Minified CSS (26.5% smaller)
- ✅ Minified JavaScript (31% smaller)
- ✅ Optimized logo (84.5% smaller)
- ✅ Inlined critical CSS for fast FCP/LCP
- ✅ Lazy loading for images
- ✅ Responsive design for all devices

### Next Steps

1. **Push changes to `main` branch**
   ```bash
   git push origin main
   ```

2. **Monitor deployment**
   - Go to GitHub repository
   - Click "Actions" tab
   - Watch the "Deploy to GitHub Pages" workflow run

3. **Visit your live site**
   - Once deployment completes (green checkmark)
   - Visit: `https://GCA-Classroom.github.io/07-nasa-space-explorer/`

4. **Share your site**
   - Send the GitHub Pages URL to others
   - It's a fully functional NASA Space Explorer!

### Support

If you encounter issues:

1. Check the **Actions** tab for error logs
2. Ensure `index.html` is in the repository root
3. Verify all linked files (CSS, JS, images) exist
4. Check browser console for JavaScript errors (F12 > Console)

---

**Deployment Type**: GitHub Pages (Static Site)  
**Build Process**: Automatic  
**Trigger**: Push to `main` branch  
**Status**: ✅ Ready to deploy  

Once you push your commits, your site will be live! 🚀
