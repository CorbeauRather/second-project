document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        gsap.to(".slide-1", { ease: "expo.out", x: "100%", duration: 1, delay: 0.45 });
        gsap.to(".slide-2", { ease: "expo.out", x: "100%", duration: 1, delay: 0.3 });
        gsap.to(".slide-3", { ease: "expo.out", x: "100%", duration: 1, delay: 0.15 });
        gsap.to(".slide-4", { ease: "expo.out", x: "100%", duration: 1, delay: 0 });
    }, 1000)
})