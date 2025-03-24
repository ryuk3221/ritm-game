
const delays = [
  1516,
  1945,
  2659,
  3088,
  3516,
  3802,
  3945,
  4088,
  4231,
  4945,
  5374,
  6088,
  null,
  7231,
  7802,
  8088,
  8374,
  8516,
  8659,
  8802,
  8945,
  9016,
  9088,
  9159,
  9231,
  9516,
  9945,
  10659,
  11088,
  11374,
  11516,
  11802,
  12088,
  12374,
  12659,
  12945,
  13088,
  13231,
  13374,
  13516,
  13588,
  13659,
  13731,
  13802,
  13874,
  14374,
  14516,
  14659,
  14731,
  14802,
  14874,
  14945,
  15231,
  15374,
  15516,
  15659,
  15802,
  15874,
  15945,
  16016,
  16088,
  16445,
  16588,
  16731,
  16802,
  16802,
  16874,
  16945,
  17159,
  17302,
  17302,
  17374,
  17445,
  17516,
  18088,
  18159,
  18231,
  18302,
  18374,
  18374,
  18445,
  18516,
  18588,
  18659,
  19802,
  19945,
  20088,
  20231,
  20374,
  20516,
  20659,
  20802,
  20945,
  21231,
  21516,
  21802,
  22088,
  22231,
  22374,
  22516,
  22659,
  22802,
  22945,
  23088,
  23231,
  23516,
  23802,
  24088,
  24374,
  24516,
  24659,
  24802,
  24945,
  25088,
  25231,
  25374,
  25516,
  25802,
  26088,
  26374,
  26659,
  26802,
  26945,
  27088,
  27231,
  27302,
  27374,
  27445,
  27516,
  27659,
  27731,
  27802,
  28945,
  29374,
  30088,
  30516,
  30945,
  31231,
  31374,
  31516,
  31659,
  32374,
  32659,
  32945,
  33231,
  33516,
  33659,
  33802,
  33945,
  34088,
  34231,
  34374,
  34516,
  34659,
  34945,
  35231,
  35516,
  35802,
  35945,
  36088,
  36231,
  36374,
  null,
  36659,
  36802,
  36945,
  37231,
  37516,
  37802,
  38088,
  38231,
  38374,
  38516,
  38659,
  38802,
  38945,
  39088,
  39231,
  39516,
  39802,
  40088,
  40374,
  40516,
  40659,
  40802,
  40945,
  41016,
  41088,
  41159,
  41231,
  41374,
  41445,
  41516,
  41731,
  42088,
  42374,
  42516,
  42659,
  42802,
  42945,
  43088,
  43088,
  43159,
  43302,
  43374,
  null,
  43588,
  43731,
  44088,
  44374,
  44659,
  44802,
  44945,
  45088,
  45231,
  45374,
  45445,
  45516,
  45659,
  45731,
  45802,
  45945,
  46088,
  46374,
  46659,
  46802,
  46945,
  47088,
  47231,
  null,
  47516,
  47659,
  47731,
  47802,
  47945,
  48016,
  48016,
  48231,
  48374,
  48659,
  48874,
  49231,
  49516,
  49588,
  49659,
  49731,
  49802,
  49874,
  49945,
  50016,
  50088,
  50231,
  50231,
  50374,
  50516,
  50659,
  52945,
  55231,
  56374,
  56874,
  57516,
  57802,
  58088,
  58374,
  58659,
  58802,
  58945,
  59088,
  59231,
  59302,
  59374,
  59445,
  59516,
  59588,
  59659,
  59731,
  59802,
  60088,
  60231,
  60516,
  60802,
  61088,
  61231,
  61374,
  61659,
  61802,
  61945,
  62088,
  62374,
  62516,
  62802,
  63088,
  63374,
  63659,
  63945,
  64088,
  64231,
  64374,
  64659,
  64945,
  65231,
  65374,
  65659,
  65802,
  66088,
  66159,
  66231,
  66302,
  66374,
  66659,
  66802,
  66945,
  67088,
  67231,
  67374,
  67516,
  67659,
  67802,
  67945,
  68088,
  68231,
  68374,
  68516,
  68659,
  68802,
  68945,
  69231,
  69374,
  69659,
  69945,
  70231,
  null,
  70802,
  70945,
  71088,
  71231,
  71516,
  71659,
  71945,
  72231,
  72516,
  72802,
  73088,
  73231,
  73374,
  73516,
  73802,
  74088,
  74374,
  74516,
  74802,
  74945,
  75088,
  75231,
  75302,
  75374,
  75445,
  75516,
  75802,
  75945,
  76088,
  76302,
  null,
  76945,
  77088,
  77231,
  77374,
  77516,
  77588,
  77659,
  77731,
  77802,
  77874,
  77874,
  77945,
  78016,
  78088,
  79159,
  79516,
  79659,
  79945,
  80088,
  80374,
  80659,
  80945,
  81231,
  81374,
  81516,
  81588,
  81659,
  81731,
  81802,
  81874,
  81945,
  82016,
  82088,
  82374,
  82731,
  null,
  83088,
  83445,
  83802,
  84088,
  84231,
  84516,
  84659,
  84945,
  85088,
  85231,
  85374,
  85516,
  85659,
  85802,
  85945,
  86088,
  86231,
  86374,
  86516,
  86659,
  86945,
  87231,
  87516,
  87659,
  88088,
  88374,
  88516,
  88659,
  88802,
  89231,
  89516,
  89802,
  89945,
  90302,
  90445,
  90588,
  90659,
  90802,
  90945,
  91088,
  91231,
  91302,
  91374,
  91445,
  91516,
  91588,
  91731,
  91802
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

  window.onkeydown = event => {
    //добавить ноту
    console.log(event.code)
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

const btn = document.querySelector('.test-music');
btn.addEventListener('click', () => {
  delays.forEach(ms => {
    setTimeout(() => {
      pop.currentTime = 0;
      pop.play();
    }, ms);
  });
  music.play();
});