import React, { useContext, useState } from 'react'; 
import { authContext } from '../../context/AuthContext';
import { MyBookings } from './MyBookings';
import Profile from './Profile';
import useGetProfile from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error'; // Assuming Error component exists

const MyAccount = () => {
    const { dispatch } = useContext(authContext);
    const [tab, setTab] = useState('bookings'); 

    const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <section>
            <div className='max-w-[1170px] px-5 mx-auto'>
                {loading && <Loading />}  {/* Show loading spinner while loading */}
                
                {error && <Error />}  {/* Show error message if there's an error */}
                
                {!loading && !error && userData && (  // Render content only if not loading and no error
                    <div className='grid md:grid-cols-3 gap-10'>
                        <div className='pb-[50px] px-[30px] rounded-md'>
                            <div className='flex items-center justify-center'>
                                <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
                                    <img src={userData.photo} alt="User" className='w-full h-full rounded-full' />
                                </figure>
                            </div>
                            <div className='text-center mt-4'>
                                <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>
                                    {userData.name} {/* Use userData for the name */}
                                </h3>
                                <p className='text-textColor text-[15px] leading-6 font-medium'>
                                    {userData.email } {/* Use userData for the email */}
                                </p>
                                <p className='text-textColor text-[15px] leading-6 font-medium'>
                                    Blood Type:
                                    <span className='ml-2 text-headingColor text-[22px] leading-8'>
                                        {userData.bloodType} {/* Use userData for blood type */}
                                    </span>
                                </p>
                            </div>
                            <div className='mt-[50px] md:mt-[100px]'>
                                <button 
                                    onClick={handleLogout} 
                                    className='w-full bg-black p-3 text-[16px] leading-7 rounded-md text-white'>
                                    Logout
                                </button>
                                <button 
                                    className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>
                                    Delete Account
                                </button>
                            </div>
                        </div>
        
                        <div className='md:col-span-2 md:px-[30px]'>
                            <div>
                                <button
                                    onClick={() => setTab('bookings')}
                                    className={`p-2 mr-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor ${tab === 'bookings' ? 'bg-primaryColor text-white font-normal' : ''}`}
                                >
                                    My Bookings
                                </button>
                                <button
                                    onClick={() => setTab('settings')}
                                    className={`py-2 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor ${tab === 'settings' ? 'bg-primaryColor text-white font-normal' : ''}`}
                                >
                                    Profile Settings
                                </button>
                            </div>
        
                            {/* Render components based on tab */}
                            {tab === 'bookings' && <MyBookings />}
                            {tab === 'settings' && <Profile user={userData} />}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MyAccount;
