function FindProxyForURL(url, host) {
  if (isBlocked(url)) {
    return "PROXY 127.0.0.1:1080";
  } else {
    return "DIRECT";
  }
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
