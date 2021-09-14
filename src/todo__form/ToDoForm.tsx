import React, {useState} from 'react';
type ToDoFormProps = {
    createToDo: (title:string)=> void

}
const ToDoForm: React.FC<ToDoFormProps> = ({ createToDo}) => {
    const [title, setTitle] = useState<string>('');
    const titleHandler =(e:React.ChangeEvent<HTMLInputElement>)=> {
        setTitle(e.target.value)
    };

    const keyPressHandler =(e:React.KeyboardEvent<HTMLInputElement>)=> {
        if(e.key === 'Enter') {
            createToDo(title);
            setTitle('')
        }

    }
    return (
        <div className='input-field'>
            <input value={title}
                   type="text"
                   id='title'
                   onChange={titleHandler}
                   onKeyDown={keyPressHandler}
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