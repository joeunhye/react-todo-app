import React from "react";
import { useContext } from "react";
import { DarkModeContext, useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ filters, filter, onChangeFilter }) {
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<header className={styles.header}>
			<button className={styles.toggle} onClick={toggleDarkMode}>
				{darkMode ? <HiSun /> : <HiMoon />}
			</button>
			<ul className={styles.filters}>
				{filters.map((v, i) => (
					<li key={i}>
						<button onClick={() => onChangeFilter(v)} className={`${styles.filter} ${filter === v && styles.selected}`}>
							{v}
						</button>
					</li>
				))}
			</ul>
		</header>
	);
}

// 투두앱
// - 전체 아이템 리스트 보여주기
// - 아이템 삭제
// - 아이템 체크박스
// - 아이템 추가
// - 아이템 필터링
// - 다크모드 지원
// - 로컬스토리지에 저장
