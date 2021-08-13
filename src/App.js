import React,{useState,useEffect} from 'react'
import Form from './components/Form'
import User from './components/User'
import './App.css'
import Navbar from './components/UI/Navbar'
import Footer from './components/UI/Footer'

const LOCAL_STORAGE = 'Hicm.cards';

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const cardStorage = localStorage.getItem(LOCAL_STORAGE);
    if(cardStorage != null) setUserList(JSON.parse(cardStorage))
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(userList));
  }, [userList]);

  function addUser(cName,cAge,cEmail,cJob,cPhone,cImg) {
    setUserList(prevCard => ([...prevCard,
      {
        name: cName, age: cAge, email: cEmail, job: cJob,
        phone: cPhone, image: cImg, id: Math.random() * 100
      }]))

}


  return (
    <>
    
      <div className="container"> 
        <div className="row mt-2"> 
        <h1 className="text-center">Card TodoList</h1>
          <Form addUser={addUser} />
        </div>
      </div>
      
      <div className="container">
            <div className="row mt-2">  
              <User users={userList} setUsers={setUserList} />
              </div>
      </div>
    
     
      </>
  )
}

export default App
