import { useRouter } from "next/router";
import { IProduct } from "../models/product";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { Loading } from "@components/Loading";

export default function ProductDetail() {
	const router = useRouter();
	const { productId } = router.query;
	const [product, setProduct] = useState<IProduct | null>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!productId) return;

		(async () => {
			const response = await fetch(`/api/products/${productId}`).then(
				(response) => response.json(),
			);
			setProduct(response);
		})();
	}, [router]);

	if (!product) {
		return <Loading />;
	}

	return (
		<main className="min-h-[100vh] dark:bg-slate-700">
			<article className="flex gap-4 flex-[2,1] flex-col lg:flex-row px-10 py-6 h-[100vh]">
				<div
					className={classNames(
						"w-full lg:w-[160%] h-full rounded-lg m-0 flex items-center justify-center",
						{
							"bg-blue-100": product.image === 0,
							"bg-pink-100": product.image === 1,
							"bg-purple-100": product.image === 2,
							"bg-green-100": product.image === 3,
						},
					)}
				>
					<span className="material-icons text-6xl text-white dark:text-[#333]">
						image
					</span>
				</div>

				<div className="w-full flex flex-col gap-4 items-center">
					<div className="flex flex-col gap-4 w-full">
						<h2 className="text-2xl font-extrabold">{product.productName}</h2>
						<p className="bg-slate-100 rounded-lg w-fit text-xs  py-1 px-8 dark:bg-slate-600">
							Category: {product.category}
						</p>
						<p className="text-xl font-bold">£{product.sellingPrice}</p>
						<p className="opacity-70 text-sm text-pretty">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Provident, reprehenderit porro quam non beatae repellendus sequi
							ut, nemo dolor possimus quo distinctio earum eius? In unde
							laboriosam quis hic aliquid!
						</p>
					</div>
					<button
						type="button"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						<svg
							className="w-3.5 mr-3 h-3.5 me-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 18 21"
						>
							<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
						</svg>
						Buy now
					</button>
				</div>
			</article>
		</main>
	);
}
