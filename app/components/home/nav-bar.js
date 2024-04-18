import ThemeController from "./theme-controller";
import { GoHomeFill } from "react-icons/go";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start ml-10">
        <Link href="/">
          <GoHomeFill color={"oklch(var(--nc))"} size = {30}/>
        </Link>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <GoHomeFill color={"oklch(var(--nc))"} />
            </li>
            {/* <li>
              <a>Documents</a>
            </li>
            <li>Add Document</li> 
          </ul>
        </div>
      </div> */}
      <div className="navbar-end mr-10">
        <ThemeController />
      </div>
    </div>
  );
}
