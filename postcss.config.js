module.exports = {
  plugins: [
    require('postcss-import')({
            path: ['_sass']
        }),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.JEKYLL_ENV == "production"
      ? [require('cssnano')({ preset: 'default' })]
      : [])
  ]
}
