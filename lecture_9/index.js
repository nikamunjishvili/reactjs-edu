const main = document.querySelector('main');

export function Button (width, height, textContent, h1){
    const button = document.createElement('button');
    const heading = document.createElement('h1');
    heading.textContent = h1;
    button.innerHTML = h1;
    button.style.width = width;
    button.style.height = height;
    button.textContent = textContent;
    return main.appendChild(button)
}