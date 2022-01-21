

const createSnow = () => {
    const snowElement = document.createElement("div");
    snowElement.classList.add("snow")
    snowElement.style.marginLeft = randomPosition() + 'px';
    document.body.appendChild(snowElement)
}

const randomPosition = () => {
    return Math.floor(Math.random() * window.innerWidth);
}

const manySnow = () => {
    for(let i=0; i < 500; i++){
        createSnow()
    }
}

manySnow()