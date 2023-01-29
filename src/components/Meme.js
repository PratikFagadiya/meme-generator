import '../css/Meme.css'
import {useEffect, useState} from "react";
import fetchData from "../network/FetchData";
import MemeImage from "./MemeImage";
import React from "react";

export default function Meme() {

    const [memeData, setMemeData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [showResult, setShowResult] = useState(false)

    const [singleMemeModel, setSingleMemeModel] = React.useState()

    useEffect(() => {
        const getDataFromApi = async () => {
            try {
                const data = await fetchData('get_memes')
                if (data.success) {
                    setMemeData(data.data.memes)
                    setError(null)
                }
            } catch (e) {
                setMemeData(null)
                setError(e.message)
            } finally {
                setLoading(false)
            }

        }
        getDataFromApi();
        // setTimeout(() => {
        //     setLoading(false)
        // },2000)

    }, [])


    const submitButtonClicked = event => {
        // event.preventDefault()  // Use this when you clicked from form tag
        // singleMemeModel =
        setSingleMemeModel(memeData[Math.floor(Math.random() * memeData.length)])
        console.log(singleMemeModel)
        setShowResult(true)
    }


    return (<main>

        <div className={'form'}>

            <section className={'inputs'}>
                <input className={'form-input'} type={"text"} placeholder={'Top Text'}/>
                <input className={'form-input'} type={"text"} placeholder={'Bottom Text'}/>
            </section>

            <button className={'button-submit'} onClick={submitButtonClicked}>Get a new meme image</button>

        </div>

        {loading && <span>Generating Memes for you... </span>}
        {error && <span>`There is a problem ${error}`</span>}

        {showResult &&
            <div>
                <MemeImage
                    bottomText={'World'}
                    topText={'Hello'}
                    url={singleMemeModel.url}/>
            </div>
        }

    </main>)


}