// close modal

let modal = document.querySelector("#more-calculators")
let open_modal = document.querySelector("#img-1")
let close_modal = document.querySelector("#close")

open_modal.addEventListener("click", function(){
    modal.style.display = "initial"
})

close_modal.addEventListener("click", function(){
    modal.style.display = "none"
})