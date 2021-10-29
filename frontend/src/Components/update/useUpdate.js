import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userUpdate } from '../../Redux/actions/Actions';
import { useHistory } from 'react-router-dom';


const useUpdate = () => {
    
    const users = useSelector(state => state.list.userList);
    
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        id: '',
        name: '',
        email: ''
    })
    

    useEffect(() => {
        users.map((val) => (
            setValues({
                id: val.id,
                name: val.name,
                email: val.email
            })
        ))
    }, [users])
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }


    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();


        dispatch(userUpdate(values.id ,values))

        history.push('/')

        setValues({
            name: '',
            email: ''
        })
    }
    
    return { handleChange, handleSubmit, values}
}

export default useUpdate;
