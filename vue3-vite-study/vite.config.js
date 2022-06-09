import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
		extensions: [".js", ".json", ".ts"],
	},
	server: {
		https: false,
		host: "127.0.0.1",
		port: 8000,
		open: true,
        /*
		// 跨域代理
		proxy: {
			"/api": {
				target: "http://localhost:3000", // 后台接口
				changeOrigin: true,
				// secure: false, // 如果是https接口，需要配置这个参数
				// ws: true, //websocket支持
				// 截取api，并用api代替
				// rewrite: (path) => path.replace(/^\/api/, "/api"),
			},
		},
        */
	},
})
