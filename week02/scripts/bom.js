
const input = document.getElementById("favchap");
const button = document.getElementById("button");
const list = document.getElementById("____"); // fill in the blank to reference the unordered list element.



{/* <button aria-label = "close" id = "close-button">❌</button>; */}

// click listener to add a chapter
buttonElement.addEventListener('click', function()
{
    if (input.value.trim() !== ''){
// creating a li element that will hold each entry's chapter title.
const li = document.createElement('li');
li.textContent = inputelement.value;
// Created a delete button.
const deleteButton = document.createElement('button');
deleteButton.textContent = '❌';
deleteButton.addEventListener('click', function(){
listElement.removeChild(li)
input.focus();
});
//add the button to the list item
li.appendChild(deleteButton);
//listElemtent populate the li element varible's 'textcontent' or 'innerHTML'.
li.textContent = input.value;

// set delete button's textcontent.
deleteButton.textContent = '❌';

// Append the delete button to the li Element.
li.append(deleteButton);

// append the li element variable to the unordered list in your HTML.
list.appendChild(li);
input.value = '';
input.focus();
inputElement.focus();  

}
});