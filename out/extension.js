"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    function registerCommand(cmdid, cb) {
        let disposable = vscode.commands.registerCommand(cmdid, cb);
        context.subscriptions.push(disposable);
    }
    function registerTextCommand(cmdid, callback) {
        let disposable = vscode.commands.registerTextEditorCommand(cmdid, callback);
        context.subscriptions.push(disposable);
    }
    function registerInsertKey(cmdid, insertkey) {
        registerTextCommand(cmdid, (textEditor) => {
            textEditor.edit((editBuilder) => {
                editBuilder.insert(textEditor.selection.active, insertkey);
            });
        });
    }
    console.log('Congratulations, your extension "dev-touch-bar" is now active!');
    registerCommand('extension.helloWorld', () => vscode.window.showInformationMessage('Hello World!'));
    registerInsertKey('extension.braceOpen', '{');
    registerInsertKey('extension.braceClose', '}');
    registerInsertKey('extension.bracketOpen', '[');
    registerInsertKey('extension.bracketClose', ']');
    registerInsertKey('extension.pipe', '|');
    registerInsertKey('extension.tilde', '~');
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map