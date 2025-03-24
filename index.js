if (!window.localStorage.getItem('records')) {
  window.localStorage.setItem('records', JSON.stringify([]));
  console.log(JSON.parse(window.localStorage.getItem('records')))
}

const notesContainer = document.querySelector('.notes-container');
const buttons = document.querySelectorAll('.buttons button');

const pointsHtml = document.querySelector('.points');

const points = 10;  //кол-во оков за 1 попадание
let time = 0;
let totalPoints = 0;
let combo = 0;
let successHit = 0;  //кол-во попаданий
let missHit = 0;  //кол-во промахов

const records = document.querySelector('.records');


function createNote(key) {
  const start = Date.now();
  const note = document.createElement('div');
  note.classList.add('note');
  note.classList.add(`note${key}`)
  note.style.left = `${46 * key - 46}px`;
  note.style.top = '0px';
  notesContainer.appendChild(note);
  note.dataset.notecolumn = key;

  requestAnimationFrame(function animate(currentTime) {
    const currentTop = parseFloat(note.style.top);
    note.style.top = `${currentTop + 5}px`;


    // Если нота достигла низа, удаляем её
    if (currentTop > 650) {
      console.log(`Время - ${Date.now() - start}`)
      notesContainer.removeChild(note);
      combo = 0;
      comboHtml.innerHTML = combo;
      missHit++;
    } else {
      requestAnimationFrame(animate);
    }
  });

  // Анимация движения ноты вниз
  // const interval = setInterval(() => {
  //   const currentTop = parseFloat(note.style.top);
  //   note.style.top = `${currentTop + 4}px`;

  //   // Если нота достигла низа, удаляем её
  //   if (currentTop > 660) {
  //     clearInterval(interval);
  //     notesContainer.removeChild(note);
  //     combo = 0;
  //     comboHtml.innerHTML = combo;
  //     missHit++;
  //   }
  // }, 10);
}


const startBtn = document.querySelector('.btn-start');
const music = document.querySelector('.music');
music.volume = 0.5;


let currentMap;

startBtn.addEventListener('click', () => {
  // music.volume = 0.6;
  // music.play();
  currentMap.notes.forEach(note => {
    setTimeout(() => {
      createNote(note.dataKey);
      setTimeout(() => {
        // document.querySelector(`[data-key="${note.dataKey}"]`).classList.add('active');
        pop.currentTime = 0;
        pop.play();
        // setTimeout(() => {
        //   document.querySelector(`[data-key="${note.dataKey}"]`).classList.remove('active');
        // }, 20);
      }, 1650);
    }, note.delay);
  });

  setTimeout(() => {
    music.volume = 0.6;
    music.play();
  }, 1650);


  //функция которая вызывается по окончанию карты
  setTimeout(() => {
    menu.classList.remove('menu--hide');
    game.classList.remove('game--open');
    music.volume = 0.2;


    const record = {
      id: currentMap.id,
      name: currentMap.name,
      img: currentMap.img,
      score: {
        success: successHit,
        missHit: missHit,
        points: totalPoints
      }
    }

    const currentRecords = JSON.parse(window.localStorage.getItem('records'));
    currentRecords.push(record);
    window.localStorage.setItem('records', JSON.stringify(currentRecords));
    console.log(JSON.parse(window.localStorage.getItem('records')));

    combo = 0;
    totalPoints = 0;
    successHit = 0;
    missHit = 0;


    pointsHtml.innerHTML = 0;
    comboHtml.innerHTML = 0;

    renderRecords(currentMap.id);

    currentMap = null;
    menu.classList.remove('menu--hide');
    game.classList.remove('game--open');
    records.classList.add('records--show');
  }, currentMap.endTiming);
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
      totalPoints += points * combo;
      successHit++;
      comboHtml.innerHTML = combo;
      pointsHtml.innerHTML = totalPoints;
      currentNote.remove();
    } else {
      missHit++;
      combo = 0;
      comboHtml.innerHTML = combo;
      currentNote.remove();
    }
  }


  console.log(parseInt(currentNote.style.top));
}

const pop = document.querySelector('.audio1');
pop.volume = 0.5;

document.querySelectorAll('[data-key]');

window.onkeydown = event => {
  if (event.code == 'KeyS') {
    pop.currentTime = 0;
    pop.play();
    document.querySelector('[data-key="1"]').classList.add('active')
    checkNoteHit(1);

  }

  if (event.code == 'KeyD') {
    pop.currentTime = 0;
    pop.play();
    document.querySelector('[data-key="2"]').classList.add('active')
    checkNoteHit(2);
  }

  if (event.code == 'KeyF') {
    pop.currentTime = 0;
    pop.play();
    document.querySelector('[data-key="3"]').classList.add('active')
    checkNoteHit(3);
  }

  if (event.code == 'KeyJ') {
    pop.currentTime = 0;
    pop.play();
    document.querySelector('[data-key="4"]').classList.add('active')
    checkNoteHit(4);
  }

  if (event.code == 'KeyK') {
    pop.currentTime = 0;
    pop.play();
    document.querySelector('[data-key="5"]').classList.add('active')
    checkNoteHit(5);
  }

  if (event.code == 'KeyL') {
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
    if (document.querySelector('.menu__item--seclected')) {
      document.querySelector('.menu__item--seclected').classList.remove('menu__item--seclected');
    }

    event.target.closest('.menu__item').classList.add('menu__item--seclected')

    document.querySelector('.menu__btn').classList.add('menu__btn--show');

    records.classList.add('records--show');

    renderRecords(currentMap.id);
  }

  if (event.target.closest('.menu__btn')) {
    menu.classList.add('menu--hide');
    game.classList.add('game--open');
    records.classList.remove('records--show');
  }

  if (event.target.classList.contains('back-to-menu')) {
    window.location.reload();
  }
});


const recordsItemsHtml = document.querySelector('.records__items');

const renderRecords = (id) => {
  recordsItemsHtml.innerHTML = '';
  const records = JSON.parse(window.localStorage.getItem('records'));
  const recordsById = records.filter(item => item.id == id);

  recordsById.sort((a, b) => b.score.points - a.score.points);

  recordsById.forEach((record, index) => {
    const recordComponent = `
      <div class="records__item">
          <span class="number">${index + 1}.</span>
          <img src="${record.img}" alt="">
          <div class="records__item-content">
            <div class="records__item-title">${record.name}</div>
            <div class="records__points-wrapper">Количество очков: <span class="records__points">${record.score.points}</span></div>
          </div>
          <div class="menu__item-statistic">
              <div class="item-statistic__hits">Кол-во попаданий: ${record.score.success}</div>
              <div class="item-statistic__hits">Кол-во промахов: ${record.score.missHit}</div>
            </div>
        </div>
    `;
    recordsItemsHtml.insertAdjacentHTML('beforeend', recordComponent)
  });
};

// music.addEventListener('loadedmetadata', function () {
//   console.log('Длительность:', music.duration.toFixed(4), 'секунд');
// });

const totalMs = 10000;
const step = 99;
const arr = [];
const notes = [];

for (let i = 0; i < 10000; i += step) {
  arr.push(i);
}

const createTimingNote = (ms) => {
  for (let k = 0; k < arr.length; k++) {
    if (ms > arr[k] && ms < arr[k + 1]) {
      const deltaLeft = ms - arr[k];
      const deltaRight = arr[k + 1] - ms;

      if (deltaLeft < deltaRight) {
        console.log(`Ближайшее число: ${arr[k]}`);
      } else {
        console.log(`Ближайшее число: ${arr[k + 1]}`);
      }
      console.log(`Число ${ms} находится в интервале: c ${arr[k]} по ${arr[k + 1]}`);

    }
  }
}

createTimingNote(1500)