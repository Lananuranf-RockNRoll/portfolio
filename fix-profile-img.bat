@echo off
echo Rename foto profil supaya case-insensitive di semua OS...
copy "public\Profile.jpg" "public\profile.jpg" 2>nul
if exist "public\profile.jpg" (echo   OK: public\profile.jpg siap) else (echo   ERROR: File tidak ditemukan, pastikan public\Profile.jpg ada)
echo.
echo Sekarang install ulang deps dan jalankan dev server:
echo   rmdir /s /q node_modules
echo   del package-lock.json
echo   npm install
echo   npm run dev
pause
