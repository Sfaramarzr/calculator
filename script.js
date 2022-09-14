let displayBox = document.querySelector('.display');

let list = document.querySelectorAll('.show-display');

let AC = document.querySelector('.all-clear');
let Clear = document.querySelector('.clear-last');

list.forEach(item =>{
    item.addEventListener('click',(event)=>{
        let x = event.target.innerHTML;
        if (displayBox.innerHTML == 0) {
            return displayBox.innerHTML = x;
        }
        return displayBox.innerHTML += x;
    })
})

document.querySelector('.calculate').addEventListener('click', ()=>{
    let result = displayBox.innerHTML;
    displayBox.innerHTML = eval(result);
})


AC.addEventListener('click', ()=>{
    displayBox.innerHTML = 0;
})


Clear.addEventListener('click', ()=>{
    let text = displayBox.innerHTML;
    if (text.length === 1) {
        displayBox.innerHTML = 0;
    }else{
        displayBox.innerHTML = text.substring(0, text.length -1)
    }
})
