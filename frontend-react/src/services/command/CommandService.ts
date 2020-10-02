import commandStorage from './CommandStorage';
import commandExecutor from './CommandExecutor';
import * as textService from '../text/TextService';
import caret from '../caret/Caret';
import * as caretService from '../caret/CaretService';
import * as screenTextRenderer from '../../renderer/ScreenTextRenderer';
import * as errorHandler from '../../errors/ErrorHandler';

export function getLetterForActiveCommand(position: number): string {
    const command = commandStorage.get();

    return command.slice(position, position + 1);
}

export function insertIntoCaretPositionActiveCommand(text: string, position: number): void {
    const command = commandStorage.get();
    const newCommand = command.slice(0, position) + text + command.slice(position);

    replaceActiveCommand(newCommand, position + text.length);
}

export function removeFromPositionActiveCommand(position: number): void {
    const command = commandStorage.get();
    const newCommand = command.slice(0, position) + command.slice(position + 1);

    replaceActiveCommand(newCommand, position);
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
    textService.writeText(commandStorage.get());
}

export function setNextCommand(): void {
    commandStorage.decreaseOffset();
    textService.updateLastRow(pathInfo()); // TODO
    textService.writeText(commandStorage.get());
}

export function pathInfo(): string {
    return 'anonymous:/$ ';
}

export function executeActiveCommand(): void {
    const command = commandStorage.get();

    if (!command) {
        return;
    }

    errorHandler.handle(() => {
        commandExecutor.execute(command);
    });
}

function setCaretPositionInCommand(command: string, position: number) {
    caret.returnCaret();
    caretService.appendPixelPositionByText(pathInfo());
    caretService.appendPositionByText(command.slice(0, position));
}

function replaceActiveCommand(command: string, caretPosition: number) {
    commandStorage.replaceCommand(command);

    caretService.forceShow();

    textService.updateLastRow(pathInfo()); // TODO
    textService.writeText(command);

    setCaretPositionInCommand(command, caretPosition);
    screenTextRenderer.draw();
}
