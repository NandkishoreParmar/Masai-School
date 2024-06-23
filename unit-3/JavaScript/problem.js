// console.log("Hello World")

// var str = ['q',1,2]
// str = String(str)

// console.log(str, typeof str) 
// const str = "Thisisastring";
// const words = str.split("This"); // Split by spaces

// console.log(words); // Output: ["This", "is", "a", "string"]
function splitAtWord(str, separator) {
    if (str.startsWith(separator)) {
      const remaining = str.slice(separator.length);
      return [separator, remaining];
    } else {
      return [str]; // Return the original string if separator not found at the beginning
    }
  }
  
  const str = "helloworld";
  const separator = "hello";
  const splitResult = splitAtWord(str, separator);
  
  console.log(splitResult); // Output: ["hello", "world"] (if "hello" is at the beginning)
                              //        or ["helloworld"] (if "hello" is not found)
  