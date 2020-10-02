import { File, FileType } from '../File';

export abstract class Script extends File {
    public abstract execute(): void;

    public getType(): string {
        return FileType.Script;
    }
}
