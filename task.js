function createSpiralMatrix(row, col) {
  const arr = [];

  for (let i = 0; i < col; i++) {
    arr[i] = [];
    for (let j = 0; j < row; j++) {
      arr[i][j] = 0;
    }
  }

  function fillMatrix(c, r, number, direction) {
    if (arr[c][r] != 0) return;

    arr[c][r] = number;

    switch (direction) {
      case "right":
        if (r + 1 != row && arr[c][r + 1] == 0) {
          return fillMatrix(c, r + 1, number + 1, direction);
        } else {
          direction = "down";
          return fillMatrix(c + 1, r, number + 1, direction);
        }
      case "down":
        if (c + 1 != col && arr[c + 1][r] == 0) {
          return fillMatrix(c + 1, r, number + 1, direction);
        } else {
          direction = "left";
          return fillMatrix(c, r - 1, number + 1, direction);
        }
      case "left":
        if (r - 1 >= 0 && arr[c][r - 1] == 0) {
          return fillMatrix(c, r - 1, number + 1, direction);
        } else {
          direction = "up";
          return fillMatrix(c - 1, r, number + 1, direction);
        }
      case "up":
        if (c - 1 >= 0 && arr[c - 1][r] == 0) {
          return fillMatrix(c - 1, r, number + 1, direction);
        } else {
          direction = "right";
          return fillMatrix(c, r + 1, number + 1, direction);
        }
    }
  }

  fillMatrix(0, 0, 1, "right");

  return arr;
}

console.log(createSpiralMatrix(3, 6));
