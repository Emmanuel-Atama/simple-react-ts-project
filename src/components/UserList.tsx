import React, {FC} from 'react'
import { CurrentUser } from './interface';
import '../index.css'

type UserListProps = {
    contacts: CurrentUser[]
}

const UserList: FC<UserListProps> = ({contacts}) => {
  return (
    <ul className='list-group'>
      <div className='user-display'>
{
    contacts.map((contact, index) => {
        return (
            <div className='m-2 rounded'
            key={index}
            style={{maxWidth: "19rem"}}
            >
<li className="list-group-item">Full Name: {contact.fullname}</li>
<li className="list-group-item">Username: {contact.username} </li>
<li className="list-group-item">Email: {contact.email}</li>
{/* <li className="list-group-item">Password: {contact.password}</li> */}
            </div>
        )
    })
}
      </div>
    </ul>
  )
}

export default UserList
