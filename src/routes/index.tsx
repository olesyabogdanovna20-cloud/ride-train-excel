import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Bike,
  Trophy,
  PlayCircle,
  Smartphone,
  Users,
  Check,
  ArrowRight,
  Waves,
  Activity,
  Award,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import coachCyclingAsset from "@/assets/maxim-kozyrev.jpg.asset.json";
import coachTriathlonAsset from "@/assets/ilya-praslov.jpg.asset.json";
const coachCycling = coachCyclingAsset.url;
const coachTriathlon = coachTriathlonAsset.url;
import appMockupAsset from "@/assets/app-mockup.jpg.asset.json";
const appMockup = appMockupAsset.url;
import logoAsset from "@/assets/logo.png.asset.json";
const logo = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EMRI — обучение велоспорту и триатлону" },
      {
        name: "description",
        content:
          "Онлайн-обучение велоспорту и триатлону от чемпионов. Видеоуроки, разбор техники и тренировочные программы в мобильном приложении.",
      },
      { property: "og:title", content: "EMRI — обучение велоспорту и триатлону" },
      {
        property: "og:description",
        content:
          "Практические видеоуроки от мастеров спорта. Велоспорт и триатлон для любого уровня.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Features />
      <Directions />
      <Coaches />
      <FreeLessons />
      <Pricing />
      <AppSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" aria-label="EMRI" className="flex items-center">
          <img
            src={logo}
            alt="EMRI"
            loading="eager"
            width={56}
            height={56}
            className="h-14 w-auto rounded-lg"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#directions" className="hover:text-foreground transition">Направления</a>
          <a href="#coaches" className="hover:text-foreground transition">Тренеры</a>
          <a href="#free" className="hover:text-foreground transition">Бесплатные уроки</a>
          <a href="#pricing" className="hover:text-foreground transition">Тарифы</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a href="#free" className="btn-primary text-sm !py-2 !px-4">Начать</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Велосипедист на горной дороге"
          className="h-full w-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>
      <div className="container-x relative section-pad pt-16 md:pt-24">
        <div className="max-w-3xl">
          <span className="eyebrow">Обучение онлайн</span>
          <h1 className="mt-5 text-5xl md:text-7xl font-black leading-[1.05]">
            EMRI —{" "}
            <span className="text-primary">обучение велоспорту и триатлону</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            От профессиональных тренеров. Практические видеоуроки, разбор техники
            и тренировочные программы в удобном мобильном приложении.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#free" className="btn-primary">
              Попробовать бесплатно <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#pricing" className="btn-ghost">Узнать тарифы</a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            <Stat n="12+" l="лет опыта" />
            <Stat n="2 МСМК" l="тренера" />
            <Stat n="100+" l="видеоуроков" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-bold text-primary">{n}</div>
      <div className="text-xs md:text-sm text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

function Features() {
  const items = [
    { icon: Trophy, t: "Обучение от чемпионов", d: "Курсы созданы спортсменами и тренерами с международным опытом выступлений и подготовки атлетов." },
    { icon: PlayCircle, t: "Практические видеоуроки", d: "Каждый урок посвящен конкретному навыку и помогает быстро внедрять знания в тренировки." },
    { icon: Users, t: "Для любого уровня", d: "Подойдет как новичкам, которые только начинают заниматься, так и опытным спортсменам." },
    { icon: Smartphone, t: "Доступ с телефона", d: "Все материалы доступны в мобильном приложении EMRI в любое удобное время." },
  ];
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeader eyebrow="Преимущества" title="Почему EMRI" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-surface border border-border p-6 hover:border-primary/50 transition">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 text-3xl md:text-5xl font-black">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-lg">{sub}</p>}
    </div>
  );
}

function Directions() {
  const cycling = ["торможение", "прохождение поворотов", "работа корпусом", "техника спусков", "безопасное управление велосипедом", "повышение эффективности езды"];
  const tri = ["тренировки", "техника", "подготовка к стартам", "ошибки начинающих", "развитие выносливости", "планирование сезона"];
  return (
    <section id="directions" className="section-pad bg-surface/40">
      <div className="container-x">
        <SectionHeader eyebrow="Программы" title="Выберите свое направление" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <DirectionCard icon={Bike} title="Велоспорт" desc="Освойте базовую и продвинутую технику управления велосипедом:" items={cycling} />
          <DirectionCard icon={Waves} title="Триатлон" desc="Получите системные знания по подготовке к соревнованиям:" items={tri} />
        </div>
      </div>
    </section>
  );
}

function DirectionCard({ icon: Icon, title, desc, items }: { icon: any; title: string; desc: string; items: string[] }) {
  return (
    <div className="rounded-3xl bg-card border border-border p-8 flex flex-col">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="mt-4 text-muted-foreground">{desc}</p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-3 flex-1">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
      <a href="#free" className="btn-primary mt-8 self-start">
        Смотреть бесплатные уроки <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function Coaches() {
  return (
    <section id="coaches" className="section-pad">
      <div className="container-x">
        <SectionHeader eyebrow="Команда" title="Тренеры EMRI" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <CoachCard
            img={coachCycling}
            name="Максим Козырев"
            title="Мастер спорта международного класса по велоспорту"
            achievements={[
              "Чемпион Европы на треке",
              "Победитель Летней Универсиады",
              "Призер этапа Кубка мира",
              "Многократный призер чемпионатов России",
            ]}
            experience="Более 12 лет тренерской работы. Подготовил победителей и призеров чемпионатов России, Европы и международных соревнований."
          />
          <CoachCard
            img={coachTriathlon}
            name="Илья Праслов"
            title="Мастер спорта международного класса по триатлону"
            achievements={[
              "Рекордсмен России на полужелезной дистанции",
              "Многократный чемпион России",
              "Призер Кубка мира",
              "Призер чемпионата Европы",
              "Член сборной России",
            ]}
            experience="Подготовка спортсменов от спринтерских до длинных дистанций. Ученики успешно выступают на российских и международных стартах."
          />
        </div>
      </div>
    </section>
  );
}

function CoachCard({ img, name, title, achievements, experience }: {
  img: string; name: string; title: string; achievements: string[]; experience: string;
}) {
  return (
    <article className="rounded-3xl bg-surface border border-border overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden bg-background">
        <img src={img} alt={name} loading="lazy" width={1024} height={768} className={`h-full w-full object-cover ${name === "Илья Праслов" ? "object-top" : "object-center"}`} />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-1 text-primary text-sm font-medium">{title}</p>
        <div className="mt-6">
          <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2">
            <Award className="h-4 w-4" /> Спортивные достижения
          </h4>
          <ul className="mt-3 space-y-2">
            {achievements.map((a) => (
              <li key={a} className="flex items-start gap-2 text-sm">
                <span className="text-primary">•</span> {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2">
            <Activity className="h-4 w-4" /> Тренерский опыт
          </h4>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{experience}</p>
        </div>
      </div>
    </article>
  );
}

function FreeLessons() {
  const cycling = [
    { t: "Введение", url: "https://kinescope.io/2i5XjhXay2XQFmfgVknhvp" },
    { t: "Байкфит", url: "https://kinescope.io/nUS1yQeamLQdzfTT3qouMm" },
    { t: "Расположение велосипеда", url: "https://kinescope.io/eJHeuLmAQi3BV9MMg8KudH" },
  ];
  const tri = [
    { t: "С чего начать", url: "https://kinescope.io/0AGQPiDNieLUPVhqk8ftXX" },
    { t: "Выбор экипировки", url: "https://kinescope.io/jJntw8h6CVfqCY83sd98bg" },
    { t: "Разминка и заминка", url: "https://kinescope.io/athCUc7XLmhuxsDiR4kNxQ" },
  ];
  return (
    <section id="free" className="section-pad bg-surface/40">
      <div className="container-x">
        <SectionHeader
          eyebrow="Бесплатно"
          title="Начните бесплатно"
          sub="Познакомьтесь с методикой обучения и качеством материалов до оформления доступа."
        />
        <LessonRow title="Бесплатные уроки по велосипеду" items={cycling} />
        <LessonRow title="Бесплатные уроки по триатлону" items={tri} />
        <div className="mt-10 flex justify-center">
          <a href="#pricing" className="btn-ghost">
            Открыть все бесплатные уроки <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function LessonRow({ title, items }: { title: string; items: { t: string; url?: string }[] }) {
  const [openUrl, setOpenUrl] = useState<string | null>(null);
  const embedUrl = openUrl
    ? openUrl.replace("kinescope.io/", "kinescope.io/embed/")
    : null;
  const activeTitle = items.find((it) => it.url === openUrl)?.t ?? "Видеоурок";
  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => {
          const card = (
            <div className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition h-full">
              <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-background grid place-items-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition">
                  <PlayCircle className="h-7 w-7" />
                </div>
                <span className="absolute top-3 right-3 text-xs font-semibold bg-background/80 backdrop-blur px-2 py-1 rounded">
                  Бесплатно
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-semibold">{it.t}</h4>
              </div>
            </div>
          );
          return it.url ? (
            <button
              key={it.t}
              type="button"
              onClick={() => setOpenUrl(it.url!)}
              className="block cursor-pointer text-left w-full"
            >
              {card}
            </button>
          ) : (
            <div key={it.t}>{card}</div>
          );
        })}
      </div>
      <Dialog open={!!openUrl} onOpenChange={(o) => !o && setOpenUrl(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-border">
          <DialogTitle className="sr-only">{activeTitle}</DialogTitle>
          {embedUrl && (
            <div className="aspect-video w-full">
              <iframe
                src={embedUrl}
                title={activeTitle}
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media;"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section-pad">
      <div className="container-x">
        <SectionHeader
          eyebrow="Тарифы"
          title="Полный доступ к обучению"
          sub="Получите доступ ко всей библиотеке уроков и новым материалам по мере их выхода."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <PriceCard
            icon={Bike}
            title="Велоспорт"
            plans={[
              { p: "1 месяц", c: "1 900 ₽" },
              { p: "3 месяца", c: "3 990 ₽" },
              { p: "12 месяцев", c: "11 400 ₽", badge: "Выгодно" },
            ]}
          />
          <PriceCard
            icon={Waves}
            title="Триатлон"
            featured
            plans={[
              { p: "1 месяц", c: "3 300 ₽" },
              { p: "3 месяца", c: "6 930 ₽" },
              { p: "12 месяцев", c: "19 800 ₽", badge: "Выгодно" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function PriceCard({ icon: Icon, title, plans, featured }: {
  icon: any; title: string; plans: { p: string; c: string; badge?: string }[]; featured?: boolean;
}) {
  return (
    <div className={`rounded-3xl p-8 border ${featured ? "bg-gradient-to-br from-primary/15 to-surface border-primary/40" : "bg-surface border-border"}`}>
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="mt-8 space-y-3">
        {plans.map((pl) => (
          <div key={pl.p} className="flex items-center justify-between p-4 rounded-xl bg-background/60 border border-border">
            <div className="flex items-center gap-3">
              <span className="font-medium">{pl.p}</span>
              {pl.badge && (
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary/20 text-primary">
                  {pl.badge}
                </span>
              )}
            </div>
            <span className="font-bold text-lg">{pl.c}</span>
          </div>
        ))}
      </div>
      <a href="#" className="btn-primary mt-8 w-full">Выбрать тариф</a>
    </div>
  );
}

function AppSection() {
  return (
    <section className="section-pad bg-surface/40">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="eyebrow">Мобильное приложение</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black">
            Обучайтесь в приложении EMRI
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            После оформления доступа вы сможете смотреть уроки через наше мобильное
            приложение, где бы вы ни находились.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "удобный каталог уроков",
              "быстрый поиск материалов",
              "просмотр в любое время",
              "обучение прямо со смартфона",
            ].map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  {i + 1}
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <a href="#pricing" className="btn-primary mt-8">
            Приобрести курс и получить доступ <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <img
            src={appMockup}
            alt="Приложение EMRI"
            loading="eager"
            width={1024}
            height={1024}
            className="relative rounded-3xl w-full"
          />
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Кому подойдет обучение?", a: "Новичкам, любителям и опытным спортсменам, которые хотят улучшить технику и результаты." },
    { q: "Можно ли сначала попробовать бесплатно?", a: "Да. Часть уроков доступна бесплатно в соответствующем разделе." },
    { q: "Где проходят занятия?", a: "Все материалы доступны онлайн через приложение EMRI, вы можете заниматься в удобном для вас месте." },
    { q: "Как получить доступ после оплаты?", a: "После оформления подписки доступ автоматически активируется в вашем аккаунте." },
  ];
  return (
    <section id="faq" className="section-pad">
      <div className="container-x">
        <SectionHeader eyebrow="FAQ" title="Частые вопросы" />
        <div className="mt-12 grid gap-4 max-w-3xl">
          {items.map((it) => (
            <details key={it.q} className="group rounded-2xl bg-surface border border-border p-6 open:border-primary/40">
              <summary className="flex items-center justify-between cursor-pointer font-semibold list-none">
                {it.q}
                <span className="text-primary text-2xl leading-none group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center bg-gradient-to-br from-primary/20 via-surface to-background border border-primary/30">
          <h2 className="text-3xl md:text-5xl font-black max-w-3xl mx-auto">
            Сделайте следующий шаг в своем развитии
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Осваивайте технику, тренируйтесь эффективнее и учитесь у профессионалов.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#free" className="btn-primary">Попробовать бесплатно</a>
            <a href="#pricing" className="btn-ghost">Получить полный доступ</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground font-bold text-xs">
            E
          </span>
          <span>© 2026 EMRI. Все права защищены.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition">Оферта</a>
          <a href="#" className="hover:text-foreground transition">Политика</a>
        </div>
      </div>
    </footer>
  );
}
