import image from "../images/4.png";

const CryptoBotAlgoShotVer1 = () => {
    return (
        <div className="container ">
            <div className="d-flex flex-column gap-3">
                <a href="https://github.com/VLola/BinanceShot">GitHub</a>
                <div>
                    Using libraries:
                    <ul>
                        <li>Dapper</li>
                        <li>Binance.Net</li>
                        <li>Newtonsoft.Json</li>
                        <li>ScottPlot.WPF</li>
                    </ul>
                </div>
                <div>
                    This algorithm is designed and intended for its users to profit from sudden price movements, which are usually triggered by actions performed by either one person or a group of persons holding a significant amount of a particular asset, working together in an organized manner, throwing the asset into the market at a market price at a single time. You will be able to see sudden spikes or dips on the chart while the overall trend continues in accordance with the established trend.
                </div>
                <img className="container" src={image} />
            </div>
        </div>
    );
};

export default CryptoBotAlgoShotVer1;