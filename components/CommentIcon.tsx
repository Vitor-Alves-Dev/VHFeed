import { Path, Svg } from 'react-native-svg';

export default function CommentIcon() {
  return (
    <Svg width={28} height={28} viewBox="0 0 24 24">
      <Path
        d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"
        fill="none"
        stroke="#7b2cff"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  );
}