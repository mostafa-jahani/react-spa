import {useEffect, useState} from "react";
import {updatePost} from "../../controller/postController";
import {sweetalertError, sweetalertUpdatePost} from "../../services/seetalertService";


const EditForm = ({post}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        updatePost(post.id, {title, body, userId: 1, id: post.id})
            .then((data) => {
                setLoading(false)
                setError(null)
                sweetalertUpdatePost()
            }).catch(err => {
            setLoading(false)
            setError(err.message)
            sweetalertError(err)
        });
    }

    useEffect(() => {
        setTitle(post.title)
        setBody(post.body)
    }, [post])

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="form-control"/>
                <div className="form-text text-danger">
                    {title ? '' : 'Title is required'}
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Body</label>
                <textarea onChange={(e) => setBody(e.target.value)} value={body} className="form-control"
                          rows="6"></textarea>
                <div className="form-text text-danger">
                    {body ? '' : 'Title is required'}
                </div>
            </div>
            <button className="btn btn-dark" type="submit" disabled={title === '' || body === ''}>
                {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
                Edit
            </button>
            {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
        </form>
    )
}

export default EditForm;