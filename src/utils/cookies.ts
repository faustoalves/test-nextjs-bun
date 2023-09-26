import { cookies, headers } from "next/headers";

export const getHeaderCookie = (key: string) => {
  const cookieStore = cookies();
  if (cookieStore.get(key)?.value) {
    return cookieStore.get(key)?.value;
  }
  const setCookies = headers().get("set-cookie");
  if (setCookies?.includes(key)) {
    return setCookies
      .split(",")
      .filter((cookie) => cookie.includes(key))[0]
      .split(";")[0]
      .replace(`${key}=`, "");
  } else {
    return null;
  }
};
