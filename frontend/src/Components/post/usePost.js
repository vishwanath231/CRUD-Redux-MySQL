import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../Redux/actions/Actions';
import { useHistory } from 'react-router-dom';

const usePost = () => {


const dispatch = useDispatch();
    const [values, setValues] = useState({
        name: '',
        email: ''
    })


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

        dispatch(userRegister(values))

        history.push('/');
        setValues({
            name: '',
            email: ''
        })
    
    }

    

    return { handleChange, handleSubmit, values }
}

export default usePost;
