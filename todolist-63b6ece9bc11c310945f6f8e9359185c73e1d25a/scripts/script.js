let form = document.querySelector(".todoask")
let inp = form.querySelector("#todo")
let container = document.querySelector('.box')

let todos = []


form.onsubmit = (e) => {
    e.preventDefault();

    let todo = {
        id: Math.random(),
        title: inp.value,
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
    }


    todos.push(todo)

    reload(todos)
}



reload(todos)

function reload(arr) {
    container.innerHTML = ""

    for (let todo of arr) {


        // a
        let item = document.createElement("div")
        let wrapper = document.createElement("div")
        let info = document.createElement("div")
        let title_text = document.createElement("span")
        let time = document.createElement("span")
        let clsButton = document.createElement("button")
        let img = document.createElement("img")

        // b

       
        if (todo.isDone === false) {
            title_text.classList.add('line')
        } else if (todo.isDone === true) {
            title_text.classList.remove('line')
        }
        item.classList.add("item")
        wrapper.classList.add("wrapper")
        info.classList.add("info")
        title_text.classList.add("title")
        time.classList.add("time")
        clsButton.classList.add("del")

        img.src = "img/cls.svg"
        img.alt = "cls"

        title_text.textContent = todo.title
        time.innerHTML = todo.time

        // c
        item.append(wrapper)
        wrapper.append(info, clsButton)
        info.append(title_text, time)
        clsButton.append(img)

        container.append(item)

        title_text.onclick = () => {

            if (todo.isDone === false) {
                todo.isDone = true
                title_text.classList.remove('line')


            } else if (todo.isDone === true) {
                todo.isDone = false
                title_text.classList.add('line')

            }

        }
        let modal = document.querySelector('.modal')
        let close = document.querySelector('.close')
        let wrap = document.querySelector('.wrap')
        

        item.ondblclick = () => {
            modal.classList.add('show')
            let promt = prompt("Write there what would you change")
            title_text.innerHTML = promt
            todo.title = promt
           wrap.classList.add('opocity')
           container.classList.add('opocity')

            
        
        }

        close.onclick = () =>{
            modal.classList.remove('show')
           wrap.classList.remove('opocity')
           container.classList.remove('opocity')

           

        }

        /* let modal_input = document.querySelector('.modal-input')
        let change = document.querySelector('.change') */



    }


}



console.log(todos);
// CRUD


// create
// read
// update
// delete