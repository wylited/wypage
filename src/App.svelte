<script>
  // @ts-nocheck
  import Transition from "svelte-class-transition";
  import Navbar from "./Navbar.svelte";
  import Hero from "./Hero.svelte";
  import Portfolio from "./Portfolio.svelte";
  import Projects from "./Projects.svelte";
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

  <!-- Hire Me Section -->
  <div id="contact"
    class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <!-- Hire Me Transition-->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 translate-x-16"
      onState="opacity-100 translate-x-0">
      <section class="w-full">
        <h2 id="contact"
          class="secondary-title md:text-left mb-6 font-bold text-4xl">
          Contact me
        </h2>
        <p class="section-paragraph md:text-left text-gray-500 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
          <div class="space-y-12">
            <div> 
              <!-- fabform.io -->
              <label class="text-white block mb-6 text-xl font-bold" for="">Name</label>
              <input
                type="text"
                class="text-black w-full border border-input-border bg-input px-4 py-4"
                name=""
                required/>
            </div>
            <div>
              <label class="text-white block mb-6 text-xl font-bold" for="">Email</label>
              <input
                type="email"
                class="text-black w-full border border-input-border bg-input px-4 py-4"
                name=""
                required
              />
            </div>
            <div>
              <label class="text-white block mb-6 text-xl font-bold" for="">
                Message
              </label>
              <input
                type="text"
                class="text-black w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
                name=""
                required/>
            </div>
            <button class="btn btn-primary px-6 py-2 bg-theme text-white font-bold">
              Send It!
            </button>
          </div>

          <div class="mt-12">
            <!-- Contact info -->
            <a href="mailto:wylited@gmail.com"
              class="md:text-left text-error underline mt-3 block uppercase">
              wylited@gmail.com
            </a>

            <!-- Socials -->
            <div class="flex mt-20 space-x-6">
              <!-- Facebook -->
              <a href="#">
                <svg
                  class="w-8 h-8 lg:w-12 lg:h-12"
                  viewBox="0 0 512 512"
                  width="42"
                  height="42"
                  fill="none">
                  <path
                    d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                    fill="white"/>
                </svg>
              </a>

              <!-- Twitter -->
              <a href="#">
                <svg
                  class="w-8 h-8 lg:w-12 lg:h-12"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM31.0922 15.8297C31.1062 16.05 31.1062 16.2797 31.1062 16.5047C31.1062 23.3859 25.8656 31.3125 16.2891 31.3125C13.3359 31.3125 10.5984 30.4547 8.29219 28.9781C8.71406 29.025 9.11719 29.0437 9.54844 29.0437C11.9859 29.0437 14.2266 28.2188 16.0125 26.8219C13.725 26.775 11.8031 25.275 11.1469 23.2125C11.9484 23.3297 12.6703 23.3297 13.4953 23.1188C12.3175 22.8795 11.2588 22.2398 10.4991 21.3084C9.73949 20.377 9.32572 19.2113 9.32812 18.0094V17.9437C10.0172 18.3328 10.8281 18.5719 11.6766 18.6047C10.9633 18.1293 10.3784 17.4854 9.97365 16.7298C9.5689 15.9743 9.35683 15.1306 9.35625 14.2734C9.35625 13.3031 9.60938 12.4172 10.0641 11.6484C11.3714 13.2578 13.0028 14.5741 14.8522 15.5117C16.7016 16.4493 18.7275 16.9873 20.7984 17.0906C20.0625 13.5516 22.7063 10.6875 25.8844 10.6875C27.3844 10.6875 28.7344 11.3156 29.6859 12.3281C30.8625 12.1078 31.9875 11.6672 32.9906 11.0766C32.6016 12.2812 31.7859 13.2984 30.7031 13.9406C31.7531 13.8281 32.7656 13.5375 33.7031 13.1297C32.9953 14.1703 32.1094 15.0938 31.0922 15.8297Z"
                    fill="white"
                  /></svg
                >
              </a>

              <!-- LinkedIn -->
              <a href="#">
                <svg
                  class="w-8 h-8 lg:w-12 lg:h-12"
                  viewBox="0 0 512 512"
                  width="42"
                  height="42"
                  fill="none"
                >
                  <path
                    d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  </div>
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
