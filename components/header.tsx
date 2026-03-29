"use client"

interface HeaderProps {
  showPage: (page: string) => void
}

export default function Header({ showPage }: HeaderProps) {
  return (
    <header className="bg-gradient-to-br from-slate-700 to-blue-500 text-white py-4 shadow-lg">
      <nav className="container mx-auto px-5 flex justify-between items-center flex-wrap">
        <div className="text-3xl font-bold text-white cursor-pointer" onClick={() => showPage("main")}>
          Child Safe Kit®
        </div>
        <ul className="flex list-none gap-8 flex-wrap">
          <li>
            <a
              className="text-white no-underline transition-colors duration-300 cursor-pointer hover:text-blue-200"
              onClick={() => showPage("main")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-white no-underline transition-colors duration-300 cursor-pointer hover:text-blue-200"
              onClick={() => showPage("about")}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="text-white no-underline transition-colors duration-300 cursor-pointer hover:text-blue-200"
              onClick={() => showPage("services")}
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="text-white no-underline transition-colors duration-300 cursor-pointer hover:text-blue-200"
              onClick={() => showPage("contact")}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              className="text-white no-underline transition-colors duration-300 cursor-pointer hover:text-blue-200"
              onClick={() => showPage("privacy")}
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              className="text-white no-underline transition-colors duration-300 cursor-pointer hover:text-blue-200"
              onClick={() => showPage("terms")}
            >
              Terms of Service
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
