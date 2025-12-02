@echo off
echo ========================================
echo   EIU Timer Pro - Local Server
echo ========================================
echo.
echo Dang khoi dong server...
echo.

cd /d "%~dp0"

REM Check if Python is available
python --version >nul 2>&1
if errorlevel 1 (
    echo [LOI] Khong tim thay Python!
    echo.
    echo Vui long cai Python tu python.org
    echo Hoac dung file "EIU-Timer-Pro.html" (portable version^)
    echo.
    pause
    exit /b 1
)

echo Server dang chay tai: http://localhost:8000
echo.
echo Tu dong mo trinh duyet sau 2 giay...
echo Nhan Ctrl+C de thoat
echo ========================================
echo.

REM Start server in background and open browser
start /B python -m http.server 8000

REM Wait 2 seconds for server to start
timeout /t 2 /nobreak >nul

REM Open default browser
start http://localhost:8000

REM Keep window open
echo.
echo Trinh duyet da mo! Server dang chay...
echo KHONG DONG cua so nay khi dang su dung app!
echo.
pause
