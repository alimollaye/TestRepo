function FindProxyForURL(url, host) {
    // Check if the host is blocked
    if (isBlocked(host)) {
        return "PROXY 127.0.0.1:1080";
    } else {
        return "DIRECT";
    }
}

function isBlocked(host) {
    // Create an XMLHTTP object to make an HTTP request to the website
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://" + host, false);
    xhr.send(null);

    // Check the status code of the HTTP response to determine if the website is blocked
    if (xhr.status == 200) {
        return false;
    } else {
        return true;
    }
}