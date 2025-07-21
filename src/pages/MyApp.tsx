import { CiSearch } from "react-icons/ci";
import "../App.css";
import logo from "../assets/image/LOGO.png";
import logoViedo from "../assets/viedo/start.mp4";
import { useState } from "react";
import { RiContactsFill } from "react-icons/ri";
import {
  FaBagShopping,
  FaFacebook,
  FaInstagram,
  FaRegCopyright,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import one from "../assets/image/one.webp";
import five from "../assets/image/five.webp";
import three from "../assets/image/three.webp";
import four from "../assets/image/four.webp";
import two from "../assets/image/two.webp";
import viedo1 from "../assets/viedo/new.mp4";
import viedo2 from "../assets/viedo/new2.mp4";
import viedo3 from "../assets/viedo/new3.mp4";
import viedo4 from "../assets/viedo/new4.mp4";
import viedo5 from "../assets/viedo/new5.mp4";
import viedo6 from "../assets/viedo/new6.mp4";
import viedo7 from "../assets/viedo/new7.mp4";
import six from "../assets/image/six.webp";
import seven from "../assets/image/seven.webp";
import eight from "../assets/image/eight.webp";
import nine from "../assets/image/nine.webp";
import ten from "../assets/image/ten.webp";
import new1 from "../assets/image/11.webp";
import new2 from "../assets/image/12.webp";
import new3 from "../assets/image/13.webp";
import victor from "../assets/image/Vector.webp";
import footer from "../assets/image/logo_footer.webp";
import mango from "../assets/image/mango_icon.webp";
import { ImCross } from "react-icons/im";
import { VscThreeBars } from "react-icons/vsc";

const MyApp = () => {
  const [shadowColor, setShadowColor] = useState("#f2ef12");
  const images = [new1, ten, new3, nine, eight, four];
  const messages = ["FREE SHIPPING ON ALL ORDERS!!"];
  const repeatCount = 6;
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const text = [
    "Home",
    "Catalog",
    "About Us",
    "Contact",
    "Return Shipping",
    "Shipping Policy",
  ];

  const policy = [
    "Search",
    "Privacy Policy",
    "Return Policy",
    "Shipping Policy",
    "Terms of Service",
    "Contact Us",
  ];

  return (
    <div>
      {/* first */}
      <div className="flex flex-col gap-2">
        <div className="overflow-hidden bg-[#f2ef12] py-2">
          <div className="marquee text-sm font-semibold text-[#ec008c] tracking-wider whitespace-nowrap flex gap-10 animate-marquee">
            {Array.from({ length: repeatCount * 2 }).map((_, index) => (
              <p key={index}>{messages[0]}</p>
            ))}
          </div>
        </div>

        {/* second */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-10 h-20 bg-[#ec008c] text-white rounded-b-[40px] text-[13px] font-semibold">
          <div className="hidden md:flex w-1/3 items-center justify-start gap-4">
            <p className="hover:cursor-pointer">Home</p>
            <p className="uppercase bg-[#4ca3df] hover:bg-[#f2ef12] hover:text-[#ec008c] hover:cursor-pointer px-4 py-1 rounded-full">
              Catalog
            </p>
            <p className="hover:cursor-pointer">About Us</p>
          </div>

          <div className="flex md:hidden">
            <VscThreeBars
              onClick={() => {
                setIsMenuOpen(true);
                setIsCartOpen(false);
              }}
              className="text-2xl hover:cursor-pointer"
            />
          </div>

          {/* Mobile Side Menu */}
          <div
            className={`h-screen w-[75%] md:w-[30%] bg-[#005fa7] fixed left-0 top-0 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <ImCross
              className="text-2xl text-white absolute left-7 top-7 cursor-pointer hover:text-red-500"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="p-4 h-full w-full flex flex-col justify-center items-center text-white gap-4 text-xl">
              {text.map((text, index) => (
                <p
                  key={index}
                  className="hover:cursor-pointer hover:text-[#f2ef12]"
                >
                  {text}
                </p>
              ))}
              <CiSearch className="text-2xl hover:cursor-pointer hover:text-[#f2ef12]" />
              <RiContactsFill className="text-2xl hover:cursor-pointer hover:text-[#f2ef12]" />
            </div>
          </div>

          <div className="flex w-1/3 justify-center md:justify-center">
            <img src={logo} alt="Logo" className=" object-contain" />
          </div>

          <div className="hidden md:flex w-1/3 justify-end gap-4 items-center">
            <p className="hover:cursor-pointer">Contact</p>
            <p className="hover:cursor-pointer">Return Shipping</p>
            <p className="hover:cursor-pointer">Shipping Policy</p>
            <p>|</p>
          </div>

          <div className="hidden md:flex gap-3 px-4 md:px-3">
            <CiSearch className="text-xl hover:cursor-pointer" />
            <RiContactsFill className="text-xl hover:cursor-pointer" />
          </div>
          <div className="flex gap-4">
            <FaBagShopping
              onClick={() => {
                setIsCartOpen(true);
                setIsMenuOpen(false);
              }}
              className="text-xl hover:cursor-pointer"
            />
          </div>
        </div>

        <div
          className={`h-screen w-[75%] md:w-[30%] bg-[#005fa7] fixed right-0 top-0 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <ImCross
            className="text-2xl text-white absolute right-7 top-7 cursor-pointer hover:cursor-pointer hover:text-red-500"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="p-4 h-full w-full flex flex-col justify-center items-center text-white">
            <div className="flex justify-between items-center">
              <p className="text-3xl font-semibold">Your cart is empty</p>
            </div>

            <div
              className="mt-6 uppercase px-6 py-2 bg-[#ec008c] text-[#f2ef12] hover:bg-[#f2ef12] hover:text-[#ec008c] hover:cursor-pointer font-semibold rounded-3xl shadow-2xl transition-all duration-300"
              style={{ boxShadow: `3px 3px ${shadowColor}` }}
              onMouseEnter={() => setShadowColor("#ec008c")}
              onMouseLeave={() => setShadowColor("#f2ef12")}
            >
              Continue shopping
            </div>

            <div className="mt-9 text-center flex flex-col gap-3">
              <p>Have an account?</p>
              <p>Log in to check out faster</p>
            </div>
          </div>
        </div>

        {/* third */}
        <div className="relative rounded-t-[40px]">
          <video
            src={logoViedo}
            className="h-screen w-full object-cover rounded-t-[40px]"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute bottom-5 left-7">
            <div
              className="uppercase px-6 py-2 bg-[#ec008c] text-[#f2ef12] hover:bg-[#f2ef12] hover:text-[#ec008c] hover:cursor-pointer font-semibold rounded-3xl shadow-2xl transition-all duration-300"
              style={{ boxShadow: `3px 3px  ${shadowColor}` }}
              onMouseEnter={() => setShadowColor("#ec008c")}
              onMouseLeave={() => setShadowColor("#f2ef12")}
            >
              shop now
            </div>
          </div>
        </div>

        {/* four */}
        <div className="bg-[#ec008c] h-20 flex items-center overflow-hidden">
          <div className="marqueeNew text-[45px] flex uppercase text-[#f2ef12] whitespace-nowrap font-['Avory_I_PE']">
            <div className="flex gap-10">
              <p className="pr-10">Vegan Friendly Dissolvable Strips</p>
              <p>Gluten Free</p>
            </div>
            <div className="flex gap-10 ml-20">
              <p className="pr-10">Vegan Friendly Dissolvable Strips</p>
              <p>Gluten Free</p>
            </div>
          </div>
        </div>

        {/* fifth */}
        <div className="w-full">
          <div className="flex flex-col md:grid grid-cols-3 place-items-center gap-2 px-4 text-center">
            {/* start */}
            <div className="flex flex-col gap-2 ">
              <div className=" w-full h-screen flex justify-center items-center relative ">
                <img
                  src={one}
                  className="w-full h-full object-cover rounded-[30px]"
                />
                <div className="absolute bottom-6 left-6 z-500">
                  <div
                    className="uppercase px-3 py-3 bg-[#ec008c] text-[#f2ef12] hover:bg-[#f2ef12] hover:text-[#ec008c] hover:cursor-pointer font-semibold rounded-3xl shadow-2xl transition-all duration-300 "
                    style={{ boxShadow: `3px 3px  ${shadowColor}` }}
                    onMouseEnter={() => setShadowColor("#ec008c")}
                    onMouseLeave={() => setShadowColor("#f2ef12")}
                  >
                    <img
                      src={mango}
                      alt="mango"
                      className="h-6 w-6 object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full h-screen flex justify-center items-center">
                <img
                  src={two}
                  className="w-full h-full object-cover rounded-[30px]"
                />
              </div>
            </div>

            {/* Middle  */}
            <div className="bg-[#ec008c] h-[calc(100vh*2)] rounded-[30px]  flex flex-col justify-center items-center text-white">
              <div className="flex flex-col w-full h-screen  justify-center items-center">
                <img src={five} className="w-full h-full object-contain" />
                <div className="text-4xl uppercase font-bold mb-4 [text-shadow:_2px_3px_4px_rgba(0,0,0,0.5)]">
                  Hangover Strips
                </div>

                <p className="text-xl text-center px-10  pb-5 leading-10">
                  Our Hangover Oral Strips are crafted with a blend of
                  ingredients inspired by traditional Ayurvedic practices,
                  designed to support general wellness. These strips are
                  formulated with a focus on the traditional use of each
                  ingredient, aiming to contribute to your overall well-being.
                </p>
                <div className="uppercase px-7 py-3 font-semibold hover:cursor-pointer bg-[#f2ef12] text-[#ec008c] rounded-full my-5">
                  shop now
                </div>
              </div>
            </div>

            {/* last */}
            <div className="flex flex-col gap-2">
              <div className="w-full h-screen flex justify-center items-center">
                <video
                  src={viedo1}
                  className="w-full h-full object-cover rounded-[30px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </div>
              <div className="w-full h-screen flex justify-center items-center rounded-2xl">
                <img
                  src={three}
                  className="w-full h-full object-cover rounded-[30px] "
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:grid grid-cols-3 place-items-center gap-2 px-4 text-center pt-2">
            <div className="w-full h-screen flex justify-center items-center ">
              <img
                src={four}
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
            <div className="w-full h-screen flex justify-center items-center ">
              <video
                src={viedo2}
                className="w-full h-full object-cover rounded-[30px]"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="w-full h-screen flex justify-center items-center ">
              <div className="bg-[#f2ef12] h-full w-full rounded-[30px]">
                <div className="flex flex-col h-full w-full justify-center items-center px-10">
                  <p className=" text-xl font-semibold leading-10 px-4">
                    After a long night, our Hangover Oral Strips are here to
                    help you bounce back. Packed with natural ingredients, they
                    work quickly to rehydrate, restore energy, and ease
                    discomfort, so you can feel refreshed and ready to take on
                    the day. Perfect for those who need a quick recovery after a
                    fun night out or a busy evening.
                  </p>
                  <div className="uppercase px-7 py-3 font-semibold hover:cursor-pointer bg-[#ec008c] text-[#f2ef12] rounded-full my-5">
                    shop now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* six */}
        <div className="bg-[#f2ef12] h-20 flex items-center overflow-hidden">
          <div className="marqueeNew text-[45px] flex uppercase text-[#ec008c] whitespace-nowrap font-['Avory_I_PE']">
            <div className="flex gap-10">
              <p className="pr-10">Vegan Friendly Dissolvable Strips</p>
              <p>Energy Strips</p>
            </div>
            <div className="flex gap-10 ml-20">
              <p className="pr-10">Vegan Friendly Dissolvable Strips</p>
              <p>Energy Strips</p>
            </div>
          </div>
        </div>

        {/* seven */}
        <div className="w-full">
          <div className="flex flex-col md:grid grid-cols-3 place-items-center gap-2 px-4 text-center">
            {/* start */}
            <div className="flex flex-col gap-2">
              <div className="w-full h-screen flex justify-center items-center ">
                <video
                  src={viedo4}
                  className="w-full h-full object-cover rounded-[30px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </div>
              <div className="w-full h-screen flex justify-center items-center">
                <video
                  src={viedo5}
                  className="w-full h-full object-cover rounded-[30px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </div>
            </div>

            {/* Middle  */}
            <div className="bg-[#f2ef12] h-[calc(100vh*2)] rounded-[30px]  flex flex-col justify-center items-center text-white">
              <div className="flex flex-col w-full h-screen  justify-center items-center">
                <img src={six} className="w-full h-full object-contain" />
                <div className="text-4xl text-black uppercase font-bold mb-4 [text-shadow:_2px_3px_4px_rgba(255,255,255,0.5)]">
                  Energy Strips
                </div>

                <p className="text-xl text-black text-center px-10  pb-5 leading-10">
                  They offer increased sustained energy compared to sugary
                  drinks or coffee without the crash or jitters that come with
                  regular caffeine intake.*
                </p>
                <div className="uppercase px-7 py-3 font-semibold hover:cursor-pointer bg-[#ec008c] text-[#] rounded-full my-5">
                  shop now
                </div>
              </div>
            </div>

            {/* last */}
            <div className="flex flex-col gap-2">
              <div className="w-full h-screen flex justify-center items-center">
                <img
                  src={seven}
                  className="w-full h-full object-cover rounded-[30px] "
                />
              </div>
              <div className="w-full h-screen flex justify-center items-center rounded-2xl">
                <img
                  src={eight}
                  className="w-full h-full object-cover rounded-[30px] "
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:grid grid-cols-3 place-items-center gap-2 px-4 text-center pt-2">
            <div className="w-full h-screen flex justify-center items-center ">
              <img
                src={nine}
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
            <div className="w-full h-screen flex justify-center items-center ">
              <video
                src={viedo3}
                className="w-full h-full object-cover rounded-[30px]"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="w-full h-screen flex justify-center items-center ">
              <img
                src={ten}
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
          </div>
        </div>

        {/* eight */}
        <div className="bg-[#ec008c] h-20 flex items-center overflow-hidden">
          <div className="marqueeNew text-[45px] flex uppercase text-[#f2ef12] whitespace-nowrap font-['Avory_I_PE']">
            <div className="flex gap-10">
              <p className="pr-10">Vegan Friendly Dissolvable Strips</p>
              <p>Gluten Free</p>
            </div>
            <div className="flex gap-10 ml-20">
              <p className="pr-10">Vegan Friendly Dissolvable Strips</p>
              <p>Gluten Free</p>
            </div>
          </div>
        </div>

        {/* nine */}
        <div className="w-full">
          <div className="flex flex-col md:grid grid-cols-3 place-items-center gap-2 px-4 text-center">
            {/* start */}
            <div className="flex flex-col gap-2">
              <div className="w-full h-screen flex justify-center items-center ">
                <img
                  src={new1}
                  className="w-full h-full object-cover rounded-[30px] "
                />
              </div>
              <div className="w-full h-screen flex justify-center items-center">
                <div className="bg-[#f2ef12] h-full w-full rounded-[30px]">
                  <div className="flex flex-col h-full w-full justify-center items-center px-10">
                    <div className="text-4xl text-black uppercase font-bold mb-4 [text-shadow:_4px_4px_4px_rgba(255,255,255,0.5)]">
                      Recharge While You Rest
                    </div>
                    <p className=" text-xl font-semibold leading-10 px-4">
                      Whether you're always on the move or just need to feel
                      like you again, our Sleep Oral Strips help you fall asleep
                      faster and wake up feeling clear, calm, and fully
                      recharged
                    </p>
                    <div className="uppercase px-7 py-3 font-semibold hover:cursor-pointer bg-[#ec008c] text-[#f2ef12] rounded-full my-5">
                      shop now
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle  */}
            <div className="bg-[#fb1521] h-[calc(100vh*2)] rounded-[30px]  flex flex-col justify-center items-center text-white">
              <div className="flex flex-col w-full h-screen  justify-center items-center">
                <img src={new2} className="w-full h-full object-contain" />
                <div className="text-5xl text-yellow-300 uppercase font-bold mb-8 [text-shadow:_2px_3px_4px_rgba(255,255,255,0.5)]">
                  Sleep Strips
                </div>

                <p className="text-xl text-white text-center px-10  pb-5 leading-10">
                  Whether you enjoy an active lifestyle or just need an extra
                  boost during the day, Sleep oral strips will give you the
                  energy to do anything.
                </p>
                <div
                  className="uppercase px-6 py-2 bg-[#ec008c] text-[#f2ef12] hover:bg-[#f2ef12] hover:text-[#ec008c] hover:cursor-pointer font-semibold rounded-3xl shadow-2xl transition-all duration-300"
                  style={{ boxShadow: `3px 3px  ${shadowColor}` }}
                  onMouseEnter={() => setShadowColor("#ec008c")}
                  onMouseLeave={() => setShadowColor("#f2ef12")}
                >
                  shop now
                </div>
              </div>
            </div>

            {/* last */}
            <div className="flex flex-col gap-2">
              <div className="w-full h-screen flex justify-center items-center">
                <video
                  src={viedo6}
                  className="w-full h-full object-cover rounded-[30px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </div>
              <div className="w-full h-screen flex justify-center items-center rounded-2xl">
                <img
                  src={new3}
                  className="w-full h-full object-cover rounded-[30px] "
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row place-items-center gap-2 px-4 text-center pt-2">
            <div className="w-full md:w-[60%] h-screen flex justify-center items-center ">
              <video
                src={viedo7}
                className="w-full h-full object-cover rounded-[30px]"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="w-full md:w-[40%] h-screen flex justify-center items-center ">
              <img
                src={ten}
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
          </div>
        </div>

        {/* ten */}
        <div className="w-full px-4">
          <div className="bg-[#ec008c] w-full h-auto rounded-2xl p-3">
            <p className="text-4xl text-white mb-4">Join Us @mind.strips</p>
            <div className="flex w-full justify-evenly gap-2 overflow-x-auto overflow-y-hidden md:overflow-hidden custom-scrollbar">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`image-${index}`}
                  className="w-48 h-60 object-cover flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="flex flex-col gap-0">
          <div className="w-full h-fit relative">
            <img
              src={victor}
              className="w-full h-full object-cover"
              alt="background"
            />

            <div className="absolute bottom-0 md:bottom-5 w-full flex justify-center items-center">
              <img
                src={footer}
                className="w-[130px]  md:w-[200px]"
                alt="footer logo"
              />
            </div>
          </div>

          <div className="w-full bg-[#f2ef12] py-2 px-6 text-black">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-2 border-b border-b-[rgba(0,0,0,0.08)]">
              <div>
                <p className="text-lg font-bold mb-2">MindStrips</p>
                <p className="text-sm mb-4">
                  At MindStrips, we innovate wellness with convenient, effective
                  oral dissolvable strips designed to enhance your daily life.
                </p>
                <p className="text-sm font-bold">Contact Us</p>
                <p className="text-sm">7901 4th St N, 4412</p>
                <p className="text-sm mb-3">St. Petersburg, FL 33702</p>
                <div className="flex gap-3">
                  <div className="h-10 w-10 border border-black rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
                    <FaFacebook />
                  </div>

                  <div className="h-10 w-10 border border-black rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
                    <FaInstagram />
                  </div>

                  <div className="h-10 w-10 border border-black rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
                    <FaYoutube />
                  </div>

                  <div className="h-10 w-10 border border-black rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
                    <FaSquareXTwitter />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-lg font-bold mb-2">Quick links</p>
                <div className="flex flex-col gap-1 text-sm">
                  {text.map((item, index) => (
                    <p key={index} className="cursor-pointer ">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-lg font-bold mb-2">Policies</p>
                <div className="flex flex-col gap-1 text-sm">
                  {policy.map((item, index) => (
                    <p key={index} className="cursor-pointer ">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-lg font-bold mb-2">
                  Subscribe to our emails
                </p>
                <input
                  type="text"
                  placeholder="Enter email address"
                  className="w-full px-3 py-2 text-sm rounded border-2 border-black mb-3 focus:outline-none focus:ring-0"
                />
                <button className="w-full relative overflow-hidden  text-white bg-black py-2 text-sm font-semibold rounded border-2 border-black group transition-all duration-300 ease-in-out hover:bg-transparent hover:cursor-pointer">
                  <span className="relative z-10 group-hover:text-black  transition-colors duration-300 bg-transparent">
                    Submit
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent to-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>
                </button>
              </div>
            </div>

            {/* svg icon */}
            <div className="py-3">
              <div className="flex w-full justify-center items-center gap-4 py-5">
                <svg
                  className="icon icon--full-color"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 38 24"
                  width="38"
                  height="24"
                  aria-labelledby="pi-amazon"
                >
                  <title id="pi-amazon">Amazon</title>
                  <path
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                    fill="#000"
                    fill-rule="nonzero"
                    opacity=".07"
                  ></path>
                  <path
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                    fill="#FFF"
                    fill-rule="nonzero"
                  ></path>
                  <path
                    d="M25.26 16.23c-1.697 1.48-4.157 2.27-6.275 2.27-2.97 0-5.644-1.3-7.666-3.463-.16-.17-.018-.402.173-.27 2.183 1.504 4.882 2.408 7.67 2.408 1.88 0 3.95-.46 5.85-1.416.288-.145.53.222.248.47v.001zm.706-.957c-.216-.328-1.434-.155-1.98-.078-.167.024-.193-.148-.043-.27.97-.81 2.562-.576 2.748-.305.187.272-.047 2.16-.96 3.063-.14.138-.272.064-.21-.12.205-.604.664-1.96.446-2.29h-.001z"
                    fill="#F90"
                    fill-rule="nonzero"
                  ></path>
                  <path
                    d="M21.814 15.291c-.574-.498-.676-.73-.993-1.205-.947 1.012-1.618 1.315-2.85 1.315-1.453 0-2.587-.938-2.587-2.818 0-1.467.762-2.467 1.844-2.955.94-.433 2.25-.51 3.25-.628v-.235c0-.43.033-.94-.208-1.31-.212-.333-.616-.47-.97-.47-.66 0-1.25.353-1.392 1.085-.03.163-.144.323-.3.33l-1.677-.187c-.14-.033-.296-.153-.257-.38.386-2.125 2.223-2.766 3.867-2.766.84 0 1.94.234 2.604.9.842.82.762 1.918.762 3.11v2.818c0 .847.335 1.22.65 1.676.113.164.138.36-.003.482-.353.308-.98.88-1.326 1.2a.367.367 0 0 1-.414.038zm-1.659-2.533c.34-.626.323-1.214.323-1.918v-.392c-1.25 0-2.57.28-2.57 1.82 0 .782.386 1.31 1.05 1.31.487 0 .922-.312 1.197-.82z"
                    fill="#221F1F"
                  ></path>
                </svg>
                <svg
                  className="icon icon--full-color"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-labelledby="pi-american_express"
                  viewBox="0 0 38 24"
                  width="38"
                  height="24"
                >
                  <title id="pi-american_express">American Express</title>
                  <path
                    fill="#000"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"
                    opacity=".07"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"
                  ></path>
                </svg>
                <svg
                  className="icon icon--full-color"
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="38"
                  height="24"
                  aria-labelledby="pi-diners_club"
                >
                  <title id="pi-diners_club">Diners Club</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  ></path>
                  <path
                    d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z"
                    fill="#3086C8"
                  ></path>
                </svg>
                <svg
                  className="icon icon--full-color"
                  viewBox="0 0 38 24"
                  width="38"
                  height="24"
                  role="img"
                  aria-labelledby="pi-discover"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title id="pi-discover">Discover</title>
                  <path
                    fill="#000"
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z"
                    fill="#231F20"
                  ></path>
                  <path
                    d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                    fill="url(#pi-paint0_linear)"
                  ></path>
                  <path
                    opacity=".65"
                    d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                    fill="url(#pi-paint1_linear)"
                  ></path>
                  <path
                    d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z"
                    fill="#231F20"
                  ></path>
                  <path
                    d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z"
                    fill="#231F20"
                  ></path>
                  <path
                    d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z"
                    fill="#F48120"
                  ></path>
                  <defs>
                    <linearGradient
                      id="pi-paint0_linear"
                      x1="21.657"
                      y1="12.275"
                      x2="19.632"
                      y2="9.104"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F89F20"></stop>
                      <stop offset=".25" stop-color="#F79A20"></stop>
                      <stop offset=".533" stop-color="#F68D20"></stop>
                      <stop offset=".62" stop-color="#F58720"></stop>
                      <stop offset=".723" stop-color="#F48120"></stop>
                      <stop offset="1" stop-color="#F37521"></stop>
                    </linearGradient>
                    <linearGradient
                      id="pi-paint1_linear"
                      x1="21.338"
                      y1="12.232"
                      x2="18.378"
                      y2="6.446"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F58720"></stop>
                      <stop offset=".359" stop-color="#E16F27"></stop>
                      <stop offset=".703" stop-color="#D4602C"></stop>
                      <stop offset=".982" stop-color="#D05B2E"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  className="icon icon--full-color"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 38 24"
                  width="38"
                  height="24"
                  aria-labelledby="pi-google_pay"
                >
                  <title id="pi-google_pay">Google Pay</title>
                  <path
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                    fill="#000"
                    opacity=".07"
                  ></path>
                  <path
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                    fill="#FFF"
                  ></path>
                  <path
                    d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z"
                    fill="#5F6368"
                  ></path>
                  <path
                    d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z"
                    fill="#FBBC04"
                  ></path>
                  <path
                    d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <svg
                  className="icon icon--full-color"
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="38"
                  height="24"
                  aria-labelledby="pi-master"
                >
                  <title id="pi-master">Mastercard</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  ></path>
                  <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                  <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                  <path
                    fill="#FF5F00"
                    d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                  ></path>
                </svg>
                <svg
                  className="icon icon--full-color"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 38 24"
                  width="38"
                  height="24"
                  aria-labelledby="pi-shopify_pay"
                >
                  <title id="pi-shopify_pay">Shop Pay</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                    fill="#000"
                  ></path>
                  <path
                    d="M35.889 0C37.05 0 38 .982 38 2.182v19.636c0 1.2-.95 2.182-2.111 2.182H2.11C.95 24 0 23.018 0 21.818V2.182C0 .982.95 0 2.111 0H35.89z"
                    fill="#5A31F4"
                  ></path>
                  <path
                    d="M9.35 11.368c-1.017-.223-1.47-.31-1.47-.705 0-.372.306-.558.92-.558.54 0 .934.238 1.225.704a.079.079 0 00.104.03l1.146-.584a.082.082 0 00.032-.114c-.475-.831-1.353-1.286-2.51-1.286-1.52 0-2.464.755-2.464 1.956 0 1.275 1.15 1.597 2.17 1.82 1.02.222 1.474.31 1.474.705 0 .396-.332.582-.993.582-.612 0-1.065-.282-1.34-.83a.08.08 0 00-.107-.035l-1.143.57a.083.083 0 00-.036.111c.454.92 1.384 1.437 2.627 1.437 1.583 0 2.539-.742 2.539-1.98s-1.155-1.598-2.173-1.82v-.003zM15.49 8.855c-.65 0-1.224.232-1.636.646a.04.04 0 01-.069-.03v-2.64a.08.08 0 00-.08-.081H12.27a.08.08 0 00-.08.082v8.194a.08.08 0 00.08.082h1.433a.08.08 0 00.081-.082v-3.594c0-.695.528-1.227 1.239-1.227.71 0 1.226.521 1.226 1.227v3.594a.08.08 0 00.081.082h1.433a.08.08 0 00.081-.082v-3.594c0-1.51-.981-2.577-2.355-2.577zM20.753 8.62c-.778 0-1.507.24-2.03.588a.082.082 0 00-.027.109l.632 1.088a.08.08 0 00.11.03 2.5 2.5 0 011.318-.366c1.25 0 2.17.891 2.17 2.068 0 1.003-.736 1.745-1.669 1.745-.76 0-1.288-.446-1.288-1.077 0-.361.152-.657.548-.866a.08.08 0 00.032-.113l-.596-1.018a.08.08 0 00-.098-.035c-.799.299-1.359 1.018-1.359 1.984 0 1.46 1.152 2.55 2.76 2.55 1.877 0 3.227-1.313 3.227-3.195 0-2.018-1.57-3.492-3.73-3.492zM28.675 8.843c-.724 0-1.373.27-1.845.746-.026.027-.069.007-.069-.029v-.572a.08.08 0 00-.08-.082h-1.397a.08.08 0 00-.08.082v8.182a.08.08 0 00.08.081h1.433a.08.08 0 00.081-.081v-2.683c0-.036.043-.054.069-.03a2.6 2.6 0 001.808.7c1.682 0 2.993-1.373 2.993-3.157s-1.313-3.157-2.993-3.157zm-.271 4.929c-.956 0-1.681-.768-1.681-1.783s.723-1.783 1.681-1.783c.958 0 1.68.755 1.68 1.783 0 1.027-.713 1.783-1.681 1.783h.001z"
                    fill="#fff"
                  ></path>
                </svg>
                <svg
                  className="icon icon--full-color"
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="38"
                  height="24"
                  aria-labelledby="pi-visa"
                >
                  <title id="pi-visa">Visa</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  ></path>
                  <path
                    d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                    fill="#142688"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col w-full justify-center items-center text-[12px]">
                <p className="hover:cursor-pointer flex justify-center items-center gap-1"><FaRegCopyright /> 2025, Mindtrips Powered by React</p>
                <p>A BlossomCoder design — maintained with care.</p>
                <p>Manage subscriptions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApp;
