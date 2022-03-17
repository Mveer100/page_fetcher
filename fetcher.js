const fs = require('fs')
const request = require('request')

const url = process.argv[2]
const localPath = process.argv[3];
const writeWebData = (url, localPath) => {
  request(url, function (error, response, body) {
    if (error) {
      console.log(`Failed to download resources`, error)
    }
    fs.writeFile(localPath, body, (err) => {
      if (err) {
        console.log("Failed to write to localPath", localPath)
      } else {
        console.log(`Downloaded and save ${body.length} bytes to ${localPath}`)
      }
    })
  });
};
if (!url || !localPath) {
  console.log("two parameters are required: Url and localPath")
} else {
  writeWebData(url, localPath);
};