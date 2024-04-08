import React from "react";
import ConstuktivLogo from "./ConstruktivLogo";

interface HeaderProps {
    location: string,
    handleLocationChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

export default function Header({location, handleLocationChange}: HeaderProps) {
    return (
      <header className="sticky top-0 left-0 right-0 z-50 bg-secondary text-white font-bold">
        <div className="container px-4 mx-auto md:py-4 md:space-y-4">
          <ConstuktivLogo className="w-1/3 md:w-fit" />
          <div className="flex justify-between">
            <nav>
                <ul className="flex gap-x-8">
                    <li className="pt-1 pb-2 mb-4 transition border-b-4 border-transparent hover:border-primary transition-opacity duration-200">
                        <a href="lorem">Lorem</a>
                    </li>
                    <li className="pt-1 pb-2 mb-4 transition border-b-4 border-transparent hover:border-primary transition-opacity duration-200">
                        <a href="ipsum">Ipsum</a>
                    </li>
                    <li className="pt-1 pb-2 mb-4 transition border-b-4 border-transparent hover:border-primary transition-opacity duration-200">
                        <a href="dolor">Dolor</a>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-x-4 justify-end place-items-center text-primary">
                <select
                    className="bg-secondary"
                    value={location}
                    onChange={handleLocationChange}
                >
                    <option value="Berlin">Berlin</option>
                    <option value="Paris">Paris</option>
                    <option value="London">London</option>
                </select>
            </div>
          </div>
        </div>
      </header>
    )
}
