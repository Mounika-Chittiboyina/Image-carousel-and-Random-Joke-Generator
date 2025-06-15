const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg"
];

let currentIndex = 0;

const imageElement = document.getElementById("carousel-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

function updateImage() {
  imageElement.src = images[currentIndex];
}

// joke container
document.getElementById('getJokeBtn').addEventListener('click', getJoke);

async function getJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    document.getElementById('joke').innerText = `${data.setup} — ${data.punchline}`;
    document.getElementById('joke').style.fontSize = '25px';
    document.getElementById('joke').style.border = '2px solid black';
    document.getElementById('joke').style.padding = '15px';
  } catch (error) {
    document.getElementById('joke').innerText = 'Failed to fetch joke.';
    console.error(error);
  }
}