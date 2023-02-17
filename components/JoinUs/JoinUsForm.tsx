import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "Glückwunsch!",
    text: "Deine Nachricht wurde erfolgreicht versandt. Wir melden uns bald bei Dir.",
    icon: "success",
    timer: 4000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  firstname: "",
  name: "",
  email: "",
  firstname6g234: "",
  name90ad0f: "",
  emailfd80e: "",
  telephone: "",
  subject: "",
  text: "",
  cv: "",
};

// TODO: Add maximum file upload size to 8MB

const JoinUsForm = () => {
  const [agreedToGdpr, setAgreedToGdpr] = useState(false);
  const [contact, setContact] = useState(INITIAL_STATE);
  const [pdfContent, setPdfContent] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const convertToBase64 = (e) => {
    handleChange(e);
    const fileReader = new FileReader();

    fileReader.onload = function (fileLoadedEvent) {
      const base64 = fileLoadedEvent.target.result;
      console.log("fileContent::", base64);
      setPdfContent(base64);
    };

    const selectedFiles =
      document.querySelector<HTMLInputElement>("#cv")?.files;
    if (selectedFiles?.length !== 1) {
      return;
    }

    const fileToLoad = selectedFiles[0];
    fileReader.readAsDataURL(fileToLoad);
    console.log("return fileContent::", pdfContent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/join-us";
      const {
        firstname,
        name,
        email,
        firstname6g234,
        name90ad0f,
        emailfd80e,
        telephone,
        subject,
        text,
        // cv,
      } = contact;

      let payload = {
        firstname,
        name,
        email,
        firstname6g234,
        name90ad0f,
        emailfd80e,
        telephone,
        subject,
        text,
        // cv: base64.encode(cv),
        cvMeta: null,
        cvContent: null,
      };

      const formEl = document.querySelector<HTMLFormElement>("#join-us-form");
      const formData = new FormData(formEl);

      // console.log("first form::", formEl);

      const fileInputEl = document.querySelector<HTMLInputElement>("#cv");
      console.log("file::", fileInputEl, "\n", fileInputEl?.files?.[0]);

      const files = fileInputEl?.files;

      const pdfFile = files?.[0];
      // const fileContent = JSON.stringify(pdfFile);
      // const fileBuffer = Buffer.from(JSON.stringify(pdfFile));
      // const fileBuffer = Buffer.from(fileContent);
      // const fileStr = fileBuffer.toString("base64");
      // payload.cv = atob(pdfFile);
      // payload.cv = fileStr;
      payload = {
        ...payload,
        cvMeta: pdfFile,
        cvContent: pdfContent,
      };

      // formData.append("file", pdfFile.files[0]);
      // console.log("second form::", formEl);
      console.log("payload::", payload);

      // const response = await axios.post(url, payload);
      const response = await axios.post(url, payload, {
        headers: {
          // ...formData.getHeaders(),
          //some other headers
        },
      });
      // const response = await axios.post(url, payload, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      // const response = await axios.post(url, formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      console.log(response);
      // TODO: uncomment
      // setContact(INITIAL_STATE);
      // alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="join-us-form">
        <div className="container">
          <div className="row honey">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Vorname*"
                  className="form-control"
                  value={contact.firstname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Nachname*"
                  className="form-control"
                  value={contact.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="E-Mail*"
                  className="form-control"
                  value={contact.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="firstname6g234"
                  placeholder="Vorname*"
                  className="form-control"
                  value={contact.firstname6g234}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name90ad0f"
                  placeholder="Nachname*"
                  className="form-control"
                  value={contact.name90ad0f}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="emailfd80e"
                  placeholder="E-Mail*"
                  className="form-control"
                  value={contact.emailfd80e}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="telephone"
                  placeholder="Telefonnummer"
                  className="form-control"
                  value={contact.telephone}
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
                  placeholder="Betreff*"
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
                  cols={30}
                  rows={6}
                  placeholder="Schreib Deine Anfrage...*"
                  className="form-control"
                  value={contact.text}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <span>
                  Bewerbungsunterlagen hochladen{" "}
                  <small>(Optional) | PDF | max. 8 MB</small>
                </span>
                {/* <input
                  name="doc"
                  cols="30"
                  rows="6"
                  placeholder="Schreib Deine Anfrage...*"
                  className="form-control"
                  value={contact.text}
                  onChange={handleChange}
                  required
                /> */}

                <input
                  type="file"
                  id="cv"
                  name="cv"
                  className="form-control"
                  value={contact.cv}
                  onChange={convertToBase64}
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="contactAgreement"
                  onClick={() => setAgreedToGdpr(!agreedToGdpr)}
                />
                <label htmlFor="contactAgreement">
                  Ich habe die{" "}
                  <Link href="/legal#gdpr" rel="noopener" target="_blank">
                    Datenschutzerklärung
                  </Link>{" "}
                  gelesen und akzeptiere diese hiermit.
                </label>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12  text-center">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!agreedToGdpr}
              >
                Senden
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default JoinUsForm;
