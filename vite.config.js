import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'
import vue from '@vitejs/plugin-vue'

export default defineUserConfig({
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {
            plugins:[
                vue()
            ]
        },
    }),
})