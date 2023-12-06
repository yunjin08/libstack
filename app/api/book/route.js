import Prompt from "@/models/books";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    const headers = { "Cache-Control": "no-store" };

    return new Response(JSON.stringify(prompts), { status: 200, headers });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
