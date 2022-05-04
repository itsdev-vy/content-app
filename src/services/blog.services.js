import { db } from "../firebase";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const blogCollectionRef = collection(db, 'blogs')

class BlogDataService {

    addBlogs = (newBlog) => {
        return addDoc(blogCollectionRef, newBlog);
    }

    updateBlog = (id, updatedBlog) => {
        const blogDoc = doc(db, 'blogs', id);
        return updateDoc(blogDoc, updatedBlog);
    }

    deleteBlog = (id) => {
        const blogDoc = doc(db, 'blogs', id);
        return deleteDoc(blogDoc);
    }

    getAllBlogs = () => {
        return getDocs(blogCollectionRef);
    }

    getBlog = (id) => {
        const blogDoc = doc(db, 'blogs', id);
        return getDoc(blogDoc);
    }

}

export default new BlogDataService();
