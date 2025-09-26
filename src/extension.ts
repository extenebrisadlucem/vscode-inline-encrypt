// # ###########################################################################################################
// # This small project aimed to encrypt the selected text with gpg and past it on the selected text
// #
// # licence : CC-BY-NC-SA
// # 
// # credits: Add your name under if you modify the code
// # timestamp - votre nom - version - description de votre modification
// # 20250921 - DELFOSSE AURORE ON7AUR - 0.0.1 - Proof of concept
// # 20250623 - DELFOSSE AURORE ON7AUR - 0.0.2 - Params in settings (path to gpg and key id)
// # 20250624 - DELFOSSE AURORE ON7AUR - 0.0.3 - Convert \<encrypted> tags to \<div style="display: none">
// # 20250625 - DELFOSSE AURORE ON7AUR - 0.0.4 - Documentation improvement... 
// # 20250626 - DELFOSSE AURORE ON7AUR - 0.1.0 - Readme in french + sponsoring
// # 20250626 - DELFOSSE AURORE ON7AUR - 0.1.1 - German+Dutch+Espñol+zh-tw+zh-cn+ja-jp
// # ###########################################################################################################

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

