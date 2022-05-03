import { useState } from 'react';
import { ModalContent } from './Modal';
import classes from './Main.module.css';


const Main = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className={classes.container}>
                {/* <button className={classes.btn} onClick={() => { setOpenModal(!openModal) }}>Create Content</button> */}
                {/* <button className={classes.btn} onClick={() => { setOpenModal(true) }}>Create Content</button> */}
                <button className={classes.btn} onClick={() => { setOpenModal(true) }}>Create Content</button>
            </div>

            {/* {openModal && <Modal />} */}
            {/* {openModal ? <Modal /> : null} */}
            {openModal && <ModalContent closeModal={setOpenModal} />}
        </>
    )
}

export default Main;