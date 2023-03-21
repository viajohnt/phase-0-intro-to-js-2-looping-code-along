function writeCards(names, gift) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${gift} gift!`);
  }
  
  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
