'use strict';

module.exports = {
    load() {
        // execute when package loaded
    },

    unload() {
        // execute when package unloaded
    },

    // register your ipc messages here
    messages: {
        'open'() {
            Editor.Panel.open('avg');
        },
        'say-hello'() {
            Editor.log('Hello World!');
            // send ipc message to panel
            Editor.Ipc.sendToPanel('avg', 'avg:hello');
        },
        'clicked'() {
            Editor.log('Button clicked!');
        },
        getPackageName(event, data) {
            if (event.reply) {
                let packageName = require("package.json").name;
                event.reply(null, packageName);
            }
        },
    },
};