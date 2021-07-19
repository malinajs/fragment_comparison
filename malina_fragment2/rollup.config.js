import resolve from '@rollup/plugin-node-resolve';
import derver from 'derver/rollup-plugin';
import css from 'rollup-plugin-css-only';
import malina from 'malinajs/malina-rollup'

const DEV = !!process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        file: 'public/bundle.js',
        format: 'iife',
    },
    plugins: [
        malina({
            css: false,
            immutable: true,
            autoimport: name => `import ${name} from './${name}.xht'`
        }),
        resolve(),
        DEV && derver(),
        css({ output: 'bundle.css' })
    ],
    watch: {
        clearScreen: false
    }
}