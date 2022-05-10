import { useEffect, useState } from 'react';
import './Data.css';
import BlogDataService from '../services/blog.services';
import { Button, ButtonToolbar, Modal, Table } from 'react-bootstrap';
import ContentModal from './ContentModal';


const Data = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [content, setContent] = useState(null);
    const [conModal, setConModal] = useState(false);


    useEffect(() => {
        getBlogs();
    }, [props.getBlogId]);

    const getBlogs = async () => {
        const data = await BlogDataService.getAllBlogs();
        console.log(data.docs);
        setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }


    const deleteHandler = async (id) => {
        await BlogDataService.deleteBlog(id);
        //for refreshing the output list
        props.getBlogId();
    }
    const handleEdit = (doc) => {
        props.setShowModal(true)
        props.getBlogId(doc.id)
    }

    const openModal = (data) => {
        setConModal(true);
        setContent(data);
    }

    const closeModal = () => {
        setConModal(false);
    }


    return (
        <>

            {/* <button className="btnRef" onClick={getBlogs}>Refresh List</button> */}
            {/* <pre>{JSON.stringify(blogs, undefined, 2)}</pre> */}
            <div>
                <ContentModal popModal={conModal} closeModal={closeModal} conData={content} />

                <Table className="table table-bordered">
                    <thead className="table-light w-auto small">
                        <th>#</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {blogs.map((doc, index) => {
                            return (
                                <tr key={doc.id} >
                                    <td>{index + 1}</td>
                                    <td >{doc.title}</td>
                                    {/* <td>{doc.content}</td> */}
                                    <td onClick={() => openModal(doc.content)}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: doc.content
                                            }} >
                                        </div>
                                    </td>
                                    <td>
                                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                            <Button type="button" className="btn btn-warning" onClick={(e) => handleEdit(doc)} >Edit</Button>
                                            <Button type="button" className='btn btn-danger' onClick={(e) => deleteHandler(doc.id)}>Delete</Button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Data;