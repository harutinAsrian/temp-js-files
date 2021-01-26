const snakeLikeNumbers = () => {
  const x = 20;
  const y = 15;
  const arrayLenght = x * y;

  const arr = Array.from(Array(arrayLenght).keys());
  const br = arr.reduce((prev, item, index) => {
    if (index % x === 0) {
      if (prev.length % 2 === 0 && prev.length !== 0) {
        prev[prev.length - 1].reverse();
      }
      prev[prev.length] = [item];
    } else {
      prev[prev.length - 1].push(item);
    }
    return prev;
  }, []);

  const ad = br.map((item) => item.join("|")).join("\n");
  console.log(ad);
};
snakeLikeNumbers();
