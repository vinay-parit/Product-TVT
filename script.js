gsap.from( ".todo-box",{
    y: 80, 
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger:{
        trigger: ".todo-box",
        start: "top 80%",
        // ToggleActions: "play play play play",
    },
});

gsap.from(".daily-planner-box", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".daily-planner-box",
    start: "top 80%",
    // ToggleActions: "play play play play",
  },
});

gsap.from(".motivation-box", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".motivation-box",
    start: "top 80%",
    // ToggleActions: "play play play play",
  },
});

gsap.from(".pomodoro-box", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".pomodoro-box",
    start: "top 80%",
    // ToggleActions: "play play play play",
  },
});

// gsap.from(".footer", {
//   x: -70,
//   opacity: 0,
//   duration: 1,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".footer",
//     start: "top 80%",
//     // ToggleActions: "play play play play",
//   },
// });