const number = process.argv.slice(2);

for (const time of number) {
  if (time > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}