import commandStorage from './CommandStorage';
import commandExecutor from './CommandExecutor';
import * as textService from '../text/TextService';
import caret from '../caret/Caret';
import { CommandNotFoundError } from '../../errors/CommandNotFoundError';

export function getLetterForActiveCommand(position: number): string {
    const command = commandStorage.get();

    return command.slice(position, position + 1);
}

export function insertIntoCaretPositionActiveCommand(text: string): void {
    const command = commandStorage.get();
    const newCommand = command.slice(0, caret.textPositionX) + text + command.slice(caret.textPositionX);

    replaceActiveCommand(newCommand);
}

export function removeFromPositionActiveCommand(position: number): void {
    const command = commandStorage.get();
    const newCommand = command.slice(0, position) + command.slice(position + 1);

    replaceActiveCommand(newCommand);
}

export function newCommand(): void {
    commandStorage.newCommand();
    textService.updateLastRow(pathInfo()); // TODO
}

export function resetCommand(): void {
    commandStorage.resetOffset();
    commandStorage.replaceCommand('');
    textService.updateLastRow(pathInfo()); // TODO
}

export function setPreviousCommand(): void {
    commandStorage.increaseOffset();
    textService.updateLastRow(pathInfo()); // TODO
    textService.appendText(commandStorage.get());
}

export function setNextCommand(): void {
    commandStorage.decreaseOffset();
    textService.updateLastRow(pathInfo()); // TODO
    textService.appendText(commandStorage.get());
}

export function pathInfo(): string {
    return 'anonymous:/$ ';
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

function replaceActiveCommand(command: string) {
    commandStorage.replaceCommand(command);

    textService.updateLastRow(pathInfo()); // TODO
    textService.appendText(command);
}
