import { LitElement, html, css } from "lit-element";

class Prim extends LitElement{
    static get properties(){
        return{
            
        }
    }

    render(){
        return html`
        <ul class="menuCabecera">
            <li class="elementoCabecera"><a hrf="#" >Menu</a></li>
        </ul> 
        `;
    }

    static get styles(){
        return css`  
        ul{
            height: 5vh;
            margin: 0px;
            padding-top:0.4%;
            text-align: right;
            background-color: #696969;
        }
            .elementoCabecera:hover{
                cursor: pointer;
                background-color: #C0C0C0;
            }
            .elementoCabecera{
                height: 100%;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 1.5em;
                color: white;                
                display: inline-block;
                padding-inline: 1%;
            }
        `;
    }


}

customElements.define('modulo-menu',Prim);