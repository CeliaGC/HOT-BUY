import './Footer.css'
import facebook from '../../src/assets/img/social/facebook.png'
import instagram from '../../src/assets/img/social/instagram.png'
import twitter from '../../src/assets/img/social/twitter.png'

export default function Footer(){
    return (
        <div id="social">
            <h2>Síguenos</h2>
                <a title="facebook" href="" target="_blank"><img src={facebook} alt="facebook"/></a>
                <a title="instagram" href="" target="_blank"><img src={instagram} lt="instagram"/></a>
                <a title="linkedin" href="" target="_blank"><img src={twitter} alt="twitter"/></a>
            <p>©Copyright <strong>Hot Buy</strong> - Todos los derechos reservados</p>
        </div>
    )
}