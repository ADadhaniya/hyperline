import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="wrap">
      <header>
        <div className="header-left">
          <Link href="/">
            <img src="../friskay.svg" alt="Friskay Logo" />
          </Link>
          <div className="divider hide-mobile"></div>
          <Link href="/">
            <div className="home hide-mobile">Home</div>
          </Link>
        </div>
        <nav className="">
          <Link href="/" className="menu-open hide-desktop">
            <img src="../menu.svg" alt="Menu" />
          </Link>
          <ul>
            <li>
              <Link href="/" className="menu-close">
                <img src="../close_filled.svg" alt="Close menu" />
              </Link>
            </li>
            <li>
              <Link href={"/"}>Our Food</Link>
            </li>
            <li>
              <Link href={"/"}>Ingredients</Link>
            </li>
            <li>
              <Link href={"/"}>Studies</Link>
            </li>
            <li>
              <Link href={"/"}>FAQ</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>
          Your cat will go
          <img src="/Bonkers.svg" alt="Bonker text" />
        </h1>
        <p className="subhead">
          ..for the world’s best testing cat food, sourced with only the finest
          ingredients. Made with love from the heart of Mississippi.
        </p>
        <Link href="/">Get Bonkers</Link>
      </main>
      <div className="cat-container">
        <div className="cat">
          <img src="/cat.png" alt="cat illustartion" />
          <div className="inner-circle"></div>
          <div className="outer-circle"></div>
        </div>
      </div>
    </div>
  );
}
