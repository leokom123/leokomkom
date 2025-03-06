import card from '../../../img/Rectangle3.png'
import s from './Card.module.css'
import BlueBtn from '../../BlueBtn/BlueBtn';

export default function Card(props){
    return(
           
            <div className={s.Card}>
                <img src={card} alt="" />

                <p>{props.name}</p>

                <div className={s.price}>
                    <h2>{props.price} P</h2>
                    <BlueBtn text="Добавить в корзину" /> {}
                </div>
                </div>
           
    )
}
