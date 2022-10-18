import { initializeApp } from 'firebase/app'
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKFnsUxRFa2zXGw7cwP1jg9HXibe63tqI",
    authDomain: "reactrouter-3326c.firebaseapp.com",
    projectId: "reactrouter-3326c",
    storageBucket: "reactrouter-3326c.appspot.com",
    messagingSenderId: "532325164360",
    appId: "1:532325164360:web:96aa0463571db3a5feff7d"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider()
  googleProvider.setCustomParameters({
    prompt:'select_account'
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)