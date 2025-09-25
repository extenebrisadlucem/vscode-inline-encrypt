import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {

    const getConfig = () => vscode.workspace.getConfiguration('inlineEncrypt');

    const encrypt = vscode.commands.registerCommand('inlineEncrypt.encrypt', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }

        const selection = editor.document.getText(editor.selection);
        const gpgPath = getConfig().get<string>('gpgPath') || 'gpg';
        const keyId = getConfig().get<string>('keyId') || '';

        if (!selection) return;

        const args = ['--encrypt', '--armor', ...(keyId ? ['--recipient', keyId] : [])];

        const proc = exec(`${gpgPath} ${args.join(' ')}`, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`GPG Error: ${stderr}`);
                return;
            }
            editor.edit(editBuilder => {
                editBuilder.replace(editor.selection, `<div style="display: none">\n${stdout}</div>`);
            });
        });

        proc.stdin?.write(selection);
        proc.stdin?.end();
    });

    const decrypt = vscode.commands.registerCommand('inlineEncrypt.decrypt', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const selection = editor.document.getText(editor.selection);
        const gpgPath = getConfig().get<string>('gpgPath') || 'gpg';

        if (!selection) return;

        const args = ['--decrypt', '--batch', '--yes'];

        const proc = exec(`${gpgPath} ${args.join(' ')}`, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`GPG Error: ${stderr}`);
                return;
            }
            editor.edit(editBuilder => {
                editBuilder.replace(editor.selection, stdout);
            });
        });

        proc.stdin?.write(selection);
        proc.stdin?.end();
    });

    context.subscriptions.push(encrypt, decrypt);
}

export function deactivate() {}


