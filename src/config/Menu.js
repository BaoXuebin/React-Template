export default [
    {
        key: '1',
        icon: 'home',
        content: '模块1',
        link: '/module1'
    },
    {
        key: 'module2',
        icon: 'dashboard',
        content: '模块2',
        subMenu: [
            {
                key: '2',
                content: '子模块1',
                link: '/module2/sub1'
            },
            {
                key: '3',
                content: '子模块2',
                link: '/module2/sub2'
            }
        ]
    },
    {
        key: '5',
        icon: 'search',
        content: '模块3',
        link: '/module3'
    }
];