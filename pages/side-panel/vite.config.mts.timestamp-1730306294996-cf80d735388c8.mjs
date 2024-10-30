// vite.config.mts
import { resolve } from "node:path";
import { withPageConfig } from "file:///Users/rezvitsky/Desktop/chrome-extension-boilerplate-react-vite/packages/vite-config/index.mjs";
var __vite_injected_original_dirname = "/Users/rezvitsky/Desktop/chrome-extension-boilerplate-react-vite/pages/side-panel";
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
    outDir: resolve(rootDir, "..", "..", "dist", "side-panel")
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3JlenZpdHNreS9EZXNrdG9wL2Nocm9tZS1leHRlbnNpb24tYm9pbGVycGxhdGUtcmVhY3Qtdml0ZS9wYWdlcy9zaWRlLXBhbmVsXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcmV6dml0c2t5L0Rlc2t0b3AvY2hyb21lLWV4dGVuc2lvbi1ib2lsZXJwbGF0ZS1yZWFjdC12aXRlL3BhZ2VzL3NpZGUtcGFuZWwvdml0ZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9yZXp2aXRza3kvRGVza3RvcC9jaHJvbWUtZXh0ZW5zaW9uLWJvaWxlcnBsYXRlLXJlYWN0LXZpdGUvcGFnZXMvc2lkZS1wYW5lbC92aXRlLmNvbmZpZy5tdHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgd2l0aFBhZ2VDb25maWcgfSBmcm9tICdAZXh0ZW5zaW9uL3ZpdGUtY29uZmlnJ1xuXG5jb25zdCByb290RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUpXG5jb25zdCBzcmNEaXIgPSByZXNvbHZlKHJvb3REaXIsICdzcmMnKVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFnZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0BzcmMnOiBzcmNEaXIsXG4gICAgfSxcbiAgfSxcbiAgcHVibGljRGlyOiByZXNvbHZlKHJvb3REaXIsICdwdWJsaWMnKSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IHJlc29sdmUocm9vdERpciwgJy4uJywgJy4uJywgJ2Rpc3QnLCAnc2lkZS1wYW5lbCcpLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdWEsU0FBUyxlQUFlO0FBQy9iLFNBQVMsc0JBQXNCO0FBRC9CLElBQU0sbUNBQW1DO0FBR3pDLElBQU0sVUFBVSxRQUFRLGdDQUFTO0FBQ2pDLElBQU0sU0FBUyxRQUFRLFNBQVMsS0FBSztBQUVyQyxJQUFPLHNCQUFRLGVBQWU7QUFBQSxFQUM1QixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFdBQVcsUUFBUSxTQUFTLFFBQVE7QUFBQSxFQUNwQyxPQUFPO0FBQUEsSUFDTCxRQUFRLFFBQVEsU0FBUyxNQUFNLE1BQU0sUUFBUSxZQUFZO0FBQUEsRUFDM0Q7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=