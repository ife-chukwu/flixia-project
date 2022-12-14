import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import NavbarMd from "./NavbarMd";
import HeroItems from "./HeroItems";
import { useState } from "react";

function Hero() {
  const [inputState, setInputState] = useState("");
  const [openForm, setFormOpen] = useState(false);
  const [userNameInputState, setUserNameInputState] = useState("");
  const [userEmailInputState, setUserEmailInputState] = useState("");
  const [userPasswordInputState, setUserPasswordInputState] = useState("");
  const openFormHandler = () => {
    setFormOpen((currentForm) => !currentForm);
  };

  const enteredUserNameInput = (e) => {
    setUserNameInputState(e.target.value);
  };
  const enteredUserEmailInput = (e) => {
    setUserEmailInputState(e.target.value);
  };
  const enteredUserPasswordInput = (e) => {
    setUserPasswordInputState(e.target.value);
  };

  const enteredInput = (e) => {
    setInputState(e.target.value);
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    setInputState("");
    alert("flixia feels lovely to have you here " + userNameInputState);
    setUserNameInputState("");
    setUserEmailInputState("");
    setUserPasswordInputState("");
  };
  return (
    <div>
      <div className="relative  bg-hero-image bg-no-repeat bg-cover h-[100%] bg-center w-full md: md:bg-no-repeat md:bg-cover md:bg-bottom md:w-[100%] md:h-[100%] md:relative">
        <div
          className="h-[40px] w-full flex  text-[15px] justify-between bg-black/60 hover:bg-black/80 transition backdrop-blur-[3px]ease-in-out duration-700
      md:h-[60px] md:w-[100%] md:flex md:text-[20px] md:items-center   md:justify-between    md:bg-black/60 md:hover:bg-black/80 md:transition md:duration-700 md:ease-in-out md:backdrop-blur-[3px] md:pb-3  "
        >
          <figure className="w-[140px] h-10 px-3 items-center mt-2 shadow-4xl md:w-[190px] md:h-[45px] md:px-3 md:items-center md:mt-3 md:shadow-4xl">
            <img
              src="Flixialogo.png"
              alt="Flixia"
              className="w-full h-full md:w-full md:h-full"
              data-aos="zoom-in-left"
              data-aos-duration="3000"
            />
          </figure>

          <ul className=" hidden  md:flex md:flex-row md:text-white md:gap-5 md:px-9 md:pt-4 md:items-center md:font-normal md:text-lg  md:cursor-pointer">
            <li className="md:text-white md:hover:text-orange-400">
              <a
                href="#artist-sec"
                className="md:text-white md:hover:text-orange-400 scroll-smooth"
              >
                Artists
              </a>
            </li>
            <li>
              <a
                href="#categories"
                className="md:text-white md:hover:text-orange-400 scroll-smooth"
              >
                Albums
              </a>
            </li>

            <li className="md:text-white md:hover:text-orange-400"><a
                href="#videos"
                className="md:text-white md:hover:text-orange-400 "
              >
                Videos
              </a></li>

            <li>
              <a
                href="#contact"
                className="md:text-white md:hover:text-orange-400 "
              >
                Contact
              </a>
            </li>

            <form onSubmit={buttonHandler} className="md:flex md:items-center">
              <input
                type="text"
                placeholder="Search"
                onChange={enteredInput}
                value={inputState}
                className=" md:relative md:py-2 md:px-3 md:shadow-lg md:outline-none md:text-center md:text-gray-800 md:rounded-l-xl"
              />
              <button className=" md:text-black/80 md:bg-orange-400 md:hover:bg-orange-600 md:transition md:duration-500 md:hover:text-white md:py-[9.7px] md:px-5  md:font-bold  md:ease-in-out md:rounded-r-xl">
                <HiOutlineSearch />
              </button>
            </form>
          </ul>
        </div>

        <div className=" pl-0  md:flex flex-col md: z-30">
          <div className="flex  mr-20 items-center justify-end md:flex md:justify-end md:mt-[40px] md:mr-20 ">
            <button
              className="flex py-1 text-white  bg-orange-400 text-md  w-[100px] px-[15px] ml-[10px] mt-[-38px] duration-400 duration-400  rounded-sm hover:bg-orange-500 transition
            
          md:text-[16px] md:py-5  md:ml-[520px]  md:flex md:border-2xl md:bg-orange-400 
          md:hover:bg-orange-500 md:hover:text-white md:transition md:duration-400 md:text-white md:pl-11 
          md:rounded-lg md:items-center  md:z-30 md:text-xl md:w-[140px] md:h-2   "
              onClick={openFormHandler}
            >
              {openForm ? "cancel" : "Login here"}
            </button>
          </div>
          <div>
            <div className="w-full mt-2 flex justify-center">
              {openForm && (
                <form
                  onSubmit={buttonHandler}
                  className="px-20 bg-black/70 absolute rounded-2xl w-[350px] h-[300px] z-30 md:absolute   md:flex md:flex-col md:bg-black/70 md:h-[65vh]    md:rounded-2xl md:mt-[10px] md:w-[520px] md:z-30"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <fieldset className="tracking-wide mt-[20px] text-white w-[120px] ml-3 md:text-white  md:tracking-wide md:w-[100%] md:mt-[20px]">
                    Please enter your login details
                  </fieldset>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Username"
                    onChange={enteredUserNameInput}
                    value={userNameInputState}
                    className=" flex w-[230px] mb-2 py-3 mt-7 p-4 outline-none text-sm rounded-md  md:flex md:mb-[-15px]  md:w-[400px]  md:outline-none md:rounded-2xl md:text-lg md:mt-[40px] "
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    onChange={enteredUserEmailInput}
                    value={userEmailInputState}
                    placeholder="Email"
                    className="flex w-[230px] py-3 mt-7 p-4 outline-none text-sm rounded-md md:flex md: mb-1 md:py-3 md:w-[400px]  md:outline-none md:rounded-2xl md:text-lg md:mt-[40px] "
                  />
                  <input
                    required
                    name="password"
                    type="password"
                    onChange={enteredUserPasswordInput}
                    value={userPasswordInputState}
                    placeholder="Password"
                    className="flex w-[230px] py-3 mt-7 p-4 outline-none text-sm rounded-md  md:w-[400px] md:py-3 md:outline-none  md:rounded-2xl md:text-lg md:p-4"
                  />

                  <button
                    className=" flex ml-[50px] mt-8 px-[40px] py-2 rounded-xl
               md:flex bg-orange-400  hover:bg-orange-500 hover:text-white  transition duration-400 text-white md:pl-[60px] md:py-3   md:rounded-xl text-center text-xl md:ml-[105px] md:w-60 md:mt-10 shadow-lg shadow-black"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="flex">
            <HeroItems className="relative" />
            <NavbarMd />
          </div>
        </div>
      </div>
      <div>
        <div
          className="text-white p-10 bg-black/90 md:p-10 md:bg-black/90"
          id="categories"
        >
          <h1 className="flex justify-center items-center py-4 text-4xl uppercase md:flex md:justify-center md:items-center md:py-4 md:text-white md:text-5xl md:uppercase">
            Album{" "}
            <span className="text-orange-400 ml-3 md:text-orange-400 md:ml-3">
              {" "}
              Covers
            </span>
          </h1>

          <div className=" flex gap-5 overflow-x-scroll scroll-smooth h-[300px] md:flex md:gap-10 md:overflow-x-scroll md:first-letter md:h-[400px] md:scroll-smooth">
            <div className="w-[400px] gap-5 h-[230px] rounded border border-gray-400 bg-black/5 md:w-[400px] md:bg-black/5 md:h-[300px] md:shrink-0 md:rounded-lg md:border md:border-slate-400">
              <figure className="w-[300px] p-2 h-[200px] shrink-0 md:w-[400px] md:h-[250px] md:shrink-0 md:p-2 ">
                <img
                  src="https://media.istockphoto.com/photos/guy-plays-guitar-girl-sings-african-american-man-with-white-girl-in-picture-id1328815944?b=1&k=20&m=1328815944&s=170667a&w=0&h=bHg3xyisEkJdRYCgHwe0a5jj4mJb6FQVxAW8KjFh70s="
                  className="w-[100%] gap-5 rounded-xl h-[100%] md:w-[100%] md:h-[100%] md:rounded-2xl  "
                  alt=""
                />
                <figcaption className="flex text-white py-2 text-xl items-center justify-center md:flex md:justify-center md:items-center md:text-white md:py-2 md:text-3xl text-font uppercase">
                  <span className="ml-3 text-orange-400 md:text-orange-400  md:ml-3">
                    Show
                  </span>{" "}
                  Brakers
                </figcaption>
              </figure>
            </div>
            <div
              className="w-[400px] h-[230px] rounded border border-gray-400 bg-black/5
            md:w-[400px] md:bg-black/5 md:h-[300px] md:shrink-0 md:rounded-lg md:border md:border-slate-400"
            >
              <figure className="w-[300px] p-2 h-[200px] shrink-0 md:w-[400px] md:h-[250px] md:shrink-0 md:p-2 ">
                <img
                  src="https://media.istockphoto.com/photos/portrait-of-young-man-at-home-listening-to-the-vinyl-records-relaxing-picture-id946817228?b=1&k=20&m=946817228&s=170667a&w=0&h=Z3dklZ9iYLWYstsesCVRqt0nvxyll1eRCZegQmf3Tas="
                  alt=""
                  className="h-[100%] gap-5 rounded-2xl w-[100%] md:w-[100%] md:h-[100%] md:rounded-2xl  "
                />

                <figcaption className="flex text-white py-2 text-xl items-center justify-center md:flex md:justify-center md:items-center md:text-white md:py-2 md:text-3xl text-font uppercase">
                  <span className="ml-3 text-orange-400 md:text-orange-400 md:ml-3">
                    Disco
                  </span>{" "}
                  Plate
                </figcaption>
              </figure>
            </div>
            <div className="w-[400px] h-[230px] rounded border border-gray-400 bg-black/5  md:w-[400px] md:bg-black/5 md:h-[300px] md:shrink-0 md:rounded-lg md:border md:border-slate-400">
              <figure className="w-[300px] p-2 shrink-0 h-[200px]  md:w-[400px] md:h-[250px] md:shrink-0 md:p-2 ">
                <img
                  src="https://images.unsplash.com/photo-1510759395231-72b17d622279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2ljJTIwYWxidW0lMjBjb3ZlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  className="w-[100%] gap-5 h-[100%] rounded-2xl md:w-[100%] md:h-[100%] md:rounded-2xl  "
                  alt=""
                />
                <figcaption className="flex text-white py-2 text-xl items-center justify-center md:flex md:justify-center md:items-center md:text-white md:py-2 md:text-3xl text-font uppercase">
                  <span className="ml-3 text-orange-400 md:text-orange-400 md:ml-3">
                    Water
                  </span>{" "}
                  Miles
                </figcaption>
              </figure>
            </div>
            <div className="w-[400px] h-[230px] rounded border border-gray-400 bg-black/5  md:w-[400px] md:bg-black/5 md:h-[300px] md:shrink-0 md:rounded-lg md:border md:border-slate-400">
              <figure className="w-[300px] p-2 shrink-0 h-[200px]  md:w-[400px] md:h-[250px] md:shrink-0 md:p-2 ">
                <img
                  src="https://images.unsplash.com/photo-1505964135045-cdada2f6bf43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFwJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60 "
                  className="w-[100%]  gap-5 h-[100%] rounded-2xl md:w-[100%] md:h-[100%] md:rounded-2xl  "
                  alt=""
                />
                <figcaption className="flex text-white py-2 text-xl items-center justify-center md:flex md:justify-center md:items-center md:text-white md:py-2 md:text-3xl text-font uppercase">
                  <span className="ml-3 text-orange-400 md:text-orange-400 md:ml-3">
                    Chains
                  </span>{" "}
                  & Chackles
                </figcaption>
              </figure>
            </div>
            <div className="w-[400px] h-[230px] rounded border border-gray-400 bg-black/5  md:w-[400px] md:bg-black/5 md:h-[300px] md:shrink-0 md:rounded-lg md:border md:border-slate-400">
              <figure className="w-[300px] p-2 shrink-0 h-[200px]  md:w-[400px] md:h-[250px] md:shrink-0 md:p-2 ">
                <img
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWMlMjBnZW5yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                  className="w-[100%] gap-5 h-[100%] rounded-2xl md:w-[100%] md:h-[100%] md:rounded-2xl  "
                  alt=""
                />
                <figcaption className="flex text-white py-2 text-xl items-center justify-center md:flex md:justify-center md:items-center md:text-white md:py-2 md:text-3xl text-font uppercase">
                  <span className="ml-3 text-orange-400 md:text-orange-400 md:ml-3">
                    Electronic
                  </span>{" "}
                  sound
                </figcaption>
              </figure>
            </div>
            <div className="w-[400px] h-[230px] rounded border border-gray-400 bg-black/5  md:w-[400px] md:bg-black/5 md:h-[300px] md:shrink-0 md:rounded-lg md:border md:border-slate-400">
              <figure className="w-[300px] p-2 shrink-0 h-[200px]  md:w-[400px] md:h-[250px] md:shrink-0 md:p-2 ">
                <img
                  src="https://images.unsplash.com/photo-1445985543470-41fba5c3144a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljJTIwZ2VucmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  className="w-[100%] gap-5 h-[100%] rounded-2xl md:w-[100%] md:h-[100%] md:rounded-2xl  "
                  alt=""
                />
                <figcaption className="flex text-white py-2 text-xl items-center justify-center md:flex md:justify-center md:items-center md:text-white md:py-2 md:text-3xl text-font uppercase">
                  <span className="ml-3 text-orange-400 md:text-orange-400 md:ml-3">
                    Acou
                  </span>{" "}
                  Stic
                </figcaption>
              </figure>
            </div>
            <div className="w-[400px] h-[230px] rounded border border-gray-400 bg-black/5  md:w-[400px] md:bg-black/5 md:h-[300px] md:shrink-0 md:rounded-lg md:border md:border-slate-400">
              <figure className="w-[300px] gap-5 p-2 shrink-0 h-[200px]  md:w-[400px] md:h-[250px] md:shrink-0 md:p-2 ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-jAtvM6AZL7945B249YljW-axIgWBz62XQ&usqp=CAU"
                  className="w-[100%] h-[100%] rounded-2xl md:w-[100%] md:h-[100%] md:rounded-2xl "
                  alt=""
                />
                <figcaption className="flex text-white py-2 text-xl items-center justify-center md:flex md:justify-center md:items-center md:text-white md:py-2 md:text-3xl text-font uppercase">
                  <span className="ml-3 text-orange-400 md:text-orange-400 md:ml-3">
                    Everything{" "}
                  </span>{" "}
                  Rap
                </figcaption>
              </figure>
            </div>
            <div className="w-[400px] h-[230px] rounded border border-gray-400 bg-black/5  md:w-[400px] md:bg-black/5 md:h-[300px] md:shrink-0 md:rounded-lg md:border md:border-slate-400">
              <figure className="w-[300px] p-2 shrink-0 h-[200px]  md:w-[400px] md:h-[250px] md:shrink-0 md:p-2 ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QgsItwYwzeESajmJM1r2XKMIa8PykgHKlg&usqp=CAU"
                  className="w-[100%] gap-5 h-[100%] rounded-2xl md:w-[100%] md:h-[100%] md:rounded-2xl  "
                  alt=""
                />
                <figcaption className="flex text-white py-2 text-xl items-center justify-center md:flex md:justify-center md:items-center md:text-white md:py-2 md:text-3xl text-font uppercase">
                  <span className="ml-3 text-orange-400 md:text-orange-400 md:ml-3">
                    Behind
                  </span>
                  Scenes
                </figcaption>
              </figure>
            </div>
            <div className="w-[400px] h-[230px] rounded border border-gray-400 bg-black/5  md:w-[400px] md:bg-black/5 md:h-[300px] md:shrink-0 md:rounded-lg md:border md:border-slate-400">
              <figure className="w-[300px] p-2 shrink-0 h-[200px]  md:w-[400px] md:h-[250px] md:shrink-0 md:p-2 ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTJ4AuwUIeQ-wc-z78atPgem_s9RgBtGP_A&usqp=CAU"
                  className="w-[100%] gap-5 h-[100%] rounded-2xl md:w-[100%] md:h-[100%] md:rounded-2xl  "
                  alt=""
                />
                <figcaption className="flex text-white py-2 text-xl items-center justify-center md:flex md:justify-center md:items-center md:text-white md:py-2 md:text-3xl text-font uppercase md:ml-3">
                  <span className="ml-3 text-orange-400 md:text-orange-400 md:ml-3">
                    Voice Of the
                  </span>{" "}
                  Heroes
                </figcaption>
              </figure>
            </div>
            <div className="w-[400px] h-[230px] rounded border border-gray-400 bg-black/5  md:w-[400px] md:bg-black/5 md:h-[300px] md:shrink-0 md:rounded-lg md:border md:border-slate-400">
              <figure className=" w-[300px] gap-5 p-2 shrink-0 h-[200px] md:w-[400px] md:h-[250px] md:shrink-0 md:p-2 ">
                <img
                  src="https://media.istockphoto.com/photos/woman-hold-retro-vinyl-disc-with-neon-light-picture-id1308691734?b=1&k=20&m=1308691734&s=170667a&w=0&h=rKBtmP1K7GeImd04bbkweiajYA9jueWWSsjcKObFzSw="
                  className="w-[100%] h-[100%] rounded-2xl md:w-[100%] md:h-[100%] md:rounded-2xl  "
                  alt=""
                />
                <figcaption className="flex text-white py-2 text-xl items-center justify-center md:flex md:justify-center md:items-center md:text-white md:py-2 md:text-3xl text-font uppercase">
                  <span className="ml-3 text-orange-400 md:text-orange-400 md:ml-3">
                    All d
                  </span>{" "}
                  Way
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div
        id="artist-sec"
        className=" pt-10 h-[100%] w-[100%] bg-black/90 scroll-smooth md:pt-10"
      >
        <div className="flex justify-center items-center ">
          <h1 className="text-white uppercase text-4xl md:text-white md:text-[3rem]">
            Art<span className="text-orange-400">ists</span>
          </h1>
        </div>
        <div className="flex mx-10 py-20  overflow-x-scroll  scroll-smooth whitespace-nowrap md:mx-10">
          <div className="flex gap-5 md:flex md:gap-10 md:items-center ">
            <figure className=" flex flex-col w-[140px] h-[120px] shrink-0 scroll-smooth md:flex md:w-[200px] md:h-[180px]">
              <img
                src="./Images/AKeys.webp"
                alt=""
                className="w-[100%] h-[100%] rounded-full shrink-0"
              />
              <figcaption className="flex  justify-center   text-white  md:flex md:text-white md:justify-center md:text-xl">
                Alicia <span className="text-orange-400 flex "> Keys</span>
              </figcaption>
            </figure>
            <figure className=" flex flex-col w-[140px] h-[120px] shrink-0 scroll-smooth md:flex md:w-[200px] md:h-[180px]">
              <img
                src="./Images/Image 4.jpg"
                alt=""
                className="w-[100%] h-[100%] rounded-full shrink-0"
              />
              <figcaption className="flex  justify-center   text-white  md:flex md:text-white md:justify-center md:text-xl">
                2<span className="text-orange-400 flex "> Face</span>
              </figcaption>
            </figure>
            <figure className=" flex flex-col w-[140px] h-[120px] shrink-0 scroll-smooth md:flex md:w-[200px] md:h-[180px]">
              <img
                src="./Images/images (2).jpg"
                alt=""
                className="w-[100%] h-[100%] rounded-full shrink-0"
              />
              <figcaption className="flex  justify-center   text-white  md:flex md:text-white md:justify-center md:text-xl">
                Rock <span className="text-orange-400 flex "> On</span>
              </figcaption>
            </figure>
            <figure className=" flex flex-col w-[140px] h-[120px] shrink-0 scroll-smooth md:flex md:w-[200px] md:h-[180px]">
              <img
                src="./Images/images (3).jpg"
                alt=""
                className="w-[100%] h-[100%] rounded-full shrink-0"
              />
              <figcaption className="flex  justify-center   text-white  md:flex md:text-white md:justify-center md:text-xl">
                Jay<span className="text-orange-400 flex "> Z</span>
              </figcaption>
            </figure>
            <figure className=" flex flex-col w-[140px] h-[120px] shrink-0 scroll-smooth md:flex md:w-[200px] md:h-[180px]">
              <img
                src="./Images/images (5).jpg"
                alt=""
                className="w-[100%] h-[100%] rounded-full shrink-0"
              />
              <figcaption className="flex  justify-center   text-white  md:flex md:text-white md:justify-center md:text-xl">
                Re <span className="text-orange-400 flex "> ma</span>
              </figcaption>
            </figure>
            <figure className=" flex flex-col w-[140px] h-[120px] shrink-0 scroll-smooth md:flex md:w-[200px] md:h-[180px]">
              <img
                src="./Images/images (6).jpg"
                alt=""
                className="w-[100%] h-[100%] rounded-full shrink-0"
              />
              <figcaption className="flex  justify-center   text-white  md:flex md:text-white md:justify-center md:text-xl">
                Lo <span className="text-orange-400 flex "> jay</span>
              </figcaption>
            </figure>
            <figure className=" flex flex-col w-[140px] h-[120px] shrink-0 scroll-smooth md:flex md:w-[200px] md:h-[180px]">
              <img
                src="./Images/images (7).jpg"
                alt=""
                className="w-[100%] h-[100%] rounded-full shrink-0"
              />
              <figcaption className="flex  justify-center   text-white  md:flex md:text-white md:justify-center md:text-xl">
                Dav <span className="text-orange-400 flex "> ido</span>
              </figcaption>
            </figure>
            <figure className=" flex flex-col w-[140px] h-[120px] shrink-0 scroll-smooth md:flex md:w-[200px] md:h-[180px]">
              <img
                src="./Images/images (8).jpg"
                alt=""
                className="w-[100%] h-[100%] rounded-full shrink-0"
              />
              <figcaption className="flex  justify-center   text-white  md:flex md:text-white md:justify-center md:text-xl">
                Sho <span className="text-orange-400 flex "> la</span>
              </figcaption>
            </figure>
            <figure className=" flex flex-col w-[140px] h-[120px] shrink-0 scroll-smooth md:flex md:w-[200px] md:h-[180px]">
              <img
                src="./Images/images (10).jpg"
                alt=""
                className="w-[100%] h-[100%] rounded-full shrink-0"
              />
              <figcaption className="flex  justify-center   text-white  md:flex md:text-white md:justify-center md:text-xl">
                Chris <span className="text-orange-400 flex "> Brown</span>
              </figcaption>
            </figure>
            <figure className=" flex flex-col w-[140px] h-[120px] shrink-0 scroll-smooth md:flex md:w-[200px] md:h-[180px]">
              <img
                src="./Images/images (11).jpg"
                alt=""
                className="w-[100%] h-[100%] rounded-full shrink-0"
              />
              <figcaption className="flex  justify-center   text-white  md:flex md:text-white md:justify-center md:text-xl">
                Nipsey <span className="text-orange-400 flex "> Hustle</span>
              </figcaption>
            </figure>
            <figure className=" flex flex-col w-[140px] h-[120px] shrink-0 scroll-smooth md:flex md:w-[200px] md:h-[180px]">
              <img
                src="./Images/images (12).jpg"
                alt=""
                className="w-[100%] h-[100%] rounded-full shrink-0"
              />
              <figcaption className="flex  justify-center   text-white  md:flex md:text-white md:justify-center md:text-xl">
                The <span className="text-orange-400 flex "> Weekends</span>
              </figcaption>
            </figure>
            <figure className=" flex flex-col w-[140px] h-[120px] shrink-0 scroll-smooth md:flex md:w-[200px] md:h-[180px]">
              <img
                src="./Images/images (13).jpg"
                alt=""
                className="w-[100%] h-[100%] rounded-full shrink-0"
              />
              <figcaption className="flex  justify-center   text-white  md:flex md:text-white md:justify-center md:text-xl">
                Te <span className="text-orange-400 flex "> ms</span>
              </figcaption>
            </figure>
            <figure className=" flex flex-col w-[140px] h-[120px] shrink-0 scroll-smooth md:flex md:w-[200px] md:h-[180px]">
              <img
                src="./Images/images (14).jpg"
                alt=""
                className="w-[100%] h-[100%] rounded-full shrink-0"
              />
              <figcaption className="flex  justify-center   text-white  md:flex md:text-white md:justify-center md:text-xl">
                Ak <span className="text-orange-400 flex "> on</span>
              </figcaption>
            </figure>
            <p className=" p-5 cursor-pointer flex items-center underline text-white hover:text-orange-400 md:underline md:text-white md:hover:text-orange-400 md:transition md:duration-300 md:p-5 md:flex  md:items-center md:cursor-pointer">
              See more{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black/90 py-20 px-10" id="videos">
        <div className="flex justify-center items-center py-10">
          {" "}
          <h1 className="text-white uppercase text-4xl md:text-[3rem] md:uppercase md:text-white">
            {" "}
            Music <span className="text-orange-400"> Videos </span>
          </h1>
        </div>

        <div  className=" flex overflow-x-scroll whitespace-nowrap w-[100%] shrink-0 scroll-smooth">
          <div className="m-10 w-[240px] h-[150px] flex gap-10 md:m-10 md:w-[300px] md:h-[200px] md:flex md:gap-10">
            <iframe
              width="895"
              height="480"
              src="https://www.youtube.com/embed/h9CSvdiOY3M"
              title="Polo G - Black Hearted (Official Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-[100%] h-[100%] border border-orange-500"
            ></iframe>
            <iframe
              width="452"
              height="240"
              src="https://www.youtube.com/embed/0jz0GAFNNIo"
              title="Drake - When To Say When & Chicago Freestyle"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-[100%] h-[100%] border border-orange-500"
            ></iframe>
            <iframe
              width="899"
              height="480"
              src="https://www.youtube.com/embed/8y454cMCUsQ"
              title="Maury - Memories (Official Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-[100%] h-[100%] border border-orange-500"
            ></iframe>
            <iframe
              width="899"
              height="480"
              src="https://www.youtube.com/embed/Bd3vBzUtk84"
              title="Lil Baby, Lil Durk ft. Rod Wave Rich Off Pain (Music Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="w-[100%] h-[100%] border border-orange-500"
            ></iframe>
            <iframe
              width="469"
              height="480"
              src="https://www.youtube.com/embed/BQRbTqgY-rI"
              title="H.E.R. ft. Lil Baby & Lil Durk Find A Way (Music Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="w-[100%] h-[100%] border border-orange-500"
            ></iframe>
            <iframe
              width="469"
              height="480"
              src="https://www.youtube.com/embed/rP09GUQFDFk"
              title="Future - WAIT FOR U (Official Music Video) ft. Drake, Tems"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="w-[100%] h-[100%] border border-orange-500"
            ></iframe>
            <iframe
              width="469"
              height="480"
              src="https://www.youtube.com/embed/cJLo4L_kZSc"
              title="Drake In The Bible ft. Lil Durk, Giveon (Music Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="w-[100%] h-[100%] border border-orange-500"
            ></iframe>
            <iframe
              width="469"
              height="480"
              src="https://www.youtube.com/embed/E-T1NnxuVCI"
              title="Nardo Wick - G Nikes (Feat. Polo G) [Official Video]"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="w-[100%] h-[100%] border border-orange-500"
            ></iframe>
            <iframe
              width="899"
              height="480"
              src="https://www.youtube.com/embed/iOGJ76ct8G8?list=PLBAK9YCzW4TboGRrVT2Rv8lWxPZ1zePqf"
              title="Omah Lay - i'm a mess (Official Music Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="w-[100%] h-[100%] border border-orange-500"
            ></iframe>
            <iframe
              width="899"
              height="480"
              src="https://www.youtube.com/embed/gCLUIzOsgGg"
              title="Fireboy DML & Asake - Bandana (Official Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="w-[100%] h-[100%] border border-orange-500"
            ></iframe>
            <iframe
              width="899"
              height="480"
              src="https://www.youtube.com/embed/7M2Gps9xR8g"
              title="Ruger - Girlfriend (Official Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="w-[100%] h-[100%] border border-orange-500"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="bg-black/90">
        <div className="opacity-70">
          <figure className="w-full  h-[250px] object-fit md:object-fit md:h-[250px] md:w-full border border-slate-600 md:backdrop-blur-7xl">
            <img
              src="https://media.istockphoto.com/photos/happy-woman-wearing-headphones-outdoor-picture-id1401333246?b=1&k=20&m=1401333246&s=170667a&w=0&h=FXCiQlhHqZgawF18gClhHlrdeAQM0LT65yBipPXfA_4="
              alt="Flixia"
              className=" w-[100%] h-[100%] md:h-[100%] md:object-fit md:w-[100%]"
            />
          </figure>
        </div>
        <div id="contact" className="flex items-center justify-between px-5">
          <div className="flex flex-col mb-5">
            <p className="text-white tracking-widest py-5 mb-7 text-md md:mb-2 md:text-white pl-6 md:text-lg md:py-10">
              Contact Us:
            </p>
            <p className="text-white tracking-widest text-xl md:text-white pl-6 md:text-lg mt-[-40px]">
              08057480210
            </p>
          </div>
          <figure>
            <img
              src="Flixialogo.png"
              alt="Flixia"
              className="w-[110px] md:w-[190px] md:h-10 px-3 items-center md:mt-3 "
            />
          </figure>
        </div>
      </div>

      <div className="h-[60px] flex w-full hover:bg-black transition  leading-2 duration-700 justify-center bg-black md:bg-black md:flex items-center md:w-full md:justify-center md:hover:bg-black  md:transition md:duration-700 text-orange-400   md:h-[80px] md:leading-3">
        <div className="pt-3 text-center  md:text-center">
          <footer className="flex  justify-center items-center gap-3 md:text-lg  cursor-pointer md:pb-2">
            <BsFacebook className=" hover:text-white md:transition md:duration-700 text-xg" />
            <AiFillGoogleCircle className="hover:text-white md:transition md:duration-700 text-lg" />
            <AiFillInstagram className="hover:text-white md:transition md:duration-700 text-lg" />
            <AiFillTwitterCircle className="hover:text-white md:transition md:duration-700 text-lg" />
          </footer>
          <p className=" md:tracking-wider md:pb-2 ">
            We are music{" "}
            <span className="text-white hover:text-orange  transition duration-700">
              Music is us
            </span>
          </p>
          <p className=" footer-text md: tracking-wider pb-1">
            Copyright @2021 FLIXIA
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
