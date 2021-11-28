import s from "./NavNavigation.module.css";
import * as api from "../../services/api";

export default function NavNavigation() {
  const name = "tech";
  return (
    <div className={s.container}>
      <button className={s.buttonCurrency}>
        <span className={s.span}></span>
        <span className={s.spanVector}></span>
      </button>
      <button className={s.buttonCart}>
        <span className={s.spanCart}></span>
        <span className={s.spanCartQuantity}></span>
      </button>
      <div className={s.containerQuantity}>
        <span className={s.spanCartQuantity}>2</span>
      </div>
      <ul className={s.list}>
        {api.apiPricesCurrency().map((prices) => (
          <li className={s.item}>
            <p className={s.text}>{prices}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
