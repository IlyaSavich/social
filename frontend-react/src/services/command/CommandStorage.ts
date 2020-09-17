class CommandStorage {
    private history: string[] = [''];

    public get(offset: number = 0): string {
        return this.history[this.history.length - 1 - offset];
    }

    public addText(text: string): void {
        this.history[this.history.length - 1] += text;
    }

    public replaceText(text: string): void {
        this.history[this.history.length - 1] = text;
    }

    public removeText(position: number): void {
        this.history[this.history.length - 1].slice(position, 1);
    }

    public clear(): void {
        this.history.slice(-1);
    }

    public newLine(): void {
        this.history.push('');
    }
}

export default new CommandStorage();
