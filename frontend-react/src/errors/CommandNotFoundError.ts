export class CommandNotFoundError implements Error {
    public name: string = 'CommandNotFoundError';
    public message: string;

    constructor(command: string) {
        this.message = `Command '${command}' not found.`
    }
}
