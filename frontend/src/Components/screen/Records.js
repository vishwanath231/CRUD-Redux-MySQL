import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userList } from '../../Redux/actions/Actions';
import { Link } from 'react-router-dom';
import RecordsComps from './RecordsComps';

const Records = () => {


    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)

    useEffect(() => {
        dispatch(userList())
    }, [dispatch])


    let count = 1;


    return (
        <div className="">
            <div className="display-6 text-center mt-2 mb-4 fw-normal">CRUD APPLICATION</div>
            <div className="tableContainer">
                <Link to="/post" className="btn mb-3 text-light shadow-sm p-2 bg-primary rounded">add user</Link>
                { 
                    users.length ? (
                        <table class="table table-hover table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th>SNO</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    users.map((val) => (

                                        <RecordsComps val={val} count={count++} /> 
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : (
                        <h2>loading...</h2>
                    )
                }
            </div>
        </div>
    )
}

export default Records;


