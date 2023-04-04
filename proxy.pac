function FindProxyForURL(url, host) {
    return "PROXY 127.0.0.1:1080";
}

function isBlocked(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  try {
    xhr.send();
  } catch (e) {
    return true;
  }
  return (xhr.status >= 400);
}
