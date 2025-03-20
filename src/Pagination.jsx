export default function Pagination({
  prevClicked,
  nextClicked,
  isPrevDisabled,
  isNextDisabled,
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <button onClick={prevClicked} disabled={isPrevDisabled}>
        Prev
      </button>
      <button onClick={nextClicked} disabled={isNextDisabled}>
        Next
      </button>
    </div>
  );
}
