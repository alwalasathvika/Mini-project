import React from 'react';
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import useGetProfile from '../../hooks/useFetchData'; // Ensure this path is correct
import { BASE_URL } from '../../config';
import Tabs from './Tabs';

const Dashboard = () => {
  // Use hook inside the component body
  const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`);

  // Debugging: Log the API call responses to inspect data
  console.log({ userData, loading, error });

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && <Loader />}  {/* Show loading spinner while loading */}

        {error && <Error />}  {/* Show error message if there's an error */}

        {/* Render Tabs only when userData is available and there's no error */}
        
          <div className='grid md:grid-cols-3 gap-10'>
            dashboard
            <Tabs />
          </div>
        

        {/* Optional: Handle the case where no userData is returned */}
        {!loading && !error && !userData && <p>No user profile data available.</p>}
      </div>
    </section>
  );
};

export default Dashboard;
