import { Button, Form, Input } from 'antd'
import React, { useContext, useRef } from 'react'
import { TaskContext } from '../context/TaskContext';


export default function ModalTask({ data = null, onClose }) {
    const { updateOrAddTask, deletedTask } = useContext(TaskContext);
    const formRef = useRef();


    const handleSubmit = (values) => {
        const newData = {
            ...data,
            task_description: values.task_description,
            task_name: values.task_name,
            fecha_entrega: values.fecha_entrega
        };
        updateOrAddTask(newData);
        formRef.current.resetFields();
        onClose(true);
    }

    const handleDeleted = (values) => {
        deletedTask({ id_task: data.id_task });
        formRef.current.resetFields();
        onClose(true);

    }

    return (
        <div>
            <Form
                ref={formRef}
                initialValues={data ? {
                    task_description: data.task_description,
                    task_name: data.task_name,
                    fecha_entrega: data.fecha_entrega
                } : null}
                onFinish={handleSubmit}
                layout='vertical'
            >
                <Form.Item name="task_name" label='Nombre tarea' rules={[{ required: true, message: "El campo es requerido" }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="task_description" label='Descripcion tarea' rules={[{ required: true, message: "El campo es requerido" }]}>
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item name="fecha_entrega" label='Fecha de entrega' rules={[{ required: true, message: "El campo es requerido" }]}>
                    <Input type="date" />
                </Form.Item>
                <div className='justify-end flex gap-3'>
                    <Button className='bg-red-600 text-white' onClick={() => handleDeleted(data.id_task)}>
                        Eliminar
                    </Button>
                    <Button htmlType='submit' type='default'>
                        Guardar
                    </Button>
                </div>
            </Form>
        </div>
    )
}
