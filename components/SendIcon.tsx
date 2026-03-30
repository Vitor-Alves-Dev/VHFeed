import { Path, Svg } from 'react-native-svg';

export default function SendIcon() {
  return (
   
    <Svg width={35} height={24} viewBox="0 0 24 24">
      <Path
        d="M22 2L11 13"
        stroke="#7b2cff"
        strokeWidth={2}
        strokeLinecap="round"
        transform="rotate(40 7 5)"
      />
      <Path
        d="M22 2L15 22L11 13L2 9L22 2Z"
        fill="none"
        stroke="#7b2cff"
        strokeWidth={1.8}
        strokeLinejoin="round"
        transform="rotate(40 7 5)"
        
      />
    </Svg>
  );
}