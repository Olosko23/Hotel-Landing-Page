import React, { useState } from 'react';
import one from './assets/1.jpg';
import three from './assets/3.jpg';
import ten from './assets/10.jpg';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {Drinks,Testimonials,Snacks, Courses} from './Data';
import {Link} from 'react-scroll';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="h-full px-8 gap-4 flex flex-col bg-[#FEFBF3] dark:bg-[#47869b]">
        <section className="pt-5">
        <nav className="flex flex-row gap-5 justify-between">
          <p className="font-semibold text-2xl py-2 px-1">Hotel</p>
          <BsFillMoonStarsFill size={30} onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl pt-2" />
          <Link to="order" smooth duration={600} className=" cursor-pointer py-3 px-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-md font-semibold">Order Here</Link>
        </nav>
        <div className="h-screen grid place-items-center">
          <div>
          <h3 className="font-medium text-3xl mb-4 md:text-6xl">Hotel</h3>
          <p className="text-gray-600 leading-6 md:text-xl max-w-lg mx-auto">Lorem ipsum placeholder words, Lorem ipsum placeholder words,Lorem ipsum placeholder words</p>
          <p className="text-gray-600 leading-6 md:text-xl max-w-lg mx-auto">Lorem ipsum placeholder words, Lorem ipsum placeholder words,Lorem ipsum placeholder words</p>
          <p className="text-gray-600 leading-6 md:text-xl max-w-lg mx-auto">Lorem ipsum placeholder words, Lorem ipsum placeholder words,Lorem ipsum placeholder words</p>
          </div>
        </div>
      </section>
      <section className="grid place-items-center py-4">
        <div>
          <h3 className="font-semibold text-xl mb-5">Why Choose Us</h3>
          <p className="text-gray-600 leading-6">Lorem ipsum placeholder words, Lorem ipsum placeholder words,Lorem ipsum placeholder words</p>
          <p className="text-gray-600 leading-6">Lorem ipsum placeholder words, Lorem ipsum placeholder words,Lorem ipsum placeholder words</p>
          <p className="text-gray-600 leading-6">Lorem ipsum placeholder words, Lorem ipsum placeholder words,Lorem ipsum placeholder words</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto">
      <h3 className="text-3xl font-semibold flex flex-row justify-around">Our Offers</h3>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h4 className="font-semibold text-xl justify-center pb-4">Drinks and Beverage</h4>
            {
              Drinks.map(({id,title,price}) => (
                <p className="capitalize gap-2"key={id}>{title} @{price}</p>
              ))
            }
            <img className="rounded-xl pb-0"src={three} alt="new"/>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h4 className="font-semibold text-xl justify-center pb-4">Starters and Snacks</h4>
            {
              Snacks.map(({id,title,price}) => (
                <p key={id} className="capitalize gap-2">{title} @{price}</p>
              ))
            }
            <img className="rounded-xl pb-0"src={one} alt="new"/>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h4 className="font-semibold text-xl justify-center pb-4">Main Courses</h4>
            {
              Courses.map(({id,title,price}) => (
                <p key={id} className="capitalize gap-2">{title} @{price}</p>
              ))
            }
            <img className="rounded-xl pb-0"src={ten} alt="new"/>
          </div>
        </div>
      </section>
      <section name="order"className="w-full pb-5">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full shadow-lg rounded-xl">
            <div className="pb-8 flex flex-row justify-center">
                <p className="py-6 text-3xl sm:text-4xl font-medium">Submit the form to place an order</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/94770f33-2cf2-411e-8c9f-bd1a03122049" method= "POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md
                    text-gray-700 focus:outline-none" required/>
                    <input type="phone" name="phone" placeholder="Enter Your Phone" className="p-2 bg-transparent border-2 rounded-md
                    text-gray-700 focus:outline-none my-4" required/>
                    <select type="select" name="main_course" placeholder="Your Order" className="p-2 bg-transparent border-2 rounded-md
                    text-gray-700 focus:outline-none my-4">
                        <option>Main Courses</option>
                       {
                          Courses.map(({id,title}) =>(
                            <option key={id} className="capitalize">{title}</option>
                            ))
                        }
                    </select>
                    <select type="select" name="main_course" placeholder="Drinks and Beverages" className="p-2 bg-transparent border-2 rounded-md
                    text-gray-700 focus:outline-none my-4">
                        <option>Drinks and Beverages</option>

                       {
                          Drinks.map(({id,title}) =>(
                            <option key={id} className="capitalize">{title}</option>
                            ))
                        }
                    </select>
                    <select type="select" name="main_course" placeholder="Snacks and Starters" className="p-2 bg-transparent border-2 rounded-md
                    text-gray-700 focus:outline-none my-4">
                      <option>Snacks and Starters</option>
                       {
                          Snacks.map(({id,title}) =>(
                            <option key={id} className="capitalize">{title}</option>
                            ))
                        }
                    </select>
                    <textarea name="message" rows="5"placeholder="Any additional information" className="p-2 bg-transparent border-2 rounded-md focus:outlined-none"/>
                    <button className="text-white bg-gradient-to-b from-cyan-500 to-teal-500 px-6 py-3 my-8 mx-auto
                    flex items-center rounded-md hover:scale-110 duration-300">Proceed to Checkout</button>
                </form>
            </div>
        </div>
        </section>
      <section className="max-w-screen-lg mx-auto">
      <h3 className="text-3xl font-semibold flex flex-row justify-around pt-3">Testimonials</h3>
        <div className="grid place-content-center place-items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10">
            {
              Testimonials.map(({id,title,opinion,rating}) => (
                <div key={id} className="flex-col gap-4 text-center shadow-lg p-10 rounded-xl my-10">
                <h3 className="text-xl font-medium capitalize">{title}</h3>
                <p className="font-normal text-gray-700 py-3 capitalize">{opinion}</p>
                <p className="text-gray-700 hover:text-gray-700 duration-300 cursor-pointer">Rating: <span>{rating}/5.0</span></p>
              </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="grid place-items-center">
        <div className="py-5 flex flex-row gap-4">
          <h5 className="font-semibold">Hotel@2023</h5>
          <p className="font-medium hidden md:flex">Developed by Olosko using React and Tailwind CSS</p>
        </div>
      </section>
      </main>
    </div>
  );
}

export default App;
