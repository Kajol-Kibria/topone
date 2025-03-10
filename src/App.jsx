import React, { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Agents from './components/Agents';
import AgentSignIn from './components/AgentSignIn';
import Tickets from './components/Tickets';



export default function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/agents" element={<Agents/>} />
      <Route path="/" element={<AgentSignIn/>} />
      <Route path="/tickets" element={<Tickets/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
