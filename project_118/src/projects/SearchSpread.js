import searchSpreadVideo from "../search-spread.mp4";
import searchSpreadAspReactVideo from "../search-spread-asp-react.mkv";

const SearchSpread = () => {
    return (
        <div className=" container d-flex flex-column">
            <div>
                Using libraries:
                <ul>
                    <li>Telegram.Bot</li>
                    <li>Binance.Net</li>
                    <li>Bitfinex.Net</li>
                    <li>Bittrex.Net</li>
                    <li>Bybit.Net</li>
                    <li>CoinEx.Net</li>
                    <li>Huobi.Net</li>
                    <li>KrakenExchange.Net</li>
                    <li>Kucoin.Net</li>
                </ul>
            </div>
            <video controls className="container p-3">
                <source src={searchSpreadVideo} type="video/mp4" />
            </video>
            <div>
                Using libraries:
                <ul>
                    Asp Net Web API:
                    <li>FirebaseDatabase.net</li>
                    <li>BCrypt.Net-Next</li>
                    <li>Newtonsoft.Json</li>
                    <li>JwtBearer</li>
                    <li>GZipStream</li>
                </ul>
                <ul>
                    Server:
                    <li>FirebaseDatabase.net</li>
                    <li>Telegram.Bot</li>
                    <li>GZipStream</li>
                </ul>
                <ul>
                    Client (React):
                    <li>bootstrap</li>
                    <li>paco</li>
                    <li>react-super-responsive-table</li>
                </ul>
            </div>
            <video controls className="container p-3">
                <source src={searchSpreadAspReactVideo} type="video/mp4" />
            </video>
        </div>
    );
};

export default SearchSpread;