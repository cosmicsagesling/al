import { FC } from 'react';
import Image from 'next/image';

const HeroSection: FC = () => {
  return (
    <div className=" px-14 py-16">
      <div className="flex flex-col min-h-[69vh] lg:flex-row items-center">
        {/* Left Column (Hero Text) */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="flex items-center mb-4">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-700">MPAS Training platform</p>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Grow your skills and advance career
          </h1>
          
          <p className="text-gray-600 mb-8 text-lg">
            Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">
              Start your Journey
            </button>
            
            <button className="px-6 py-3 bg-blue-100 text-blue-600 rounded-lg font-medium flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Build Skills
            </button>
          </div>
        </div>
        
        {/* Right Column (Hero Image) */}
        <div className="w-full lg:w-1/2 px-11 relative">
          <div className="relative">
            <Image 
              src="/hero-person.png" 
              alt="Instructor with materials" 
              width={600} 
              height={450}
              className="relative z-10"
            />
            
            {/* Trophy decoration */}
            <div className="absolute -left-12 top-10 z-0">
              <Image src="/trophy.png" alt="Trophy" width={60} height={60} />
            </div>
            
            {/* Qualified instructor card */}
            <div className="absolute -right-10 top-20 bg-white rounded-lg p-3 shadow-lg z-20">
              <p className="text-sm text-gray-600 mb-2">Qualified Instructor</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                <div className="w-32 h-2 bg-gray-300 rounded"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                <div className="w-32 h-2 bg-gray-300 rounded"></div>
              </div>
            </div>
            
            {/* Weekly hours chart */}
            <div className="absolute -bottom-10 left-10 bg-white rounded-lg p-4 shadow-lg z-20">
              <p className="text-sm text-gray-600 mb-2">Weekly Spent Hours</p>
              <div className="flex items-end gap-2 h-16">
                <div className="w-4 bg-yellow-500 h-8"></div>
                <div className="w-4 bg-yellow-500 h-14"></div>
                <div className="w-4 bg-yellow-500 h-6"></div>
                <div className="w-4 bg-yellow-500 h-10"></div>
                <div className="w-4 bg-yellow-500 h-4"></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">32 hrs 45 mins</p>
            </div>
            
            {/* Target icon */}
            <div className="absolute right-10 bottom-20 z-0">
              <Image src="/target.png" alt="Target" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      

    </div>
  );
};

export default HeroSection;
