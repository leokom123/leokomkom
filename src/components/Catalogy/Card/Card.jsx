import card from '../../../img/Rectangle3.png'
import s from './Card.module.css'
import BlueBtn from '../../BlueBtn/BlueBtn';

export default function Card(){
    return(
           
            <div className={s.Card}>
                <img src={card} alt="" />

                <p>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>

                <div className={s.price}>
                    <h2>355P.</h2>
                    <BlueBtn text="Добавить в корзину" /> {}
                </div>
                </div>
           
    )
}
