let boxs = document.querySelector('.boxs')
let btn = document.querySelector('.btn')

for(let i = 0; i < 105; i++){
    const box = document.createElement('div');
    const box_inside = document.createElement('div');
    const box_btn = document.createElement('button')
    const box_p = document.createElement('p')

    box_btn.classList.add('btn')
    box_p.classList.add('p')
    box_btn.textContent = 'Copy that color'
    box_btn.style.fontSize = '14px'
    box.classList.add('box');

    function generateColor() {
        let Son = parseInt(Math.random() * 255);
        let Son2 = parseInt(Math.random() * 255);
        let Son3 = parseInt(Math.random() * 255);
        return `rgb(${Son},${Son2},${Son3})`;
    }

    let rgb = generateColor();
    box_p.textContent = rgb;
    box.style.background = rgb;
    btn.style.background = rgb;

    box_btn.addEventListener('click', () => {
        navigator.clipboard.writeText(rgb);
        alert(`Copied that color: ${rgb}`);
    });

    box_inside.appendChild(box_p)
    box_inside.appendChild(box_btn)
    box.appendChild(box_inside)
    boxs.appendChild(box)

    btn.addEventListener('click', function(){
        let newRgb = generateColor();
        rgb = newRgb;  // Eski rangni yangilaymiz
        box.style.background = newRgb;
        btn.style.background = newRgb;
        box_p.textContent = newRgb;
    });
}
