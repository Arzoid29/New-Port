
import { AcademicCapIcon} from '@heroicons/react/outline';
export default function Projects() {
  return (
    <section id="education">
    <div className="bg-gray-200 shadow-2xl overflow-hidden sm:rounded-3xl max-w-3xl  mx-auto  mt-14 flex ">
       <div className="px-4 py-5 sm:px-6 sm:mt-11  ">
          <AcademicCapIcon 
             className="rounded-full w-40 mx-auto  text-blue-600 "
          />
          <div className="space-x-8 flex justify-center ">
             <p className="bg-gray-200 text-xl  hover:text-blue-600 font-semibold capitalize ">
             Training Projects
             </p>
          </div>
       </div>
       <div className="border-t border-gray-200 ">
          <dl>
             <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-200 ">
                <dt className="text-md font-medium text-gray-500 ">
                   Employee Management System
                </dt>

                <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:-span-2">
                  Angular, NodeJS, Postgres, Express, Sequelize, Tailwind
                </dd>
                <div className="ml-4 flex-shrink-0 bg-gray-200  ">
                   <p className="  pl-3 ml-auto  bg-gray-200">
                      Frontend : <a class='text-blue-500 hover:opacity-75' href='https://github.com/Arzoid29/Commets-section'>Git</a>
                      <br/>
                      Backend: <a class='text-blue-500 hover:opacity-75' href='https://github.com/Arzoid29/Commets-section-backend'>Git</a>
                   </p>
                </div>
             </div>
             <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">
                Budget Tracker App
                </dt>
                <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:-span-2">
                  JS, HTML, React, Tailwind
                </dd>
                <div className="ml-4 flex-shrink-0">
                   <button className="bg-gray-200  pl-3 ml-auto">
                   Frontend : <a class='text-blue-500 hover:opacity-75' href='https://github.com/Arzoid29/budget-tracker'>Git</a>
                   <br/>
                   Deploy : <a class='text-blue-500 hover:opacity-75 ' href='http://budget-tracker-gamma.vercel.app/'>Vercel</a>

                   </button>
                </div>
             </div>
             <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
                <dt className="text-md font-medium text-gray-500">
                        Quotes generator
                </dt>
                <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:-span-2">
                    JS, HTML, React, Tailwind,Css
                </dd>
                <div className="ml-4 flex-shrink-0">
                   <button className="  pl-3 ml-auto  bg-gray-200">
                   Frontend : <a class='text-blue-500 hover:opacity-75' href='https://github.com/Arzoid29/quotesGenerador'>Git</a>
                   <br/>
                   Deploy : <a class='text-blue-500 hover:opacity-75 ' href='http://quotes-generador.vercel.app/'>Vercel</a>
                   </button>
                </div>
             </div>
             <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-200">
                <dt className="text-md font-medium text-gray-500">
                   Counter App(Dom Practice )
                </dt>
                <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:-span-2">
                     JS, HTML, CSS
                </dd>
                <div className="ml-4 flex-shrink-0">
                   <button className="  pl-3 ml-auto bg-gray-200">
                   Frontend : <a class='text-blue-500 hover:opacity-75' href='https://github.com/Arzoid29/CounterDom'>Git</a>
                   <br/>
                   Deploy : <a class='text-blue-500 hover:opacity-75 ' href='https://arzoid29.github.io/CounterDom/'> Pages</a>
                   </button>
                </div>
             </div>
             <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-200">
                <dt className="text-md font-medium text-gray-500">
                   Casino Game (Console Game)
                </dt>
                <dd className="mt-1 text-mdtext-gray-900 sm:mt-0 sm:-span-2">
                   Python 
                </dd>
                <div className="ml-4 flex-shrink-0">
                   <button className="  pl-3 ml-auto  bg-gray-200">
                   Repo : <a class='text-blue-500 hover:opacity-75' href='https://github.com/Arzoid29/Casino'>Git</a>
                   </button>
                </div>
             </div>
          </dl>
       </div>
       
    </div>
    </section>
  )
}

