import React,{ useEffect, useState } from 'react'
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Form ,FormGroup , Label, Input, Button,Table} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux'
function AddTask(){
    const dispatch = useDispatch()
    const [postdata , setPostData] = useState({})
    const [task , setTask] =useState([])

   function handleInput(e){
       setPostData({
           ...postdata,
           [e.target.name] :e.target.value
       })
   }


   useEffect(()=>{
      fetch("https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38",{
          method:"GET",
          headers:{
            'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQwMDYwMDUsIm5iZiI6MTYyNDAwNjAwNSwianRpIjoiM2Q0YWM2ZGYtMDc4OC00NjIwLWIxZDAtNDM4YjgxM2E2OTY4IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.VB669RfV2l5RycCifHllIWTiMLBSPPbot2djEmoZrCE',
            'Accept': 'application/json',
            'Content-Type': 'application/json'

          }
      })
      .then(res=>res.json())
      .then(res=>setTask(res.results))
   },[])

    function refreshpage(){
        window.location.reload()
    }

    function DeleteTask(){
      axios.delete("https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/task_773d44542f254b95acae8d32841df44b",{
       method:"DELETE",
       headers:{
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQwMDYwMDUsIm5iZiI6MTYyNDAwNjAwNSwianRpIjoiM2Q0YWM2ZGYtMDc4OC00NjIwLWIxZDAtNDM4YjgxM2E2OTY4IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.VB669RfV2l5RycCifHllIWTiMLBSPPbot2djEmoZrCE',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       }
   })
   .then((res) =>{
       console.log(res)
       refreshpage()
   })
   .then((err) =>{
       console.log(err)
   })
}
  
   
    return(
        <div>
            <Form>
                <FormGroup>
            <Input type="text"
                    placeholder="description"
                    name="description"
                    value={postdata.description}
                    onChange={handleInput}/>
                    </FormGroup>
                    <br></br>
                    <FormGroup>
            <Input type="date"
                   value={postdata.date}
                   name="date"
                   value={postdata.date}
                   onChange={handleInput}
            />
            </FormGroup>
            <br></br>
            <FormGroup>
            <Input type="time" 
                   name="time"
                   value={postdata.time}
                   onChange={handleInput}
            />
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
       
            <Table>
                <thead>
                    <tr>
                    <th>description</th>
                    <th>date</th>
                    <th>time</th>
                    </tr>
                </thead>
                <tbody>
                  {task && task.map((item) =>{
                      console.log(item)
                      return(
                          <>
                          <tr>
                              <td>{item.task_msg}</td>
                              <td>{item.task_date}</td>
                              <td>{item.task_time}</td>
                              <td><FontAwesomeIcon icon={faTrashAlt} onClick={DeleteTask}/></td>
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