export default function Card({image,title, description}){
    return(
        <div className="card">
            <img className="img"src={image} alt="" />
            <div className="card-body">
                <h2 className="card-item">{title}</h2>
                <p className="card-item">{description}</p>
            </div>
        </div>
    )
}