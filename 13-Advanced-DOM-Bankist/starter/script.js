'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach((btn) => btn.addEventListener('click' ,openModal ))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//////////////////////////////// Page Navigation \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // We are doing this for smooth scrolling 
// // But this approach is don't follow dry principle as we are repeating out function for every naclink element 
// document.querySelectorAll('.nav__link').forEach( function(el){
//   el.addEventListener('click' , function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// })


// 1. Add event listener to common parent element 
// 2. Determine what element originated the event 

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();
  if(e.target.classList.contains('nav__link')){ // This ensure that function activates when element with nav__link class gets click not empty smace inside nav__links as there could be lot other elements in navlink 
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});

/////////////////////////////////// Scrolling \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function(e){
  section1.scrollIntoView({behavior:'smooth'});
})


/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body); 
// const header = document.querySelector('.header');
// const allSection = document.querySelectorAll('.section'); //Return nodelist

// const allbuttons = document.getElementsByTagName('button'); // Return HTML Collection -> which will update automatically
// const buttons = document.getElementsByClassName('btn'); // Same as above


////////////////////////// Create and inserting elements \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const message = document.createElement('div');
// message.classList.add('cookie-message');
//   // message.textContent = 'We use cookies for improved functionalities and analytics.';
// message.innerHTML = 'We use cookies for improved performance and functionalities.<button class="btn btn--close-cookie">Got it!</button>'

// // header.prepend(message);
// header.append(message);  // Add element as child of target element. Here, message is child of header 
// header.append(message.cloneNode(true)); It add the element multiple times in DOM as by default it is not possible 

// header.after(message) -> Here, we are adding as sibling element. header and message are siblings 
// header.before(message)

// // Delete the message 
// document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//   message.remove();
// })

////////////////////////////////// Styles \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// message.style.backgroundColor = '#37383d'; // this will apply as inline styles 
// message.style.width = '120%'; // this will apply as inline styles

// console.log(message.style.width);   // get result as it's inline style 
// console.log(message.style.height); // here, we will get empty result, as this style mentioned in stylesheet 

// console.log(getComputedStyle(message).height) // This will have the access of stylesheet, hence we will get all styles of 'message' element 
// console.log(getComputedStyle(message).color)  // Return result in string form 

// // Changing value of existing styling 
// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
// document.documentElement.style.setProperty('--color-primary', 'orangered'); Select root folder where we have define CSS colors and then change properties with 'setProperties' attribute


///////////////////////////////////// Attribute \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt)
// console.log(logo.src)
// console.log(logo.className) // Read standard attributes only such as class, id, alt, src
// logo.alt = 'new logo' -> this will change text in alt tags

// For non-standard attributes 
// console.log(logo.designer); we will get undefined 
// console.log(logo.getAttribute('designer')); // Consider, we have designer attribute in logo

// console.log(logo.src); // Absolute path -> http://127.0.0.1.8080/img/logo.png
// console.log(logo.getAttribute('src')); //relative path -> img/logo.png

// logo.setAttribute('company', 'Bankist') // Create company attribute and assign/overridde it's value with bankist



/////////////////////////// Data Attributes \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// console.log(logo.dataset.versionNumber); // get data-version-number attribute's value 


////////////////////////////// Classes \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// logo.classList.add('c', 'j');     // Add multiple classes 
// logo.classList.remove('c', 'j');  // remove those classes from class
// logo.classList.toggle('c');       // Adds class if not present, removes if present
// logo.classList.contains('c')      // Checks if a class exists

// logo.className = 'jonas'; -> Don't use this 


///////////////////////////////// Smooth-Scrolling \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1')

// btnScrollTo.addEventListener('click', function(e){
//   // const s1coords = section1.getBoundingClientRect();
//   // console.log(s1coords) //Get values related to positions and co-ordinates
  
//   // console.log('Current Scroll(X/Y)', window.pageXOffset, window.pageYOffset); // Coordinate of current position of element when page is scrolled 
//   // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth); 
//   // // height and width of current viewports 

//   // /////// Scrolling

//   // window.scrollTo({
//   //   left: window.pageXOffset + s1coords.left,
//   //   top: window.pageYOffset + s1coords.top, // here, we are taking absolute distance 
//   //   behavior: "smooth"  // if we remove it then it scrolls directly, no smooth animation 
//   // })

//   /////// Modern way of doing Scrolling 
//   section1.scrollIntoView({behavior:'smooth'});
// })



////////////////////////////////////// Events \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function (e) {
    alert('Done, mouse in boundry');
});

// old school -> can''t add multiple event listener on same element -> in above  
// h1.onmouseenter = function (e) {
//     alert('Done, mouse in boundry');
// };

setTimeout(() => {
  h1.removeEventListener('mouseenter', function (e) {
    alert('Done, mouse in boundry');
  })
}, 3000);  // this will remove event-listner


/////////////////////////////////// Event Propagation \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const randomInt = (min, max) => Math.floor(Math.random() * (max-min+1) + min);
// const randomColor = () => `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;

// document.querySelector('.nav__link').addEventListener('click' , function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target, e.currentTarget);
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click' , function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click' , function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });