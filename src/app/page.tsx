export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <ul className="flex flex-col gap-4">
          <li>
            <a className="underline text-xl font-semibold" href="/robots.txt">
              robots.txt
            </a>
          </li>
          <li>
            <a className="underline text-xl font-semibold" href="/sitemap.xml">
              sitemap.xml
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
