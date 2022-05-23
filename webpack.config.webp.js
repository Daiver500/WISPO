const imagemin = require('imagemin');
const webp = require('imagemin-webp');

imagemin(['source/images/*.{jpg,png}'], {
  destination: 'source/images',
  plugins: [
    webp({quality: 60})
  ],
});
