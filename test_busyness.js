const { LocalAI } = require('./src/utils/LocalAI.ts'); // Adjust path if needed

const testQueries = [
    "apa kesibukan kamu",
    "kamu lagi sibuk ya",
    "kok kamu sibuk banget si",
    "lagi sibuk apa",
    "apa saja kesibukan kamu",
    "kok kamu sibuk banget",
    "kenapa kamu sangat sibuk"
];

console.log("Testing busyness-related questions:\n");

testQueries.forEach(query => {
    const response = LocalAI.getResponse(query, 'id');
    console.log(`Query: "${query}"`);
    console.log(`Response: ${response}\n`);
});
