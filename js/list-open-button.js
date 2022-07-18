const titleButton = document.querySelectorAll('.judul-subkonten');

const contentDescription = document.querySelectorAll('.deskripsi-subkonten');

for (let i = 0; i < titleButton.length; i++) {
  titleButton[i].addEventListener('click', (_) => {
    contentDescription[i].classList.remove('hidden');
    for (let j = 0; j < contentDescription.length; j++) {
      if (i != j) {
        contentDescription[j].classList.add('hidden');
      }
    }
  });
}
