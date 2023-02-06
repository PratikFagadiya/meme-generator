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

    const [singleMemeModel, setSingleMemeModel] = React.useState({
        topText: "", bottomText: "", url: "", height: 0, width: 0
    })

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

        // let randomMeme = memeData[Math.floor(Math.random() * memeData.length)]
        // setSingleMemeModel(randomMeme)
        // console.log(singleMemeModel)

        setShowResult(true)
    }

    // console.log(`Log is ${singleMemeModel}`)

    const handleInputChange = event => {

        setSingleMemeModel({
            ...singleMemeModel, [event.target.name]: event.target.value
        })
    }


    return (<main>

        <div className={'form'}>

            <section className={'inputs'}>

                <input className={'form-input'} type={"text"} placeholder={'Top Text'} onChange={handleInputChange}
                       name={singleMemeModel.topText}/>

                <input className={'form-input'} type={"text"} placeholder={'Bottom Text'} onChange={handleInputChange}
                       value={singleMemeModel.bottomText}
                       name={singleMemeModel.bottomText}/>

            </section>

            <button className={'button-submit'} onClick={submitButtonClicked}>Get a new meme image</button>

        </div>

        {loading && <span>Generating Memes for you... </span>}
        {error && <span>`There is a problem ${error}`</span>}

        {showResult && <div>
            <MemeImage
                width={`${singleMemeModel.width}px`}
                height={`${singleMemeModel.height}px`}
                bottomText={singleMemeModel.bottomText}
                topText={singleMemeModel.topText}
                url={singleMemeModel.url}/>
        </div>}

    </main>)


}