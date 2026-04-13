import BookmarkButton from './BookmarkButton';

/** question_text를 파싱하여 일반 텍스트 / <보기> 블록 / 표 / 지문을 구분 렌더링 */
function renderQuestionText(text: string) {
  if (!text) return null;

  // <보기> 블록 분리
  const bogiMatch = text.split(/\n\n<보기>\n/);
  if (bogiMatch.length === 2) {
    const mainText = bogiMatch[0];
    const bogiContent = bogiMatch[1];
    return (
      <>
        {renderTextBlock(mainText)}
        <div className="bogi-box">
          <div className="bogi-label">보기</div>
          <div className="bogi-content">{renderInnerContent(bogiContent)}</div>
        </div>
      </>
    );
  }

  // ��� 감지 (| 로 시작하는 줄이 2줄 이상)
  const lines = text.split('\n');
  const tableStart = lines.findIndex(l => l.trim().startsWith('|') && l.trim().endsWith('|'));
  if (tableStart >= 0) {
    const beforeTable: string[] = [];
    const tableLines: string[] = [];
    const afterTable: string[] = [];
    let inTable = false;
    let pastTable = false;
    for (const line of lines) {
      const trimmed = line.trim();
      if (!pastTable && trimmed.startsWith('|') && trimmed.endsWith('|')) {
        inTable = true;
        // 구분선(|---|) 건너뛰기
        if (!/^\|[\s\-|]+\|$/.test(trimmed)) {
          tableLines.push(trimmed);
        }
      } else {
        if (inTable) { inTable = false; pastTable = true; }
        if (pastTable) afterTable.push(line);
        else beforeTable.push(line);
      }
    }
    if (tableLines.length >= 2) {
      return (
        <>
          {beforeTable.length > 0 && renderTextBlock(beforeTable.join('\n'))}
          <div className="bogi-box">
            <table className="q-table">
              <tbody>
                {tableLines.map((row, i) => {
                  const cells = row.split('|').filter(c => c !== '');
                  return (
                    <tr key={i} className={i === 0 ? 'q-table-header' : ''}>
                      {cells.map((cell, j) => i === 0
                        ? <th key={j}>{cell.trim()}</th>
                        : <td key={j}>{cell.trim()}</td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {afterTable.length > 0 && renderTextBlock(afterTable.join('\n'))}
        </>
      );
    }
  }

  // 지문 블록 감지 (다음 설명/사례/대화/조건/표/그래프/공식 등으로 시작)
  const passagePattern = /\n\n(다음 [^\n]+\n\n)/;
  const passageMatch = text.match(passagePattern);
  if (passageMatch && passageMatch.index !== undefined) {
    const mainPart = text.substring(0, passageMatch.index);
    const rest = text.substring(passageMatch.index + 2);
    // 질문부분과 지문부분 분리
    const questionLine = passageMatch[1];
    const passageBody = rest.substring(questionLine.length);
    if (passageBody.trim()) {
      return (
        <>
          {mainPart && renderTextBlock(mainPart)}
          <div className="passage-block">
            <div className="passage-label">{questionLine.trim()}</div>
            <div className="passage-content">{renderInnerContent(passageBody)}</div>
          </div>
        </>
      );
    }
  }

  return renderTextBlock(text);
}

function renderInnerContent(text: string) {
  // ㄱ. ㄴ. ㄷ. 패턴이 있으면 리스트로 렌더링
  const items = text.split(/\n/).filter(l => l.trim());
  const hasBogiItems = items.some(l => /^[ㄱ-ㅎ]\.\s/.test(l.trim()));
  if (hasBogiItems) {
    return (
      <ul className="bogi-list">
        {items.map((item, i) => <li key={i}>{item.trim()}</li>)}
      </ul>
    );
  }
  return <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>;
}

function renderTextBlock(text: string) {
  if (!text || !text.trim()) return null;
  return <span style={{ whiteSpace: 'pre-wrap' }}>{text.trim()}</span>;
}

export default function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  showResult = false,
  showExplanation = false,
  questionIndex,
  isBookmarked,
  onToggleBookmark,
}) {
  const { question_text, option_1, option_2, option_3, option_4, correct_answer, explanation } = question;
  const options = [option_1, option_2, option_3, option_4];

  const getOptionClass = (optionIdx) => {
    const num = optionIdx + 1;
    let cls = 'option-item';
    if (selectedAnswer === num) cls += ' selected';
    if (showResult) {
      if (num === correct_answer) cls += ' correct';
      else if (selectedAnswer === num && num !== correct_answer) cls += ' wrong';
    }
    return cls;
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <span className="question-number">Q{questionIndex + 1}</span>
        {onToggleBookmark && (
          <BookmarkButton
            isBookmarked={isBookmarked}
            onClick={() => onToggleBookmark(question.id)}
          />
        )}
      </div>
      <div className="question-text">{renderQuestionText(question_text)}</div>
      <div className="options-list">
        {options.map((option, idx) => (
          <button
            key={idx}
            className={getOptionClass(idx)}
            onClick={() => !showResult && onSelectAnswer?.(idx + 1)}
            disabled={showResult}
          >
            <span className="option-number">{idx + 1}</span>
            <span className="option-text">{option}</span>
            {showResult && (idx + 1) === correct_answer && (
              <i className="fa-solid fa-circle-check option-icon correct-icon" />
            )}
            {showResult && selectedAnswer === (idx + 1) && (idx + 1) !== correct_answer && (
              <i className="fa-solid fa-circle-xmark option-icon wrong-icon" />
            )}
          </button>
        ))}
      </div>
      {showExplanation && explanation && (
        <div className="explanation-box">
          <div className="explanation-header">
            <i className="fa-solid fa-lightbulb" /> 해설
          </div>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}
