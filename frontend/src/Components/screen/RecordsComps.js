import React from 'react'
import { useDispatch } from 'react-redux';
import { userDelete } from '../../Redux/actions/Actions';
import { Link } from 'react-router-dom';


const RecordsComps = ({ val, count }) => {
    
    const dispatch = useDispatch()
    // delete
    const deleteUser = (id) => {
        dispatch(userDelete(id))
    }
    
    

    return (
        
        <tr key={val.uuid} >
            <td >{count}.</td>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>
                <Link to={`/update/${val.id}`} className="btn btn-success mx-1" ><i class="bi bi-pencil-square"></i></Link>
                <button onClick={() => deleteUser(val.uuid)} className="btn btn-danger mx-1"><i class="bi bi-trash"></i></button>
            </td>
        </tr>
        
    )
}

export default RecordsComps;
