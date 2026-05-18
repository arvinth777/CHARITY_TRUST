const fs = require('fs');
const path = require('path');

const galleryDir = 'nanre-sei-website/public/gallery';
const siteTsPath = 'nanre-sei-website/src/config/site.ts';

const files = fs.readdirSync(galleryDir).filter(f => !f.endsWith('.webp') && (f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')));

let galleryItems = files.map(f => {
  return `    { src: '/gallery/${f}', category: 'all', caption: { en: 'Gallery Image', ta: 'தொகுப்பு படம்' } },`;
});

let siteContent = fs.readFileSync(siteTsPath, 'utf-8');

// replace about photo
siteContent = siteContent.replace(/welcomePhoto: '\/welcome-photo.jpg'/, `welcomePhoto: '/gallery/${files[0]}'`);

// replace gallery array
const galleryMatch = siteContent.match(/gallery: \[\s*[\s\S]*?\s*\],/);
if (galleryMatch) {
  siteContent = siteContent.replace(galleryMatch[0], `gallery: [\n${galleryItems.join('\n')}\n  ],`);
}

// replace timeline placeholders with real images
const timelineMatches = [...siteContent.matchAll(/src: '(\/timeline\/[^']+)'/g)];
for (let i = 0; i < timelineMatches.length && i < files.length; i++) {
  siteContent = siteContent.replace(timelineMatches[i][1], `/gallery/${files[i+1]}`);
}

fs.writeFileSync(siteTsPath, siteContent);
console.log('site.ts updated successfully');
