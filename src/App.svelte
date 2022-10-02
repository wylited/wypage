<script>
  // @ts-nocheck
  import Transition from "svelte-class-transition";
  import Navbar from "./Navbar.svelte";
  import Hero from "./Hero.svelte";
  import Portfolio from "./Portfolio.svelte";
  import Projects from "./Projects.svelte";
  import Contact from "./Contact.svelte";
</script>

<main class="bg-slate-800 text-white font-Montserrat pb-12 scroll-behavior: smooth;" >

  <!-- Header Section -->
  <header class="py-6">

    <!-- Nav Transition -->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-x-16"
      onState="opacity-100 translate-x-0">

      <Navbar />
    </Transition>

    <!-- Hero  -->
    <Hero/>

  </header>

  <!-- About Section -->
  <section class="bg-gray-800 pattern py-20" id="about">
    <!-- About Transition -->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 translate-x-16"
      onState="opacity-100 translate-x-0" >
      <div class="max-w-5xl px-6 mx-auto text-center">
        <h2 class="text-2xl font-semibold text-white">About Me</h2>
        <p class="text-gray-500 mt-4">
          I'm a 15 year old developer from Hong Kong, currently learning full stack development as well as low level graphics programming. 
        </p>
      </div>
    </Transition>
  </section>

  <Portfolio/>

  <Projects/>

  <Contact/>

  <!-- Footer Section -->
  <section class="w-full">
    <!-- Footer Transition-->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-y-16"
      onState="opacity-100 translate-x-0"
    >
      <footer>
        <div class="copyright md:text-center text-gray-500">
          <a href="#home">© Copyright 2022 Wylited</a>
        </div>
      </footer>
    </Transition>
  </section>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  .img-overlay:after {
    content: "";
    z-index: -10;
    transition: all 0.3s ease;
  }
  .img__title {
    top: -200px;
  }
  .img__link {
    top: 200px;
  }
  .img-wrapper:hover .img__title {
    top: 0;
  }
  .img-wrapper:hover .img__link {
    top: 0;
  }
  .img-wrapper:hover .img-overlay:after {
    opacity: 0.75;
  }
  @media only screen and (min-width: 305px) {
    .img-wrapper:hover .img__title {
      margin-top: auto;
    }
  }
</style>
