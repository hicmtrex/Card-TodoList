import React from 'react';
import Tilt from 'react-tilt'


const Card = (props) => {
    const { user, users, setUsers } = props;

    function handleDelete() {
        setUsers(users.filter(el => el.id !== user.id));
    }
    return (
        <div className="col-md-4 mb-3">
            <Tilt className="Tilt" options={{ max: 25 }} >
                <div className="card m-2" >
                    <div className="card-header">
                        <img className="card-img-top" src={user.image} alt="" />
                    </div>
                    <div className="card-body">
                        <h2>{user.name}</h2>
                        <h5>{user.age} Years Old</h5>
                        <div>Email: <b>{user.email}</b></div>
                        <div>Job: <b>{user.job}</b></div>
                        <div>Phone: <b>{user.phone}</b></div>
                        <button onClick={handleDelete} className="btn btn-danger">Del</button>
                    </div>
                 
                </div>
            </Tilt>
        </div>
    );
};

export default Card;
