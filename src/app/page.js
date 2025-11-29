import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

export default function Home() {
  return (
    <div>
      <section className=" md:tracking-wider  md:leading-2 bg-indigo-100 ">
        <div className="  py-24 md:py-64   flex flex-col justify-center items-center text-center px-12 md:px-24">
          <h1 className=" text-3xl md:text-6xl font-bold font-display tracking-tight bg-red-400 bg-clip-text">
            Smarter Learning, Happier Kids.
          </h1>
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

          <button className="bg-sky-500 px-12 p-4 rounded-full mt-3 text-neutral-50">
            Explore EdRev
          </button>
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
    </div>
  );
}
