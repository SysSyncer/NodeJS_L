const fs = require('fs');

let md = `
# Heading h1
- Point 1
- Point 2
`
fs.writeFileSync('temp.md', md.trim(), () => {
    setTimeout(() => {}, 3000);
});
console.log(`Markdown created successfully`);