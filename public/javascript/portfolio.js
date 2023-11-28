const projects = [
  {
    title: "Campfire Chronicles",
    imageSrc: "/Portfolio/public/imgs/campfireChronicles.png",
    description: `Campsite reviews an exploration fullstack app, seamlessly integrating MongoDB, JavaScript, Node.js, Express and
      more. With features like creating accounts, user authentication, location mapping, and sharing campsite experiences with images, price,
      and reviews, It's powered by a robust tech stack.  <h6 class="fw-semibold text-decoration-underline">
      This app is deployed on Render free tier. So please give the
      service time to spin up for the demo.
    </h6>`,
    demoLink: "https://campfirechronicles.onrender.com/",
    repoLink: "https://github.com/Hthrace/CampfireChronicles",
  },
  {
    title: "Lorville Clothing",
    imageSrc: "/Portfolio/public/imgs/lorvilleClothing.png",
    description: `Lorville Clothing: React-based e-commerce application, implementing Redux for advanced state management and harnessing the
      capabilities of Google Firebase for seamless user account management, authentication, and real-time shopping cart functionality. This
      application enables users to effortlessly create accounts, log in/out, browse clothing selections, and add items to their cart with ease.`,
    demoLink: "https://keen-maamoul-18376d.netlify.app/",
    repoLink: "https://github.com/Hthrace/LorvilleClothing",
  },
  {
    title: "What Im Woking On",
    imageSrc: "/Portfolio/public/imgs/citizenSyndicate.jpg",
    description: `Project Citizen Syndicate addresses a crucial issue in Star Citizen— the lack of in-game tools to easily locate items. Due to the active development of Star Citizen by Cloud Imperium Games (CIG), current game files no longer contain essential information about item locations, prices, and stats. This absence creates a challenge for players who struggle to find items within the vast Star Citizen universe. This project aims to create a solution to this.`,
    repoLink: "https://github.com/Hthrace/CitizenSyndicate",
  },
  {
    title: "Monsters Rolodex",
    imageSrc: "/Portfolio/public/imgs/monstersRolodex.png",
    description: ` Monsters Rolodex is a React.js portfolio project that
     demonstrates React.js and state management techniques. It
     retrieves data from the JSONPlaceholder API and allows you to
     filter the monsters by typing in a search box. This project
     showcases React.js skills, particularly in state management.`,
    demoLink: "https://hthrace.github.io/MonstersRolodex/",
    repoLink: "https://github.com/Hthrace/MonstersRolodex",
  },
  {
    title: "Muscle Mania Gym",
    imageSrc: "/Portfolio/public/imgs/muscleManiaGym.png",
    description: `  Muscle Mania Gym is a responsive website created as a portfolio
     app to showcase my skills in JavaScript, HTML, CSS, and
     Bootstrap version 3. This project aims to demonstrate my
     proficiency in web development and highlight my UI design
     capabilities.`,
    demoLink: "https://hthrace.github.io/MuscleManiaGym/",
    repoLink: "https://github.com/Hthrace/MuscleManiaGym",
  },
];
function createProjectCards() {
  const projectCardsContainer = document.querySelector("#rowContain");

  projects.forEach((project) => {
    const card = document.createElement("div");

    card.innerHTML = `
        <div class="col">
        <div class="shadow-lg rounded px-3 py-3">
          <img src="${project.imageSrc}" class="card-img-top rounded" alt="${project.title}">
          <div class="card-body text-light ">
            <h4 class="card-title pb-2 pt-2">${project.title}</h4>
            <p class="card-text text-start">${project.description}</p>
            <a href="${project.repoLink}" class="btn btn-primary" target="_blank">GitHub Repo <i class="bi bi-github"></i
            ></a>
            ${project.demoLink ? `<a href="${project.demoLink}" class="btn btn-primary" target="_blank">Live Demo <i class="bi bi-folder"></i></a>` : ''}
          </div>
        </div>
        </div>
      `;

    projectCardsContainer.appendChild(card);
  });
}


createProjectCards();
