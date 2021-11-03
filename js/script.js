Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function () {
    const vueApp = new Vue({
        el: "#app",
        data: {
            listaChat: [
                {
                    nome: "Mario Rossi",
                    avatar: "img/avatar_1.jpg",
                    messaggio: "ciao",
                    dataUltimoMessaggio: "10",
                },
                {
                    nome: "Riccardo Mengoni",
                    avatar: "img/avatar_1.jpg",
                    messaggio: "ciao",
                    dataUltimoMessaggio: "10",
                },
                {
                    nome: "Paolo Fontana",
                    avatar: "img/avatar_1.jpg",
                    messaggio: "ciao",
                    dataUltimoMessaggio: "10",
                },
                {
                    nome: "Michele Scotti",
                    avatar: "img/avatar_1.jpg",
                    messaggio: "ciao",
                    dataUltimoMessaggio: "10",
                },

            ],
            newMessage: ""

        }
    });
});