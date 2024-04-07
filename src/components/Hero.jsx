import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-5 lg:mt-15">
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>VirtualR  build tools
            <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'> for developers</span>
        </h1>
        <p className='mt-10 text-center max-w-4xl text-neutral-500 text-lg'>
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
        </p>

        <div className="flex justify-center my-10 space-x-12">
        
        <a href='#' className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md'>
            Try for free
            </a>

        <a href='#' className='py-2 px-3 border rounded-md'>
            Documentation
        </a>

        </div>

        <div className="flex flex-col items-center justify-center mt-10 lg:px-20 sm:flex-row sm:px-10">
            <video autoPlay loop muted className='w-3/2 sm:w-1/2 rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4 mx-2'>
                <source src={video1} type="video/mp4"/>
                Your browser does not suppport this video
            </video>

            <video autoPlay loop muted className='w-3/2 sm:w-1/2 rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4 mx-2'>
                <source src={video2} type="video/mp4"/>
                Your browser does not suppport this video
            </video>
        </div>
    </div>

  )
}
export default Hero