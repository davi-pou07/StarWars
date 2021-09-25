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
import {list_peoples} from "../store/actions/peoples_actions";

const mapStateToProps = (state) => {
    return {
        peoples: state.peoples.list,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({list_peoples}, dispatch);

const Films = connect(mapStateToProps,mapDispatchToProps)((props) => {
    const list_peoples = props.list_peoples;

    useEffect(() => {
        list_peoples();
    }, [list_peoples]);

    const Item = ({ episode_id, title }) => (
        <View>
            <Text>{episode_id} - {title}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={props.peoples}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item.title} />}
            />
        </SafeAreaView>
    );
});

export default Films;