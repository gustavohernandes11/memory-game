import * as React from "react";
import styles from "./Header.module.css";

const Header = ({matches = 0, steps = 0, totalCards}) => (
	<header className={styles.header}>
		<h1> Jogo da memória </h1>
		<div className={styles.score}>
			<p>
				Matches: {matches}/{totalCards}
			</p>
			<p>Passos: {steps}</p>
		</div>
	</header>
);

export default Header;
