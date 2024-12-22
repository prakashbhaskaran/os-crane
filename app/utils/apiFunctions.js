import { NextResponse } from "next/server";

const getResponse = (data, code) => {
  if (code) {
    return NextResponse.json({ message: data }, { status: code });
  }
  return NextResponse.json({
    data: data,
  });
};
const getParams = (req, key = "id") => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const result = searchParams.get(key);
  return result;
};
export { getResponse, getParams };
