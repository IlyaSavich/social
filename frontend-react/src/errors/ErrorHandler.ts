import { TerminalError } from './TerminalError';
import * as textService from '../services/text/TextService';

export function handle(callback: () => any): void {
    try {
        return callback();
    } catch (e) {
        if (e instanceof TerminalError) {
            textService.writeText(e.message);
            textService.newLine();
            return;
        }

        throw e;
    }
}
