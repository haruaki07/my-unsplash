import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyB2Ggxd67zH9w8jhtEfgCfDTZh7KTn4D3o",
	authDomain: "my-unsplash-ce491.firebaseapp.com",
	databaseURL: "https://my-unsplash-ce491.firebaseio.com",
	projectId: "my-unsplash-ce491",
	storageBucket: "my-unsplash-ce491.appspot.com",
	messagingSenderId: "770513186853",
	appId: "1:770513186853:web:9093965d55d1fd55ca8fcc"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();