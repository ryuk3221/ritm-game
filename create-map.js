// const bpmHtml = document.querySelector('.bpm');

// const music = document.querySelector('.music');
// music.volume = 0.1;



// const pop = document.querySelector('.audio-pop');
// pop.volume = 0.2;

// const playMetronom = document.querySelector('.play');

// const metronom = document.querySelector('.metronom');
// const metronomItems = document.querySelectorAll('.metronom__item');
// let indexOfMetronom = 0;


let musicTimeLine = 0;
const timeHtml = document.querySelector('.music-second');

// const mapTiming = (bpm) => {
//   const inteval = Math.round(60000 / bpm);

//   const intervalFunc = setInterval(() => {
//     if (metronom.querySelector('.metronom__item--active')) {
//       metronom.querySelector('.metronom__item--active').classList.remove('metronom__item--active');
//     }
//     metronomItems[indexOfMetronom].classList.add('metronom__item--active')
//     indexOfMetronom++;
//     if (indexOfMetronom > 3) {
//       indexOfMetronom = 0;
//     }
//     music.play();
//     pop.play();

//     if (musicTimeLine == 33) {
//       clearInterval(intervalFunc);
//       bpmHtml.innerHTML = '151';
//       mapTiming(151);
//     }
//   }, inteval);
// }

// playMetronom.onclick = () => {
//   mapTiming(121);
//   const musicInterval = setInterval(() => {
//     musicTimeLine++;
//     timeHtml.innerHTML = musicTimeLine
//   }, 1000); 

// };

const randomNumber = () => Math.floor(Math.random() * 6) + 1;

// const playMetronom = document.querySelector('.play');
// const music = document.querySelector('.music');
// music.volume = 0.5;


const timingNotes = [];
// let currentTime = 0;




const metronomHtml = document.querySelector('.metronom');
const metronomItems = document.querySelectorAll('.metronom__item');
let indexOfMetronom = 0;

const bpmHtml = document.querySelector('.bpm');

const pop = document.querySelector('.audio-pop');
pop.volume = 0.2;

const music = document.querySelector('.music');
music.volume = 0.5;
const playMetronom = document.querySelector('.play');

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



// playMetronom.addEventListener('click', () => {
//   music.play();
//   // setInterval(() => {
//   //   currentTime += 10;
//   // }, 10);


// });



playBtn.addEventListener('click', () => {
  music.play();
  // music.addEventListener('timeupdate', () => {
  //   console.log(parseFloat(music.currentTime.toFixed(3)) * 1000);
  // });
  // metronomFunc(121);
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
