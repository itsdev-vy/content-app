import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Main from './components/Main';
import Data from './components/Data';
import { blogContext } from './Context';
import { Button, Modal } from 'react-bootstrap';
import NewModal from './components/NewModal';

function App() {
  const [blogId, setBlogId] = useState("");

  const getBlogIdHandler = (id) => {
    console.log('Coming from App', id)
    setBlogId(id);

  }

  return (
    <div className="App">
      <Navbar />
      <NewModal id={blogId} setBlogId={setBlogId} />
      <Data getBlogId={getBlogIdHandler} />


      {/* <blogContext.Provider value={{ blogId, setBlogId }}>
        <Main />
      </blogContext.Provider> */}
    </div>
  );
}

export default App;
