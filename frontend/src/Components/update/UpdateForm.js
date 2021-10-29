import React,{ useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useUpdate from './useUpdate';
import { useDispatch } from 'react-redux';
import { userSelect } from '../../Redux/actions/Actions';
import { Link } from 'react-router-dom';


const UpdateForm = () => {

    const { id } = useParams()

    const dispatch = useDispatch()
    


    useEffect(() => {
        dispatch(userSelect(id))
    }, [dispatch, id])


    const { handleSubmit, handleChange, values } = useUpdate()

    return (
        <div className="container">
            <Link to="/" className="btn text-warning"><i className="bi bi-house-door h3"></i></Link>
            <div className="d-flex m-auto justify-content-center align-items-center flex-column formContainer">
                <div className="display-6 fw-normal mb-4">Update form</div>
                <form action="" className="form" onSubmit={handleSubmit}>
                    <input 
                        type="hidden" 
                        value={values.id} 
                        name="id"
                        onChange={handleChange}
                        disabled
                    />
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
                    <button type="submit" className="btn btn-success">update</button>
                </form>
            </div>
        </div>
         
    )
}

export default UpdateForm;
