import React, {useState} from 'react';

const ToDoForm: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const titleHandler =(e:React.ChangeEvent<HTMLInputElement>)=> {
        setTitle(e.target.value)
    }
    return (
        <div className='input-field'>
            <input value={title}
                   type="text"
                   id='title'
                   onChange={titleHandler}
            />
            <label
                htmlFor='title'
                className='active'
            >
                Type here...
            </label>

        </div>
    );
};

export default ToDoForm;