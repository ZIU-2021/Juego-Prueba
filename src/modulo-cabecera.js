import { LitElement, html, css } from "lit-element";

class Cabecera extends LitElement{
    static get properties(){
        return{
            
        }
    }

    render(){
        return html`
            <header class="cabecera">Este es el modulo cabecera</header>
        `;
    }

    static get styles(){
        return css`
            .cabecera{
                background-color: gray;
                color: white;
            }
        `;
    }


}

customElements.define('modulo-cabecera',Cabecera);