import React, { useEffect } from 'react'
import SyllabusAccord from '../../components/SyllabusAccord'
import { useParams } from 'react-router-dom'
import data from '../../lib/data.json'
import { Alert } from '@mui/material'
import { observer } from 'mobx-react';
import enrolledCoursesStore from '../../store/enrolledCourseStore'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

function CourseInfo() {
    const {courseId}=useParams()
    const selectedCourse = data.find(course => course.id == courseId);
    console.log(selectedCourse)
    
    const enroll = () => {
        // Check if the course is already enrolled
        if (!enrolledCoursesStore.isCourseEnrolled(courseId)) {
            // Enroll in the course using the MobX store
            enrolledCoursesStore.enrollCourse(courseId);
            // Optionally, provide feedback to the user upon successful enrollment
            alert('Successfully enrolled in the course!');
        } else {
            // Optionally, provide feedback if the course is already enrolled
            alert('You are already enrolled in this course.');
        }
    }

    const toggleLike = () => {
        enrolledCoursesStore.toggleLike(courseId);
    }

  return (
    <div className=' lg:ml-10 ml-0 mt-5 w-full py-5'>
        <div className='flex justify-between px-4 items-start'>
        <div className='flex flex-col  w-1/2'>
        <div className='lg:flex lg:flex-row flex flex-col justify-between items-start lg:items-center'>        
        <div className='lg:text-[36px] text-[18px] font-bold text-black'>{selectedCourse.name}</div>
        <div className='px-5 mt-2 py-2 bg-green-600 text-center text-white font-medium text-xs rounded-md '>{selectedCourse.enrollmentStatus}</div>
        </div>
        <div className='flex items-center mt-5 gap-4'>
        <div className='lg:text-[16px] text-[12px] font-bold text-green-700 bg-green-200 px-3 py-1 rounded-md font-sans'>{selectedCourse.location}</div>
        <div className='lg:text-[16px] text-[12px] font-bold text-neutral-700 font-sans'>{selectedCourse.duration}</div>
        <div className='lg:text-[16px] text-[12px] lg:block hidden font-bold px-2 py-1 rounded-md bg-blue-100 text-neutral-600 font-sans'>{selectedCourse.schedule}</div>  
        </div>
        <div className='lg:text-[16px] mt-2 text-[12px] lg:hidden block font-bold px-2 py-1 rounded-md bg-blue-100 text-neutral-600 font-sans'>{selectedCourse.schedule}</div>  

        <div className='mt-10 lg:block hidden text-blue-900  text-xl mb-10 text-[14px] font-bold px-2 py-1 rounded-md font-sans'><span className='font-bold text-neutral-600 text-lg'>Starts :</span>{selectedCourse.startDate}</div>
        <div className=' lg:flex-col lg:flex hidden p-2 bg-yellow-100'>
        <div className='text-[18px] text-gray-800 font-bold'>Course Decription</div> 
        <div className='text-[16px] text-gray-800 '>{selectedCourse.description}</div> 
        </div>
        <div className=' mt-5 lg:block hidden'>
            <div className='text-[20px] font-bold text-neutral-700'>Pre Requisites</div>
            <div className='mt-2'>
            <ul className='text-gray-600 font-bold text-sm list-disc'>
                {selectedCourse.prerequisites.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div> 
        </div>
         
         <div className='lg:flex lg:flex-col hidden mt-5'>
            <div className='text-[26px] font-bold text-neutral-700'>Syllabus</div>
            <div className='mt-2'>
                {selectedCourse.syllabus.map((item,index)=>(
                    <SyllabusAccord question={`Week ${item.week}`} answer={item.topic} content={item.content} />
                ))}
            </div>
        </div>

         <div className='mt-10 m-auto w-full items-center lg:flex hidden justify-between'>
           {enrolledCoursesStore.isCourseEnrolled(courseId) ? (
                <button disabled className='px-5 py-1 rounded-md text-[#7c7c7c] font-semibold text-base bg-slate-300'>Enrolled </button>
            ) : (
                <button onClick={enroll} className='px-5 py-1 rounded-md text-white font-semibold text-base bg-slate-900'>Enroll </button>
            )}
            <div className='flex items-center'><ThumbUpIcon className='cursor-pointer' color={enrolledCoursesStore.likes[courseId] ? 'primary' : 'inherit'} onClick={toggleLike} /><span className='px-1'>{enrolledCoursesStore.likes[courseId] ? 'Liked' : 'Like'}</span></div>
        </div> 
        
        </div>
            
        <div className='flex flex-col items-center'>
        <img className='lg:w-[300px] lg:h-[300px] h-[150px] w-[150px] rounded-full' src={selectedCourse.thumbnail}/>
        <div className='lg:text-[24px] text-[12px] text-[#444444] font-bold lg:font-semibold'>{selectedCourse.instructor}</div>
        </div>
        </div>


          
          
          <div className='px-4'>
          <div className='mt-10 lg:hidden block text-blue-900  lg:text-xl mb-10 lg:text-[14px] text-sm font-bold  py-1 rounded-md font-sans'><span className='font-bold text-neutral-600 lg:text-lg text-sm'>Starts :</span>{selectedCourse.startDate}</div>
          <div className=' flex-col flex lg:hidden p-2 bg-yellow-100'>
              <div className='lg:text-[18px] text-sm text-gray-800 font-bold'>Course Decription</div>
              <div className='lg:text-[16px] text-sm text-gray-800 '>{selectedCourse.description}</div>
          </div>
          <div className=' mt-5 lg:hidden block'>
              <div className='lg:text-[20px] text-base font-bold text-neutral-700'>Pre Requisites</div>
              <div className='mt-2'>
                  <ul className='text-gray-600 px-4 font-bold text-sm list-disc'>
                      {selectedCourse.prerequisites.map((item, index) => (
                          <li key={index}>{item}</li>
                      ))}
                  </ul>
              </div>
          </div>

          <div className='lg:hidden flex-col flex mt-5'>
              <div className='lg:text-[26px] text-base font-bold text-neutral-700'>Syllabus</div>
              <div className='mt-2'>
                  {selectedCourse.syllabus.map((item, index) => (
                      <SyllabusAccord question={`Week ${item.week}`} answer={item.topic} content={item.content} />
                  ))}
              </div>
          </div>

          <div className='mt-10 m-auto w-full items-center flex lg:hidden justify-between'>
              {enrolledCoursesStore.isCourseEnrolled(courseId) ? (
                  <button disabled className='px-5 py-1 rounded-md text-[#7c7c7c] font-semibold text-base bg-slate-300'>Enrolled </button>
              ) : (
                  <button onClick={enroll} className='px-5 py-1 rounded-md text-white font-semibold text-base bg-slate-900'>Enroll </button>
              )}
              <div className='flex items-center'><ThumbUpIcon className='cursor-pointer' color={enrolledCoursesStore.likes[courseId] ? 'primary' : 'inherit'} onClick={toggleLike} /><span className='px-1'>{enrolledCoursesStore.likes[courseId] ? 'Liked' : 'Like'}</span></div>
          </div>
          </div>

    </div>
  )
}

export default observer(CourseInfo)