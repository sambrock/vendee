module.exports = {
  presets: [
    '@babel/preset-react',
    ["@babel/env", {
      "targets": {
        "browsers": ["last 2 Chrome versions"]
      }
    }]
  ],
  plugins: ['macros'],
}
