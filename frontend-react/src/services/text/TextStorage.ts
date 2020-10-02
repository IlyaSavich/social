class TextStorage {
    private rows: string[] = [''];

    public getAll() {
        return this.rows;
    }

    public get(index: number = this.rows.length - 1): string {
        return this.rows[index];
    }

    public newLine(index: number = this.rows.length - 1) {
        this.rows.splice(index + 1, 0, '');
    }

    public updateRow(text: string, index: number = this.rows.length - 1) {
        this.rows[index] = text;
    }

    public appendToRow(text: string, index: number = this.rows.length - 1) {
        this.rows[index] += text;
    }
}

export default new TextStorage();
