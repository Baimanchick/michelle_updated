import "../styles/tea.scss";
import SmuziSquaer from "../components/SmuziSquare/SmuziSquare";
import { getSelectedLanguage } from "../helpers/functions/getLanguagesTitle/getSelectedLanguage";
import ArrowLeft from "../components/Arrow/ArrowLeft";
import SliderMenu from "../components/SliderMenu/SliderMenu";

function SmuziPage() {
    const selectedLanguage = getSelectedLanguage()

    return (
        <>
            <div className="menu-main-content">
                <ArrowLeft />
                <SliderMenu />
                {selectedLanguage === "Русский" ? (
                    <div className="tea-main">
                        <header className="tea-header">
                            <div className="tea-header-title">
                                <h2>СМУЗИ-ПАЗЛ</h2>
                                <span>Основа на выбор</span>
                            </div>
                        </header>
                        <div className="smuzi-main">
                            <SmuziSquaer
                                title={"Йогурт"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Яблочный фреш"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Молоко"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Морковный фреш"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Вода"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Яблочно-морковный фреш"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Сок Gracio в ассортименте"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <header className="tea-header">
                                <div className="tea-header-title">
                                    <span>Добавить в свой смузи:</span>
                                </div>
                            </header>
                            <SmuziSquaer
                                title={"Шпинат"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Огурец"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Мята"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Айсберг салат"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Лимон"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Яблоко"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Киви"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Клубника"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Малина"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Смородина"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Банан"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            {/*  */}
                            <div className="smuzi-s-main">
                                <div className="smuzi-s-container">
                                    <div className="smuzi-s">
                                        <div className="smuzi-wrapper-left">
                                            <div>Стоимость на воде:</div>
                                            <div>На любой другой основе:</div>
                                            <div>Объём:</div>
                                        </div>
                                        <div className="smuzi-wrapper-right">
                                            <div>210 c</div>
                                            <div>260 c</div>
                                            <span>300 мл</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    </div>
                ) : selectedLanguage === "English" ? (
                    <div className="tea-main">
                        <header className="tea-header">
                            <div className="tea-header-title">
                                <h2>SMOTHY PUZZLE</h2>
                            </div>
                        </header>
                        <div className="smuzi-main">
                            <SmuziSquaer
                                title={"Yogurt"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Fresh apple juice"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Milk"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Fresh carrot juice"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Water"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Fresh apple-carrot juice"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Gracio juice"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <header className="tea-header">
                                <div className="tea-header-title">
                                    <span>Add to the smoothie:</span>
                                </div>
                            </header>
                            <SmuziSquaer
                                title={"Spinach"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Cucumber"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Mint"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Iceberg lettuce"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Lemon"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Apple"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Kiw"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Strawberry"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Raspberry"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Blackcurrant"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Banana"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            {/*  */}
                            <div className="smuzi-s-main">
                                <div className="smuzi-s-container">
                                    <div className="smuzi-s">
                                        <div className="smuzi-wrapper-left">
                                            <div>Cost with water:</div>
                                            <div>Cost with any other base:</div>
                                            <div>Volume:</div>
                                        </div>
                                        <div className="smuzi-wrapper-right">
                                            <div>210 KGS</div>
                                            <div>260 KGS</div>
                                            <span>300 ml</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    </div>
                ) : selectedLanguage === "Türkçe" ? (
                    <div className="tea-main">
                        <header className="tea-header">
                            <div className="tea-header-title">
                                <h2>SMOOTHIE-PUZZLE</h2>
                            </div>
                        </header>
                        <div className="smuzi-main">
                            <SmuziSquaer
                                title={"Yoğurt"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Elmalı fresh"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Süt"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Havuçlu fresh"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Su"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Elma-havuçlu fresh"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Gracio meyve suyu çeşítí"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <header className="tea-header">
                                <div className="tea-header-title">
                                    <span>Smoothie'ye ekle:</span>
                                </div>
                            </header>
                            <SmuziSquaer
                                title={"Ispanak"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Salatalık"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Nane"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Marul"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Límon"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Elma"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Kíví"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Çílek"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Ahududu"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Frenk üzümü"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Muz"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            {/*  */}
                            <div className="smuzi-s-main">
                                <div className="smuzi-s-container">
                                    <div className="smuzi-s">
                                        <div className="smuzi-wrapper-left">
                                            <div>Su ile maliyet:</div>
                                            <div>Başka herhangi bir tabanla maliyet:</div>
                                            <div>Hacim:</div>
                                        </div>
                                        <div className="smuzi-wrapper-right">
                                            <div>210 KGS</div>
                                            <div>260 KGS</div>
                                            <span>300 ml</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    </div>
                ) : selectedLanguage === "Кыргызча" ? (
                    <div className="tea-main">
                        <header className="tea-header">
                            <div className="tea-header-title">
                                <h2>СМУЗИ-ПАЗЛ</h2>
                                <span>Негизин тандаса болот</span>
                            </div>
                        </header>
                        <div className="smuzi-main">
                            <SmuziSquaer
                                title={"Йогурт"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Алма фреши"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Сүт"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Сабиз фреши"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Суу"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Алма-сабиз фреши"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <SmuziSquaer
                                title={"Gracio ширеси ассортиментте"}
                                style={{ backgroundColor: "#FBCB001A" }}
                            />
                            <header className="tea-header">
                                <div className="tea-header-title">
                                    <span>Смузиңизге кошсоңуз болот:</span>
                                </div>
                            </header>
                            <SmuziSquaer
                                title={"Шпинат"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Бадыраң"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Жалбыз"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Айсберг салаты"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Лимон"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Алма"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Киви"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Кулпунай"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Дан куурай"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Карагат"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            <SmuziSquaer
                                title={"Банан"}
                                style={{ backgroundColor: "#FFF" }}
                            />
                            {/*  */}
                            <div className="smuzi-s-main">
                                <div className="smuzi-s-container">
                                    <div className="smuzi-s">
                                        <div className="smuzi-wrapper-left">
                                            <div>Суунун баасы:</div>
                                            <div>Башка негизде:</div>
                                            <div>Объём:</div>
                                        </div>
                                        <div className="smuzi-wrapper-right">
                                            <div>210 c</div>
                                            <div>260 c</div>
                                            <span>300 мл</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
}

export default SmuziPage;
