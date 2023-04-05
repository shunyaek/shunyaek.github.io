'use client';

import styles from "../page.module.css"

const TechnologyPill = ({ technology }: { technology: string; }) => {
  return (
    <div className={styles.technology}>#{technology}</div>
  );
}

export default function Home() {
  const technologies = [
    "Python", "JavaScript", "TypeScript",
    "Django", "Flask", "FastAPI", "NodeJS",
    "ReactJS", "NextJS", "ReduxJS", "React_Query",
    "React_Native", "Flutter",
    "TailwindCSS", "Styled_Components", "Material-UI",
    "REST", "GraphQL",
    "Authentication", "Authorisation", "SSO",
    "Git", "GitHub",
    "Cloudflare", "Vercel", "AWS", "Google_Cloud",
    "Docker", "Kubernetes",
    "PostgreSQL", "MongoDB", "Redis",
    "StorybookJS", "Jupyter_Notebooks",
  ]
  return (
    <>
      <article className={styles.sidepane}>
        <section className={styles.introductionsection}>
          <div>
            <span className={styles.introductionquotes}>&quot;shunyaek&quot;</span> is a combination of two words: <span className={styles.introductionquotes}>&quot;shunya&quot;</span> & <span className={styles.introductionquotes}>&quot;ek&quot;</span>. They mean <span className={styles.introductionquotes}>&quot;zero&quot;</span> and <span className={styles.introductionquotes}>&quot;one&quot;</span> in Hindi respectively. In the world of computers & technology, these binary digits or bits are the building blocks of everything. At shunyaek, we create magic from these bits for you!
          </div>
        </section>
        <section className={styles.technologies}>
          <div className={styles.technologytitle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            <div>Technology</div>
          </div>
          <div className={styles.technologieslist}>
            {technologies.map((technology) => {
              return <TechnologyPill key={technology} technology={technology} />;
            })}
          </div>
        </section>
      </article>
    </>
  )
}
