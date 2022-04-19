#!/bin/bash
#
# Original in Batch by @SnoKami
# Ported to sh by @MokiyCodes
#

#
# MIT License
#
# Copyright (c) 2022 SnoKami
# Copyright (c) 2022 MokiyCodes
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
#

cd ~/Downloads
echo "// Creating Directories"
mkdir Ext
mkdir Ext/Exe
mkdir Ext/Bin
mkdir Ext/Jar
mkdir Ext/Lua
mkdir Ext/JS
mkdir Ext/ISO
mkdir Ext/OBJ
mkdir Ext/Zip
mkdir Ext/Videos
mkdir Ext/Audio
mkdir Ext/Pictures
mkdir "Ext/osu!"
mkdir Ext/Tetrio
mkdir Ext/ini
mkdir Ext/Quaver
mkdir Ext/docx
mkdir Ext/Torrent
mkdir Ext/Virtualbox
mkdir Ext/msi
mkdir Ext/yml
mkdir Ext/Fonts
mkdir Ext/DLL
mkdir Ext/txt
mkdir Ext/efi
mkdir Ext/HTML
mkdir Ext/crx
mkdir Ext/Applications
mkdir Ext/C
mkdir Ext/CS
mkdir Ext/Java
mkdir Ext/db
mkdir Ext/APK
mkdir Ext/Roblox
mkdir Ext/Roblox/Models
mkdir Ext/Roblox/Places
mkdir "Ext/Beat Saber"
mkdir "Ext/Beat Saber/Bloqs"
mkdir "Ext/Beat Saber/Platforms"
mkdir "Ext/Beat Saber/Sabers"
mkdir "Ext/Beat Saber/Avatars"
mkdir "Ext/Beat Saber/Playlists"

echo "// Moving Files to Directories"
mv *.exe Ext/Exe/
mv *.bin Ext/Bin/
mv *.jar Ext/Jar/
mv *.lua Ext/Lua/
mv *.js Ext/JS/
mv *.iso Ext/ISO/
mv *.obj Ext/OBJ/
mv *.zip Ext/Zip/
mv *.7z Ext/Zip/
mv *.rar Ext/Zip/
mv *.tar Ext/Zip/
mv *.tar.gz Ext/Zip/
mv *.mp4 Ext/Videos/
mv *.mov Ext/Videos/
mv *.webm Ext/Videos/
mv *.m4v Ext/Videos/
mv *.mp3 Ext/Audio/
mv *.wav Ext/Audio/
mv *.png Ext/Pictures/
mv *.jpg Ext/Pictures/
mv *.jpeg Ext/Pictures/
mv *.ico Ext/Pictures/
mv *.webp Ext/Pictures/
mv *.jfif Ext/Pictures/
mv *.gif Ext/Pictures/
mv *.svg Ext/Pictures/
mv *.osz "Ext/osu!/"
mv *.osk "Ext/osu!/"
mv *.tpse Ext/Tetrio/
mv *.ttrm Ext/Tetrio/
mv *.ttr Ext/Tetrio/
mv *.ini Ext/ini/
mv *.qp Ext/Quaver/
mv *.docx Ext/docx/
mv *.torrent Ext/Torrent/
mv *.magnet Ext/Torrent/
mv *.vbox-extpack Ext/Virtualbox/
mv *.vbox Ext/Virtualbox/
mv *.img Ext/Virtualbox/
mv *.msi Ext/msi/
mv *.yml Ext/yml/
mv *.yaml Ext/yml/
mv *.ttf Ext/Fonts/
mv *.otf Ext/Fonts/
mv *.woff Ext/Fonts/
mv *.fnt Ext/Fonts/
mv *.fon Ext/Fonts/
mv *.eot Ext/Fonts/
mv *.acfm Ext/Fonts/
mv *.amfm Ext/Fonts/
mv *.dfont Ext/Fonts/
mv *.ttc Ext/Fonts/
mv *.dll Ext/DLL/
mv *.txt Ext/txt/
mv *.efi Ext/efi/
mv *.html Ext/HTML/
mv *.crx Ext/crx/
mv *.deb Ext/Applications/
mv *.appimage Ext/Applications/
mv *.c Ext/C/
mv *.h Ext/C/
mv *.cpp Ext/C/
mv *.hpp Ext/C/
mv *.cs Ext/CS/
mv *.java Ext/Java/
mv *.class Ext/Java/
mv *.sql Ext/db/
mv *.db Ext/db/
mv *.mysql Ext/db/
mv *.sqlite Ext/db/
mv *.apk Ext/APK/
mv *.rbxm Ext/Roblox/Models/
mv *.rbxmx Ext/Roblox/Models/
mv *.rbxl Ext/Roblox/Places/
mv *.rbxlx Ext/Roblox/Places/
mv *.bloq "Ext/Beat Saber/Bloqs"
mv *.plat "Ext/Beat Saber/Platforms"
mv *.saber "Ext/Beat Saber/Sabers"
mv *.avatar "Ext/Beat Saber/Avatars"
mv *.bplist "Ext/Beat Saber/Playlists"

echo "// Deleting Empty Directories"
find ~/Downloads/Ext -empty -delete

echo "// Done!"
