import {defineConfig, loadEnv,} from "vite";
import viteBaseConfig from "./vite.base.config.js";
import viteDevConfig from "./vite.dev.config.js";
import viteProConfig from "./vite.pro.config.js";

// 策略模式，使用函数未来扩展性高
const envResolver = {
    'build': () => {
        console.log("🚀build env ===>");
        return ({...viteBaseConfig, ...viteProConfig})
    },
    'serve': () => {
        console.log("🚀serve env ===>");
        return ({...viteBaseConfig, ...viteDevConfig})
    }
}

export default defineConfig(({command, mode}) => {

    const env = loadEnv(mode, process.cwd(),  "");
    // console.log('mode ---> ', mode)
    console.info("🚀 env-----", env)
    return envResolver[command]();
});
