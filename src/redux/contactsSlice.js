import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, { payload }) {
      return [...state, payload];
    },
    deleteContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
    updateContact(state, { payload }) {
      return [...state, payload];
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
