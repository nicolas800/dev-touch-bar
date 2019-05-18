"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
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