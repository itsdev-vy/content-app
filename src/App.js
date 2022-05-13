// import { useState } from 'react';
import './App.css';
// import Navbar from './components/Navbar';
// // import Main from './components/Main';
// import Data from './components/Data';
// import { blogContext } from './Context';
// import { Button, Modal } from 'react-bootstrap';
// import ThemeProvider from 'react-bootstrap/ThemeProvider';
// import NewModal from './components/NewModal';
import Header from './components/Header/Header';
// import Add from './components/List/Add';
// import Content from './components/List/Content';
import AddVideo from './components/VideoList/AddVideo';
import ContentVideo from './components/VideoList/ContentVideo';

function App() {
  // const [blogId, setBlogId] = useState("");
  // const [showModal, setShowModal] = useState(false);

  // const getBlogIdHandler = (id) => {
  //   console.log('Coming from App', id)
  //   setBlogId(id);
  // }

  return (
    <>
      {/* Content page */}
      {/* <Header />
      <Add />
      <Content /> */}

      {/* Video Content page */}
      <Header />
      <AddVideo />
      <ContentVideo />
    </>
    // <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
    //   <div className="App">
    //     <Navbar />
    //     <NewModal id={blogId} setBlogId={setBlogId} setShowModal={setShowModal} showModal={showModal} />
    //     <Data getBlogId={getBlogIdHandler} setShowModal={setShowModal} showModal={showModal} />

    //     {/* <blogContext.Provider value={{ blogId, setBlogId }}>
    //     <Main />
    //   </blogContext.Provider> */}
    //   </div>
    // </ThemeProvider>
  );
}

export default App;
