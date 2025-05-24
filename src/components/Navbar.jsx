
export default function navbar() {
  return ( <nav class="text-gray-600 body-font bg-[#d2e8e580]">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl italic">LEARN TRACK</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center hover:translate-x-5px-transtion-transform italic">
      <a href="/" class="mr-5 hover:text-yellow-500 hover:underline">HOME</a>
      <a href="timetable" class="mr-5 hover:text-yellow-500 hover:underline">TIMETABLE</a>
      <a href="subject" class="mr-5 hover:text-yellow-500 hover:underline">SUBJECTS</a>
      <a href="editclass" class="mr-5 hover:text-yellow-500 hover:underline">EDIT CLASS </a>
    </nav>
  </div>
</nav>
  )
}


