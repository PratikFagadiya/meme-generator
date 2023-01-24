import '../css/Meme.css'

export default function Meme() {

    return (
        <main>
            <form className={'form'}>
                <section className={'inputs'}>
                    <input className={'form-input'} type={"text"} placeholder={'Top Text'}/>
                    <input className={'form-input'} type={"text"} placeholder={'Bottom Text'}/>
                </section>

                <button className={'button-submit'} onClick={submitButtonClicked}>Get a new meme image</button>

            </form>
        </main>
    )

    function submitButtonClicked() {
        console.log("I Was clicked")
    }

}

//https://api.imgflip.com/get_memes