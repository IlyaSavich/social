import screenConfigs from '../../configs/screen';

const ROW_HEIGHT = screenConfigs.rowHeight;
const ZERO_COORDINATE = { x: screenConfigs.margin, y: ROW_HEIGHT + screenConfigs.margin };

class Caret {
    private _x: number = ZERO_COORDINATE.x;
    private _y: number = ZERO_COORDINATE.y;
    private _isHidden: boolean = false;
    private _textPosition: number = 0;

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public get isHidden(): boolean {
        return this._isHidden;
    }

    public get textPosition(): number {
        return this._textPosition;
    }

    public appendPixelXPosition(x: number) {
        this._x += x;
    }

    public setPixelXPosition(x: number) {
        this._x = x;
    }

    public setPixelPosition(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public resetPixelPosition() {
        this._x = ZERO_COORDINATE.x;
        this._y = ZERO_COORDINATE.y;
    }

    public returnCaret() {
        this._x = ZERO_COORDINATE.x;
    }

    public newLine() {
        this._y += ROW_HEIGHT;
    }

    public show() {
        this._isHidden = false;
    }

    public hide() {
        this._isHidden = true;
    }

    public appendTextPosition(textPosition: number): void {
        const newPosition = this._textPosition + textPosition;

        this._textPosition = newPosition >= 0 ? newPosition : 0;
    }

    public setTextPosition(textPosition: number): void {
        this._textPosition = textPosition >= 0 ? textPosition : 0;
    }
}

export default new Caret();
