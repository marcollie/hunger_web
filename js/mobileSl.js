$(window).resize(function () {
  if ($(window).width() <= 414) {
    let index = 0;
    const slidebox = document.querySelector('.gallery-box');
    const firstitem = document.querySelector('.galImg');
    const firstClone = firstitem.cloneNode(true);
    slidebox.appendChild(firstClone);

    setInterval(function () {
      slidebox.style.transition = '0.2s';
      slidebox.style.transform = "translate3d(-" + 20 * (index + 1) + "%, 0px, 0px)";

      index++;
      if (index === 4) {
        setTimeout(function () {
          slidebox.style.transition = '0s';
          slidebox.style.transform = "translate3d(0px, 0px, 0px)";
        }, 200)
        index = 0;
      }
    }, 1500);

  }
});
