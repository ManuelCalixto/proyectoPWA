let main;
let modalPost;
let addPost;
let btnShowPost;
let btnCancelPost;
let eventoModalPrompt;
let btnInstall;

// CUANDO SE CARGUE TODO NUESTRO DOM
window.addEventListener('load', async () => {
    main = document.querySelector('#main');
    modalPost = document.getElementById('modal-post-section');
    addPost = document.getElementById('btn-upload-post');
    btnShowPost = document.getElementById('btn-post-submit');
    btnCancelPost = document.getElementById('btn-post-cancel');
    btnInstall = document.getElementById("banner-install");

    // Eventos de modal
    addPost.addEventListener('click', showPostModal);
    btnCancelPost.addEventListener('click', closePostModal);

    // Registrar service worker
    if ('serviceWorker' in navigator) {
        const response = await navigator.serviceWorker.register('sw.js');
        if (response) {
            console.log("Service worker registrado");
        }
    }

    // Evento para instalar PWA
    window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        eventoModalPrompt = e;
        btnInstall.style.display = "block";
        // console.log("Evento beforeinstallprompt disparado");
    });
    //detectar si la app ya está instalada
    btnInstall.addEventListener("click", async () => {
        if (!eventoModalPrompt) {
            console.log("❌ No hay eventoModalPrompt disponible");
            return;
        }
        eventoModalPrompt.prompt();
        const {prueba} = await eventoModalPrompt.userChoice;
        // console.log(prueba);
        eventoModalPrompt = null;
        btnInstall.style.display = "none";
    });
});

// función que muestra el modal
const showPostModal = () => {
    main.style.display = "none";
    modalPost.style.display = "block";
    setTimeout(() => {
        modalPost.style.transform = "translateY(0)";
    }, 1);
};

// función que oculta el modal
const closePostModal = () => {
    main.style.display = "block";
    modalPost.style.transform = "translateY(100vh)";
};

