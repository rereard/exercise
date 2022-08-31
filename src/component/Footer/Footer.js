import FooterBrand from "./Footer-Brand.js"
import FooterLinks from "./Footer-Links.js"
const Footer = () => {
    return (
        <footer class="container text-white pb-4 border-top border-dark">
            <div className="row mt-2">
                <FooterBrand/>
                <FooterLinks/>                
            </div>
        </footer>
    )
}
export default Footer