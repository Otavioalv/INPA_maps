// import React from 'react'
import { MapTiler } from '@/components/MapTiler/MapTiler'
import { useState } from 'react';
import { socket } from "@/services/infraSocketIO"
import { useEffect } from 'react';
// import styles from 'styles.module.css';

export const  App = () => {
  const [/* isConnected */, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }
    
    socket.on('connect', onConnect);
    
    return () => {
      socket.off('connect', onConnect);
    }
  }, []);



  return (
    <>
      <MapTiler/>
    </>
  )
}


