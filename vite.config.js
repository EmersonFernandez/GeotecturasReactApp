import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// geojson
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.fbx','**/*.json'],
  assetsInclude: ['**/*.hdr', '**/*.gltf','**/*.glb'],
})


