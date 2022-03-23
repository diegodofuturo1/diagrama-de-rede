function Board(props) {

    const style = {
        main: {
            width: '100px',
            height: '100px',
            margin: '0px 20px',
            padding: '0px',
        },
        row: {
            margin: '0px',
            padding: '0px',
            display: 'flex',
            
        },
        content: {
            border: '1px solid black',
            margin: '0px',
            padding: '0px',
            height: '50px',
            textAlign: 'center',
            fontSize: '1.5em'
            
        },
        div: {
            border: '1px solid black',
            margin: '0px',
            padding: '0px',
            width: '25px',
            textAlign: 'center'
            
        },
        divcenter: {
            border: '1px solid black',
            margin: '0px',
            padding: '0px',
            width: '50px'
        }
    }


    return <div style={style.main}>
        <div style={style.row}>
            <div className="s1" style={style.div}>{props.initial}</div>
            <div className="s2" style={style.divcenter}></div>
            <div className="s3" style={style.div}>{props.final}</div>
        </div>
        
        <div style={style.content}>
            {props.description}
        </div>

        <div style={style.row}>
            <div className="s4" style={style.div}>{props.id}</div>
            <div className="s5" style={style.divcenter}>{props.resource}</div>
            <div className="s6" style={style.div}>{props.days}</div>
        </div>
    </div>
}

export default Board