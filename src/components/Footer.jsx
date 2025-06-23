import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-8 py-6">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Web Sort. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <a
            href="https://www.instagram.com/websort_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/web-sort/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/people/Websort-Design-And-Development-Pvt-Limited/61557970507365/#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
