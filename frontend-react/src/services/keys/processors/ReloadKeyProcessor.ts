import { KeyProcessor } from './KeyProcessor';

export class ReloadKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        return super.isApplicable(e) && this.isReloadKey(e);
    }

    public process(e: KeyboardEvent) {
        window.location.reload();
    }

    private isReloadKey(e: KeyboardEvent) {
        return e.keyCode === 82 && e.ctrlKey;
    }
}
