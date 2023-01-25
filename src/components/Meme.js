import '../css/Meme.css'
import {useEffect, useState} from "react";
import fetchData from "../network/FetchData";

export default function Meme() {

    const [memeData, setMemeData] = useState()

    useEffect(() => {
        const getDataFromApi = async () => {
            const data = await fetchData('get_memes')
            if (data.success) {
                setMemeData(data.data.memes[0].name)
            }
        }
        getDataFromApi();
    }, [])

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