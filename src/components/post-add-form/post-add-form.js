import React from 'react';

import './post-add-form.css';


const PostAddForm = ({onAdd}) =>{
    return (
        <div className='bottom-panel d-flex'>
            <input
            type="text"
            placeholder="What do you think"
            className = "form-contron new-post-label"
            />

            <button 
            type="submit"
            onClick={() => onAdd('Hello')}
            className="btn btn-outline-secondary">
                Add
            </button>

        </div>
    )
}

export default PostAddForm;