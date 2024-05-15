let btn = document.querySelector ('#cc')
let page = document.querySelector ("body")
btn.addEventListener ('click' , changeColor)
function changeColor(){
    page.style.backgroundColor = "#" + Math.random().toString(16).slice(2,8)
    document.body.style.transition = "all 0.9s "
    
}