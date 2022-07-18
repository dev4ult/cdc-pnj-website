const termNconButton = document.querySelectorAll('.term-and-condition');

const termList = document.querySelectorAll('.term-n-con-list');

for (let i = 0; i < termNconButton.length; i++) {
  termNconButton[i].addEventListener('click', (_) => {
    termList[i].classList.toggle('hidden');
  });
}
