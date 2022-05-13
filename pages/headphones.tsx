import Head from 'next/head';
import { Container, MainLayout } from 'components/layouts';
import { AllCollections } from 'components/common/Callout';
import { BrandHighlight } from 'components/common/BrandHighlight';
import { ActionButton, LinkButton } from 'components/common';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Headphones | Audiophile E-Commerce</title>
				<meta name="description" content="Find the best audio gear you need." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<MainLayout>
					<Container>
						<section className="grid grid-cols-2 gap-10">
							<div>
								<img src="/images/product-xx99-mark-two-headphones/desktop/image-product.jpg" />
							</div>
							<div>
								<small>NEW PRODUCT</small>
								<h2>XX99 Mark II Headphones</h2>
								<p>
									The new XX99 Mark II headphones is the pinnacle of pristine
									audio. It redefines your premium headphone experience by
									reproducing the balanced depth and precision of studio-quality
									sound.
								</p>
								<LinkButton href="#">See Product</LinkButton>
							</div>
						</section>
						<AllCollections styles="margin-top: 100px;" />
						<BrandHighlight />
					</Container>
				</MainLayout>
			</main>
		</div>
	);
}
