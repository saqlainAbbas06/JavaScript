// Menu
// Profile
// JavaScript Certification
// Restore a Coherent Narrative from an Array of Story Fragments
// Instructions
// script.jsEditor
// Console
// Restore a Coherent Narrative from an Array of Story Fragments
// In this lab, you will restore a coherent narrative from a corrupted array of story fragments.

// You will practice using loops by implementing fundamental array algorithms from scratch.

// You will work with arrays of story fragment objects. Each fragment object has the following properties:

// Property	Description	Example value
// id	A positive integer indicating the fragment's position in the story	3
// text	The actual story content	"and I use Arch btw.\""
// In this lab, you are provided with a prefilled array called shuffledFragments.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories

// You should not change the pre-filled shuffledFragments array.
// You should create a function named compactFragments that takes an array of fragments and returns a new array with all undefined elements removed. If the function removes any undefined elements, it should log a message to the console. The message should start with the prefix [COMPACTED].
// You should declare a variable named compactedShuffledFragments and assign it the result of calling compactFragments with the shuffledFragments array.
// You should create a function named sortFragments that takes an array of fragments without undefined elements and returns a new array sorted by the id property in ascending order, keeping fragments that share the same id in their original order. You should not use JavaScript's built-in sort method.
// You should declare a variable named sortedFragments and assign it the result of calling sortFragments with the compactedShuffledFragments array.
// You should create a function named dedupeFragments that takes a sorted array of fragments and returns a new array with duplicates removed, keeping only the first occurrence. You should define duplicates as two or more fragments sharing the same id. For each id that is deduplicated, the function should log a message to the console. The message should start with the prefix [DEDUPED].
// You should declare a variable named dedupedFragments and assign it the result of calling dedupeFragments with the sortedFragments array.
// You should create a function named fillMissingFragments that takes a sorted array of fragments and returns a new array with missing fragments filled with placeholder objects. You should define missing fragments as gaps in the sequence between the lowest and highest id. The placeholder objects should have the format { id: missingId, text: "[...]" }. For each placeholder added, the function should log a message to the console. The message should start with the prefix [FILLED].
// You should declare a variable named filledFragments and assign it the result of calling fillMissingFragments with the dedupedFragments array.
// You should create a function named assembleStory that takes a sorted array of fragments and returns a single string containing all fragment texts, separated by newlines.
// You should use assembleStory with your filledFragments to display the complete story in the console.
// Your functions compactFragments, sortFragments, dedupeFragments, fillMissingFragments and assembleStory should not mutate the array that they are called with.
// Example

// Here is an example of an array containing story fragments:

// const exampleArray = [
//   { id: 3, text: "and I use Arch btw.\"" },
//   ,
//   { id: 1, text: "Naomi said:" },
//   { id: 3, text: "and I use Arch btw.\"" },
// ];
// After restoring the story from exampleArray, it would look like this:

// Naomi said:
// [...]
// and I use Arch btw."





const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];


function compactFragments(arr) {
  const returnArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      returnArr.push(arr[i]);
    } else {
      console.log("[COMPACTED] Removed empty fragment");
    }
  }

  return returnArr;
}


const compactedShuffledFragments = compactFragments(shuffledFragments);


function sortFragments(arr) {
  // Make a copy so the original array is not mutated
  const sortedArr = arr.slice();

  // Bubble sort
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - 1 - i; j++) {

      if (sortedArr[j].id > sortedArr[j + 1].id) {
        const temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }

  return sortedArr;
}


const sortedFragments = sortFragments(compactedShuffledFragments);


function dedupeFragments(arr) {
  const removeDublicateArr = [];
  const idArr = [];

  for (let i = 0; i < arr.length; i++) {
    const id = arr[i].id;

    if (idArr.includes(id)) {
      console.log(`[DEDUPED] Duplicate id: ${id}`);
      continue;
    }

    idArr.push(id);
    removeDublicateArr.push(arr[i]);
  }

  return removeDublicateArr;
}


const dedupedFragments = dedupeFragments(sortedFragments);


function fillMissingFragments(sortedArr) {
  const arr = [];

  for (let i = 0; i < sortedArr.length; i++) {
    const current = sortedArr[i];

    arr.push(current);

    // Check whether the next ID is missing
    if (i < sortedArr.length - 1) {
      const next = sortedArr[i + 1];

      if (next.id > current.id + 1) {
        for (let missingId = current.id + 1; missingId < next.id; missingId++) {
          arr.push({
            id: missingId,
            text: "[...]"
          });

          console.log(`[FILLED] Added missing fragment with id: ${missingId}`);
        }
      }
    }
  }

  return arr;
}

const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(arr) {
  const textArr = [];

  for (const x of arr) {
    textArr.push(x.text);
  }

  return textArr.join("\n");
}


console.log(assembleStory(filledFragments));