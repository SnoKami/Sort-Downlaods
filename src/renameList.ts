// List of files to rename
export const files = [
  /unknown( ?\([0-9]+\))?\.(jpg|jpeg|png|gif|mp4|mp3|ico|webp)/, // unknown.png
  /unknown-[0-9]+( ?\([0-9]+\))?\.(jpg|jpeg|png|gif|mp4|mp3|ico|webp)/, // unknown-x.png
  /.( ?\([0-9]+\))?\.(jpg|jpeg|png|gif|mp4|mp3|ico|webp)/, // single character multimedia
  /video0( ?\([0-9]+\))?\.mp4/, // video0.mp4
];
export default files;
