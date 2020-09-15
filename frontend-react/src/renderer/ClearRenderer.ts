import canvas from '../services/Canvas';

export function clear() {
    canvas.context.save();

    canvas.context.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);

    canvas.context.restore();
}
