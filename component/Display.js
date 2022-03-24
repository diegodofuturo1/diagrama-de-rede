import service from '../database/service.js';
import Board from './Board.js'

function Display(props) {

    const tasks = service.task.list()

    return <div style={{ display: 'flex' }}>
        {tasks.map(task => <Board {...task} />)}
    </div>
}

export default Display;
