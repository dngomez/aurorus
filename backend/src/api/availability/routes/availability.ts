export default {
  routes: [
    {
      method: "GET",
      path: "/availability",
      handler: "availability.getAvailability",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}
