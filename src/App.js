import React, { useState } from "react";
import one from "./assets/1.jpg";
import three from "./assets/3.jpg";
import ten from "./assets/10.jpg";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Drinks, Testimonials, Snacks, Courses } from "./Data";
import { Link } from "react-scroll";

function App() {
  const [icon, setIcon] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="h-full w-full gap-2 flex flex-col bg-[#FEFBF3] dark:bg-[#47869b]">
        <section name="top" className="text-gray-100">
          <nav className="flex flex-row justify-between fixed w-full py-3 px-5 bg-[#97afb9] dark:bg-[#3c7183]">
            <Link to="top" smooth duration={700}>
              <p className=" cursor-pointer font-semibold text-2xl py-1">
                Ka Mwalimu
              </p>
            </Link>
            <div onClick={() => setIcon(!icon)}>
              {icon ? (
                <BsSun
                  size={35}
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl pt-2"
                />
              ) : (
                <BsFillMoonStarsFill
                  size={30}
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl pt-2"
                />
              )}
            </div>
            <Link
              to="order"
              smooth
              duration={700}
              className="cursor-pointer py-2 px-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg font-semibold"
            >
              Order Here
            </Link>
          </nav>
          <div className="h-[500px] grid place-items-center bg-[url('./assets/Fish.JPG')] bg-cover">
            <div className="mt-28 px-2">
              <h3 className="text-gray-300 font-medium text-3xl mb-4 md:text-6xl">
                Ka Mwalimu
              </h3>
              <p className="text-gray-300 leading-6 md:text-xl max-w-lg mx-auto">
                Welcome to Ka Mwalimu Hotel, Homabay's premier food destination!
                <br />
                We are a food restaurant that specializes in modern and
                traditional delicacies
                <br />
                serving up mouthwatering dishes made with the freshest,
                locally-sourced ingredients
              </p>
            </div>
          </div>
        </section>
        <section className="px-8 grid place-items-center py-4">
          <div className="">
            <h3 className="font-semibold text-3xl mb-5 grid place-items-center">
              Why Choose Us
            </h3>
            <div>
              <p className="text-gray-600 leading-6 py-2">
                Our menu is carefully curated to showcase the best flavors of
                Homabay and beyond <br /> with a variety of dishes to suit every
                plate. From classic Tilapia to modern twists
                <br /> on traditional dishes, our menu is sure to delight
              </p>
              <p className="text-gray-600 leading-6 py-2">
                Join us for breakfast, lunch or dinner, or stop by for a quick
                bite and a drink.
                <br />
                Our cozy, welcoming atmosphere and friendly staff will make you
                feel right at home
              </p>
              <p className="text-gray-600 leading-6 py-2">
                At Ka Mwalimu Hotel, we believe that food should be enjoyed in
                good company
                <br />
                and that's why we always strive to make our customers feel
                welcome.
                <br />
                We look forward to welcoming you to our restaurant soon.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto px-8">
          <h3 className="pb-1 text-3xl font-semibold flex flex-row justify-around">
            Our Offers
          </h3>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h4 className="font-semibold text-xl justify-center pb-4">
                Drinks and Beverage
              </h4>
              {Drinks.map(({ id, title, price }) => (
                <p className="capitalize gap-2" key={id}>
                  {title} @{price}
                </p>
              ))}
              <img className="rounded-xl pb-0" src={three} alt="new" />
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h4 className="font-semibold text-xl justify-center pb-4">
                Starters and Snacks
              </h4>
              {Snacks.map(({ id, title, price }) => (
                <p key={id} className="capitalize gap-2">
                  {title} @{price}
                </p>
              ))}
              <img className="rounded-xl pb-0" src={one} alt="new" />
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h4 className="font-semibold text-xl justify-center pb-4">
                Main Courses
              </h4>
              {Courses.map(({ id, title, price }) => (
                <p key={id} className="capitalize gap-2">
                  {title} @{price}
                </p>
              ))}
              <img className="rounded-xl pb-0" src={ten} alt="new" />
            </div>
          </div>
        </section>
        <section name="order" className="px-8 w-full pb-2">
          <div className="flex flex-col p-4 justify-center max-w-screen-lg mt-12 mx-auto h-full shadow-lg rounded-xl">
            <div className="pb-8 flex flex-row justify-center">
              <p className="py-4 text-3xl sm:text-4xl font-medium">
                Submit the form to place an order
              </p>
            </div>
            <div className="flex justify-center items-center">
              <form
                action="https://getform.io/f/94770f33-2cf2-411e-8c9f-bd1a03122049"
                method="POST"
                className="flex flex-col w-full md:w-1/2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="p-2 bg-transparent border-2 rounded-md
                    text-gray-700 focus:outline-none"
                  required
                />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Enter Your Phone"
                  className="p-2 bg-transparent border-2 rounded-md
                    text-gray-700 focus:outline-none my-4"
                  required
                />
                <select
                  type="select"
                  name="main_course"
                  placeholder="Your Order"
                  className="p-2 bg-transparent border-2 rounded-md
                    text-gray-700 focus:outline-none my-4"
                >
                  <option>Main Courses</option>
                  {Courses.map(({ id, title }) => (
                    <option key={id} className="capitalize">
                      {title}
                    </option>
                  ))}
                </select>
                <select
                  type="select"
                  name="main_course"
                  placeholder="Drinks and Beverages"
                  className="p-2 bg-transparent border-2 rounded-md
                    text-gray-700 focus:outline-none my-4"
                >
                  <option>Drinks and Beverages</option>

                  {Drinks.map(({ id, title }) => (
                    <option key={id} className="capitalize">
                      {title}
                    </option>
                  ))}
                </select>
                <select
                  type="select"
                  name="main_course"
                  placeholder="Snacks and Starters"
                  className="p-2 bg-transparent border-2 rounded-md
                    text-gray-700 focus:outline-none my-4"
                >
                  <option>Snacks and Starters</option>
                  {Snacks.map(({ id, title }) => (
                    <option key={id} className="capitalize">
                      {title}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Any additional information"
                  className="p-2 bg-transparent border-2 rounded-md focus:outlined-none"
                />
                <button
                  className="text-white bg-gradient-to-b from-cyan-500 to-teal-500 px-6 py-3 my-8 mx-auto
                    flex items-center rounded-md hover:scale-110 duration-300"
                >
                  Proceed to Checkout
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="px-8 max-w-screen-lg mx-auto">
          <h3 className="text-3xl font-semibold flex flex-row justify-around pt-3">
            Testimonials
          </h3>
          <div className="grid place-content-center place-items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-5">
              {Testimonials.map(({ id, title, opinion, rating }) => (
                <div
                  key={id}
                  className="flex-col gap-4 text-center shadow-lg p-10 rounded-xl my-10"
                >
                  <h3 className="text-xl font-medium capitalize">{title}</h3>
                  <p className="font-normal text-gray-700 py-3 capitalize">
                    {opinion}
                  </p>
                  <p className="text-gray-700 hover:text-gray-700 duration-300 cursor-pointer">
                    Rating: <span>{rating}/5.0</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Link
          to="top"
          smooth
          duration={800}
          className="grid place-items-center"
        >
          <button className="flex gap-2 border-2 rounded-2xl shadow-xl py-2 px-4 text-white bg-gradient-to-b from-cyan-500 to-teal-500">
            Back to Top{" "}
            <span>
              <AiOutlineArrowUp size={25} />
            </span>
          </button>
        </Link>
        <section className="grid place-items-center">
          <div className="py-5 flex flex-row gap-4">
            <h5 className="font-semibold">Hotel &copy; 2023</h5>
            <p className="font-medium hidden md:flex">
              Developed using React and Tailwind CSS
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
