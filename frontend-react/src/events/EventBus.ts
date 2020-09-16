export enum Events {
    OnKeyDown = 'OnKeyDown',
}

type Listener = (...args: any[]) => any;

type Listeners = {
    [type in Events]?: Listener[];
};

class EventBus {
    private listeners: Listeners = {};

    public publish(type: Events, ...args: any[]) {
        const listeners = this.listeners[type];

        if (!listeners) {
            return;
        }

        listeners.forEach((handle) => handle(...args));
    }

    public subscribe(type: Events, handle: Listener) {
        if (this.listeners.hasOwnProperty(type)) {
            this.listeners[type]!.push(handle);
        } else {
            this.listeners[type] = [handle];
        }
    }

    public unsubscribe(type: Events, handle: Listener) {
        if (!this.listeners.hasOwnProperty(type)) {
            return;
        }

        this.listeners[type] = this.listeners[type]!.filter((listener) => listener !== handle);
    }
}

export default new EventBus();
