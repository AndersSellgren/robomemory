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