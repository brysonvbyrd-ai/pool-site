(function () {
  "use strict";

  var menu = document.querySelector("[data-mobile-nav]");
  if (menu) {
    var links = menu.querySelectorAll("a");
    for (var i = 0; i < links.length; i += 1) {
      links[i].addEventListener("click", function () {
        // Close after the browser follows the link. Hiding it mid-click cancels navigation.
        window.setTimeout(function () {
          menu.open = false;
        }, 0);
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        menu.open = false;
      }
    });

    document.addEventListener("click", function (event) {
      if (!menu.open) return;
      if (!menu.contains(event.target)) {
        menu.open = false;
      }
    });
  }

  var form = document.getElementById("quote-form");
  if (!form) return;

  var status = document.getElementById("form-status");

  form.addEventListener("submit", function (event) {
    if (typeof form.checkValidity === "function" && !form.checkValidity()) {
      return;
    }

    event.preventDefault();

    var email = "hello@yourpoolco.example";
    var action = form.getAttribute("action") || "";
    var matched = action.match(/^mailto:([^?]+)/i);
    if (matched) {
      email = decodeURIComponent(matched[1]);
    }

    var data = new FormData(form);
    var services = data.getAll("service");
    var lines = [
      "Quote request from the Your Pool Co. website template",
      "",
      "Name: " + oneLine(data.get("name")),
      "Email: " + oneLine(data.get("email")),
      "Phone: " + oneLine(data.get("phone")),
      "City or neighborhood: " + oneLine(data.get("city")),
      "Pool type: " + oneLine(data.get("pool")),
      "Services: " + (services.length ? services.map(oneLine).join(", ") : "Not specified"),
      "",
      "Notes:",
      notes(data.get("notes"))
    ];

    var href =
      "mailto:" +
      email +
      "?subject=" +
      encodeURIComponent("Quote request — Your Pool Co.") +
      "&body=" +
      encodeURIComponent(lines.join("\n"));

    var message =
      "An email draft to " +
      email +
      " should open now. That address is a placeholder. This page did not store or send your request. If no email app opens, copy your notes and write to that address directly.";

    if (status) {
      status.textContent = message;
    }

    try {
      window.location.href = href;
    } catch (err) {
      if (status) {
        status.textContent =
          "This browser blocked the email draft. Nothing was stored. Write directly to " +
          email +
          ", which is a placeholder address.";
      }
    }

    if (status && typeof status.focus === "function") {
      status.focus();
    }
  });

  function oneLine(value) {
    return String(value == null ? "" : value).replace(/\s+/g, " ").trim();
  }

  function notes(value) {
    return String(value == null ? "" : value).replace(/\r\n/g, "\n").trim();
  }
})();
