import AppLogo from '../assets/Troll-Face.png'
import '../css/Header.css'

export default function Header() {
    return (<header className={'header'}>
            <img src={AppLogo} alt="app-logo" height={'48px'} width={'48px'}/>
            <h2 className={'header-name'}>Meme Generator</h2>
        </header>)

}