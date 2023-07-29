import React from 'react';
import formal from '../assets/formal.png';

const About = () => {
  return (

    <div id='about' className='w-full min-h-screen p-2 flex flex-col md:flex-row justify-center items-center md:py-16 bg-black'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 mb-4 my-5">
             About <span className="text-red-500">Me</span>
        </h2>
          <h2 className='py-4 text-gray-300 text-2xl'>Hi there, my name is Danish Ansari</h2>
          <div class="border border-white p-4">
          <p class="text-lg md:text-xl text-white mb-8">
            <p class="text-2xl font-serif"></p>  
            I am an Engineering student (4th Year) at Vellore Institute of Technology for Computer Science and Engineering. I am a dedicated and enthusiastic Computer Science and Engineering student, eager to make a mark in the world of technology. With a profound interest in both Web Development and Artificial Intelligence, I strive to be at the forefront of innovation and create meaningful solutions for real-world challenges.

            <br/>
           <br/>Web Development has always fascinated me with its ability to bring ideas to life on the digital canvas. From crafting interactive user interfaces to designing seamless user experiences, I find joy in exploring the limitless possibilities of front-end development. Learning new web technologies and keeping up with the ever-evolving trends is both exhilarating and rewarding for me.

On the other hand, the realm of Artificial Intelligence captivates me with its potential to revolutionize industries and enhance human lives. Exploring the depths of machine learning algorithms inspires me to work on projects that can drive positive change. I believe AI has the power to solve complex problems and empower businesses with intelligent decision-making.
            <br/>
           <br/>
           I am a passionate and dedicated learner, consistently seeking to acquire new knowledge and enriching experiences within the realm of 
Computer Science and Engineering. An ardent environmentalist, eagerly anticipating the opportunity to drive positive change in the 
corporate world, promoting accountability, green practices, and sustainability initiatives.
<br/>
            <br/>
            As I continue my journey in the field of Computer Science and Engineering, my goal is to contribute meaningfully to the technological landscape, building user-centric web applications and AI-driven solutions that leave a positive and lasting impact on society.
          </p>
        </div>
        </div>
        <div className="w-72 h-72 md:w-auto md:h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 mx-auto my-4">
          <img src={formal} className="rounded-xl w-full h-full object-cover" alt="/" />
        </div>

      </div>
      <br/>
    </div>
    
  );
};

export default About;


