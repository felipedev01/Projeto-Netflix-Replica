const API_KEY = 'de1ec00c499ccad247802d2ca58aba55'
const API_BASE= 'https://api.themoviedb.org/3'


const basicFecth = async (endpoint) => {
   
    const req = await fecth( '${API_BASE}${endpoint}')
    const json =await req.json()
    return json  

} 



export default{

    getHomeList: async () => {
        return [
        
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: []
        },
        {
            slug: 'trending',
            title: 'Recomendados para você',
            items: []
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: []
        },
        {
            slug: 'action',
            title: 'ação',
            items: []
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: []
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: []
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: []
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            items: []
        }

        ]
    }
}