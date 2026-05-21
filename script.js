// =========================
// FILE: script.js
// =========================

const music = document.getElementById("music");


/* ========================= */
/* LETTER PHOTO SLIDER */
/* ========================= */

const letterPhotos = [
  "assets/letter-photo1.jpg",
  "assets/letter-photo2.jpg",
  "assets/letter-photo3.jpg"
];

let currentPhoto = 0;


/* ========================= */
/* LOADER */
/* ========================= */

window.onload = () => {

  setTimeout(() => {

    gsap.to("#loader",{
      opacity:0,
      duration:1,
      ease:"power3.out",

      onComplete:() => {

        document.getElementById("loader")
        .style.display = "none";

      }

    });

  },1500);

};


/* ========================= */
/* OPEN ENVELOPE */
/* ========================= */

document.getElementById("openEnvelope")
.addEventListener("click", () => {

  music.play();

  gsap.timeline()

  .to(".envelope",{
    scale:2,
    opacity:0,
    rotate:10,
    duration:1,
    ease:"power4.inOut"
  })

  .to(".main-title",{
    opacity:0,
    y:-60,
    duration:0.8
  },0);

  setTimeout(() => {

    nextScene(2);

  },1000);

});


/* ========================= */
/* NEXT SCENE */
/* ========================= */

function nextScene(sceneNumber){

  const currentScene =
  document.querySelector(".scene.active");

  const nextScene =
  document.getElementById(`scene${sceneNumber}`);

  if(currentScene === nextScene) return;

  gsap.to(currentScene,{

    opacity:0,
    scale:1.1,
    filter:"blur(15px)",
    duration:0.8,
    ease:"power3.inOut",

    onComplete:() => {

      currentScene.classList.remove("active");

      nextScene.classList.add("active");

      gsap.fromTo(nextScene,

      {
        opacity:0,
        scale:0.9,
        filter:"blur(15px)"
      },

      {
        opacity:1,
        scale:1,
        filter:"blur(0px)",
        duration:1,
        ease:"power4.out"
      });

    }

  });

}


/* ========================= */
/* BACK SCENE */
/* ========================= */

function backScene(sceneNumber){

  const currentScene =
  document.querySelector(".scene.active");

  const targetScene =
  document.getElementById(`scene${sceneNumber}`);

  if(currentScene === targetScene) return;

  gsap.to(currentScene,{

    opacity:0,
    scale:1.1,
    filter:"blur(15px)",
    duration:0.8,
    ease:"power3.inOut",

    onComplete:() => {

      currentScene.classList.remove("active");

      targetScene.classList.add("active");

      gsap.fromTo(targetScene,

      {
        opacity:0,
        scale:0.92,
        filter:"blur(15px)"
      },

      {
        opacity:1,
        scale:1,
        filter:"blur(0px)",
        duration:1,
        ease:"power4.out"
      });

    }

  });

}


/* ========================= */
/* FLOATING POLAROID */
/* ========================= */

gsap.to(".polaroid",{

  y:-15,
  duration:2,
  stagger:0.2,
  repeat:-1,
  yoyo:true,
  ease:"sine.inOut"

});


/* ========================= */
/* LETTER PHOTO NEXT */
/* ========================= */

function nextPhoto(){

  currentPhoto++;

  if(currentPhoto >= letterPhotos.length){

    currentPhoto = 0;

  }

  changePhoto();

}


/* ========================= */
/* LETTER PHOTO PREV */
/* ========================= */

function prevPhoto(){

  currentPhoto--;

  if(currentPhoto < 0){

    currentPhoto = letterPhotos.length - 1;

  }

  changePhoto();

}


/* ========================= */
/* CHANGE PHOTO */
/* ========================= */

function changePhoto(){

  const photo =
  document.getElementById("letterPhoto");

  gsap.to(photo,{

    opacity:0,
    scale:0.9,
    duration:0.3,

    onComplete:() => {

      photo.src =
      letterPhotos[currentPhoto];

      gsap.to(photo,{

        opacity:1,
        scale:1,
        duration:0.5,
        ease:"power3.out"

      });

    }

  });

}


/* ========================= */
/* FINALE */
/* ========================= */

function showFinale(){

  gsap.timeline()

  .to("#scene6",{
    background:"#ff0055",
    duration:0.8
  })

  .to(".ending-title",{
    scale:1.1,
    duration:0.4,
    yoyo:true,
    repeat:1
  },0);

  alert("🎉 HAPPY BIRTHDAY 🎉");

}


/* ========================= */
/* AUTO HERO ANIMATION */
/* ========================= */

gsap.from(".hero-content",{

  y:50,
  opacity:0,
  duration:1.5,
  ease:"power3.out"

});


/* ========================= */
/* GIFT CARD FLOAT */
/* ========================= */

gsap.to(".gift-card",{

  y:-10,
  duration:2,
  stagger:0.2,
  repeat:-1,
  yoyo:true,
  ease:"sine.inOut"

});