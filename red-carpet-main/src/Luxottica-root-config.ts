import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "http://localhost:8081/Luxottica-red-carpet-calendar.js"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
