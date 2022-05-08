import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
	// ローカルサーバー変更
	server: {
    port: 8888
  }
})
