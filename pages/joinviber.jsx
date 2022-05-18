import Link from "next/link";

const joinviber = () => {
  return (
    <div class="joinviber">
      <div>
        <Link href="/">
          <a>
            <div className="crossIco">
              <i className="fas fa-times"></i>
            </div>
          </a>
        </Link>
        <div className="joinviber-header">
          <h1>Join Our Viber Community</h1>
          <p>join viber</p>
        </div>
        <div className="joinviber-body">
          <div className="scanqr">
            <img className="vibericon" src="/images/viber.png" alt="" />
            Scan the QR code to join
          </div>
          <div className="qrcode">
            <img src="/images/qrcode.jpg" alt="" />
          </div>
          <div className="orclass">OR</div>
          <div className="clickthelink">
            <Link href="https://invite.viber.com/?g2=AQB6tGdEFJsrY0zqHrMamRdrOc2H5n%2Bdjx6RUf3zYLu0IXzwVcz0KABlpwIKieV0">
              <a target="_blank" rel="noopener noreferrer">
                Click Here
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default joinviber;
