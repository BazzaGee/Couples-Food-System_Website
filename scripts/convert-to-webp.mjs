import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname } from 'path';

const dirs = ['public/images/v2', 'public/images/v1', 'public/images/steps'];

async function convertPngToWebp(dir) {
  const files = await readdir(dir);
  const pngs = files.filter(f => extname(f).toLowerCase() === '.png');

  console.log(`\n📁 ${dir} — ${pngs.length} PNG files found`);

  for (const file of pngs) {
    const inputPath = join(dir, file);
    const outputPath = join(dir, file.replace(/\.png$/i, '.webp'));

    try {
      const info = await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);

      const inputSize = (await sharp(inputPath).metadata()).size;
      const savings = ((1 - info.size / inputSize) * 100).toFixed(1);
      console.log(`  ✅ ${file} → ${file.replace('.png', '.webp')} (${(inputSize / 1024).toFixed(0)}KB → ${(info.size / 1024).toFixed(0)}KB, -${savings}%)`);
    } catch (err) {
      console.error(`  ❌ ${file}: ${err.message}`);
    }
  }
}

for (const dir of dirs) {
  await convertPngToWebp(dir);
}

console.log('\n🎉 Conversion complete!');
