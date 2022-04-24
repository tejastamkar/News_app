function GetFileExt(file) {
  var temp = file.name;
  temp = temp.split(".");
  var ext = temp.slice(temp.length - 1, temp.length);
  return "." + ext[0];
}

function GetFileName(file) {
  var temp = file.name;
  temp = temp.split(".");
  var fname = temp.slice(0, -1).join(".");
  return fname;
}

export {GetFileExt , GetFileName}