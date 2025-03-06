const fs = require('fs');

// Read the file contents
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const lines = data.split('\n');
  let count = 0;
  for (const line of lines) {
    if (/^#\s*Requirements:\s*$/.test(line)) {
      count++;
    }
  }
  console.log(`There are ${count} requirements`);
});
