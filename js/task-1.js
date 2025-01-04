/**
 * Обчислює, чи помістяться всі товари в контейнер при пакуванні
 *
 * @param {Object.<string, number>} products Об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад `{ apples: 2, grapes: 4 }`
 * @param {Number} containerSize Максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
 * @returns {Boolean} `true`, якщо загальна кількість товарів менше або дорівнює `containerSize`
 */
function isEnoughCapacity(products, containerSize) {
  let totalSize = 0;
  for (const size of Object.values(products)) {
    totalSize += size;
  }
  return totalSize <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
