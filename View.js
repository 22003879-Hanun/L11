import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    listStyle: {
        borderWidth: 1,
    },
});



const ViewData = ({navigation}) => {
    const [myData, setMyData] = useState([]);


    useEffect( () => {

        fetch("https://e6b2961e95634cd7b6738cc7575524f4.api.mockbin.io/\n")
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {

                setMyData(myJson);

            });

    }, []);

    const renderItem = ({item, index, section}) => {
        return (
            <View style={styles.listStyle}>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
                <Text>{item.num}</Text>
            </View>
        );
    };

    return (
        <View>
            <StatusBar/>
            <FlatList data={myData} renderItem={renderItem}/>
        </View>
    );
};

export default ViewData;
