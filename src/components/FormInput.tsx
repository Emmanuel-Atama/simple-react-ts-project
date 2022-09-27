import React from 'react'
import { useState, FC } from 'react';
import { Form, Button } from 'react-bootstrap';
import { CurrentUser } from './interface';


type FormInputProps = {
    setContacts: React.Dispatch<React.SetStateAction<CurrentUser[]>>
}

const FormInput: FC<FormInputProps> = ({ setContacts }) => {
    const [user, setUser] = useState({
        fullname: "",
        username: "",
        email: "",
        password: ""
    })

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setContacts((prevState) => [...prevState, user])
    }

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setUser((prevState) => {
            return { ...prevState, [name]: value }
        })
    }

    return (
        <Form onSubmit={handleSubmitForm} className='border shadow p-4 rounded'>
            <h2 className='mb-3'>Login Form</h2>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter Your Full Name'
                    name='fullname'
                    value={user.fullname}
                    onChange={handleFormChange}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter Your Username'
                    name="username"
                    value={user.username}
                    onChange={handleFormChange}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter Your Email Address'
                    name="email"
                    value={user.email}
                    onChange={handleFormChange}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter Your Password'
                    name="password"
                    value={user.password}
                    onChange={handleFormChange}
                />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Submit
            </Button>
        </Form>
    )
}

export default FormInput
