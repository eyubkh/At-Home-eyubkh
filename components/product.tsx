import Link from "next/link";
import classNames from "classnames";
import { IProduct } from "../models/product";

const Product = ({
	productId,
	productName,
	category,
	sellingPrice,
	image,
}: IProduct) => {
	return (
		<Link href={`/${productId}`}>
			<a
				href="/#"
				className="w-96 text-left no-underline border border-solid border-gray-200 rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
			>
				<div
					id="image"
					className={classNames(
						"h-64 rounded-t-lg flex items-center justify-center",
						{
							"bg-blue-100": image === 0,
							"bg-pink-100": image === 1,
							"bg-purple-100": image === 2,
							"bg-green-100": image === 3,
						},
					)}
				>
					<span className="material-icons text-6xl text-white">image</span>
				</div>
				<div className="p-5">
					<h2 className="mb-4 text-2xl font-extrabold ">{productName}</h2>
					<div className="flex justify-between ">
						<p className="text-xl font-bold">£{sellingPrice}</p>
						<p className="bg-slate-100 rounded-lg text-xs inline py-1 px-8">
							Category: {category}
						</p>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default Product;
