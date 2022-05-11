import path from 'path';

const _SortList = {
  'Exe': ['.exe'],
  'Bin': ['.bin'],
  'Jar': ['.jar'],
  'Lua': ['.lua'],
  'JS': ['.js'],
  'ISO': ['.iso'],
  'OBJ': ['.obj'],
  'Zip': [
    '.zip',
    '.7z',
    '.rar',
    '.tar',
    '.tar.gz',
    '.tar.xz'
  ],
  'Videos': [
    '.mp4',
    '.mov',
    '.webm',
    '.m4v',
    '.wmv',
    '.3gpp'
  ],
  'Audio': [
    '.mp3',
    '.wav'
  ],
  'Pictures': [
    '.png',
    '.jpg',
    '.jpeg',
    '.ico',
    '.webp',
    '.jfif',
    '.gif',
    '.svg'
  ],
  'osu!': [
    '.osz',
    '.osk'
  ],
  'Tetrio': [
    '.tpse',
    '.ttrm',
    '.ttr'
  ],
  'ini': ['.ini'],
  'Quaver': ['.qp'],
  'Documents': [
    '.docx',
    '.pdf',
    '.xltx',
    '.xlsx'
  ],
  'Torrent': [
    '.torrent',
    '.magnet'
  ],
  'Virtualbox': [
    '.vbox-extpack',
    '.vbox',
    '.img'
  ],
  'msi': ['.msi'],
  'yml': [
    '.yml',
    '.yaml'
  ],
  'Fonts': [
    '.ttf',
    '.otf',
    '.woff',
    '.fnt',
    '.fon',
    '.eot',
    '.acfm',
    '.amfm',
    '.dfont',
    '.ttc'
  ],
  'DLL': ['.dll'],
  'TXT': ['.txt'],
  'EFI': ['.efi'],
  'HTML': ['.html'],
  'Chrome Extension': ['.crx'],
  'Linux Applications': [
    '.deb',
    '.appimage'
  ],
  'C': [
    '.c',
    '.h',
    '.cpp',
    '.hpp'
  ],
  'CS': ['.cs'],
  'Java': [
    '.java',
    '.class'
  ],
  'db': [
    '.sql',
    '.db',
    '.mysql',
    '.sqlite'
  ],
  'APK': ['.apk'],
  'Roblox/Models': [
    '.rbxm',
    '.rbxmx'
  ],
  'Roblox/Places': [
    '.rbxl',
    '.rbxlx'
  ],
  'Beat Saber/Bloqs': ['.bloq'],
  'Beat Saber/Platforms': ['.plat'],
  'Beat Saber/Sabers': ['.saber'],
  'Beat Saber/Avatars': ['.avatar'],
  'Beat Saber/Playlists': ['.bplist'],
  'Adobe/Photoshop': ['.psd'],
  'Adobe/Premire Pro': ['.prproj'],
  'Adobe/After Effects': ['.aep'],
  'Adobe/Illustrator': ['.ai'],
  'bginfo': ['.bgi'],
  'Markdown': ['.md'],
  'JSON': ['.json'],
  'IY Plugins': ['.iy'],
  'Script-Ware': ['.swtheme'],
  'Unity/Package': ['.unitypackage'],
  'Unfinished-Chrome-Downloads': ['.unitypackagecrdownload'],
  'Batch': [
    '.bat', '.cmd'
  ],
  'Powershell': [
    '.ps1', '.ps'
  ],
  'VRoid': ['.vrm']
};
for (const name in _SortList)
  if (Object.prototype.hasOwnProperty.call(_SortList, name)) {
    const val = _SortList[name];
    delete _SortList[name];
    _SortList[path.join('Ext', name)] = val;
  }

export const SortList = _SortList;
export default SortList;
