const Fs = require("fire-fs");
const Path = require("fire-path");
const packageName = 'avg';
Editor.Panel.extend({
    style: Fs.readFileSync(Editor.url(`packages://${packageName}/panel/index.css`), "utf-8"),
    template: Fs.readFileSync(Editor.url(`packages://${packageName}/panel/index.html`), 'utf-8'),

    ready() {
        this.plugin = new window.Vue({
            el: this.shadowRoot,
            created() {

            },
            data: {},
            methods: {}
        })
    },

    messages: {}
});