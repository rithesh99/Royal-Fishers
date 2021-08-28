import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AdminProducts.css";
import { Modal } from "react-responsive-modal";
import ReactCrop from "react-image-crop";
import firebase from "firebase";
import { nanoid } from "nanoid";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      await firebase
        .firestore()
        .collection("products")
        .onSnapshot((snapshot) =>
          setProducts(snapshot.docs.map((doc) => doc.data()))
        );
    }
    fetchUsers();
    console.log(products);
  }, []);

  const [open, setOpen] = useState(false);

  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [original_price, setOriginalPrice] = useState(null);
  const [img, setImg] = useState(null);
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const [src, selectedFile] = useState(null);

  const handleFileChange = (e) => {
    selectedFile(URL.createObjectURL(e.target.files[0]));
  };
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const [crop, setCrop] = useState({ aspect: 1 / 1 });

  function getCroppedImg() {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    const base64Image = canvas.toDataURL("image/jpeg");
    setResult(base64Image);
    setImg(base64Image);
  }

  const onSubmit = (isUpdate) => {
    // event.preventDefault();
    var uid = isUpdate ? id : nanoid(10);
    firebase
      .firestore()
      .collection("products")
      .doc(uid)
      .set({
        id: uid,
        name: name,
        original_price: original_price,
        price: price,
        img: img,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        quantity: quantity,
      })
      .then(() => {
        setResult(null);
        setImage(null);
        selectedFile(null);
        setName(null);
        setOriginalPrice(null);
        setImg(null);
        setQuantity(null);
        setPrice(null);
        setId(null);
        onCloseModal();
      });
  };

  const onOpenModal = () => {
    setOpen(true);
    setIsAdd(true);
  };
  const onOpenModalForUpdate = (product) => {
    setOpen(true);
    setIsAdd(false);
    setResult(null);
    setImage(null);
    selectedFile(null);
    setName(product.name);
    setOriginalPrice(product.original_price);
    setImg(product.img);
    setQuantity(product.quantity);
    setPrice(product.price);
    setId(product.id);
  };
  const onCloseModal = () => setOpen(false);

  return (
    <div className="adminproducts bg-dark pt-4" style={{ minHeight: "100vh" }}>
      <h1 className="text-center text-white">All Products</h1>
      <div className="text-center mb-4">
        <Link to="/" className="badge badge-primary mr-2">
          Home
        </Link>
        <Link to="/admin/orders" className="badge badge-primary mr-2">
          Orders
        </Link>
        <Link to="/admin/products" className="badge badge-primary mr-2">
          Products
        </Link>
        <Link to="/admin/users" className="badge badge-primary">
          Users
        </Link>
      </div>
      <div className="text-center">
        <h6
          className="text-center text-primary btn btn-light ml-2"
          onClick={onOpenModal}
        >
          <b>Add Product +</b>
        </h6>
        <div>
          <Modal open={open} onClose={onCloseModal} center>
            <h2>Add a product</h2>

            <div className="signup__profile__pic">
              {src || !isAdd ? (
                <div className="addpost__image">
                  {src && (
                    <div className="addpost__src">
                      <div className="addpost__pic">
                        <ReactCrop
                          src={src}
                          onImageLoaded={setImage}
                          crop={crop}
                          onChange={setCrop}
                          className="addpost__photo"
                        />
                      </div>
                      <div className="addpost__crop">
                        <button
                          className="btn btn-block btn-warning"
                          onClick={getCroppedImg}
                        >
                          Crop Image
                        </button>
                      </div>
                    </div>
                  )}
                  {(result || !isAdd) && (
                    <div className="addpost__result text-center pb-2">
                      <h1>Selected image</h1>
                      <img src={img} alt="" className="addpost__photo" />
                      <div className=""></div>
                      <div className="m-3">
                        <h5>Name</h5>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <h5>Original Price</h5>
                        <input
                          type="text"
                          value={original_price}
                          onChange={(e) => setOriginalPrice(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <h5>Price</h5>
                        <input
                          type="text"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <h5>Quantity</h5>
                        <input
                          type="text"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>

                      <button
                        type="submit"
                        onClick={() => onSubmit(true)}
                        disabled={
                          (src && !result) ||
                          !name ||
                          !price ||
                          !original_price ||
                          !quantity
                        }
                        className="btn btn-block btn-primary"
                      >
                        {isAdd ? "Add" : "Update"}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="">
                  <div className="">
                    <div className="">
                      <input
                        type="file"
                        accept="/image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Modal>
        </div>
      </div>
      <div className="row w-100 pl-4">
        {products &&
          products.map((product, i) => {
            return (
              <div className="col-6 col-md-2 p-2">
                <div class="card text-center rounded mt-4" key={i}>
                  <img class="card-img-top" src={product.img} alt="Card cap" />
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">{product.name}</h5>
                    <p>{product.quantity}</p>
                    <p class="card-text font-weight-bold text-small">
                      ₹{" "}
                      <strike className="pr-2">{product.original_price}</strike>{" "}
                      ₹ {product.price}
                    </p>
                    <button
                      className="btn btn-block btn-warning"
                      onClick={() => onOpenModalForUpdate(product)}
                    >
                      Update
                    </button>
                    <button className="btn btn-block btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AdminProducts;
