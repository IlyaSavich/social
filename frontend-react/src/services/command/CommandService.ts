import commandStorage from './CommandStorage';
import * as textService from '../text/TextService';
import caret from '../caret/Caret';

export function getLetterForActiveCommand(position: number): string {
    const command = commandStorage.get();

    return command.slice(position, position + 1);
}

export function insertIntoActiveCommand(text: string): string {
    const command = commandStorage.get();

    return command.slice(0, caret.textPosition) + text + command.slice(caret.textPosition);
}

export function replaceActiveCommand(command: string): void {
    commandStorage.replaceText(command);
    textService.updateLastRow('user:/$ ' + command); // TODO
}
