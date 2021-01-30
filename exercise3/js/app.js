//Add the contents of the methods array in the content.js file as bullet items inside the bullets div of methods.html. Use vanilla JavaScript.

let bullets = document.getElementById('bullets');

let unorderedList = document.createElement('ul');
unorderedList.className = 'bullets__ul';

bullets.appendChild(unorderedList);

for (const method of methods) {
  let li = document.createElement('li');
  li.innerHTML = `${method}`;
  unorderedList.appendChild(li);
}
