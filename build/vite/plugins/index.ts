/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import { AutoRegistryComponents } from './component'
import { AutoImportDeps } from './autoimport'
import { ConfigPagesPlugin } from './pages';
import { ConfigProgressPlugin } from './progress'
import { ConfigImageminPlugin } from './imagemin';
import { ConfigCompressPlugin } from './compress';
import { ConfigUnocssPlugin } from './unocss'
import { ConfigSvgIconsPlugin } from './svgIcons';
interface ViteEnv {
    [key: string]: any
}
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {

    const { VITE_USE_MOCK, VITE_USE_COMPRESS } = viteEnv;
    const vitePlugins: (PluginOption | PluginOption[])[] = [
        // vue支持
        vue(),
        // JSX支持
        vueJsx(),
    ];
    // 自动按需引入组件
    vitePlugins.push(AutoRegistryComponents())
    // 自动按需引入依赖
    vitePlugins.push(AutoImportDeps())
    // 自动生成路由
    vitePlugins.push(ConfigPagesPlugin());
    // 构建时显示进度条
    vitePlugins.push(ConfigProgressPlugin());
    // unocss
    vitePlugins.push(ConfigUnocssPlugin())
    // vite-plugin-svg-icons
    vitePlugins.push(ConfigSvgIconsPlugin(isBuild));
    if (isBuild) {
        // vite-plugin-imagemin
        vitePlugins.push(ConfigImageminPlugin());

        // 开启.gz压缩  rollup-plugin-gzip
        VITE_USE_COMPRESS && vitePlugins.push(ConfigCompressPlugin());
    }
    return vitePlugins
}