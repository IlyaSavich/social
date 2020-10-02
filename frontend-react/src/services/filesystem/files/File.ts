export enum FileType {
    Directory = 'directory',
    Script = 'script',
}

export abstract class File {
    public abstract getName(): string;
    public abstract getType(): string;

    public is(type: string): boolean {
        return this.getType() === type;
    }

    public isDirectory(): boolean {
        return this.getType() === FileType.Directory;
    }

    public isScript(): boolean {
        return this.getType() === FileType.Script;
    }
}
