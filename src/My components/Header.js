import React from 'react';

export default function Header(props) {

    return (
        <div>
            <nav class name="navbar navbar-expand-lg navbar-light bg-light">
                <div class name="container-fluid">
                    <a class name="navbar-brand" href="#">{props.title}</a>
                    <button class name="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class name="navbar-toggler-icon"></span>
                    </button>
                    <div class name="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class name="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class name="nav-item">
                                <a class name="nav-link active" aria-current="page">Home</a>
                            </li>
                            <li class name="nav-item">
                                <a class name="nav-link" href="#">About</a>
                            </li>


                        </ul>
                        {props.serachBar ? <form class name="d-flex">
                            <input class name="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class name="btn btn-outline-success" type="submit">Search</button>
                        </form> : ""}
                    </div>
                </div>
            </nav>
        </div>
    )

};








