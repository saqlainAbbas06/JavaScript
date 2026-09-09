const generateElement = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const generateArray = () => {
  const array = [];
  for (let i = 0; i < 5; i++) {
    array.push(generateElement());
  }
  return array;
};

const generateContainer = () => {
  return document.createElement("div");
};

const fillArrContainer = (element, array) => {
  element.innerHTML = "";
  array.forEach((num) => {
    const span = document.createElement("span");
    span.textContent = num;
    element.appendChild(span);
  });
};

const isOrdered = (int1, int2) => {
  return int1 <= int2;
};

const swapElements = (intArray, index) => {
  if (!isOrdered(intArray[index], intArray[index + 1])) {
    [intArray[index], intArray[index + 1]] = [intArray[index + 1], intArray[index]];
  }
};

const highlightCurrentEls = (element, index) => {
  const currentChild = element.children[index];
  const nextChild = element.children[index + 1];
  if (currentChild) currentChild.style.border = "3px dashed red";
  if (nextChild) nextChild.style.border = "3px dashed red";
};

const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");

generateBtn.addEventListener("click", () => {
  Array.from(arrayContainer.children).forEach((child) => {
    if (child !== startingArray) child.remove();
  });
  const randomArray = generateArray();
  fillArrContainer(startingArray, randomArray);
});

function bubbleSort() {
  Array.from(arrayContainer.children).forEach((child) => {
    if (child !== startingArray) child.remove();
  });

  const arr = Array.from(startingArray.children).map((s) => Number(s.textContent));
  const n = arr.length;
  if (n === 0) return;

  let currentDiv = startingArray;
  highlightCurrentEls(currentDiv, 0);

  let swapped = true;
  let isFirst = true;

  while (swapped) {
    swapped = false;
    for (let j = 0; j < n - 1; j++) {
      if (!isFirst) {
        currentDiv = generateContainer();
        fillArrContainer(currentDiv, arr);
        arrayContainer.appendChild(currentDiv);
        highlightCurrentEls(currentDiv, j);
      }
      isFirst = false;

      if (!isOrdered(arr[j], arr[j + 1])) {
        swapElements(arr, j);
        swapped = true;
      }
    }
  }

  const sortedDiv = generateContainer();
  fillArrContainer(sortedDiv, arr);
  arrayContainer.appendChild(sortedDiv);
}

sortBtn.addEventListener("click", bubbleSort);