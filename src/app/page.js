import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="  ">
        <div className="  min-h-screen   flex flex-col justify-center items-center px-12 md:px-24">
          <h1 className=" text-3xl md:text-6xl font-bold font-display tracking-tight bg-red-400 bg-clip-text">
            Smarter Learning, Happier Kids.
          </h1>
          <h2 className=" md:text-2xl text-neutral-700 mt-1 text-center tracking-wide font-normal">
            Give your child the best of home{" "}
            <span className="text-green-400">comfort</span> and classroom{" "}
            <span className="text-green-400">interactivity</span> <br /> — no
            <span className="text-red-400"> boring lectures </span>
            lectures, no{" "}
            <span className="text-red-400">stressful commutes.</span>
          </h2>

          <button className="bg-sky-500 px-6 p-2 rounded-full mt-3 text-neutral-50">
            Explore EdRev
          </button>
        </div>
      </section>
    </div>
  );
}
