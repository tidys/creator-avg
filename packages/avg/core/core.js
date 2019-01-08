const Fs = require("fire-fs");
const Path = require("fire-path");

module.exports = {
    _packageName: "avg",
    url(path) {
        Editor.Ipc.sendToMain("avg", "getPackageName", function (error, name) {

        });
    },
    urlData(path) {
        let packageUrl = Editor.url(`packages://${this._packageName}`);
        let fullPath = Path.join(packageUrl, path);
        if (Fs.existsSync(fullPath)) {
            let fileData = Fs.readFileSync(fullPath, "utf-8");
            return fileData;
        } else {
            return "";
        }
    },


};