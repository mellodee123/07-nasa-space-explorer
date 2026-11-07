#!/bin/bash

echo "🚀 NASA Space Explorer - Push to GitHub"
echo "========================================"
echo ""
echo "Commits ready to push:"
git log --oneline -2
echo ""
echo "Pushing to GitHub..."
echo ""

git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Changes pushed to GitHub"
    echo "Visit: https://github.com/GCA-Classroom/07-nasa-space-explorer"
else
    echo ""
    echo "⚠️  Push failed. You may need to:"
    echo "   1. Authenticate with GitHub (Personal Access Token)"
    echo "   2. Run: gh auth login"
    echo "   3. Then try: git push origin main"
fi
