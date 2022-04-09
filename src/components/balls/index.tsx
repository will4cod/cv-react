import './style.css'

interface color{
    color: string;
}

function Ball(props:color){

    console.log(props.color)
    let colorcss = props.color === 'green' ? "ball full" : "ball";

    return(
        <div className={colorcss}></div>
    )
}

export default Ball;