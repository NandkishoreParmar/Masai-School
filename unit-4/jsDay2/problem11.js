// Custom map function
Array.prototype.customMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
  
  // Custom filter function
  Array.prototype.customFilter = function(predicate) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (predicate(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
  
  // Custom reduce function
  Array.prototype.customReduce = function(reducer, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
      accumulator = reducer(accumulator, this[i], i, this);
    }
    return accumulator;
  };
  
  // Custom slice function
  Array.prototype.customSlice = function(start = 0, end = this.length) {
    const result = [];
    for (let i = start; i < end && i < this.length; i++) {
      result.push(this[i]);
    }
    return result;
  };
  
  // Custom splice function
  Array.prototype.customSplice = function(start, deleteCount, ...items) {
    const result = [];
    const len = this.length;
    
    start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    deleteCount = deleteCount < 0 ? 0 : Math.min(deleteCount, len - start);
  
    // Capture removed elements
    for (let i = start; i < start + deleteCount; i++) {
      result.push(this[i]);
    }
  
    // Shift elements to remove
    for (let i = start + deleteCount; i < len; i++) {
      this[i - deleteCount] = this[i];
    }
  
    // Add new elements
    for (let i = 0; i < items.length; i++) {
      this[i + start] = items[i];
    }
  
    // Trim the array
    this.length = this.length - deleteCount + items.length;
  
    return result;
  };
  
  // Custom push function
  Array.prototype.customPush = function(...elements) {
    for (let i = 0; i < elements.length; i++) {
      this[this.length] = elements[i];
    }
    return this.length;
  };
  
  // Custom pop function
  Array.prototype.customPop = function() {
    if (this.length === 0) return undefined;
    const lastElement = this[this.length - 1];
    this.length = this.length - 1;
    return lastElement;
  };
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  
  console.log(arr.customMap(x => x * 2)); // Output: [2, 4, 6, 8, 10]
  console.log(arr.customFilter(x => x % 2 === 0)); // Output: [2, 4]
  console.log(arr.customReduce((acc, cur) => acc + cur, 0)); // Output: 15
  
  console.log(arr.customSlice(1, 3)); // Output: [2, 3]
  console.log(arr.customSplice(2, 0, 6)); // Output: [] (no elements removed)
  console.log(arr); // Output: [1, 2, 6, 3, 4, 5]
  console.log(arr.customPush(7)); // Output: 7
  console.log(arr); // Output: [1, 2, 6, 3, 4, 5, 7]
  console.log(arr.customPop()); // Output: 7
  console.log(arr); // Output: [1, 2, 6, 3, 4, 5]
  