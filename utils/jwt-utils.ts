interface JWTPayload {
  exp?: number;
  [key: string]: any;
}

export function jwtAuthExpire(token: string): boolean {
  let parsedToken: JWTPayload;

  try {
    parsedToken = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );
  } catch (e) {
    console.error("Invalid token given");
    return false;
  }

  if (!parsedToken.exp) {
    console.error("Token is missing exp key");
    return false;
  }

  return parsedToken.exp * 1000 < Date.now();
}
