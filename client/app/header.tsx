type TabType = {
  title: string;
  path: string;
}


export default function Header() {
  const tabs: TabType[] = [
    { title: "about", path: "#" },
    { title: "work", path: "#" },
    { title: "blog", path: "#" },
  ];
  return (
    <header>
      <nav role="navigation">
        {
          tabs.map((tab: TabType) => {
            return (<a key={tab.path} href={tab.path}>
              {tab.title}
            </a>);
          })
        }
      </nav>
    </header>
  );
}