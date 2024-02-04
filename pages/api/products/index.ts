import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../models/product";
import productsJson from "./products.json";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IProduct[]>,
) {
	const { limit, offset, category } = req.query;

	const limitNumber = Number(limit);
	const offsetNumber = Number(offset);
	const categoryNumber = Number(category);

	const products = productsJson
		.filter((product) => {
			if (categoryNumber === 0) return true;
			return product.category === categoryNumber;
		})
		.slice(offsetNumber, offsetNumber + limitNumber);

	res.status(200).json(products);
}
