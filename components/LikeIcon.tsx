import { StyleSheet } from 'react-native';
import { Path, Svg } from 'react-native-svg';

export default function LikeIcon({ liked }) {
    
  return (
    <Svg width={30} height={28} viewBox="0 0 24 24">
      <Path
        d="M12 21
           C12 21, 4 14, 4 9
           A4 4 0 0 1 8 5
           C10 5, 12 7, 12 7
           C12 7, 14 5, 16 5
           A4 4 0 0 1 20 9
           C20 14, 12 21, 12 21Z"
        fill={liked ? "#7b2cff" : "none"}
        stroke="#7b2cff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const styles = StyleSheet.create ({
  
})