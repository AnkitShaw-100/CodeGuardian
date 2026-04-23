import aiService from "../services/ai.service.js";

export default async function aiController(req, res) {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({
        success: false,
        message: "Code is required",
      });
    }

    const prompt = `
Quick code review with formatting.

Instructions:
- Max 200 words
- Use **text** for important words/issues to highlight them
- Use bullet points (- or •) for clarity
- Format: Issues, Suggestions, Best Practices
- Skip obvious points
- If no issues, say "✓ No critical issues found"

Code:
${code}
`;

    const response = await aiService(prompt);

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    // console.error("AI Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: "AI service failed",
      error: error.message,
    });
  }
}
