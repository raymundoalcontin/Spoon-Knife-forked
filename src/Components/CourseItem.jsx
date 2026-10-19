function CourseItem({courseName, units}){
    return (
        <li class="bg-indigo-50 rounded-lg p-3">
            {courseName} - {units} Units
          </li>
    )
}

export default CourseItem;