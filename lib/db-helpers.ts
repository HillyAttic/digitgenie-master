'use client'

import { db } from './firebase'
import { 
  ref,
  get,
  set,
  update,
  remove,
  push
} from 'firebase/database'
import { Website } from './types'

// Database helper functions
export const dbHelpers = {
  // Get all data from a path
  async select<T>(path: string): Promise<{ data: T[] | null; error: any }> {
    try {
      console.log('Fetching data from path:', path);
      const snapshot = await get(ref(db, path))
      console.log('Snapshot exists:', snapshot.exists());
      
      if (!snapshot.exists()) {
        console.log('No data found at path:', path);
        return { data: [], error: null }
      }
      
      const val = snapshot.val();
      console.log('Raw data from Firebase:', val);
      
      if (!val) {
        console.log('No value in snapshot');
        return { data: [], error: null }
      }
      
      // Handle the case where val might not be an object
      if (typeof val !== 'object' || val === null) {
        console.log('Value is not an object or is null');
        return { data: [], error: null }
      }
      
      // Check if val has keys
      const keys = Object.keys(val);
      console.log('Keys in snapshot:', keys);
      
      if (keys.length === 0) {
        console.log('No keys found in snapshot');
        return { data: [], error: null }
      }
      
      // Convert Firebase object structure to array
      // Firebase stores data as objects with keys, we need to convert to array
      const data = Object.entries(val).map(([id, value]) => ({
        id,
        ...(typeof value === 'object' && value !== null ? value : {})
      })) as T[]
      
      console.log('Processed data:', data);
      return { data, error: null }
    } catch (error: any) {
      console.error(`Error fetching ${path}:`, error)
      return { data: null, error }
    }
  },

  // Add a new item
  async insert<T>(path: string, data: Omit<T, 'id'>): Promise<{ data: T | null; error: any }> {
    try {
      const itemData = {
        ...data,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
      
      console.log('Inserting data into path:', path);
      console.log('Data to insert:', itemData);
      
      // Generate a unique key for the new item using Firebase's push
      const newItemRef = push(ref(db, path), itemData)
      console.log('New item ref:', newItemRef.key);
      
      // Extract the generated ID from the reference path
      const id = newItemRef.key || ''
      const result = { id, ...itemData } as T
      
      console.log('Inserted item with ID:', id);
      console.log('Inserted item data:', result);
      
      // Verify the data was inserted
      const verifySnapshot = await get(ref(db, `${path}/${id}`));
      console.log('Verification - Data at path:', `${path}/${id}`, verifySnapshot.val());
      
      return { data: result, error: null }
    } catch (error: any) {
      console.error(`Error adding item to ${path}:`, error)
      return { data: null, error }
    }
  },

  // Update an item
  async update<T>(path: string, id: string, updates: Partial<T>): Promise<{ data: T | null; error: any }> {
    try {
      const updateData = {
        ...updates,
        updated_at: new Date().toISOString()
      }
      
      const itemRef = ref(db, `${path}/${id}`)
      await update(itemRef, updateData)
      
      // Read the updated data to return it
      const snapshot = await get(itemRef)
      const updatedItem = { id, ...snapshot.val() } as T
      
      return { data: updatedItem, error: null }
    } catch (error: any) {
      console.error(`Error updating item in ${path}:`, error)
      return { data: null, error }
    }
  },

  // Delete an item
  async delete(path: string, id: string): Promise<{ error: any }> {
    try {
      const itemRef = ref(db, `${path}/${id}`)
      await remove(itemRef)
      return { error: null }
    } catch (error: any) {
      console.error(`Error deleting item from ${path}:`, error)
      return { error }
    }
  }
}