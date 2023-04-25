"use client"

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer>
      &copy;{" "}
      {`shunyaek.se ${year}`}
    </footer>
  );
}