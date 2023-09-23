import Game from "./Game";

const Startgame = ({ play }) => {
    return (
        <div className="startgame">
            <button
                onClick={play}
                className="button">PLAY</button>
            <Game play={play} />
        </div>
    )
}

export default Startgame;