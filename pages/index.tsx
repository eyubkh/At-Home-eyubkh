import { useEffect, useRef, useState } from "react";
import Product from "@components/Product";
import { IProduct } from "../models/product";
import { DropBox } from "@components/Dropbox";

export default function Home() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [category, setCategory] = useState(0);
	const ref = useRef(false);

	useEffect(() => {
		if (ref.current === false) {
			ref.current = true;
			return;
		}

		(async () => {
			const response = await fetch(
				`/api/products?limit=10&offset=0&category=${category}`,
			).then((response) => response.json());
			setProducts(response);
		})();
	}, [category]);

	const onScrollHandler = async (event: React.UIEvent<HTMLDivElement>) => {
		const target = event.target as HTMLDivElement;
		const { scrollTop, scrollHeight, clientHeight } = target;

		const isNearBottom = scrollTop + clientHeight >= scrollHeight;
		if (isNearBottom) {
			const response = await fetch(
				`/api/products?limit=10&offset=${products.length}&category=${category}`,
			).then((response) => response.json());
			setProducts((products) => products.concat(response));
		}
	};

	return (
		<main
			className="overflow-y-scroll overflow-x-hidden py-10 px-10 h-full dark:bg-gray-900"
			onScroll={onScrollHandler}
		>
			<h1 className="text-3xl font-bold">Products</h1>
			<DropBox setCategory={setCategory} />
			<section className="flex flex-wrap flex-col sm:flex-row w-full mt-3 gap-3 ">
				{products.map((p) => (
					<Product key={p.productId} {...p} />
				))}
			</section>
			<footer>
				<p className="text-center py-12  font-bold opacity-40 dark:text-white">
					There are not more products to show
				</p>
			</footer>
		</main>
	);
}
