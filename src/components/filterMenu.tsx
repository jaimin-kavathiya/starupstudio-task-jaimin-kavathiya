import { AccordionData } from '@/typings/accordion';
import Accordion from '@/utils/accordion';

function FilterMenu() {


  const filters: Array<AccordionData> = [
    {
      id: 1,
      title: "IDEAL FOR",
      isOpen: false,
      options: [
        "Men",
        "Women",
        "Baby & Kids"
      ]
    },
    {
      id: 2,
      title: "IDEAL FOR",
      isOpen: false,
      options: [
        "Men",
        "Women",
        "Baby & Kids"
      ]
    }
  ]

  return (
    <div className="h-screen w-full p-4">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        <Accordion data={filters}/>
      </div>
    </div>



  )
}

export default FilterMenu