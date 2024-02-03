import { useEffect, useRef, useState } from "react";
import Product from "@components/Product";
import { IProduct } from "../models/product";
import { DropBox } from "@components/Dropbox";

export default function Home() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [offset, setOffset] = useState(0);
	const [category, setCategory] = useState(0);
	const ref = useRef(false);

	useEffect(() => {
		if (ref.current === false) {
			ref.current = true;
			return;
		}

		(async () => {
			await fetch(
				`/api/products?limit=10&offset=${offset}&category=${category}`,
			)
				.then((response) => response.json())
				.then((data) => setProducts((products) => products.concat(data)));
		})();
	}, [offset]);

	useEffect(() => {
		if (ref.current === false) {
			ref.current = true;
			return;
		}

		(async () => {
			await fetch(`/api/products?limit=10&offset=0&category=${category}`)
				.then((response) => response.json())
				.then((data) => setProducts(data));
		})();
	}, [category]);

	const onScroll = (event) => {
		const { scrollTop, scrollHeight, clientHeight } =
			event.target as HTMLDivElement;
		const isNearBottom = scrollTop + clientHeight >= scrollHeight;
		if (isNearBottom) {
			setOffset((offset) => offset + 10);
		}
	};

	return (
		<main onScroll={onScroll} className="overflow-scroll py-10 px-10 h-full">
			<h1 className="text-3xl font-bold">Products</h1>
			<DropBox setCategory={setCategory} />
			<section
				onScrollCapture={(event) => {
					console.log(event);
				}}
				className="flex flex-wrap flex-col sm:flex-row w-full mt-3 gap-3  items-center"
			>
				{products
					.filter((product) => {
						if (category === 0) return true;
						return product.category === category;
					})
					.map((p) => (
						<Product key={p.productId} {...p} />
					))}
			</section>
			<p className="flex py-12 items-center font-bold opacity-10 jusify-center">
				There are not more products to show
			</p>
		</main>
	);
}
