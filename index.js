// Write your code in this file!
const currentUser = 'Gina Wangari';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
let shortGreeting = 'Welcome, ';
const firstInitial= currentUser[0];
const restOfName=currentUser.slice(1);
shortGreeting = shortGreeting + firstInitial + "!";
