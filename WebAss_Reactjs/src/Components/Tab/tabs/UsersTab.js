import clsx from 'clsx'
import React from 'react'
import axios from 'axios'
import ToastMessage from '../../ToastMessage/ToastMessage'
import useFetchData from '../../../Hooks/useFetchData'
import UserContext from '../../../Contexts/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown, faUser,faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

const UsersTabElement = ({id, username, email, role, handleDelete}) => {
    const [showEditRole, setShowEditRow] = React.useState(false)
    const [newRole, setNewRole] = React.useState(role)
    const { handleUpdateRole } = React.useContext(UserContext)

    React.useEffect(() => {
        handleUpdateRole(id, newRole)
    }, [newRole])

    return (
        <tr>
            <td>{id}</td>
            <td>
                <img 
                    src={`https://avatars.dicebear.com/api/bottts/${username}.svg`} 
                    alt={username} 
                    style={{width: '100px'}}/>
            </td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <FontAwesomeIcon
                    icon={newRole === '1' ? faCrown : faUser}
                    className={clsx('mod', {
                        'mod--admin': newRole === '1',
                        'mod--user': newRole === '0'
                    })}
                />
            </td>
            <td>
                <div className='mb-3'>
                    <div className="btn btn-danger mx-3">
                        <FontAwesomeIcon 
                            icon={faTrash} 
                            onClick={() => handleDelete(id)}
                        />
                    </div>
                    <div className='btn btn-primary'>
                        <FontAwesomeIcon 
                            icon={faPen}
                            onClick={() => {
                                setShowEditRow(!showEditRole)
                            }}
                        />
                    </div>
                </div>
                <div 
                    className={clsx('d-flex gap-3 align-items-center', {
                        'disappear': !showEditRole
                    })}
                >
                    <label>Role</label>
                    <select 
                        className='form-select'
                        value={newRole}
                        onChange={(e) => {
                            setNewRole(e.target.value === 'user' ? '0' : '1')
                        }}
                    >
                        <option value={newRole === '1' ? "admin" : "user"}>{newRole === '1' ? "admin" : "user"}</option>
                        <option value={newRole !== '1' ? "admin" : "user"}>{newRole !== '1' ? "admin" : "user"}</option>
                    </select>
                </div>
            </td>
        </tr>
    )
}

const UsersTab = ({selectedTab}) => {
    const {data} = useFetchData('http://localhost/php/ass_backend/User/read')
    const [users, setUsers] = React.useState([])
    const [deleteMessage, setDeleteMessage] = React.useState('')

    React.useEffect(() => {
        setUsers(data)
    }, [data])

    const handleDelete = async (id) => {
        if (id !== undefined) {
            const res = await axios.get(`http://localhost/php/ass_backend/User/delete/${id}`)
            if (res.data.message === 'success') {
                let newList = users.filter((user) => user.id !== id)
                setUsers(newList)
            }
            setDeleteMessage(res.data.message)
        }
    }

    // handle remove toast message
    React.useEffect(() => {
        let tid = setTimeout(() => setDeleteMessage(null), 1500)

        return () => {
            clearTimeout(tid)
        }
    }, [deleteMessage])

    return (
        <>
            {deleteMessage && deleteMessage !== '' && 
                <ToastMessage
                    header={deleteMessage === 'success' ? "Success" : "Fail"}
                    body={`Delete account ${deleteMessage}`}
                />
            }
            <div 
                className={clsx('account', 'd-flex justify-content-center', {
                    'disappear': selectedTab !== 'Users'
                })}
            >
                <table className="item-table item__account">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Avatar</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Mod</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users && users.length !== 0 && users.map((user, i) => (
                            <UsersTabElement
                                key={i}
                                id={user.id}
                                username={user.username}
                                email={user.email}
                                role={user.role}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UsersTab