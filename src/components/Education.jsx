export const Education = ({ education }) => {
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900">
        {education.title}
      </h2>
      <p className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
        {education.speciality}
      </p>
      <p className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
        {education.university}  • {education.start} —{" "}
        {education.end}
      </p>
    </div>
  )
}
