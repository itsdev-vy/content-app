import { useEffect, useState } from 'react';
import './Data.css';
import BlogDataService from '../services/blog.services';
import { Button, Modal } from 'react-bootstrap';


const Data = (props) => {
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        const data = await BlogDataService.getAllBlogs();
        console.log(data.docs);
        setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }


    const deleteHandler = async (id) => {
        await BlogDataService.deleteBlog(id);
        //for refreshing the output list
        props.getBlogs();
        debugger
    }
    const handleEdit = (doc) => {
        props.setShowModal(true)
        props.getBlogId(doc.id)
    }
    return (
        <>

            {/* <button className="btnRef" onClick={getBlogs}>Refresh List</button> */}
            {/* <pre>{JSON.stringify(blogs, undefined, 2)}</pre> */}
            <div className="table">
                <table class="table table-bordered">
                    <thead className="table-light">
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </thead>
                    {blogs.map((doc, index) => {
                        return (
                            <tr key={doc.id}>
                                <td>{doc.title}</td>
                                {/* <td>{doc.content}</td> */}
                                <td>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: doc.content
                                        }}>
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
                </table>
            </div>
        </>
    )
}

export default Data;