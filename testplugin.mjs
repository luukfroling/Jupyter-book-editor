const plugin = {
  name: 'Strong to emphasis',
  transforms: [
    {
        name: 'transform-typography',
        doc: 'An example transform that rewrites bold text as text with emphasis.',
        stage: 'document',
        plugin: (_, utils) => (node) => {
            const nodeToAdd = {
                    type: 'block',
                    children: [
                        {
                        type: 'anywidget',
                        esm: 'test_widget.mjs',
                        model: [Object],
                        css: undefined,
                        class: undefined,
                        id: 'Zu_TMHf4SUHXi9eGK7JCc'
                        }
                    ]
            }
            // add this note as the last child of the document
            node.children.push(nodeToAdd);
        }
    },
  ],
};

export default plugin;