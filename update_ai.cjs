const fs = require('fs');

const files = [
    'src/pages/api/chat.ts',
    'src/utils/AIService.ts',
    'src/utils/LocalAI.ts'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/Wisnu Alfian Nur Ashar/g, 'Filbert Sembiring Meliala');
        content = content.replace(/Wisnu Alfian/g, 'Filbert Sembiring Meliala');
        content = content.replace(/Wisnu/g, 'Filbert');
        content = content.replace(/wisnu/ig, 'filbert');
        fs.writeFileSync(file, content);
    }
});
console.log('Replaced Wisnu with Filbert');
