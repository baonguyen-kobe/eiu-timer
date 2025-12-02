@echo off
title EIU Timer Pro - Portable Edition
color 0A

echo.
echo ================================================
echo        EIU TIMER PRO - PORTABLE EDITION
echo ================================================
echo.

cd /d "%~dp0"

REM Check Python
python --version >nul 2>&1
if not errorlevel 1 (
    echo [OK] Da phat hien Python
    echo.
    goto :START_PYTHON
)

REM Try py launcher
py --version >nul 2>&1
if not errorlevel 1 (
    echo [OK] Da phat hien Python ^(py launcher^)
    echo.
    goto :START_PY
)

REM No Python found - Use embedded solution
echo [CANH BAO] Khong tim thay Python
echo.
echo GIAI PHAP 1: Cai Python (Khong can Admin^)
echo   - Vao Microsoft Store
echo   - Tim "Python" va cai dat
echo   - Hoac tai tu: https://python.org
echo.
echo GIAI PHAP 2: Dung Node.js portable
echo   (Dang phat trien...)
echo.
echo GIAI PHAP 3: Mo qua VSCode Live Server
echo   (Xem file HUONG-DAN-SU-DUNG.md)
echo.
pause
exit /b 1

:START_PYTHON
echo Khoi dong server...
start /B python -m http.server 8000 2>nul
goto :OPEN_BROWSER

:START_PY
echo Khoi dong server...
start /B py -m http.server 8000 2>nul
goto :OPEN_BROWSER

:OPEN_BROWSER
echo Cho server khoi dong...
timeout /t 2 /nobreak >nul

echo Mo trinh duyet...
start http://localhost:8000

echo.
echo ================================================
echo  SERVER DANG CHAY TAI: http://localhost:8000
echo ================================================
echo.
echo  Trinh duyet da tu dong mo!
echo  KHONG DONG cua so nay khi dang dung app
echo.
echo  Nhan phim bat ky de thoat server...
echo ================================================
echo.
pause >nul

REM Kill Python server processes
taskkill /F /FI "WINDOWTITLE eq python*http.server*" >nul 2>&1
taskkill /F /FI "IMAGENAME eq python.exe" /FI "MEMUSAGE gt 1" >nul 2>&1

echo.
echo Server da dong. Bye!
timeout /t 2 >nul
exit
