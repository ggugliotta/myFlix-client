import React from 'react';

UpdateUser = ({handleSubmit, handleUpdate, user}) => {
    return (
        <form className='profile-form' onSubmit={(e) => handleSubmit(e)}>
            <h4>Update Form</h4>
            <label>Username:</label>
            <input
                type='text'
                name='Username'
                defaultValue={user.Username}
                onChange={e => handleUpdate(e)} />
            <label>Password</label>
            <input
                type='password'
                name='password'
                defaultValue={user.Password}
                onChange={e => handleUpdate(e)} />
            
            <label>Email address</label>
            <input
                type='email'
                name='Email Address'
                defaultValue={user.Email}
                onChange={e => handleUpdate(e)} />
            

        </form>
    )
}