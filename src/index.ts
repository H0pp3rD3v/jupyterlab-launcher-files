import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

import { ILauncher } from '@jupyterlab/launcher';

import { IFileBrowserFactory } from '@jupyterlab/filebrowser';

import { IMainMenu } from '@jupyterlab/mainmenu';

import '../index.css';

const FACTORY = 'Editor';
const PY_ICON = 'jp-PythonIcon';
const SH_ICON = 'jp-TerminalIcon';
const HTML_ICON = 'jp-Html5Icon';
const TEXT_ICON = 'jp-FileIcon';
const JSON_ICON = 'jp-JsonIcon';
const PALETTE_CATEGORY = 'Text Editor';

namespace CommandIDs {
  export const newPy = 'fileeditor:create-new-python-file';
  export const newSh = 'fileeditor:create-new-shell-file';
  export const newHtml = 'fileeditor:create-new-html-file';
  export const newCss = 'fileeditor:create-new-css-file';
  export const newJs = 'fileeditor:create-new-javascript-file';
  export const newJson = 'fileeditor:create-new-json-file';
};

const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-launcher-files',
  autoStart: true,
  requires: [
    IFileBrowserFactory,
  ],
  optional: [
    ILauncher,
    IMainMenu,
    ICommandPalette,
  ],
  activate: (
    app: JupyterFrontEnd,
    browserFactory: IFileBrowserFactory,
    launcher: ILauncher,
    menu: IMainMenu | null,
    palette: ICommandPalette,
  ) => {
    const { commands } = app;
    
    var command = CommandIDs.newPy;
      
    commands.addCommand(command, {
      label: args => (args['isPalette'] ? 'New Python File' : 'Python File'),
      caption: 'Create a new Python file',
      iconClass: args => (args['isPalette'] ? '' : PY_ICON),
      execute: async args => {
        const cwd = args['cwd'] || browserFactory.defaultBrowser.model.path;
        const model = await commands
          .execute('docmanager:new-untitled', {
            path: cwd,
            type: 'file',
            ext: 'py'
          });
        return commands.execute('docmanager:open', {
          path: model.path,
          factory: FACTORY
        });
      }
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
        args: { isPalette: true},
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
      execute: async args => {
        const cwd = args['cwd'] || browserFactory.defaultBrowser.model.path;
        const model = await commands
          .execute('docmanager:new-untitled', {
            path: cwd,
            type: 'file',
            ext: 'sh'
          });
        return commands.execute('docmanager:open', {
          path: model.path,
          factory: FACTORY
        });
      }
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
        args: { isPalette: true},
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
      execute: async args => {
        const cwd = args['cwd'] || browserFactory.defaultBrowser.model.path;
        const model = await commands
          .execute('docmanager:new-untitled', {
            path: cwd,
            type: 'file',
            ext: 'html'
          });
        return commands.execute('docmanager:open', {
          path: model.path,
          factory: FACTORY
        });
      }
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
        args: { isPalette: true},
        category: PALETTE_CATEGORY
      });
    }

    if (menu) {
      menu.fileMenu.newMenu.addGroup([{ command }], 30);
    }
    
    var command = CommandIDs.newCss;
    
    commands.addCommand(command, {
      label: args => (args['isPalette'] ? 'New CSS File' : 'CSS File'),
      caption: 'Create a new CSS file',
      iconClass: args => (args['isPalette'] ? '' : TEXT_ICON),
      execute: async args => {
        const cwd = args['cwd'] || browserFactory.defaultBrowser.model.path;
        const model = await commands
          .execute('docmanager:new-untitled', {
            path: cwd,
            type: 'file',
            ext: 'css'
          });
        return commands.execute('docmanager:open', {
          path: model.path,
          factory: FACTORY
        });
      }
    });

    if (launcher) {
      launcher.add({
        command,
        category: 'Other',
        rank: 2
      });
    }

    if (palette) {
      palette.addItem({
        command,
        args: { isPalette: true},
        category: PALETTE_CATEGORY
      });
    }

    if (menu) {
      menu.fileMenu.newMenu.addGroup([{ command }], 30);
    }
      
    var command = CommandIDs.newJs;
    
    commands.addCommand(command, {
      label: args => (args['isPalette'] ? 'New Javascript File' : 'Javascript File'),
      caption: 'Create a new Javascript file',
      iconClass: args => (args['isPalette'] ? '' : TEXT_ICON),
      execute: async args => {
        const cwd = args['cwd'] || browserFactory.defaultBrowser.model.path;
        const model = await commands
          .execute('docmanager:new-untitled', {
            path: cwd,
            type: 'file',
            ext: 'js'
          });
        return commands.execute('docmanager:open', {
          path: model.path,
          factory: FACTORY
        });
      }
    });

    if (launcher) {
      launcher.add({
        command,
        category: 'Other',
        rank: 2
      });
    }

    if (palette) {
      palette.addItem({
        command,
        args: { isPalette: true},
        category: PALETTE_CATEGORY
      });
    }

    if (menu) {
      menu.fileMenu.newMenu.addGroup([{ command }], 30);
    }
      
    var command = CommandIDs.newJson;
    
    commands.addCommand(command, {
      label: args => (args['isPalette'] ? 'New JSON File' : 'JSON File'),
      caption: 'Create a new JSON file',
      iconClass: args => (args['isPalette'] ? '' : JSON_ICON),
      execute: async args => {
        const cwd = args['cwd'] || browserFactory.defaultBrowser.model.path;
        const model = await commands
          .execute('docmanager:new-untitled', {
            path: cwd,
            type: 'file',
            ext: 'json'
          });
        return commands.execute('docmanager:open', {
          path: model.path,
          factory: FACTORY
        });
      }
    });

    if (launcher) {
      launcher.add({
        command,
        category: 'Other',
        rank: 2
      });
    }

    if (palette) {
      palette.addItem({
        command,
        args: { isPalette: true},
        category: PALETTE_CATEGORY
      });
    }

    if (menu) {
      menu.fileMenu.newMenu.addGroup([{ command }], 30);
    }
  }
};

export default extension;