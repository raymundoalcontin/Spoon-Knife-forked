import AnnouncementItem from "./AnnouncementItem"

function Announcements(){

    const AnnouncementItemArray = [{
        title: "Midterm Exams", message: "Midterm examinations begin next week.", date:"October 19, 2026"},{
        title: "Project Submission", message: "Submit your final project before Friday.", date:"October 23, 2026"
        }]

    return(
      <section class="bg-white rounded-xl shadow-md p-6 md:col-span-2">
        <h3 class="text-xl font-bold text-indigo-700 mb-4">
          Announcements
        </h3>
        <AnnouncementItem title={AnnouncementItemArray[0].title} message={AnnouncementItemArray[0].message} date={AnnouncementItemArray[0].date}/>
        <AnnouncementItem title={AnnouncementItemArray[1].title} message={AnnouncementItemArray[1].message} date={AnnouncementItemArray[1].date}/>
      </section>
    )
}

export default Announcements;