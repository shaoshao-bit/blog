/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  note: [
    'note/introduction',
    {
      label: '工具',
      type: 'category',
      link: {
        type: 'generated-index',
        // id: 'note/前端/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'note/工具',
        },
      ],
    },
    {
      label: '前端',
      type: 'category',
      link: {
        type: 'generated-index',
        // id: 'note/前端/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'note/前端',
        },
      ],
    },
    {
      label: 'golang',
      type: 'category',
      link: {
        type: 'generated-index',
        // id: 'note/前端/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'note/golang',
        },
      ],
    },
    {
      label: 'linux',
      type: 'category',
      link: {
        type: 'generated-index',
        // id: 'note/前端/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'note/linux',
        },
      ],
    },
    {
      label: 'python',
      type: 'category',
      link: {
        type: 'generated-index',
        // id: 'note/前端/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'note/python',
        },
      ],
    },
    {
      label: '其他',
      type: 'category',
      link: {
        type: 'generated-index',
        // id: 'note/前端/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'note/其他',
        },
      ],
    },
  ],
  tools: [
    'tools/introduction',
    'tools/everything-quick-search-local-files',
    'tools/wappalyzer-recognize-technology',
    'tools/windows-custom-right-click-menu',
    'tools/vscode-config',
    'tools/idea-config',
    'tools/vite-plugin',
    'tools/jetbrains-product-activation-method',
  ]
}

module.exports = sidebars
