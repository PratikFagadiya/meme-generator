import '../css/MemeImage.css'

export default function MemeImage(props) {

    console.log(props.url)

    return (<div className={'meme--main'}>

        <h2 className={'top-text'}>{props.topText}</h2>
        <img src={props.url} alt={'Meme Image'}/>
        <h2 className={'bottom-text'}>{props.bottomText}</h2>

    </div>)
}