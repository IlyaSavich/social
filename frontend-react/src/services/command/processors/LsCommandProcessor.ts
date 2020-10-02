import { ICommandProcessor } from './CommandProcessor';
import * as filesystemService from '../../filesystem/FilesystemService';
import * as textService from '../../text/TextService';

export class LsCommandProcessor implements ICommandProcessor {
    public getName(): string {
        return 'ls';
    }

    getPossibleArgumentsCount(): number[] {
        return [0];
    }

    public getOptions(): string[] {
        return [];
    }

    public getDescription(): string {
        return 'Lists all available files.';
    }

    public process(): void {
        filesystemService.getStorage().getCurrentDirectory().getAllNames().forEach((step) => {
            textService.writeText(step);
            textService.newLine();
        });
    }
}
