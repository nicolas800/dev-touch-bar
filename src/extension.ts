// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';




// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	function registerCommand( cmdid : string , cb: (...arg:any[] ) => any )
	{
		let disposable = vscode.commands.registerCommand( cmdid , cb );
		context.subscriptions.push(disposable);
	}
	
	function registerTextCommand( cmdid : string ,callback: (textEditor: vscode.TextEditor, ...args: any[]) => void )
	{
		let disposable = vscode.commands.registerTextEditorCommand( cmdid , callback );
		context.subscriptions.push(disposable);
	}

	function registerInsertKey(cmdid : string , insertkey: string)
	{
		registerTextCommand( cmdid , (textEditor: vscode.TextEditor) => 
		{
			textEditor.edit( (editBuilder:vscode.TextEditorEdit) => 
			{
				editBuilder.insert( textEditor.selection.active , insertkey ) ;
			});
		} );
	}

	console.log('Congratulations, your extension "dev-touch-bar" is now active!');
	registerCommand('extension.helloWorld', () => vscode.window.showInformationMessage('Hello World!'));
	registerInsertKey('extension.braceOpen','{');
	registerInsertKey('extension.braceClose','}');
	registerInsertKey('extension.bracketOpen','[');
	registerInsertKey('extension.bracketClose',']');
	registerInsertKey('extension.pipe','|');
	registerInsertKey('extension.tilde','] ');
}

// this method is called when your extension is deactivated
export function deactivate() {}
