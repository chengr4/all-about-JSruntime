// async read file
const { readFile, writeFile } = require('fs')

console.log('start Async');

// Remember to put 'utf8' otherwise you will get a weird Buffer
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('result', result) // result = undefined
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')