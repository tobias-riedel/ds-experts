import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import baseUrl from "../../utils/baseUrl";

const MySwal = withReactContent(Swal);
const alertContent = () => {
  MySwal.fire({
    title: "Glückwunsch!",
    text: "Deine Nachricht wurde erfolgreicht versandt. Wir melden uns bald bei Dir.",
    icon: "success",
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  firstname: "",
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [aggreedToGdpr, setAggreedToGdpr] = useState(false);
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { firstname, name, email, number, subject, text } = contact;
      const payload = { firstname, name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-form">
        <div className="contact-title">{/* <h2>Kontakt</h2> */}</div>

        <form onSubmit={handleSubmit} id="contact-form">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Vorname"
                    className="form-control"
                    value={contact.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nachname"
                    className="form-control"
                    value={contact.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="E-Mail"
                    className="form-control"
                    value={contact.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="number"
                    placeholder="Telefonnummer"
                    className="form-control"
                    value={contact.number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Betreff"
                    className="form-control"
                    value={contact.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="text"
                    cols="30"
                    rows="6"
                    placeholder="Schreib Deine Anfrage..."
                    className="form-control"
                    value={contact.text}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="contactAgreement"
                    onClick={() => setAggreedToGdpr(!aggreedToGdpr)}
                  />
                  <label htmlFor="contactAgreement">
                    Ich habe die{" "}
                    <Link href="/legal#gdpr">
                      <a target="_blank"> Datenschutzerklärung </a>
                    </Link>{" "}
                    gelesen und akzeptiere diese hiermit.
                  </label>
                </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                {/* TODO: Style disabled button */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!aggreedToGdpr}
                >
                  Senden
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
