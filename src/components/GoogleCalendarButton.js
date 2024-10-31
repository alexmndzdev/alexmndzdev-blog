import React, { useEffect, useRef } from 'react';

const GoogleCalendarButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Añade el CSS del botón de Google Calendar
    // const link = document.createElement('link');
    // link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    // link.rel = 'stylesheet';
    // document.head.appendChild(link);

    // Cargar el script de Google Calendar
    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    script.onload = () => {
      // Verifica si el script de calendar se cargó y ejecuta la función de inicialización
      if (window.calendar && window.calendar.schedulingButton) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1dxwb5zdnRFy6ubD2Coa4oPJDRMvH097gXLt9CsCjqEWGupIOcX3n6PtdzsUD27F1MnfDntkE3?gv=true',
          color: '#33B679',
          label: 'Programar una cita',
          target: buttonRef.current,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Limpieza para evitar duplicados al desmontar
      //document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={buttonRef}></div>;
};

export default GoogleCalendarButton;
