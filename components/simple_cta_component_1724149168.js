/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1724149168", {
    template: `
    <section id="cta-component" style="min-height: 510px" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto lg:py-16 lg:px-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white">Revolutionize Your Cricket Experience</h2>
                </div>
                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-100 md:text-lg">Join thousands of cricket enthusiasts who are enhancing their game with our innovative app</p>
                </div>
                <div id="cta-button-container" class="flex space-x-4">
                    <a id="cta-button" href="#" class="flex-1 text-purple-700 bg-white bg-opacity-80 hover:bg-opacity-100 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105" data-mf-new="true">Get Cricket Ready for the Projects</a>
                    <a href="#" data-mf-new="true" class="flex-1 text-green-700 bg-white bg-opacity-80 hover:bg-opacity-100 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">Greatness</a>
                </div>
            </div>
        </div>
    </section>
    `,
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
