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
            <li class="elementoCabecera"><a hrf="#">Dificultad</a></li>
            <li class="elementoCabecera"><a hrf="#" >Color</a></li>
        </ul> 
        `;
    }

    static get styles(){
        return css`  
            .elementoCabecera:hover{
                background-color: #666666;
                cursor: pointer;
            }
            .elementoCabecera{
                font-family: Arial, Helvetica, sans-serif;
                font-size: 1.5em;
                color: white;                
                display: inline-block;
                padding: 10px;
            }
        `;
    }


}

customElements.define('modulo-menu',Prim);