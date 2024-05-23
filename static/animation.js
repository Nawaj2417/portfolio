const tl = gsap.timeline()
// nameanimate
// image
// h-shape

gsap.from(".nameanimate",{
y:-100,
opacity:0,
duration:1,

})

gsap.from(".main-title",{
opacity:0,
duration:.5,
scrollTrigger:{
    trigger:".main-title",
    scroll:"body",
    // markers:true,
    start:"top 60%",
}
})
gsap.from(".right-about",{
opacity:0,
duration:.5,
scrollTrigger:{
    trigger:".right-about",
    scroll:"body",
    // markers:true,
    start:"top 60%",
}
})
gsap.from(".left-about",{
opacity:0,
duration:.5,
stagger:2,
scrollTrigger:{
    trigger:".left-about",
    scroll:"body",
    // markers:true,
    start:"top 60%",
}
})
gsap.from(".stat-title",{
    y:-100,
opacity:0,
duration:.5,

scrollTrigger:{
    trigger:".stat-title",
    scroll:"body",
    // markers:true,
    start:"top 60%",
  
    
}
})


// GSAP animation

    gsap.from(".card", {
        y: -100,
        opacity: 0,
        duration: 0.5,
        stagger:1,
        scrollTrigger: {
            trigger: ".about-stats",
            scroll:"body",
            start: "top 0%",
         
            scrub: 1,
            pin: true,
            
            
          
        }
    });
    gsap.from(".education-wrap", {
        y: -100,
        opacity: 0,
        duration: 0.5,
        stagger:1,
        scrollTrigger: {
            trigger: ".education-wrap",
            scroll:"body",
            start: "top 10%",
         end:" top -120%",
            scrub: 1,
            
          
            
          
        }
    });
    gsap.from(".timeline", {
        height:0,
        y: -100,
        opacity: 0,
        duration: 0.3,
        
        scrollTrigger: {
            trigger: ".timeline",
            scroll:"body",
            start: "top 70%",
         
            scrub: 1,
            
          
            
          
        }
    });
    gsap.from(".container-box", {
        y: -100,
        opacity: 0,
        duration: 0.3,
        stagger:1,
        scrollTrigger: {
            trigger: ".container-box",
            scroll:"body",
            start: "top 60%",
         
            scrub: 1,
            
          
            
          
        }
    });



