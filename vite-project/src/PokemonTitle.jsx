import "./Pokemon.css";

export default function PokemonTitle({titleContent}) {
    const i = titleContent.index;
    const n = titleContent.name;
    return (
        <div className="Title">
            <p className="Pokemon-Title">#{titleContent.index} {n}</p>
        </div>
    );
}
