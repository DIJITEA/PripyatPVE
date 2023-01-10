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
//--------------------------------
function NavigationBar() {
    //-----
    const lang = useAppSelector(state => state.lang.value)
    const dispatch = useAppDispatch()
    //-----
    let JSON_Text = require( `../../textData/siteTextData${lang}.json`)
    const azaza = JSON_Text.NavigationBar
    console.log(JSON_Text)
    const HiddenUlinputObj: HiddenUlInputArary = {
        mainName: JSON_Text.NavigationBar.h2_screenshots,
        value: [
            {
                name: 'Sites',
                href: '/sites'
            },
            {
                name: 'Photos',
                href: '/photos'
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
                            <h2 className='navigation-bar__h2'>{JSON_Text.NavigationBar.h2_about}</h2>
                        </a>
                    </li>
                    <li className='navigation-bar__li'>
                        <HiddenUl {...HiddenUlinputObj} />
                    </li>
                    <li className='navigation-bar__li'>
                        <a className='navigation-bar__a' href='/Contact'>
                            <h2 className='navigation-bar__h2'>{azaza.h2_contacts}</h2>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar