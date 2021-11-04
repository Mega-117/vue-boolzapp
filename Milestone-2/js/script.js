Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function () {
    const vueApp = new Vue({
        el: "#app",
        data: {
            listaChat: [
                {
                    nome: "Mario Rossi",
                    avatar: "img/avatar_1.jpg",
                    ultimoMessaggio: "ciao come stai ?",
                    dataUltimoMessaggio: "10/08/2021 16:35",
                    id: "chatUtente1"
                },
                {
                    nome: "Riccardo Mengoni",
                    avatar: "img/avatar_2.jpg",
                    ultimoMessaggio: "ciao come stai ?",
                    dataUltimoMessaggio: "10/08/2021 16:35",
                    id: "chatUtente2"
                },
                {
                    nome: "Paolo Fontana",
                    avatar: "img/avatar_3.jpg",
                    ultimoMessaggio: "ciao come stai ?",
                    dataUltimoMessaggio: "10/08/2021 16:35",
                    id: "chatUtente3"
                },
                {
                    nome: "Michele Scotti",
                    avatar: "img/avatar_4.jpg",
                    ultimoMessaggio: "ciao come stai ?",
                    dataUltimoMessaggio: "10/08/2021 16:35",
                    id: "chatUtente4"
                },
                /* {
                    nome: "Luigi Rossi",
                    avatar: "img/avatar_5.jpg",
                    ultimoMessaggio: "ciao come stai ?",
                    dataUltimoMessaggio: "10/08/2021 16:35",
                },
                {
                    nome: "Laura Mengoni",
                    avatar: "img/avatar_6.jpg",
                    ultimoMessaggio: "ciao come stai ?",
                    dataUltimoMessaggio: "10/08/2021 16:35",
                },
                {
                    nome: "Roberto Fontana",
                    avatar: "img/avatar_7.jpg",
                    ultimoMessaggio: "ciao come stai ?",
                    dataUltimoMessaggio: "10/08/2021 16:35",
                },
                {
                    nome: "Massimo Scotti",
                    avatar: "img/avatar_8.jpg",
                    ultimoMessaggio: "ciao come stai ?",
                    dataUltimoMessaggio: "10/08/2021 16:35",
                }, */

            ],
            newMessage: "",
            listaMessaggi: [
                {
                    text: "Messaggio inviato",
                    type: "sended",
                    id: "chatUtente1"
                },
                {
                    text: "Messaggio ricevuto",
                    type: "recived",
                    id: "chatUtente1"
                }
            ]

        },
        methods: {
            printMessage() {

                this.listaMessaggi.push({
                    text: this.newMessage,
                    type: "sended",
                });
                this.newMessage = "";
            }
        }
    });
});