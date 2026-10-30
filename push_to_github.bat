@echo off
cd /d "%~dp0"
echo ========================================================
echo   Pushing All Complete Website Files to GitHub
echo ========================================================
echo Repo: https://github.com/ibrahimbicom-droid/Don-t-Splash-Script.git
echo.
git branch -M main
git push -u origin main --force
echo.
if %errorlevel% neq 0 (
    echo [NOTE] If you were prompted for GitHub login, please sign in.
) else (
    echo [SUCCESS] Sabhi folders aur files GitHub par upload ho chuki hain!
    echo Vercel automatically 30 seconds me redeploy kar dega.
)
pause
