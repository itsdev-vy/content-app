import React from 'react';
import './Add.css';
// import AddIcon from '@mui/icons-material/Add';

const List = () => {
    return (
        <div className="container mt-4 py-1 px-1">
            <div className="row">
                <div className="col-11">
                    <h2 className=''>All <span className='text-info'>24</span> Openings</h2>
                </div>
                <div className="col-1 plus">
                    <a href="">
                        {/* <span className='px-3'><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="3rem" fill="#5DA691" className="bi bi-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg></span> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" fill="#5DA691" class="bi bi-plus-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default List;