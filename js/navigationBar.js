const burgerButton = document.querySelector('.burger-button');
const navGroup = document.querySelector('.nav-group');
const burgerLines = document.querySelectorAll('.burger-line');
const navBar = document.querySelector('.nav-bar');

burgerButton.addEventListener('click', (_) => {
  navGroup.classList.toggle('translate-x-full');

  burgerLines[0].classList.toggle('rotate-45');
  burgerLines[0].classList.toggle('top-1/2');
  burgerLines[0].classList.toggle('translate-y-1/2');
  burgerLines[1].classList.toggle('hidden');
  burgerLines[2].classList.toggle('-rotate-45');
  burgerLines[2].classList.toggle('bottom-1/2');
  burgerLines[2].classList.toggle('-translate-y-1/2');

  burgerLines.forEach((line) => {
    line.classList.toggle('bg-red-500');
    line.classList.toggle('bg-black');
  });
});
