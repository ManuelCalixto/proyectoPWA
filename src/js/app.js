let main;
let modalPost;
let addPost;
let btnShowPost;
let btnCancelPost;

//CUANDO SE CARGUE TODO NUESTRO DOM
window.addEventListener('load', () => {
    main = document.querySelector('#main');
    modalPost = document.getElementById('modal-post-section');
    addPost = document.getElementById('btn-upload-post');
    btnShowPost = document.getElementById('btn-post-submit');
    btnCancelPost = document.getElementById('btn-post-cancel');
    
    addPost.addEventListener('click', showPostModal);
    btnCancelPost.addEventListener('click',closePostModal);
});

//funciones
const showPostModal = () => {
    main.style.display = 'none';
    modalPost.style.display = 'block';
    setTimeout(() => {
         modalPost.style.transform = 'translateY(0)';1
    }, 1);
}

const closePostModal = () => {
    main.style.display = 'block'; 
    modalPost.style.transform = 'translateY(100vh)';
}








