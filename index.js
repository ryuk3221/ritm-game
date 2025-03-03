const notesContainer = document.querySelector('.notes-container');
const buttons = document.querySelectorAll('.buttons button');


let time = 0;

let combo = 0;

function createNote(key) {
  const note = document.createElement('div');
  note.classList.add('note');
  note.classList.add(`note${key}`)
  note.style.left = `${46 * key - 46}px`;
  note.style.top = '0px';
  notesContainer.appendChild(note);
  note.dataset.notecolumn = key;

  // Анимация движения ноты вниз
  const interval = setInterval(() => {

    const currentTop = parseFloat(note.style.top);
    note.style.top = `${currentTop + 4}px`;

    // Если нота достигла низа, удаляем её
    if (currentTop > 660) {
      clearInterval(interval);
      notesContainer.removeChild(note);
      combo = 0;
      comboHtml.innerHTML = combo
    }
  }, 10);
}


const startBtn = document.querySelector('.btn-start');
const music = document.querySelector('.music');
music.volume = 0.7;


let currentMap;

startBtn.addEventListener('click', () => {
  currentMap.notes.forEach(note => {
    setTimeout(() => {
      createNote(note.dataKey);
    }, note.delay);
  });

  setTimeout(() => {
    music.play();
  }, 1550);
});



buttons.forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.key;
    checkNoteHit(key);
  });
});

const comboHtml = document.querySelector('.timer');

function checkNoteHit(key) {

  const notes = notesContainer.querySelectorAll(`[data-notecolumn="${key}"`);
  const currentNote = notes[0];

  if (parseInt(currentNote.style.top) > 400) {

    if (parseInt(currentNote.style.top) > 610 && parseInt(currentNote.style.top) < 660) {
      //попадание
      combo += 1;
      comboHtml.innerHTML = combo
      currentNote.remove()
    } else {
      combo = 0;
      comboHtml.innerHTML = combo
      currentNote.remove()
    }
  }


  console.log(parseInt(currentNote.style.top));
}

const pop = document.querySelector('.audio1');
pop.volume = 0.5;

document.querySelectorAll('[data-key]');

window.onkeydown = event => {
  if (event.key == 's') {
    pop.currentTime = 0;
    pop.play();
    document.querySelector('[data-key="1"]').classList.add('active')
    checkNoteHit(1);

  }

  if (event.key == 'd') {
    pop.currentTime = 0;
    pop.play();
    document.querySelector('[data-key="2"]').classList.add('active')
    checkNoteHit(2);
  }

  if (event.key == 'f') {
    pop.currentTime = 0;
    pop.play();
    document.querySelector('[data-key="3"]').classList.add('active')
    checkNoteHit(3);
  }

  if (event.key == 'j') {
    pop.currentTime = 0;
    pop.play();
    document.querySelector('[data-key="4"]').classList.add('active')
    checkNoteHit(4);
  }

  if (event.key == 'k') {
    pop.currentTime = 0;
    pop.play();
    document.querySelector('[data-key="5"]').classList.add('active')
    checkNoteHit(5);
  }

  if (event.key == 'l') {
    pop.currentTime = 0;
    pop.play();

    document.querySelector('[data-key="6"]').classList.add('active')
    checkNoteHit(6);
  }
};

window.onkeyup = () => {
  document.querySelector('.active').classList.remove('active')
}

const game = document.querySelector('.game');
const menu = document.querySelector('.menu');
let choosedMap = false;
const gameImg = document.querySelector('.game--img');

window.addEventListener('click', (event) => {
  if (event.target.closest('.menu__item')) {
    const mapId = event.target.closest('.menu__item').dataset.map;
    currentMap = maps.find(map => map.id === mapId)
    gameImg.style.backgroundImage = `url(${currentMap.img})`;
    music.setAttribute('src', `${currentMap.music}`);
  }

  if (event.target.closest('.menu__btn')) {
    menu.classList.add('menu--hide');
    game.classList.add('game--open');
  }
});