"use client"
import { useEffect, useState } from 'react';
import styles from '../styles/accordion.module.css';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AccordionData } from '@/typings/accordion';


export default function Accordion(props: { data: AccordionData[] }) {

  const [accordionData, setAccordionData] = useState<AccordionData[]>([]);

  useEffect(() => {
    if (props.data) {
      const accordions = props.data.map((accordion) => {
        accordion.isOpen = false;
        return accordion;
      });
      setAccordionData(accordions);
    }
  }, [props.data]);

  function toggle(id: number) {
    const accordions = accordionData.filter((accordion) => {
      if (accordion.id === id) {
        accordion.isOpen = !accordion.isOpen;
      }
      return accordion;

    });
    setAccordionData(accordions);
  }

  return (
    <div className='w-full'>
      {accordionData.map((accordion, i) => (
        <div className={styles["accordian-wrapper"]} key={accordion.id}>
          <div className={styles["title-container"]} onClick={() => toggle(accordion.id)}>
            <h5 className={styles["title"] + " font-bold" + accordion.links ? ' text-2xl' : ' text-md'}>
              {accordion.title}
            </h5>
            <div className={styles["icon"]} style={{ transform: accordion.isOpen ? "rotate(0deg)" : "rotate(180deg)" }}>
              <FontAwesomeIcon icon={faChevronUp} className='mr-1' />
            </div>
          </div>
          
          {
            accordion.links
              ? <div className={ accordion.isOpen ? styles["accordion-content-open"] : styles["accordion-content"]} >
                {accordion.links.map(link => <p key={link} className="py-2 text-lg font-normal text-white">{link}</p>)}
              </div>
              : <div className={accordion.isOpen ? styles["accordion-content-open"] : styles["accordion-content"]}>
                <p className='mb-2 text-md font-normal cursor-pointer'>All</p>
                <p className='mb-3 text-sm underline text-gray-400 font-light cursor-pointer'>Unselect All</p>
                {accordion.options?.map(option => <p key={option} className="flex items-center gap-2 mb-3 text-md font-normal cursor-pointer"> <input type="checkbox" className='w-[20px] h-[20px]' id={option} /> {option}</p>)}
              </div>}

        </div>
      ))}
    </div>
  );
}