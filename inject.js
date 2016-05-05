console.log("Goodreads-MAM extension loaded!");

// Grab book title (and only title)
var bookTitle = document.getElementById("bookTitle").innerHTML.trim().split('<', 1);
console.log("Book title: " + bookTitle);
var mamSearchUrl = "https://www.myanonamouse.net/tor/browse.php?tor[text]=" + bookTitle;

// Add 'Search MAM' button
var buttonBar = document.getElementById("buyButtonContainer");
var buttonUl  = buttonBar.getElementsByTagName("ul");
var mamButton = document.createElement("li");
mamButton.innerHTML = '<a id="mamLink" href="' + mamSearchUrl + '" target="_blank" class="buttonBar">Search MAM</a>';
mamButton.className = "Button";
buttonUl[0].appendChild(mamButton);

console.log("Search MAM button added!");
