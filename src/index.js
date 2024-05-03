import Portfolio from "./portfolio.js";


$.terminal.defaults.prompt = `[[;lime;]guest@gabrieltorresgamez[[;white;]:[[;DeepSkyBlue;]~[[;white;]$ `;

$(function ($) {
  const portfolio = new Portfolio();
  const term = $("#app").terminal(
    function (command, term) {
      term.pause();
      var msg = "";
      var args = command.toLowerCase().trim().split(' ');
      switch (args[0]) {
        case "sudo":
        case "su":
        case "rm":
          msg = `[[;red;]get out of here hacker]`;
          window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
          break;
        case "help":
          /*case "ls":
          case "ll":*/
          if (args.length > 1) {
            msg = `[[;red;]${args[0]}: invalid option -- ${args[1]}]`;
          } else {
            msg = portfolio.getHelp();
          }
          break;
        case "home":
        case "exit":
          window.location = "/";
          break;
        default:
          var results = portfolio.getInfo(command);

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
      completion: Object.keys(portfolio.Commands)
    }
  );

  term.clear();
  term.echo(portfolio.getHomeScreen());
});
