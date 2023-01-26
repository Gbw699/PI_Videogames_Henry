export default function Pagination({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCount / pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <button
        onClick={() => currentPage !== 1 && onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      {pageNumbers?.map((number, index) => {
        return (
          <button key={index} onClick={() => onPageChange(number)}>
            {number}
          </button>
        );
      })}
      <button
        onClick={() =>
          currentPage !== pageNumbers[pageNumbers.length - 1] &&
          onPageChange(currentPage + 1)
        }
      >
        Next
      </button>
    </div>
  );
}
