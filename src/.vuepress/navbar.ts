import { defineNavbarConfig } from 'vuepress-theme-plume';
import { version } from '../../package.json';

export const navbar = defineNavbarConfig([
    {
        text: '指南',
        icon: 'icon-park-outline:guide-board',
        link: '/notes/guide/介绍.md',
    },
    { text: 'SDK', link: '/notes/sdk/README.md', icon: 'carbon:api' },
    { text: '权益', link: '/notes/pricing/', icon: 'carbon:license' },
    {
        text: '更多',
        icon: 'icon-park-outline:more-three',
        items: [
            { text: '常见问题', link: '/questions/', icon: 'wpf:faq' },
        ],
    },
    {
        text: `${version}`,
        icon: 'codicon:versions',
        items: [
            { 
                text: '更新日志', 
                link: '/notes/update/logs/',
            },
            { text: '产品规划', link: '/notes/update/plan/计划.md' },
        ],
    },
])
