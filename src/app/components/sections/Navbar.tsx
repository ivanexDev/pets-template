import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  type MenuItems = {
    label: string;
    path: string;
  };

  const menuItems: MenuItems[] = [
    {
      label: "Inicio",
      path: "inicio",
    },
    {
      label: "Adopta un amigo",
      path: "adopta",
    },
  ];
  return (
    <nav className="h-[80px] w-full flex justify-between items-center p-4  border-b-4 border-neutral-800 ">
      <div className="flex gap-2 items-center">
        <Image src="" width={40} height={40} alt="Logo" />
        <h1>Nombre de la Fundacion</h1>
      </div>
      <div className="flex gap-2">
        {menuItems.map((menuItem) => {
          return (
            <Link
              className="bg-neutral-800 rounded-md font-medium text-neutral-100 px-3 py-2"
              key={menuItem.path}
              href={menuItem.path}
            >
              {menuItem.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
