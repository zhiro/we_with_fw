import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './viewSingleUser.css';

const ViewSingleUser = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const sessionData = sessionStorage.getItem('users');
    const users = sessionData ? JSON.parse(sessionData) : [];

    const user = users.find(u => u.id === parseInt(userId));

    const handleBack = () => {
        navigate(-1);
    };

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <div className={"backButtonRow"}>
                <button id={"backButton"} onClick={handleBack}>Back</button>
            </div>
            <h1>{user.username} details</h1>
            <div className="userInfo">
                <p>Name: <span>{user.name}</span></p>
                <p>Email: <span>{user.email}</span></p>
                <p>Address: <span>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</span></p>
                <p>Phone: <span>{user.phone}</span></p>
                <p>Website: <span>{user.website}</span></p>
                <p>Company: <span>name: {user.company.name}, catchphrase: {user.company.catchPhrase}, bs: {user.company.bs}</span></p>
            </div>
        </div>
    );
};

export default ViewSingleUser;
