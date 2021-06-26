(async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const coordsEl = document.querySelector('#user-coords');
            coordsEl.textContent = `${position.coords.latitude}, ${position.coords.longitude}`
            coordsEl.parentElement.classList.remove('invisible');
        });
    }
})();

// Added some code
//=========async&event_loop===============
console.log('Start')

console.log('Start 2')

setTimeout(() => console.log('timeout 0!'), 0)

window.setTimeout(() => {
    console.log('timeout 5sec')
}, 5000)

window.setTimeout(() => {
    console.log('timeout 2sec')
}, 2000)

console.log('end')
//=====================