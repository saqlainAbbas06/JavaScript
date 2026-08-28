const bookmarks = [];

const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");

const addBookmarkBtn = document.getElementById("add-bookmark-button");
const formCategoryName = formSection.querySelector(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");
const closeFormButton = document.getElementById("close-form-button");

const addBookmarkBtnForm = document.getElementById(
  "add-bookmark-button-form"
);
const viewCategoryBtn = document.getElementById("view-category-button");
const categoryList = bookmarkListSection.querySelector("#category-list");

const bookmarkCategoryName =
  bookmarkListSection.querySelector(".category-name");

const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById(
  "delete-bookmark-button"
);

const name = document.getElementById("name");
const url = document.getElementById("url");



const getBookmarks = () => {
  const storedBookmarks = localStorage.getItem("bookmarks");

  if (!storedBookmarks) {
    return [];
  }

  try {
    const parsedBookmarks = JSON.parse(storedBookmarks);

    if (!Array.isArray(parsedBookmarks)) {
      return [];
    }

    const validBookmarks = parsedBookmarks.filter(
      (bookmark) =>
        bookmark &&
        typeof bookmark === "object" &&
        typeof bookmark.name === "string" &&
        typeof bookmark.category === "string" &&
        typeof bookmark.url === "string"
    );

    return validBookmarks;
  } catch (error) {
    return [];
  }
};



const displayOrCloseForm = () => {
  formSection.classList.toggle("hidden");
  mainSection.classList.toggle("hidden");
};



addBookmarkBtn.addEventListener("click", () => {
  formCategoryName.innerText =
    categoryDropdown.options[categoryDropdown.selectedIndex].text;

  displayOrCloseForm();
});



closeFormButton.addEventListener("click", () => {
  displayOrCloseForm();
});



const addBookmarks = () => {
  const bookmark = {
    name: name.value,
    category: categoryDropdown.value,
    url: url.value
  };

  const currentBookmarks = getBookmarks();

  currentBookmarks.push(bookmark);

  localStorage.setItem(
    "bookmarks",
    JSON.stringify(currentBookmarks)
  );

  name.value = "";
  url.value = "";

  displayOrCloseForm();
};


addBookmarkBtnForm.addEventListener("click", () => {
  addBookmarks();
});



const displayOrHideCategory = () => {
  bookmarkListSection.classList.toggle("hidden");
  mainSection.classList.toggle("hidden");
};



const displayCategory = () => {
  const selectedCategory = categoryDropdown.value;

  bookmarkCategoryName.innerText =
    categoryDropdown.options[categoryDropdown.selectedIndex].text;

  const currentBookmarks = getBookmarks();

  const categoryBookmarks = currentBookmarks.filter(
    (bookmark) => bookmark.category === selectedCategory
  );

  categoryList.innerHTML = "";

  if (categoryBookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    return;
  }

  categoryBookmarks.forEach((bookmark, index) => {
    categoryList.innerHTML += `
      <div>
        <input
          type="radio"
          id="${bookmark.name}"
          value="${bookmark.name}"
          name="bookmark"
        >
        <label for="${bookmark.name}">
          <a href="${bookmark.url}" target="_blank">
            ${bookmark.name}
          </a>
        </label>
      </div>
    `;
  });
};


viewCategoryBtn.addEventListener("click", () => {
  displayCategory();
  displayOrHideCategory();
});


closeListButton.addEventListener("click", () => {
  displayOrHideCategory();
});


deleteBookmarkButton.addEventListener("click", () => {
  const selectedBookmark = document.querySelector(
    'input[name="bookmark"]:checked'
  );

  if (!selectedBookmark) {
    return;
  }

  const bookmarkName = selectedBookmark.value;
  const selectedCategory = categoryDropdown.value;

  const currentBookmarks = getBookmarks();

  const updatedBookmarks = currentBookmarks.filter(
    (bookmark) =>
      !(
        bookmark.name === bookmarkName &&
        bookmark.category === selectedCategory
      )
  );

  localStorage.setItem(
    "bookmarks",
    JSON.stringify(updatedBookmarks)
  );

  displayCategory();
});