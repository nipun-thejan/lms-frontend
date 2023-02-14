import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { FaRegRegistered } from 'react-icons/fa'
import { MdLogin } from 'react-icons/md'
const links = [
  { id: 1, text: 'Home', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'all teachers', path: 'all', icon: <MdQueryStats /> },
  { id: 3, text: 'add course', path: 'add', icon: <FaWpforms /> },
  { id: 4, text: 'profile', path: 'profile', icon: <ImProfile /> },
  { id: 5, text: 'register', path: 'admin/register', icon: <FaRegRegistered /> },
  // { id: 6, text: '', path: 'profile', icon: <MdLogin /> }


]


const admin_links = [
  { id: 1, text: 'Home', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'all teachers', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 3, text: 'add course', path: 'add-job', icon: <FaWpforms /> },
  { id: 4, text: 'profile', path: 'profile', icon: <ImProfile /> },
]

const teacher_links = [
  { id: 1, text: 'Home', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'all teachers', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 3, text: 'add course', path: 'add-job', icon: <FaWpforms /> },
  { id: 4, text: 'profile', path: 'profile', icon: <ImProfile /> },
]

const student_links = [
  { id: 1, text: 'Home', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'all teachers', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 3, text: 'add course', path: 'add-job', icon: <FaWpforms /> },
  { id: 4, text: 'profile', path: 'profile', icon: <ImProfile /> },
]
export {links, admin_links}
