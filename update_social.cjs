const fs = require('fs');

const path = './src/data/profile.ts';
let code = fs.readFileSync(path, 'utf8');

code = code.replace(
    'instagram: "https://www.instagram.com/wshnn_"',
    'instagram: "https://www.instagram.com/wshnn_?igsh=c2prbDU4MDdwN2pw"'
);

code = code.replace(
    'facebook: "https://www.facebook.com/profile.php?id=100083734252734"',
    'facebook: "https://www.facebook.com/profile.php?id=100083734252734&mibextid=kFxxJD"'
);

code = code.replace(
    'website: "https://wisnualfiannurashar.my.id"',
    'website: "https://www.wisnualfiannurashar.my.id"'
);

fs.writeFileSync(path, code);
console.log("Updated social links successfully.");
