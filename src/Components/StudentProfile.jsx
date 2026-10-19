function StudentProfile({name, program, yearLevel}){
    return(
      <section className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-indigo-700 mb-4">
          Student Profile
        </h3>
        <p>Name: {name}</p>
        <p>Program: {program}</p>
        <p>Year Level: {yearLevel}</p>
      </section>
    )
}

export default StudentProfile;