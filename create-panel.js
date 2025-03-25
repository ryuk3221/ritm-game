let delays = [
  7302,
  8445,
  9516,
  10731,
  11802,
  13016,
  14088,
  15231,
  16374,
  17588,
  18659,
  21016,
  null,
  23302,
  24445,
  25588,
  26659,
  27802,
  29016,
  30159,
  30445,
  31231,
  32445,
  33588,
  34659,
  35802,
  36945,
  38088,
  39231,
  40445,
  41516
]

const pop = document.querySelector('.audio-pop');
pop.volume = 0.5;


const music = document.querySelector('.music');
music.volume = 0.5;

//music controls
const progressBar = document.querySelector('.input-music');
const playBtn = document.querySelector('#playButton');
const pauseBtn = document.querySelector('#pauseButton');
const stopBtn = document.querySelector('#stopButton');

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
  let time = (progressBar.value / 1000) * music.duration;
  music.pause();
  music.currentTime = time;
  time = time.toFixed(3) * 1000;
  //изменили тайминги нот
  delays = delays.map(delay => delay - time);

  //отчистили запланированные таймеры
  clearAllTimeouts();
});

//кнопки управляющие скоростью воспроизведения
const btnsSpeed = document.querySelectorAll('.btn-speed');

btnsSpeed.forEach(btn => {
  btn.onclick = (event) => {
    const speed = parseFloat(event.target.id);
    music.playbackRate = speed;
  }
});


let duration = 287138;    //в мс


//интервал минимальной доли при (bpm = 210)
const step = 71.4285715;
const timings = [];



const notes = [];
const startTiming = 374;

for (let i = startTiming; i < duration; i += step) {
  timings.push(parseInt(i));
}

// console.log(timings)

playBtn.addEventListener('click', event => {
  music.play();
  delays.forEach(delay => {
    scheduleOfTimers(delay, popSound);
  });

  window.onkeydown = event => {

    if (event.code == 'KeyD' || event.code == 'KeyF') {
      const noteTiming = parseFloat(music.currentTime.toFixed(3) * 1000);
      console.log(createTimingNote(noteTiming));
      notes.push(createTimingNote(noteTiming));
      //console.log(parseFloat(music.currentTime.toFixed(3) * 1000));
    }

    if (event.code == 'Enter') {
      console.log(notes);
    }
  };
});



const createTimingNote = (ms) => {
  for (let k = 0; k < timings.length; k++) {
    if (ms > timings[k] && ms < timings[k + 1]) {
      const deltaLeft = ms - timings[k];
      const deltaRight = timings[k + 1] - ms;

      if (deltaLeft < deltaRight) {
        //console.log(`Ближайшее число: ${timings[k]}`);
        return timings[k]
      } else {
        //console.log(`Ближайшее число: ${timings[k + 1]}`);
        return timings[k + 1]
      }
      //console.log(`Число ${ms} находится в интервале: c ${timings[k]} по ${timings[k + 1]}`);
    }
  }
}

const popSound = () => {
  pop.currentTime = 0;
  pop.play();
}

//для хранения id запланированных таймеров
const timersIds = [];

//функция которая вызывает timeOut, сохраняет его id, и вызывает коллбэк
const scheduleOfTimers = (ms, callback) => {
  const timerId = setTimeout(() => {
    callback();
    timersIds.splice(timersIds.indexOf(timerId), 1);
  }, ms);
  timersIds.push(timerId);
}

//функция которая отменяет запланированные вызовы таймаутов
const clearAllTimeouts = () => {
  timersIds.forEach(id => {
    clearTimeout(id);
  });

  timersIds.length = 0;
}

const btn = document.querySelector('.test-music');
btn.addEventListener('click', () => {
  delays.forEach(delay => {
    scheduleOfTimers(delay, popSound);
  });

  // delays.forEach(delay => {
  //   setTimeout(() => {
  //     pop.currentTime = 0;
  //     pop.play();
  //   }, delay);
  // });
  music.play();
});


stopBtn.addEventListener('click', () => {
  clearAllTimeouts();
});