import fs from 'fs';

const filePath = 'src/utils/LocalAI.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Regex to match common emojis and emoticons used in the file
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/gu;
const emoticonRegex = /[:;][\-~]?[DPp()O0o/\\|]/g; // Basic common emoticons

content = content.replace(emojiRegex, '');
// Specifically target the smiley at the end of many strings which might have a space before it
content = content.replace(/\s*[😊👋🌟💼💻🎓🤝🌅☕☀️🌇🤗😴💪😊🚀⚖️🛡️🎯🏆⚓🌍🔒🌏🔥💙⚡✅💬🎭🎮🏃✨📖👔🏅🔍🗄️🔌🔄🔐🧩🍔❤️🎤📜💀]/gu, '');

fs.writeFileSync(filePath, content);
console.log('Emojis removed from LocalAI.ts');
