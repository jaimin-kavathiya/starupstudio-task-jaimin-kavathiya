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
      title: "OCCASION",
      isOpen: false,
      options: [
        "Wedding",
        "Outing",
      ]
    },
    {
      id: 3,
      title: "WORK",
      isOpen: false,
    },
    {
      id: 4,
      title: "FABRIC",
      isOpen: false,
      options: [
        "Linnon",
        "Cotton"
      ]
    },
    {
      id: 5,
      title: "SEGMENT",
      isOpen: false,
    },
    {
      id: 6,
      title: "SUITABLE FOR",
      isOpen: false,
    },
    {
      id: 7,
      title: "RAW MATERIALS",
      isOpen: false,
    },
    {
      id: 8,
      title: "PATTERN",
      isOpen: false,

    },
  ]

  return (
    <div className="h-screen w-full p-4">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        <Accordion data={filters} />
      </div>
    </div>



  )
}

export default FilterMenu