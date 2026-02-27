import React from "react";

const TeacherCard = ({ teacher }) => {
  return (
    <div className="border border-slate-400 bg-indigo-400/20     px-8 p-4 flex flex-col gap-4 items-start">
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className=" w-24 md:w-48">
            <img src={teacher.photo} alt={teacher.name} />
          </div>
          <h3 className="px-2 md:p-2 border border-slate-400 w-full text-center text font-semibold uppercase">
            {teacher.name}
          </h3>
        </div>
        <div>
          <h3>
            <span>Subject: </span>
            <span className="text-transparent bg-amber-600 bg-clip-text text-shadow-white text-shadow">
              {teacher.subject}
            </span>
          </h3>
          <p>{`Experience : ${teacher.experience} Years`}</p>
          <p>{`Students Taught :  ${teacher.students}`}</p>
          <p>{`Classes Taken : ${teacher.classes}`}</p>
        </div>
      </div>
      <div className=" w-full text-center">
        <p>{teacher.tagline}</p>
      </div>
    </div>
  );
};

export default TeacherCard;
