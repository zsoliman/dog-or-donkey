const Startgame = ({ play }) => {
    return (
        <div className="startgame">
            <button
                onClick={play}
                className="button">PLAY</button>
        </div>
    )
}

export default Startgame;