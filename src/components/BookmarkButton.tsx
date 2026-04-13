export default function BookmarkButton({ isBookmarked, onClick }: { isBookmarked: boolean; onClick: () => void }) {
  return (
    <button
      className={`bookmark-btn ${isBookmarked ? 'active' : ''}`}
      onClick={onClick}
      aria-label={isBookmarked ? '북마크 해제' : '북마크 추가'}
    >
      <i className={isBookmarked ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'} />
      <span className="bookmark-tooltip">
        {isBookmarked ? '북마크 해제' : '북마크 추가'}
      </span>
    </button>
  );
}
