import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx8hzTk5-Cz58WImBglIhQjKzsm6AgIRI",
  authDomain: "dj-house-app.firebaseapp.com",
  projectId: "dj-house-app",
  storageBucket: "dj-house-app.appspot.com",
  messagingSenderId: "731215978707",
  appId: "1:731215978707:web:fde2b9ef2d75c11e953426",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default db;
// imprimirProductos()
//   .then((respuesta) => {
//     if (!categoryId) {
//       setListaProductos(respuesta);
//     } else {
//       setListaProductos(
//         respuesta.filter(
//           (listaProductos) => listaProductos.categoria == categoryId
//         )
//       );
//     }
//   })
//   .finally(() => {
//     setLoading(false);
//     console.log(setLoading);
//   });
