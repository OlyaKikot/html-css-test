import s from "../Category/Category.module.css";
import Product from "../Products/Products";
// import products from "../products.json";
import * as api from "../../services/api";

export default function Category() {
  const name = "tech";
  return (
    <>
      <h1 className={s.title}>Category name</h1>

      <ul className={s.list}>
        {api.apiProductsByCategory(name).map((product) => (
          <li className={s.item}>
            <Product key={product.id} product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
