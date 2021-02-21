export const exos = [
  {
    functionName: "doubleInteger",
    placeholder: `function doubleInteger(i) {
    
      // i will be an integer. Double it and return it.
      
      
      
      return i;
      
    }`,
    testValues: [
      { value: 2, expectedResult: 4 },
      { value: 4, expectedResult: 8 },
      { value: -10, expectedResult: -20 },
      { value: 0, expectedResult: 0 },
      { value: 100, expectedResult: 200 },
    ],
  },
  {
    functionName: "isNumberEven",
    placeholder: `function isNumberEven(i) {
    
      // i will be an integer. Return true if it's even, and false if it isn't.
      
      
      
      
  }`,
    testValues: [
      { value: 2, expectedResult: true },
      { value: 3, expectedResult: false },
      { value: 0, expectedResult: true },
      { value: -2, expectedResult: true },
      { value: Math.floor(Math.random() * 1000000) * 2, expectedResult: true },
    ],
  },
  {
    functionName: "getFileExtension",
    placeholder: `function getFileExtension(i) {

      // i will be a string, but it may not have a file extension.
      // return the file extension (with no period) if it has one, otherwise false

  }`,
    testValues: [
      { value: "blatherskite.png", expectedResult: "png" },
      {
        value: "perfectlylegal.torrent",
        expectedResult: "torrent",
      },
      {
        value: "spaces are fine in file names.txt",
        expectedResult: "txt",
      },
      {
        value: "this does not have one",
        expectedResult: false,
      },
      { value: ".htaccess", expectedResult: "htaccess" },
    ],
  },
  {
    functionName: "longestString",
    placeholder: `
    function longestString(i) {

      // i will be an array.
      // return the longest string in the array

  }`,
    testValues: [
      { value: ["a", "ab", "abc"], expectedResult: "abc" },
      {
        value: ["big", [0, 1, 2, 3, 4], "tiny"],
        expectedResult: "tiny",
      },
      {
        value: ["Hi", "World", "你好"],
        expectedResult: "World",
      },
      { value: [true, false, "lol"], expectedResult: "lol" },
      {
        value: [{ object: true, mainly: "to confuse you" }, "x"],
        expectedResult: "x",
      },
    ],
  },
  {
    functionName: "arraySum",
    placeholder: `function arraySum(i) {

      // i will be an array, containing integers, strings and/or arrays like itself.
      // Sum all the integers you find, anywhere in the nest of arrays.

  }
  `,
    testValues: [
      { value: [1, 2, 3, 4, 5], expectedResult: 15 },
      { value: [[1, 2, 3], 4, 5], expectedResult: 15 },
      { value: [[1, 2, false], "4", "5"], expectedResult: 3 },
      { value: [[[[[[[[[1]]]]]]]], 1], expectedResult: 2 },
      { value: [["A", "B", "C", "easy as", 1, 2, 3]], expectedResult: 6 },
    ],
  },
];
