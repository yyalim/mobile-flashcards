import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reactotron from '../ReactotronConfig'

const middleware = applyMiddleware(thunk)

export default compose(middleware, Reactotron.createEnhancer())