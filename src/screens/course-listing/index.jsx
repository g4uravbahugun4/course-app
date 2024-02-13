import React, { useEffect, useState } from 'react';
import data from '../../lib/data.json';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

function Courses() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const viewCourseDetails = (id) => {
        navigate(`${ROUTES.COURSES}/${id}`);
    };

    useEffect(() => {
       
        const filtered = data.filter((course) => {
            const searchRegex = new RegExp(searchValue, 'i'); // Case-insensitive search
            return searchRegex.test(course.name) || searchRegex.test(course.instructor);
        });
        setFilteredCourses(filtered);
    }, [searchValue]);

    return (
        <div className='bg-cyan-50'>
            <div className='text-[24px] font-bold mt-5 text-black px-4 lg:ml-10 ml-2'>Courses Available:</div>
            <div className='py-3 px-4'>
                <div className='relative '>
                    <label htmlFor='' className='sr-only'>
                        Search
                    </label>
                    <input
                        type='text'
                        name=''
                        value={searchValue}
                        onChange={handleInputChange}
                        id=''
                        className='py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 - '
                        placeholder='Search for items'
                    />
                    <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3'>
                        <svg
                            className='h-4 w-4 text-gray-400'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'>
                            <circle cx='11' cy='11' r='8' />
                            <path d='m21 21-4.3-4.3' />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='flex w-full flex-col lg:ml-10 ml-0'>
                <div className='lg:-m-1.5 ml-0 overflow-x-auto'>
                    <div className='lg:p-1.5 p-0 inline-block align-middle'>
                        <div className=' rounded-lg divide-y divide-gray-200 '>
                           
                            <div className='overflow-hidden'>
                                <table className=' divide-y divide-gray-200 '>
                                    <thead className='bg-gray-50 '>
                                        <tr>
                                            <th scope='col' className='lg:px-6 px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                                Name
                                            </th>
                                            <th scope='col' className='lg:px-6 px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                                Instructor
                                            </th>
                                            <th scope='col' className='lg:px-6 px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                                Enrollment Status
                                            </th>
                                            <th scope='col' className='lg:px-6 px-3 py-3 text-end text-xs font-medium text-gray-500 uppercase'>
                                                Duration
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='divide-y divide-gray-200 '>
                                        {filteredCourses.map((course, index) => (
                                            <tr key={index} className='hover:bg-slate-100 cursor-pointer' onClick={() => viewCourseDetails(course.id)}>
                                                <td className='lg:px-6 px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-800 '>{course.name}</td>
                                                <td className='lg:px-6 px-3 py-4 whitespace-nowrap text-sm text-gray-800 '>{course.instructor}</td>
                                                <td className='lg:px-6 px-3 py-4 whitespace-nowrap text-sm text-gray-800 font-medium'>{course.enrollmentStatus}</td>
                                                <td className='lg:px-6 px-3 py-4 whitespace-nowrap text-sm text-gray-800'>{course.duration}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
