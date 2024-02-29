import React, { useState } from 'react'
import Icon from '../utilities/Icon'
import { Modal } from 'antd'
import ModalTask from './ModalTask';

export default function Card({ task = {} }) {

    const [openModal, setOpenModal] = useState(false);
    const [taskSelected, setTaskSelected] = useState(null);
    return (
        <>
            <div className='text-sm bg-white m-[2%] rounded-2xl' >
                <div className='px-[4%] pt-[4%] text-base font-bold flex justify-between'>
                    <span>{task.task_name}</span>
                    <span className='mx-[3%]'><Icon.Points onClick={() => { setTaskSelected(task), setOpenModal(true) }} /></span>
                </div>
                <div className='px-[4%] pb-[4%] text-sm'>
                    Fecha_entrega: {task.fecha_entrega}
                </div>
                <div className='px-[4%] pb-[4%] text-base'>
                    {task.task_description}
                </div>
            </div>

            <Modal
                open={openModal}
                onCancel={() => { setOpenModal(false), setTaskSelected(null) }}
                centered
                footer={null}
                title={<div className='flex justify-center'>{'Editar'} Tarea</div>}
            >
                <ModalTask data={taskSelected} onClose={() => { setOpenModal(false), setTaskSelected(null) }} />
            </Modal>
        </>

    )
}
