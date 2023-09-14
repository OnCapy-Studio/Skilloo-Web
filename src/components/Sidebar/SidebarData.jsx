//SidebarData
import { BsPersonFill } from 'react-icons/bs'
import { FaClock } from 'react-icons/fa6'
import { IoHelpCircle } from 'react-icons/io5'
import { MdPeopleAlt, MdComputer } from 'react-icons/md'
import { BiSolidBook } from 'react-icons/bi'

const SidebarData = [
  {
    title: 'Membros',
    path: 'membros',
    icon: <BsPersonFill/>,
  },
  {
    title: 'Horários',
    path: 'horarios',
    icon: <FaClock/>,
  },
  {
    title: 'Labs',
    path: 'labs',
    icon: <MdComputer/>,
  },
  {
    title: 'Turmas',
    path: 'turmas',
    icon: <BiSolidBook/>,
  },
  {
    title: 'Matérias',
    path: 'materias',
    icon: <MdPeopleAlt/>,
  },
  {
    title: 'Suporte',
    path: 'suporte',
    icon: <IoHelpCircle/>,
  },
];

export default SidebarData;
