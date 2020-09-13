module.exports = {
    plugins: [
      require('autoprefixer'),
      require('css-mqpacker'),
      require('cssnano')({
          preset: {
            discardComments: {
                removeAll: true,
            }
        },
      })
    ]
  }
  //--open --mode development