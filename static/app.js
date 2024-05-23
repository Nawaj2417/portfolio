(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            // document.querySelector(".active").classList.remove("active");
            // document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    // document.querySelector(".theme-btn").addEventListener("click", () => {
    //     document.body.classList.toggle("light-mode");
    // })
})();



// Add event listener for scrolling
(function(){
    document.addEventListener('scroll', function() {
        // Get the current scroll position
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log("position",scrollPosition)
        // Get all the sections
        let sections = document.querySelectorAll('.section-part');
    // console.log(sections)
        // Loop through sections to find which one is in view
        sections.forEach(function(section) {
            let sectionTop = (section.offsetTop) - 100;
            let sectionHeight = section.clientHeight;
            // console.log(sectionTop, sectionHeight)
            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight) ) {
                // Remove any existing active class from the navigation
                document.querySelectorAll('.control').forEach(function(link) {
                    link.classList.remove('active-btn');
                });
                // Add active class to the navigation link corresponding to the section in view
                let correspondingLink = document.querySelector(`[data-id="${section.id}"]`);
    
                if (correspondingLink) {
                    correspondingLink.classList.add('active-btn');
                    // console.log(correspondingLink)
                }
            }
        });
    });
})();

 