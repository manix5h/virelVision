import p1 from "../assets/01.jpg"
import p2 from "../assets/02.jpg"
import p3 from "../assets/03.jpg"
import p4 from "../assets/04.jpg"
import p5 from "../assets/05.jpg"

export function About(){
    return (
      <div id="about">
        <div className="flex p-4 justify-center md:justify-start">
          <h1 className="text-4xl pl-4">CONNECT WITH US</h1>
        </div>

        <div className="flex  w-full  p-4 justify-around">
          <img src={p1} alt="" className="w-1/6 p-3 shadow-lg rounded-md " />
          <img src={p2} alt="" className="w-1/6 p-3 shadow-lg rounded-md" />
          <img src={p3} alt="" className="w-1/6 p-3 shadow-lg rounded-md" />
          <img src={p4} alt="" className="w-1/6 p-3 shadow-lg rounded-md" />
          <img src={p5} alt="" className="w-1/6 p-3 shadow-lg rounded-md" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="m-8 text-3xl text-gray-700 text-center md:text-start">
            VIREL VISION
          </div>

          <div className="flex justify-center text-center md:text-start md:justify-end m-10 p-5">
            <div className=" ">
              <div className="">
                <div className="">
                  <p className="text-gray-700 ">8209521956</p>

                  <p className="text-gray-700 font-serif">
                    virelvision.in@gmail.com
                  </p>
                  <p className="pt-5 text-gray-700">
                    BORKHERA KOTA , RAJASTHAN (INDIA)
                  </p>
                </div>
              </div>
              <div>
                <p className="text-3xl pt-5 md:pt-6 text-gray-700">
                  Stay Updated, Subscribe
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
}