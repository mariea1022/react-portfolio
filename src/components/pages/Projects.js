import React from "react";
import DinnerAndDrinks from "../../assets/images/Dinner&Drinks.png";
import Vapour from "../../assets/images/Vapour.png";
import NoteTaker from "../../assets/images/NoteTaker.png";
import CodingQuiz from "../../assets/images/CodingQuiz.png";
import WeatherDashboard from "../../assets/images/WeatherDashboard.png";
import WorkDayScheduler from "../../assets/images/WorkDayScheduler.png";
import HackerFit from "../../assets/images/HackerFit.png"

function Projects() {
  return (
    <div className="h-screen flex flex-col place-items-center">
      <h2 className="text-3xl mt-5 mb-8 font-bold underline underline-offset-8 decoration-8 decoration-blue-500 dark:decoration-blue-500">
        Projects
      </h2>
      <div>
        <div className="flex flex-wrap justify-center">
          <div
            className="bg-cover max-w-sm border border-gray-200 shadow dark:border-gray-700 p-2 m-2"
            style={{
              backgroundImage: `url(${DinnerAndDrinks})`,
            }}
          >
            <div className="p-5">
              <a href="AboutMe">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Dinner and Drinks
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Can't decide what to make for dinner? This app generates random
                meal and cocktail recipes.
              </p>
              <a
                href="https://github.com/sely1724/dinner-and-drinks"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                GitHub Repo
              </a>
            </div>
          </div>
          <div
            className="max-w-sm bg-cover bg-white border border-gray-200 shadow dark:border-gray-700 p-2 m-2"
            style={{
              backgroundImage: `url(${Vapour})`,
            }}
          >
            <div className="p-5">
              <a href="AboutMe">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Steam Achievement Picker
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Are you a PC gamer, and not sure what to play next? This app
                generates random achievement games for the user to play.
              </p>
              <a
                href="https://github.com/mariea1022/Steam-Achievement-Picker"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                GitHub Repo
              </a>
            </div>
          </div>
          <div
            className="bg-cover max-w-sm border border-gray-200 shadow dark:border-gray-700 p-2 m-2"
            style={{
              backgroundImage: `url(${HackerFit})`,
            }}
          >
            <div className="p-5">
              <a href="AboutMe">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  HackerFit
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Want to better track your gym workouts? This app allows to create routines and
                track sets/reps.
              </p>
              <a
                href="https://github.com/mtownsend509/HackerFit"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                GitHub Repo
              </a>
            </div>
          </div>
          <div
            className="bg-cover max-w-sm border border-gray-200 shadow dark:border-gray-700 p-2 m-2"
            style={{
              backgroundImage: `url(${CodingQuiz})`,
            }}
          >
            <div className="p-5">
              <a href="AboutMe">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Coding Quiz
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Up for a little brain quiz? This is a timed coding quiz on a few
                different programming topics.
              </p>
              <a
                href="https://github.com/mariea1022/timed-coding-quiz"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                GitHub Repo
              </a>
            </div>
          </div>
          <div
            className="max-w-sm bg-cover bg-white border border-gray-200 shadow dark:border-gray-700 p-2 m-2"
            style={{
              backgroundImage: `url(${WeatherDashboard})`,
            }}
          >
            <div className="p-5">
              <a href="AboutMe">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Weather Dashboard
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Curious about the weather for your trip? Use this app to get a 5
                day forecast of a city.
              </p>
              <a
                href="https://github.com/mariea1022/weather-dashboard"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                GitHub Repo
              </a>
            </div>
          </div>
          <div
            className="max-w-sm bg-cover bg-white border border-gray-200 shadow dark:border-gray-700 p-2 m-2"
            style={{
              backgroundImage: `url(${WorkDayScheduler})`,
            }}
          >
            <div className="p-5">
              <a href="AboutMe">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Work Day Scheduler
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Tired of Google Calendar? Use this app to track your work day
                schedule!
              </p>
              <a
                href="https://github.com/mariea1022/work-day-scheduler"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Projects() {
//   return (
//     <div className="ProjectsContainer h-screen">
//       <div>
//         <h2>Projects</h2>
//       </div>
//       <div className="CardsContainer h-50 border">
//         <div className="CardContainer border">
//           <div className="flex">
//           <h5 className="">
//             Project Title
//           </h5>
//           <div>
//             GitHub repo
//           </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

export default Projects;
