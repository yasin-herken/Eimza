import React, { useRef, useState } from "react";
import Popup from 'reactjs-popup';
import emailjs from '@emailjs/browser';

const ControlledPopup = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const form = useRef(null)
    const sendEmail = (e) => {
        setLoading(true);
        e.preventDefault();

        emailjs.sendForm("service_dhqu3ce", 'template_oeb4auf', form.current, "M5KWo8uMwfmQYS_qG")
            .then((result) => {
                setShow(true);
            }, (error) => {
                setErrorMsg(true);
            });
        setLoading(false);
    };
    return (
        <React.Fragment>
            <button type="button" className="buy-btn" onClick={() => setOpen(o => !o)}>
                Hemen Başvuru
            </button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="container-xl">
                    <form ref={form} onSubmit={sendEmail} className="php-email-form">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Ad Soyad:</label>
                                <input type="text" name="name" className="form-control" id="name" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="name">E-Posta Adresi:</label>
                                <input type="email" className="form-control" name="email" id="email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Telefon:</label>
                            <input type="text" className="form-control" name="telephone" id="telephone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Mesaj:</label>
                            <textarea className="form-control" name="message" rows={10} required defaultValue={""} />
                        </div>
                        <div className="my-3">
                            {loading ? <div className="loading">Yükleniyor</div> : null}
                            {errorMsg ? <div className="error-message" /> : null}
                            {show ? <div className="sent-message">Mesajınız gönderildi. Teşekkür Ederiz!</div> : null}
                        </div>
                        <div className="text-center "><button type="submit" className="btn btn-primary">Gönder</button></div>
                    </form>
                </div>
            </Popup>
        </React.Fragment>
    );
};
export default ControlledPopup