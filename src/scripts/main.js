'use strict';

/* const listItems = document.querySelectorAll('ul.tree li > ul > li');
// знаходимо всі елементи li всередині списків

listItems.forEach((item) => {
  const text = item.firstChild.data.trim();

  const span = document.createElement('span');

  span.textContent = text;
  item.firstChild.data = '';
  item.insertBefore(span, item.firstChild);
}); */

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = e.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
});
