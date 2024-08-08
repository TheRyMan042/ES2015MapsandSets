//Ryan Hutchings
//Unit 14.7: Maps and Sets Exercise

//Question 1
//What does the following code return?
new Set([1, 1, 2, 2, 3, 4]);

//Answer:
// Set(4) {1, 2, 3, 4}

//Question 2
//What does the following code return?
[...new Set("referee")].join("");

//Answer:
// 'ref'

//Question 3
//What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

//Answer:
// Map(2) {[1,2,3] => true, [1,2,3] => false}

//hasDuplicate
function hasDuplicate(arr) {
  noDupesSet = new Set(arr);
  return arr.length !== noDupesSet.size; //check if the size of the array and set match
}

console.log(hasDuplicate([1, 3, 2, 1])); // true
console.log(hasDuplicate([1, 5, -1, 4])); // false

//vowelCount
function vowelCount(word) {
  //used reduce to go through each letter in string and set it up in the map
  const newArr = [...word.toLowerCase()].reduce((totalVowels, letter) => {
    if ('aeiou'.indexOf(letter) !== -1) {
      if (!totalVowels.has(letter)) {
        totalVowels.set(letter, 1);
      } else {
        let number = totalVowels.get(letter); //get number from vowel
        number++;
        totalVowels.set(letter, number); //added on new number
      }
    }
    return totalVowels;
  }, new Map());

  return newArr;
}

console.log(vowelCount('awesome')); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')) // Map { 'o' => 1 }