import { useState } from "react";
import {deletePost} from "../../controller/postController";
import {sweetalertDeletePost, sweetalertError} from "../../services/seetalertService";


const DeletePost = ({ postId }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = () => {
        setLoading(true);
        deletePost(postId)
            .then((res) => {
                setLoading(false)
                setError(null)
                sweetalertDeletePost(postId)
            }).catch(err => {
                setLoading(false)
                setError(err.message)
                sweetalertError(err)
            });
    }

    return (
        <>
            <button onClick={handleDelete} className="btn btn-sm btn-danger me-4">
                {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
                Delete
            </button>
            {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
        </>
    )
}
export default DeletePost