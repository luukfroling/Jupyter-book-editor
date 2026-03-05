const plugin = {
  name: 'Strong to emphasis',
  transforms: [
    {
      name: 'transform-typography',
      doc: 'An example transform that rewrites bold text as text with emphasis.',
      stage: 'document',
      plugin: (_, utils) => (node) => {
        console.log('Transforming node:', node);
        for (const child of node.children) {
            console.log('Child node:', child);
        }
        // if node.children[0].children[0] exists, get its model object and log it
        if (node.children[0] && node.children[0].children[0]) {
            const model = node.children[0].children[0].model;
            console.log('Model of first child:', model);
        }
      },
    },
  ],
};

export default plugin;