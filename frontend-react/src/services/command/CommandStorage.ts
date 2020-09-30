class CommandStorage {
    private history: string[] = [''];
    private offset: number = 0;

    public get(offset: number = this.offset): string {
        return this.history[this.getPointer(offset)];
    }

    public addText(text: string, offset: number = this.offset): void {
        this.history[this.getPointer(offset)] += text;
    }

    public replaceText(text: string, offset: number = this.offset): void {
        this.history[this.getPointer(offset)] = text;
    }

    public removeText(position: number, offset: number = this.offset): void {
        this.history[this.getPointer(offset)].slice(position, 1);
    }

    public clear(): void {
        this.history.slice(-1);
    }

    public newCommand(): void {
        this.history.push('');
        this.offset = 0;
    }

    public increaseOffset() {
        if (this.offset === this.history.length - 1) {
            return;
        }

        this.offset++;
    }

    public decreaseOffset() {
        if (this.offset === 0) {
            return;
        }

        this.offset--;
    }

    public resetOffset() {
        if (this.offset === 0) {
            return;
        }

        this.offset--;
    }

    private getPointer(offset: number) {
        return this.history.length - 1 - offset;
    }
}

export default new CommandStorage();
