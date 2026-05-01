@echo off
echo ============================================
echo  Hapus file yang tidak dipakai
echo ============================================

REM === ROOT — file React lama & config duplikat ===
echo [ROOT] Menghapus file lama...

if exist "index.html"           del "index.html"            && echo   x index.html
if exist "vite.config.ts"       del "vite.config.ts"        && echo   x vite.config.ts
if exist "tailwind.config.ts"   del "tailwind.config.ts"    && echo   x tailwind.config.ts
if exist "tailwind.config.mjs"  del "tailwind.config.mjs"   && echo   x tailwind.config.mjs
if exist "postcss.config.js"    del "postcss.config.js"     && echo   x postcss.config.js
if exist "tsconfig.app.json"    del "tsconfig.app.json"     && echo   x tsconfig.app.json
if exist "tsconfig.node.json"   del "tsconfig.node.json"    && echo   x tsconfig.node.json
if exist "eslint.config.js"     del "eslint.config.js"      && echo   x eslint.config.js
if exist "setup-astro.bat"      del "setup-astro.bat"       && echo   x setup-astro.bat
if exist "setup-astro.sh"       del "setup-astro.sh"        && echo   x setup-astro.sh
if exist "migrate-to-astro.mjs" del "migrate-to-astro.mjs"  && echo   x migrate-to-astro.mjs
if exist "install-deps.bat"     del "install-deps.bat"      && echo   x install-deps.bat

REM === src/ — entry point React lama ===
echo.
echo [src] Menghapus entry point React lama...

if exist "src\App.tsx"    del "src\App.tsx"   && echo   x src\App.tsx
if exist "src\main.tsx"   del "src\main.tsx"  && echo   x src\main.tsx
if exist "src\index.css"  del "src\index.css" && echo   x src\index.css

REM === src/sections/ — digantikan src/components/*.astro ===
echo.
echo [src/sections] Menghapus sections React lama...

if exist "src\sections\About.tsx"    del "src\sections\About.tsx"    && echo   x src\sections\About.tsx
if exist "src\sections\CV.tsx"       del "src\sections\CV.tsx"       && echo   x src\sections\CV.tsx
if exist "src\sections\Home.tsx"     del "src\sections\Home.tsx"     && echo   x src\sections\Home.tsx
if exist "src\sections\Projects.tsx" del "src\sections\Projects.tsx" && echo   x src\sections\Projects.tsx
if exist "src\sections\Skills.tsx"   del "src\sections\Skills.tsx"   && echo   x src\sections\Skills.tsx
if exist "src\sections"              rmdir "src\sections"            && echo   x src\sections\ (folder)

REM === public/ — file tidak terpakai ===
echo.
echo [public] Menghapus file public tidak terpakai...

if exist "public\joh.jpg" del "public\joh.jpg" && echo   x public\joh.jpg

REM === src/assets/ — file tidak terpakai ===
echo.
echo [src/assets] Menghapus asset tidak terpakai...

if exist "src\assets\laporan.png"          del "src\assets\laporan.png"          && echo   x src\assets\laporan.png
if exist "src\assets\readme.png"           del "src\assets\readme.png"           && echo   x src\assets\readme.png
if exist "src\assets\task-management.png"  del "src\assets\task-management.png"  && echo   x src\assets\task-management.png
if exist "src\assets\joh.jpg"              del "src\assets\joh.jpg"              && echo   x src\assets\joh.jpg

echo.
echo ============================================
echo  Selesai! File yang dipertahankan:
echo  - astro.config.mjs
echo  - package.json
echo  - tsconfig.json
echo  - src/styles/global.css
echo  - src/layouts/BaseLayout.astro
echo  - src/layouts/MainLayout.astro
echo  - src/pages/index.astro
echo  - src/pages/blog/index.astro
echo  - src/pages/blog/cara-deploy-react-go-docker-aws.astro
echo  - src/pages/projects/letta-school.astro
echo  - src/components/*.astro (semua)
echo  - src/components/HeroIsland.tsx
echo  - src/components/CVDownloadButton.tsx
echo  - src/assets/Profile.jpg
echo  - src/assets/about.png
echo  - public/* (semua favicon, og-image, dll)
echo ============================================
pause
