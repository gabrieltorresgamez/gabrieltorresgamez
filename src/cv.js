import Repos from "./repos.js";

class CV {
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
## TODO ##
Peekaboo
      `,

      education: `
## View my educational background ##

🎓 [[;lime;]B.Sc. in Data Science
[[;gray;] - 📅 2021-2025
  - 🏬 University of Applied Sciencs and Arts Northwestern Switzerland FHNW
  - 📍 Brugg, Aargau, Switzerland
      - TODO
      
🎓 [[;lime;]TODO
[[;gray;] - 📅 ??-??
        - 🏬 ??
        - 📍 ??
            - ??
            `
      ,

      work: `
## Know where I work ##

💼 [[;lime;]TODO
[[;gray;]  - 💻 TODO
  - 📅 ??-??
  - 📍 ??, ??
      `,

      contact: `
## Know where to contact me ##
Hey! Just e-mail me at 📨 gabriel.torres@fuet.ch.  
`,

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

export default CV;
