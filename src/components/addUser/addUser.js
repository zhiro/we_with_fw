import React, { useState } from 'react';
import './addUser.css';
import { useNavigate } from "react-router-dom";
import UserGridItem from "../userGridItem";

function AddUser() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData, [name]: value
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

    const handleAddUser = () => {
        const sessionData = sessionStorage.getItem('users');
        const users = sessionData ? JSON.parse(sessionData) : [];

        const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;

        const newUser = {
            ...userData,
            id: newId,
        };

        sessionStorage.setItem('users', JSON.stringify([...users, newUser]));

        setUserData({
            name: "",
            username: "",
            email: "",
            address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: {
                    lat: "",
                    lng: ""
                }
            },
            phone: "",
            website: "",
            company: {
                name: "",
                catchPhrase: "",
                bs: ""
            }
        });

        navigate("/");
    };

    return (
        <div className="App">
            <div className={"backButtonRow"}>
                <button id="backButton" onClick={() => { navigate("/") }}>Back</button>
            </div>
            <div className="header-row">
                <h1>User Data</h1>
                <div className={"headerButtons"}>
                    <button onClick={handleAddUser}>Add New</button>
                </div>

            </div>
            <div className="grid-container">
                {/*<UserGridItem name={"name"} placeholder={"Name"} value={userData.name} onChange={handleInputChange}></UserGridItem>*/}
                {/*<UserGridItem name={"username"} placeholder={"Username"} value={userData.username} onChange={handleInputChange}></UserGridItem>*/}
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
                        onChange={(e) => {
                            setUserData(prevData => ({
                                ...prevData,
                                address: {
                                    ...prevData.address,
                                    geo: {...prevData.address.geo, lng: e.target.value}
                                }
                            }));
                        }}
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

export default AddUser;
