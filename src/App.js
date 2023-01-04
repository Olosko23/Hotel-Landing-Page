import React, { useState } from 'react';
import one from './assets/1.jpg';
import three from './assets/3.jpg';
import ten from './assets/10.jpg';
import { BsFillMoonStarsFill } from 'react-icons/bs';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="h-full px-8 gap-4 flex flex-col bg-[#FEFBF3] dark:bg-[#5199b1]">
        <section className="pt-5">
        <nav className="flex flex-row gap-5 justify-between">
          <p className="font-semibold text-2xl py-2 px-1">Hotel</p>
          <BsFillMoonStarsFill size={30} onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl pt-2" />
          <button className="py-3 px-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-md font-semibold">Order Here</button>
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
            <p>Soda @60</p>
            <p>Blended Fruit Juice @50</p>
            <p>Tea @30</p>
            <p>Coffee @40</p>
            <img className="rounded-xl pb-0"src={three} alt="new"/>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h4 className="font-semibold text-xl justify-center pb-4">Starters and Snacks</h4>
            <p>Samosa @30</p>
            <p>Chapati @20</p>
            <p>Kebab @40</p>
            <p>Fries @70 - Medium</p>
            <p>Fries @100 - Large</p>
            <p>Bhajia @70</p>
            <p>Sausages @40</p>
            <p>Smokies @30</p>
            <img className="rounded-xl pb-0"src={one} alt="new"/>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h4 className="font-semibold text-xl justify-center pb-4">Main Courses</h4>
            <p>Beans@40</p>
            <p>Mbuzi Fry @200</p>
            <p>Beef Fry @200</p>
            <p>Beef Stew @200</p>
            <p>Tilapia Dry Fry @200</p>
            <p>Tilapia Stew @200</p>
            <p>Matumbo Fry @200</p>
            <img className="rounded-xl pb-0"src={ten} alt="new"/>
          </div>
        </div>
      </section>
      <section className="w-full pb-5">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full shadow-lg rounded-xl">
            <div className="pb-8 flex flex-row justify-center">
                <p className="py-6 text-3xl sm:text-4xl font-medium">Submit the form to place an order</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/94770f33-2cf2-411e-8c9f-bd1a03122049" method= "POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none"/>
                    <input type="phone" name="phone" placeholder="Enter Your Phone" className="p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none my-4"/>
                    <input type="text" name="order" placeholder="Your Order" className="p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none my-4"/>
                    <input type="text" name="quantity" placeholder="Your Order" className="p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none my-4"/>
                    <textarea name="message" rows="10"placeholder="Enter Your Message" className="p-2 bg-transparent border-2 rounded-md focus:outlined-none"/>
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
          <div className="flex-col gap-4 text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-xl font-medium">George Collins</h3>
            <p className="font-normal text-gray-500">Quality service and affordable rates,Quality service and affordable rates,Quality service and affordable rates</p>
            <p className="text-gray-500 hover:text-gray-700 duration-300 cursor-pointer">Rating: <span>4.3/5.0</span></p>
          </div>
          <div className="flex-col gap-4 text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-xl font-medium">George Collins</h3>
            <p className="font-normal text-gray-500">Quality service and affordable rates,Quality service and affordable rates,Quality service and affordable rates</p>
            <p className="text-gray-500 hover:text-gray-700 duration-300 cursor-pointer">Rating: <span>4.3/5.0</span></p>
          </div>
          <div className="flex-col gap-4 text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-xl font-medium">George Collins</h3>
            <p className="font-normal text-gray-500">Quality service and affordable rates,Quality service and affordable rates,Quality service and affordable rates</p>
            <p className="text-gray-500 hover:text-gray-700 duration-300 cursor-pointer">Rating: <span>4.3/5.0</span></p>
          </div>
          <div className="flex-col gap-4 text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-xl font-medium">George Collins</h3>
            <p className="font-normal text-gray-500">Quality service and affordable rates,Quality service and affordable rates,Quality service and affordable rates</p>
            <p className="text-gray-500 hover:text-gray-700 duration-300 cursor-pointer">Rating: <span>4.3/5.0</span></p>
          </div>
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
