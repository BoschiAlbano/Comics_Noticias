import algoliasearch from "algoliasearch/lite"

const _App_ID = process.env.App_ID
const _API_KEY = process.env.API_KEY

const client = algoliasearch(_App_ID, _API_KEY)
const index = client.initIndex('Prod_Comics')

const CACHE = {}

const SearchTitle =  async (query) => {

    console.log(query)

    if (CACHE[query]) return { results: CACHE[query]}

    const { hits } = await index.search(query, {
        attributesToRetrieve: ['id','title']
    })

    CACHE[query] = hits

    return { results: hits }
}

export default SearchTitle