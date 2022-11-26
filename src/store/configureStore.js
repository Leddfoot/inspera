import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

export default function configureStore() {
    const store = createStore(rootReducer);
    console.log(store.getState());
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
    }
    return store;
}

