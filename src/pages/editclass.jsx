
function Editclass() {
  return (
    <div>
        <div>
    <h1 class="text-3xl font-extrabold text-gray-800 align-middle text-center mb-6">Edit Class</h1>

    <form class="space-y-5">
    
      <div>
        <label for="subject" class="block text-lg font-semibold text-gray-700 mb-1">Subject</label>
        <select id="subject" class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-500 font-medium">
          <option>Caculus</option>
          <option>PF</option>
          <option>AICT</option>
          <option>AP</option>
        </select>
      </div>

      
      <div>
        <label for="day" class="block text-lg font-semibold text-gray-700 mb-1">Day</label>
        <select id="day" class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-500 font-medium">
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
        </select>
      </div>

      
      <div>
        <label for="start-time" class="block text-lg font-semibold text-gray-700 mb-1">Start Time</label>
        <input type="time" id="start-time" class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-500 font-medium" />
      </div>

      
      <div>
        <label for="end-time" class="block text-lg font-semibold text-gray-700 mb-1">End Time</label>
        <input type="time" id="end-time" class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-500 font-medium" />
      </div>

      
      <div>
        <label for="teacher" class="block text-lg font-semibold text-gray-700 mb-1">Teacher</label>
        <input type="text" id="teacher" placeholder="Enter teacher's name" class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-500 font-medium" />
      </div>

    
      <div>
        <label for="room" class="block text-lg font-semibold text-gray-700 mb-1 ">Room</label>
        <input type="text" id="room" placeholder="Enter room number" class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-500 font-medium" />
      </div>

    
      <div class="pt-4">
        <button type="submit" class="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-xl shadow-lg transition duration-300">
          Save
        </button>
      </div>
    </form>
  </div>
    </div>
  )
}
export default Editclass
