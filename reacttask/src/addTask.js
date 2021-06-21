import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Form, FormGroup, Label, Input, Button, Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'

async function submitTask(credetials) {
    return fetch("https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38", {
        method: "POST",
        data:credetials,
        headers: {
            'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQwMDYwMDUsIm5iZiI6MTYyNDAwNjAwNSwianRpIjoiM2Q0YWM2ZGYtMDc4OC00NjIwLWIxZDAtNDM4YjgxM2E2OTY4IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.VB669RfV2l5RycCifHllIWTiMLBSPPbot2djEmoZrCE',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:{
            assigned_user:"user_6beec459915f4507a8d2520e60e03c3e",
           
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

function AddTask() {
    const [task_msg, setTask_msg] = useState('')
    const [time_zone, setTime_zone] = useState('')
    const [task_date, setTask_date] = useState('')
    const [task_time, setTask_time] = useState('')
    const [is_completed, setIs_completed] = useState('')

    function handleTaskmsg(e) {
        setTask_msg(e.target.value)
    }

    function handleTimeZone(e) {
        setTime_zone(e.target.value)
    }

    function handleTaskDate(e) {
        setTask_date(e.target.value)
    }

    function handleTaskTime(e) {
        setTask_time(e.target.value)
    }

    function handleIsCompleted(e){
            setIs_completed(e.target.value)
        }

    async function handleSubmit(event){
        event.preventdefault();
              await submitTask({
                   task_msg,
                   time_zone,
                   task_date,
                   task_time,
                   is_completed
               })
    }  
    const [task, setTask] = useState()


    useEffect(() => {
        fetch("https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38", {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQwMDYwMDUsIm5iZiI6MTYyNDAwNjAwNSwianRpIjoiM2Q0YWM2ZGYtMDc4OC00NjIwLWIxZDAtNDM4YjgxM2E2OTY4IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.VB669RfV2l5RycCifHllIWTiMLBSPPbot2djEmoZrCE',
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }
        })
            .then(res => res.json())
            .then(res => setTask(res.results))
    }, [])
    console.log(task)
    function refreshpage() {
        window.location.reload()
    }

    function DeleteTask() {
        axios.delete("https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/task_c6997e142f7f4d718adc3bd65891888e", {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQwMDYwMDUsIm5iZiI6MTYyNDAwNjAwNSwianRpIjoiM2Q0YWM2ZGYtMDc4OC00NjIwLWIxZDAtNDM4YjgxM2E2OTY4IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.VB669RfV2l5RycCifHllIWTiMLBSPPbot2djEmoZrCE',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res)
                refreshpage()
            })
            .then((err) => {
                console.log(err)
            })
    }

    // function handlesubmit(event) {
    //     event.preventdefault()
    //     // setPostData((postdata.task_date).format('YYYY-MM-DD'))
    //     AddData()
    // }
    // console.log(postdata)
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input type="text"
                        placeholder="description"
                        // name="task_msg"
                        value={task_msg}
                        onChange={handleTaskmsg} />
                </FormGroup>
                <FormGroup>
                    <br />
                    <Input type="number"
                        placeholder="timezone"
                        // name="time_zone"
                        value={time_zone}
                        onChange={handleTimeZone} />
                </FormGroup>
                <br></br>
                <FormGroup>
                    <Input type="date"
                        value={(task_date)}
                        // name="task_date"
                        onChange={handleTaskDate}
                    />
                </FormGroup>
                <br />
                <FormGroup>
                    <Input type="number"
                        placeholder="tasktime"
                        value={task_time}
                        // name="task_time"
                        onChange={handleTaskTime}
                    />
                </FormGroup>
                <br />
                <FormGroup>
                    <Input type="number"
                        placeholder="add 0 or 1"
                        value={is_completed}
                        // name="is_completed"
                        onChange={handleIsCompleted}
                    />
                </FormGroup>
                <br />
                {/* <FormGroup>
                    <Input type="text"
                        placeholder="assign user"
                        value={postdata.assigned_user}
                        name="assigned_user"
                        onChange={handleInput}
                    />
                </FormGroup> */}
                <br />
                <Button type="submit">Submit</Button>
            </Form>
            <br />
            <br />
            <Table>
                <thead>
                    <tr>
                        <th>description</th>
                        <th>date</th>
                        <th>time</th>
                        <th>Time zone</th>
                        <th>is_complete</th>
                        <th>assigned_user</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {task && task.map((item) => {
                        // console.log(item)
                        return (
                            <>
                                <tr>
                                    <td>{item.task_msg}</td>
                                    <td>{item.task_date}</td>
                                    <td>{item.task_time}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><FontAwesomeIcon icon={faEdit} /></td>
                                    <td><FontAwesomeIcon icon={faTrashAlt} onClick={DeleteTask} /></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default AddTask