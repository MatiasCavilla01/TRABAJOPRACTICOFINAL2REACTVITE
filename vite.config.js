import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.PNG'],
  rollupOptions: {
    external: ["@chakra-ui/react","formik","yup","emailjs-com"],
  }
})
