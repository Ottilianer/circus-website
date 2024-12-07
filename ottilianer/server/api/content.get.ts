import getPocketBaseInstance from "../pocketbase";

export default defineEventHandler(async (event) => {
  try {
    const pb = await getPocketBaseInstance();

    const identifier = getQuery(event).identifier;

    console.log("identifier", identifier);

    const records = await pb.collection("content").getList(1, 1, {
      filter: `identifier = "${identifier}"`,
    });

    // 5. Return the records
    return {
      success: true,
      data: records.items.at(0),
    };
  } catch (error) {
    // Handle errors
    return createError({
      statusCode: error.status || 500,
      message: error.message || "An error occurred",
    });
  }
});
