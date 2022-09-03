import FooterBrand from "./FooterBrand.js"
import FooterLinks from "./FooterLinks.js"
const Footer = () => {
    return (
        <footer className="container text-white pb-4 border-top border-dark">
            <div className="row mt-2">
                <FooterBrand/>
                <FooterLinks/>                
            </div>
        </footer>
    )
}
export default Footer