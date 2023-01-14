import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            The mind is the most important part of achieving any fitness goal.
            Mental change always comes before physical change.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Don't limit your challenges</p>
          <p className="my-5">Listen to your body</p>
          <p>It never gets easier</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Karine Candice Kong</p>
          <p>(+1) 546-765-843</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
