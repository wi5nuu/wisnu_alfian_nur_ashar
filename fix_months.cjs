const fs = require('fs');
const path = './src/pages/cv.astro';
let code = fs.readFileSync(path, 'utf8');

const months = {
    'Jan ': 'January ', 'Feb ': 'February ', 'Mar ': 'March ',
    'Apr ': 'April ', 'May ': 'May ', 'Jun ': 'June ',
    'Jul ': 'July ', 'Aug ': 'August ', 'Sep ': 'September ',
    'Oct ': 'October ', 'Nov ': 'November ', 'Dec ': 'December '
};

for (const [abbr, full] of Object.entries(months)) {
    code = code.split(abbr).join(full);
}

fs.writeFileSync(path, code);
console.log('Month names expanded to full.');
