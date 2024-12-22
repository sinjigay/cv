export const List = ({title, items}) => {
    return (
        <div>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">{title}</h2>
            <ul>
            {items.map(it => (
                <li className="max-w-md space-y-1 text-gray-500 list-disc list-inside" key={it}>{it}</li>
            ))}
            </ul>
        </div>
    )
}
