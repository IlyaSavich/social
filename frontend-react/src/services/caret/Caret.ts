import screenConfigs from '../../configs/screen';

const ROW_HEIGHT = screenConfigs.rowHeight;
const ZERO_COORDINATE = { x: screenConfigs.margin, y: ROW_HEIGHT + screenConfigs.margin };

class Caret {
    private _x: number = ZERO_COORDINATE.x;
    private _y: number = ZERO_COORDINATE.y;
    private forcedShowTimeoutHandle: number | null = null;
    private _textPositionX: number = 0;
    private linePosition: number = 1;

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public get isForcedShow(): boolean {
        return !!this.forcedShowTimeoutHandle;
    }

    public get textPositionX(): number {
        return this._textPositionX;
    }

    public appendPixelXPosition(x: number) {
        this._x += x;
    }

    public returnCaret() {
        this._x = ZERO_COORDINATE.x;
        this.setTextPosition(0);
    }

    public newLine() {
        if (this.linePosition < screenConfigs.rowsOnScreen) {
            this.linePosition++;
            this._y += ROW_HEIGHT;
        }

        this.returnCaret();
    }

    public forceShowForTime(): void {
        if (this.forcedShowTimeoutHandle) {
            clearTimeout(this.forcedShowTimeoutHandle);
        }
        this.forcedShowTimeoutHandle = setTimeout(() => this.forcedShowTimeoutHandle = null, 700) as unknown as number;
    }

    public appendTextPosition(textPosition: number): void {
        const newPosition = this._textPositionX + textPosition;

        this._textPositionX = newPosition >= 0 ? newPosition : 0;
    }

    public setTextPosition(textPosition: number): void {
        this._textPositionX = textPosition >= 0 ? textPosition : 0;
    }
}

export default new Caret();
