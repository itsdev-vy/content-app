import { useContext, useState } from 'react';
import { ModalContent } from './Modal';
import classes from './Main.module.css';
import { blogContext } from '../Context';


const Main = () => {
    const [openModal, setOpenModal] = useState(false);

    const { blogId, setBlogId } = useContext(blogContext);

    return (
        <>
            <div className={classes.container}>
                {/* <button className={classes.btn} onClick={() => { setOpenModal(true) }}>Create Content</button> */}
                <button type="button" class="btn btn-primary" onClick={() => { setOpenModal(true) }}>Create Content</button>
            </div>
            {openModal && <ModalContent closeModal={setOpenModal} id={blogId} setBlogId={setBlogId} />}

        </>
    )
}

export default Main;