import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="container">
      <div>
        ⛔️ get static props:
        <ul>
          <li>
            <Link href="/get-static-props/page-1">
              <a>Page 1</a>
            </Link>
          </li>
          <li>
            <Link href="/get-static-props/page-2">
              <a>Page 2 🔒</a>
            </Link>
          </li>
        </ul>{" "}
      </div>

      <div>
        ⛔️ get server-side props:
        <ul>
          <li>
            <Link href="/get-server-side-props/page-1">
              <a>Page 1</a>
            </Link>
          </li>
          <li>
            <Link href="/get-server-side-props/page-2">
              <a>Page 2 🔒</a>
            </Link>
          </li>
        </ul>{" "}
      </div>

      <hr />

      <div>
        ✅ regular pages:
        <ul>
          <li>
            <Link href="/regular-page/page-1">
              <a>Page 1</a>
            </Link>
          </li>
          <li>
            <Link href="/regular-page/page-2">
              <a>Page 2 🔒</a>
            </Link>
          </li>
        </ul>{" "}
      </div>
      <style jsx>
        {`
          .container {
            font-size: 16px;
            font-family: sans-serif;
          }
        `}
      </style>
    </div>
  );
}
