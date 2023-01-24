import {incrementByAmount} from '../../store/actions/textDataHandler'
import { useAppSelector, useAppDispatch } from '../../hooks'
//scss
import '../../scss/navigationBar.scss'
//assets
import logo from '../../assets/img/logo/logo-3.jpg'
//models
import { HiddenUlInputArary } from '../../models/models';
//components
import HiddenUl from './HiddenUl'
import LanguageButton from './languageButton';
//--------------------------------
function NavigationBar() {
    console.log(typeof(logo))
    console.log(logo)
    //-----
    const lang = useAppSelector(state => state.lang.value)
    const dispatch = useAppDispatch()
    //-----
    const JSON_Text = require( `../../textData/siteTextData${lang}.json`)
    const JSON_Text_NavigationBar = JSON_Text.NavigationBar
    // console.log(JSON_Text)
    const HiddenUlinputObj: HiddenUlInputArary = {
        mainName: JSON_Text_NavigationBar.h2_screenshots,
        value: [
            {
                name: JSON_Text_NavigationBar.name_sites,
                src: '/sites'
            },
            {
                name: JSON_Text_NavigationBar.name_photos,
                src: '/photos'
            }
        ]
    }
    return (
        <nav className='navigation-bar'>
            <div className='navigation-bar__work-space'>
                <img className='navigation-bar__logo' src={logo}></img>
                {/* <h2 className="navigation-bar__h2">Pripyat</h2> */}
                <ul className='navigation-bar__ul'>
                    <li className='navigation-bar__li'>
                        <a className='navigation-bar__a' href="/#/about">
                            <h2 className='navigation-bar__h2'>{JSON_Text_NavigationBar.h2_about}</h2>
                        </a>
                    </li>
                    <li className='navigation-bar__li'>
                        <HiddenUl {...HiddenUlinputObj} />
                    </li>
                    <li className='navigation-bar__li'>
                        <a className='navigation-bar__a' href='/Contact'>
                            <h2 className='navigation-bar__h2'>{JSON_Text_NavigationBar.h2_contacts}</h2>
                        </a>
                    </li>
                    <li className='navigation-bar__li'>
                    <LanguageButton />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar