import personalData from "../Data/personalData";

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4" id="contacts">
      <div className="container">
        <div className="row container">
          <div className="col-md-6 text-center text-md-start">
            <p className="fw-bold me-3">{personalData.name}</p>
            <p className="mb-1">{personalData.description}</p>
            <p className="mb-0">{personalData.contactInfo.address}</p>
            <p className="mb-0">{personalData.contactInfo.email}</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <h4 className="py-2 fw-bold">Connect With Me</h4>
            <div>
              {personalData.socialLink.map((link, ind) => (
                <a href={link.url} key={ind} target="_blank" className="fs-3 text-light me-3">
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="text-center mt-3">
            <p>
              &copy; {`${new Date().getFullYear()} `}
              {personalData.name}. all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
