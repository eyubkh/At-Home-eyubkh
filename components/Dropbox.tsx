import { useState } from "react";

type Props = {
	setCategory: React.Dispatch<React.SetStateAction<number>>;
};

export function DropBox({ setCategory }: Props) {
	const [dropdown, setDropdown] = useState(false);
	return (
		<>
			<div className="relative ">
				<button
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					type="button"
					onClick={() => setDropdown(!dropdown)}
				>
					Categories
					<svg
						style={{ transform: dropdown ? "rotate(180deg)" : "rotate(0deg)" }}
						className="w-2.5 h-2.5 ml-3 transition-all"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 1 4 4 4-4"
						/>
					</svg>
				</button>

				<ul
					style={{
						display: dropdown ? "block" : "none",
					}}
					className={`
     absolute 
     py-1 
     top-12
     text-sm 
     text-gray-700 
     z-10 
     bg-white 
     divide-y 
     divide-gray-100 
     rounded-lg 
     shadow 
     w-40

     dark:text-gray-200 
     dark:bg-gray-700 
     dark:divide-gray-600
     `}
				>
					<li>
						<button
							type="button"
							className="w-ful l px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							onClick={() => {
								setCategory(0);
								setDropdown(false);
							}}
						>
							all
						</button>
					</li>
					{Array.from(Array(10).keys()).map((_, index) => {
						const i = index + 1;
						return (
							<li>
								<button
									type="button"
									className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									onClick={() => {
										setCategory(Number(i));
										setDropdown(false);
									}}
								>
									category {i}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
