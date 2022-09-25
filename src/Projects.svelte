
  <!-- Projects Section -->
  <div id="projects"
    class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <!-- Projects Transition -->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-y-16"
      onState="opacity-100 translate-x-0">
      <section class="w-full">
        <h2 id="projects"
          class="secondary-title md:text-left text-4xl font-bold mb-6 text-white" >
          Projects
        </h2>
        <p class="section-paragraph md:text-left text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          nulla nunc quis molestie volutpat elementum at. Ultrices ipsum, enim
          cursus lorem ac. Orci maecenas praesent arcu eget orci est orci
          nullam. Leo purus est pellentesque massa at tortor, est. Aliquet
          pulvinar a mattis sagittis. Suspendisse porta id elementum, massa.
        </p>

        <!-- projects -->
        <div class="space-y-12 my-16">
          <div class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap hover:scale-110 transition duration-300 ease-in-out" >
            <!-- Client logo -->
            <div class="mb-6 lg:mb-0">
              <svg
                width="80"
                height="96"
                viewBox="0 0 80 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z"
                  fill="white"/></svg>
            </div>

            <!-- Client info -->
            <div class="flex flex-wrap justify-center text-center lg:text-left lg:block" >
              <h3 class="text-white text-3xl font-semibold">Cerebreal</h3>

              <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8" >
                <div class="badge">Tauri</div>
                <div class="badge">Web-App</div>
                <div class="badge">FOSS</div>
              </div>

              <p class="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper nulla nunc quis molestie volutpat elementum at.
                Ultrices ipsum, enim cursus lorem ac. Orci maecenas praesent
                arcu eget orci est orci nullam. Leo purus est pellentesque massa
                at tortor, est. Aliquet pulvinar a mattis sagittis. Suspendisse
                porta id elementum, massa.
              </p>
              <a href="https://github.com/wylited/cerebreal"
                class="mt-10 text-gray-50 inline-flex items-center font-bold">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap hover:scale-110 transition duration-300 ease-in-out" >
            <!-- Client logo -->
            <div class="mb-6 lg:mb-0">
              <svg
                width="80"
                height="96"
                viewBox="0 0 80 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z"
                  fill="white"/>
                </svg>
            </div>
          </div>
      </section>
    </Transition>
  </div>
