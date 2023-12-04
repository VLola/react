const CryptoBotAlgoSMABollinger = () => {
    return (
        <div className="container ">
            <div className="d-flex flex-column gap-3">
                <a href="https://github.com/VLola/BinanceAlgorithmScottPlot">GitHub</a>
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
                    <div>
                        Cryptocurrency bot for binance futures is a program with indicators, the program makes automatic transactions, if market conditions correspond to the established parameters.
                    </div>
                    <div>
                        The trading bot works according to a certain strategy. The strategy is integrated into the program for automatic execution.
                    </div>
                </div>
                <div>
                    <div>
                        The program receives data from the exchange and displays candles on the chart, forms indicators from the drawn chart (SMA, BOLINGER).
                    </div>
                    <div>
                        Opens and closes orders on the exchange according to the assigned strategy.
                    </div>
                </div>
                <img className="container" src="https://raw.githubusercontent.com/VLola/BinanceAlgorithmScottPlot/master/BinanceAlgorithmScottPlot/Resources/Images/Logo.png" />
            </div>
        </div>
    );
};

export default CryptoBotAlgoSMABollinger;