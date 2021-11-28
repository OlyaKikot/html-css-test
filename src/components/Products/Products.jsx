import s from "../Products/Products.module.css";

export default function Product({ product }) {
  return (
    <>
      <img className={s.img} alt="111" src={product.gallery[0]} />
      <h2 className={s.title}>{product.name}</h2>
      <span className={s.textMain}>{product.prices[0].currency}</span>
      <span className={s.text}>{product.prices[0].amount}</span>
      <button className={s.button}>
        <span className={s.svg}></span>
      </button>
    </>
  );
}
