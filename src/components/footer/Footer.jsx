import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import BrandPhoto from "/public/images/logo-removeBg-preview.png";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-body-secondary shadow-lg mt-5">
        <Container className="px-lg-5 pt-lg-5 pb-lg-4 p-sm-0">
          <Row className="mb-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
              <div className="d-flex flex-row column-gap-1 mb-2">
                <FaStar className="text-warning fs-4" />
                <FaStar className="text-warning fs-4" />
                <FaStar className="text-warning fs-4" />
                <FaStar className="text-warning fs-4" />
                <FaStar className="text-warning fs-4" />
                <strong> +10.000 Yorum</strong>
              </div>
              <div className="text-start">
                <h4 className="fs-3 fw-bold">
                  ORİJİNAL VE GÜVENİLİR ÜRÜNLER • HIZLI & ÜCRETSİZ KARGO •
                  MÜŞTERİ MEMNUNİYETİ ÖNCELİĞİMİZ
                </h4>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
              <div className="my-auto pt-5">
                <p className="">
                  10.000 den fazla ürün yorumumuza dayanarak, ürünlerimizi
                  seveceğinize eminiz. Eğer herhangi bir sebeple memnun
                  kalmazsan, bizimle iletişime geçtiğinde çözüme kavuşturacağız.
                </p>
              </div>
            </div>
          </Row>
          <Row className="d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xl-4 ">
              <div className="d-flex flex-column align-items-center">
                <div>
                  <BiCategory
                    className="product-icon"
                    style={{ height: "130px", fontSize: "75px" }}
                  />
                </div>
                <h4 className="pb-4">Ürün Kategorileri</h4>
                <div className="text-center row-gap-2 d-flex flex-column">
                  <Link className="nav-link" to={"/category/laptops"}>
                    Laptop
                  </Link>
                  <Link className="nav-link" to={"/category/womens-shoes"}>
                    Kadın Giyim
                  </Link>
                  <Link className="nav-link" to={"/category/mens-shirts"}>
                    Erkek Gömlek
                  </Link>
                  <Link className="nav-link" to={"/category/mens-watches"}>
                    Erkek Saatleri
                  </Link>
                  <Link className="nav-link" to={"/category/womens-jewellery"}>
                    Kadın Takıları
                  </Link>
                  <Link className="nav-link" to={"/category/motorcycle"}>
                    Motorsiklet
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xl-4">
              <div className="flex-column d-flex align-items-center">
                <div>
                  <img src={BrandPhoto} width={130} height={130} />
                </div>
                <h4 className="pb-4">Markamız</h4>
                <div className="d-flex flex-column align-items-center row-gap-2 justify-content-center">
                  <Link className="nav-link" to={"/contact"}>
                    İletişim
                  </Link>
                  <Link className="nav-link">Hakkımızda</Link>
                  <Link className="nav-link" to={"/contact"}>
                    Giriş Yap
                  </Link>
                  <Link className="nav-link">Sıkça Sorulan Sorular</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xl-4">
              <div className="flex-column d-flex align-items-center">
                <div>
                  <FaProductHunt
                    className="product-icon"
                    style={{ height: "130px", fontSize: "75px" }}
                  />
                </div>
                <h4 className="pb-4">Popüler Ürünler</h4>
                <div className="d-flex flex-column align-items-center row-gap-2 justify-content-center">
                  <Link className="nav-link" to={"/product-detail/81"}>
                    Lenovo Yoga 920
                  </Link>
                  <Link className="nav-link" to={"/product-detail/82"}>
                    Dell XPS I3 9300
                  </Link>
                  <Link className="nav-link" to={"/product-detail/88"}>
                    Nike Air Jordan
                  </Link>
                  <Link className="nav-link" to={"/product-detail/95"}>
                    Rolex Cellini Date black
                  </Link>
                  <Link className="nav-link" to={"/product-detail/100"}>
                    Apple Airpods
                  </Link>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
