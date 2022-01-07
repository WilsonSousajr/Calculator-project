let resul_view = document.querySelector("#resul-view")
let num = [];
let num_numbered;


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

const methods = {
    sum: document.querySelector("#sum"),
    subtraction: document.querySelector("#subtraction"),
    multiply: document.querySelector("#multiply"),
    division: document.querySelector("#division"),
    percent: document.querySelector("#percent"),
    ac: document.querySelector('#clear'),
    backspace: document.querySelector("#backspace"),
    equal: document.querySelector("#equal"),
    point: document.querySelector("#point"),
    percent_method: function() {
        let result_view = eval(resul_view.innerHTML)
        resul_view.innerHTML = result_view / 100
    }

}

methods.sum.addEventListener("click", function(){
    resul_view.innerHTML += "+"
})
methods.subtraction.addEventListener("click", function(){
    resul_view.innerHTML += "-"
})
methods.multiply.addEventListener("click", function(){
    resul_view.innerHTML += "*"
})
methods.division.addEventListener("click", function(){
    resul_view.innerHTML += "/"
})
methods.percent.addEventListener("click", function(){
    methods.percent_method()
})
methods.ac.addEventListener("click", function(){
    resul_view.innerHTML = ""
})
methods.backspace.addEventListener("click", function(){
    resul_view.innerHTML =  resul_view.innerHTML.slice(0,-1)
})
methods.point.addEventListener("click", function(){
    resul_view.innerHTML += "."
})
methods.equal.addEventListener("click", function(){
    resul_view.innerHTML = eval(resul_view.innerHTML)
})

