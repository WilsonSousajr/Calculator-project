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

const metods = {

    sum: document.querySelector("#sum"),
    subtraction: document.querySelector("#subtraction"),
    multiply: document.querySelector("#multiply"),
    division: document.querySelector("#division"),
    percent: document.querySelector("#percent"),
    equal: document.querySelector("#equal")

}

metods.sum.addEventListener("click", function(){
    resul_view.innerHTML += "+"
})
metods.subtraction.addEventListener("click", function(){
    resul_view.innerHTML += "-"
})
metods.multiply.addEventListener("click", function(){
    resul_view.innerHTML += "X"
})
metods.division.addEventListener("click", function(){
    resul_view.innerHTML += "/"
})
metods.percent.addEventListener("click", function(){
    resul_view.innerHTML += "%"
})
metods.equal.addEventListener("click", function(){
    let resul_view_innerHTML = resul_view.innerHTML
    console.log(onlyNumbers(resul_view_innerHTML))
})

function onlyNumbers(string){
    let num_to_string = string.replace(/[^0-9]/g, '')
    return parseInt(num_to_string)
}

for(let i = 0; i < keys.length; i++){
    keys[i].addEventListener('click', function(){
        keys[i] = i
        resul_view.innerHTML += keys[i]
    })
}


