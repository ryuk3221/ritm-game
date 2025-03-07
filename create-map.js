const bpmHtml = document.querySelector('.bpm');

const pop = document.querySelector('.audio-pop');
pop.volume = 0.2;

const music = document.querySelector('.music');
music.volume = 0.5;


const playMetronomBtn = document.querySelector('.play');
const metronomHtml = document.querySelector('.metronom');
const metronomItems = document.querySelectorAll('.metronom__item');
let indexOfMetronom = 0;

let musicTimeLine = 0;
const timeHtml = document.querySelector('.music-second');


// const myInterval = (bpm, callback) => {
//   //интервал метронома в мс
//   const interval = Math.round(60000 / bpm);
//   setTimeout(() => {
//     callback();
//     myInterval(bpm, callback);
//   }, interval);
// }

// //функция которая
// const playMetronom = () => {
//   if (metronomHtml.querySelector('.metronom__item--active')) {
//     metronomHtml.querySelector('.metronom__item--active').classList.remove('metronom__item--active');
//   }
//   //включаю звук щелчка метронома
//   pop.play();
//   metronomItems[indexOfMetronom].classList.add('metronom__item--active');
//   indexOfMetronom++;
//   if (indexOfMetronom > 3) {
//     indexOfMetronom = 0;
//   }
// }

// //функция которая останавливает интервал
// const stopIntervalFuntion = () => {
//   clearInterval(window.intervalFunction);
// }

// //по нажатию запускаю метроном с задержкой согалсну таймингу карты (таймингу трека)
// playMetronomBtn.addEventListener('click', () => {
//   //включаю музыку
//   music.play();
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Начался интервал');
//     }, 400);
//   }).then(data => {
//     console.log(data);
//     myInterval(121, playMetronom);
//   });

// });

// playMetronom.onclick = () => {
//   mapTiming(121);
//   const musicInterval = setInterval(() => {
//     musicTimeLine++;
//     timeHtml.innerHTML = musicTimeLine
//   }, 1000); 

// };

const randomNumber = () => Math.floor(Math.random() * 6) + 1;


const timingNotes = [];
// let currentTime = 0;




// let currentTime = 0;

const metronomFunc = (bpm) => {
  const interval = Math.round(60000 / bpm);
  const metronom = setInterval(() => {
    currentTime += interval;
    pop.play();
    if (metronomHtml.querySelector('.metronom__item--active')) {
      metronomHtml.querySelector('.metronom__item--active').classList.remove('metronom__item--active');
    }
    metronomItems[indexOfMetronom].classList.add('metronom__item--active')

    indexOfMetronom++;

    if (indexOfMetronom > 3) {
      indexOfMetronom = 0;
    }


    if (currentTime == 33232) {
      console.log(true);
      clearInterval(metronom);
      metronomFunc(151);
    }
  }, interval);


}

// playMetronom.addEventListener('click', () => {
//   music.play();

// });



//music controls
const progressBar = document.querySelector('.input-music');
const playBtn = document.querySelector('#playButton')
const pauseBtn = document.querySelector('#pauseButton')
const stopBtn = document.querySelector('#stopButton')



pauseBtn.addEventListener('click', () => {
  music.pause();
});

stopBtn.addEventListener('click', () => {
  music.pause();
  music.currentTime = 0;
});

music.addEventListener('timeupdate', () => {
  const progress = (music.currentTime / music.duration) * 1000;
  progressBar.value = progress;
});

progressBar.addEventListener('input', () => {
  const time = (progressBar.value / 1000) * music.duration;
  music.currentTime = time;
});

//кнопки управляющие скоростью воспроизведения
const btnsSpeed = document.querySelectorAll('.btn-speed');

btnsSpeed.forEach(btn => {
  btn.onclick = (event) => {
    const speed = parseFloat(event.target.id);
    music.playbackRate = speed;
  }
});


playBtn.addEventListener('click', () => {
  music.play();

  window.onkeydown = event => {
    if (event.code == 'Enter') {
      music.play();
    }

    if (event.code == 'Space') {
      music.pause();
      console.log(timingNotes);
    }

    if (event.code == 'KeyS') {
      pop.currentTime = 0;
      pop.play();
      timingNotes.push({
        dataKey: 1,
        delay: music.currentTime
      });
    }

    if (event.code == 'KeyD') {
      pop.currentTime = 0;
      pop.play();
      timingNotes.push({
        dataKey: 2,
        delay: music.currentTime
      });
    }

    if (event.code == 'KeyF') {
      pop.currentTime = 0;
      pop.play();
      timingNotes.push({
        dataKey: 3,
        delay: music.currentTime
      });
    }

    if (event.code == 'KeyJ') {
      pop.currentTime = 0;
      pop.play();
      timingNotes.push({
        dataKey: 4,
        delay: music.currentTime
      });
    }

    if (event.code == 'KeyK') {
      pop.currentTime = 0;
      pop.play();
      timingNotes.push({
        dataKey: 5,
        delay: music.currentTime
      });
    }

    if (event.code == 'KeyL') {
      pop.currentTime = 0;
      pop.play();
      timingNotes.push({
        dataKey: 6,
        delay: music.currentTime
      });
    }
  }
})

// const creatingNotesFunc = () => {
//   const interval = setInterval(() => {
//     currentTime++;
//     if (currentTime < 33190 && currentTime % 124 == 0) {
//       music.pause();
//       clearInterval(interval);
//       if (window.confirm(`Добавить ноту на ${currentTime} милисекунде?`)) {
//         const noteColumn = Number(window.prompt('Введите в какую колонку доабвить ноту'));
//         notes.push({ delay: currentTime, dataKey: noteColumn });
//         console.log(notes);
//         creatingNotesFunc()
//         music.play();
//       } else {
//         creatingNotesFunc();
//         music.play();
//       }
//     }
//   }, 1);
// };

// let currentTime = 0;
// const notes = [];

// playBtn.addEventListener('click', () => {
//   music.play();
//   creatingNotesFunc();
// });
