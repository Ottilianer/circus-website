// import usePresaleVerification from "~/server/composables/usePresaleVerification";
// import {
//   constructErrorResponse,
//   constructSuccessResponse,
// } from "~/server/utils/response";
// import { isValidEmail, isValidName } from "~/server/utils/validation";

export default defineEventHandler(async (event) => {
  // const { sendVerificationEmail } = usePresaleVerification();
  // const { name, email, regularCards, discountCards, performance } =
  //   await readBody(event);
  // if (
  //   !name ||
  //   !email ||
  //   regularCards === undefined ||
  //   discountCards === undefined ||
  //   !performance
  // ) {
  //   return constructErrorResponse(400, {
  //     errorId: "MISSING_FIELDS",
  //     message: "Missing required fields",
  //   });
  // }
  // if (!isValidEmail(email)) {
  //   return constructErrorResponse(400, {
  //     errorId: "INVALID_EMAIL",
  //     message: "Invalid email",
  //   });
  // }
  // if (!isValidName(name)) {
  //   return constructErrorResponse(400, {
  //     errorId: "INVALID_NAME",
  //     message: "Invalid name",
  //   });
  // }
  // try {
  //   await sendVerificationEmail({
  //     name,
  //     email,
  //     regularCards,
  //     discountCards,
  //     performance,
  //   });
  // } catch (error) {
  //   console.error(error);
  //   return constructErrorResponse(500, {
  //     errorId: "SEND_EMAIL_FAILED",
  //     message: "Failed to send verification email",
  //   });
  // }
  // return constructSuccessResponse(201, "Presale created");
});
