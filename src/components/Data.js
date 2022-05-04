import { useEffect, useState } from 'react';
import './Data.css';
import BlogDataService from '../services/blog.services';

const Data = () => {
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
        getBlogs();
    }

    return (
        <>

            <button className="btnRef" onClick={getBlogs}>Refresh List</button>
            {/* <pre>{JSON.stringify(blogs, undefined, 2)}</pre> */}
            <table>
                <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Actions</th>
                </tr>
                {blogs.map((doc, index) => {
                    return (
                        <tr key={doc.id}>
                            <td>{doc.title}</td>
                            <td>{doc.content}</td>
                            <td>
                                {/* <button onClick={(e) => getBlogId(doc.id)}>Edit</button> */}
                                <button className='btnDel' onClick={(e) => deleteHandler(doc.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default Data;