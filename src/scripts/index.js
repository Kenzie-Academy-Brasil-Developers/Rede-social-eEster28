import { posts } from "./database.js"

function createMidiaPost(element) {

    const conteinerPost = document.createElement('article');
    conteinerPost.id = "conteiner__filter";

    const outButton = document.createElement('button');
    outButton.classList.add('button__out');
    outButton.innerText = 'X';

    const conteinerProfile = document.createElement('div');
    conteinerProfile.classList.add('post');

    const imagePost = document.createElement('img');
    imagePost.classList.add('post__image');
    imagePost.src = element.img;
    imagePost.alt = element.user;

    const divInformation = document.createElement('div');
    const namePost = document.createElement('h2');
    namePost.classList.add("title2");
    namePost.id= "post__name";
    namePost.innerText = element.user;

    const professionPost = document.createElement('p');
    professionPost.classList.add("text2");
    professionPost.id="post__profision";
    professionPost.innerText = element.stack;

    const titlePost = document.createElement('h2');
    titlePost.classList.add('title1');
    titlePost.id="title__post"
    titlePost.innerText = element.title;

    const contentPost = document.createElement('p');
    contentPost.classList.add('text1');
    contentPost.id="post__content";
    contentPost.innerText = element.text;

    divInformation.append(namePost, professionPost);
    conteinerProfile.append(imagePost, divInformation);
    conteinerPost.append(outButton, conteinerProfile, titlePost, contentPost);
    
    return conteinerPost;
}

function closeButton(){
    const button= document.querySelector('.button__out')
    const modalController = document.querySelector('#modal__controller')
  
      button.addEventListener('click', () => {
         modalController.close();
      })

}

function openPostModal(array) {

    const modalController = document.querySelector('#modal__controller');
    const button = document.querySelectorAll('.post__button');

    for (let i = 0; i < button.length; i++) {
        const openButon = button[i]

        openButon.addEventListener('click', function (event) {
            modalController.innerHTML = '';

            const filter = posts.find(post => post.id === Number(event.target.id))

            const callingFunction = createMidiaPost(filter)

            modalController.append(callingFunction)

            modalController.showModal();
            closeButton()
        })
    }
}

openPostModal(posts);
