import axios from 'axios';

axios.defaults.baseURL = 'https://6574665df941bda3f2afb2f5.mockapi.io/api/v1/';


export const fetchHome = async () => {
  console.log('1.1 - це - axios -');
  const response = await axios.get('/data_auto');
  console.log('1.2 - це - axios -', response);
return response.data;
};

// export const fetchQuizzes = async () => {
//   const response = await axios.get('/quizzes');
//   return response.data;
// };

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://6574665df941bda3f2afb2f5.mockapi.io/api/v1/';

// export const setAdverts = createAsyncThunk(
//   'catalog/fetchAdverts',
//   async (page, thunkAPI) => {
//     try {
//       const res = await axios.get('/data_auto', {
//         params: { page: page, limit: 4 },
//       });

//       console.log('operations ', res.data);

//       return res.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const setAllAdverts = createAsyncThunk(
//   'catalog/fetchAllAdverts',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get('/data_auto');
//       return res.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
