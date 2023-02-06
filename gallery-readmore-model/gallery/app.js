const addMovieModal = document.getElementById("add-modal-1");
const startAddMovieButton = document.querySelector("#btn1");

const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  // function() {}
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const cancelAddMovie = () => {
  toggleMovieModal();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", toggleMovieModal);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);

// img-2 code

const addMovieModal2 = document.getElementById("add-modal-2");
const startAddMovieButton2 = document.querySelector("#btn2");

const backdrop2 = document.getElementById("backdrop2");

const cancelAddMovieButton2 = addMovieModal2.querySelector(".btn--passive");

const toggleBackdrop2 = () => {
  backdrop2.classList.toggle("visible");
};

const toggleMovieModal2 = () => {
  // function() {}
  addMovieModal2.classList.toggle("visible");
  toggleBackdrop2();
};

const cancelAddMovie2 = () => {
  toggleMovieModal2();
};

const backdropClickHandler2 = () => {
  toggleMovieModal2();
};

startAddMovieButton2.addEventListener("click", toggleMovieModal2);
backdrop2.addEventListener("click", toggleMovieModal2);
cancelAddMovieButton2.addEventListener("click", cancelAddMovie2);

// img 3 code
const addMovieModal3 = document.getElementById("add-modal-3");
const startAddMovieButton3 = document.querySelector("#btn3");

const backdrop3 = document.getElementById("backdrop3");

const cancelAddMovieButton3 = addMovieModal3.querySelector(".btn--passive");

const toggleBackdrop3 = () => {
  backdrop3.classList.toggle("visible");
};

const toggleMovieModal3 = () => {
  // function() {}
  addMovieModal3.classList.toggle("visible");
  toggleBackdrop3();
};

const cancelAddMovie3 = () => {
  toggleMovieModal3();
};

const backdropClickHandler3 = () => {
  toggleMovieModal3();
};

startAddMovieButton3.addEventListener("click", toggleMovieModal3);
backdrop3.addEventListener("click", toggleMovieModal3);
cancelAddMovieButton3.addEventListener("click", cancelAddMovie3);

// // next
// const addMovieModal = document.getElementById("add-modal-1");
// const addMovieModal2 = document.getElementById("add-modal-2");
// const addMovieModal3 = document.getElementById("add-modal-3");

// const startAddMovieButton = document.querySelector("#btn1");
// const startAddMovieButton2 = document.querySelector("#btn2");
// const startAddMovieButton3 = document.querySelector("#btn3");

// const backdrop = document.getElementById("backdrop");
// const backdrop2 = document.getElementById("backdrop2");
// const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
// const cancelAddMovieButton2 = addMovieModal2.querySelector(".btn--passive");

// // first img model
// const toggleBackdrop = () => {
//   backdrop.classList.toggle("visible");
// };

// const toggleMovieModal = () => {
//   // function() {}
//   addMovieModal.classList.toggle("visible");
//   toggleBackdrop();
// };

// const cancelAddMovie = () => {
//   toggleMovieModal();
// };

// const backdropClickHandler = () => {
//   toggleMovieModal();
// };

// const toggleBackdrop2 = () => {
//   backdrop.classList.toggle("visible");
// };

// const toggleMovieModal2 = () => {
//   // function() {}
//   addMovieModal2.classList.toggle("visible");
//   toggleBackdrop2();
// };

// const cancelAddMovie2 = () => {
//   toggleMovieModal2();
// };

// const backdropClickHandler2 = () => {
//   toggleMovieModal2();
// };

// startAddMovieButton.addEventListener("click", toggleMovieModal);
// startAddMovieButton2.addEventListener("click", toggleMovieModal2);
// startAddMovieButton3.addEventListener("click", toggleMovieModal);
// backdrop.addEventListener("click", toggleMovieModal2);
// cancelAddMovieButton.addEventListener("click", cancelAddMovie);
// cancelAddMovieButton2.addEventListener("click", cancelAddMovie2);
