import { Dispatch, SetStateAction } from "react";

interface PaginationProps {
	currentPage: number,
	totalPages: number,
	setCurrentPage: Dispatch<SetStateAction<number>>
}

export const Pagination = ({ currentPage, totalPages, setCurrentPage }: PaginationProps) => {
	const handlePrev = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	let pageNumbers = [];

	if (totalPages <= 5) {
		pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
	} else {
		if (currentPage <= 3) {
			pageNumbers = [1, 2, 3, 4, 5];
		} else if (currentPage >= totalPages - 2) {
			pageNumbers = [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
		} else {
			pageNumbers = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
		}
	}

	if (pageNumbers?.length < 2) {
		return <></>
	}

	return (
		<div className="flex gap-1">
			<button
				onClick={handlePrev}
				disabled={currentPage === 1}
				className="bg-tertiarycolor text-primarycolor text-2xl w-[20px] rounded"
			>
				{'<'}
			</button>

			{pageNumbers.map((pageNumber) => (
				<button
					className={`${currentPage === pageNumber ? 'bg-primarycolor text-white' : 'bg-secondarycolor'} text-base w-[30px] rounded `}
					key={pageNumber}
					onClick={() => setCurrentPage(pageNumber)}
					disabled={currentPage === pageNumber}
				>
					{pageNumber}
				</button>
			))}

			<button
				className="text-primarycolor bg-tertiarycolor text-2xl w-[20px] rounded"
				onClick={handleNext}
				disabled={currentPage === totalPages}
			>
				{'>'}
			</button>
		</div>
	);
};
