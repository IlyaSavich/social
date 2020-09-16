export interface ITreeSearcherNode {
    isApplicable(...args: any[]): boolean;
}

export interface ITreeSearcherTree<T extends ITreeSearcherNode> {
    node: T;
    children?: Array<ITreeSearcherTree<T>>;
}

/**
 * Searches recursively through a tree to find applicable leaf.
 * If there no applicable leaf then returns parent node.
 * Root node should covers 100% of all cases and each child should cover specific case
 * and conditions on each layer should not overlap.
 * There will be errors if no node will be found or will be found more then one applicable node.
 */
export default class TreeSearcher<T extends ITreeSearcherNode> {
    constructor(private tree: ITreeSearcherTree<T>) {}

    public getNode(...args: Parameters<T['isApplicable']>): T {
        const node = this.getPreferableApplicableNode(this.tree, args);

        if (!node) {
            throw new Error('Can\'t find applicable node');
        }

        return node;
    }

    private getPreferableApplicableNode(tree: ITreeSearcherTree<T>, args: any[]): T | null {
        const rootNode = tree.node;

        if (!rootNode.isApplicable(...args)) {
            return null;
        }

        if (!tree.children) {
            return rootNode;
        }

        const childrenNodes = tree.children.reduce((nodes: T[], childNodeTree) => {
            const newChildNode = this.getPreferableApplicableNode(childNodeTree, args);

            if (newChildNode) {
                nodes.push(newChildNode);
            }

            return nodes;
        }, []);

        if (childrenNodes.length > 1) {
            throw new Error('Found more than one applicable node');
        }

        if (childrenNodes.length > 0) {
            return childrenNodes[0];
        }

        return rootNode;
    }
}
