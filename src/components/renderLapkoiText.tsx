const reducedLapkoiLetters = new Set(['і', 'І']);

export function renderLapkoiText(text: string) {
  return Array.from(text).map((char, index) =>
    reducedLapkoiLetters.has(char) ? (
      <span key={`${char}-${index}`} className="lapkoi-small-i">
        {char}
      </span>
    ) : (
      char
    ),
  );
}
