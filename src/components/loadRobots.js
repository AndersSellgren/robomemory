function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", (err) => reject(err));
    img.src = src;
  });
};

export default function preLoadRobots(robots, allImages, cardHeight, setImagesLoading, numRobots) {
  robots.forEach(robot => {
    loadImage(`https://robohash.org/set_set1/${robot.pid}?size=${cardHeight}x${cardHeight}`)
    .then(img => allImages.push(img))
    .catch(err => allImages.push(err))
    .finally(() => {
      if (allImages.length === numRobots*2) {
        setImagesLoading(false)
      }
    })
  })
}
