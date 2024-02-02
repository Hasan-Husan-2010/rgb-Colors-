let boxs = document.querySelector('.boxs')
let btn = document.querySelector('.btn')

for(let i = 0; i < 105; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    let Son = parseInt(Math.random() * 255);
    let Son2 = parseInt(Math.random() * 255);
    let Son3 = parseInt(Math.random() * 255);
    const rgb = 'rgb('+ Son +' , '+ Son2 +' , '+ Son3 +')';
    const copy = structuredClone(rgb);
    box.addEventListener('click', function(){
        console.log(copy);
    })
    box.style.background = rgb ;
    box.textContent = rgb;
    btn.style.background = rgb;
    boxs.appendChild(box)
    btn.addEventListener('click', function(){
    let Son = parseInt(Math.random() * 255);
    let Son2 = parseInt(Math.random() * 255);
    let Son3 = parseInt(Math.random() * 255);
    const rgb = 'rgb('+ Son +' , '+ Son2 +' , '+ Son3 +')';
    box.style.background = rgb ;
    box.textContent = rgb;
    btn.style.background = rgb;
    const copy = structuredClone(rgb);
    box.addEventListener('click', function(){
        console.log(copy);
    })
});
}