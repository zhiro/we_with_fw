import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {fetchUsers} from "./getUserData";
import './userTable.css';



function UserTable() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        const getUserData = async () => {

            const userData = await fetchUsers();
            setUsers(userData);
        };

        getUserData();
    }, [])


    const handleViewClick = (userId) => {
        navigate(`/view-user/${userId}`);
    };

    const handleEditClick = (userId) => {
        navigate(`/edit-user/${userId}`);
    };

    const updateUser = (userId, updatedUserData) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) => (user.id === parseInt(userId) ? updatedUserData : user))
        );
        sessionStorage.setItem('users', JSON.stringify(users));
    };
    const handleDelete = (userId) => {
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
        sessionStorage.setItem('users', JSON.stringify(updatedUsers));
    };



    return (
        <Container>
            <div className="header-row">
                <h1 className='text-left mt-4'>User table</h1>
                <button className="btn btn-primary" onClick={() => {navigate("add-user")}} >Add user</button>
            </div>
            <Form>
                <InputGroup className='my-3'>
                    <Form.Control
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search users'
                    />
                </InputGroup>
            </Form>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {users
                    .filter((item) => {
                        return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                            || item.username.toLowerCase().includes(search)
                            || item.email.toLowerCase().includes(search);
                    })
                    .map((item, index) => (
                        <tr key={index}>
                            <td onClick={() => handleViewClick(item.id)} style={{ cursor: "pointer", color: "blue"}}>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>{item.company.name}</td>
                            <td>
                                <button className="btn btn-sm btn-warning mx-1"
                                        onClick={() => handleEditClick(item.id)}>Edit
                                </button>
                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default UserTable