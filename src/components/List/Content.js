import React from 'react';
import './Content.css';

const Content = () => {
    return (
        <div className="container mt-4">
            <div className="row table-responsive">
                <table class="table table-bordered table-rounded">
                    <thead className="head">
                        <tr className="headB">
                            <th className="col-md-6 ps-5">Opeanings</th>
                            <th className="col-md-2 ps-5">Invited</th>
                            <th className="col-md-3 ps-5">Attended</th>
                            <th className="col-md-1 ps-5"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><h6 className="space"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#409848" class="bi bi-circle-fill mx-1 mt-2 mb-2" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg> <span className="ps-1 mx-2">Java Developer</span></span><span className="pe-3 pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5DA691" className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg></span></h6></td>
                            <td><h6 className="px-4 mt-2">20</h6></td>
                            <td><h6 className="px-4 mt-2">20 <span className="new mx-4">4 New</span></h6></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical mx-4 mt-3" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg></td>
                        </tr>
                        <tr>
                            <td><h6 className="space"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#CBCBCB" class="bi bi-circle-fill mx-1 mt-2 mb-2" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg> <span className="ps-1 mx-2">Java Developer</span></span><span className="pe-3 pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5DA691" className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg></span></h6></td>
                            <td><h6 className="px-4 mt-2">20</h6></td>
                            <td><h6 className="px-4 mt-2">20 <span className="new mx-4">4 New</span></h6></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical mx-4 mt-3" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg></td>
                        </tr>
                        <tr>
                            <td><h6 className="space"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#409848" class="bi bi-circle-fill mx-1 mt-2 mb-2" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg> <span className="ps-1 mx-2">Java Developer</span></span><span className="pe-3 pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5DA691" className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg></span></h6></td>
                            <td><h6 className="px-4 mt-2">20</h6></td>
                            <td><h6 className="px-4 mt-2">20 <span className="new mx-4"></span></h6></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical mx-4 mt-3" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg></td>
                        </tr>
                        <tr>
                            <td><h6 className="space"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#409848" class="bi bi-circle-fill mx-1 mt-2 mb-2" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg> <span className="ps-1 mx-2">Java Developer</span></span><span className="pe-3 pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5DA691" className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg></span></h6></td>
                            <td><h6 className="px-4 mt-2">20</h6></td>
                            <td><h6 className="px-4 mt-2">20 <span className="new mx-4">4 New</span></h6></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical mx-4 mt-3" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg></td>
                        </tr>
                        <tr>
                            <td><h6 className="space"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#CBCBCB" class="bi bi-circle-fill mx-1 mt-2 mb-2" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg> <span className="ps-1 mx-2">Java Developer</span></span><span className="pe-3 pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5DA691" className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg></span></h6></td>
                            <td><h6 className="px-4 mt-2">20</h6></td>
                            <td><h6 className="px-4 mt-2">20 <span className="new mx-4">4 New</span></h6></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical mx-4 mt-3" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg></td>
                        </tr>
                        <tr>
                            <td><h6 className="space"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#409848" class="bi bi-circle-fill mx-1 mt-2 mb-2" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg> <span className="ps-1 mx-2">Java Developer</span></span><span className="pe-3 pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5DA691" className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg></span></h6></td>
                            <td><h6 className="px-4 mt-2">20</h6></td>
                            <td><h6 className="px-4 mt-2">20 <span className="new mx-4"></span></h6></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical mx-4 mt-3" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg></td>
                        </tr>
                        <tr>
                            <td><h6 className="space"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#409848" class="bi bi-circle-fill mx-1 mt-2 mb-2" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg> <span className="ps-1 mx-2">Java Developer</span></span><span className="pe-3 pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5DA691" className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg></span></h6></td>
                            <td><h6 className="px-4 mt-2">20</h6></td>
                            <td><h6 className="px-4 mt-2">20 <span className="new mx-4">4 New</span></h6></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical mx-4 mt-3" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg></td>
                        </tr>
                        <tr>
                            <td><h6 className="space"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#CBCBCB" class="bi bi-circle-fill mx-1 mt-2 mb-2" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg> <span className="ps-1 mx-2">Java Developer</span></span><span className="pe-3 pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5DA691" className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg></span></h6></td>
                            <td><h6 className="px-4 mt-2">20</h6></td>
                            <td><h6 className="px-4 mt-2">20 <span className="new mx-4">4 New</span></h6></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical mx-4 mt-3" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg></td>
                        </tr>
                        <tr>
                            <td><h6 className="space"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#409848" class="bi bi-circle-fill mx-1 mt-2 mb-2" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg> <span className="ps-1 mx-2">Java Developer</span></span><span className="pe-3 pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5DA691" className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg></span></h6></td>
                            <td><h6 className="px-4 mt-2">20</h6></td>
                            <td><h6 className="px-4 mt-2">20 <span className="new mx-4"></span></h6></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical mx-4 mt-3" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg></td>
                        </tr>
                        <tr>
                            <td><h6 className="space"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#409848" class="bi bi-circle-fill mx-1 mt-2 mb-2" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg> <span className="ps-1 mx-2">Java Developer</span></span><span className="pe-3 pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5DA691" className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg></span></h6></td>
                            <td><h6 className="px-4 mt-2">20</h6></td>
                            <td><h6 className="px-4 mt-2">20 <span className="new mx-4">4 New</span></h6></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical mx-4 mt-3" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg></td>
                        </tr>
                        <tr>
                            <td><h6 className="space"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#CBCBCB" class="bi bi-circle-fill mx-1 mt-2 mb-2" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg> <span className="ps-1 mx-2">Java Developer</span></span><span className="pe-3 pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5DA691" className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg></span></h6></td>
                            <td><h6 className="px-4 mt-2">20</h6></td>
                            <td><h6 className="px-4 mt-2">20 <span className="new mx-4">4 New</span></h6></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical mx-4 mt-3" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg></td>
                        </tr>
                        <tr>
                            <td><h6 className="space"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#409848" class="bi bi-circle-fill mx-1 mt-2 mb-2" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg> <span className="ps-1 mx-2">Java Developer</span></span><span className="pe-3 pt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5DA691" className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg></span></h6></td>
                            <td><h6 className="px-4 mt-2">20</h6></td>
                            <td><h6 className="px-4 mt-2">20 <span className="new mx-4"></span></h6></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical mx-4 mt-3" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg></td>
                        </tr>

                    </tbody>

                </table>
            </div>
            <div className='d-flex justify-content-end'>
                <span className='mt-5 mb-5'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#979797" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg></span><span className='mt-5 mb-5 mx-3 text-secondary'> Page : 08</span><span className='mt-5 mb-5'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#979797" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg></span>
            </div>
        </div>
    )
}

export default Content