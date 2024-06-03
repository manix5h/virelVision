import cl1 from "../assets/cl1.png";
import cl2 from "../assets/cl2.png";
import cl3 from "../assets/cl3.png";
import cl4 from "../assets/cl4.png";



export function Clients(){
    return(
       <div className="h-fit flex flex-col justify-center " id="clients">
        <div className="text-4xl text-center mt-6">
        Our Clients
        </div>

        <div className="flex  w-full  p-4 justify-around">
          <img src={cl1} alt="" className="w-1/6 p-3 shadow-lg rounded-md " />
          <img src={cl2} alt="" className="w-1/6 p-3 shadow-lg rounded-md" />
          <img src={cl3} alt="" className="w-1/6 p-3 shadow-lg rounded-md" />
          <img src={cl4} alt="" className="w-1/6 p-3 shadow-lg rounded-md" />

        </div>
            
       </div>
    )
}
