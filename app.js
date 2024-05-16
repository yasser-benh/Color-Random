let btn = document.querySelector ('#cc')
let page = document.querySelector ("body")

btn.addEventListener ('click' , changeColor)
function changeColor(){
    let x = "#" + Math.random().toString(16).slice(2,8)
    page.style.backgroundColor = x
    document.body.style.transition = "all 0.9s "
    btn.style.color = x
    
}