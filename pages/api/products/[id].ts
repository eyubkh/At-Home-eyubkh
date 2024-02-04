import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../models/product";
import productsJson from "./products.json";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IProduct>,
) {
	const { id } = req.query;

	const product = productsJson.find(
		(product) => product.productId === Number(id),
	);

	if (product) {
		return res.status(200).json(product);
	}

	return res.status(404);
}
