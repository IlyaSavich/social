class TextStorage {
    private rows: string[] = [''];

    public getRows() {
        return this.rows;
    }

    public newRow() {
        this.rows.push('');
    }

    public updateLastRow(text: string) {
        this.rows[this.rows.length - 1] = text;
    }

    public appendToLastRow(text: string) {
        this.rows[this.rows.length - 1] += text;
    }
}

export default new TextStorage();
