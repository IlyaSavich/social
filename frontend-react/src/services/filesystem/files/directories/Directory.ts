import { File, FileType } from '../File';
import { TerminalError } from '../../../../errors/TerminalError';

type FilesMap = { [key: string]: File };

export class Directory extends File {
    protected filesMap: FilesMap;

    constructor(private name: string, files: File[]) {
        super();

        this.filesMap = files.reduce((result, file) => {
            result[file.getName()] = file;

            return result;
        }, {} as FilesMap);
    }

    public getType(): string {
        return FileType.Directory;
    }

    public getName(): string {
        return this.name;
    }

    public getAll(): File[] {
        return Object.values(this.filesMap);
    }

    public getAllNames(): string[] {
        return Object.keys(this.filesMap);
    }

    public get(name: string): File {
        if (!this.filesMap[name]) {
            throw new TerminalError(`File '${name}' is not found.`)
        }

        return this.filesMap[name];
    }
}
