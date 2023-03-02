import React from "react";

function AboutMe() {
  return (
    <div
      className="Project h-screen flex place-items-center p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover bg-blend-multiply"
      style={{
        backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/000/227/854/original/female-developer-vector.jpg")`,
      }}
    >
      <div className="w-full text-center">
        <p className="text-4xl mb-5 font-bold leading-tight tracking-tight text-white underline decoration-sky-500">
          Hi there! 👋 My name is Marie Lewis.
        </p>
        <p className="text-2xl mb-5 font-bold leading-tight tracking-tight text-white underline decoration-pink-500">
          Recruiter by day, full stack dev by night, and foodie for life!
        </p>
      </div>
    </div>
  );
}

// function AboutMe() {
//   <div>
//   <div>
//     <h2>A bit about me</h2>
//     <p>
//       By day, I am a Recruiter for an internet-based company. By night, I'm
//       a full-stack developer, attending University of Washington's part-time
//       coding bootcamp. I love that I am able to exercise both my
//       interpersonal skills, as well as my creative skills. I am passionate
//       about building applications that are solve user needs.
//     </p>
//   </div>
//   <div>
//     <h2>Technologies</h2>
//   </div>
// </div>
// }

export default AboutMe;
