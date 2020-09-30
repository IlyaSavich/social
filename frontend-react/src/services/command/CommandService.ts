import commandStorage from './CommandStorage';
import commandExecutor from './CommandExecutor';
import * as textService from '../text/TextService';
import caret from '../caret/Caret';
import { CommandNotFoundError } from '../../errors/CommandNotFoundError';

export function getLetterForActiveCommand(position: number): string {
    const command = commandStorage.get();

    return command.slice(position, position + 1);
}

export function insertIntoCaretPositionActiveCommand(text: string): string {
    const command = commandStorage.get();

    return command.slice(0, caret.textPosition) + text + command.slice(caret.textPosition);
}

export function removeFromPositionActiveCommand(position: number): string {
    const command = commandStorage.get();

    return command.slice(0, position) + command.slice(position + 1);
}

export function replaceActiveCommand(command: string): void {
    commandStorage.replaceText(command);
    textService.updateLastRow(pathInfo() + command); // TODO
}

export function newCommand(): void {
    commandStorage.newCommand();
    textService.updateLastRow(pathInfo() + ''); // TODO
}

export function pathInfo(): string {
    return 'user:/$ ';
}

export function executeActiveCommand(): void {
    const command = commandStorage.get();

    try {
        commandExecutor.execute(command);
    } catch (e) {
        if (e instanceof CommandNotFoundError) {
            textService.appendText(e.message);
            textService.newLine();
            return;
        }

        throw e;
    }
}