import PresaleVerificationService from "~/server/services/presale-verification-service";
import {
  constructErrorResponse,
  constructSuccessResponse,
} from "~/server/utils/response";
import { isValidEmail, isValidName } from "~/server/utils/validation";

export default defineEventHandler(async (event) => {
  const presaleVerificationService = PresaleVerificationService.getInstance();

  const { name, email, regularCards, discountCards, performance } =
    await readBody(event);

  if (!name || !email || !regularCards || !discountCards || !performance) {
    return constructErrorResponse(400, {
      errorId: "MISSING_FIELDS",
      message: "Missing required fields",
    });
  }

  if (!isValidEmail(email)) {
    return constructErrorResponse(400, {
      errorId: "INVALID_EMAIL",
      message: "Invalid email",
    });
  }

  if (!isValidName(name)) {
    return constructErrorResponse(400, {
      errorId: "INVALID_NAME",
      message: "Invalid name",
    });
  }

  if (presaleVerificationService.existsVerificationByMail(email)) {
    const code = presaleVerificationService.getCodeByMail(email) as string;
    if (presaleVerificationService.isCodeExpired(code)) {
      presaleVerificationService.deleteVerificationCode(email);
    } else {
      return constructErrorResponse(400, {
        errorId: "ALREADY_EXISTS",
        message: "Presale already exists",
        expirationTime: presaleVerificationService.getExpirationTime(code),
      });
    }
  }

  const code = presaleVerificationService.generateCode({
    name: name,
    email: email,
    regularCards: regularCards,
    discountCards: discountCards,
    performance: performance,
  });

  try {
    await presaleVerificationService.sendVerificationEmail(code);
  } catch (error) {
    console.error(error);
    return constructErrorResponse(500, {
      errorId: "SEND_EMAIL_FAILED",
      message: "Failed to send verification email",
    });
  }

  return constructSuccessResponse(201, "Presale created");
});
