const requestAnimationFrame = (
  window.requestAnimationFrame ||
  (window as any).mozRequestAnimationFrame ||
  (window as any).webkitRequestAnimationFrame ||
  (window as any).msRequestAnimationFrame
);

interface IntervalHandle {
  value: number;
}

export const _setInterval = function (fn: () => void, delay: number): IntervalHandle | number {
  if (
    !window.requestAnimationFrame &&
    !(window as any).webkitRequestAnimationFrame &&
    !((window as any).mozRequestAnimationFrame && (window as any).mozCancelRequestAnimationFrame) &&
    !(window as any).oRequestAnimationFrame &&
    !(window as any).msRequestAnimationFrame
  ) {
    return window.setInterval(fn, delay);
  }

  let start = Date.now();
  const handle: IntervalHandle = { value: 0 };

  function loop(): void {
    const current = Date.now();
    const delta = current - start;

    if (delta >= delay) {
      fn.call(null);
      start = Date.now();
    }

    handle.value = requestAnimationFrame(loop);
  }

  handle.value = requestAnimationFrame(loop);
  return handle;
};

export const _clearInterval = function (handle: IntervalHandle | number | undefined): void {
  if (typeof handle === 'undefined') return;

  const h = typeof handle === 'number' ? handle : handle.value;

  if (window.cancelAnimationFrame) {
    window.cancelAnimationFrame(h);
  } else if ((window as any).webkitCancelAnimationFrame) {
    (window as any).webkitCancelAnimationFrame(h);
  } else if ((window as any).webkitCancelRequestAnimationFrame) {
    (window as any).webkitCancelRequestAnimationFrame(h);
  } else if ((window as any).mozCancelRequestAnimationFrame) {
    (window as any).mozCancelRequestAnimationFrame(h);
  } else if ((window as any).oCancelRequestAnimationFrame) {
    (window as any).oCancelRequestAnimationFrame(h);
  } else if ((window as any).msCancelRequestAnimationFrame) {
    (window as any).msCancelRequestAnimationFrame(h);
  } else {
    clearInterval(h);
  }
};
