import './index.css'
import Navbar from './Components/Navbar'
import CourseList from './Components/CourseList'
import Announcements from './Components/Announcements'

function App() {

  return (
    <>
     <Navbar appName ="STUDENTHUB"/>
     <CourseList courseArray={[
      { name: "Web Development", units: 3 },
      { name: "Data Analytics", units: 3 },
      { name: "Database Management", units: 3 }
     ]}/>
     <Announcements />
    </>
  )
}

export default App
