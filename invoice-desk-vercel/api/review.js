export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const apiKey = process.env.GALAXAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      success: false,
      error: "Server configuration is missing GALAXAI_API_KEY"
    });
  }

  const body = req.body || {};
  const invoiceId = String(body.invoice_id || "").trim().toUpperCase();
  const input = String(body.input || "").trim();
  const conversationId = String(body.conversationId || "").trim();

  if (!input || !conversationId) {
    return res.status(400).json({
      success: false,
      error: "input and conversationId are required"
    });
  }

  if (invoiceId && !/^INV-\d{3}$/.test(invoiceId)) {
    return res.status(400).json({
      success: false,
      error: "invoice_id must use the format INV-000"
    });
  }

  const payload = {
    input,
    conversationId,
    files: Array.isArray(body.files) ? body.files : [],
    invoice_id: invoiceId,
    test_mode: String(body.test_mode || "off")
  };

  try {
    const upstream = await fetch(
      "https://ptut-automate.galaxai.ae/api/workflows/df9b5c1b-94e4-4c88-be66-426e790c4d91/execute",
      {
        method: "POST",
        headers: {
          "X-API-Key": apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    const text = await upstream.text();
    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { raw: text };
    }

    return res.status(upstream.status).json(data);
  } catch (error) {
    return res.status(502).json({
      success: false,
      error: "Could not reach the GALAXAI workflow"
    });
  }
}
