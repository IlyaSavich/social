import * as textRenderer from '../renderer/TextRenderer'
import * as caretRenderer from '../renderer/CaretRenderer'
import * as textService from '../services/text/TextService'
import canvas from '../services/Canvas'

const CANVAS_HEIGHT = window.innerHeight;
const CANVAS_WIDTH = 1000;

export function init() {
    canvas.init();

    canvas.canvas.height = CANVAS_HEIGHT;
    canvas.canvas.width = CANVAS_WIDTH;

    textService.appendText('Login: ');

    caretRenderer.render();
}