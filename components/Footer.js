export default function Footer() {
  return (
    <>
      <footer className="footer has-text-centered">
        <div className="m-auto">
          <img
            src="https://skillicons.dev/icons?i=discord"
            alt="BranDaniMB#4593"
            title="BranDaniMB#4593"
            className="mx-1"
          />
          <a target="_blank" className="mx-1" href="https://www.linkedin.com/in/brandanimb/" title="LinkedIn">
            <img src="https://skillicons.dev/icons?i=linkedin" />
          </a>
        </div>
        <div className="p-2">
          <img
            src="https://bulma.io/images/made-with-bulma--white.png"
            alt="Made with Bulma"
            width="200"
          />
        </div>
        <div className="p-2">
          <img
            src="https://api.netlify.com/api/v1/badges/dfd8c571-ce3f-4299-927e-dd2d0e82f1c0/deploy-status"
            alt="Netlify Status"
            width="200"
          />
        </div>
        <div className="p-2">
          Handcrafted by <span className="me">BranDaniMB</span>
        </div>
      </footer>
    </>
  );
}
