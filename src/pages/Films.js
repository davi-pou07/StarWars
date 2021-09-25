import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {
    SafeAreaView,
    Text,
    View,
    FlatList
} from 'react-native';
import { styles } from '../styles/styles';
import {bindActionCreators} from "redux";
import {list_films} from "../store/actions/films_actions";

const mapStateToProps = (state) => {
    return {
        films: state.films.list,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({list_films}, dispatch);

const Films = connect(mapStateToProps,mapDispatchToProps)((props) => {
    const list_films = props.list_films;

    useEffect(() => {
        list_films();
    }, [list_films]);

    const Item = ({ title }) => (
        <View>
            <Text>{title}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={props.films}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item.title} />}
            />
        </SafeAreaView>
    );
});

export default Films;