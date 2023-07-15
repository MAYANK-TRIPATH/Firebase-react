import { getFirestore, collection, addDoc, doc, getDoc, query, where, getDocs } from "firebase/firestore"
import { app } from "./firebase"; 
import './App.css';

const firestore = getFirestore(app);

function App() {
  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      name: "Delhi",
      pinCode: 1234,
      lat: 123,
      long: 456,
    });

    console.log("Result", result);
  };

  const makeSubCollection = async () => {
    await addDoc(collection(firestore, "cities/path1/path2"),{
      name: "This is place2",
      desc: "Awesome",
      date: Date.now(),
    });
  };

  // Get Document
  const getDocument = async () => {
    const ref = doc(firestore, "cities", "dadaafsfsfsfsd");
    const snap = await getDoc(ref);

    console.log(snap.data());
  }

  // Queries
const getDocumentByQuery = async () => {
  const collectionRef = collection(firestore, "users");
  const q = query(collectionRef, where("isMale", "==", true ));
  const snapshot = await getDocs(q);
  snapshot.forEach((data) => console.log(data.data()));
};


  return (
    <div className="App">
      <h1>Firebase FireStore </h1>
      <buttton onClick={writeData}> PutData</buttton>
      <buttton onClick={makeSubCollection}> PutData</buttton>
      <buttton onClick={getDocument}> Get Document</buttton>
      <buttton onClick={getDocumentByQuery}> Get Document B Query</buttton>
    
    </div>
  );
}

export default App;
