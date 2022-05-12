import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getToResultJson from '../services/api';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';


function App() {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    getToResultJson().then((response) => {
      setQuestions(response);
    });
  }, []);


  return (
    // HTML ✨
    <>
    <Header/>
    <main>
      <Card/>

    </main>
    <Footer/>

    </>
   
  );
}

export default App;
