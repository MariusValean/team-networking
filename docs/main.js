fetch("http://localhost:3000/teams-json", { method: "GET", headers: { "Content-Type": "application/json" } })
  .then(t => t.json())
  .then(t => {
    !(function (t) {
      const e = t.map(
        t =>
          `\n        <tr>\n        <td>${t.promotion}</td>\n        <td>${t.members}</td>\n        <td>${t.name}</td>\n        <td>${t.url}</td>\n        <td>\n          <a data-id="${t.id}">✖</a>\n        </td>\n        </tr>`
      );
      document.querySelector("#teams tbody").innerHTML = e.join("");
    })(t);
  }),
  document.getElementById("editForm").addEventListener("submit", function (t) {
    t.preventDefault(),
      fetch("http://localhost:3000/teams-json/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          promotion: document.getElementById("promotion").value,
          members: document.getElementById("members").value,
          name: document.getElementById("name").value,
          url: document.getElementById("url").value
        })
      })
        .then(t => t.json())
        .then(t => {
          console.warn("status", t.success, t.id), t.success && window.location.reload();
        });
  }),
  document.querySelector("#teams tbody").addEventListener("click", t => {
    var e;
    t.target.matches("a") &&
      ((e = t.target.dataset.id),
      fetch("http://localhost:3000/teams-json/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: e })
      }).then(t => t.json())).then(t => {
        t.success && window.location.reload();
      });
  });
