import { Dispatch } from "redux";
import axios from 'axios';

export const SAMPLE_TITLES:string = "SAMPLE_TITLES"
export const LOADING:string = "LOADING"



export interface Titles {
    type: typeof SAMPLE_TITLES
    payload: Object
  }

  export interface interfaceLoading { 
    type: typeof LOADING
  }



export const getSampleJson = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch<interfaceLoading>({type:LOADING})
      const list = await axios.get('sample.json')
      dispatch<Titles>({
        type: SAMPLE_TITLES,
        payload: list.data,
      });
    } catch (err) {
      console.error(err);
    }
  };    
}
