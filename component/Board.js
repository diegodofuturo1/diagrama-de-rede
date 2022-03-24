function Board(props) {

    const style = {
        main: {
            width: '200px',
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
            width: '50ox',
            textAlign: 'center',
            
        },
        divcenter: {
            border: '1px solid black',
            margin: '0px',
            padding: '0px',
            width: '100px',
            textAlign: 'center',
        }
    }


    return <div style={style.main}>
        <div style={style.row}>
            <div style={style.div}>{props.initial}</div>
            <div style={style.divcenter}></div>
            <div style={style.div}>{props.final}</div>
        </div>
        
        <div style={style.content}>
            {props.description}
        </div>

        <div style={style.row}>
            <div style={style.div}>{props.id}</div>
            <div style={style.divcenter}>{props.resource[0]}</div>
            <div style={style.div}>{props.days}</div>
        </div>
    </div>
}

export default Board