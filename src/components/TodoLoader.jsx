import React from 'react'

export const TodoLoader = () => {
  return (
         <div className="group flex justify-between py-3 px-2.5 rounded-lg hover:bg-gray-400 ">
  <p>Loading Your Task will appear here ... please wait </p>
  <section className=" gap-4 hidden group-hover:flex">
  </section>
</div>
  )
}
