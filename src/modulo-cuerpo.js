import {LitElement, html,css} from 'lit-element';

class ModuloCuerpo extends LitElement {

    static get properties(){
        return{
            nombreColor:{type: String},
            opcColor:{type: Boolean}
        };
    }

    constructor(){
        super();
        this.nombreColor='gris'
        this.opcColor=false;
    }

    clickHandler(){
        this.opcColor=!this.opcColor;
    }

    render() {
        return html`
            <div class="contenedorPrincipal" @click='${this.clickHandler}' id=${this.opcColor?'gray':'blue'}>
                Este es el contenedor principal
            </div>
        `;
    }

    static get styles() {
        return css`
                .contenedorPrincipal{
                    height: 88.5vh;
                    color: wheat;
                }
                #gray{
                    background-color: gray;
                }
                #blue{
                    background-color: blue;
                }            
            `;
    }

}

customElements.define('modulo-cuerpo', ModuloCuerpo);