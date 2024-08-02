import { FaBuilding, FaTools, FaUsers, FaInfoCircle } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";

export function NavBar() {
    const links = [
        {target: "#", text: "Dashboard", icon: <MdDashboard />},
        {target: "#", text: "Ambientes", icon: <FaBuilding />},
        {target: "#", text: "Equipamentos", icon: <MdForklift />},
        {target: "#", text: "Manutenções", icon: <FaTools />},
        {target: "#", text: "Usuários", icon: <FaUsers />},
        {target: "#", text: "Sobre", icon: <FaInfoCircle />}, 
    ];

    return (
        <nav className="space-y-4 flex flex-col mt-8">
            {links.map((obj, index) => (
                <a 
                    key={index} // Add a unique key prop
                    href={obj.target} 
                    className="flex items-center gap-4 hover:font-semibold"
                >
                    {obj.icon}
                    {obj.text}
                </a>
            ))}
        </nav>
    );
}
