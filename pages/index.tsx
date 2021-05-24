import Head from 'next/head';
import Image from 'next/image';
import { Header } from 'components/layouts/Header';
import Hero from 'components/pages/Home/Hero';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Audiophile E-Commerce</title>
				<meta name="description" content="Find the best audio gear you need." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Hero />
			</main>
		</div>
	);
}
