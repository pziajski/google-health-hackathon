const { writeFileSync, readFileSync } = require("fs");

// returns 
const ReadFromFile = (filePath) => {
    return JSON.parse(readFileSync(filePath));
}