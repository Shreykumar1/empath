import {  NextResponse } from 'next/server'

export async function POST(req) {
  const data = await req.json();
  const flaskResponse = await fetch('http://127.0.0.1:5000/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const flaskData = await flaskResponse.json();

  return NextResponse.json({ message: 'Success, data from next',data : flaskData });
}
