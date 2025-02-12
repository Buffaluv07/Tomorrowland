// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        outDir: 'dist', 
        rollupOptions: {
            input: {    
                main: resolve(__dirname, 'index.html'),
                Artists: resolve(__dirname, 'Artists/index.html'),
                Facts: resolve(__dirname, 'Facts/index.html')
            }
        }
    }
})
