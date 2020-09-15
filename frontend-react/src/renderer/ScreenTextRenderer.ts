import canvas from '../services/Canvas'
// import caret from '../services/Caret'
import * as clearRenderer from './ClearRenderer'

export function draw() {
    canvas.context.save();

    // canvas.context.fillText(text, caret.x, caret.y);

    canvas.context.restore();
}
