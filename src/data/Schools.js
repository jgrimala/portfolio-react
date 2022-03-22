import ImgUdem from "../images/udem-dark.jpg";
import ImgMaisonneuve from "../images/maisonneuve-dark.jpg";
import ImgFanshawe from "../images/fanshawe-dark.jpg";

export default {
	education: [
		{
			img: ImgMaisonneuve,
			title: "Collège de Maisonneuve",
			subtitle: "Programmation et conception de sites Web",
			year: "2021",
			type: "AEC",
			description: [
				"Ce programme mène à une attestation d'études collégiales permettant d'acquérir les compétences pour intervenir tout au long du processus de production d'un site Web et de ses interfaces de programmation. On y apprend entre autres à assurer des tâches variées telles que l'analyse d'un devis de projet, la planification des tâches, la conception et la programmation des interfaces interactives, la programmation des fonctionnalités du serveur ainsi que l'utilisation de base de données en ligne.",
			],
			btnText: "Details",
			actions: [
				{
					name: "Visit website",
					href: "https://fc.cmaisonneuve.qc.ca/formations/conception-et-programmation-de-sites-web/#information-generale-1-tab",
					action: null,
				},
			],
		},
		{
			img: ImgUdem,
			title: "Université de Montréal",
			subtitle: "Musiques Numériques",
			year: "2019",
			type: "Majeure 1er cycle",
			description: [
				"Le programme de majeure en musiques numériques vise à développer des outils interdisciplinaires appliqués aux musiques numériques, dans une perspective d'ouverture de la recherche et de la pratique en musique, en convergence avec la psychologie, les études cinématographiques et l'informatique. Le programme vise aussi à combler un domaine actuellement lacunaire dans les programmes universitaires, en fonction des besoins de formation générale en musiques numériques requis par les entreprises qui oeuvrent en multimédia, notamment dans le jeu vidéo.",
			],
			btnText: "Details",
			actions: [
				{
					name: "Visit website",
					href: "https://admission.umontreal.ca/programmes/majeure-en-musiques-numeriques/",
					action: null,
				},
			],
		},
		{
			img: ImgFanshawe,
			title: "Fanshawe College",
			subtitle: "Fashion Design",
			year: "2001",
			type: "College Diploma",
			description: [
				"Fashion Design is a three-year co-operative Ontario College Advanced Diploma program providing professional career-directed training in the development, production management and marketing of apparel design. Through classroom theory, lecture, lab work, field trips and work term experience, skills are applied.", 
				"Skills such as fashion illustration, computer-aided design, pattern-making and draping, and apparel construction techniques are taught, and supported by studies of textile technology, historical research, manufacturing processes and applied computerized technology in the fashion industry."
			],
			btnText: "Details",
			actions: [
				{
					name: "Visit website",
					href: "https://www.fanshawec.ca/programs/dfs4-fashion-design/next",
					action: null,
				},
			],
		},
	],
};
