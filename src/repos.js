class Repos {
  get() {
    if (typeof window._gabrieltorresgamez_term_projects == "object") {
      return window._gabrieltorresgamez_term_projects;
    }

    var resp = null;

    $.ajax({
      url: "https://api.github.com/users/gabrieltorresgamez/repos",
      method: "get",
      async: false,
      success: data => {
        resp = data;
      }
    });

    window._gabrieltorresgamez_term_projects = resp;

    return resp;
  }
}

export default Repos;
