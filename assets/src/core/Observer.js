let ObserverMgr = require("ObserverMgr");
let Observer = cc.Class({
    extends: cc.Component,

    _initMsg() {
        let list = this._getMsgList();
        if (list) {
            for (let k = 0; k < list.length; k++) {
                let msg = list[k];
                ObserverMgr.addEventListener(msg, this._onMsg, this);
                cc.systemEvent.on(msg, this._onEvent, this);
            }
        }
    },
    ctor() {
        if (!CC_EDITOR) {
            this._initMsg();
        }
    },
    onLoad() {
    },
    _getMsgList() {
        return [];
    },
    // [子类继承接口]消息返回
    _onMsg(msg, data) {
        //let len = "error-".length;
        //msg = msg.substr(len, msg.length - len);
        //return msg;
    },
    _onEvent(event, data) {
        let eventName = event.getEventName();
        let eventData = event.getUserData();
        this._onMsg(eventName, eventData);
    },
    // [子类继承接口]游戏内逻辑错误
    _onError(msg, code, data) {

    },
    //处理错误数据
    _onErrorDeal(errorMsgString, data) {
        let msgString = data[0];
        let errorCode = data[1];
        let errorData = data[2];
        this._onError(msgString, errorCode, errorData);
    },
    onDisable() {
        ObserverMgr.removeEventListenerWithObject(this);
    },
    onEnable() {
        // TODO next version register event method
        // ObserverMgr.removeEventListenerWithObject(this);
        // this._initMsg();
    },
    onDestroy() {
        ObserverMgr.removeEventListenerWithObject(this);
        let list = this._getMsgList();
        for (let k = 0; k < list.length; k++) {
            let msg = list[k];
            cc.systemEvent.off(msg, this._onEvent, this);
        }
    },
});
cc.Observer = module.exports = Observer;