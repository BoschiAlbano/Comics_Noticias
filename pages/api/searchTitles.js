import searchTitle from '../../services/searchTitle';

export default async function handler(req, res) {
    try {
        const {
            query: { q = '' },
        } = req;

        const resultados = await searchTitle(q);

        const respuesta = await resultados.results.map((x) => {
            return { id: x.id, title: x.title };
        });

        return res.status(200).json(respuesta);
    } catch (e) {
        return res.status(500).json(e);
    }
}
