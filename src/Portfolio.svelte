<script>
    // @ts-nocheck
    import Transition from "svelte-class-transition";
  </script>


<!-- Portfolio Section  -->
<div id="portfolio"
class="container mt-40 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full" >
    <!-- Portfolio Transition -->
    <Transition
    transitions="transition transform"
    inTransition="ease-out duration-1000"
    inState="opacity-0 -translate-x-16"
    onState="opacity-100 translate-x-0">
    <section class="w-full text-center">
        <h2 id="experience"
        class="secondary-title md:text-left text-4xl font-bold mb-6" >
        Portfolio
        </h2>
        <p class="section-paragraph md:text-left text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
        nulla nunc quis molestie volutpat elementum at. Ultrices ipsum, enim
        cursus lorem ac. Orci maecenas praesent arcu eget orci est orci
        nullam. Leo purus est pellentesque massa at tortor, est. Aliquet
        pulvinar a mattis sagittis. Suspendisse porta id elementum, massa.
        </p>
    </section>
    </Transition>
</div>