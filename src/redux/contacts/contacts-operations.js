import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getContacts = createAsyncThunk('contacts/get', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const updateContact = createAsyncThunk(
  'contacts/update',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const operations = {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
};
export default operations;
