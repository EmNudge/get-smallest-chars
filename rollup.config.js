import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';

export default [
  {
    input: 'src/worker.ts',
    output: {
      dir: 'dist',
      format: 'esm'
    },
    plugins: [
      typescript()
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'esm'
    },
    plugins: [
      typescript(),
      process.env.serve && serve({
        open: true,
        host: 'localhost',
        port: 10001,
        contentBase: ['dist'],
      })
    ]
  },
]