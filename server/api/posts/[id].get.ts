export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id;

    const post = await PostSchema.findOne({
      _id: id,
    }).populate("parent");

    if (!post) {
      throw createError({
        statusCode: 404,
        statusMessage: `ID: ${id} の投稿が見つかりませんでした`,
      });
    }

    return post;
  } catch (_error) {
    throw createError({
      statusCode: 500,
      statusMessage: "投稿の取得中にエラーが発生しました",
    });
  }
});
