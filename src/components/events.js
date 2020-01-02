const mwheelEvent = (resultsClass) => {
  const wheelEvent = (e) => {
    e = e || window.event;
    const { clientWidth } = document.documentElement;
    const delta = Math.sign(e.deltaY || e.detail || e.wheelDelta);
    const offset = delta * ((0.255 * clientWidth) + 1);
    document.querySelector(`.${resultsClass}`).scrollBy(offset, 0);
  };
    document.addEventListener('wheel', wheelEvent);
    document.addEventListener('mousewheel', wheelEvent)
}

export default mwheelEvent;
