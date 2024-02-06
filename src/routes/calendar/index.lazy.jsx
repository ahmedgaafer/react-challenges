import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
const emptyDayField = "--";

const Event = (props) => {
	return <>Sample event</>;
};

const Day = (props) => {
	const { dayOfMonth } = props;
	const [events, setEvents] = useState([]);
	const [active, setActive] = useState(false);

	const handleDayClick = () => {
		setActive(!active);
	};

	return (
		<span
			className={`calendar__day ${dayOfMonth === emptyDayField ? "disabled" : ""}`}
			onClick={handleDayClick}
		>
			<span className="day">{dayOfMonth}</span>
			<span className="events">
				<span
					className={`add ${active ? "active" : ""}`}
					onMouseEnter={(e) => e.stopPropagation()}
				>
					{/*//!This is bad remove it// create Reusable modal */}
					<span
						className="body"
						onMouseEnter={(e) => {
							e.preventDefault();
							e.stopPropagation();
							e.nativeEvent.stopImmediatePropagation();
						}}
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Quam delectus voluptatem vel ratione deleniti
						fugit, fuga optio molestiae deserunt, illum neque a esse
						eos non doloremque explicabo sunt dicta quibusdam?
					</span>
				</span>
			</span>
		</span>
	);
};

const dayName = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const Calendar = () => {
	const currentDate = new Date();
	const firstDayOfMonth = new Date();
	firstDayOfMonth.setDate(1);
	const lastDayOfMonth = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth() + 1,
		0
	);
	const numberOfDaysInMonth = lastDayOfMonth.getDate();
	const firstDayIndex = firstDayOfMonth.getDay();

	const days = [];

	let day = 1;

	for (let i = 0; i < 42; i++) {
		if (i < firstDayIndex)
			days.push({ dayOfMonth: emptyDayField, isToday: false });
		else if (day <= numberOfDaysInMonth)
			days.push({
				dayOfMonth: day++,
				isToday: currentDate.getDate() === day,
			});
		else days.push({ dayOfMonth: emptyDayField, isToday: false });
	}

	return (
		<div className="calendar">
			<span className="day_names">
				{dayName.map((day) => (
					<span>{day}</span>
				))}
			</span>
			<span className="days">
				{days.map((day) => (
					<Day {...day} />
				))}
			</span>
		</div>
	);
};

const CalendarPage = () => {
	return (
		<section className="page__calendar">
			<article>
				<p>Try to solve this:</p>
				<ul>
					<li>Create a calendar to display current month</li>
					<li>Add event by clicking on a certain day</li>
					<li>Handle multiple events on same day</li>
				</ul>
			</article>

			<Calendar />
		</section>
	);
};

export const Route = createLazyFileRoute("/calendar/")({
	component: CalendarPage,
});
