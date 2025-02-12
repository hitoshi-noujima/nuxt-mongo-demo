export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, text, parentId } = body;

  if (!name || !text) {
    throw createError({
      statusCode: 400,
      message: "名前と本文は必須です",
    });
  }

  try {
    const post = new PostSchema({
      name,
      text,
      parent: parentId,
    });
    await post.save();
    return post;
  } catch (_error) {
    throw createError({
      statusCode: 500,
      statusMessage: "投稿の作成中にエラーが発生しました",
    });
  }
});
