import React from "react";

function Project() {
  return (
    <div
      className="Project h-screen flex place-items-center p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover bg-blend-multiply"
      style={{
        backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/000/227/854/original/female-developer-vector.jpg")`,
      }}
    >
<div className="w-full text-center">
        <p className="text-4xl mb-5 font-bold leading-tight tracking-tight text-white underline decoration-sky-500">
          Hi there! 👋  My name is Marie Lewis.
        </p>
        <p className="text-2xl mb-5 font-bold leading-tight tracking-tight text-white underline decoration-pink-500">
          Recruiter by day, full stack dev by night, and foodie for life!
        </p>
        </div>
    </div>
  );
}

export default Project;
