import { ConfigEnv, UserConfig, loadEnv } from 'vite'
import path from 'path';
import { createVitePlugins } from './build/vite/plugins/index'
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  // 是否是打包文件
  console.log(isBuild);

  const root = process.cwd();
  // 读取环境变量
  const env = loadEnv(mode, root)
  return {
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: path.resolve(__dirname, "src") + "/"
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: path.resolve(__dirname, "types") + "/"
        },
      ]
    },
    plugins: [
      createVitePlugins(env, isBuild)
    ]
  }
}