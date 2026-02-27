import React from "react";

const TeacherCard = ({ teacher }) => {
  return (
    <div className="border rounded-md border-slate-400 bg-indigo-400/20   flex  gap-4 items-start">
      <div className="flex-1/3 ">
        <div className="h-full  ">
          <img
            className=" rounded-l-md"
            src={teacher.photo}
            alt={teacher.name}
          />
        </div>
      </div>
      <div className=" flex-2/3 flex flex-col items-center px-8 ">
        <div>
          <div className="flex flex-col items-center border-b border-gray-600 py-2">
            <h3 className="px-2 md:p-2   w-full text-center text-2xl md:text-semibold uppercase">
              {teacher.name}
            </h3>

            <h3>
              <span>Subject: </span>
              <span className="text-transparent bg-amber-600 bg-clip-text text-shadow-white text-shadow">
                {teacher.subject}
              </span>
            </h3>
          </div>
          <div className="">
            <div>
              <p>{`Experience : ${teacher.experience} Years`}</p>
              <p>{`Students Taught :  ${teacher.students}`}</p>
              <p>{`Classes Taken : ${teacher.classes}`}</p>
            </div>
          </div>
        </div>
        <div className=" w-full text-center">
          <p className="italic">{teacher.tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
