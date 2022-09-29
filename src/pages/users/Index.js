import {useEffect, useState} from "react";
import ListUsers from "../../components/users/List";
import http from "../../services/httpService";


const IndexUser = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        http.get("/users")
            .then(users => {
                setUsers(users.data);
                setLoading(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })

    }, []);

    return (
        <div className="container mt-5">
            <div className="row g-3">
                <h2>Users :</h2>
                {error && <div>{error}</div>}
                {loading && <div className="spinner-border"></div>}
                {users && <ListUsers users={users}/>}
            </div>
        </div>
    )
}

export default IndexUser