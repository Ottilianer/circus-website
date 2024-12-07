import usePocketBase from "~/server/composables/usePocketBase";
import usePresaleVerification from "~/server/composables/usePresaleVerification";
import {
  constructErrorResponse,
  constructSuccessResponse,
} from "~/server/utils/response";

export default defineEventHandler(async (event) => {
  const { verifyCode } = usePresaleVerification();
  const { createCircusPresale } = await usePocketBase();

  const { code } = await readBody(event);

  if (!code) {
    return constructErrorResponse(400, {
      errorId: "MISSING_FIELDS",
      message: "Missing required fields",
    });
  }

  let presale;

  try {
    presale = verifyCode(code);
    return { presale };
  } catch (error) {
    console.error(error);
    return constructErrorResponse(500, {
      errorId: "VERIFICATION_FAILED",
      message: "Failed to verify code",
    });
  }

  try {
    await createCircusPresale(presale);
  } catch (error) {
    console.error(error);
    return constructErrorResponse(500, {
      errorId: "CREATE_PRESALE_FAILED",
      message: "Failed to create presale",
    });
  }
});
