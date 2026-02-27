"use client";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import BookDemoModal from "@/components/modals/BookDemoModal";
import { TEACHERS } from "@/data/teachersData";
import TeacherCard from "@/components/TeacherCard";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className=" relative ">
      <div className=" book-demo-button   fixed  left-[50%] -translate-x-1/2 bottom-4 p-[4px] rounded-full">
        <button
          onClick={() => setIsModalOpen(true)}
          className=" bg-radial from-yellow-400 to-red-500 text-white  px-4 py-2 rounded-full cursor-pointer "
        >
          Book a Demo
        </button>
      </div>
      <section className=" md:tracking-wider  md:leading-2 bg-indigo-100 ">
        <div className=" py-24 md:py-64   flex flex-col justify-center items-center text-center px-12 md:px-24">
          <h2 className=" text-3xl md:text-6xl font-bold font-display tracking-tight bg-red-400 bg-clip-text">
            Smarter Learning, Happier Kids.
          </h2>
          <h2 className=" md:text-2xl text-black mt-1 text-center tracking-wide font-normal">
            Give your child the best of home{" "}
            <RoughNotation
              type="highlight"
              show="true"
              color="oklch(79.2% 0.209 151.711)"
              padding={3}
            >
              comfort{" "}
            </RoughNotation>
            <RoughNotation
              type="highlight"
              show="true"
              color="oklch(79.2% 0.209 151.711)"
              padding={3}
            >
              interactivity{" "}
            </RoughNotation>{" "}
            <br /> — no{" "}
            <RoughNotation
              type="circle"
              show="true"
              color="oklch(63.7% 0.237 25.331)"
              padding={3}
            >
              boring lectures{" "}
            </RoughNotation>
            lectures, no{" "}
            <RoughNotation
              type="circle"
              show="true"
              color="oklch(63.7% 0.237 25.331)"
              padding={3}
            >
              stressful commutes{" "}
            </RoughNotation>
          </h2>

          <a
            href="#exploreEdRev"
            className="bg-sky-500 px-12 p-4 rounded-full mt-3 text-neutral-50"
          >
            Explore EdRev
          </a>
        </div>
      </section>

      <section className=" px-4 md:px-24 py-6 bg-amber-300 flex items-center justify-between  ">
        <a
          href="https://play.google.com/store/apps/details?id=com.ingenium.tca1950"
          target="_blank"
          rel="noopener noreferrer"
          className=" min-h-8 w-18 md:min-h-16 md:w-48 relative  "
        >
          <Image
            src="/get_on_Google_play.png"
            fill={true}
            alt="Logo EdRev"
            className=" object-contain"
          />
        </a>
        <div className=" md:text-2xl text-sm ">
          EdRev app is now available on Google Play.
        </div>
      </section>
      <section
        id="exploreEdRev"
        className="bg-white px-4 md:px-24 py-24 flex flex-col items-center justify-center"
      >
        <div>
          <h2 className=" text-5xl text-blue-700 font-semibold">
            EdRev -Revolution in Education
          </h2>

          <h3 className="uppercase text-neutral-600 tracking-wider">
            Revolution in India
          </h3>

          <div className="mt-2">
            <p>
              We all know education is crucial - but how it is delivered matters
              even more. Traditional Offline and Online methods have their own
              pros and cons. But what if your child gget the best of both
              world?{" "}
            </p>
            <h1>
              Introducin EdRev - a hybrid learnin platform that combines the
              comfort of home with interactivity of a real classroom. With smart
              screens, microphones, and cameras, EdRev creates a virtual setup
              that ensures real-time, two-wa interaction between teachers and
              students -no more borin one way lectures.{" "}
            </h1>
          </div>
          <div className="mt-8 md:mt-12">
            <h4 className="uppercase  tracking-wide ">For Classes 1 to 10 </h4>

            <h3 className="text-6xl  font-semibold bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 text-transparent bg-clip-text">
              Only Assistance you will need in Your Academics.{" "}
            </h3>
          </div>
        </div>
        <div></div>
      </section>
      <section className="Teachers_Card bg-white">
        <h4 className="text-3xl md:text-4xl p-4 text-blue-600 ">
          Meet Your Teachers
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  p-4 md:p-6 lg:p-8">
          {TEACHERS.map((teacher) => {
            return <TeacherCard teacher={teacher} key={teacher.name} />;
          })}
        </div>
      </section>
      <section>
        <BookDemoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
    </div>
  );
}
