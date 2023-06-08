(function arrayExtension() {
  // last
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  //Skip
  Array.prototype.skip = function (n) {
    const results = [];
    for (let index = n; index < this.length; index++) {
      results.push(this[index]);
    }
    return results;
  };
  //Take
  Array.prototype.take = function (n) {
    const results = [];
    for (let index = 0; index < n; index++) {
      results.push(this[index]);
    }
    return results;
  };
  //Sum
  Array.prototype.sum = function () {
    let sum = 0;
    for (let index = 0; index < this.length; index++) {
      sum += this[index];
    }
    return sum;
  };
  //Average
  Array.prototype.average = function () {
    return this.sum() / this.length;
  };
})();

const arr = [1, 2, 3, 4, 5];
const lastEl = arr.last();
const skippedCollection = arr.skip(2);
const takeCollection = arr.take(3);
const summed = arr.sum();
const avg = arr.average();
console.log(lastEl);
console.log(skippedCollection);
console.log(takeCollection);
console.log(summed);
console.log(avg);
