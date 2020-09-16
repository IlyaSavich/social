import screenConfigs from '../configs/screen';

const ROW_HEIGHT = screenConfigs.rowHeight;
const ZERO_COORDINATE = { x: screenConfigs.margin, y: ROW_HEIGHT + screenConfigs.margin };

class Caret {
    private _x: number = ZERO_COORDINATE.x;
    private _y: number = ZERO_COORDINATE.y;
    private _isHidden: boolean = false;

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public get isHidden(): boolean {
        return this._isHidden;
    }

    public shift(x: number) {
        this._x += x;
    }

    public setPosition(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public resetPosition() {
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
}

export default new Caret();
