/*import Repos from "./repos.js";*/

class Portfolio {
  constructor() {
    this.HomeMessage = `                                       
[[;lime;] ______     ______     ______     ______     __     ______     __        
/\\  ___\\   /\\  __ \\   /\\  == \\   /\\  == \\   /\\ \\   /\\  ___\\   /\\ \\       
\\ \\ \\__ \\  \\ \\  __ \\  \\ \\  __<   \\ \\  __<   \\ \\ \\  \\ \\  __\\   \\ \\ \\____  
 \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_\\  \\ \\_____\\  \\ \\_____\\ 
  \\/_____/   \\/_/\\/_/   \\/_____/   \\/_/ /_/   \\/_/   \\/_____/   \\/_____/ 
                                                                         
Hii! I'm Gabriel Torres Gamez ✋😁
Just type "help" for the list of commands 🤟
[[;gray;]
  `;

    this.Commands = {
      whoami: `
## About me ##
Hi, I'm Gabo, a Data scientist and software engineer from Zürich, Switzerland.
Proficient at transforming complex problems into innovative solutions.
Ambitious, analytical, curious, with strong team collaboration abilities.
      `,

      education: `
## My educational background ##

🎓 [[;lime;]B.Sc. in Data Science
[[;gray;] 📅 2021-2025
 🏬 FHNW - University of Applied Sciencs and Arts Northwestern Switzerland FHNW
 📍 Brugg, Aargau, Switzerland
[[;white;] - Several interdisciplinary projects in areas such as AI security, astronomy, sensor technology, IoT, real estate and air quality.
 - Strong focus on deep learning, including adversarial attacks, computer vision, natural language processing, signal processing, and social network analysis.
 - Regularly approached by colleagues for advice on a broad range of technical challenges.

🎓 [[;lime;]Vocational Training in Software Development (EFZ)
🎓 Vocational Baccalaureate (BM1)
[[;gray;] 📅 2016-2020
 🏬 BBW - Berufsfachschule Winterthur
 📍 Winterthur, Zurich, Switzerland
            `
      ,

      work: `
## My work experience ##

💼 [[;lightgreen;]Lecturer (starting April 2025)
[[;gray;] 📅 04.2025 - 03.2030
 🏬 ABB Technikerschule
 📍 Baden, Aargau, Switzerland
[[;white;] - Lecturer for the subject “Introduction to Data Science”.
 - Module development to start in summer 2024.

💼 [[;lime;]Data Scientist
[[;gray;] 📅 07.2023 - 08.2023
 🏬 EMPA - Swiss Federal Laboratories for Materials Science and Technology
 📍 Dübendorf, Zurich, Switzerland
[[;white;] - Collaborator in the Air Pollution and Environmental Technology Department.
 - Revision of the algorithm for the detection of compounds in GC-MS data for the open-source project ALPINAC.

💼 [[;lime;]Technical Support Specialist
[[;gray;] 📅 08.2022
 🏬 Balgrist University Hospital
 📍 Zürich, Zürich, Switzerland
 [[;white;]- First and second level support in clinic and campus environment.

💼 [[;lime;]Class and Student Assistance
[[;gray;] 📅 09.2020 - 09.2021
 🏬 EDUZIS - Schulhaus Seehalde
 📍 Niederhasli, Zurich, Switzerland
[[;white;] - Taking care of young people in class and during the lunch break.
 - Temporary help in IT.

💼 [[;lime;]Software Engineer
[[;gray;] 📅 08.2016 - 07.2020
 🏬 Balgrist University Hospital
 📍 Zürich, Zürich, Switzerland
[[;white;] - First and second level support in clinic and campus environment.
 - Assistance in the field of Network Technology.
 - Support of Administrative and Medical Applications.
 - Supporting medical doctors on research tasks with process optimizations and data management.
 - Sole development of smaller customer-specific projects .
 - Participation in large cross-company projects like the digital patient portal.
      `,

      contact: `
## Know where to contact me ##
Hey! Just e-mail me at 📨 gabriel.torres@fuet.ch

You can also write me a message on LinkedIn 🌐 https://www.linkedin.com/in/gabrieltorresgamez/
`,

      socials: `
      ## My socials (GitHub/LinkedIn) ##
You can find my GitHub profile at 🌐 https://github.com/gabrieltorresgamez

You can find my LinkedIn profile at 🌐 https://www.linkedin.com/in/gabrieltorresgamez
      `,

      blog: `
      ## My blog ##
You can find my blog at 🌐 https://fuet.ch
      `,


      /*
            github(use_descriptions = false) {
              if (use_descriptions) return `## My GitHub Repos ##`;
              var screen = "";
      
              const repos = new Repos();
      
              repos.get().forEach(data => {
                screen += `
      🐣 [[;lime;]${data.name}[[;gray;] ([[;DeepSkyBlue;]${data.html_url}[[;gray;])
        - ${data.description}
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

      help += `\t[[;yellow;]${cmd.padEnd(15)}[[;gray;]${preview}\n`;
    });

    return help;
  }
}

export default Portfolio;
