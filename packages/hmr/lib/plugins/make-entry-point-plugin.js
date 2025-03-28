import fs from 'node:fs';
import path from 'node:path';
/**
 * make entry point file for content script cache busting
 */
export function makeEntryPointPlugin() {
    const cleanupTargets = new Set();
    return {
        name: 'make-entry-point-plugin',
        generateBundle(options, bundle) {
            const outputDir = options.dir;
            if (!outputDir) {
                throw new Error('Output directory not found');
            }
            for (const module of Object.values(bundle)) {
                const fileName = path.basename(module.fileName);
                const newFileName = fileName.replace('.js', '_dev.js');
                switch (module.type) {
                    case 'asset':
                        if (fileName.endsWith('.map')) {
                            cleanupTargets.add(path.resolve(outputDir, fileName));
                            const originalFileName = fileName.replace('.map', '');
                            const replacedSource = String(module.source).replaceAll(originalFileName, newFileName);
                            module.source = '';
                            fs.writeFileSync(path.resolve(outputDir, newFileName), replacedSource);
                            break;
                        }
                        break;
                    case 'chunk': {
                        fs.writeFileSync(path.resolve(outputDir, newFileName), module.code);
                        module.code = `import('./${newFileName}')`;
                        break;
                    }
                }
            }
        },
        closeBundle() {
            cleanupTargets.forEach(target => {
                fs.unlinkSync(target);
            });
        },
    };
}
