import React from 'react';
import './AddVideo.css';

const AddVideo = () => {
    return (
        <div className="container mt-4 py-1 px-1">
            <div className="row">
                <div className="d-flex justify-content-between">
                    <div>
                        <h2 className='txt'><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#737373" class="bi bi-caret-left-fill mb-2" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg></span> Java Developer</h2>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>
                            <div class="dropdown">
                                <button class="btn bg-white text-muted border border-2 dropdown-toggle mx-2" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    All attended
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button">Action</button>
                                    <button className="dropdown-item" type="button">Another action</button>
                                    <button className="dropdown-item" type="button">Something else here</button>
                                </div>
                            </div>
                        </span>
                        <span>
                            <button type="button" className="btn btn-light bg-white rounded add">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="17.6" height="19.27" fill="#5DA691" className="bi bi-person-plus" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg></span></button>
                        </span>

                        {/* <span>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    All attended
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button class="dropdown-item" type="button">Action</button>
                                    <button class="dropdown-item" type="button">Another action</button>
                                    <button class="dropdown-item" type="button">Something else here</button>
                                </div>
                            </div>
                        </span>
                        <span className="border border-success rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17.6" height="19.27" fill="#5DA691" className="bi bi-person-plus mx-3 my-3" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddVideo;
