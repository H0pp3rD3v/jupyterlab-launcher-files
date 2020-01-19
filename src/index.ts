import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

import { ILauncher } from '@jupyterlab/launcher';

import { IFileBrowserFactory } from '@jupyterlab/filebrowser';

import { IMainMenu } from '@jupyterlab/mainmenu';

import '../index.css';

const FACTORY = 'Editor';
const ICON_CLASS = 'jp-PythonIcon';
const PALETTE_CATEGORY = 'Text Editor';

namespace CommandIDs {
  export const createNew = 'fileeditor:create-new-python-file';
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

    const py = CommandIDs.createNew;
    const sh = CommandIDs.createNew;
    const css = CommandIDs.createNew;
    const js = CommandIDs.createNew;
    const html = CommandIDs.createNew;

    commands.addCommand(py, {
      label: args => (args['isPalette'] ? 'New Python File' : 'Python File'),
      caption: 'Create a new Python file',
      iconClass: args => (args['isPalette'] ? '' : ICON_CLASS),
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
    commands.addCommand(sh, {
      label: args => (args['isPalette'] ? 'New Shell File' : 'Shell File'),
      caption: 'Create a new Shell file',
      iconClass: args => (args['isPalette'] ? '' : ICON_CLASS),
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
    commands.addCommand(css, {
      label: args => (args['isPalette'] ? 'New CSS File' : 'CSS File'),
      caption: 'Create a new CSS file',
      iconClass: args => (args['isPalette'] ? '' : ICON_CLASS),
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
    commands.addCommand(css, {
      label: args => (args['isPalette'] ? 'New JS File' : 'JS File'),
      caption: 'Create a new JS file',
      iconClass: args => (args['isPalette'] ? '' : ICON_CLASS),
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
    commands.addCommand(css, {
      label: args => (args['isPalette'] ? 'New HTML File' : 'HTML File'),
      caption: 'Create a new HTML file',
      iconClass: args => (args['isPalette'] ? '' : ICON_CLASS),
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
      
    // add to the launcher
    if (launcher) {
      launcher.add({
        py,
        category: 'Other',
        rank: 1
      });
      launcher.add({
        sh,
        category: 'Other',
        rank: 1
      });
      launcher.add({
        html,
        category: 'Other',
        rank: 2
      });
      launcher.add({
        css,
        category: 'Other',
        rank: 2
      });
      launcher.add({
        js,
        category: 'Other',
        rank: 2
      });
    }

    // add to the palette
    if (palette) {
      palette.addItem({
        py,
        args: { isPalette: true},
        category: PALETTE_CATEGORY
      });
      palette.addItem({
        sh,
        args: { isPalette: true},
        category: PALETTE_CATEGORY
      });
      palette.addItem({
        html,
        args: { isPalette: true},
        category: PALETTE_CATEGORY
      });
      palette.addItem({
        css,
        args: { isPalette: true},
        category: PALETTE_CATEGORY
      });
      palette.addItem({
        js,
        args: { isPalette: true},
        category: PALETTE_CATEGORY
      });
    }

    // add to the menu
    if (menu) {
      menu.fileMenu.newMenu.addGroup([{ py }], 30);
      menu.fileMenu.newMenu.addGroup([{ sh }], 30);
      menu.fileMenu.newMenu.addGroup([{ html }], 30);
      menu.fileMenu.newMenu.addGroup([{ css }], 30);
      menu.fileMenu.newMenu.addGroup([{ js }], 30);
    }
  }
};

export default extension;