import Board from './Board.js'

function Display(props) {
    return <div style={{ display: 'flex' }}>
        {props.boards.map(board => <Board {...board} />)}
    </div>
}

export default Display;
