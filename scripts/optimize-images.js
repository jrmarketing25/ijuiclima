import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagesDir = path.resolve(__dirname, '../public/images/ijui-clima');

async function optimize() {
  const files = fs.readdirSync(imagesDir);
  console.log(`Auditing and optimizing ${files.length} files in ${imagesDir}...`);

  for (const file of files) {
    if (!file.endsWith('.png')) continue;
    
    const inputPath = path.join(imagesDir, file);
    const baseName = path.basename(file, '.png');
    const outputPath = path.join(imagesDir, `${baseName}.webp`);

    const stats = fs.statSync(inputPath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

    try {
      await sharp(inputPath)
        .resize({ width: 1400, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(outputPath);

      const outStats = fs.statSync(outputPath);
      const outSizeKB = (outStats.size / 1024).toFixed(1);
      console.log(`✓ Optimized "${file}" (${sizeMB} MB) -> "${baseName}.webp" (${outSizeKB} KB)`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }

  console.log('Image optimization completed successfully!');
}

optimize().catch(console.error);

