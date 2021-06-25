import Head from 'next/head';
import { MainLayout, Container } from 'components/layouts';
import Hero from 'components/pages/Home/Hero';
import { AllCollections } from 'components/common/Callout';
import { LinkButton } from 'components/common';
import styled from 'styled-components';
import { BrandHighlight } from 'components/common/BrandHighlight';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Audiophile E-Commerce</title>
				<meta name="description" content="Find the best audio gear you need." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainLayout>
				<Hero />
				<Container>
					<AllCollections styles="margin-top: 100px;" />
					<section>
						<article style={{ border: 'solid 1px black', borderRadius: '8px' }}>
							<h3>ZX9 SPEAKER</h3>
							<p>
								Upgrade to premium speakers that are phenomenally built to deliver
								truly remarkable sound.
							</p>
							<LinkButton buttonStyle={1} href="/speaker/zx9-speaker">
								See product
							</LinkButton>
						</article>
						<article style={{ border: 'solid 1px black' }}>
							<h3>ZX7 SPEAKER</h3>
							<LinkButton buttonStyle={2} href="/speaker/zx9-speaker">
								See product
							</LinkButton>
						</article>
						<article style={{ border: 'solid 1px black' }}>
							<div>
								<img src="" alt="" />
							</div>
							<div>
								<h3>YX1 EARPHONES</h3>
								<LinkButton buttonStyle={2} href="/speaker/yx1-speaker">
									See product
								</LinkButton>
							</div>
						</article>
					</section>
					<BrandHighlight />
				</Container>
			</MainLayout>
		</div>
	);
}

const Section = styled.section``;

const Styled = {};
