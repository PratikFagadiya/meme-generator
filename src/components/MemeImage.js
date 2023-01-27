export default function MemeImage(props) {

    console.log(props.url)

    return (<div>

        {/*<img src={props.url} alt={'Meme Image'} />*/}

        <span>{props.url}</span>

    </div>)
}