const bpmHtml = document.querySelector('.bpm');

const music = document.querySelector('.music');
music.volume = 0.9;



const pop = document.querySelector('.audio-pop');
pop.volume = 0.2;

const playMetronom = document.querySelector('.play');

const metronom = document.querySelector('.metronom');
const metronomItems = document.querySelectorAll('.metronom__item');
let indexOfMetronom = 0;


let musicTimeLine = 0;
const timeHtml = document.querySelector('.music-second');

const mapTiming = (bpm) => {
  const inteval = Math.round(60000 / bpm);

  const intervalFunc = setInterval(() => {
    if (metronom.querySelector('.metronom__item--active')) {
      metronom.querySelector('.metronom__item--active').classList.remove('metronom__item--active');
    }
    metronomItems[indexOfMetronom].classList.add('metronom__item--active')
    indexOfMetronom++;
    if (indexOfMetronom > 3) {
      indexOfMetronom = 0;
    }
    music.play();
    pop.play();

    if (musicTimeLine == 33) {
      clearInterval(intervalFunc);
      bpmHtml.innerHTML = '151';
      mapTiming(151);
    }
  }, inteval);
}

playMetronom.onclick = () => {
  mapTiming(121);
  const musicInterval = setInterval(() => {
    musicTimeLine++;
    timeHtml.innerHTML = musicTimeLine
  }, 1000); 
  
};

const randomNumber = () => Math.floor(Math.random() * 6) + 1;

// const playMetronom = document.querySelector('.play');
// const music = document.querySelector('.music');
// music.volume = 0.5;


const timingNotes = [];
let currentTime = 0;

playMetronom.addEventListener('click', () => {
  music.play();
  setInterval(() => {
    currentTime += 10;
  }, 10);

  window.onkeydown = event => {
    if (event.key == 's') {
      timingNotes.push({
        dataKey: 1,
        delay: currentTime
      });
      console.log(currentTime);
    }

    if (event.key == 'd') {
      timingNotes.push({
        dataKey: 2,
        delay: currentTime
      });
      console.log(currentTime);
    }

    if (event.key == 'f') {
      timingNotes.push({
        dataKey: 3,
        delay: currentTime
      });
      console.log(currentTime);
    }

    if (event.key == 'j') {
      timingNotes.push({
        dataKey: 4,
        delay: currentTime
      });
      console.log(currentTime);
    }

    if (event.key == 'k') {
      timingNotes.push({
        dataKey: 5,
        delay: currentTime
      });
      console.log(currentTime);
    }

    if (event.key == 'l') {
      timingNotes.push({
        dataKey: 6,
        delay: currentTime
      });
      console.log(currentTime);
    }


    

    if (currentTime > 330000) {
      console.log(timingNotes);
    }
  }
});



