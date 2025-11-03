import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { messages } = body;

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
        }

        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "minimax/minimax-m2:free",
                messages,
                stream: true,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "http://localhost:3000",
                    "X-Title": "My Next.js App",
                },
                responseType: "stream",
            }
        );

        const stream = response.data;
        const encoder = new TextEncoder();

        const readable = new ReadableStream({
            start(controller) {
                stream.on("data", (chunk: any) => {
                    const payloads = chunk.toString().split("\n\n");

                    for (const payload of payloads) {
                        const line = payload.trim();
                        if (!line) continue;

                        // ✅ Skip the special "[DONE]" message
                        if (line === "data: [DONE]" || line.includes("[DONE]")) {
                            controller.close();
                            return;
                        }

                        // ✅ Parse only valid JSON messages
                        if (line.startsWith("data:")) {
                            const jsonStr = line.replace(/^data:\s*/, "");
                            try {
                                const data = JSON.parse(jsonStr);
                                const text = data.choices?.[0]?.delta?.content;
                                if (text) {
                                    controller.enqueue(encoder.encode(text));
                                }
                            } catch (err) {
                                // Gracefully handle parsing errors
                                console.error("Error parsing JSON stream chunk:", err);
                            }
                        }
                    }
                });

                // stream.on("end", () => {
                //     controller.close();
                // });

                stream.on("error", (err: any) => {
                    console.error("Stream error:", err);
                    controller.error(err);
                });
            },
        });

        return new NextResponse(readable, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Transfer-Encoding": "chunked",
            },
        });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
