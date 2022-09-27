import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import EditFormPost from "../../components/posts/EditForm";
import axios from "axios";
import Swal from "sweetalert2";

const EditPost = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(post => {
                setPost(post.data);
                setLoading(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })

    }, [postId]);

    return (
        <div className="col-md-6">
            <h2>Edit Post :</h2>
            {error && <div>{error}</div>}
            {loading && <div className="spinner-border"></div>}
            {post && <EditFormPost post={post}/>}
        </div>
    )
}

export default EditPost;