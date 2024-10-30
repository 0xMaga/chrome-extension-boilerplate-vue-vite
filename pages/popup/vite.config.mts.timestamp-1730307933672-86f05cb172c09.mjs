// vite.config.mts
import { resolve } from "node:path";
import { withPageConfig } from "file:///Users/rezvitsky/Desktop/chrome-extension-boilerplate-react-vite/packages/vite-config/index.mjs";
var __vite_injected_original_dirname = "/Users/rezvitsky/Desktop/chrome-extension-boilerplate-react-vite/pages/popup";
var rootDir = resolve(__vite_injected_original_dirname);
var srcDir = resolve(rootDir, "src");
var vite_config_default = withPageConfig({
  resolve: {
    alias: {
      "@src": srcDir
    }
  },
  publicDir: resolve(rootDir, "public"),
  build: {
    outDir: resolve(rootDir, "..", "..", "dist", "popup")
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3JlenZpdHNreS9EZXNrdG9wL2Nocm9tZS1leHRlbnNpb24tYm9pbGVycGxhdGUtcmVhY3Qtdml0ZS9wYWdlcy9wb3B1cFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3JlenZpdHNreS9EZXNrdG9wL2Nocm9tZS1leHRlbnNpb24tYm9pbGVycGxhdGUtcmVhY3Qtdml0ZS9wYWdlcy9wb3B1cC92aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3JlenZpdHNreS9EZXNrdG9wL2Nocm9tZS1leHRlbnNpb24tYm9pbGVycGxhdGUtcmVhY3Qtdml0ZS9wYWdlcy9wb3B1cC92aXRlLmNvbmZpZy5tdHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgd2l0aFBhZ2VDb25maWcgfSBmcm9tICdAZXh0ZW5zaW9uL3ZpdGUtY29uZmlnJ1xuXG5jb25zdCByb290RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUpXG5jb25zdCBzcmNEaXIgPSByZXNvbHZlKHJvb3REaXIsICdzcmMnKVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFnZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0BzcmMnOiBzcmNEaXIsXG4gICAgfSxcbiAgfSxcbiAgcHVibGljRGlyOiByZXNvbHZlKHJvb3REaXIsICdwdWJsaWMnKSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IHJlc29sdmUocm9vdERpciwgJy4uJywgJy4uJywgJ2Rpc3QnLCAncG9wdXAnKSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdaLFNBQVMsZUFBZTtBQUNoYixTQUFTLHNCQUFzQjtBQUQvQixJQUFNLG1DQUFtQztBQUd6QyxJQUFNLFVBQVUsUUFBUSxnQ0FBUztBQUNqQyxJQUFNLFNBQVMsUUFBUSxTQUFTLEtBQUs7QUFFckMsSUFBTyxzQkFBUSxlQUFlO0FBQUEsRUFDNUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFXLFFBQVEsU0FBUyxRQUFRO0FBQUEsRUFDcEMsT0FBTztBQUFBLElBQ0wsUUFBUSxRQUFRLFNBQVMsTUFBTSxNQUFNLFFBQVEsT0FBTztBQUFBLEVBQ3REO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K