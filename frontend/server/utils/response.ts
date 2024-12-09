function constructErrorResponse(code: number, details: ErrorDetails) {
  return new Response(
    JSON.stringify({
      success: false,
      detail: {
        ...details,
      },
    }),
    { status: code, headers: { "Content-Type": "application/json" } }
  );
}

function constructSuccessResponse(code: number, message: string) {
  return new Response(JSON.stringify({ success: true, message }), {
    status: code,
    headers: { "Content-Type": "application/json" },
  });
}

function constuctErrorDetails(
  errorId: string,
  message?: string,
  expirationTime?: number
): ErrorDetails {
  return {
    errorId,
    message,
    expirationTime,
  };
}

interface ErrorDetails {
  errorId: string;
  message?: string;
  expirationTime?: number;
}

export {
  constructErrorResponse,
  constructSuccessResponse,
  constuctErrorDetails,
};
