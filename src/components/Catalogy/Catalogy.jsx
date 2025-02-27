import s from './Catalogy.module.css'
import BlueBtn from '../BlueBtn/BlueBtn';
import GrayBtn from '../GrayBtn/GrayBtn';
import Card from './Card/Card';

export default function Catalogy(){
    return(
      <div className={s.catalogWrapper}> {}
        <div className="container">
          <div className={s.catalogy}>
            <h1>Каталог товаров</h1>

            <div className={s.Categories}>
              <h2>Категории: </h2>
              <br />
              <BlueBtn text="Все товары" /> {}
              <GrayBtn text="Шины/колеса" /> {}
              <GrayBtn text="Масла" /> {}
              <GrayBtn text="Ароматизаторы" /> {}
            </div>

            <div className={s.cards}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
          </div>
        </div>
      </div>
    )
}

