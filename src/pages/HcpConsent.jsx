import React, { useState } from 'react';
import Swal from 'sweetalert2';

const HcpConsent = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleAccept = () => {
      setIsButtonDisabled(true);
      Swal.fire({
        title: 'Consent Accepted',
        text: 'You have given your consent.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      console.log('Accepted');
    };
  
    const handleReject = () => {
      setIsButtonDisabled(true);
      Swal.fire({
        title: 'Consent Rejected',
        text: 'You have rejected the consent.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      console.log('Rejected');
    };

  return (
    <div>
      <div style={styles.container}>
        <div className="card">
          <section className="table_style">
            <table
              id=""
              style={{
                width: "100%",
                padding: "20px",
                textAlign: "justify",
              }}
            >
              <tbody>
                <tr style={{ width: "100%" }}>
                  <td style={{ width: "100%" }}>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      width="100%"
                      style={{ overflowX: "auto", color: "#35495f" }}
                    >
                      <tbody>
                        <tr colSpan="2">
                          <td>
                            <br />
                            <p
                              style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: "16px",
                              }}
                            >
                              Date: [DATE]
                            </p>
                            <p
                              style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: "16px",
                              }}
                            >
                              To,
                            </p>
                            <p
                              style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: "16px",
                              }}
                            >
                              [NAME OF SUN PHARMA ENTITY ]
                            </p>
                            <p
                              style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: "16px",
                              }}
                            >
                              [ADDRESS OF SUN PHARMA ENTITY / THIRD PARTY
                              AGENCY]
                            </p>
                            <br />
                            <p
                              style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: "16px",
                              }}
                            >
                              In regard to the services to be provided to me
                              with respect to
                              _______________________________________________
                              (“Services”). I hereby consent to use my personal
                              data such as Name, photo, age, origin
                              qualification, educational details, contact
                              details, etc., along with my content shared by me
                              for the legitimate business purposes of Sun
                              Pharmaceutical Industries Limited (“Company”) and
                              hold no objection in this regard.
                            </p>
                            <br />
                            <p
                              style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: "16px",
                              }}
                            >
                              The kind of information the Company may collect
                              from me includes personal information and
                              non-personal information which includes your name;
                              email id, mobile number, gender, login id,
                              personal details, any detail relating to the above
                              personal information categories as provided to the
                              Company for the purpose of providing the Services.
                              Any of the personal information received by
                              Company for processing, storing or processing
                              under lawful contract or otherwise, which are
                              collectively referred as “information”, and by
                              submitting the information, it will be treated as
                              me have given my permission for processing the
                              same in a manner provided in this Consent.
                            </p>
                            <br />
                            <p
                              style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: "16px",
                              }}
                            >
                              The Company acknowledges that it shall protect
                              ‘Sensitive Personal Data or Information’ (SPDI)
                              and Information and are committed to comply with
                              all applicable legal, regulatory and/or
                              contractual obligations related to privacy. The
                              Consent as set forth hereunder is solely intended
                              to be used for the purpose of the Services taken
                              by me.
                            </p>
                            <br />
                            <p
                              style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: "16px",
                              }}
                            >
                              The Company further acknowledges that it will only
                              collect minimum Information from me for the
                              purpose of meeting the requirement of providing
                              the Services. The Company or any of its
                              representatives shall not be responsible for the
                              authenticity of the Information.
                            </p>
                            <br />

                            <p
                              style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: "16px",
                              }}
                            >
                              I agree that the Company will retain my
                              information for as long as it is needed to provide
                              the Services. After a period of time me data may
                              be anonymized and aggregated and then may be held
                              by the Company as long as necessary for the
                              Company to provide our Services effectively.
                              However, the anonymised data will be solely for
                              the purpose of analytics. My information will be
                              mandatorily retained for a period of 180 days,
                              post withdrawal of my consent from the use of
                              Information.
                            </p>
                            <br />
                            <p
                              style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: "16px",
                              }}
                            >
                              The Company may release Information when it is of
                              the belief that release is required to comply with
                              applicable law. The Company may also release
                              Information if, in its judgement after review, the
                              release is compelled by law or regulation. By
                              providing the Company with my Information, I
                              consent, to the collection, use and disclosure of
                              that Information as the Company deems fit.
                            </p>
                            <br />
                            <p
                              style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: "16px",
                              }}
                            >
                              Not withstanding the foregoing, the Company shall
                              not be required to destroy any computer files to
                              the extent such destruction is not reasonably
                              practical or to the extent it is created by
                              automatic system back up.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              style={{
                width: "100%",
                padding: "20px",
                textAlign: "justify",
              }}
            >
              <tr>
                <td>
                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    Thanking you,
                  </p>

                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    Yours Sincerely,
                  </p>
                  <br />
                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    [NAME OF DOCTOR]
                  </p>
                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    [ADDRESS]
                  </p>
                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    [QUALIFICATION/ DESIGNATION]
                  </p>
                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    Date: [DATE]
                  </p>
                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    Place: [PLACE]
                  </p>
                </td>
              </tr>
            </table>
          </section>
          {/* Accept and Reject Buttons */}
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <button
              style={{
                ...styles.buttonBase, // Shared base style for consistency
                ...styles.acceptBtn,
                ...(isButtonDisabled && styles.disabledBtn),
              }}
              onClick={handleAccept}
              disabled={isButtonDisabled}
            >
              Accept
            </button>
            <button
              style={{
                ...styles.buttonBase, // Shared base style for consistency
                ...styles.rejectBtn,
                marginLeft: '10px',
                ...(isButtonDisabled && styles.disabledBtn),
              }}
              onClick={handleReject}
              disabled={isButtonDisabled}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// Inline styles
const styles = {

    container: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      width: "90%",
      maxWidth: "1100px",
      padding: "20px",
      textAlign: "center",
      margin: "auto",
      marginTop: "50px",
      fontFamily: "Arial, sans-serif",
    },
  
    buttonBase: {
        padding: '10px 20px',
        borderRadius: '4px',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
      },
      acceptBtn: {
        backgroundColor: '#4CAF50',
        color: 'white',
      },
      rejectBtn: {
        backgroundColor: '#f44336',
        color: 'white',
      },
      disabledBtn: {
        backgroundColor: 'grey',
        cursor: 'not-allowed',
        color: 'white', // Ensure text color is consistent even when disabled
      },
  };
  

export default HcpConsent
