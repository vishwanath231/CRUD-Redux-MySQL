import React from 'react';
import usePost from './usePost';
import { Link } from 'react-router-dom';

const PostForm = () => {

    const { handleChange, handleSubmit, values } = usePost();


    return (
        <div className="container">
        <Link to="/" className="btn text-warning"><i className="bi bi-house-door h3"></i></Link>
        <div className=" d-flex m-auto justify-content-center align-items-center flex-column formContainer" style={{minHeight:"80vh"}} >
            
            <div className="display-6 fw-normal mb-4">Register form</div>
            <form action="" className="form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Username</label>
                    <input 
                        type="text"
                        onChange={handleChange}
                        placeholder="will smith"
                        name="name"
                        value={values.name}
                        id="name"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email"
                        onChange={handleChange}
                        placeholder="example@support.com"
                        name="email"
                        value={values.email}
                        id="email"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">submit</button>
            </form>
        </div>
        </div>
    )
}

export default PostForm;
