import { SignInScript } from './scripts/SignInScript';
import { IScript } from './scripts/Script';
import { SignUpScript } from './scripts/SignUpScript';

type StepTreeStructure = {
    [key: string]: IScript[] | StepTreeStructure;
}

class StepTree {
    private anonymousTree: IScript[] = [
        new SignInScript(),
        new SignUpScript(),
    ];

    private tree: StepTreeStructure = {};

    private currentPath = [];

    /* TODO  */
    private isAnonymous = true;

    public getCurrentSteps(): string[] {
        if (this.isAnonymous) {
            return this.anonymousTree.map((script) => script.getName());
        }

        const scripts = this.currentPath.reduce((scripts: IScript[] | StepTreeStructure, pathItem) =>
            this.tree[pathItem], [] as IScript[],
        );

        if (Array.isArray(scripts)) {
            return scripts.map((script) => script.getName());
        }

        return Object.keys(scripts);
    }
}

export default new StepTree();
