import React, { useState, useEffect } from 'react'

import {projectsNav} from './Data'
import {projectsData} from './Data'
import ProjectIndividual from './ProjectIndividual';


function Project() {


    const [item, setItems] = useState({ name: 'all' });
    const [projects, setProjects] = useState([] as any);
    const [active, setActive] = useState(0);
    console.log(projects)

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((projects) => {
                return (
                    projects.category.toLocaleLowerCase() === item.name);
            }
            );
            setProjects(newProjects);
        }
        
    },[item]);
    

    

    const handleClick = (e:any, index:any) => {
        setItems({ name: e.target.textContent.toLowerCase() });
        setActive(index);
      };
      
    console.log(item)
    console.log(active)

  return (
    <div>
        <nav className="mb-12 mt-7 max-w-xl mx-auto">
            <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
                {projectsNav.map((item,index) => {
                    return(
                        <li
                            onClick={(e) =>{
                                handleClick(e,index)
                            }}
                            className={`${
                                active === index ? 'active' : ''
                              } cursor-pointer hover:bg-[hsla(0,0%,100%,.12)] rounded-lg p-3 mx-3 text-base md:text-lg font-semibold capitalize m-4`}
                              key={index}
                        >{item.name}</li>
                    );
                })}
            </ul>
        </nav>
        <section className='grid gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-8'>
            {projects.map((item:any) => {
                return <ProjectIndividual item={item} key={item.id} />;
            })}
        </section>
    </div>
  );
};

export default Project