// Overlay animation
window.addEventListener("load", () => {
    setTimeout(() => {
      gsap.to("#overlay", {
        y: "-100%",
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => document.getElementById("overlay").style.display = "none"
      });
  
      // Reveal sections one after another
      gsap.utils.toArray(".section").forEach((sec, index) => {
        gsap.to(sec, {
          delay: index * 0.5,
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power2.out"
        });
      });
    }, 1000);
  });
  
  // Skill bar animation on click
  document.querySelector('a[href="#skills"]').addEventListener("click", () => {
    document.querySelectorAll(".progress-bar").forEach(bar => {
      const percent = bar.getAttribute("data-percent");
      const progress = bar.querySelector(".progress");
      progress.style.width = percent;
    });
  });
  
  // Typing animation
  const phrases = ["Sakshi Kapil Badave", "Web Developer", "Tech Enthusiast"];
  let i = 0, j = 0, current = [], isDeleting = false;
  
  function loopTyping() {
    const display = document.getElementById("typed-name");
    display.textContent = current.join("");
  
    if (!isDeleting && j <= phrases[i].length) {
      current.push(phrases[i][j]);
      j++;
    } else if (isDeleting && j > 0) {
      current.pop();
      j--;
    }
  
    if (j === phrases[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  
    setTimeout(loopTyping, isDeleting ? 60 : 150);
  }
  loopTyping();
  
  // Dark mode toggle
  document.getElementById("toggle-dark-mode").addEventListener("click", () => {
    const body = document.body;
    const dark = body.classList.contains("dark");
  
    gsap.to(body, {
      backgroundColor: dark ? "#ffffff" : "#121212",
      color: dark ? "#333" : "#f5f5f5",
      duration: 0.5,
      onComplete: () => body.classList.toggle("dark")
    });
  });
  