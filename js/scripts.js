// Smooth Animations and Cursor Effects with GSAP

document.addEventListener("DOMContentLoaded", () => {
    // GSAP: Smooth animations on page load
    gsap.from("header, h1, h2, h3, p, .btn", {
        duration: 1.2,
        opacity: 0,
        y: 50,
        ease: "power2.out",
        stagger: 0.2,
    });

    // Cursor Effect with GSAP
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-dot");
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement("div");
    cursorFollower.classList.add("cursor-follower");
    document.body.appendChild(cursorFollower);

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2 });
        gsap.to(cursorFollower, { x: e.clientX - 15, y: e.clientY - 15, duration: 0.5 });
    });

    // Scroll Animations
    gsap.utils.toArray(".animate-on-scroll").forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power1.out",
        });
    });

    // Additional Animations

    // Hover Animation for Buttons
    document.querySelectorAll(".btn").forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, { scale: 1.1, duration: 0.3, ease: "power1.out" });
        });
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { scale: 1, duration: 0.3, ease: "power1.out" });
        });
    });

    // Animation for Image Zoom on Scroll
    gsap.utils.toArray("img.zoom-on-scroll").forEach((img) => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 90%",
                end: "top 50%",
                scrub: true,
            },
            scale: 0.8,
            opacity: 0.5,
            duration: 1.5,
            ease: "power1.inOut",
        });
    });

    // Section Background Fade Animation
    gsap.utils.toArray(".fade-background").forEach((section) => {
        gsap.fromTo(section, 
            { backgroundColor: "#ffffff" }, 
            {
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                    end: "bottom 20%",
                    scrub: true,
                },
                backgroundColor: "#f0f0f0",
                duration: 1.5,
            });
    });

    // New Animations

    // Text Reveal Animation
    document.querySelectorAll(".reveal-text").forEach((text) => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "back.out(1.7)",
        });
    });

    // Rotating Icons Animation
    document.querySelectorAll(".rotate-icon").forEach((icon) => {
        gsap.to(icon, {
            scrollTrigger: {
                trigger: icon,
                start: "top 90%",
                toggleActions: "play none none none",
            },
            rotation: 360,
            duration: 2,
            ease: "power1.inOut",
        });
    });

    // Floating Animation
    document.querySelectorAll(".floating").forEach((item) => {
        gsap.to(item, {
            y: 20,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "power1.inOut",
        });
    });

    // Fade-In Animation on Delay
    setTimeout(() => {
        gsap.to(".delayed-fade-in", { opacity: 1, duration: 1.5, ease: "power1.out" });
    }, 1000);
});

// CSS (ensure GSAP and ScrollTrigger are included in the project)
