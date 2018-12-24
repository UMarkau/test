import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import Table from '../components/Table';
import properties$ from '../mock';
import '../styles/App.css';

class App extends Component {

    componentDidMount() {
        const mappedData = new Map();
        properties$.subscribe((data) => {
            this.props.dataUploading(data, mappedData);
        });
    };

    handleChangeFavorite = id => {
        const {favorites} = this.props;
        favorites.some(item => item.id === id) ? this.props.removeFromFavorites(id) : this.props.addToFavorites(id);  
    };

    render() {
        const { commonData } = this.props;
        return (
            <div className="app">
                <Table
                    data={commonData}
                    onChangeFavorite={this.handleChangeFavorite}
                />
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        commonData: state.commonData,
        favorites: state.favorites
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dataUploading: (data, mappedData) => dispatch(actions.dataUploading(data, mappedData)),
        addToFavorites: (id) => dispatch(actions.addToFavorites(id)),
        removeFromFavorites: (id) => dispatch(actions.removeFromFavorites(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
