function solve(obj) {
    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let pattern = /^[\w.]+$/g;
    const validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const specialCharacters = [`<`, `>`, `\\`, `&`, `'`, `"`];

    if (!validMethods.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (obj.ori !== "*" && !obj.uri.match(pattern)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!obj.hasOwnProperty('uri')) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!validVersion.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!obj.hasOwnProperty('message')) {
        throw new Error("Invalid request header: Invalid Message");
    }

    for (let char of specialCharacters) {
        if (obj.message.includes(char)) {
            throw new Error("Invalid request header: Invalid Message");
        }

    }
    return obj;
}

solve({
    method: 'POST',
    uri: 'dsfsdads.',
    version: 'HTTP/0.9',
    message: '\\jjd\sad'
  });