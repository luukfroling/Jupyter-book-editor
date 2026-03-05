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
      },
    },
  ],
};

export default plugin;