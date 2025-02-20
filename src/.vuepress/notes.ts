import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const updateNote = defineNoteConfig({
    dir: 'update/logs',
    link: '/update',
    sidebar: [
        {
            text: '2025年',
            collapsed: false,
            icon: 'carbon:calendar',
            items: [
                '_2025_01',
            ]
        },
        {
            text: '2024年',
            collapsed: false,
            icon: 'carbon:calendar',
            items: [
                '_2024_03',
                '_2024_04',
                '_2024_05',
                '_2024_06',
                '_2024_07',
                '_2024_08',
                '_2024_09',
                '_2024_10',
                '_2024_11',
                '_2024_12',
            ]
        },
        {
            text: '2023年',
            collapsed: false,
            icon: 'carbon:calendar',
            items: [
                '_2023_02',
                '_2023_03',
                '_2023_04',
                '_2023_05',
                '_2023_07',
                '_2023_08',
            ]
        }
    ]
})

const planNote = defineNoteConfig({
    dir: 'update/plan',
    link: '/update/plan',
    sidebar: 'auto'
})

const pricingNote = defineNoteConfig({
    dir: 'pricing',
    link: '/pricing',
    sidebar: 'auto'
})

const guideNote = defineNoteConfig({
    dir: 'guide',
    link: '/guide',
    sidebar: [
        {
            text: '快速入门',
            collapsed: false,
            icon: 'carbon:lightning',
            items: [
                '介绍',
            ]
        },
        {
            text: '内置组件',
            collapsed: false,
            prefix: 'components',
            icon: 'carbon:apps',
            items: [
                '脚本组件',
            ]
        },
        {
            text: '插件系统',
            collapsed: false,
            prefix: 'plugins',
            icon: 'carbon:lightning',
            items: [
                '入门',
                '插件开发',
                {
                    text: '内置插件',
                    collapsed: false,
                    prefix: 'builtin',
                    icon: 'carbon:plug',
                    items: [
                        'glTFHandler'
                    ]
                }
            ]
        },
    ]
})

export const notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [updateNote, planNote, pricingNote, guideNote],
})
