let resul_view = document.querySelector("#resul-view")

const keys = [

    document.querySelector("#zero-number"),
    document.querySelector("#one"),
    document.querySelector("#two"),
    document.querySelector("#three"),
    document.querySelector("#four"),
    document.querySelector("#five"),
    document.querySelector("#six"),
    document.querySelector("#seven"),
    document.querySelector("#eight"),
    document.querySelector("#nine"),
    

]

for(let i = 0; i < keys.length; i++){
    keys[i].addEventListener('click', function(){
        keys[i] = i
        resul_view.innerHTML += keys[i]
    })
}


