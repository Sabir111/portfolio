#!/bin/bash

echo "🚀 Welcome to Sabir's Portfolio Setup!"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔧 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful! Your portfolio is ready."
    echo ""
    echo "🎯 Next steps:"
    echo "1. Update personal information in the source files"
    echo "2. Replace public/resume.txt with your actual resume"
    echo "3. Test locally: npm run dev"
    echo "4. Follow DEPLOYMENT.md for GitHub + Vercel deployment"
    echo ""
    echo "📚 Documentation:"
    echo "- README.md - Project overview and setup"
    echo "- DEPLOYMENT.md - Deployment guide"
    echo ""
    echo "🌐 Start development server: npm run dev"
    echo "🏗️  Build for production: npm run build"
    echo "👀 Preview production build: npm run preview"
else
    echo ""
    echo "❌ Build failed. Please check the error messages above."
    echo "💡 Common solutions:"
    echo "- Make sure all dependencies are installed: npm install"
    echo "- Check for syntax errors in your code"
    echo "- Verify TailwindCSS configuration"
    exit 1
fi
