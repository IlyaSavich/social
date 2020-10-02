import canvas from '../services/canvas/Canvas'

const CANVAS_HEIGHT = window.innerHeight;
const CANVAS_WIDTH = 1000;

export function init() {
    canvas.init();

    canvas.canvas.height = CANVAS_HEIGHT;
    canvas.canvas.width = CANVAS_WIDTH;
}
