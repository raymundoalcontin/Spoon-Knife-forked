import CourseItem from "./CourseItem";

function CourseList({courseArray}){
    return(
      <section class="bg-white rounded-xl shadow-md p-6">
        <h3 class="text-xl font-bold text-indigo-700 mb-4">
          My Courses
        </h3>

        <ul class="space-y-3">

          <CourseItem courseName ={courseArray[0].name} units ={courseArray[0].units}/>
          <CourseItem courseName ={courseArray[1].name} units ={courseArray[1].units}/>
          <CourseItem courseName ={courseArray[2].name} units ={courseArray[2].units}/>



        </ul>
      </section>
    )
}


export default CourseList;