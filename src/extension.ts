import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) 
{
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

	registerInsertKey('extension.braceOpen','{');
	registerInsertKey('extension.braceClose','}');
	registerInsertKey('extension.bracketOpen','[');
	registerInsertKey('extension.bracketClose',']');
	registerInsertKey('extension.pipe','|');
	registerInsertKey('extension.tilde','~');
}

// this method is called when your extension is deactivated
export function deactivate() {}
