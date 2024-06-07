import styles from "./advice.module.scss";
import { getSelectedLanguage } from "../../helpers/functions/getLanguagesTitle/getSelectedLanguage";
import { AdviceProps } from "./Advice.props";
import getAdviceTextBuLanguage from "../../helpers/functions/getLanguagesTitle/getAdviceTextBuLanguage";

function Advice({ dish }: AdviceProps) {
    const selectedLanguage = getSelectedLanguage()
    return (
        <>
            <div style={{ display: `${dish.advice_ru || dish.advice_kg || dish.advice_tu || dish.advice_en === '' ? 'block' : 'none'}` }} className={styles.adviceMain}>
                <div className={styles.adviceContainer}>
                    <div className={styles.advice}>
                        <div className={styles.adviceTitleContainer}>
                            {selectedLanguage === "Русский" ? (
                                <span>Полезные советы:</span>
                            ) : selectedLanguage === "English" ? (
                                <span>Useful tips:</span>
                            ) : selectedLanguage === "Türkçe" ? (
                                <span>Faydalı ipuçları:</span>
                            ) : selectedLanguage === "Кыргызча" ? (
                                <span>Пайдалуу кеңештер:</span>
                            ) : null}
                            <p>{getAdviceTextBuLanguage(dish)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Advice;
