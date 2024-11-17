import { Button } from "react-bootstrap";
import { IoMdTrash } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseItemCount,
  removeFromCart,
  increaseItemCount,
} from "../../redux/slices/basketSlice";
import "./Cart.scss";

function Cart() {
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeFromCart({ id }));
  };
  const handleDecreaseCount = (id) => {
    dispatch(decreaseItemCount({ id }));
  };
  const handleIncreaseCount = (id) => {
    dispatch(increaseItemCount({ id }));
  };

  const carts = useSelector((store) => store.carts.items);

  const totalPrice = useSelector((store) => store.carts.totalPrice);
  console.log(totalPrice);

  return (
    <>
      <div className="container-fluid my-5 cart-item-container">
        <div className="container p-2">
          <div className="row d-flex justify-content-center align-items-start">
            <div className="col-lg-10 carts-column col-md-12 col-sm-12 d-flex flex-wrap  column-gap-2 justify-content-center">
              {carts?.length > 0 ? (
                carts.map((item) => (
                  <div
                    className="d-flex align-items-center text-center col-lg-4 col-md-8 col-sm-12 cart-item flex-column gap-3 3 border rounded mb-4"
                    key={item.id}
                  >
                    <div>
                      <img
                        src={item.thumbnail}
                        alt="PRE-WORKOUT SUPREME"
                        width={200}
                        height={200}
                        className="object-fit-contain"
                      />
                    </div>
                    <div className="">
                      <div className="fw-semibold">{item.title}</div>
                      <div className="small text-muted">{item.price}Tl</div>
                    </div>
                    <div className="d-flex flex-column align-items-end gap-2 text-center">
                      <div className="d-flex align-items-center border rounded">
                        <Button
                          variant="light"
                          onClick={() => handleDecreaseCount(item.id)}
                          size="sm"
                          aria-label="Decrease quantity"
                        >
                          -
                        </Button>
                        <span
                          className="px-3 py-1 text-center"
                          style={{ minWidth: "3rem" }}
                        >
                          {item.count}
                        </span>
                        <Button
                          variant="light"
                          size="sm"
                          onClick={() => handleIncreaseCount(item.id)}
                          aria-label="Increase quantity"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center text-center">
                      <Button
                        variant="danger"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                      >
                        <IoMdTrash />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center my-5 shadow-lg">
                  Sepetinize Ürün Eklemediniz
                </div>
              )}
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="d-flex align-items-center text-center justify-content-between total-price-content p-3 bg-light rounded">
                <div className="fw-semibold text-center">
                  TOPLAM {totalPrice} Tl
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
