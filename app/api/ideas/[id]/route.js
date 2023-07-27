import { NextResponse } from "next/server";
import ideas from "../ideas.json";

export async function GET(request, context) {
  console.log({ pathname: request.nextUrl.pathname, context });
  const { id } = context.params;

  const idea = ideas.find((ide) => ide.id == id);
  console.log({idform: idea}, ideas);

  return NextResponse.json({
    idea,     
    msg: `recuperer depuis end point : ${id}`,
  });
}
