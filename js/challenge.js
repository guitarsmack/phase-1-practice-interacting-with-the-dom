let time = true
const pauseButton = document.getElementById("pause")

document.addEventListener("DOMContentLoaded",initialize())

function initialize(){
    document.getElementById("plus").addEventListener("click",addOne)
    document.getElementById("minus").addEventListener("click",subOne)
    document.getElementById("heart").addEventListener("click",addHeart)
    document.getElementById("submit").addEventListener("click",comment)
    addComment()
    counting()
}

pauseButton.addEventListener("click", pause)

function addComment(){
    const form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
    e.preventDefault()
    const comment = e.target["comment-input"].value
    form.reset()
    const li = document.createElement("li")
    li.innerText = comment
    document.querySelector("#list").appendChild(li)
  })
}

function pause(){
    if (time === true){
        time = false;
        pauseButton.innerText = "resume";
        document.getElementById("plus").removeEventListener("click",addOne)
        document.getElementById("minus").removeEventListener("click",subOne)
        document.getElementById("heart").removeEventListener("click",addHeart)
    }else if(time === false){
        time = true;
        pauseButton.innerText = "pause";
        initialize()
    }
}

function subOne(){
    const stringNum = document.getElementById("counter")
    let counterNum = parseInt(stringNum.innerHTML,10) - 1
    stringNum.innerHTML = counterNum
}

function addOne(){
    const stringNum = document.getElementById("counter")
    let counterNum = parseInt(stringNum.innerHTML,10) + 1
    stringNum.innerHTML = counterNum
}

function addHeart(){
    let li = document.createElement("p");
    li.innerText = document.getElementById("heart").innerText
    document.querySelector(".likes").appendChild(li)

}

function counting(){
    if (time === true){
        setTimeout(addOne,1000)
        setTimeout(counting,1000)
    }
}

function comment(){

}