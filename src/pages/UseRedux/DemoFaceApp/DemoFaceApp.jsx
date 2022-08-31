import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addComment } from '../../../Redux/reducers/faceReducer';
export const DemoFaceApp = () => {

    const { arrComment } = useSelector(state => state.faceReducer)
    // nho cham den ten file chua reducer
    const dispatch = useDispatch();

    const userComment = useRef({ name: '', content: '' })

    const handleChangeInput = (e) => {
        let { id, value } = e.target;
        userComment.current[id] = value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newComment ={...userComment.current}
        const action = addComment(newComment);
        dispatch(action);
    }

    return (
        <form className="container" onSubmit={handleSubmit}>
            <h3>Demo Face App</h3>
            <div className='card'>
                <div className='card-header'>
                    {arrComment.map((item, index) => {
                        return <div className='d-flex' key={index}>
                            <div className='avatar me-2' style={{ width: '50px' }}>
                                <img
                                    src={`https://i.pravatar.cc?u=${index}`}
                                    alt='Avatar' className='w-100'
                                    style={{ display: 'block' }} />
                            </div>
                            <div className='content'>
                                <h5 className='text-danger'>{item.name}</h5>
                                <p className="m-0">{item.content}</p>
                            </div>
                        </div>
                    })}
                </div>
                <div className='card-body'>
                    <div className='form-group'>
                        <p>name</p>
                        <input className='form-control' id='name'
                            onChange={handleChangeInput}
                            />
                    </div>
                    <div className='form-group'>
                        <p>content</p>
                        <input className='form-control' id='content'
                            onChange={handleChangeInput} />
                    </div><div className='form-group mt-2'>
                        <button className='btn btn-success'>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

//rafc