// imports
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import UserCalendar from './calendar';


const items = [
   {
        label: 'TASK COMMANDER',
   }
]

// component code block & export
export default function Header({}){
    return(
        <>
           <Menubar model={items}/> 
        </>
    );
}
