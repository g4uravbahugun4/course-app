// enrolledCoursesStore.js
import { makeAutoObservable } from 'mobx';

class EnrolledCoursesStore {
    enrolledCourses = [];
    likes = {};

    constructor() {
        makeAutoObservable(this);
        this.loadEnrolledCourses(); 
    }

    enrollCourse(courseId) {
        if (!this.enrolledCourses.includes(courseId)) {
            this.enrolledCourses.push(courseId);
            this.saveEnrolledCourses();
        }
    }

   
    isCourseEnrolled(courseId) {
        return this.enrolledCourses.includes(courseId);
    }

    
    loadEnrolledCourses() {
        const storedEnrolledCourses = localStorage.getItem('enrolledCourses');
        if (storedEnrolledCourses) {
            this.enrolledCourses = JSON.parse(storedEnrolledCourses);
        }

        const storedLikes = localStorage.getItem('courseLikes');
        if (storedLikes) {
            this.likes = JSON.parse(storedLikes);
        }
    }

   
    saveEnrolledCourses() {
        localStorage.setItem('enrolledCourses', JSON.stringify(this.enrolledCourses));
        localStorage.setItem('courseLikes', JSON.stringify(this.likes));
    }

    toggleLike(courseId) {
        this.likes[courseId] = !this.likes[courseId];
        this.saveEnrolledCourses(); 
    }
}

const enrolledCoursesStore = new EnrolledCoursesStore();
export default enrolledCoursesStore;
