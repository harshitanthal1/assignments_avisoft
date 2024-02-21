const fileSystemModule = require('./fileSystemModule');

fileSystemModule.listFiles('./')
    .then(() => {
        return fileSystemModule.createDirectory('new-directory');
    })
    .then(() => {
        return fileSystemModule.readFileContent('test.txt');
    })
    .then(() => {
        return fileSystemModule.writeToFile('new-file.txt', 'Hello, Node.js!');
    })
    .catch(error => {
        console.error("Error:", error);
    });
