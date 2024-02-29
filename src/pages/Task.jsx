import React, { useContext, useEffect, useState } from 'react';
import TypeTask from '../data/TypeTask';
import Icon from '../utilities/Icon';
import { TaskContext } from '../context/TaskContext';
import { Select, Modal, Input } from 'antd';
import ModalTask from '../components/ModalTask';
import Card from '../components/Card';

const { Option } = Select;

export default function Task() {
    const { task } = useContext(TaskContext);
    const [openModal, setOpenModal] = useState(false);
    const [taskSelected, setTaskSelected] = useState(null);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
    }, [task]);

    const typeFilteredTasks = task.filter(
        (tk) => selectedTypes.length === 0 || selectedTypes.includes(tk.id_tipo_task)
    );

    const textFilteredTasks = typeFilteredTasks.filter((tk) =>
        tk.task_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className='lg:mt-[5%] '>
                <div className='lg:flex lg:justify-center lg:gap-4'>
                    <div >
                        <Input.Search
                            className=''
                            placeholder="Buscar tareas ..."
                            onChange={(e) => setSearchQuery(e.target.value)}
                        /></div>
                    <div >
                        <Select
                            className={`lg:w-56 w-full mt-2 lg:mt-0`}
                            mode="multiple"
                            placeholder="Buscar estado ..."
                            value={selectedTypes}
                            onChange={(values) => setSelectedTypes(values)}
                        >
                            {TypeTask.map((type) => (
                                <Option key={type.id_tipo_task} value={type.id_tipo_task}>
                                    {type.name}
                                </Option>
                            ))}
                        </Select></div>
                </div>
                <span className='text-2xl font-bold flex justify-center lg:justify-start '>Task </span>
                <div className='lg:flex  gap-5 justify-between '>
                    {TypeTask.map((type) => (
                        <div
                            className='flex-1 bg-[#EEF2F5] mt-[2%] p-[1%] rounded-md '
                            key={type.id_tipo_task}
                        >
                            <div className='flex justify-between'>
                                <span className='m-2 font-bold'>{type.name}</span>
                                <span className='m-2 flex gap-4 '>
                                    <Icon.Add
                                        size={25} lg:className='cursor-pointer m-1'
                                        onClick={() => {
                                            setTaskSelected({
                                                id_tipo_task: type.id_tipo_task,
                                            });
                                            setOpenModal(true);
                                        }}
                                    />
                                </span>
                            </div>
                            <div>
                                {textFilteredTasks
                                    .filter((filteredTask) => filteredTask.id_tipo_task === type.id_tipo_task)
                                    .map((filteredTask) => (
                                        <Card key={filteredTask.id_task} task={filteredTask} />
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                open={openModal}
                onCancel={() => setOpenModal(false)}
                centered
                footer={null}
                title={<div className='lg:flex lg:justify-center'> Crear Tarea</div>}
            >
                <ModalTask data={taskSelected} onClose={(val) => (val && setOpenModal(false))} />
            </Modal>
        </>
    );
}
