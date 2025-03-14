import { JWTPayload, jwtVerify, SignJWT } from "jose";

export async function verifyToken(token: string, secretKey: string) {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(secretKey)
    );
    return payload;
  } catch (error) {
    return null;
  }
}

export async function createToken(payload: JWTPayload, secretKey: string) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(new TextEncoder().encode(secretKey));

  console.log("JWT:", token);
  return token;
}
