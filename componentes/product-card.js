class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }
    static get observedAttributes() {
        return ["img", "title", "price", "description", "collection"];
      }
    attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "img") {
        this.img = newVal;
    }
    if (attr === "title") {
        this.title = newVal;
    }
    if (attr === "price") {
        this.price = newVal;
    }
    if (attr === "description") {
        this.description = newVal;
    }
    if (attr === "collection") {
        this.collection = newVal;
    }
    }
    getTemplate() {
        const template = document.createElement("template")
        template.innerHTML = `
            <main class="container">
                <section class="imgBox">
                    <img src="${this.img}" alt="Zapatillas deportivas para correr">
                </section>
                <section class="details">
                    <div class="content">
                        <h2>${this.title}
                            <span>${this.collection}</span>
                        </h2>
                        <p>${this.description}</p>
                        <div class="pricing">
                            <h3>${this.price}</h3>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </section>
            </main>
            ${this.getStyles()}
        `;
        return template
    }
    getStyles(){
        return `
        <style>
            :host {
                --primary-color: #5a6cb2;
                width: 80%;
                max-width: 990px;
                min-width: 280px;
                margin: 0 auto;
            }
            .container{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                width: 900px;
                height: 600px;
                margin: 20px;
                background-color: #fff;
            
            }
            .container .imgBox{
                width: 50%;
                height: 100%; 
                background-color:var(--primary-color);
                display: flex;
                justify-content: center;
                position: relative;  
            }
            .container .imgBox:before{
                position: absolute;
                content: "Nike";
                color:#000;
                top: 20px;
                left: 20px;
                font-size: 8em;
                font-weight: 800;
                opacity: .1;
            }
            .container .imgBox img{
                width: 720px;
                height: 480px;
                transform: rotate(-30deg);
                position: relative;
                top: 100px;
                left: -45px;
            }
            .container .details{
                box-sizing: border-box;
                width: 50%;
                height: 100%;
                padding: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .container .details h2{
                font-size: 2.5em;
                line-height: .8em;
                color: #444;
                margin-bottom: 24px;
            }
            .container .details h2 span {
            font-size: 0.4em;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #999;
            }
            .container .details p{
                max-width: 85%;
                margin-left: 60px;
                margin-bottom: 40px;
                color: #333;
                font-size: 15px;
            }
            .container .details .pricing{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 80px;
            }
            .container .pricing h3{
                font-size: 2.5em;
                color: #a2a2a2;
            }
            .container .pricing button {
                font-size: 16px;
                color: #fff;
                letter-spacing: 1px;
                font-weight: 600;
                text-transform: uppercase;
                border-radius: 30px;
                padding: 16px;
                background-color: var(--primary-color);
                cursor: pointer;
            }
            @media (max-width: 1080px){
                .container{
                    width: auto;
                    height: auto;    
                }
                .container .imgBox,
                .container .details{
                    box-sizing:border-box;
                    width: 100%;
                    padding: 30px;
                    height: auto;
                }
                .container .imgBox img{
                    width: 100%;
                    height: auto;
                    left: initial;
                    transform: rotate(0deg);
                }
                .container .details p{
                    width: 100%;
                    margin-left: 0;
                }
            }
        </style>
        `
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("product-card", productCard)