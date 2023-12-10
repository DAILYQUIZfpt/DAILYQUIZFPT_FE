import Link from "next/link";
import localFont from "next/font/local";
const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div></div>
    </Link>
  );
};
