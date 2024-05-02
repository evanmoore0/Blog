export default function ThemeController() {
  const fonts = [
    "black"
  ];

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1 font-mono">
        Theme
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-28"
      >
        {/* Map over the fonts array and create <li> elements */}
        {fonts.map((font, index) => (
          <li key={index}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block justify-start mb-2"
              aria-label={font}
              value={font}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
