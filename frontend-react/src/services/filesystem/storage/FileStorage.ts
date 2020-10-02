import { Directory } from '../files/directories/Directory';
import { isDirectory } from '../helpers/helpers';
import { TerminalError } from '../../../errors/TerminalError';

export abstract class FileStorage {
    protected root: Directory = this.initRoot();

    private currentDirectory: Directory = this.root;

    public abstract initRoot(): Directory;

    public getCurrentDirectory(): Directory {
        return this.currentDirectory;
    }

    public stepInto(directoryName: string): void {
        const directory = this.currentDirectory.get(directoryName);

        if (!isDirectory(directory)) {
            throw new TerminalError(`File '${directoryName}' is not directory, but ${directory.getType()}`);
        }

        this.currentDirectory = directory;
    }
}
