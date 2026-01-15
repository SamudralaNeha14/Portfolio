import React from 'react';

const Footer = ({ name }) => {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-400 mb-4">
          Built with React • Designed with passion
        </p>
        <p className="text-slate-500 text-sm">
          © 2026 {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;