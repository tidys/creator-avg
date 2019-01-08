declare module fs {
    export function readFileSync(file: string, utf8: string): string;
}

declare module Editor {
    import array = cc.js.array;

    export let dev: boolean;
    export let isDarwin: boolean;
    export let isElectron: boolean;
    export let isMainProcess: boolean;
    export let isNative: boolean;
    export let isNode: boolean;
    export let isOffline: boolean;
    export let isPureWeb: boolean;
    export let isRendererProcess: boolean;
    export let isRetina: boolean;
    export let isWin32: boolean;
    export let lang: string;
    export let libraryPath: string;
    export let sceneScripts: {};
    export let frameworkPath: string;
    export let gizmos: {};
    export let appPath: string;

    export function trace();

    export function log();

    export function error();

    export function failed();

    export function require();

    export function success();

    export function info();

    export function url();

    export function warn();

    export function url(url: string): string;


    export function T();

    export function require(model: string): string;

    export function log(log: string): void;

    export let Scene: {
        callSceneScript(plugin: string, action: string, data: any, cb: Function);
    };

    export let projectInfo: {
        path: "project path",
    };
    // 设置

    /////////////////////////////////Ipc//////////////////////////////
    export let UI: {
        Asset();
        BoxContainer();
        Button();
        ButtonState();
        Checkbox();
        Color();
        ColorPicker();
        Disable: {};
    };
    export let Undo: {
        Command: Command;
        add();
        cancel();
        clear();
        collapseTo();
        commit();
        dirty();
        local();
        redo();
        register();
        reset();
        save();
        setCurrentDescription();
        undo();
    };
    export let User: {
        getSessionCode();
        isLoggedIn();
    };
    export let Utils: {
        UuidUtils: {
            NonUuidMark: ".",
            compressHex();
            compressUuid();
            decompressUuid();
            isUuid();
            uuid();
        };
        urlToPath();
    };
    export let Window: {
        center();
        focus();
        load();
        open();
        resize();
        resizeSync();
    };

    export class Command {

    }

    export let Audio: {
        cancel();
        context();
        load();
    };

    export let Dialog: {
        messageBox();
        openFile();
        saveFile();
    };
    // 有很多缓动函数
    export let Easing: {
        backIn();
    };

    export let JS: {
        addon();
        assign();
        assignExcept();
        clear();
        copyprop();
        extend();
        extract();
        getPropertyByPath();
    };
    export let KeyCode: {
        aliases: {
            caps, break, cmd, control, ctl, del, escape, ins,
            option, pause, pgdn, pgup, return, spc, windows
        };
        code: { 0, 1, 2, 4 },
        codes: {},
        names: {},
    };
    export let MainMenu: {
        add();
        apply();
        init();
        remove();
        set();
        update();
    };
    export let Math: {};
    export let Menu: {
        checkTemplate();
        popup();
        register();
        walk();
    };
    export let Package: {
        queryInfo();
        queryInfos();
        reload();
    };
    export let Ipc: {
        cancelRequest(): void;
        sendToAll(plugin: string, msg: string): void;
        sendToPanel(plugin: string, msg: string): void;
        sendToMain(plugin: string, msg: string): void;
        sendToMainSync(plugin: string, msg: string): void;
        sendToMainWin(plugin: string, msg: string): void;
        sendToPackage(plugin: string, msg: string, data: any): void;
        sendToWins(plugin: string, msg: string): void;
    };


    export class IpcListener {
        on(event: string, cb: Function);

        once(event: string, cb: Function);

        clear();
    }

    /////////////////////////////////Panel//////////////////////////////
    export let Panel: {
        open(panelID: string): void;
        close();
        dock();
        extend();
        find();
        focus();
        getFocusedPanel();
        isDirty();
        newFrame();
        popup();
        panels: Array;
    };

    export let Protocol: {
        init();
        register();
        url();
    };
    export let Selection: {
        cancel();
        clear();
        confirm();
        confirmed();
        contexts();
        curActivate();
        curGlobalActivate();
        filter();
        hover();
        hovering();
        local();
        path();
        register();
        reset();
        select();
        setContext();
        unselect();
    };
    /////////////////////////////////Profile//////////////////////////////
    export let Profile: {
        load(profile: string, cb: Function): void;

    };


    ///////////////////////////////////////////////////////////////////
    export let assetdb: {
        create(url: string, data: string, callback: Function): void;
        exists(url: string): boolean;
        createOrSave(url: string, data: string, callback: Function): void;
        deepQuery();
        delete();
        explore();
        exploreLib();
        import();
        library: string;
        move();
        queryAssets();
        queryMetaInfoByUuid();
        queryPathByUrl();
        queryPathByUuid();
        queryUrlByUuid();
        queryUuidByUrl();
        refresh();
        remove: {},
        saveExists();
        saveMeta();
    };
    export let assets: {
        'animation-clip'();
        asset();
    };
    export let assettype2name: {
        'cc.AnimationClip': "animation-clip"
        'cc.Asset': "native-asset"
        'cc.AudioClip': "audio-clip"
        'cc.BitmapFont': "bitmap-font"
        'cc.CoffeeScript': "coffeescript"
        'cc.Font': "font"
        'cc.JavaScript': "javascript"
        'cc.JsonAsset': "json"
        'cc.LabelAtlas': "label-atlas"
        'cc.ParticleAsset': "particle"
        'cc.Prefab': "prefab"
        'cc.RawAsset': "raw-asset"
        'cc.SceneAsset': "scene"
        'cc.Script': "script"
        'cc.SpriteAtlas': "texture-packer"
        'cc.SpriteFrame': "sprite-frame"
        'cc.TTFFont': "ttf-font"
        'cc.TextAsset': "text"
        'cc.Texture2D': "texture"
        'cc.TiledMapAsset': "tiled-map"
        'cc.TypeScript': "typescript"
        'dragonBones.DragonBonesAsset': "dragonbones"
        'dragonBones.DragonBonesAtlasAsset': "dragonbones-atlas"
        'sp.SkeletonData': "spine"
    };


    export let globalProfile: {
        addListener();
        domain();
        emmit();
        eventNames();
        getMaxListeners();
        listenerCount();
        listeners();
        on();
        once();
        removeAllListeners();
        removeListeners();
    };
    export let i18n: {
        clear();
        extend();
        format();
        formatPath();
        replace();
        unset();
    };


}
