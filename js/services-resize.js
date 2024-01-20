function updateVisibility() {
  const screenWidth = window.innerWidth;
  const listItems = document.querySelectorAll('.services-section__card-item');

  let numberOfItems;
  if (screenWidth < 560) {
    numberOfItems = 1;
  } else if (screenWidth < 1024) {
    numberOfItems = 2;
  } else if (screenWidth < 1280) {
    numberOfItems = 3;
  } else {
    numberOfItems = 4;
  }

  listItems.forEach((item, index) => {
    item.style.display = index < numberOfItems ? 'block' : 'none';
  });
}

updateVisibility();

window.addEventListener('resize', updateVisibility);
