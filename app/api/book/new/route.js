import Prompt from "@/models/books";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { userId, title, author, page } = await request.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({ creator: userId, title, author, page });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
