export const animationCards = () => {
  const cardValues = document.querySelectorAll('.card-back')
  setTimeout(() => {
    [...cardValues].map(card => card.classList.add('hideCards'))
  },2000)
  setTimeout(() => {
    [...cardValues].map(card => card.classList.remove('hideCards'))
  },3000)
}

export const victory = () => {
  const overlayVictory = document.querySelector('.overlay.victory')
  overlayVictory.classList.add('visible')
  // setNewRobots(true)
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", (err) => reject(err));
    img.src = src;
  });
};

export function preLoadRobots(robots, allImages, cardHeight, setImagesLoading, numRobots) {
  robots.forEach(robot => {
    loadImage(`https://robohash.org/set_set1/${robot.pid}?size=${100}x${100}`)
    .then(img => allImages.push(img))
    .catch(err => allImages.push(err))
    .finally(() => {
      if (allImages.length === numRobots*2) {
        setImagesLoading(false)
      }
    })
  })
}

export const robotNames = [
  {
    id: 1,
    name: '',
    username: 'Edward',
    email: ''
  },
  {
    id: 2,
    name: '',
    username: 'Anders',
    email: ''
  },
  {
    id: 3,
    name: '',
    username: 'Johan',
    email: ''
  },
  {
    id: 4,
    name: '',
    username: 'Amelia',
    email: ''
  },
  {
    id: 5,
    name: '',
    username: 'Anna',
    email: ''
  },
  {
    id: 6,
    name: '',
    username: 'Simon',
    email: ''
  },
  {
    id: 7,
    name: '',
    username: 'Mia',
    email: ''
  },
  {
    id: 8,
    name: '',
    username: 'Ulf',
    email: ''
  },
  {
    id: 9,
    name: '',
    username: 'Marie',
    email: ''
  },
  {
    id: 10,
    name: '',
    username: 'Test',
    email: ''
  }
];

