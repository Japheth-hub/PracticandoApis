const base_url = "https://jsonplaceholder.typicode.com/posts";
const  HTMLresponse = document.querySelector("#contenedor");
let elementosPorPagina = 6;
let paginas;
let numeroPagina = 0;
let pagina = 0;
let next = document.getElementById("next");
let prev = document.getElementById("prev");

data(pagina);


// let paginas = Math.ceil(post.length/elementosPorPagina);
// console.log(paginas);

next.addEventListener("click", function(){
    HTMLresponse.innerHTML = "";
    numeroPagina ++;
    console.log(numeroPagina)
    let ultimaPagina = Math.floor(paginas/elementosPorPagina);
    // console.log(ultimaPagina)
    if(numeroPagina >= ultimaPagina){
        numeroPagina = ultimaPagina;
    }
    pagina = numeroPagina * elementosPorPagina;
    data(pagina);

})
prev.addEventListener("click", function(){
    HTMLresponse.innerHTML = "";
    numeroPagina --
    if(numeroPagina <= 0){
        numeroPagina = 0
    } 
    console.log(numeroPagina)
    pagina = numeroPagina * elementosPorPagina;
    data(pagina)
})
function data(pagina){
    fetch(base_url)
    .then((Response) => Response.json())
    .then((post) => {
        // console.log(post)
        // console.log(post.length)
        paginas = post.length;
        mostrarPost(post, pagina)
            });
}


function mostrarPost(post, pagina){
    for(let i = (0 + pagina); i<=(5 + pagina); i++){
        if(i<=paginas-1){
            let div = document.createElement("div");
        div.classList.add("caja");
        let id = document.createElement("h6");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");
        id.appendChild(document.createTextNode(`${post[i].id}`));
        h1.appendChild(document.createTextNode(`${post[i].title}`));
        p.appendChild(document.createTextNode(`${post[i].body}`));
        div.appendChild(id)
        div.appendChild(h1);
        div.appendChild(p);
        HTMLresponse.appendChild(div);
        }
    }
}





    fetch(base_url)
        .then((Response) => Response.json())
        .then((elemento) => {
            // console.log(elemento);
            let totalPaginas = Math.ceil(elemento.length/elementosPorPagina)
            // console.log(totalPaginas)
            let divPaginas = document.getElementById("paginas");
            for(let i = 1; i<=totalPaginas; i++){
                // console.log(i)
                let button = document.createElement("button");
                button.id = "pagina";
                button.appendChild(document.createTextNode(`${i}`))
                divPaginas.appendChild(button)
                button.addEventListener("click", function(){
                    HTMLresponse.innerHTML = "";
                    numeroPagina = i-1;
                    console.log(numeroPagina)
                    pagina = numeroPagina * elementosPorPagina;
                    data(pagina)
                })
            }
        })




