import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import BlogDataService from '../services/blog.services';
import TextEditor from '../components/TextEditor';
import './NewModal.css';


const NewModal = ({ showModal, setShowModal, id, setBlogId }) => {
    // const [showModal, props.setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState({ error: false, msg: "" })

    console.log("PARENT NEWMODAL", title);
    console.log("PARENT NEWMODAL", content);

    const handleSubmit = async (event) => {
        // debugger
        event.preventDefault();
        setMessage('');
        if (title === '' || content === '') {
            setMessage({ error: true, msg: "All fields are mandatory!" });
            return;
        }
        const newBlog = {
            title,
            content
        }
        console.log(newBlog);

        try {
            await BlogDataService.addBlogs(newBlog);
            setMessage({ error: false, msg: "New Book Added successfully!" });
        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }
        setTitle('');
        setContent('');
        setShowModal(false);
    };

    const editHandler = async () => {
        setMessage('');
        try {
            const docSnap = await BlogDataService.getBlog(id);
            console.log('the record is :', docSnap.data())
            setTitle(docSnap.data().title);
            setContent(docSnap.data().content);
        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }
    }

    useEffect(() => {
        console.log('From Modal', id);
        if (id !== undefined && id !== '') {
            editHandler();
        }
    }, [id])

    return (
        <div>
            <Button className='d-grid gap-2 col-6 mx-auto btn-lg' onClick={() => setShowModal(true)}>Create Content</Button>
            <form onSubmit={handleSubmit}>
                <Modal show={showModal} onHide={() => setShowModal(false)} >
                    <Modal.Header closeButton >Welcome, Let's create content</Modal.Header>
                    <Modal.Body>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Title</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <TextEditor setContent={setContent} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btn btn-primary' onClick={handleSubmit}>Submit</Button>
                        <Button className='btn btn-danger' onClick={() => setShowModal(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </form>
        </div>
    )
}

export default NewModal;