import { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import SendIcon from '../../components/SendIcon.tsx';
 



export default function Header() {
   const [liked, setLiked] = useState(false);
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
         justifyContent: 'space-between'
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