import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation, route }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.title}>Registration</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#888"
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#888"
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="#888"
                keyboardType="numeric"
                onChangeText={(text) => setNum(text)}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    let mydata = route.params && route.params.datastr ? JSON.parse(route.params.datastr) : [];
                    let item = { name: name, email: email, num: num };
                    mydata.push(item);

                    fetch("https://e6b2961e95634cd7b6738cc7575524f4.api.mockbin.io/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "AuthCode"
                        },
                        body: JSON.stringify(mydata)
                    })
                        .then(() => {
                            navigation.navigate("ViewData", { datastr: JSON.stringify(mydata) });
                        });
                }}
            >
                <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
        color: "#000",
    },
    input: {
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#fff",
        borderColor: "#ccc",
    },
    button: {
        backgroundColor: "#FF007F",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Home;
