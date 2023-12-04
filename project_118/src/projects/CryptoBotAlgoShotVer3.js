import image10 from "../images/10.jpg";
import image11 from "../images/11.jpg";
import image12 from "../images/12.jpg";
import image13 from "../images/13.png";

const CryptoBotAlgoShotVer3 = () => {
    return (
        <div className="container ">
            <div className="d-flex flex-column gap-3">
                <a href="https://github.com/VLola/VolumeShot">GitHub</a>
                <div>
                    Using libraries:
                    <ul>
                        <li>Binance.Net</li>
                        <li>ScottPlot.WPF</li>
                    </ul>
                </div>
                <div>
                    This algorithm is designed and intended for its users to profit from sudden price movements, which are usually triggered by actions performed by either one person or a group of persons holding a significant amount of a particular asset, working together in an organized manner, throwing the asset into the market at a market price at a single time. You will be able to see sudden spikes or dips on the chart while the overall trend continues in accordance with the established trend.
                </div>
                <div>
                    This version of the bot differs from others in that it places orders depending on the volume.
                </div>
                <img className="container" src={image13} />
                <img className="container" src={image11} />
                <img className="container" src={image12} />
                <img className="container" src={image10} />
            </div>
        </div>
    );
};

export default CryptoBotAlgoShotVer3;