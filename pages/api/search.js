// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Search from "../../services/search"

export default async function handler(req, res) {

  const {query: {q = ''}} = req

  const resultados = await Search(q)

  return res.status(200).json(resultados)
}

// http://localhost:3000/api/search?q=al