module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './writeups/**/*.md',
    './notes/**/*.md',
    './*.html',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
