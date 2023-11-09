import searchSpreadVideo from "../search-spread.mp4";
import searchSpreadAspReactVideo from "../search-spread-asp-react.mkv";

const SearchSpread = () => {
    return (
        <div className=" d-flex flex-column justify-content-center align-items-center">
            <video controls className="container p-3">
                <source src={searchSpreadVideo} type="video/mp4" />
            </video>
            <video controls className="container p-3">
                <source src={searchSpreadAspReactVideo} type="video/mp4" />
            </video>
        </div>
    );
};

export default SearchSpread;