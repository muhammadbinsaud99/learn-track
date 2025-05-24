function Timetable() {
  return (
    <>
     
<div class="bg-gray-100 min-h-screen flex flex-col items-center p-4 md:p-10 bg-[url('time-9603965_1280.webp')] bg-no-repeat bg-cover bg-center h-150">
  <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">Timetable</h1>
  <div class="overflow-x-auto w-full max-w-4xl h-[500px] shadow-2xl rounded-2xl bg-white p-6">
    <div class="grid grid-cols-8 gap-4 min-w-[850px] text-center">
      <div class="font-bold text-lg text-gray-700"></div>
      <div class="font-bold text-lg text-gray-700">Mon</div>
      <div class="font-bold text-lg text-gray-700">Tue</div>
      <div class="font-bold text-lg text-gray-700">Wed</div>
      <div class="font-bold text-lg text-gray-700">Thu</div>
      <div class="font-bold text-lg text-gray-700">Fri</div>
      <div class="font-bold text-lg text-gray-700">Sat</div>
      <div class="font-bold text-lg text-gray-700">Sun</div>
      <div class="font-bold text-lg text-black">9 AM</div>
      <div class="bg-purple-200 text-purple-900 px-4 py-2 font-bold rounded-xl hover:bg-yellow-500 transition duration-300 shadow-lg">Pf</div>
      <div>
        <div class="bg-blue-200 text-blue-900 px-4 py-2 font-bold rounded-xl hover:bg-yellow-500 transition duration-300 shadow-lg">
          AICT
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div class="font-bold text-lg text-black">10 AM</div>
      <div class="bg-green-200 text-green-900 px-4 py-2 font-bold rounded-xl hover:bg-yellow-500 transition duration-300 shadow-lg"> AI</div>
      <div></div>
      <div>
        <div class="bg-green-200 text-green-900 px-4 py-2 font-bold rounded-xl hover:bg-yellow-500 transition duration-300 shadow-lg">
          Calcuclus
        </div>
      </div>
      <div></div>
      <div></div>
      <div class="bg-purple-200 text-purple-900 px-4 py-2 font-bold rounded-xl hover:bg-yellow-500 transition duration-300 shadow-lg">Descrete Maths</div>
      <div></div>
      <div class="font-bold text-lg text-black">11 AM</div>
      <div class="bg-purple-200 text-purple-900 px-4 py-2 font-bold rounded-xl hover:bg-yellow-500 transition duration-300 shadow-lg">Computer Science</div>
      <div>
        <div class="bg-purple-200 text-purple-900 px-4 py-2 font-bold rounded-xl hover:bg-yellow-500 transition duration-300 shadow-lg">
          Applied Physics
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
  </div>
  <div class="mt-8 w-full max-w-4xl border-t pt-4 flex justify-around font-semibold text-lg">
    <button class="text-blue-600">Timetable</button>
    <button class="text-white hover:text-yellow-500 transition">Schedule</button>
    <button class="text-white hover:text-yellow-500 transition">Tasks</button>
  </div>
</div>
    </>
  )
}
export default Timetable
