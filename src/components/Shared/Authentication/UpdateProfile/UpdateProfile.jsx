import React, { useContext, useState } from 'react';
import { ChefContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import PageTitle from '../../PageTitle/PageTitle';

const UpdateProfile = () => {
    const { user, updateUser, setReload } = useContext(ChefContext)
    const [name, setName] = useState(user?.displayName)
    const [photo, setPhoto] = useState(user?.photoURL)

    const handleUpdateProfile = (event) => {
        event.preventDefault();
        updateUser(name, photo)
            .then(() => {
                toast.info(`${name} is set as New Display Name`)
                setReload(new Date().getTime())
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                toast.error('Something Went Wrong')
            })
    }

    const handleNameChange = (event) => {
        const name = event.target.value;
        setName(name)
        // console.log(name)
    }
    const handlePhotoChange = (event) => {
        const photo = event.target.value;
        setPhoto(photo)
        // console.log(photo)
    }


    return (
        <div className='mt-40 mb-20 w-full max-w-sm mx-auto px-5 lg:px-0'>
            <PageTitle titles={'Profile'}></PageTitle>
            <p className='text-center font-raleway font-extrabold text-xl'>Update Profile</p>
            <form action="" onSubmit={handleUpdateProfile} className='flex flex-col'>
                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="name">
                        <span>Name</span>
                    </label>
                    {/* name  */}
                    <input
                        onChange={handleNameChange}
                        defaultValue={user?.displayName}
                        className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2' type="text" name="name" id="name" required placeholder='Your Name' />
                </div>

                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="photourl">
                        <span>Photo Url</span>
                    </label>
                    {/* photo  */}
                    <input
                        onChange={handlePhotoChange}
                        defaultValue={user?.photoURL}
                        className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2' type="text" name="photo" id="photo"
                        required placeholder='Photo Url' />
                </div>
                {/* Email */}
                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="email">
                        <span>Email</span>
                    </label>
                    <input
                        readOnly
                        defaultValue={user?.email}
                        className={`bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2`}
                        type="email"
                        name="email"
                        id="email"
                        required placeholder='Your Email' />

                </div>

                {/* {
                    error &&
                    <p className='text-red-500 font-raleway mt-2'>{error}</p>
                } */}
                <input className='bg-black text-white font-raleway font-bold uppercase mt-5 py-1 rounded-md cursor-pointer' type="submit" value="Update" />

            </form>
        </div>
    );
};

export default UpdateProfile;