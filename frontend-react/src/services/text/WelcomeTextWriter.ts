import * as textService from './TextService';
import * as commandService from '../command/CommandService';

/*
 *    _____            _       __
 *   / ___/____  _____(_)___ _/ /
 *   \__ \/ __ \/ ___/ / __ `/ /
 *  ___/ / /_/ / /__/ / /_/ / /
 * /____/\____/\___/_/\__,_/_/
 *
 */
export function write() {
    textService.writeBatch([
        '   _____            _       __',
        '  / ___/____  _____(_)___ _/ /',
        '  \\__ \\/ __ \\/ ___/ / __ `/ /',
        ' ___/ / /_/ / /__/ / /_/ / /',
        '/____/\\____/\\___/_/\\__,_/_/',
        '',
        'Welcome to Social!',
        'If you don\'t know where to begin, start with `help` command to see',
        'what you can do here.',
        'Hope you will enjoy this tour!',
    ]);

    textService.newLine();

    commandService.newCommand();
}
