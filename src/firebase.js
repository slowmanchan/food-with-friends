import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCYFll1Dc0pwaCs_YF5bSu7SBRuLmE6UBc",
  authDomain: "fun-food-friends-1d130.firebaseapp.com",
  databaseURL: "https://fun-food-friends-1d130.firebaseio.com",
  projectId: "fun-food-friends-1d130",
  storageBucket: "fun-food-friends-1d130.appspot.com",
  messagingSenderId: "963616820952"
};
firebase.initializeApp(config);
export default firebase;
