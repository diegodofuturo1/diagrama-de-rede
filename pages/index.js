import Board from "../component/Board";
import Display from "../component/Display";

function Home() {
    const board = {
        initial: '1',
        final: '3',
        days: '2',
        id: '1',
        description: 'A'
    }
    return <div style={{ margin: '10% 10%'}}>
        <Display boards={[board, board]} />
    </div>
}

export default Home;
