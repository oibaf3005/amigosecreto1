const lista = document.getElementById("listaAmigos")
const resultado = document.getElementById("resultado")
let array = []

function adicionarAmigo() {
    let inputName = document.getElementById('amigo').value
    if (inputName == "") {
        alert("Campo de nome está vazio")
    } else {
        array.push(inputName)
        document.getElementById("amigo").value = ""
        resultado.innerHTML = ""
        lista.innerHTML = ""
        array.forEach(listAmigos => {
            lista.innerHTML += 
            `
                <li>
                    <p>
                        ${listAmigos}
                    </p>
                </li>

            `
        })

    }
}

function sortearAmigo(){
    if(array.length > 0){
        lista.innerHTML = ""
        resultado.innerHTML = ""
        let index = parseInt(Math.random() * (array.length - 0) + 0)
        resultado.innerHTML = `Seu amigo secreto é : ${array[index]}`
        
    }
        
        
        
} 