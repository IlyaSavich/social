class Canvas {
    private _canvas: HTMLCanvasElement | undefined;
    private _context: CanvasRenderingContext2D | undefined;

    public get canvas(): HTMLCanvasElement {
        if (!this._canvas) {
            throw new Error('canvas wasn\'t initializer yet');
        }

        return this._canvas;
    }

    public get context(): CanvasRenderingContext2D {
        if (!this._context) {
            throw new Error('context wasn\'t initializer yet');
        }

        return this._context;
    }

    public init() {
        const canvas = document.getElementById('main') as HTMLCanvasElement | null;

        if (!canvas) {
            throw new Error('canvas#main was not found');
        }

        this._canvas = canvas;
        this._context = canvas.getContext('2d')!;
    }
}

export default new Canvas();
