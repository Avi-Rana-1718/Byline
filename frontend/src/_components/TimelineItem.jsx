export default function TimelineItem({title, byline, time}) {
    return (
        <li className="block group px-2 py-1 rounded hover:bg-[#4b3f60]">
            <span className="block group-hover:underline">{title}</span>
            <span className="text-sm text-[#c2b8b8] block">{byline}</span>
            <time className="text-xs text-[#888]">{new Date(time).getDate()+"th "+ (new Date(2024, new Date(time).getMonth(), 1).toLocaleString('default', { month: 'long' })) +" " + new Date(time).getFullYear()}</time>
        </li>
    )
}