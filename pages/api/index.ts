import { GoogleSpreadsheet } from "google-spreadsheet";
import credentials from "../../credentials/google-sheets-api.json";

export default async function handler(req, res) {
  const { name, email, phone } = JSON.parse(req.body);

  const doc = new GoogleSpreadsheet(
    "1lh3clShhMk4pU09iFk_olM7ELDTJM9E07_DViCpv0Yo"
  );

  await doc.useServiceAccountAuth({
    client_email: credentials.client_email,
    private_key: credentials.private_key,
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];

  try {
    await sheet.addRow({
      nome: name,
      email,
      telefone: phone,
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(401).json({ error, ok: false });
  }
}
