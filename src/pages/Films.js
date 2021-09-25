import React from 'react';
import {connect} from "react-redux";
import {
    SafeAreaView,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { styles } from '../styles/styles';
import {bindActionCreators} from "redux";
import {list_films} from "../store/actions/films_actions";


const mapStateToProps = (state) => {
    return {
        films: state.films.list,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    list_films}, dispatch);


const Films = connect(mapStateToProps,mapDispatchToProps)((props) => {
    console.log('props: ', props);
    return (
        <SafeAreaView style={styles.container}>
            <Text>Filmes</Text>
            {props.films.list}
        </SafeAreaView>
    );
});

export default Films;