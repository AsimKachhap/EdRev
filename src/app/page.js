import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

export default function Home() {
  return (
    <div>
      <section className=" md:tracking-wider  md:leading-2 ">
        <div className="  py-24 md:py-64   flex flex-col justify-center items-center text-center px-12 md:px-24">
          <h1 className=" text-3xl md:text-6xl font-bold font-display tracking-tight bg-red-400 bg-clip-text">
            Smarter Learning, Happier Kids.
          </h1>
          <h2 className=" md:text-2xl text-neutral-700 mt-1 text-center tracking-wide font-normal">
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

      <section>
        <h2>Section 2</h2>
      </section>
    </div>
  );
}
