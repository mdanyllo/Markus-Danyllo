import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Aqui você pode integrar com EmailJS, Nodemailer, ou salvar em banco
    console.log("Mensagem recebida:", { name, email, message });

    return res.status(200).json({ message: "Mensagem recebida!" });
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}