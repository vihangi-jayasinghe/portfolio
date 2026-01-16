const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'images', 'mypic2.jpeg');
const outputPath = path.join(__dirname, 'public', 'favicon.png');

const size = 256;

async function createCircularFavicon() {
  try {
    // Create a circular mask
    const mask = Buffer.from(
      `<svg><circle cx="${size/2}" cy="${size/2}" r="${size/2}" /></svg>`
    );

    await sharp(inputPath)
      .resize(size, size, { fit: 'cover', position: 'top' })
      .composite([{
        input: mask,
        blend: 'dest-in'
      }])
      .png()
      .toFile(outputPath);

    console.log('✅ Circular favicon created successfully at:', outputPath);
  } catch (error) {
    console.error('❌ Error creating favicon:', error);
  }
}

createCircularFavicon();
