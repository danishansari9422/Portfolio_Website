import React from 'react';
import Project1Img from '../assets/myanimeapp.jpg';
import Project2Img from '../assets/ozone.JPG';
import Project3Img from '../assets/real.JPG';
import Project4Img from '../assets/fashion.JPG';
import Project5Img from '../assets/phones.JPG';
import Project6Img from '../assets/king.JPG';
import Project8Img from '../assets/art.JPG';
import '../../index.css';
import { FiArrowRight } from 'react-icons/fi';

const Projects = () => {


  return (
    <div id="projects" className="w-full min-h-screen text-gray-300 bg-gradient-to-b from-blue-900 to-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-yellow-300 mb-6 my-10 text-center">My <span className="text-red-500">Projects</span></h2>
        <p className="text-white mb-8 text-lg text-center">
        Here are some of my best projects,  which are also available on GitHub
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project1Img} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">ALCOALERT: An Alcohol-Detection System for Smart
Vehicles</h3>
                  <p className="mt-2 text-gray-500 text-sm">The Drunk Driving Detection & Accident Prevention System aims to utilize Raspberry Pi with gas sensor, camera module, and GPS module to effectively identify driver drunkenness and avert potential accidents.<br/> By analyzing data from the gas sensor and camera, the system accurately assesses the driver's impairment level. If the driver is deemed unfit to drive, the system initiates actions to immobilize the vehicle.<br/> Raspberry Pi's capabilities and GPIO integration are demonstrated in building this embedded system. Real-time GPS tracking monitors the car's location, while Mosquitto MQTT facilitates mobile notifications to appointed devices. <br/>Leveraging Microsoft Azure, the project ensures efficient data processing and storage. Ultimately, the system's implementation seeks to enhance road safety and support local authorities in enforcing traffic laws, promoting a positive impact on public safety.</p>
                  <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/danishansari9422'
                >
                  more info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>
          
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project3Img} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />
               <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">Fpay As You Go</h3>
                   <p className="mt-2 text-gray-500 text-sm">•Built a IoT device with Raspberry Pi 4B that can regulate drunk driving, sleepy drivers and driving ecosystem using
image & voice recognition.<br/>
• Alcohol consumption detection accuracy of 100 % has been achieved using MQ-3 Gas Sensors.<br/>
• Tracks the car's location using a GPS module and sends notifications to an appointed mobile device using Mosquitto 
MQTT Messaging Broker using Microsoft Azure cloud infrastructure.
</p>           
                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/danishansari9422/FPay_as_You_Go/tree/main/FPay-As-You-Go-main'
                >
                   more info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project2Img} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />
               <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">The_Strix</h3>
                   <p className="mt-2 text-gray-500 text-sm">Implemented a secure authentication system using salted hashed passwords, ensuring robust
user data protection.
Focused on creating a user-friendly interface, allowing learners to navigate courses effortlessly.<br/>Built using HTML,CSS and JavaScript</p>             
                   <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/danishansari9422/The_Strix/tree/main/Career-Guidance-System-main'
                >
                  more info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project4Img} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />              
            <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">Network Penetration and Prevention</h3>
                  <p className="mt-2 text-gray-500 text-sm">Performed ARP poisoning between two systems using virtual machines through Linux OS and developed code for detection
system of man-in-the-middle attack</p>
                  <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/danishansari9422/'
                >
                  more info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project5Img} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />              
            <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">My Phones Store</h3>
                  <p className="mt-2 text-gray-500 text-sm">Created a simple mobile app phones store/shop using Flutter.</p>          
                  <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                
                <a
                  id
                  href='https://github.com/TheMostafax/My_Phones_Store'
                >
                  
                  more info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project6Img} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />              
            <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">Online Food Delivery System Website</h3>
                   <p className="mt-2 text-gray-500 text-sm">Website for online food ordering built with React JS as frontend, and firebase as a temporary backend. Integrated the payment
gateway API Razor Pay as the payment portal for customers.</p>
                   <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/danishansari9422/'
                >
                  more info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>
           
           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project8Img} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />              
            <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
               <h3 className="text-lg font-medium text-gray-900">CHATBOT</h3>
                  <p className="mt-2 text-gray-500 text-sm">AI </p>
                   <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/danishansari9422/'
                >
                   more info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;