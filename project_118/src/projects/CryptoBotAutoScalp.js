import image from "../images/3.png";

const CryptoBotAutoScalp = () => {
    return (
        <div className="container ">
            <div className="d-flex flex-column gap-3">
                <a href="https://github.com/VLola/BinanceAutoScalp">GitHub</a>
                <div>
                    Using libraries:
                    <ul>
                        <li>Binance.Net</li>
                        <li>Newtonsoft.Json</li>
                        <li>ScottPlot.WPF</li>
                    </ul>
                </div>
                <div>
                    At the heart of crypto scalping lies the idea of capitalizing on minor price fluctuations in the volatile cryptocurrency market to achieve small profits. 
                </div>
                <div>
                    This short-term trading strategy entails purchasing at the bid price and selling at the asking price, enabling traders to benefit from market prices even when orders and sales are not modified.
                </div>
                <img className="container" src={image} />
            </div>
        </div>
    );
};

export default CryptoBotAutoScalp;