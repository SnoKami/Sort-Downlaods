title "Sort Downloads"
cd %UserProfile%
cd Downloads

echo "Making Directories..."
echo "STEP: Making Directories" > sort.log

mkdir Ext >> sort.log 2>> sort.log
mkdir Ext\Exe >> sort.log 2>> sort.log
mkdir Ext\Bin >> sort.log 2>> sort.log
mkdir Ext\Jar >> sort.log 2>> sort.log
mkdir Ext\Lua >> sort.log 2>> sort.log
mkdir Ext\JS >> sort.log 2>> sort.log
mkdir Ext\ISO >> sort.log 2>> sort.log
mkdir Ext\OBJ >> sort.log 2>> sort.log
mkdir Ext\Zip >> sort.log 2>> sort.log
mkdir Ext\Videos >> sort.log 2>> sort.log
mkdir Ext\Audio >> sort.log 2>> sort.log
mkdir Ext\Pictures >> sort.log 2>> sort.log
mkdir Ext\osu! >> sort.log 2>> sort.log
mkdir Ext\Tetrio >> sort.log 2>> sort.log
mkdir Ext\ini >> sort.log 2>> sort.log
mkdir Ext\Quaver >> sort.log 2>> sort.log
mkdir Ext\docx >> sort.log 2>> sort.log
mkdir Ext\Torrent >> sort.log 2>> sort.log
mkdir Ext\Virtualbox >> sort.log 2>> sort.log
mkdir Ext\msi >> sort.log 2>> sort.log
mkdir Ext\yml >> sort.log 2>> sort.log
mkdir Ext\Fonts >> sort.log 2>> sort.log
mkdir Ext\DLL >> sort.log 2>> sort.log
mkdir Ext\txt >> sort.log 2>> sort.log
mkdir Ext\efi >> sort.log 2>> sort.log
mkdir Ext\HTML >> sort.log 2>> sort.log
mkdir Ext\crx >> sort.log 2>> sort.log
mkdir "Ext\Linux Applications" >> sort.log 2>> sort.log
mkdir Ext\C >> sort.log 2>> sort.log
mkdir Ext\CS >> sort.log 2>> sort.log
mkdir Ext\Java >> sort.log 2>> sort.log
mkdir Ext\db >> sort.log 2>> sort.log
mkdir Ext\APK >> sort.log 2>> sort.log
mkdir Ext\Roblox >> sort.log 2>> sort.log
mkdir Ext\Roblox\Models >> sort.log 2>> sort.log
mkdir Ext\Roblox\Places >> sort.log 2>> sort.log
mkdir "Ext\Beat Saber" >> sort.log 2>> sort.log
mkdir "Ext\Beat Saber\Bloqs" >> sort.log 2>> sort.log
mkdir "Ext\Beat Saber\Platforms" >> sort.log 2>> sort.log
mkdir "Ext\Beat Saber\Sabers" >> sort.log 2>> sort.log
mkdir "Ext\Beat Saber\Avatars" >> sort.log 2>> sort.log
mkdir "Ext\Beat Saber\Playlists" >> sort.log 2>> sort.log

echo "Moving Files"
echo "STEP: Moving Files" >> sort.log
echo "WARN: Errors are not logged here for this step" >> sort.log

move *.exe Ext\Exe\
move *.bin Ext\Bin\
move *.jar Ext\Jar\
move *.lua Ext\Lua\
move *.js Ext\JS\
move *.iso Ext\ISO\
move *.obj Ext\OBJ\ 
move *.zip Ext\Zip\
move *.7z Ext\Zip\
move *.rar Ext\Zip\
move *.tar.gz Ext\Zip\
move *.mp4 Ext\Videos\
move *.mov Ext\Videos\
move *.webm Ext\Videos\
move *.m4v Ext\Videos\
move *.mp3 Ext\Audio\
move *.wav Ext\Audio\
move *.png Ext\Pictures\
move *.jpg Ext\Pictures\
move *.jpeg Ext\Pictures\
move *.ico Ext\Pictures\
move *.webp Ext\Pictures\
move *.jfif Ext\Pictures\
move *.gif Ext\Pictures\
move *.svg Ext\Pictures\
move *.osz Ext\osu!\
move *.osk Ext\osu!\
move *.tpse Ext\Tetrio\
move *.ttrm Ext\Tetrio\
move *.ttr Ext\Tetrio\
move *.ini Ext\ini\
move *.qp Ext\Quaver\
move *.docx Ext\docx\
move *.torrent Ext\Torrent\
move *.magnet Ext\Torrent\
move *.vbox-extpack Ext\Virtualbox\
move *.vbox Ext\Virtualbox\
move *.img Ext\Virtualbox\
move *.msi Ext\msi\
move *.yml Ext\yml\
move *.yaml Ext\yml\
move *.ttf Ext\Fonts\
move *.otf Ext\Fonts\
move *.woff Ext\Fonts\
move *.fnt Ext\Fonts\
move *.fon Ext\Fonts\
move *.eot Ext\Fonts\
move *.acfm Ext\Fonts\
move *.amfm Ext\Fonts\
move *.dfont Ext\Fonts\
move *.ttc Ext\Fonts\
move *.dll Ext\DLL\
move *.txt Ext\txt\
move *.efi Ext\efi\
move *.html Ext\HTML\
move *.crx Ext\crx\
move *.deb "Ext\Linux Applications"
move *.appimage "Ext\Linux Applications"
move *.c Ext\C\
move *.h Ext\C\
move *.cpp Ext\C\ 
move *.hpp Ext\C\
move *.cs Ext\CS\
move *.java Ext\Java\
move *.class Ext\Java\
move *.sql Ext\db\
move *.db Ext\db\
move *.mysql Ext\db\
move *.sqlite Ext\db\
move *.apk Ext\APK\
move *.rbxm Ext\Roblox\Models\
move *.rbxmx Ext\Roblox\Models\
move *.rbxl Ext\Roblox\Places\
move *.rbxlx Ext\Roblox\Places\
move *.bloq "Ext\Beat Saber\Bloqs"
move *.plat "Ext\Beat Saber\Platforms"
move *.saber "Ext\Beat Saber\Sabers"
move *.avatar "Ext\Beat Saber\Avatars"
move *.bplist "Ext\Beat Saber\Playlists"

echo "Removing Empty Directories"
echo "STEP: Remove Empty Dirs" >> sort.log

curl -o _remove.ps1 https://raw.githubusercontent.com/MokiyCodes/Sort-Downlaods/main/_removeEmptyDir.ps1
powershell -file _remove.ps1
rm _remove.ps1

@REM I LIKE MEN!!!1
