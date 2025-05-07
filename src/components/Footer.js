import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-light py-3 mt-5 text-center">
      <div className="container">
        <p className="text-muted footi">
          &copy; {new Date().getFullYear()} EduStream.
        </p>
      </div>
    </footer>
  );
}

export default Footer;