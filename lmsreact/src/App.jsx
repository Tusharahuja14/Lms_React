
import React from 'react';
import dummyImage1 from './assets/react.svg';
import dummyImage2 from './assets/react.svg';
import dummyImage3 from './assets/react.svg';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="main-content">
        <Hero />
        <PickUpWhereLeftOff />
        <ContinueLearningSection />
        <RecommendedForYou
          dummyImage1={"https://cdn1.byjus.com/wp-content/uploads/2018/11/maths/2016/08/06070323/Variables-In-Algebraic-Expression.jpg"}
          dummyImage2={dummyImage2}
          dummyImage3={dummyImage3}
        />
        <FeaturedLearningPaths />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white shadow-md">
      {/* Logo */}
      <div className='flex'>
        <img src="https://logowik.com/content/uploads/images/brilliant-learn-interactively2712.logowik.com.webp" alt="BRILLIANT Logo" className='w-8 h-8'/>
        <h1 className="text-xl font-bold text-gray-800">BRILLIANT</h1>
      </div>
      {/* Navigation */}
      <div className="flex items-center space-x-4 hover:font-semibold">
        <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md flex">
          <img src="https://banner2.cleanpng.com/20180420/vlq/kisspng-font-awesome-computer-icons-font-housing-logo-5ada418c752ba8.1327093815242530684799.jpg" className='w-6 h-6' alt="" />
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md flex">
          <img src="https://pic.onlinewebfonts.com/thumbnails/icons_179623.svg" className='w-6 h-6' alt="" />
          Courses
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md flex">
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/calendar-icon.png" className='w-6 h-6' alt="" />
          Today
        </a>
        {/* Search Input */}
        <input type="Search" placeholder='Search' className="px-3 py-1 rounded-md border-gray-300 border" />
        {/* Start Trial Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-sm">
          START TRIAL
        </button>
      </div>
    </div>
  );
};


const Hero = () => {
  return (
    <StreakDays completedDays={2} />
  );
};

const StreakDays = ({ completedDays = 0 }) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="streak-area flex items-center py-4 gap-4 ml-4 md:ml-32 mr-4 md:mr-32 mt-2">
      <img src="" alt="" />
      <Bs2Circle
        style={{
          color: 'b6b918', 
         fontSize:40
        }}
      />
      <h2 className="text-3xl font-bold text-gray-800 mr-4 md:mr-12 flex gap-1">Streak<BsFillLightningChargeFill /></h2>
    
      {days.map((day, index) => (
        <span key={day} className={`day px-1 text-center ${completedDays > index ? 'text-yellow-600' : 'text-gray-400'}`}>
          {day}
          <BsFillLightningChargeFill />
        </span>
      ))}
          
    </div>
  );
};

const PickUpWhereLeftOff = () => {
  return (
    <div className='ml-4 md:ml-32 mr-4 md:mr-32'>
      <h3 className="text-xl font-bold text-gray-800 mb-2">Pick up where you left off</h3>
      <div className="px-4 py-4 rounded-md flex items-center gap-5 border justify-center">
        <img src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/5ded2f834c7856001cc47c7d.png" className='w-[40%] h-54' alt="" />
        <div className="mr-4">
          <div className="flex flex-col space-y-2">
            <h4 className="font-medium text-gray-600 text-sm">Cryptocurrency Lesson 1 of 19</h4>
            <p className="text-gray-900 font-bold text-2xl">A Brief History of Currency</p>
            <div className="flex items-center space-x-2">
              <p className='text-gray-600'>Trust is the backbone of all currencies, from commodity monies to crypto</p>
            </div>
            <div className='h-1 w-full rounded-xl'></div>
            <button className="bg-zinc-800 hover:bg-black text-white font-bold py-2 px-4 rounded-md shadow-sm">
              ▷ Resume course
            </button>
            <div className='h-1 w-[50%]'>
              <div className='bg-yellow-300 h-1 w-60%'></div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-gray-600">Longest streak: 19 Lessons completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContinueLearningSection = () => {
  return (
    <div className='ml-4 md:ml-32 mr-4 md:mr-32'>
      <h3 className="text-xl font-bold text-gray-800 mb-2">Continue Learning</h3>
      <div className="bg-white px-4 py-4 rounded

-md shadow-md mt-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <Card imageUrl="https://images.pexels.com/photos/9951077/pexels-photo-9951077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={40} name="Binary Decimal & Hexadecimal" coursetitle="computer memory 2 of 26" />
          <Card imageUrl="https://images.unsplash.com/photo-1643780668909-580822430155?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={40} name="Random Variable " coursetitle="Random variables & Distributions"/>
          <Card imageUrl="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={40} name="Computationally modeling" coursetitle="Artificial neural network . Lessons" />
          <Card imageUrl="https://images.unsplash.com/photo-1643780668909-580822430155?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={40} name="avoid the scan" coursetitle="Casino Probability . Lessons 3 of 16" />
        </div>
      </div>
    </div>
  );
};

const Card = ({ imageUrl ,width,name,coursetitle }) => {
  return (
    <div className="bg-gray-100 rounded-md w-full md:w-58 grid">
      <img src={imageUrl} alt="Course" className="w-[80%] h-40 object-cover ml-auto mr-auto mt-2 mb-auto" />
      <h7 className="text-sm  text-gray-800 mb-2 text-center ">{coursetitle}</h7>
      <p className="text-gray-900 mb-4 text-center font-bold">
        {name}
      </p>
      <div className='h-1 w-full rounded-xl'>
        <div className="h-1 rounded-xl bg-yellow-400 " style={{width:`${width}%`}} ></div>
      </div>
      <button className="bg-gray-900 hover:bg-black text-white font-bold py-2 px-4 rounded-md shadow-sm">
        Continue Learning
      </button>
    </div>
  );
};

const RecommendedForYou = ({ dummyImage1 }) => {
  return (
    <div className='ml-4 md:ml-32 mr-4 md:mr-32'>
      <h3 className="text-xl font-bold text-gray-800 mb-2">Continue Learning</h3>
      <div className="bg-white px-4 py-4 rounded-md shadow-md mt-4 flex ">
        <div className=" items-center space-x-4 bg-gray-100 ">
          <img src={dummyImage1} alt="Pre-Algebra" className="w-[70%] mt-2 mb-2 ml-auto mr-auto h-44 " />
          <p className="text-gray-700 text-sm">Pre-Algebra . Lesson 1 of 28</p>
          <h3 className='font-bold text-gray-950'>Understanding Variables</h3>
        </div>
      </div>
    </div>
  );
};

const FeaturedLearningPaths = () => {
  return (
    <div className="bg-white px-4 py-4 rounded-md shadow-md mt-4 ml-4 md:ml-32 mr-4 md:mr-32">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Featured Learning Paths</h3>
      {/* Add your featured learning paths here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 rounded-md p-4 flex flex-col justify-between">
          <img src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[50%] h-44 object-cover ml-auto mr-auto'/>
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2 ml-2">Foundational Math</h4>
            <p className="text-gray-600 mb-4 ml-2">
              This 7-course path starts with pre-algebra and builds up to fundamentals of algebra and geometry.
            </p>
            <button className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded-md shadow-sm ml-2">
              Get started
            </button>
          </div>
        </div>
        <div className="bg-gray-100 rounded-md p-4 flex flex-col justify-between">
          <img src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[50%] h-44 object-cover ml-auto mr-auto'/>
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2 ml-2">Mathematical Thinking</h4>
            <p className="text-gray-600 mb-4 ml-2">
              This course path starts with everyday math and builds up to fundamentals of algebra and geometry.
            </p>
            <button className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded-md shadow-sm ml-2">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
