// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

// var generateEmail = new Vue({
//     el:"#app",
//     data: {
//         emails : []
//     },
//     methods: {
//         getAxios : function () {
//             for (let i = 0; i < 10; i++) {
//                 axios
//                     .get("https://flynn.boolean.careers/exercises/api/random/mail")
//                     .then((response) => {   
//                         this.emails.push(response.data.response)
//                     })
//                     .catch((error) => {
//                         console.log(error);
//                     }); 
//             }
//         }
//     },

//     created() {
//         this.getAxios()
//     },
// })












var generateEmail = new Vue({
    el:"#app",
    data: {
       emails:[]
    },
    methods: {
       createEmails: function () {
           for (let i = 0; i < 10; i++) {
               axios
               .get("https://flynn.boolean.careers/exercises/api/random/mail")
               .then(res => {
                  this.emails.push(res.data.response)
                  console.log(res);
               })
               .catch(err => {
                   console.error(err); 
               })

               
           }
       }
    },

    created() {
       this.createEmails()
    },
})