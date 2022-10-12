/*
Uso este script de Carlos Delgado subido a www.ourcodeworld.co
Para determinar la cantidad de hz del monitor

*/

let delta = 1;

function getScreenRefreshRate(callback, runIndefinitely) {
    let requestId = null;
    let callbackTriggered = false;
    runIndefinitely = runIndefinitely || false;

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;
    }

    let DOMHighResTimeStampCollection = [];

    let triggerAnimation = function (DOMHighResTimeStamp) {
        DOMHighResTimeStampCollection.unshift(DOMHighResTimeStamp);

        if (DOMHighResTimeStampCollection.length > 10) {
            let t0 = DOMHighResTimeStampCollection.pop();
            let fps = Math.floor(1000 * 10 / (DOMHighResTimeStamp - t0));

            if (!callbackTriggered) {
                callback.call(undefined, fps, DOMHighResTimeStampCollection);
            }

            if (runIndefinitely) {
                callbackTriggered = false;
            } else {
                callbackTriggered = true;
            }
        }

        requestId = window.requestAnimationFrame(triggerAnimation);
    };

    window.requestAnimationFrame(triggerAnimation);

    // Deténgase después de medio segundo si no debería ejecutarse indefinidamente
    if (!runIndefinitely) {
        window.setTimeout(function () {
            window.cancelAnimationFrame(requestId);
            requestId = null;
        }, 500);
    }
}

getScreenRefreshRate(function (FPS) {
    delta = (FPS > 100 ? 2.4 : 1);
    console.log(FPS)
    console.log(delta)
    vx = (delta == 1 ? 3.2 : 1.5);
    console.log(vx)
});
