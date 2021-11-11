
import React from 'react'

export default function Footer() {
    return (
        <><footer className="flex justify-center px-4 text-gray-100 bg-gray-800 mt-60">
        <div className="container py-6">
            <h1 className="text-center text-lg font-bold lg:text-2xl">
                Thanks for read, if you need something here is my git and twitter
            </h1>

            <div className="flex justify-center mt-6">
                <div className="bg-white rounded-lg">
                </div>
            </div>

            <hr className="h-px mt-6 bg-gray-700 border-none"></hr>

            <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
                <div>
                    <p className="text-xl font-bold hover:bg-indigo-50 rounded-lg hover:text-blue-600">Arzoid</p>
                </div>
                <div className="flex mt-4 md:m-0">
                    <div className="-mx-4">
                      <a href="/#Home" className="px-4 text-sm hover:text-blue-600 hover:bg-indigo-50 rounded-full ">Home</a>
                      <a href="/resume" className="px-4 text-sm hover:text-blue-600 hover:bg-indigo-50 rounded-full ">Resume</a>
                      <a href="/education" className="px-4 text-sm hover:text-blue-600 hover:bg-indigo-50 rounded-full ">Education</a>
                      <a href="https://github.com/Arzoid29" className=" hover:text-blue-600 px-4 text-sm hover:bg-indigo-50 rounded-full">Git</a>
                      <a href="https://twitter.com/Arzoidss" className=" hover:text-blue-600 hover:bg-indigo-50 rounded-full px-4 text-sm">Twitter</a>
                  	</div>
                </div>
            </div>
        </div>
    </footer></>
    )
}
