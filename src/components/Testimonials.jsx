import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div id="Testimonials" className="mt-20 tracking-wide">
        <h2 className=" text-center text-3xl sm:text-5xl lg:text-6xl my-10 lg:my-20">
            What people are saying
        </h2>

        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial,index)=>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-6">
                    <div className ="bg-neutral border border-neutral-800 px-4 py-2 rounded-md text-md font-thin">
                        <p>{testimonial.text}</p>
                        <div className="flex items-start mt-8">  
                            <img className="rounded-full w-12 h-12 mr-6 border-neutral-300" src={testimonial.image} alt={testimonial.user}/>

                            <div>
                                <h6>{testimonial.user}</h6>
                                <p className="text-sm font-normal italic text-neutral-600">{testimonial.company}</p>
                        </div>
                        </div>

                    </div>
                    
                </div>    
            ))}
        </div>

    </div>
  )
}
export default Testimonials