for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= i; j++) {
    if (i * j < 10) {
      //顶格对齐,让小于10的值后加一个空格
      process.stdout.write(j + '*' + i + '=' + i * j + ' ' + '\t');
    } else {
      process.stdout.write(j + '*' + i + '=' + i * j + '\t');
    }
  }
  console.log('');
}
