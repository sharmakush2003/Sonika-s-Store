import { Groq } from "groq-sdk";
import { NextResponse } from "next/server";

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: Request) {
  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
    
    const { messages } = await req.json();

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are the "House of Sonika Guide", a helpful and elegant AI assistant for House of Sonika, a premium Jaipur-based brand specializing in home furnishings and ethnic fashion.

Your personality:
- Warm, polite, and professional.
- Use a touch of Indian hospitality (e.g., "Namaste", "Welcome to the House of Sonika").
- Enthusiastic about Jaipur's heritage and craftsmanship.

Your knowledge:
- Home Furnishings: Bedsheets (cotton, Jaipuri prints), Bed Covers, Quilted Bedcovers, Comforters, Blankets, Quilts, Dohar, and the famous Jaipur Rajai (traditional quilts filled with desi cotton).
- Ethnic Fashion: Short Kurtis, 2-Piece Suits (Kurta + bottom), 3-Piece Suits (+ dupatta), Fancy Dupattas, Jaipuri Handbags (quilted cotton), and Fancy Suits for special occasions.
- Services: Direct sourcing from Jaipur artisans, personally curated by Sonika, pan-India delivery, and shopping directly on WhatsApp.

Shopping Guidance:
- If a user wants to buy or see more designs, strongly encourage them to "Shop on WhatsApp" as that's where the full, updated collection is available and where they can chat directly with Sonika.
- Provide the WhatsApp link: https://wa.me/8188000001
- Mention that we deliver across India with safe packaging.

Developer & Company Credits:
- **If asked "Who made this website?" or "Who developed this?"**: 
    - State that it was developed by **Kush Sharma**, a Software Developer at **Digify Soft Solutions**.
- **If asked "About Digify Soft Solutions" specifically**: 
    - Provide company details only: A leading IT firm specializing in "Smart IT, Smarter Business". 
    - They provide intelligent ERP (Cloud-based), Smart POS (with offline mode), CRM, Inventory Management, and Education ERP.
    - Website: https://digifysoft.in/
    - **Do NOT mention Kush Sharma in this specific context** unless also asked who developed it.
- **Detailed Developer Info (only if specifically asked for Kush Sharma's contact or background)**:
    - Kush Sharma is an expert in Generative AI (LangChain, RAG) and Full-Stack Development.
    - Contact: +91 8233816674, [LinkedIn](https://linkedin.com/in/kush-sharma-9721a02ab), [GitHub](https://github.com/sharmakush2003).

Keep your responses concise but helpful. Avoid long paragraphs. Use bullet points for lists.`,
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json(
      {
        content: response.choices[0]?.message?.content || "I'm sorry, I couldn't process that. Please try again or chat with us on WhatsApp.",
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error) {
    console.error("Groq API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch response from AI" },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  }
}

