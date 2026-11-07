/**
 * Birthday Surprise Configuration File
 * 
 * You can easily customize any of the text, nickname, and image paths here!
 * To replace her photo, simply put your photo at `/public/images/her-photo.jpg`
 * or update the `photoAssetPath` below to your desired image path.
 */

export const birthdayConfig = {
  // Optional nickname. If empty, defaults to "Beautiful" or "you" naturally.
  nickname: "Rashi", 

  // Kitten options
  kittens: {
    white: {
      id: "white",
      name: "Snowdrop",
      title: "Fluffy Cloud",
      image: "/images/white-kitten.jpg",
      accentColor: "#F4C4CF",
      tagline: "Soft, gentle & full of purrs ♡",
      description: "An adorable fluffy white kitten with bright playful eyes.",
      badge: "Blush Sweetheart"
    },
    tabby: {
      id: "tabby",
      name: "Biscoff",
      title: "Little Tabby",
      image: "/images/tabby-kitten.jpg",
      accentColor: "#E6DDF5",
      tagline: "Curious, warm & sweet ♡",
      description: "An adorable brown tabby kitten with cozy warm amber eyes.",
      badge: "Lavender Cutie"
    }
  },

  // Screen 1: The Little Surprise
  screenOne: {
    badge: "A Little Birthday Surprise ♡",
    heading: (nickname) => `Hey, ${nickname ? nickname : "you"}! ♡`,
    subtitle: "I have a little surprise for you...",
    subtext: "But first, you have to make one tiny decision.",
    buttonText: "Choose One ♡",
    image: "/images/bedroom-kittens.jpg"
  },

  // Screen 2: Choose Your Cutie
  screenTwo: {
    heading: "Okay, choose your cutie ♡",
    subtext: "Tap on the kitten that melts your heart the most...",
    selectedFeedback: "Awww, you picked this cutie!"
  },

  // Screen 3: The Cute Reveal
  screenThree: {
    heading: "You chose me! ♡",
    subtitle: "Okay, now I have something special to tell you...",
    buttonText: "Tell me! →"
  },

  // Screen 4: Birthday Letter
  screenFour: {
    heading: (nickname) => `Happy Birthday, ${nickname ? nickname : "Beautiful"} ♡`,
    subtitle: "To someone who makes life a little more special.",
    paragraphs: [
      "Today is your day, and I hope it brings you a thousand little reasons to smile.",
      "I hope life gives you the happiness you deserve, the courage to chase your dreams, and people who remind you how wonderful you truly are.",
      "I'm genuinely glad that you're a part of my life. Never forget that you are special in your own beautiful way.",
      "May this new chapter of your life be filled with peaceful moments, unexpected happiness, beautiful memories, and everything your heart wishes for.",
      "Keep smiling, okay? The world feels a little brighter that way. ♡"
    ],
    signOff: "With lots of good wishes, just for you.",
    buttonText: "There's one more thing... ♡"
  },

  // Screen 5: Personal Photo Reveal
  screenFive: {
    // Path to her photo. Set your photo in `/public/images/her-photo.jpg`
    photoAssetPath: "/images/her-photo.jpg",
    // Fallback if the photo hasn't been added yet
    fallbackPhotoPath: "/images/her-photo-placeholder.svg",
    caption: "One of my favorite things is seeing you smile. ♡",
    supportingText: "I hope life gives you countless reasons to smile like that.",
    buttonText: "One last Thing ♡"
  },

  // Screen 6: Final Birthday Surprise
  screenSix: {
    heading: (nickname) => `Happy Birthday, ${nickname ? nickname : "Beautiful Soul"} ♡`,
    message: [
      "So again Happy Birthday pagal and happy Diwali",
      "Mai personally message toh nahi kar sakta tha tujha kyu ki mera sa ho nahi paiga",
      "Isliya maina ya socha ki website banata hu uska through wish kar dunga",
      "Chodo ya saab maje karo or chocolate pahucha Dena jara 😂",
      "Ya mai kuch time mai delete kar dunga jaisa he aap dekh longe toh isko issue na banaye",
      "Thankyou ki jarurat nahi hai",
      "Bass mai roj raat mai 9 baje kai jata hu toh ...if you know you know",
      "Maje karo bye ...."
    ],
    handwrittenNote: "Bye ..... Happy Birthday 🎉❤️",
    signature: "",
    replayText: "Experience it again ↺",
    sunsetSceneImage: "/images/sunset-kittens.jpg"
  }
};
