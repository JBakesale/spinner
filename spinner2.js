spinner = (arr) => {
  let time = 100;
  for (const i of arr) {
    setTimeout(() => {
      process.stdout.write(`\r${i}       `);
    }, time);
    time += 200;
  }

  setTimeout(() => {
    console.log('\n');
  }, time + 100);
}


const spinArray = ["|", "/", "-", "\\", "|", "-", "/"];


spinner(spinArray);