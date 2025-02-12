export default defineEventHandler(async (_event) => {
  try {
    // データベースから全ての投稿を取得
    const posts = await PostSchema.find().populate("parent");
    // 投稿を降順にソート
    const postsDesc = posts.toReversed();

    return postsDesc;
  } catch (_error) {
    throw createError({
      statusCode: 500,
      statusMessage: "投稿の取得中にエラーが発生しました",
    });
  }
});
