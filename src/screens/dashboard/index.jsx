import React from 'react';
import { observer } from 'mobx-react';
import enrolledCoursesStore from '../../store/enrolledCourseStore';
import data from '../../lib/data.json'
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/routes';
const Dashboard = () => {
  const navigate=useNavigate()
  const enrolledCourses = enrolledCoursesStore.enrolledCourses;

  return (
    <div className="w-full bg-cyan-50">
    <div className='text-[24px] font-bold text-black px-4 md:ml-12 ml-4 mt-5'>Your Courses </div>

      <div className='flex flex-wrap '>
      {enrolledCourses.map(courseId => {
        const course = data.find(course => course.id == courseId);
        console.log(course,"courses enrolled")
        return (
          <div key={course.id} className="w-[320px] mx-2 my-4 mt-20  md:ml-12 ml-4    bg-white shadow-lg rounded-lg ">
            <div className='flex flex-col'>
            <img className="p-2" src={course.thumbnail} alt={course.name} />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{course.name}</h2>
              <p className="text-sm text-gray-600  mt-2">Instructor: {course.instructor}</p>
              <p className="text-sm text-gray-600">Start Date: {course.startDate}</p>
                <p className="text-sm text-gray-600">Status: Pending</p>

              <div className="flex justify-end mt-4">
                <button onClick={()=>{navigate(`${ROUTES.COURSES}/${courseId}`)}} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">View Details</button>
              </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default observer(Dashboard);
