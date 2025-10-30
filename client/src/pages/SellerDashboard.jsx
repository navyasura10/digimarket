import React, { useState } from 'react';
import axios from '../services/api';
export default function SellerDashboard(){ 
  const [form, setForm] = useState({ title:'', description:'', price:0 });
  const [file, setFile] = useState(null);
  async function submit(e){ e.preventDefault(); const token=localStorage.getItem('token'); if(!token){ alert('Login as seller'); return } const data = new FormData(); data.append('title', form.title); data.append('description', form.description); data.append('price', form.price); if(file) data.append('file', file); try{ const r = await axios.post('/products', data, { headers: { Authorization: `Bearer ${token}`,'Content-Type':'multipart/form-data' } }); alert('Created'); } catch(e){ alert('Error') } }
  return (<div className='container py-8'><div className='max-w-lg mx-auto bg-white p-6 rounded shadow'><h2 className='text-xl font-bold mb-4'>Seller dashboard</h2><form onSubmit={submit} className='flex flex-col gap-3'><input className='p-2 border rounded' placeholder='Title' value={form.title} onChange={e=>setForm({...form,title:e.target.value})} /><textarea className='p-2 border rounded' placeholder='Description' value={form.description} onChange={e=>setForm({...form,description:e.target.value})} /><input className='p-2 border rounded' placeholder='Price in paise' type='number' value={form.price} onChange={e=>setForm({...form,price:Number(e.target.value)})} /><input type='file' onChange={e=>setFile(e.target.files[0])} /><button className='mt-2 bg-green-600 text-white py-2 rounded'>Create product</button></form></div></div>);
}
