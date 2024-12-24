import { Link } from "react-router-dom";

export default function ListItem({title, link, subtitle, time}) {
    return (
        <li className="border border-slate-400/25 bg-slate-400/25 p-2 rounded">
            <div className="flex justify-between">
            <Link to={link}>
            <h3 className="text-lg hover:underline">{title}</h3>
            </Link>
            <ul className="flex gap-x-2">
            <li className="hover:text-slate-600">
                <i class="fa-solid fa-pen-to-square"></i>
            </li>
            <li className="hover:text-slate-600">
            <i class="fa-solid fa-trash"></i>
            </li>
            </ul>
            </div>
            <small className="text-sm block text-[#888]">{subtitle}</small>
            <time className="text-xs text-[#888]">{new Date(time).getDate()+"th "+ (new Date(2024, new Date(time).getMonth(), 1).toLocaleString('default', { month: 'long' })) +" " + new Date(time).getFullYear()}</time>
        </li>
    )
}