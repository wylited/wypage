<script>
  // @ts-nocheck
  import Transition from "svelte-class-transition";
</script>

<Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-y-16"
      onState="opacity-100 translate-x-0">
  <div id="home" class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">

  <div class="grid justify-center items-center order-1 col-span-1">
    <img
      class="lg:h-80 md:h-64 h-40 rounded-full"
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
      alt=""/>
  </div>

  <div class="mt-8 md:mt-0 lg:justify-end col-span-2">

    <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6" >
      <span class="block xl:inline text-gray-50">Heyo, <span class="block text-indigo-600 xl:inline">Wylited</span> here.</span>
    </h1>

    <p class="text-xl text-gray-500 text-center font-medium md:text-left">
      Thats a psuedonym, you probably don't know me
    </p>

    <button class="block mt-8 mx-auto md:mx-0 text-2xl py-2 px-6 text-red-50 font-semibold rounded bg-indigo-500 hover:bg-indigo-800">
      <a href="#">Resume</a> 
    </button>

    </div>
  </div>
</Transition>