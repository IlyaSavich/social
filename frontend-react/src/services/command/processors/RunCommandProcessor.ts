import { ICommandProcessor } from './CommandProcessor';
import * as filesystemService from '../../filesystem/FilesystemService';
import { isScript } from '../../filesystem/helpers/helpers';
import { TerminalError } from '../../../errors/TerminalError';

export class RunCommandProcessor implements ICommandProcessor {
    public getName(): string {
        return 'run';
    }

    getPossibleArgumentsCount(): number[] {
        return [1];
    }

    public getOptions(): string[] {
        return [];
    }

    public getDescription(): string {
        return 'Runs scripts.';
    }

    public process(args: string[]): void {
        const scriptName = args[0];
        const script = filesystemService.getStorage().getCurrentDirectory().get(scriptName);

        if (!isScript(script)) {
            throw new TerminalError(`File '${scriptName}' is not a script.`);
        }

        script.execute();
    }
}
