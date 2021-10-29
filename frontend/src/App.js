import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Records from './Components/screen/Records';
import PostForm from './Components/post/PostForm';
import UpdateForm from './Components/update/UpdateForm';

const App = () => {
    return (
        
        <Router>
            <Route path="/" exact component={Records} />
            <Route path="/post" exact component={PostForm} />
            <Route path="/update/:id" exact component={UpdateForm} />
        </Router>
    )
}

export default App;
