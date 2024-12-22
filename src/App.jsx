import { lang, media, stack, education } from "./data"
import { List } from "./components/List"
import { LinkList } from "./components/LinkList"
import { Education } from "./components/Education"
import { Category } from "./components/Category"

function App() {
  return (
    <div className="md:grid md:grid-cols-[2fr_1fr] flex flex-col gap-16 md:gap-y-16 px-4 md:gap-x-6 max-w-[56rem] mx-auto py-32 shadow-md rounded-md">
      <div>
        <Category title={"Egor Apimakhovich"} />
        <p className="mb-2 text-lg font-semibold text-gray-900">
          Software Engineer
        </p>
      </div>
      <div>
        <Category title={"Location"} />
        <p className="mb-2 text-lg font-semibold text-gray-900">
          🇧🇾 Belarus
        </p>
      </div>
      <div>
        <Category title={"Experience"} />
        <p className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
          Participating in hackathons and game jams with groupmates. Complete
          the BSU web develepment course.
        </p>
      </div>
      <List title={lang.title} items={lang.items} />

      <div>
        <Category title={"Technology Stack"} />
        <div className="flex gap-16 flex-wrap">
          {stack.map((el) => (
            <List key={el.title} title={el.title} items={el.tech} />
          ))}
        </div>
      </div>

      <LinkList title={"Social media"} items={media} />
      <div className="flex flex-col gap-16">
        <div>
        <Category title={"Education"} />
        <Education education={education} />
        </div>
        <div>
          <Category title={"Projects"}/>
          <p className="max-w-md space-y-1 text-gray-500 list-disc list-inside">Completed BSU web-development course homeworks.</p>
        </div>
      </div>
    </div>
  )
}

export default App
