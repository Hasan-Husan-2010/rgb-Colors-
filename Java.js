let boxs = document.querySelector('.boxs')
let btn = document.querySelector('.btn')

for(let i = 0; i < 105; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    let Son = parseInt(Math.random() * 255);
    let Son2 = parseInt(Math.random() * 255);
    let Son3 = parseInt(Math.random() * 255);
    box.style.background = 'rgb('+ Son +' '+ Son2 +' '+ Son3 +')';
    box.textContent = 'rgb('+ Son +', '+ Son2 +', '+ Son3 +')';
    btn.style.background = 'rgb('+ Son +' '+ Son2 +' '+ Son3 +')';
    boxs.appendChild(box)
    btn.addEventListener('click', function(){
    for(let i = 0; i < 105; i++){
    let Son = parseInt(Math.random() * 255);
    let Son2 = parseInt(Math.random() * 255);
    let Son3 = parseInt(Math.random() * 255);
    box.style.background = 'rgb('+ Son +' '+ Son2 +' '+ Son3 +')';
    box.textContent = 'rgb('+ Son +', '+ Son2 +', '+ Son3 +')';
    btn.style.background = 'rgb('+ Son +' '+ Son2 +' '+ Son3 +')';
    boxs.appendChild(box)
    }
    });
}