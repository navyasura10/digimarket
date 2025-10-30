import React, { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';
export default function Register(){ 
  const [form, setForm] = useState({ name:'', email:'', password:'' });
  const nav = useNavigate();
  async function submit(e){ e.preventDefault(); try{ const r=await axios.post('/auth/register', form); localStorage.setItem('token', r.data.token); localStorage.setItem('user', JSON.stringify(r.data.user)); nav('/'); } catch(e){ alert('Register failed') } }
  return (<div className='container py-8'><div className='max-w-md mx-auto bg-white p-6 rounded shadow'><h2 className='text-xl font-bold mb-4'>Register</h2><form onSubmit={submit} className='flex flex-col gap-3'><input className='p-2 border rounded' placeholder='Name' value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /><input className='p-2 border rounded' placeholder='Email' value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /><input className='p-2 border rounded' type='password' placeholder='Password' value={form.password} onChange={e=>setForm({...form,password:e.target.value})} /><button className='mt-2 bg-indigo-600 text-white py-2 rounded'>Register</button></form></div></div>);
}
