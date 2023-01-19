export default function Videogame(props) {
    return (
        <div>
            <img src={props.background_image} alt="img" />
            <h3>{props.name}</h3>
            
        </div>
    )
}
