//SidebarData
import { BsPersonFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import { IoHelpCircle } from "react-icons/io5";
import { PiDesktopTowerFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { BiSolidBook } from "react-icons/bi";

const SidebarData = [
  {
    title: "Membros",
    path: "membros",
    icon: <BsPersonFill />,
  },
  {
    title: "Horários",
    path: "horarios",
    icon: <FaClock />,
  },
  {
    title: "Labs",
    path: "labs",
    icon: <PiDesktopTowerFill />,
  },
  {
    title: "Turmas",
    path: "turmas",
    icon: <SiGoogleclassroom />,
  },
  {
    title: "Matérias",
    path: "materias",
    icon: <BiSolidBook />,
  },
  {
    title: "Suporte",
    path: "suporte",
    icon: <IoHelpCircle />,
  },
];

export default SidebarData;
