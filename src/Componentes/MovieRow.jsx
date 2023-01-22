import styles from './MovieRow.module.css'

export function MovieRow({title, items}){

    return(
        <div>
            <h2>
                {title}
            </h2>
            <div className="movieRow--listarea">
                {items.results.length > 0 && items.results.map((item, key)=>(
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}></img>
                ))
                
                }
            </div>
        </div>
    )

}