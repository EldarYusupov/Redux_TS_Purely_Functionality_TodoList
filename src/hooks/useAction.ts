import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import  ActionCreators from '../store/action'


export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}






