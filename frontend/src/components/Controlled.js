import { useRef, useState } from "react";
import Popup from 'reactjs-popup';
import emailjs from '@emailjs/browser';

const ControlledPopup = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const form = useRef(null)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_dhqu3ce", 'template_oeb4auf', form.current, "M5KWo8uMwfmQYS_qG")
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
    };
    return (
        <div>
            <button type="button" className="buy-btn" onClick={() => setOpen(o => !o)}>
                Hemen Başvuru
            </button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h4>E Mail Adresime Gönder</h4>
                                <p>Detaylı bilgi almak için email adresinizi giriniz.</p>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <button type="submit" className="btn btn-primary text-center">Gönder</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </Popup >
        </div >
    );
};
export default ControlledPopup