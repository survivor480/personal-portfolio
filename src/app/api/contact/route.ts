import { db } from '../../firebase/client'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...data,
      createdAt: serverTimestamp()
    })
    return NextResponse.json({ id: docRef.id }, { status: 200 })
  } catch (error) {
    console.error('Error adding contact:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}