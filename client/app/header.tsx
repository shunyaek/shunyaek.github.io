export default function Header() {
  const tabs = [
    { title: "blog", path: "#" },
    { title: "projects", path: "#" },
    { title: "contact", path: "#" },
  ];
  return (
    <header>
      <nav role="navigation">
        {/* <a href="/">Harshit Doshi</a> */}
        {
          tabs.map((tab: { title: string; path: string }) => {
            return <a key={tab.path} href={tab.path}>{tab.title}</a>;
          })
        }
      </nav>
    </header>
  );
}