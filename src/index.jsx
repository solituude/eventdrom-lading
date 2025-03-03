import { hydrate, prerender as ssr } from 'preact-iso';
import logoIcon from './assets/logo.svg';
import calendar from './assets/calendar.svg';
import modulesIcon from './assets/modules.svg';
import './style.css';
import {Button} from "./components/button.jsx";
import {Card} from "./components/card.jsx";
import {Block} from "./components/block.jsx";

export function App() {

	return (
		<>
			<header className="header">
				<img src={logoIcon} alt={'header-logo'} width={100} />

				<nav className="nav">
					<a href={'#hero'}>Главная</a>
					<a href={'#events'}>Мероприятия</a>
					<a href={'#modules'}><span>Модули</span></a>
					<a href={'#advantages'}><span>Преимущества</span></a>
					<a href={'#contact-us'}><span>Контакты</span></a>
				</nav>
				<div style={{width: "248px"}}>
					<Button label={'В конструктор'} size={'small'} type={'to-main'} />
				</div>
			</header>

			<main>
				<section id="hero" className="hero__section">
					<img src={logoIcon} alt={'large-icon'} className="hero__img" />
					<div className="h1__container">
						<div className="h1__leftRect" />
						<h1 className="h1">ИВЕНТОДРОМ</h1>
						<div className="h1__rightRect" />
					</div>

					<div className="hero__caption">
						<h2 className="hero__h2">Конструктор приложений для организации и проведения мероприятий</h2>
						<span className="hero__span">Площадка для взлёта вашего мероприятия!</span>
					</div>

					<Button label={'Попробовать в конструкторе'} size={'large'}
							type={'to-main'} />

					<div className="concept">
						<Card text={'СОЗДАВАЙТЕ ПРИЛОЖЕНИЕ ИЗ МОДУЛЕЙ ПОД СВОИ ЗАДАЧИ'} />
						<Card text={'ПУБЛИКУЙТЕ В ПАРУ КЛИКОВ СО СВОИМ ПОДДОМЕНОМ'} />
						<Card text={'ДОСТУПНО НА iOS, ANDROID БЕЗ СКАЧИВАНИЯ'} />
					</div>
				</section>

				<section id="events" className="events__section">
					<img src={calendar} alt={'events-calendar-15'} className="calendar__img" />
					<div className="title">
						<h1 className="h1">МЕРОПРИЯТИЯ</h1>
					</div>

					<div className="events__list">
						<div className={"list"}>
							<h4 className="h4">КОРПОРАТИВНЫЕ</h4>
							<ul>
								<li>Тренинги</li>
								<li>Страт. сессии</li>
								<li>Бизнес-Завтраки</li>
							</ul>
						</div>

						<div className={"list"}>
							<h4 className="h4">ОБРАЗОВАТЕЛЬНЫЕ</h4>
							<ul>
								<li>Выездные Школы</li>
								<li>Интенсивы</li>
								<li>Семинары</li>
							</ul>
						</div>
						<div className={"list"}>
							<h4 className="h4">НАУЧНО-ПРАКТИЧЕСКИЕ</h4>
							<ul className={"text"}>
								<li className={"text"}>Конференции</li>
								<li>Мастер-Классы</li>
								<li>Воркшопы</li>
							</ul>
						</div>
					</div>
				</section>

				<section id="quick-start" className="quickStart__section">
					<h1 className={"h1 right dark"}>БЫСТРЫЙ СТАРТ</h1>
					<Block number={"01"} text={"Регистрируйтесь на платформе"} />
					<Block number={"02"} text={"Выбирайте формат и настраивайте приложение"} />
					<Block number={"03"} text={"Публикуйте в два клика и управляйте мероприятием в реальном времени"} />
				</section>

				<section id='modules' className="modules">
					<img className="calendar__img" src={modulesIcon} />
					<div className="modules__header">
						<h1 className="h1 dark modules__h1">МОДУЛИ</h1>
					</div>

					<div className="cards">
						<div className="row">
							<Card text={"ИИ-брендинг: генерация персонального оформления"} isStatic />
							<Card text={"Онлайн-регистрация и пуш-уведомления"} isStatic />
						</div>
						<div className="row">
							<Card text={"Геймификация и вовлечение участников"} isStatic />
							<Card text={"Спонсорские интеграции и аналитика"} isStatic />
						</div>
						<Button label={"попробовать в конструкторе"} type={'to-main'} size={'large'} />
					</div>
				</section>

				<section id='advantages' className="advantages__section">
					advantages
				</section>

				<section id='contact-us' className="contactUs__section">
					<input />
				</section>

				<section id='about' className="about__section">
					about
				</section>
			</main>

			<footer>
				podval
			</footer>
		</>
	);
}


if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
