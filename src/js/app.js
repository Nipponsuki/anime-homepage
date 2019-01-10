import '../scss/app.scss';
import '../pug/index.pug';
import '@babel/polyfill';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.className += 'hidden';
  const loader1 = document.querySelector('.sk-chasing-dots');
  loader1.className += 'hidden';
});



const elements = {
  navbar: document.querySelector('.navbar'),
  toggleMenu: document.querySelector('.mobile-menu'),
  slideRightArrow:document.querySelector('.slider-arrows__r'),
  slideLeftArrow:document.querySelector('.slider-arrows__l'),
  animeTitle: document.querySelector('.anime-title'),
  animeDesc: document.querySelector('.wrapper__text'),
  headerPic: document.querySelector('.slider-1'),
  dots: document.querySelectorAll('.slider-controller__dot'),
  movies: document.querySelector('.movies__wrapper'),
  latestLink:document.querySelector('.latest'),
  commingSoonLink:document.querySelector('.cs'),
  inThLink:document.querySelector('.inth'),
  atHomeLink:document.querySelector('.ath'),
  moviesLinks: document.querySelectorAll('.movies__link')

};


elements.toggleMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
  elements.navbar.classList.toggle('navbar--is-shown');
  elements.toggleMenu.classList.toggle('mobile-menu--active');
}


let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    elements.navbar.style.top = '0';
  } else {
    elements.navbar.style.top = '-50px';
  }
  prevScrollpos = currentScrollPos;
};



const imgSources = [
  '../../assets/images/tokyo-1.jpg?noresize',
  '../../assets/images/onepunch-2.jpg?noresize',
  '../../assets/images/attack-1.jpg?noresize',
  '../../assets/images/slider-2.jpg?noresize'
];

const des = [
  `A Tokyo college student is attacked by a ghoul, a superpowered 
  human who feeds on human flesh. He survives, but has become part 
  ghoul and becomes a fugitive on the run.`,

  `The story of Saitama, a hero that does it just for fun 
  and can defeat his enemies with a single punch.`,

  `After his hometown is destroyed and his mother is killed, 
  young Eren Yeager vows to cleanse the earth of the giant humanoid 
  Titans that have brought humanity to the brink of extinction.`,

  `Hinata Shouyou, a short middle school student, gained a sudden love of 
  volleyball after watching a national championship match on TV. Determined to 
  become like the championship's star player, a short boy nicknamed "the small giant", 
  Shouyou joined his school's volleyball club.
  `
];
const titles = [
  'Tokyo Ghoul',
  'One Punch Man',
  'Attack on Titan',
  'Haikyu!!'
];


let current = 0;
function slideLeft() {
  //reset();
  elements.headerPic.src = imgSources[current - 1];
  elements.animeDesc.innerHTML = des[current - 1];
  elements.animeTitle.innerHTML = titles[current - 1];
  
  for (let i = 0; i < elements.dots.length; i++) {
    elements.dots[current-1].classList.toggle('current');
  }
  current--;
}

// Show next
function slideRight() {
  elements.headerPic.src = imgSources[current + 1];
  elements.animeDesc.innerHTML = des[current + 1];
  elements.animeTitle.innerHTML = titles[current + 1];

  for (let i = 0; i < elements.dots.length; i++) {
    elements.dots[current+1].classList.toggle('current');
  }

  current++;
}

// Left arrow click
elements.slideLeftArrow.addEventListener("click", function() {
  if (current === 0) {
    current = imgSources.length;
  }
  slideLeft();
});

// Right arrow click
elements.slideRightArrow.addEventListener("click", function() {
  if (current === imgSources.length - 1) {
    current = -1;
  }
  slideRight();
});




const PageState = function() {
  let currentState = new latest(this);

  this.init = function() {
    this.change(new latest);
  };

  this.change = function(state) {
    currentState = state;
  };
};

// Home State
const latest = function(page) {

 // elements.latestLink.classList.toggle('none-active');

  elements.movies.innerHTML = `
    <div class="movies__wrapper">
    <div class="text">
        <h2 class="text__heading active">Discover new movies</h2>
        <p class="text__paragraph active">On the big screen and at home</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/latest-1.jpg?noresize" />
        <h2 class="card__title active">Fate/Stay Night <br/>Heaven’s Feel</h2>
        <p class="card__text none-active">In Theaters August 18</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/latest-2.jpg?noresize" />
        <h2 class="card__title active">Kizumonogatari <br/>Part 3</h2>
        <p class="card__text none-active">In Theaters October 10</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/latest-3.jpg?noresize" />
        <h2 class="card__title active">No Game No <br/>Life Zero</h2>
        <p class="card__text none-active">In Theaters September 04</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/latest-4.jpg?noresize" />
        <h2 class="card__title active">Sword Art Online: <br/>Ordinal Scale</h2>
        <p class="card__text none-active">In Theaters August 20</p>
    </div>
  </div>
  `;
};

// About State
const commingSoon = function(page) {
  //elements.commingSoonLink.classList.toggle('none-active');

  elements.movies.innerHTML = `
    <div class="movies__wrapper">
    <div class="text">
        <h2 class="text__heading active">Discover new movies</h2>
        <p class="text__paragraph active">On the big screen and at home</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/soon-1.jpg?noresize" />
        <h2 class="card__title active">Kuroko no Basket: <br/>Last Game</h2>
        <p class="card__text none-active">Coming Soon</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/soon-2.jpg?noresize" />
        <h2 class="card__title active">Kuroshitsuji:<br/>Book of the Atlantic</h2>
        <p class="card__text none-active">Coming Soon</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/soon-3.jpg?noresize" />
        <h2 class="card__title active">Blame!</h2>
        <p class="card__text none-active">Coming Soon</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/soon-4.jpg?noresize" />
        <h2 class="card__title active">Mary to  <br/>Majo no Hana</h2>
        <p class="card__text none-active">Coming Soon</p>
    </div>
  </div>
`;
};

// Contact State
const atTheaters = function(page) {
  //elements.inThLink.classList.toggle('none-active');
  elements.movies.innerHTML = `
  <div class="movies__wrapper">
    <div class="text">
        <h2 class="text__heading active">Discover new movies</h2>
        <p class="text__paragraph active">On the big screen and at home</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/theather-1.jpg?noresize" />
        <h2 class="card__title active">Your Name</h2>
        <p class="card__text none-active">In Theaters May 11</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/theather-2.jpg?noresize" />
        <h2 class="card__title active">In This Corner<br/>of the World</h2>
        <p class="card__text none-active">In Theaters April 08</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/theather-3.jpg?noresize" />
        <h2 class="card__title active">The Tale <br/>of Princess Kaguya</h2>
        <p class="card__text none-active">In Theaters January 01</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/theather-4.jpg?noresize" />
        <h2 class="card__title active">A Letter<br/>to Momo</h2>
        <p class="card__text none-active">In Theaters Februaly 05</p>
    </div>
  </div>
`;
};
const atHome = function(page) {
  //elements.atHomeLink.classList.toggle('none-active');
  elements.movies.innerHTML = `
  <div class="movies__wrapper">
    <div class="text">
        <h2 class="text__heading active">Discover new movies</h2>
        <p class="text__paragraph active">On the big screen and at home</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/home-1.jpg?noresize" />
        <h2 class="card__title active">The Girl Who Leapt<br/>through Time</h2>
        <p class="card__text none-active">At home</p>
    </div>
    <div class="card"> <img class="card__img" src=assets/images/home-2.jpg?noresize" />
        <h2 class="card__title active">Tekkonkinkreet</h2>
        <p class="card__text none-active">At home</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/home-3.jpg?noresize" />
        <h2 class="card__title active">Paprika</h2>
        <p class="card__text none-active">At home</p>
    </div>
    <div class="card"> <img class="card__img" src="assets/images/home-4.jpg?noresize" />
        <h2 class="card__title active">Spirited Away</h2>
        <p class="card__text none-active">At home</p>
    </div>
  </div>
`;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// Home
elements.latestLink.addEventListener('click', (e) => {
  page.change(new latest);

  e.preventDefault();
});

// About
elements.commingSoonLink.addEventListener('click', (e) => {
  page.change(new commingSoon);
  //elements.commingSoonLink.classList.toggle('none-active');
  e.preventDefault();
});

// Contact
elements.inThLink.addEventListener('click', (e) => {
  page.change(new atTheaters);
  //elements.inThLink.classList.toggle('none-active');

  e.preventDefault();
});
elements.atHomeLink.addEventListener('click', (e) => {
  page.change(new atHome);
  //elements.atHomeLink.classList.toggle('none-active');

  e.preventDefault();
});

