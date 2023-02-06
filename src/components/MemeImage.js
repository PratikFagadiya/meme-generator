import '../css/MemeImage.css'

export default function MemeImage(props) {

    // console.log(`${props.height}  ${props.width}`)

    return (<div className={'meme--main'}>

        <h2 className={'top-text'}>{props.topText}</h2>
        <img src={props.url} alt={'Meme Image'} height={props.height} width={props.width}/>
        <h2 className={'bottom-text'}>{props.bottomText}</h2>

    </div>)
}