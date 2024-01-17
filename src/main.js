// adding the variables for the purr sound //
const purringSound1 = new Audio('cat-purr1.mp3');
const purringSound2 = new Audio('cat-purr2.mp3');

function showCat() {
    const headingDiv = document.getElementById('headingDiv');
    const catContainer = document.getElementById('catContainer');
    const catImage = document.getElementById('catImage');
    const catName = document.getElementById('catName');
    const catDescription = document.getElementById('catDescription');
  
    // Hiding the heading div and showing the cat container //
    headingDiv.classList.add('hidden');
    catContainer.classList.remove('hidden');
  
    // Here is the Cat database //
    const catData = [
      {
        name: 'Meet Mr. Whiskers',
        image: 'cat1.jpg',
        description: 'Mr. Whiskers is an expert in creating chaos. He once attempted to scale a mountain of Laundry and left a trail of socks in his wake.',
        purr: 'cat1',
      },
      {
        name: 'Meet Felix',
        image: 'cat2.jpg',
        description: 'Felix is a master of stealth and can disappear in plain sight. His favorite pastime is knocking objects off tables with precision.',
        purr: 'cat2',
      },
      {
        name: 'Meet Lucy',
        image: 'cat3.jpg',
        description: 'Lucy believes she is the queen of the universe and demands constant adoration. Her latest accomplishment is knocking over a tower of empty boxes in record time.',
        purr: 'cat1',
      },
      {
        name: 'Meet Leo',
        image: 'cat4.jpg',
        description: 'Leo has perfected the art of pouncing on unsuspecting toes. He also moonlights as a professional curtain climber and has yet to meet a vase he hasnt toppled.',
        purr: 'cat2',
      },
      {
        name: 'Meet Jojo',
        image: 'cat5.jpg',
        description: 'Jojo is an esteemed connoisseur of empty cardboard boxes. He claims each box he conquers as his own kingdom and guards it fiercely.',
        purr: 'cat1',
      },
      {
        name: 'Meet Ollie',
        image: 'cat6.jpg',
        description: 'Ollie is an adventurous pirate cat who sails the seas of the living room. He is notorious for stealing fish-shaped toys and burying them in secret treasure troves.',
        purr: 'cat2',
      },
      {
        name: 'Meet Bella',
        image: 'cat7.jpg',
        description: 'Bella possesses the extraordinary ability to teleport from one sunbeam to another. She spends her days napping in the most inconvenient spots, leaving her humans to tiptoe around her regal presence.',
        purr: 'cat1',
      },
      {
        name: 'Meet Mojo',
        image: 'cat8.jpg',
        description: 'Mojo is a highly skilled mathematician who loves to calculate the exact angle and force needed to launch himself onto unsuspecting laps. He considers it his duty to keep humans on their toes.',
        purr: 'cat2',
      },

      // All images sourced from canva //

    ];
  
    // Selecting a random cat every time the meet cat button is clicked //
    let randomIndex = Math.floor(Math.random() * catData.length);
    const selectedCat = catData[randomIndex];
  
    // Displaying the cat image and description //

    catImage.src = `img/${selectedCat.image}`;
    catName.textContent = selectedCat.name;
    catDescription.textContent = selectedCat.description;
  
    // Adding the purring sound //
    playPurr(selectedCat.purr);
}

// Adding a if else for purring sound to play //
function playPurr(purrSound) {
  let purringSound;

  if (purrSound === 'cat1') {
    purringSound = purringSound1;
  } else if (purrSound === 'cat2') {
    purringSound = purringSound2;
  }

  purringSound.volume = 0.1;
  purringSound.loop = true;
  purringSound.play();
}

// Adding the Meow sound for the meet cat button //
  
function playMeow() {
  const catMeowAudio = document.getElementById("catMeowAudio");
  catMeowAudio.play();
}


