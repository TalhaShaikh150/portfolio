// Initialize particles.js
document.addEventListener("DOMContentLoaded", function () {
  // Loading screen
  setTimeout(() => {
    document.querySelector(".loading").classList.add("hidden");
  }, 2200);

  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Typewriter effect for "Frontend Developer"
  const typewriterText = document.getElementById("typewriter");
  const text = "Frontend Developer";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typewriterText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  // Start typing after loading screen
  setTimeout(typeWriter, 1600);

  // Mobile navigation toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.innerHTML = navLinks.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navContainer = document.querySelector(".nav-container");
    if (window.scrollY > 50) {
      navContainer.classList.add("scrolled");
    } else {
      navContainer.classList.remove("scrolled");
    }
  });

  // Project data
  const clientProjects = [
    {
      id: 1,
      image: "assets/lens.png",
      link: "https://lenscraftstudio.com/",
      name: "Lens Craft Studio",
      description:
        "Built a portfolio website for a U.S.-based photographer, featuring his work and a contact form that sends messages directly to his email.",
      tech: ["HTML", "CSS", "JavaScript", "FormSpree"],
    },
    {
      id: 2,
      image: "assets/sht.png",
      link: "https://shtinternational.com/",
      name: "Sht International",
      description:
        "Built a website for a supplement brand with a clean and responsive design, showcasing products clearly and optimized for user engagement and conversions",
      tech: ["Wordpress"],
    },
  ];

  const projects = [
    {
      id: 1,
      image: "assets/code-studio.png",
      link: "https://talhashaikh150.github.io/Code-Editor/",
      name: "Code Studio Editor",
      description:
        "A web-based editor with HTML, CSS, and JS panels, live JS execution, fullscreen and built-in boilerplate setup.",
      github: "https://github.com/TalhaShaikh150/Code-Editor",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      image: "assets/instagram.png",
      link: "https://talhashaikh150.github.io/Instagram-Clone/",
      name: "Instagram Clone",
      description:
        "Built with HTML, CSS, JS, and Supabase. Users can upload profile images, create posts, and view a shared feed with the latest updates.",
      github: "https://github.com/TalhaShaikh150/Instagram-Clone",
      tech: ["HTML", "CSS", "JavaScript", "Supabase"],
    },
    {
      id: 3,
      image: "assets/notes.png",
      link: "https://talhashaikh150.github.io/Notes-App/",
      name: "Notes App",
      description:
        "Notes website with category filtering, search, edit, and theme switcher. Built with HTML, CSS, JS, and local storage support.",
      github: "https://github.com/TalhaShaikh150/Notes-App",
      tech: ["HTML", "CSS", "JavaScript"],
    },

    {
      id: 4,
      image: "assets/css-tools.png",
      link: "https://talhashaikh150.github.io/Css-Tools/",
      name: "Css Tools",
      description:
        "A live CSS tool to customize box shadows with real-time preview and copyable code. Built with HTML, CSS, and JavaScript.",
      github: "hhttps://github.com/TalhaShaikh150/Css-Tools",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 5,
      image: "assets/e-commerce.png",
      link: "https://talhashaikh150.github.io/E-Commerce/",
      name: "LuxuryFits UI",
      description:
        "A stylish watch store UI with add-to-cart feature. Focused on clean design and smooth user experience.",
      github: "https://github.com/TalhaShaikh150/E-Commerce",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 6,
      image: "assets/agent-chain.png",
      link: "https://agent-chain-builder.vercel.app/",
      name: "Agent Chain UI",
      description:
        "Built with Next.js and Tailwind CSS. A responsive, user-friendly interface for managing AI agent workflows.",
      github: "https://github.com/TalhaShaikh150/agent-chain-builder",
      tech: ["Next.js", "Tailwind Css"],
    },
  ];

  // Render projects
  const container = document.getElementById("projects-container");
  const clientContainer = document.getElementById("client-projects-container");

  clientProjects.forEach((project) => {
    const clientProjectEl = document.createElement("div");

    clientProjectEl.className = "project-card";

    clientProjectEl.innerHTML = `<div class="project-image">
          <img src="${project.image}" alt="${project.name}" loading="lazy">
          <div class="project-overlay">
            <div class="project-links">
              <a href="${project.link}" class="project-link" target="_blank" data-tooltip="Live Demo">
                <i class="fas fa-external-link-alt"></i>
              </a>

            </div>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.name}</h3>
          <p class="project-description">${project.description}</p>
        
          <a href="${project.link}" class="github-button" target="_blank">
                <i class="fas fa-external-link-alt"></i>
            View Project
          </a>
        </div>`;

    clientContainer.appendChild(clientProjectEl);
  });

  projects.forEach((project) => {
    const projectEl = document.createElement("div");
    projectEl.className = "project-card";
    projectEl.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.name}" loading="lazy">
          <div class="project-overlay">
            <div class="project-links">
              <a href="${
                project.link
              }" class="project-link" target="_blank" data-tooltip="Live Demo">
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a href="${
                project.github
              }" class="project-link" target="_blank" data-tooltip="View Code">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.name}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.tech
              .map((tech) => `<span class="tech-badge">${tech}</span>`)
              .join("")}
          </div>
          <a href="${project.link}" class="github-button" target="_blank">
             <i class="fas fa-external-link-alt"></i> View Project
          </a>
        </div>
      `;

    container.appendChild(projectEl);
  });

  // Form submission

  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  });

  // Back to top button behavior
  const backToTop = document.querySelector(".back-to-top");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTop.style.opacity = "1";
      backToTop.style.visibility = "visible";
    } else {
      backToTop.style.opacity = "0";
      backToTop.style.visibility = "hidden";
    }
  });

  // Initialize particles.js
  particlesJS("particles-js", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#8A2BE2" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 4, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#8A2BE2",
        opacity: 0.4,
        width: 1,
        shadow: {
          enable: true,
          color: "#8A2BE2",
          blur: 5,
        },
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        attract: { enable: true, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });

  // Initialize Three.js scene for 3D scroll effect
  function initThreeJS() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.getElementById("threejs-scene").appendChild(renderer.domElement);

    // Add some floating objects
    const geometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
    const material = new THREE.MeshBasicMaterial({
      color: 0x8a2be2,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    camera.position.z = 5;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.005;
      torus.rotation.y += 0.005;

      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  // Initialize GSAP scroll animations
  function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    document.querySelectorAll(".scroll-section").forEach((section, i) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: i * 0.1,
      });
    });

    // Animate project cards
    gsap.utils.toArray(".project-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
      });
    });

    // Animate skills cards
    gsap.utils.toArray(".skill-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.05,
      });
    });
  }

  // Initialize all animations after loading
  setTimeout(() => {
    initThreeJS();
    initScrollAnimations();
    initThreeJS();
  }, 2000);
});
