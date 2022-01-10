// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue({
    el:"#app",
    data: {
        emails : ["ciao","tumadre","hello"]
    },
    methods: {
        getAxios : function () {
            for (let i = 0; i < 10; i++) {
                
                
            }
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/int")
            .then((response) => {
                console.log(response.data.response);
                this.numPlayer = response.data.response;
            })
            .catch((error) => {
                console.log(error);
            }); 
        }
    },

    created() {
        

        },
})