import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './editUser.css';

function EditUser() {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const userDataFromStorage = JSON.parse(sessionStorage.getItem('users'));
            const user = userDataFromStorage.find(user => user.id === parseInt(userId));
            setUserData(user);
        };

        fetchUserData();
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            address: {
                ...prevData.address, [name]: value
            }
        }));
    }

    const handleGeoChange  = (e) => {
        const { name, value } = e.target;

        setUserData(prevData => ({
            ...prevData,
            address: {
                ...prevData.address,
                geo: {...prevData.address.geo, [name]: value}
            }
        }));
    };

    const handleCompanyChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            company: {
                ...prevData.company, [name]: value
            }
        }));
    }

    const handleSave = () => {
        const sessionData = sessionStorage.getItem('users');
        const users = JSON.parse(sessionData);
        const updatedUsers = users.map((user) =>
            user.id === parseInt(userId) ? userData : user
        );

        sessionStorage.setItem('users', JSON.stringify(updatedUsers));
        navigate('/');
    };

    if (!userData) {
        return <div>Loading...</div>;
    }


    return (
        <div className="App">
            <div className={"backButtonRow"}>
                <button id={"backButton"} onClick={() => navigate('/')}>Back</button>
            </div>
            <div className="header-row">
                <h1>Edit User Data</h1>
                <div className={"headerButtons"}>
                    <button onClick={handleSave}>Save</button> {}
                    <button id={"cancelBtn"} onClick={() => navigate('/')}>Cancel</button>
                </div>
            </div>
            <div className="grid-container">
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={userData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Street:</label>
                    <input
                        type="text"
                        name="street"
                        placeholder="Street"
                        value={userData.address.street}
                        onChange={handleAddressChange}
                    />
                </div>
                <div>
                    <label>Suite:</label>
                    <input
                        type="text"
                        name="suite"
                        placeholder="Suite"
                        value={userData.address.suite}
                        onChange={handleAddressChange}
                    />
                </div>
                <div>
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={userData.address.city}
                        onChange={handleAddressChange}
                    />
                </div>
                <div>
                    <label>Zip:</label>
                    <input
                        type="text"
                        name="zipcode"
                        placeholder="Zipcode"
                        value={userData.address.zipcode}
                        onChange={handleAddressChange}
                    />
                </div>
                <div>
                    <label>Latitude:</label>
                    <input
                        type="text"
                        name="lat"
                        placeholder="Latitude"
                        value={userData.address.geo.lat}
                        onChange={handleGeoChange}
                    />
                </div>
                <div>
                    <label>Longitude:</label>
                    <input
                        type="text"
                        name="lng"
                        placeholder="Longitude"
                        value={userData.address.geo.lng}
                        onChange={handleGeoChange}
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Website:</label>
                    <input
                        type="text"
                        name="website"
                        placeholder="Website"
                        value={userData.website}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Company name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Company Name"
                        value={userData.company.name}
                        onChange={handleCompanyChange}
                    />
                </div>
                <div>
                    <label>Catchphrase:</label>
                    <input
                        type="text"
                        name="catchPhrase"
                        placeholder="Catch Phrase"
                        value={userData.company.catchPhrase}
                        onChange={handleCompanyChange}
                    />
                </div>
                <div>
                    <label>BS:</label>
                    <input
                        type="text"
                        name="bs"
                        placeholder="BS"
                        value={userData.company.bs}
                        onChange={handleCompanyChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default EditUser;
