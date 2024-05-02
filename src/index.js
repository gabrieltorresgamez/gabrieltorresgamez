import CV from "./cv.js";


$.terminal.defaults.prompt = `[[;lime;]guest@gabrieltorresgamez[[;white;]:[[;DeepSkyBlue;]~[[;white;]$ `;

$(function ($) {
  const cv = new CV();
  const term = $("#app").terminal(
    function (command, term) {
      term.pause();
      var msg = "";
      switch (command.toLowerCase().trim()) {
        case "help":
        case "ls":
        case "ll":
          msg = cv.getHelp();
          break;
        case "home":
        case "exit":
          window.location = "/";
          break;
        default:
          var results = cv.getInfo(command);

          if (results !== null) {
            msg = results;
          } else if (command.length > 0) {
            msg = `[[;red;]Command "${command}" not found.`;
          }

          break;
      }

      term.resume();

      return msg + (msg.length ? "\n" : "");
    },
    {
      autocompleteMenu: true,
      completion: Object.keys(cv.Commands)
    }
  );

  term.clear();
  term.echo(cv.getHomeScreen());
});
