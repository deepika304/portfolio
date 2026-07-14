export default function ScrollTopButton({ visible, onClick }) {
  return (
    <button
      id="scrollTop"
      onClick={onClick}
      style={{ display: visible ? 'block' : 'none' }}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  )
}
