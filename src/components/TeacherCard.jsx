import React from "react";

const TeacherCard = ({ teacher }) => {
  return (
    <div className="group border border-slate-300/50 bg-gradient-to-br from-indigo-50/80 to-blue-50/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2 md:max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
        {/* Photo Section */}
        <div className="flex flex-col items-center md:items-start gap-3 flex-shrink-0 w-full md:w-auto">
          <div className="relative">
            <img
              src={teacher.photo}
              alt={teacher.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-white/60 shadow-xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs md:text-sm">★</span>
            </div>
          </div>
          <h3 className="px-4 py-2 bg-white/80 border border-slate-200 w-full text-center text-lg md:text-xl font-bold uppercase tracking-wide text-slate-800 shadow-sm rounded-xl">
            {teacher.name}
          </h3>
        </div>

        {/* Content Section */}
        <div className="flex-1 w-full space-y-4 text-left">
          {/* Subject */}
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
              Subject
            </h4>
            <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
              {teacher.subject}
            </h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="text-center p-3 bg-white/60 rounded-xl border border-slate-100 shadow-sm">
              <span className="text-2xl font-bold text-slate-800">
                {teacher.experience}
              </span>
              <p className="text-xs text-slate-600 uppercase tracking-wide">
                Years Exp
              </p>
            </div>
            <div className="text-center p-3 bg-white/60 rounded-xl border border-slate-100 shadow-sm">
              <span className="text-2xl font-bold text-slate-800">
                {teacher.students}
              </span>
              <p className="text-xs text-slate-600 uppercase tracking-wide">
                Students
              </p>
            </div>
            <div className="text-center p-3 bg-white/60 rounded-xl border border-slate-100 shadow-sm">
              <span className="text-2xl font-bold text-slate-800">
                {teacher.classes}
              </span>
              <p className="text-xs text-slate-600 uppercase tracking-wide">
                Classes
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="pt-4 pb-2">
            <blockquote className="italic text-lg md:text-xl text-slate-700 font-medium bg-gradient-to-r from-slate-100 to-indigo-100 p-4 rounded-2xl border-l-4 border-indigo-400 shadow-inner">
              "{teacher.tagline}"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
