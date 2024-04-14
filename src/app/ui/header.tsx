import Logo from "_@/app/comps/logo";
import clsx from "clsx";

export default function Header() {
  return (
    <header className="flex items-center">
      <div className="mx-auto sm:mx-0 sm:mr-auto">
        <Logo />
      </div>
      <div className="sm:block hidden">
        <ul className="flex gap-4">
          {[
            {
              title: "Trang chủ",
              value: "home",
            },
            {
              title: "Liên hệ",
              value: "contact",
            },
          ].map((item, index) => (
            <li
              className={clsx(
                "text-blue-200 font-semibold",
                item.value === "contact"
                  ? "sm:bg-blue-600 sm:text-white sm:rounded-md sm:px-4 sm:py-2"
                  : "sm:rounded-md sm:px-4 sm:py-2 sm:transition-colors"
              )}
              key={index}
            >
              <a href="/">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
