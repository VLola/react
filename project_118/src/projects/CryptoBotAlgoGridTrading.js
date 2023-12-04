import image from "../images/2.png";
import video from "../videos/27.06.2022.mp4";

const CryptoBotAlgoGridTrading = () => {
    return (
        <div className="container ">
            <div className="d-flex flex-column gap-3">
                <a href="https://github.com/VLola/BinanceAlgorithmLight">GitHub</a>
                <div>
                    Using libraries:
                    <ul>
                        <li>EntityFramework</li>
                        <li>Binance.Net</li>
                        <li>Newtonsoft.Json</li>
                        <li>ScottPlot.WPF</li>
                    </ul>
                </div>
                <div>
                    Grid trading automates the buying and selling of futures contracts by placing orders at preset intervals within a configured price range.
                </div>
                <img className="container" src={image} />
                <video controls className="container p-3">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default CryptoBotAlgoGridTrading;