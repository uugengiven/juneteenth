const Infographic: React.FC = () => {
  return (
    <div className="flex flex-col space-y-8">
      {/* Top section */}
      <div className="flex flex-wrap justify-between bg-blue-100 rounded-lg p-1 md:p-6">
        <div className="w-full md:w-1/2 p-1 md:p-4 rounded-lg">
          <h2 className="text-3xl font-bold mb-2 px-4">
            Homecoming Celebration 2023
          </h2>
          <h2 className="text-4xl font-bold bg-orange-500 text-white p-4 rounded-bl-2xl rounded-tr-2xl">
            Event Dates: June 14-16
          </h2>
        </div>
        <div className="w-full md:w-1/2 p-4 text-center">
          <span className="text-5xl font-bold text-green-500">
            $3.49 Million
          </span>
          <p className="text-xl">
            in direct resident and visitor spending for Allegheny County
          </p>
        </div>
      </div>

      {/* Second section */}
      <div className="bg-green-100 rounded-lg p-6">
        <h3 className="text-4xl font-bold mb-4">
          Estimated total attendance: 48.8K
        </h3>
        <ul className="text-xl list-disc pl-8">
          <li>21% of attendees were from out of town</li>
          <li>79% of attendees were local</li>
        </ul>
      </div>

      {/* Third section */}
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 p-4 bg-yellow-100 rounded-l-lg text-center">
          <h3 className="text-4xl font-bold mb-4 text-blue-700">
            Major Spend by Category
          </h3>
          <ul className="flex flex-wrap justify-center">
            <li className="flex flex-col items-center mb-4 w-full md:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="relative max-w-28"
              >
                <path d="M249.3 0c-26 0-48.6 17.9-54.5 43.2l-20 84.8H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H333.4c14-8.2 30.1-15.4 48.6-20.9c1.3-3.5 2-7.2 2-11.1c0-17.7-14.3-32-32-32H224.2l17.4-73.8c.9-3.6 4.1-6.2 7.8-6.2H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H249.3zM40 224L60.3 468c2.1 24.9 22.9 44 47.8 44H272c-10-13.4-16-30-16-48c0-14.7 6.6-27.8 17-36.6c-10.5-11.4-17-26.6-17-43.4c0-18.5 7.8-35.1 20.3-46.8c-12.4-10.9-20.3-26.9-20.3-44.8c0-6.3 1-13.8 4.4-21.5c4.2-9.5 13.8-27.8 32.2-47H40zm600 68.3c0-3-.5-5.9-1.7-8.6c-8.1-18.4-48.4-91.9-174.3-91.9s-166.2 73.5-174.3 91.9c-1.2 2.7-1.7 5.7-1.7 8.6c0 15.2 12.3 27.5 27.5 27.5H612.5c15.2 0 27.5-12.3 27.5-27.5zM384 239.8a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm64 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm96 0a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm-224 112c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm-16 96c-8.8 0-16 7.2-16 16c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48c0-8.8-7.2-16-16-16H304z" />
              </svg>
              <span className="text-3xl text-center">$669K</span>
            </li>
            <li className="flex flex-col items-center mb-4 w-full md:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="relative max-w-28"
              >
                <path d="M171.3 96H224v96H111.3l30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192V96h81.2c9.7 0 18.9 4.4 25 12l67.2 84H272zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36H171.3c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256V368c0 17.7 14.3 32 32 32H65.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H385.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H608c17.7 0 32-14.3 32-32V320c0-65.2-48.8-119-111.8-127zM434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1 -90.5-32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              <span className="text-3xl text-center">$290K</span>
            </li>
            <li className="flex flex-col items-center mb-4 w-full md:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="relative max-w-28"
              >
                <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
              </svg>
              <span className="text-3xl text-center">$1.66M</span>
            </li>
            <li className="flex flex-col items-center mb-4 w-full md:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="relative max-w-28"
              >
                <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
              </svg>
              <span className="text-3xl text-center">$406K</span>
            </li>
            <li className="flex flex-col items-center mb-4 w-full md:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="relative max-w-28"
              >
                <path d="M400 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm27.2 64l-61.8-48.8c-17.3-13.6-41.7-13.8-59.1-.3l-83.1 64.2c-30.7 23.8-28.5 70.8 4.3 91.6L288 305.1V416c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-10.7-5.3-20.7-14.2-26.6L295 232.9l60.3-48.5L396 217c5.7 4.5 12.7 7 20 7h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H427.2zM56 384a72 72 0 1 1 144 0A72 72 0 1 1 56 384zm200 0A128 128 0 1 0 0 384a128 128 0 1 0 256 0zm184 0a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zm200 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
              </svg>
              <span className="text-3xl text-center">$174K</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-4 bg-purple-100 rounded-e-lg">
          <h3 className="text-3xl font-bold mb-4 text-center">
            Out of Town Visitors
          </h3>
          <div className="flex flex-wrap md:flex-nowrap justify-between mb-4">
            <div className="bg-white rounded-lg p-4 w-full mr-0 md:mr-4 mb-4 md:mb-0 md:w-1/2 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-14 h-16 absolute top-0 left-0 -mt-3 -ml-3 bg-white rounded-lg border-white border-4"
              >
                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
              </svg>
              <div className="ml-10">
                <p className="text-xl font-bold">2.3 days</p>
                <p className="text-lg">Average time spent in county</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 w-full md:w-1/2 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-16 h-16 absolute top-0 right-0 -mt-3 -mr-3 bg-white rounded-full border-white border-4"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              <div className="mr-8">
                <p className="text-xl font-bold">1.5 Hours</p>
                <p className="text-lg">Average time at event</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">
              Top Visitor Origin Markets
            </h4>
            <ol className="text-sm sm:text-lg list-decimal pl-4">
              <li>Youngstown</li>
              <li>Wheeling/Stuebenville</li>
              <li>Philadelphia</li>
              <li>Washington, D.C.</li>
              <li>Dayton</li>
              <li>Detroit</li>
              <li>Houston</li>
              <li>Orlando/Daytona Beach/Belborne</li>
              <li>Milwaukee</li>
              <li>Boston</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infographic;
