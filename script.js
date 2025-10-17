// Comfort Page Script 🌸

// ELEMENTS
const tapToRead = document.getElementById("tapToRead");
const typedMessage = document.getElementById("typedMessage");
const sky = document.querySelector(".sky");
const sun = document.querySelector(".sun");
const stars = document.querySelector(".stars");
const petalsContainer = document.getElementById("petals");
const firefliesContainer = document.getElementById("fireflies");
const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");

// MESSAGE
const message = `hey love, i know it hurts when your mom compares you to others. i can just imagine how heavy that feels you try so hard, you do your best, and yet it still feels like no matter what you do, it’s not enough in her eyes. it’s so unfair, ‘cause you deserve to be seen, appreciated, and loved just as you are. you don’t deserve those words that make you question yourself. i want you to know that it’s okay to feel hurt. it’s okay to cry. it’s okay to not be okay right now. you don’t have to hide your feelings or pretend that you’re fine all the time. the world can be so cruel sometimes, and people can say things that sting even if they don’t mean to. but love, you are not who they compare you to. you are your own person the person i fell in love with, my little baby, my little buldak, my favorite human in this whole world. you are enough, even on your worst days. and please remember this, it’s okay not to be strong all the time, you know? even heroes rest. even the sun sets. even my little buldak sometimes needs to just lie down, eat snacks, and sulk for a bit and that’s completely fine. you don’t always have to keep everything together. and when you can’t, that’s why i’m here. i’ll be your soft place to land when the world gets heavy. i’ll hold you, listen to you, and remind you that you’re not alone. i’ll be the one who sees you even when others don’t. when you feel like no one understands you, i’ll be here saying “i do.” when you’re tired, i’ll be here saying “rest, love.” when you’re crying, i’ll be the one saying “come here, my baby, i got you.” you don’t have to be perfect to be loved, okay? you’re loved because you’re you. because you’re kind, and funny, and sometimes a little dramatic (which i find cute by the way), and because you bring so much light even when you don’t realize it. and honestly, if people can’t see how amazing you are, they need to borrow my eyes, ‘cause i swear you’re the most beautiful thing ever even when you’re making that face when you’re annoyed or even when you’re just eating like a little monster. and love, i know you might feel like you have to keep proving yourself, but please don’t. you’ve already proven enough just by being you. you’re growing, learning, and trying every day, and that’s something to be proud of. i see your effort, i see your heart, i see the way you keep going even when you’re tired and that’s strength, love. even if it doesn’t feel like it. but again, it’s okay not to be strong all the time. if you need to cry, cry. if you need to rant, rant. if you need to sleep for ten hours, go. i’ll just be here waiting like a loyal dog. i’ll be here cheering you up, feeding you snacks, hugging you tight, and making sure you never forget how amazing you are. the world may be cruel, but you’ve got me. and i’ll make sure that in my arms, you always feel safe, loved, and enough. you’re my little baby, my little buldak, my favorite person to annoy and love at the same time. and if the world makes you cry, then i’ll be here ready with my silly jokes and warm hugs until i see that smile again. try to make up with your mom, okay? i know it’s hard, but at the end of the day, she’s still your mom. she loves you in her own way. you’re not alone, love. i’m right here. always
`;

// TYPEWRITER EFFECT
function typeWriter(text, element, speed = 60) {
  let i = 0;
  element.textContent = "";
  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

// PETALS
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 8 + Math.random() * 4 + "s";
  petalsContainer.appendChild(petal);
  setTimeout(() => petal.remove(), 12000);
}

function startPetals() {
  setInterval(createPetal, 700);
}

// FIREFLIES
// --- FIREFLIES WITH LETTER GLOW ---
function createFirefly() {
  const fly = document.createElement("div");
  fly.classList.add("firefly");

  // define motion area around the letter card
  const letter = document.getElementById("letterCard");
  const rect = letter.getBoundingClientRect();

  // random position near or over the letter
  const x = rect.left - 100 + Math.random() * (rect.width + 200);
  const y = rect.top - 100 + Math.random() * (rect.height + 200);

  fly.style.left = `${x}px`;
  fly.style.top = `${y}px`;

  firefliesContainer.appendChild(fly);

  // make the letter glow briefly when a firefly passes near it
  if (
    x > rect.left - 40 &&
    x < rect.right + 40 &&
    y > rect.top - 40 &&
    y < rect.bottom + 40
  ) {
    letter.classList.add("glowPulse");
    setTimeout(() => letter.classList.remove("glowPulse"), 600);
  }

  setTimeout(() => fly.remove(), 10000);
}

function startFireflies() {
  setInterval(createFirefly, 900);
}


// TAP TO READ
tapToRead.addEventListener("click", () => {
  tapToRead.style.transition = "opacity 1.5s ease";
  tapToRead.style.opacity = "0";
  setTimeout(() => tapToRead.remove(), 2000);

  // Start first song
  song1.volume = 0.7;
  song1.play().catch(() => {});
  song1.addEventListener("ended", () => {
    song2.volume = 0.6;
    song2.play().catch(() => {});
  });

  // Start typing message
  typedMessage.classList.remove("hidden");
  typeWriter(message, typedMessage, 65);

  // Begin sunset transition
  setTimeout(() => {
    sun.style.bottom = "-120%";
    sun.style.opacity = "0";
    sky.style.background = "linear-gradient(to top, #2b1055, #1a0033)";
  }, 8000); // 8s after tap

  // Fade in stars
  setTimeout(() => {
    stars.style.opacity = "0.8";
  }, 14000); // 14s after tap

  // Petals and fireflies
  setTimeout(startPetals, 6000);  // gentle start
  setTimeout(startFireflies, 18000); // appear after dark
});
