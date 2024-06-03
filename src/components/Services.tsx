import s1 from "../assets/s1.webp";
import s2 from "../assets/s2.webp";
import s3 from "../assets/s3.webp";

export function Services() {
  return (
    <div id="services" className="h-fit">
      <div className="flex justify-center pt-10">
        <h1 className="text-4xl ">OUR SERVICES</h1>
      </div>

      <div className="flex justify-center ml-10">
        <div className=" grid grid-cols-1 md:space-x-5 space-y-3 sm:grid-cols-3 ">
          <div className="flex justify-center">
            <div className="p-4 mt-4 ml-5">
              <img src={s1} alt="" className="rounded-md shadow-xl p-2"/>
             <div className="m-2">
             <h1 className="text-3xl m-3">STRATEGY SESSION</h1>
              <p className="m-3 text text-gray-500  text-wrap leading-relaxed text-xl">
                Let us guide you through the intricacies of social media for
                your business. Sign up for a detailed session on the essentials
                of effective social media marketing.
              </p>
             </div>
            </div>
          </div>

          <div className="p-4">
            <img src={s2} alt=""  className="rounded-md shadow-xl p-2" />
            <h1 className="text-3xl m-3">EXPERT ADVICE</h1>
            <p className="m-3 flex-wrap text-gray-500  text-wrap leading-relaxed text-xl">
              Enhance your team's social media skills with personalized
              consultations. We focus on your unique needs to boost your
              in-house expertise significantly.
            </p>
          </div>

          <div className="p-4">
            <img src={s3} alt=""  className="rounded-md shadow-xl p-2"/>
            <h1 className="text-3xl m-3">CUSTOMIZED MANAGEMENT</h1>
            <p className="m-3 flex-wrap text-gray-500  text-wrap leading-relaxed text-xl">
              Identify the right platforms, content strategies, and tone for
              your brand. By understanding your brand identity, we can refine
              your social media approach for optimal results.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
