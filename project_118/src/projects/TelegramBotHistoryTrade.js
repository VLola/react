import image from "../images/5.png";

const TelegramBotHistoryTrade = () => {
    return (
        <div className="container ">
            <div className="d-flex flex-column gap-3">
                <a href="https://github.com/VLola/HistoryTrade">GitHub</a>
                <div>
                    Using libraries:
                    <ul>
                        <li>Telegram.Bot</li>
                        <li>WTelegramClient</li>
                        <li>Newtonsoft.Json</li>
                    </ul>
                </div>
                <div>
                    A bot that monitors telegram messages from Moontrader about transactions on Binance.
                </div>
                <div>
                    Writes them into a table and sends a report via telegram message.
                </div>
                <img className=" rounded mx-auto d-block" src={image} />
            </div>
        </div>
    );
};

export default TelegramBotHistoryTrade;