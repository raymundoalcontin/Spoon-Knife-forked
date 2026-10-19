function Navbar({appName}){
    return(
  <nav className="flex justify-between items-center bg-indigo-700 px-10 py-5 text-white">
    <h1 className="text-2xl font-bold">{appName}</h1>
    <ul className="flex gap-8">
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </ul>
  </nav>
    )
}

export default Navbar;