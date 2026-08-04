import Image from "next/image";
import Link from "next/link"; // Link 컴포넌트 불러오기

export const metadata = {
  title: "Minimal portfolio",
  description: "The Most Fantastic and Flawless Portfolio in the World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1 className="logo">
            <Link href="/">Minimal Portfolio Theme</Link>
          </h1>
          <nav>
            <ul>
              {/* a 태그 대신 Link 사용 및 .html 제거 */}
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <hr />
        <main className="content">
          <div className="container latest_portfolio">{children}</div>
        </main>
        <footer>
          <div className="quote_area">
            <h3 className="heading6">Need a quote?</h3>
            <p>
              Please use the form inside the contact page. Make sure you include some personal
              information as well as your project description and available budget.
            </p>
            <p>
              <Link href="/contact">Get a free quote &rarr;</Link>
            </p>
          </div>
          <div className="copyright">
            <h3 className="heading6">Just wanna say hi?</h3>
            <p>You can call me, email me directly or connect with me through my social networks.</p>
            <p>
              (+40) 744122222
              <br />
              <a href="mailto:hello@adipurdila.com">hello@adipurdila.com</a>
            </p>
            <ul className="social_links">
              {/* Image 태그 맨 끝에 / 를 붙여서 닫아줌 */}
              <li>
                <a href="#">
                  <Image src="/images/twitter.png" width={32} height={32} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src="/images/facebook.png" width={32} height={32} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src="/images/dribble.png" width={32} height={32} alt="dribble" />
                </a>
              </li>
            </ul>
            <hr />
            <p>(c) Copyright 2020. Portfolio theme by alikerock.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
