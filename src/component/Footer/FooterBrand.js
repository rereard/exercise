import BrandImage from "../Atom/BrandImage"
const FooterBrand = () => {
    return(
        <div className="col-md-2 d-flex flex-items-center">
            <BrandImage/>
            <span className="fs-6 text-white-50">© 2022 GitHub, Inc.</span>
        </div>
    )
}
export default FooterBrand