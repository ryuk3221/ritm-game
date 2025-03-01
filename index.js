const notesContainer = document.querySelector('.notes-container');
const buttons = document.querySelectorAll('.buttons button');


let time = 0;


function createNote(key) {
  const note = document.createElement('div');
  note.classList.add('note');
  note.classList.add(`note${key}`)
  note.style.left = `${46 * key - 46}px`; // Позиция по X
  note.style.top = '0px'; // Начальная позиция по Y
  notesContainer.appendChild(note);

  // Анимация движения ноты вниз
  const interval = setInterval(() => {

    const currentTop = parseFloat(note.style.top);
    note.style.top = `${currentTop + 4}px`;

    // Если нота достигла низа, удаляем её
    if (currentTop > 654) {
      clearInterval(interval);
      notesContainer.removeChild(note);
    }
  }, 10);
}


const startBtn = document.querySelector('.btn-start');
const music = document.querySelector('.music');
music.volume = 0.5;

startBtn.addEventListener('click', () => {
  
  setTimeout(() => {
    music.play();
    notes.forEach(note => {
      setTimeout(() => {
        createNote(note.dataKey);
      }, note.delay);
    });
  }, 3000);
});



buttons.forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.key;
    checkNoteHit(key);
  });
});

function checkNoteHit(key) {
  const notes = document.querySelectorAll('.note');
  notes.forEach(note => {
    const noteKey = Math.floor((parseFloat(note.style.left) - 50) / 100) + 1;
    if (noteKey == key) {
      const noteBottom = parseFloat(note.style.bottom);
      if (noteBottom > 250 && noteBottom < 300) { // Допустимый диапазон
        console.log('Попадание!');
        notesContainer.removeChild(note);
      }
    }
  });
}

const pop = document.querySelector('.audio1');
pop.volume = 0.3;

document.querySelectorAll('[data-key]');

window.onkeydown = event => {
  if (event.key == 's') {
    pop.currentTime = 0;
    pop.play();

    document.querySelector('[data-key="1"]').classList.add('active')
  }

  if (event.key == 'd') {
    pop.currentTime = 0;
    pop.play();
    document.querySelector('[data-key="2"]').classList.add('active')
  }

  if (event.key == 'f') {
    pop.currentTime = 0;
    pop.play();
    document.querySelector('[data-key="3"]').classList.add('active')
  }

  if (event.key == 'j') {
    pop.currentTime = 0;
    pop.play();
    document.querySelector('[data-key="4"]').classList.add('active')
  }

  if (event.key == 'k') {
    pop.currentTime = 0;
    pop.play();
    document.querySelector('[data-key="5"]').classList.add('active')
  }

  if (event.key == 'l') {
    pop.currentTime = 0;
    pop.play();

    document.querySelector('[data-key="6"]').classList.add('active')
  }
};

window.onkeyup = () => {
  document.querySelector('.active').classList.remove('active')
}