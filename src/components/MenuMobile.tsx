import { AlignJustify } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "react-scroll";

const navLinks = [
  { id: 3, label: "About", to: "about" },
  { id: 2, label: "Projects", to: "projects" },
  { id: 4, label: "Contact", to: "contact" },
];

const MenuMobile = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="px-5">
        <AlignJustify size={30} className="text-white" />
      </DrawerTrigger>
      <DrawerContent className="h-full bg-gradient-to-t from-main/20 to-transparent rounded-none">
        <DrawerHeader>
          <DrawerTitle>Gustavo Eloi</DrawerTitle>
          <DrawerDescription>Discover my career</DrawerDescription>
        </DrawerHeader>
        <nav>
          <ul className="flex flex-col justify-around gap-3">
            {navLinks.map((item) => (
              <Link key={item.id} to={item.to} smooth={true} duration={500}>
                <li className="px-4 cursor-pointer text-2xl capitalize font-medim text-gray-400 hover:scale-105 duration-200">
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuMobile;
