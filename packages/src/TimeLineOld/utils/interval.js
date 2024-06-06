/***
 *
 * const requestAnimationFrame = (
         window.requestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.msRequestAnimationFrame
 *
 * @param fn
 * @param delay
 * @return {Object|number}
 * @private
 */

const requestAnimationFrame = (
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame);

export const _setInterval = function(fn, delay) {
    if( !window.requestAnimationFrame       &&
        !window.webkitRequestAnimationFrame &&
        !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
        !window.oRequestAnimationFrame      &&
        !window.msRequestAnimationFrame)
        return window.setInterval(fn, delay);

    let start = Date.now(),
        handle = Object.create({});

    function loop() {
        const current = Date.now(),
            delta = current - start;

        if(delta >= delay) {
            fn.call();
            start = new Date().getTime();
        }

        handle.value = requestAnimationFrame(loop);
    };

    handle.value = requestAnimationFrame(loop);
    return handle;
}

export const _clearInterval = function(handle) {
    window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
        window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) :
            window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
                window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
                    window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) :
                        window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) :
                            clearInterval(handle);
};
