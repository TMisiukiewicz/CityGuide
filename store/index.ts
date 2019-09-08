import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { mapStateToProps, mapDispatchToProps } from './mapToProps';

export const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export {
    mapStateToProps,
    mapDispatchToProps
};