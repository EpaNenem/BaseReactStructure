module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
    require('precss'),
    require('postcss-preset-env'),
    require('postcss-import'),
    require('postcss-url'),
    require('postcss-bem-linter'),
    require('postcss-cssnext'),
    require('postcss-font-magician')({
      variants: {
        'Open Sans': {
          '300': ['woff, eot, woff2'],
          '400 italic': ['woff2'],
        },
      },
      foundries: 'google',
    }),
    require('stylefmt'),
    require('doiuse')({
      browsers: ['ie >= 10', '> 1%'],
    }),
  ],
};
