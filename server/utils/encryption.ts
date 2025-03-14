import { JWTPayload, jwtVerify, SignJWT } from "jose";

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.SECRET_KEY as string)
    );
    return payload;
  } catch (error) {
    return null;
  }
}

export async function createToken(payload: JWTPayload) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(new TextEncoder().encode(process.env.SECRET_KEY as string));

  console.log("JWT:", token);
  return token;
}
