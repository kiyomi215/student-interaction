import {createStore} from 'redux';
import students from './reducers/students';
export default createStore(students);