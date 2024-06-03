import { Navbar } from "./Navbar";
import divesh from "../assets/divesh.webp"

export function Home(){
  
    return(
       <div className=""
       id="home">
                    <Navbar/>
         <div className="grid grid-col-2 lg:grid-cols-2 h-screen ">

           

           <div className=" flex justify-center w-full h-full  items-center md:p-8 ml-6  md:pl-24  ">


               <div className=" text-xl  text-wrap shadow-sm ">
                <h1 className="text-5xl font-bold "> Welcome to <span className="text-deep-purple-600"> Virel Vision</span></h1>
                 <p className="  text-gray-400 text-pretty leading-relaxed pt-5"> your ultimate destination for superior social media management services.
                  Our agency specializes in helping creators, business professionals,
                   and celebrities achieve remarkable growth on their social media accounts in the most authentic and organic manner.
                 </p>
                     
                     <div className=" pt-10">
                     <button
          type="button"
          className="text-white w-30 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          BUY NOW
        </button>
      
                     </div>
               </div>
               
           </div>

           <div className="flex justify-center h-full  items-center">
            <img src={divesh} className="h-4/6  rounded-md" alt="" />
           </div>

       </div>
       </div>
    )
}