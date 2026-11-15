import { 
  ref,
  get,
  set,
  update,
  remove,
  push
} from 'firebase/database'
import { db, firebaseConfigured } from './firebase'
import { Website } from './types'

const NOT_CONFIGURED = new Error(
  'Firebase is not configured. Add the NEXT_PUBLIC_FIREBASE_* environment variables.'
)

// Database helper functions for Realtime Database
export const firebaseDb = {
  // Get all data from a path
  async select<T>(path: string): Promise<{ data: T[] | null; error: any }> {
    if (!firebaseConfigured) {
      return { data: [], error: null }
    }
    try {
      const snapshot = await get(ref(db, path))
      
      if (!snapshot.exists()) {
        return { data: [], error: null }
      }
      
      const val = snapshot.val();
      
      if (!val) {
        return { data: [], error: null }
      }
      
      // Convert Firebase object structure to array
      const data = Object.entries(val).map(([id, value]) => ({
        id,
        ...(typeof value === 'object' && value !== null ? value : {})
      })) as T[]
      
      return { data, error: null }
    } catch (error: any) {
      console.error(`Error fetching ${path}:`, error)
      return { data: null, error }
    }
  },

  // Add a new item
  async insert<T>(path: string, data: Omit<T, 'id'>): Promise<{ data: T | null; error: any }> {
    if (!firebaseConfigured) {
      return { data: null, error: NOT_CONFIGURED }
    }
    try {
      const itemData = {
        ...data,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
      
      // Generate a unique key for the new item using Firebase's push
      const newItemRef = push(ref(db, path), itemData)
      
      // Extract the generated ID from the reference path
      const id = newItemRef.key || ''
      const result = { id, ...itemData } as T
      
      return { data: result, error: null }
    } catch (error: any) {
      console.error(`Error adding item to ${path}:`, error)
      return { data: null, error }
    }
  },

  // Update an item
  async update<T>(path: string, id: string, updates: Partial<T>): Promise<{ data: T | null; error: any }> {
    if (!firebaseConfigured) {
      return { data: null, error: NOT_CONFIGURED }
    }
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
    if (!firebaseConfigured) {
      return { error: NOT_CONFIGURED }
    }
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