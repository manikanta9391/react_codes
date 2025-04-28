

const App=()=>{
 return (
  <div className="text-white h-screen w-screen bg-[url('https://assets.ccbp.in/frontend/react-js/social-buttons-bg.png')] bg-cover bg-no-repeat flex flex-col justify-center items-center">
    <h1 className="text-2xl md:text-5xl font-bold">Social Buttons</h1>
    <div className="flex flex-col md:flex-row justify-between gap-5 mt-6 items-center">
    <button className="bg-[#eab308] rounded-xl w-15 h-7">Like</button>
    <button className="bg-[#ffffff] rounded-xl w-23 h-8 text-black text-sm">Comment</button>
    <button className="bg-[#1d4ed8] rounded-xl w-15 h-7">Share</button>
    </div>
  </div>
 )
}
export default App