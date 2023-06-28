import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'duke-文档',
    description: '日常笔记',
    base:'/',
    plugins: [
    ],
    theme:defaultTheme ({
        navbar: [
            // NavbarItem
            {
                text: '首页',
                link: '/',
            },
            // NavbarGroup

        ],
        // 所有页面会使用相同的侧边栏
        sidebar: 'auto',
    })



})