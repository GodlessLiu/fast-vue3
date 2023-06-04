import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss';

export default defineConfig({
    exclude: ['node_modules', '.git', '.github', '.husky', '.vscode', 'build', 'dist', 'mock', 'public', './stats.html'],
    presets: [presetUno(), presetAttributify(), presetIcons()],
    shortcuts: [],
    rules: [],
    theme: {
        colors: {
            primary: 'red'  // class="text-primary"
        },
    },
});
