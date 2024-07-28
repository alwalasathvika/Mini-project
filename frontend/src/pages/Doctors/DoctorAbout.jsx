import { formatDate }  from '../../utils/formateDate';

const DoctorAbout = () => {
  return (
    <>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">James Smith</span>
        </h3>
        <p className="text__para">
          Dr. James smith is a highly skilled and experienced general surgeon, renowned for his expertise in minimally invasive surgical techniques. With over 15 years of experience in the field, Dr. Parke has performed a wide range of complex surgeries, including laparoscopic procedures, gastrointestinal surgeries, and emergency trauma surgeries.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("09-13-2010")} - {formatDate("09-13-2016")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">PhD in Surgery</p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">New Apollo Hospital, New York.</p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("07-04-2010")} - {formatDate("08-13-2014")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">PhD in Surgery</p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">New Apollo Hospital, New York.</p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Experience</h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formatDate("07-04-2015")} - {formatDate("08-13-2020")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">Sr. Surgeon</p>
            <p className="text-[16px] leading-6 font-medium text-textColor">New Apollo Hospital, New York.</p>
          </li>
          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formatDate("09-01-2020")} - Present
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">Chief Surgeon</p>
            <p className="text-[16px] leading-6 font-medium text-textColor">New Apollo Hospital, New York.</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DoctorAbout;
