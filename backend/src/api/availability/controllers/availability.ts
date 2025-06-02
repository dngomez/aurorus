/**
 * A set of functions called "actions" for `availability`
 */

export default {
  getAvailability: async (ctx, next) => {
    try {
      const books = await strapi.query("api::book.book").findMany({
        where: {
          date: {
            $gte: ctx.query.filters.date.gte,
            $lte: ctx.query.filters.date.lte,
          },
        },
      })

      console.log(books)

      ctx.body = {
        data: books,
      }
    } catch (err) {
      ctx.body = err
    }
  },
}
