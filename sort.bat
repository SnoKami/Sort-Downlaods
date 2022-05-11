@echo off

title Sort Downloads - Upgrader
echo !! Sort Downloads @ Batch is Deprecated !!
echo Upgrading for you...

echo Downloading Prebuilt Executable...
curl -o sort.exe https://github.com/SnoKami/Sort-Downlaods/releases/latest/download/main-win.exe

echo Removing Legacy Sorter
del sort.bat

echo If you manually installed: Please use sort.exe in future.
echo If you used the auto-installer: Everything should work as expected
echo To sort, press any key:
pause
sort.exe
