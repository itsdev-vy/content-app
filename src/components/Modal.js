// import { createPortal } from 'react-dom';
// import { useState, useEffect } from 'react';
// import classes from './Modal.module.css';
// import BlogDataService from '../services/blog.services';
// import TextEditor from '../components/TextEditor';


// // const Modal = (props) => {

// //     return createPortal(<div>
// //         <div>
// //             <div className={classes.overlay}></div>
// //             <div className={classes.modal}>
// //                 <div className={classes.modal_content}>
// //                     <ModalContent>{props.children}</ModalContent>
// //                 </div>
// //             </div>
// //         </div>
// //     </div>, document.getElementById('modal'))
// // }


// const ModalContent = ({ closeModal, id, setBlogId }) => {
//     const [title, setTitle] = useState("");
//     const [content, setContent] = useState("");
//     const [message, setMessage] = useState({ error: false, msg: "" })

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setMessage('');
//         if (title === '' || content === '') {
//             setMessage({ error: true, msg: "All fields are mandatory!" });
//             return;
//         }

//         const newBlog = {
//             title,
//             content
//         }
//         console.log(newBlog);

//         try {
//             await BlogDataService.addBlogs(newBlog);
//             setMessage({ error: false, msg: "New Book Added successfully!" });
//         } catch (err) {
//             setMessage({ error: true, msg: err.message });
//         }
//         setTitle('');
//         setContent('');
//     };

//     const editHandler = async () => {
//         setMessage('');
//         try {
//             const docSnap = await BlogDataService.getBlog(id);
//             console.log('the record is :', docSnap.data())
//             setTitle(docSnap.data().title);
//             setContent(docSnap.data().content);
//         } catch (err) {
//             setMessage({ error: true, msg: err.message });
//         }
//     }

//     useEffect(() => {
//         console.log('From Modal', id);
//         if (id !== undefined && id !== '') {
//             editHandler();
//         }
//     }, [id])

//     return (
//         <>
//             <div className={classes.modalBackground}>
//                 <form onSubmit={handleSubmit}>
//                     <div className={classes.input_container}>
//                         <div className={classes.form}>
//                             <button type="text" className={classes.cross} onClick={() => closeModal(false)}>X</button>
//                             <div className={classes.title}>Welcome</div>
//                             <div className={classes.subtitle}>Let's create content</div>
//                             <div className={`${classes.input_container} ${classes.ic1} }`}>
//                                 <input id="firstname" className={classes.input} type="text" placeholder="" value={title} onChange={(e) => setTitle(e.target.value)} />
//                                 <div className={classes.cut}></div>
//                                 <label htmlFor="firstname" className={classes.placeholder}>Title</label>
//                             </div>
//                             <div className={classes.editor}>
//                                 <TextEditor />
//                             </div>
//                             {/* <div className={`${classes.input_container} ${classes.ic2} }`}>
//                                 <input id="lastname" className={classes.input} type="text" placeholder="" value={content} onChange={(e) => setContent(e.target.value)} />
//                                 <div className={classes.cut}></div>
//                                 <label htmlFor="lastname" className={classes.placeholder}>Content</label>
//                             </div> */}
//                             <button type="text" className={classes.submit}>submit</button>
//                             <button type="text" className={classes.cancel} onClick={() => closeModal(false)}>Cancel</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//
//         </>
//     )
// }

// export { Modal, ModalContent };