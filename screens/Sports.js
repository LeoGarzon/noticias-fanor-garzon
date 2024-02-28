import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NativeBaseProvider, FlatList, Divider, Image, Spinner, Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { setNewsData } from '../actions/NewsActions';
import { services } from '../services/services';
import moment from 'moment'

export default function Sports({ navigation }) {
    const newsData = useSelector(state => state.news.newsData);
    const dispatch = useDispatch();

    useEffect(() => {
        services('Sports')
            .then(data => {
                dispatch(setNewsData(data));
            })
            .catch(error => {
                alert(error);
            });
    }, [dispatch]);
    
    return (
        <NativeBaseProvider>
    {newsData.length > 1 ? (
        <FlatList
            data={newsData}
            renderItem={({ item }) => (
                <View>
                    <View style={styles.newsContainer}>
                        <Image
                            style={styles.Image}
                            source={{ uri: item.urlToImage }}
                            alt={item.title}
                        />
                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                        <Text style={styles.date}>
                            {moment(item.publishedAt).format('LLL')}
                        </Text>
                        <Text style={styles.newsDescription}>
                            {item.description}
                        </Text>
                        <Button
                            onPress={() => {
                                navigation.navigate('WebView', { url: item.url });
                            }}
                        >
                            see full news
                        </Button>
                    </View>
                    <Divider my={2} bg="#e0e0e0" />
                </View>
            )}
            keyExtractor={(_item, index) => index.toString()}
        />
    ) : (
        <View style={styles.spinner}>
            <Spinner color="danger.400" />
        </View>
    )}
</NativeBaseProvider>


    )
}

const styles = StyleSheet.create({
    newsContainer: {
        padding: 10
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: "600"
    },
    newsDescription: {
        fontSize: 16,
        marginTop: 10
    },
    date: {
        fontSize: 14
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 400
    },

    Image: {
        width: '100%',
        height: 250,
        margin: 7
    }
});