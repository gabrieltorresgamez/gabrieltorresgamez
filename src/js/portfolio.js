class Portfolio {
  constructor() {
    this.HomeMessage = `[[;lime;]████████╗ ██████╗ ██████╗ ██████╗ ███████╗███████╗     ██████╗ ███████╗
╚══██╔══╝██╔═══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝    ██╔═══██╗██╔════╝
   ██║   ██║   ██║██████╔╝██████╔╝█████╗  ███████╗    ██║   ██║███████╗
   ██║   ██║   ██║██╔══██╗██╔══██╗██╔══╝  ╚════██║    ██║   ██║╚════██║
   ██║   ╚██████╔╝██║  ██║██║  ██║███████╗███████║    ╚██████╔╝███████║
   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝     ╚═════╝ ╚══════╝
                                   
[[;grey;]Welcome to TORRES OS ${Math.floor(new Date().getFullYear() / 100)}.${new Date().getFullYear() % 100}.${new Date().getMonth() + 1} LTS (GNU/Linux 5.15.0-105-generic x86_64)

  System information as of ${new Date().toString()}:

  System load:  0.0                 Processes:            1
  Usage of /:   32.9 % of 3.72GB    Users logged in:      1
  Memory usage: 1%                  IP address for eth0:  CENSORED
  Swap usage:   0%

0 updates can be installed immediately.
0 of these updates are security updates.

[[; white;]----------------------------------------------------------------------

[[; lime;]Hii! I'm Gabriel Torres Gamez and this is my portfolio. ✋😁
To navigate through it, type in the command you want to execute below.
The command "help" returns a list of commands 🤟

[[; white;]----------------------------------------------------------------------
      `;

    this.Commands = {
      whoami: `
## About me ##
[[; white;]Hi, I'm Gabo, a Data scientist and software engineer from Zürich, Switzerland.
Proficient at transforming complex problems into innovative solutions.
Ambitious, analytical, curious, with strong team collaboration abilities.]
`,

      education: `
## My educational background ##

🎓 [[; DeepSkyBlue;]CAS Software Architecture
[[; grey;]
  📅 09.2026 - now
  🏬 HSLU - Lucerne University of Applied Sciences and Arts
  📍 Rotkreuz, Zug, Switzerland

🎓 [[; DeepPink;]B.Sc. in Data Science
[[; grey;]
  📅 09.2021 - 02.2025
  🏬 FHNW - University of Applied Sciences and Arts Northwestern Switzerland
  📍 Brugg, Aargau, Switzerland
[[; white;]
  - Several interdisciplinary projects in areas such as AI security, astronomy, sensor technology, IoT, real estate and air quality.
  - Strong focus on deep learning, including adversarial attacks, computer vision, natural language processing, signal processing, and social network analysis.
  - Regularly approached by fellow students for advice on a broad range of technical challenges.

🎓 [[; DeepPink;]Vocational Training in Software Development (EFZ)
🎓 Vocational Baccalaureate (BM1 TALS)
[[; grey;]
  📅 08.2016 - 07.2020
  🏬 BBW - Berufsfachschule Winterthur
  📍 Winterthur, Zurich, Switzerland
  `,

      work: `
## My work experience ##

💼 [[; DeepSkyBlue;]Application Engineer - Data & Integration
[[; grey;]
  📅 07.2025 - now
  🏬 UMB AG
  📍 Urdorf, Zürich, Switzerland
[[; white;]
  - Developed and maintained the company-wide enterprise service management platform OMNITRACKER across 12 business areas, from implementation to production release.
  - Led the implementation of absence and vacation management, including fully automated vacation entitlement calculation.
  - Designed and rolled out REST APIs for ServiceNow time tracking and customer ticketing, and migrated the SharePoint interface to the Microsoft Graph API.
  - Held technical ownership of the company-wide physical access control system, including migration to its successor product.
  - Built a Python MCP server giving the team's AI assistants structured access to product documentation and system knowledge.
  - Co-authored the team's development guidelines and gave internal tech talks on Git, CI/CD, logging, and AI-assisted development.

💼 [[; DeepSkyBlue;]Lecturer FH
[[; grey;]
  📅 02.2025 - now
  🏬 FHNW - University of Applied Sciences and Arts Northwestern Switzerland
  📍 Brugg, Aargau, Switzerland
[[; white;]
  - Lecturer for the course “Web Data Acquisition” in the B.Sc. Data Science program.

💼 [[; DeepPink;]Lecturer HF
[[; grey;]
  📅 04.2024 - 06.2025
  🏬 ABB Technikerschule
  📍 Baden, Aargau, Switzerland
[[; white;]
  - Designed and lectured “Data Science & Artificial Intelligence” for HF programs in Building Automation and Energy & Environmental Engineering.

💼 [[; DeepPink;]Junior Data Engineer
[[; grey;]
  📅 08.2024 - 04.2025
  🏬 Baloise Asset Management
  📍 Basel, Switzerland
[[; white;]
  - Conducted requirements analysis and designed, implemented, and managed a Product Master database using PostgreSQL.
  - Developed Python-based data import and export pipelines ensuring reliable Excel-based workflows.
  - Implemented Mage-ETL pipelines on OpenShift infrastructure with Jenkins CI/CD for continuous deployment and on-demand execution.
  - Mentored a working student in developing a user-friendly frontend interface for displaying Product Master data and file management through established pipelines.
  - Coached the product management team in utilizing the implemented data management solution and enabled independent usage.
  - Created structured programming guidelines according to modern industry standards.

💼 [[; DeepPink;]Data Scientist
[[; grey;]
  📅 07.2023 - 08.2023
  🏬 EMPA - Swiss Federal Laboratories for Materials Science and Technology
  📍 Dübendorf, Zurich, Switzerland
[[; white;]
  - Collaborator in the Air Pollution and Environmental Technology Department.
  - Revision of the algorithm for the detection of compounds in GC - MS data for the open - source project ALPINAC.

💼 [[; DeepPink;]Technical Support Specialist
[[; grey;]
  📅 08.2022
  🏬 Balgrist University Hospital
  📍 Zürich, Zürich, Switzerland
[[; white;]
  - First and second level support in clinic and campus environment.

💼 [[; DeepPink;]Class and Student Assistance
[[; grey;]
  📅 09.2020 - 09.2021
  🏬 EDUZIS - Schulhaus Seehalde
  📍 Niederhasli, Zurich, Switzerland
[[; white;]
  - Taking care of young people in class and during the lunch break.
  - Temporary help in IT.

💼 [[; DeepPink;]Software Engineer
[[; grey;]
  📅 08.2016 - 07.2020
  🏬 Balgrist University Hospital
  📍 Zürich, Zürich, Switzerland
[[; white;]
  - First and second level support in clinic and campus environment.
  - Assistance in the field of Network Technology.
  - Support of Administrative and Medical Applications.
  - Supporting medical doctors on research tasks with process optimizations and data management.
  - Sole development of smaller customer - specific projects.
  - Participation in large cross - company projects like the digital patient portal.
      `,

      projects: `
## My projects ##

🛡️ [[; DeepSkyBlue;]Adversarial Attacks in medicine
[[; white;]
  Enhancing the robustness of disease detection models against universal adversarial attacks.
  https://github.com/AdversarialAttacks

🌞 [[; DeepPink;]FlareSense
[[; white;]
  Development of a classification model for the detection of solar flares using the e-Callisto solar spectrometer network.
  https://github.com/i4Ds/FlareSense

📱 [[; DeepPink;]Sensor Based Activity Recognition
[[; white;]
  Using smartphone sensors to classify movement and workout profiles.
  https://github.com/Sensor-Based-Activity-Recognition

🏡 [[; DeepPink;]Real Estate Price Prediction
[[; white;]
  Development of a website for predicting real estate prices in Switzerland.
  https://github.com/Immobilienrechner-Challenge

🏫 [[; DeepPink;]Smart Classroom
[[; white;]
  Development of a complete IoT solution for monitoring and evaluating air quality in classrooms.
  https://github.com/Smart-Classroom-Challenge
`,

      certificates: `
## My certificates ##
[[; white;]
  2025  ITIL Foundation Certificate in IT Service Management, PeopleCert
  2025  Azure Fundamentals, Microsoft
  2023  Data Hackdays BE 2023, Kanton Bern
  2022  MAKEathon 2022, FHNW
  2021  Betreuung von Jugendlichen 2, CURAVIVA
  2020  Betreuung von Jugendlichen 1, CURAVIVA
  2020  Kommunikation und Betreuung (KoBe), Swiss Red Cross
  2018  Certificado de Lengua y Cultura Españolas - C1, Ministerio de Educación de España]
`,

      contact: `
## Know where to contact me ##
[[; white;]Hey! Just e-mail me at 📨 mail@torres.swiss

You can also write me a message on LinkedIn 🌐 https://www.linkedin.com/in/gabrieltorresgamez/]
`,

      socials: `
      ## My socials(GitHub / LinkedIn) ##
[[; white;]You can find my GitHub profile at 🌐 https://github.com/gabrieltorresgamez

You can find my LinkedIn profile at 🌐 https://www.linkedin.com/in/gabrieltorresgamez]
`,

      blog: `
      ## My blog ##
[[; white;]You can find my blog at 🌐 https://fuet.ch]
`,


      /*
            github(use_descriptions = false) {
              if (use_descriptions) return `## My GitHub Repos ##`;
              var screen = "";
      
              const repos = new Repos();
      
              repos.get().forEach(data => {
                screen += `
      🐣[[; lime;]${ data.name }[[; grey;]([[; DeepSkyBlue;]${ data.html_url } [[; grey;])
- ${ data.description }
  `;
              });
      
              return screen;
            }
      */

    };
  }

  getHomeScreen() {
    return this.HomeMessage;
  }

  getInfo(keyword) {
    if (
      typeof this.Commands[keyword] !== "undefined" &&
      typeof this.Commands[keyword] === "string"
    ) {
      return this.Commands[keyword].replace(/##(.*)##/g, "").trim();
    } else if (
      typeof this.Commands[keyword] !== "undefined" &&
      typeof this.Commands[keyword] === "function"
    ) {
      return this.Commands[keyword]();
    }

    return null;
  }

  getHelp() {
    var help = "";

    Object.keys(this.Commands).forEach(cmd => {
      var preview = "";
      var tokens =
        typeof this.Commands[cmd] === "function"
          ? this.Commands[cmd](true).match(/##(.*)##/g)
          : this.Commands[cmd].match(/##(.*)##/g);

      // console.log(typeof tokens);
      if (tokens != null) {
        preview = tokens
          .join("")
          .replace(/#/g, "")
          .trim();
      }

      help += `\t[[; yellow;]${cmd.padEnd(15)}[[; grey;]${preview}\n`;
    });

    return help;
  }
}

export default Portfolio;
