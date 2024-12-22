export const LinkList = ({ title, items }) => {
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
      <ul>
        {items.map((it) => (
          <li
            className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            key={it}
          >
            <a href={it.link}>{it.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
