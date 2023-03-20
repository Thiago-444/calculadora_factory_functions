function criaCalculadora() {

    return {
        display: document.querySelector('.display'),

        clearDisplay() {
            this.display.value = '';
        },

        apagaUltimo() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaCalculo() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('conta invalida');
                    return
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('conta invalida');
                return;
            }
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13) {
                    this.realizaCalculo();
                }
            });
        },

        inicia() {
            this.cliquebotoes();
            this.pressionaEnter();
        },
        cliquebotoes() {
            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el.classList.contains('btn-num')) { //se o click for em um elemento de classe 'btn-num'
                    this.btnParaDisplay(el.innerText); //execute a função que concatena o innerText dos buttons no input
                }
                if (el.classList.contains('btn-clear')) this.clearDisplay();

                if (el.classList.contains('btn-del')) this.apagaUltimo();

                if(el.classList.contains('btn-igual')) this.realizaCalculo();

            }.bind(this)); //essa função usa o this do document apenas da função anonima do addEventListener
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    }
}

const calculadora = criaCalculadora();
calculadora.inicia()
