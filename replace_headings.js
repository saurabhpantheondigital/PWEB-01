const fs = require('fs');
const filePath = 'src/app/Services/epr/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const baseClass = "text-4xl md:text-5xl font-clash font-black tracking-tighter leading-tight";

content = content.replace(/<h2[^>]*className="([^"]+)"[^>]*>/g, (match, p1) => {
  let newClass = baseClass;
  
  if (p1.includes('text-white')) {
    newClass += " text-white";
  } else {
    newClass += " text-slate-900";
  }
  
  if (p1.includes('text-center')) {
    newClass += " text-center";
  }
  
  // Try to preserve margin bottom
  const mbMatch = p1.match(/mb-\d+/);
  if (mbMatch) {
    newClass += " " + mbMatch[0];
  }

  return match.replace(p1, newClass);
});

fs.writeFileSync(filePath, content);
console.log('Headings replaced.');
