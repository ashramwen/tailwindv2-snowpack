module.exports = {
  buildOptions: {
    out: 'dist',
  },
  devOptions: {
    port: 3000,
  },
  exclude: ['**/vendor/**/*'],
  mount: {
    src: '/',
  },
  optimize: {
    bundle: true,
    minify: true,
    sourcemap: false,
    target: 'es2018',
  },
};
