import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import SendIcon from '../../components/SendIcon.tsx';
 



export default function Header() {

    return(

        <View style={ styles.header}>
            
            <TouchableOpacity>
                <Image
                source={require('../img/logoVH.png')}
                style={ styles.logo}
                />
            </TouchableOpacity>
            <TouchableOpacity  style={ styles.send }>
                <SendIcon />
                
            </TouchableOpacity>

            
            
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
         height: 55,
         backgroundColor: '#FFF',
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-between',
         borderBottomWidth: 0.9,
         borderColor: '#7b2cff',
         shadowColor: '#000',
         elevation: 2
    },
    logo: {
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 10
       
    },
    send: {
       
        marginRight: 10
    }
})