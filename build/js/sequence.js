function loadImage(src) {
  return new window.Promise((resolve, reject) => {
    const $img = new window.Image();
    $img.src = src;
    if ($img.complete) resolve(src);
    else
      $img.onload = () => {
        resolve(src);
      };
  });
}

function loadImages(srcs) {
  return window.Promise.all(srcs.map(loadImage));
}

loadImages(srcs).then((x) => {
  window.foo.src = x[0];
  window.requestAnimationFrame(update);
});

function seek($img, srcs, p) {
  $img.src = srcs[Math.round((srcs.length - 1) * p)];
}

function update(t) {
  seek(window.foo, srcs, (t / 2000) % 1);
  window.requestAnimationFrame(update);
}
