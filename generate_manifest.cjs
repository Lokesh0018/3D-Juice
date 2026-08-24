const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'mango assets');
const manifest = [];

for (let i = 1; i <= 9; i++) {
  const sceneDir = path.join(assetsDir, `scene-${i}`);
  if (fs.existsSync(sceneDir)) {
    const files = fs.readdirSync(sceneDir).filter(f => f.match(/^(?:ezgif-)?frame_?\d+\.(jpg|png)$/i) || f.match(/^ezgif-frame-\d+\.(jpg|png)$/i));
    files.sort();
    for (const file of files) {
      manifest.push(`/mango assets/scene-${i}/${file}`);
    }
  }
}

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'framesManifest.json'), JSON.stringify(manifest, null, 2));
console.log(`Generated manifest with ${manifest.length} frames.`);
