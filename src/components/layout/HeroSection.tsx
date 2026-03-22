import { useState } from "react";
import CircleButton from "../UI/CircleButton";
import HeroFallback from "./HeroFallback";
import heroVideo from "../../assets/SeniorProjectWithBg.mp4";
import {homeProjImg1} from "../../assets";
import "../../components/layout/styles/Hero.css";
import RectButton from "../UI/PillButton";
export default function Hero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative overflow-hidden black-background
                        flex flex-col lg:flex-row
                        w-full h-auto lg:h-screen">

       {/* Left side — text, vertically centered */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-8 lg:px-12
                      pt-28 pb-0 lg:pt-0 text-center lg:text-left">
        <h1 className="font-normal leading-snug tracking-tight hero-heading">
          Hello, I'm Israa, a recent computer science graduate and aspiring
          full-stack developer.
        </h1>
        <p className="hero-subtitle mt-4">
          Passionate about turning good designs into real web applications.
        </p>
      </div>

      {/* Circle button — desktop*/}
      <div className="hidden lg:flex justify-center items-center
                      lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-10">
        <CircleButton label="MY WORK" to="/projects" />
      </div>

      {/* Rect button — mobile */}
      <div className="flex lg:hidden justify-center items-center py-6">
        <RectButton label="MY WORK" to="/projects" />
      </div>

      {/* Right side — video or fallback */}
      <div className="w-full lg:w-1/2 lg:h-full flex items-center justify-center overflow-hidden mr-0 lg:mr-5">
        {videoError ? (
          <HeroFallback img={homeProjImg1}/>
        ) : (
          <video
            className="w-full object-contain lg:object-cover block bg-[#0a0a0a]"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
      </div>

    </section>
  );
}