import NavbarComp from "../../components/navbar/NavbarComp";
import Footer from "/src/components/footer/Footer";
import ReviewsSlider from "/src/components/reviewsSlider/ReviewsSlider";
import "./Contact.scss";

function Contact() {
  return (
    <>
      <NavbarComp />
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="contact-form-wrapper">
              <h2 className="h4 mb-3 d-flex align-items-center justify-content-between">
                İletişim Formu
                <button className="btn btn-link p-0 toggle-form">
                  <i className="bi bi-chevron-up"></i>
                </button>
              </h2>
              <p className="mb-4">
                Bize aşağıdaki iletişim formundan veya{" "}
                <a
                  href="mailto:destek@proteinocean.com"
                  className="text-primary"
                >
                  info@ecommerce.com
                </a>{" "}
                e-posta adresinden ulaşabilirsiniz.
              </p>

              <form>
                <div className="row g-3 mb-3">
                  <div className="col-md-6 col-sm-12">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="İsim *"
                      required
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Soyad"
                    />
                  </div>
                </div>

                <div className="mb-3 col-sm-12 col-lg-12 col-md-12">
                  <input
                    type="email"
                    className="form-control custom-input"
                    placeholder="E-Posta *"
                    required
                  />
                </div>

                <div className="mb-4 col-sm-12 col-lg-12 col-md-12">
                  <textarea
                    className="form-control custom-input"
                    rows={6}
                    placeholder="Mesaj"
                  ></textarea>
                </div>

                <div className="text-center mb-4">
                  <button
                    type="submit"
                    className="btn btn-primary custom-button px-4 py-2"
                  >
                    GÖNDER
                  </button>
                </div>

                <div className="text-center small text-muted">
                  <p className="mb-2">
                    *Aynı gün kargo hafta içi 16:00, Cumartesi ise 11:00&apos; a
                    kadar verilen siparişler için geçerlidir.
                  </p>
                  <p className="mb-3">
                    Siparişler kargoya verilince e-posta ve sms ile
                    bilgilendirme yapılır.
                  </p>
                  <p className="mb-2">
                    Telefon ile <span className="fw-bold">0850 303 29 89</span>{" "}
                    numarasını arayarak da bizlere sesli mesaj bırakabilirsiniz
                    . Sesli mesajlarınıza hafta içi saat
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold">09:00-17:00</span> arasında dönüş
                    sağlanmaktadır.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ReviewsSlider />
      <Footer />
    </>
  );
}

export default Contact;
