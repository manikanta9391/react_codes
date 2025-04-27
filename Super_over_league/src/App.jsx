const App=()=>{
  return (
    <div className="h-screen w-1/2 flex justify-center items-center bg-[#0f172a] font-Roboto md:w-screen">
      <div className="text-center">
        <h1 className="text-white text-1xl   md:text-5xl font-bold mb-10">Super Over League</h1>
        <div className="flex justify-center">
        <img  src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" alt="csk-img"  className="h-1/5 md:h-1/4 w-1/5 md:w-1/4"/>
        <img src="https://assets.ccbp.in/frontend/react-js/csk-img.png" alt="rcb-img" className="h-1/5 md:h-1/4 w-1/5 md:w-1/4"/>
        </div>
      </div>
    </div>
  )
}
export default App