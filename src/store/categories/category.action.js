import { createAction } from '../../utils/firebase/reducer/reducer.utils';
import CATEGORIES_ACTION_TYPES from './category.types';


export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess= (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCES, categoriesArray)

export const fetchCategoriesFailure = (error) => createAction(CATEGORIES_ACTION_TYPES.FAILURE, error)




