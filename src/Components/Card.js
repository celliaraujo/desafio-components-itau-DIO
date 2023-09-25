class Card extends HTMLElement{
    
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    } 

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");        

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card-left");

        const divProduto = document.createElement("div");

        const icone = document.createElement("img");
        icone.src = this.getAttribute("icone");

        const produto = document.createElement("span");
        produto.textContent = this.getAttribute("produto");

        divProduto.appendChild(icone);
        divProduto.appendChild(produto);

        const titulo = document.createElement("h3");
        titulo.textContent = this.getAttribute("titulo")

        const descricao = document.createElement("p");
        descricao.textContent = this.getAttribute("descricao")

        const botao = document.createElement("a");
        botao.textContent = this.getAttribute("botao");
        botao.href = this.getAttribute("link") || "#";

        cardLeft.appendChild(divProduto);
        cardLeft.appendChild(titulo);
        cardLeft.appendChild(descricao);
        cardLeft.appendChild(botao);

        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card-right");        

        const image = document.createElement("img");
        image.src = this.getAttribute("photo");

        const size = this.getAttribute("size");
        width = size == "full"? "width: 90vw;" : "width: 44.5vw;";

        console.log(width);

        cardRight.appendChild(image);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
            .card{
                ${width}
                height: 220px;
                border: 1px solid #d6d0cc;
                border-radius: 0.6rem;

                padding: 0;

                display: flex;
                flex-direction: row;
                justify-content: space-between;                
                margin: 0 5px 10px 5px;
            }
            .card-left{
                width: 65%;
                display: flex;
                flex-direction: column;
                padding-left: 10px;
            }
            .card-left>div{
                color: #222;
                margin-bottom: 10px;
                margin-top: 10px;

                display: flex;
                flex-direction: row;
                align-items: center;

            }
            .card-left>div>img{
                width: 20px;
                height: 15px;
                margin-right: 10px;
                object-fit: contain;
                object-position: 50% 50%;

            }
            .card-left>h3{
                font-size: 1.2rem;   
                margin: 0;  
                margin-bottom: 10px;           

            }
            .card-left>p{
                height: 100px;
                margin: 0;
                color: #56504c;
            }
            .card-left>a{
                max-width: 120px; 
                text-decoration: none;
                text-align: center;
                color:#605c59;
                font-weight: 500;
                border: 1px solid #231d19;
                border-radius: 0.4rem;
                padding: 5px 30px; 
                margin-bottom: 10px;         
            }
            .card-left>a:hover{
                background-color: rgba(7,8,8,.1);
            }
            .card-right{
                width: 35%;
                max-width: 200px;
                display:flex;

            }
            .card-right>img{
                width: 100%;
                object-fit: cover;   
                border-radius: 0.6rem;
                object-position: left bottom;             
            }
        `;

        console.log(style);

        return style;

    }
}

var width = "";

customElements.define("new-card", Card);