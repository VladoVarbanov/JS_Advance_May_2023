function createSortedList(params) {
  const instance = {
    numberList: [],
    size: 0,

    // methods.
    add: function (element) {
      this.numberList.push(element);
      this.numberList.sort(this._comparer);
      this.size += 1;

      return instance;
    },

    remove: function (index) {
      this._validate(index);
      this.numberList.splice(index, 1);
      this.size -= 1;

      return instance;
    },

    get: function (index) {
      this._validate(index);

      return this.numberList[index];
    },

    // Helper methods.
    _validate: function (index) {
      if (index < 0 || index >= this.numberList.length) {
        throw new Error("Index is out of bounds");
      }
    },

    _comparer: function (a, b) {
      return a - b;
    },
  };

  return instance;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
//6
//7
