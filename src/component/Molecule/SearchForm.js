import Button from "../Atom/Button"
import InputText from "../Atom/InputText"
const SearchForm = () => {
    return(
        <form className="d-flex align-items-start" role="search">
            <InputText type="search" placeholder="Search or jump to" addStyle="me-2"/>
            <Button title=" / " addStyle="btn-outline-secondary"/>
        </form>
    )
}
export default SearchForm