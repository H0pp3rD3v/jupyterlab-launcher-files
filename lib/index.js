"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apputils_1 = require("@jupyterlab/apputils");
const launcher_1 = require("@jupyterlab/launcher");
const filebrowser_1 = require("@jupyterlab/filebrowser");
const mainmenu_1 = require("@jupyterlab/mainmenu");
require("../index.css");
const FACTORY = 'Editor';
const PY_ICON = 'jp-PythonIcon';
const SH_ICON = 'jp-TerminalIcon';
const HTML_ICON = 'jp-Html5Icon';
const PALETTE_CATEGORY = 'Text Editor';
var CommandIDs;
(function (CommandIDs) {
    CommandIDs.newPy = 'fileeditor:create-new-python-file';
    CommandIDs.newSh = 'fileeditor:create-new-shell-file';
    CommandIDs.newHtml = 'fileeditor:create-new-html-file';
    CommandIDs.newCss = 'fileeditor:create-new-css-file';
    CommandIDs.newJs = 'fileeditor:create-new-javascript-file';
})(CommandIDs || (CommandIDs = {}));
;
const extension = {
    id: 'jupyterlab-launcher-files',
    autoStart: true,
    requires: [
        filebrowser_1.IFileBrowserFactory,
    ],
    optional: [
        launcher_1.ILauncher,
        mainmenu_1.IMainMenu,
        apputils_1.ICommandPalette,
    ],
    activate: (app, browserFactory, launcher, menu, palette) => {
        const { commands } = app;
        var command = CommandIDs.newPy;
        commands.addCommand(command, {
            label: args => (args['isPalette'] ? 'New Python File' : 'Python File'),
            caption: 'Create a new Python file',
            iconClass: args => (args['isPalette'] ? '' : PY_ICON),
            execute: (args) => __awaiter(this, void 0, void 0, function* () {
                const cwd = args['cwd'] || browserFactory.defaultBrowser.model.path;
                const model = yield commands
                    .execute('docmanager:new-untitled', {
                    path: cwd,
                    type: 'file',
                    ext: 'py'
                });
                return commands.execute('docmanager:open', {
                    path: model.path,
                    factory: FACTORY
                });
            })
        });
        if (launcher) {
            launcher.add({
                command,
                category: 'Other',
                rank: 1
            });
        }
        if (palette) {
            palette.addItem({
                command,
                args: { isPalette: true },
                category: PALETTE_CATEGORY
            });
        }
        if (menu) {
            menu.fileMenu.newMenu.addGroup([{ command }], 30);
        }
        var command = CommandIDs.newSh;
        commands.addCommand(command, {
            label: args => (args['isPalette'] ? 'New Shell File' : 'Shell File'),
            caption: 'Create a new Shell file',
            iconClass: args => (args['isPalette'] ? '' : SH_ICON),
            execute: (args) => __awaiter(this, void 0, void 0, function* () {
                const cwd = args['cwd'] || browserFactory.defaultBrowser.model.path;
                const model = yield commands
                    .execute('docmanager:new-untitled', {
                    path: cwd,
                    type: 'file',
                    ext: 'sh'
                });
                return commands.execute('docmanager:open', {
                    path: model.path,
                    factory: FACTORY
                });
            })
        });
        if (launcher) {
            launcher.add({
                command,
                category: 'Other',
                rank: 1
            });
        }
        if (palette) {
            palette.addItem({
                command,
                args: { isPalette: true },
                category: PALETTE_CATEGORY
            });
        }
        if (menu) {
            menu.fileMenu.newMenu.addGroup([{ command }], 30);
        }
        var command = CommandIDs.newHtml;
        commands.addCommand(command, {
            label: args => (args['isPalette'] ? 'New HTML File' : 'HTML File'),
            caption: 'Create a new HTML file',
            iconClass: args => (args['isPalette'] ? '' : HTML_ICON),
            execute: (args) => __awaiter(this, void 0, void 0, function* () {
                const cwd = args['cwd'] || browserFactory.defaultBrowser.model.path;
                const model = yield commands
                    .execute('docmanager:new-untitled', {
                    path: cwd,
                    type: 'file',
                    ext: 'html'
                });
                return commands.execute('docmanager:open', {
                    path: model.path,
                    factory: FACTORY
                });
            })
        });
        if (launcher) {
            launcher.add({
                command,
                category: 'Other',
                rank: 1
            });
        }
        if (palette) {
            palette.addItem({
                command,
                args: { isPalette: true },
                category: PALETTE_CATEGORY
            });
        }
        if (menu) {
            menu.fileMenu.newMenu.addGroup([{ command }], 30);
        }
    }
};
exports.default = extension;
