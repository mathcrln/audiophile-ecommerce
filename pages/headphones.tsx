import Head from 'next/head';
import { MainLayout } from 'components/layouts';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Audiophile E-Commerce</title>
				<meta name="description" content="Find the best audio gear you need." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<MainLayout>
					<p>1</p>
				</MainLayout>
			</main>
		</div>
	);
}
