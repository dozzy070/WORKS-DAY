
 const professions = [
      { title: "Business", desc: "Driving economic growth and innovation.", icon: "fa-briefcase", color: "#1E88E5" },
      { title: "Healthcare", desc: "Caring for our health and wellbeing.", icon: "fa-heartbeat", color: "#43A047" },
      { title: "Manufacturing", desc: "Building the products we use daily.", icon: "fa-industry", color: "#E53935" },
      { title: "Technology", desc: "Advancing our digital capabilities.", icon: "fa-microchip", color: "#8E24AA" },
      { title: "Education", desc: "Shaping future generations.", icon: "fa-graduation-cap", color: "#FB8C00" },
      { title: "Agriculture", desc: "Providing food for our tables.", icon: "fa-tractor", color: "#388E3C" },
      { title: "Hospitality", desc: "Creating memorable experiences.", icon: "fa-concierge-bell", color: "#F4511E" },
      { title: "Transportation", desc: "Keeping the world connected.", icon: "fa-bus", color: "#1E88E5" },
      { title: "Construction", desc: "Building infrastructure for all.", icon: "fa-hard-hat", color: "#F57C00" },
      { title: "Arts & Design", desc: "Adding beauty to our world.", icon: "fa-palette", color: "#D81B60" },
      { title: "Entertainment", desc: "Enriching our cultural experiences.", icon: "fa-music", color: "#3949AB" },
      { title: "Retail", desc: "Providing essentials and luxuries.", icon: "fa-shopping-bag", color: "#00897B" }
    ];

    const grt = document.getElementById("professions");

    professions.forEach(prof => {
      const div = document.createElement("div");
      div.className = "col-12 col-sm-6 col-lg-3";

      div.innerHTML = `
        <div class="prof p-4 text-center">
          <div class="icon-circle" style="background:${prof.color}">
            <i class="fas ${prof.icon}"></i>
          </div>
          <h5 class="fw-bold">${prof.title}</h5>
          <p class="text-muted mb-0">${prof.desc}</p>
        </div>
      `;

      grt.appendChild(div);
    });


    const events = [
      {
        stars: 5,
        text: "Worker's Day is a reminder of our collective strength. When we celebrate each other’s contributions, we build a more united workforce.",
        name: "Diana Rodriguez",
        role: "Healthcare Worker",
        img: "./IMAGE/wface1.jpg"
      },
      {
        stars: 5,
        text: "I’m proud to be part of a global community of workers who shape our world. This celebration brings visibility to all professions.",
        name: "Michael Okonkwo",
        role: "Construction Engineer",
        img: "./IMAGE/mface1.jpg"
      },
      {
        stars: 5,
        text: "As a teacher, I feel honored when my contribution to society is recognized. Worker’s Day reminds us that every job matters.",
        name: "Alexej Ataluk",
        role: "Educator",
        img: "./IMAGE/wface2.png"
      }
    ];

    const row = document.getElementById("events");

    // Generate cards dynamically
    events.forEach(event => {
      const div = document.createElement("div");
      div.className = "col-md-4";

      div.innerHTML = `
        <div class="testimonial-card">
          <div class="stars">${"★".repeat(event.stars)}</div>
          <p class="testimonial-text">"${event.text}"</p>
          <div class="d-flex align-items-center">
            <img src="${event.img}" class="profile-img" alt="${event.name}">
            <div>
              <h6 class="mb-0 fw-bold">${event.name}</h6>
              <small class="text-muted">${event.role}</small>
            </div>
          </div>
        </div>
      `;

      row.appendChild(div);
    });


