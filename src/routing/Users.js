import { Link, useParams } from 'react-router-dom';

const Users = () => {
    const {id} = useParams();

    return( 
        <>
            <h1> Users </h1>
            <ul>
                <li>
                    <Link to="/users/user1">User1</Link>
                </li>
                <li>
                    <Link to="users/2">Users2</Link>
                </li>
                <li>
                    <Link to="/users/3">Users 3</Link>
                </li>
            </ul>
            <p>{id}</p>
        </>
    );
}
export default Users;