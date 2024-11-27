let typed = []
document.querySelector('body').addEventListener('keydown', async (event) => {
    typed.push(event.key)
    if (typed.length > 5) {
        typed.shift()
    }

    if (typed.join('') === 'seppe') {
        for (;;) {
            document.querySelector('body').style.transition = `all .3s`
            document.querySelector('body').style.transform = `rotate3d(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()}turn)`
            await new Promise(resolve => setTimeout(resolve, 300))
        }
    }
})