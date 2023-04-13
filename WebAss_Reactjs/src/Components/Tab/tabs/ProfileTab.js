import React from 'react'
import clsx from 'clsx'
import UserContext from '../../../Contexts/UserContext'
import ToastMessage from '../../ToastMessage/ToastMessage'

const ProfileTab = ({id, user, selectedTab}) => {
    const [username, setUsername] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [contactNumber, setContactNumber] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [district, setDistrict] = React.useState('')
    const [city, setCity] = React.useState('')
    const {handleUpdate, updateMessage, setUpdateMessage} = React.useContext(UserContext)

    React.useEffect(() => {
        setUsername(user?.username)
        setFirstName(user?.first_name)
        setLastName(user?.last_name)
        setEmail(user?.email)
        setContactNumber(user?.contact_number)
        setAddress(user?.address)
        setDistrict(user?.district)
        setCity(user?.city)
    }, [user])

    React.useEffect(() => {
        let tid = setTimeout(() => setUpdateMessage(null), 2500)

        return () => {
            clearTimeout(tid)
        }
    }, [updateMessage])

    return (
        <>
            {updateMessage && updateMessage !== '' && 
                <ToastMessage 
                    header={updateMessage === "success" ? "Success" : "Fail"}
                    body={`Update user ${updateMessage}`}
                />
            }
            <form
                className={clsx("profile p-2", {
                    'disappear': selectedTab !== "Profile"
                })}
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="avatar-upload">
                    <div className="avatar-preview">
                        <div 
                            id="imagePreview" 
                            style={{
                                backgroundImage: `url(https://avatars.dicebear.com/api/bottts/${username}.svg)`
                            }}>
                        </div>
                    </div>
                </div>

                <div className="account-info-editer">
                    <div className="mb-3 d-flex justify-content-between gap-3">
                        <div className="flex-grow-1">
                            <label  className="form-label">First Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={firstName ? firstName : ''}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="flex-grow-1">
                            <label  className="form-label">Last Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={lastName ? lastName : ''}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            value={email ? email : ''}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Contacts Number</label>
                        <input 
                            type="tel" 
                            className="form-control" 
                            value={contactNumber ? contactNumber : ''}
                            onChange={(e) => setContactNumber(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={address ? address : ''}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <div className="mb-3 d-flex justify-content-between gap-3">
                        <div className="flex-grow-1">
                            <label  className="form-label">District</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={district ? district : ''}
                                onChange={(e) => setDistrict(e.target.value)}
                            />
                        </div>

                        <div className="flex-grow-1">
                            <label  className="form-label">City</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={city ? city : ''}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="mt-2"
                        onClick={() => {
                            handleUpdate(id, firstName, lastName, email, contactNumber, address, city, district)
                        }}
                    >Save</button>
                </div>
            </form>
        </>
    )
}

export default ProfileTab