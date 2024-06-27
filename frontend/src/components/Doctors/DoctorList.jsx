import {doctors} from '../../assets/data/doctors';
import DoctorCard from './DoctorCard';

const DoctorList = () => {
  return (
    <div className=' flex flex-wrap sm:grid-cols-2 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {doctors.map(doctor=>(
            <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
    </div>
  )
}

export default DoctorList