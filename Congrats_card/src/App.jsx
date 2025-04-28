const App=()=>{
 return (
  <div className="h-screen w-2/4 md:w-4/5 flex flex-col justify-center items-center bg-[url('https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png')] text-center">
    <h1 className="text-black text-1xl md:text-5xl font-400 mb-10">Congratulations</h1>
    <div className="text-center bg-[#cffafe] w-2/6 h-3/5 items-center flex flex-col justiify-center items-center p-4 rounded">
       <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" alt="profile" className="h-25 w-25" />
       <h1 className="text-2xl mt-6 ">Kiran V</h1>
       <p className="text-1sm mt-4 text-[#1e293b]">Vishnu institute of Computer Education and Technology</p>
       <p className="text-1sm text-[#1e293b]">Bhimavaram</p>
       <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" alt="profile" className="h-25 w-25 mt-6" />
    </div>
  </div>
 )
}
export default App
