// Firebase 初始化
const firebaseConfig = {
  apiKey: "AIzaSyBTkLZxOypQwmzeLnihgyAxrczNLgq-J6I",
  authDomain: "webn-25f57.firebaseapp.com",
  projectId: "webn-25f57",
  storageBucket: "webn-25f57.firebasestorage.app",
  messagingSenderId: "472156580131",
  appId: "1:472156580131:web:3a42f16d8b450149a20496",
  measurementId: "G-E5E4TBGL5D"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
// 其余逻辑略
